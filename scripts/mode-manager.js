#!/usr/bin/env node

/**
 * Cross-platform mode manager for switching between SSR, SSG, and default modes
 * Works in both Git Bash and PowerShell on Windows
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync, cpSync, readdirSync, statSync } from 'fs';
import { join, dirname, basename, relative } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Load configuration
const configPath = join(__dirname, 'mode-config.json');
const config = JSON.parse(readFileSync(configPath, 'utf-8'));

/**
 * Copy files based on configuration
 * 
 * IMPORTANT: "default" is the source of truth. When switching to default mode,
 * files are copied FROM default/ TO src/ directory. For other modes (ssr, ssg),
 * files are copied FROM the mode directory TO src/ directory.
 */
async function copyFiles(mode, operation = 'switch') {
  const modeConfig = config.modes[mode];
  if (!modeConfig) {
    console.error(`Unknown mode: ${mode}`);
    process.exit(1);
  }
  
  if (mode === 'default') {
    console.log('Copying from DEFAULT (source of truth) to src/ directory...');
  } else {
    console.log(`Copying from ${mode.toUpperCase()} mode directory to src/ directory...`);
  }

  // Remove files if specified (e.g., middleware.ts for SSG)
  if (modeConfig.removeFiles) {
    for (const file of modeConfig.removeFiles) {
      const filePath = join(rootDir, file);
      if (existsSync(filePath)) {
        rmSync(filePath, { recursive: true, force: true });
        console.log(`Removed: ${file}`);
      }
    }
  }

  // Copy files
  for (const fileOp of modeConfig.files) {
    const fromPath = join(rootDir, fileOp.from);
    const toPath = join(rootDir, fileOp.to);

    if (fileOp.glob) {
      // Handle glob patterns (e.g., "ssr/src/pages/misunderstood/simple/*")
      const globPattern = fileOp.from;
      const baseDir = globPattern.replace(/\*.*$/, '');
      const basePath = join(rootDir, baseDir);
      
      if (!existsSync(basePath)) {
        console.warn(`Base directory not found: ${basePath}`);
        continue;
      }

      // Ensure destination directory exists
      const destDir = fileOp.to.endsWith('/') ? toPath : dirname(toPath);
      if (!existsSync(destDir)) {
        mkdirSync(destDir, { recursive: true });
      }

      // Copy all contents from source directory
      const files = readdirSync(basePath);
      
      if (files.length === 0) {
        console.warn(`No files found in: ${basePath}`);
        continue;
      }

      for (const file of files) {
        const sourcePath = join(basePath, file);
        const destPath = join(destDir, file);
        
        cpSync(sourcePath, destPath, { 
          recursive: fileOp.recursive || statSync(sourcePath).isDirectory(), 
          force: true 
        });
        console.log(`Copied: ${relative(rootDir, sourcePath)} -> ${relative(rootDir, destPath)}`);
      }
    } else {
      // Handle single file
      if (!existsSync(fromPath)) {
        console.warn(`Source file not found: ${fromPath}`);
        continue;
      }

      // Ensure destination directory exists
      const destDir = dirname(toPath);
      if (!existsSync(destDir)) {
        mkdirSync(destDir, { recursive: true });
      }

      cpSync(fromPath, toPath, { recursive: true, force: true });
      console.log(`Copied: ${fromPath} -> ${toPath}`);
    }
  }
}

/**
 * Update mode directory from default with comment injection
 * 
 * This copies files FROM default/ (source of truth) TO the mode directory (e.g., ssr/),
 * adding mode-specific comments and frontmatter as needed.
 */
