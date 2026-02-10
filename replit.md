# Kodimo Landing Page

## Overview
A Next.js landing page for Kodimo, an AI-powered estimation tool for construction/bidding. The site features a hero section, features, problem/solution sections, testimonials, social proof, and a CTA section.

## Recent Changes
- 2026-02-10: Initial setup for Replit environment. Configured Next.js dev server on port 5000 with proxy support.

## Project Architecture
- **Framework**: Next.js 16 with App Router (TypeScript)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

### Directory Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - React components (Hero, Navigation, Features, etc.)
- `components/ui/` - Reusable UI components (Badge, Button, Card)
- `lib/` - Utility functions
- `public/images/` - Static image assets

### Key Configuration
- `next.config.ts` - Next.js config with `allowedDevOrigins: ['*']` for Replit proxy
- `postcss.config.mjs` - PostCSS with Tailwind CSS plugin
- `tsconfig.json` - TypeScript config with path aliases (`@/*`)

## Development
- **Dev server**: `npx next dev -H 0.0.0.0 -p 5000`
- **Build**: `npm run build`
- **Start**: `npm run start`

## User Preferences
- (none recorded yet)
