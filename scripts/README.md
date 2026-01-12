# Mode Manager Scripts

This directory contains scripts to manage switching between different build modes (SSR, SSG, default).

**Important:** The `default/` directory is the **source of truth**. All other mode directories (ssr/, ssg/) are copies that can be updated from default. When resetting or switching to default mode, files are copied from `default/` to the root `src/` directory.

## Usage

### From package.json scripts:
- `npm run reset` - Reset to default mode (copies from default/ to src/)
- `npm run build:ssr` - Build in SSR mode
- `npm run dev:ssr` - Run dev server in SSR mode
- `npm run preview:ssr` - Preview in SSR mode
- `npm run build:ssg` - Build in SSG mode
- `npm run dev:ssg` - Run dev server in SSG mode
- `npm run preview:ssg` - Preview in SSG mode
- `npm run update:ssr` - Update SSR mode files from default (source of truth)
- `npm run update:ssg` - Update SSG mode files from default (source of truth)

### Direct script usage:
```bash
node scripts/mode-manager.js switch <mode>    # Switch to a mode (ssr, ssg, default)
node scripts/mode-manager.js reset            # Reset to default mode (source of truth)
node scripts/mode-manager.js build <mode>     # Build in a specific mode
node scripts/mode-manager.js dev <mode>       # Run dev server in a specific mode
node scripts/mode-manager.js preview <mode>  # Preview in a specific mode
node scripts/mode-manager.js update <mode>   # Update mode directory from default
```

## How It Works

1. **Default is Source of Truth**: The `default/` directory contains the canonical versions of all files. When you make changes, edit files in `default/`.

2. **Mode Switching**: When switching to a mode (ssr, ssg), files are copied FROM the mode directory (e.g., `ssr/`) TO the root `src/` directory.

3. **Resetting**: The `reset` command (equivalent to old `dynamic:reset`) copies files FROM `default/` TO `src/`, ensuring you're always working with the source of truth.

4. **Updating Modes**: The `update` command copies files FROM `default/` TO the mode directory (e.g., `ssr/`), updating the mode-specific copies with changes from the source of truth.

## Adding New Modes

To add a new mode (e.g., "hybrid"):

1. Create a new directory (e.g., `hybrid/`) with the mode-specific files
2. Add the mode configuration to `mode-config.json`:

```json
{
  "modes": {
    "hybrid": {
      "sourceDir": "hybrid",
      "files": [
        {
          "from": "hybrid/astro.config.mjs",
          "to": "astro.config.mjs"
        },
        // Add more file operations as needed
      ],
      "removeFiles": []  // Optional: files to remove when switching to this mode
    }
  },
  "updateOperations": {
    "hybrid": {
      "files": [
        // Define how to update this mode from default
      ]
    }
  }
}
```

3. Add npm scripts to `package.json`:
```json
{
  "build:hybrid": "node scripts/mode-manager.js build hybrid",
  "dev:hybrid": "node scripts/mode-manager.js dev hybrid",
  "preview:hybrid": "node scripts/mode-manager.js preview hybrid",
  "update:hybrid": "node scripts/mode-manager.js update hybrid"
}
```

## Configuration File Structure

### File Operations
- `from`: Source file/directory path (relative to project root)
- `to`: Destination file/directory path (relative to project root)
- `glob`: If true, treats `from` as a glob pattern (e.g., `*.astro`)
- `recursive`: If true, copies directories recursively

### Update Operations
- `addComment`: Adds a comment line at the top of the file
- `addFrontmatter`: Adds frontmatter (`---`) at the beginning (for .astro files)

## Cross-Platform Support

The script works in both Git Bash and PowerShell on Windows, as well as on Linux/macOS.
