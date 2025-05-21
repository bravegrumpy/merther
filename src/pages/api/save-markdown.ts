import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

export const POST: APIRoute = async ({ request }) => {
  try {
    // In a real app, check authentication here
    // if (!isAuthenticated(request)) {
    //   return new Response('Unauthorized', { status: 401 });
    // }

    const { collection, filename, content } = await request.json();
    
    // Validate inputs
    if (!collection || !filename || !content) {
      return new Response('Missing required fields', { status: 400 });
    }
    
    // Prevent directory traversal attacks
    if (filename.includes('..') || collection.includes('..')) {
      return new Response('Invalid filename or collection', { status: 400 });
    }
    
    // Map collection names to their directory paths
    const collectionPaths = {
      misunderstood: 'src/misunderstood/chapters',
      misunderstood_summary: 'src/misunderstood/summaries',
      misunderstood_notes: 'src/misunderstood/notes',
      misunderstood_endnotes: 'src/misunderstood/endnotes',
      muses: 'src/muses',
      microblog: 'src/other_stuff/posts',
      gallery_ai: 'src/other_stuff/gallery/gen_ai',
      llorem_ipsum: 'src/llorem_ipsum'
    };
    
    // Get the directory for the selected collection
    const collectionDir = collectionPaths[collection];
    if (!collectionDir) {
      return new Response(`Unknown collection: ${collection}`, { status: 400 });
    }
    
    // Ensure the filename has .md extension
    const finalFilename = filename.endsWith('.md') ? filename : `${filename}.md`;
    const filePath = path.join(process.cwd(), collectionDir, finalFilename);
    
    // Create directory if it doesn't exist
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    
    // Write the file
    await fs.writeFile(filePath, content, 'utf-8');
    
    return new Response(JSON.stringify({ success: true, path: filePath }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error saving markdown:', error);
    return new Response(`Server error: ${error.message}`, { status: 500 });
  }
};
