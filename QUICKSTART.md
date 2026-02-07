# Quick Start Guide

## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Status

✅ **Complete and Working**
- All sections implemented
- Build succeeds
- Responsive design
- Animations working
- TypeScript configured

⚠️ **Needs Attention**
- Image placeholders need actual assets from Figma
- Calendly integration pending
- Analytics setup pending

## Adding Images

1. Export images from Figma design
2. Optimize to WebP format
3. Place in `/public/images/`
4. Update components:
   - `Hero.tsx` - hero background
   - `SolutionSection.tsx` - step illustrations
   - `FeaturesSection.tsx` - feature visuals
   - `ValueProposition.tsx` - AI/human visual

## Customization

### Change Colors
Edit `app/globals.css`:
```css
--color-primary-lime: #YOUR_COLOR;
```

### Update Content
Edit component files in `/components/` directory.

### Add New Section
1. Create component in `/components/`
2. Import in `app/page.tsx`
3. Add to page layout

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Build: `npm run build`
- Output: `.next` directory
- Start: `npm start` or `node .next/standalone/server.js`

## Support

- See README.md for detailed documentation
- See IMPLEMENTATION.md for technical details
- Check Next.js docs: https://nextjs.org/docs
