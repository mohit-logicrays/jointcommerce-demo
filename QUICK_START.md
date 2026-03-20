# Quick Start Guide

## Development

```bash
npm run dev
```

Visit: http://localhost:3000

## Production Build

```bash
npm run build
npm start
```

## What's Working

✅ All 14 routes with SEO metadata
✅ Favicon and app icons
✅ All logos and images from `/public/static/`
✅ Smooth scrolling with Lenis
✅ All animations with Framer Motion
✅ Responsive navigation
✅ Automatic sitemap at `/sitemap.xml`
✅ Robots.txt at `/robots.txt`

## Page Titles

- Home: "JointCommerce - Shoppable Media Platform"
- Other pages: "[Page Name] | JointCommerce"

## File Structure

```
app/
├── components/          # All React components
├── [route]/
│   ├── layout.tsx      # SEO metadata
│   └── page.tsx        # Page content
├── layout.tsx          # Root layout (Navbar, Footer, favicon)
├── page.tsx            # Home page
├── icon.tsx            # Dynamic favicon
└── apple-icon.tsx      # iOS app icon

public/
└── static/             # All images, videos, logos
```

## Environment Variables

Create `.env.local`:

```env
GEMINI_API_KEY=your_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Deployment

Ready to deploy to:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting

```bash
npm run build
```

The `.next` folder contains the production build.
