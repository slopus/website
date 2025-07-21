# Public Assets

This directory contains static assets that will be served directly by Next.js.

## Current Files

- `rafty-logo.svg` - Rafty logo used in the landing page
- `app-1.png` - App screenshot for the landing page
- `riding-bg.mp4` - Background video for the landing page

## Usage

Place your static files directly in this directory:
- Images: `logo.png`, `hero-image.jpg`, etc.
- Videos: `background.mp4`, `demo.webm`, etc.
- Icons: `favicon.ico`, `apple-touch-icon.png`, etc.
- Other static files: `robots.txt`, `sitemap.xml`, etc.

## Access

Files in this directory can be accessed directly:
- `/public/logo.png` → `https://yoursite.com/logo.png`
- `/public/video.mp4` → `https://yoursite.com/video.mp4`

## Best Practices

- Use descriptive filenames
- Optimize images for web (WebP format recommended)
- Optimize videos for web (H.264 codec recommended)
- Include alt text for accessibility when using images
- Keep file sizes minimal for better performance 