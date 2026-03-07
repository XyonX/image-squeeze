# GetImgTools

Free online image tools — compress, resize, convert, and edit images directly in your browser. 100% private, no signup required.

**Live:** [https://getimgtools.com](https://getimgtools.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Hosting:** Cloudflare Workers via OpenNext
- **Styling:** Tailwind CSS v4
- **Image Processing:** Canvas API, browser-image-compression, Web Workers
- **Icons:** Lucide React

## Tools

| Category | Tools |
|----------|-------|
| Compress | JPG, PNG, WebP (soon), Bulk (soon), Reduce Size (soon) |
| Convert | to WebP, to JPG, to PNG, SVG to PNG |
| Edit & Utility | Resize, Rotate/Flip, Crop (soon), Remove EXIF, Image to Base64 |

All processing happens client-side — files never leave the browser.

## Development

```bash
npm install
npm run dev
```

## Preview (Cloudflare runtime)

```bash
npm run preview
```

## Deploy

```bash
npm run deploy
```