async function updateMode(mode) {
  const updateOps = config.updateOperations[mode];
  if (!updateOps) {
    console.error(`No update operations defined for mode: ${mode}`);
    process.exit(1);
  }
  
  console.log(`Updating ${mode.toUpperCase()} mode from DEFAULT (source of truth)...`);

  for (const fileOp of updateOps.files) {
    const fromPath = join(rootDir, fileOp.from);
    const toPath = join(rootDir, fileOp.to);

    if (!existsSync(fromPath)) {
      console.warn(`Source file not found: ${fromPath}`);
      continue;
    }

    // Read source file
    let content = readFileSync(fromPath, 'utf-8');
    const lines = content.split('\n');

    // Remove first line (matching sed -i 1s/.*// behavior)
    if (lines.length > 0) {
      lines.shift();
    }

    // Add comment if specified
    if (fileOp.addComment) {
      lines.unshift(fileOp.addComment);
    }

    // Handle frontmatter addition (for .astro files)
    if (fileOp.addFrontmatter) {
      lines.unshift('---');
    }

    content = lines.join('\n');

    // Ensure destination directory exists
    const destDir = dirname(toPath);
    if (!existsSync(destDir)) {
      mkdirSync(destDir, { recursive: true });
    }

    // Write to destination
    writeFileSync(toPath, content, 'utf-8');
    console.log(`Updated: ${toPath}`);
  }
}

/**
 * Run a command in a specific mode
 */
async function runCommand(mode, command, resetAfter = false) {
  console.log(`\n=== Switching to ${mode.toUpperCase()} mode ===`);
  await copyFiles(mode);

  console.log(`\n=== Running: ${command} ===`);
  try {
    execSync(command, { 
      stdio: 'inherit', 
      cwd: rootDir,
      shell: process.platform === 'win32' ? 'cmd.exe' : '/bin/bash'
    });
  } catch (error) {
    console.error(`Command failed: ${command}`);
    if (resetAfter) {
      console.log(`\n=== Resetting to default mode ===`);
      await copyFiles('default');
    }
    process.exit(1);
  }

  if (resetAfter) {
    console.log(`\n=== Resetting to default mode ===`);
    await copyFiles('default');
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const command = args[0];
const mode = args[1];
const subCommand = args[2];

if (!command) {
  console.error(`
Usage:
  node mode-manager.js switch <mode>           Switch to a mode (ssr, ssg, default)
  node mode-manager.js reset                   Reset to default mode (source of truth)
  node mode-manager.js build <mode>            Build in a specific mode
  node mode-manager.js dev <mode>               Run dev server in a specific mode
  node mode-manager.js preview <mode>          Preview in a specific mode
  node mode-manager.js update <mode>            Update mode directory from default

Modes: ssr, ssg, default
Note: "default" is the source of truth - all other modes copy from their directories to src/
  `);
  process.exit(1);
}

// Execute command
(async () => {
  try {
    switch (command) {
      case 'switch':
        if (!mode) {
          console.error('Mode required for switch command');
          process.exit(1);
        }
        await copyFiles(mode);
        console.log(`\n✓ Switched to ${mode.toUpperCase()} mode`);
        break;

      case 'reset':
        // Reset to default mode (source of truth)
        await copyFiles('default');
        console.log(`\n✓ Reset to DEFAULT mode (source of truth)`);
        break;

      case 'build':
        if (!mode) {
          console.error('Mode required for build command');
          process.exit(1);
        }
        await runCommand(mode, 'pnpm run build', true);
        break;

      case 'dev':
        if (!mode) {
          console.error('Mode required for dev command');
          process.exit(1);
        }
        await runCommand(mode, 'pnpm run dev', false);
        break;

      case 'preview':
        if (!mode) {
          console.error('Mode required for preview command');
          process.exit(1);
        }
        await runCommand(mode, 'pnpm run preview', false);
        break;

      case 'update':
        if (!mode) {
          console.error('Mode required for update command');
          process.exit(1);
        }
        await updateMode(mode);
        console.log(`\n✓ Updated ${mode.toUpperCase()} mode from default`);
        break;

      default:
        console.error(`Unknown command: ${command}`);
        process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
})();
