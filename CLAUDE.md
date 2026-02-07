# Kodimo Landing Page

## Overview
Static marketing landing page for Kodimo — a construction estimation platform. Single-page Next.js app with anchor-based navigation and scroll animations.

## Tech Stack
- **Next.js 16.1.6** (App Router) with **React 19** and **TypeScript 5.9** (strict mode)
- **Tailwind CSS v4** (CSS-first config via `globals.css` `@theme` block, not `tailwind.config.ts`)
- **Framer Motion** for scroll-triggered entrance animations
- **Lucide React** for icons
- No state management library — static content only, `useState` for mobile menu toggle

## Project Structure
```
app/
  layout.tsx          # Root layout (fonts, metadata)
  page.tsx            # Landing page — imports all section components in order
  globals.css         # Tailwind v4 theme (colors, fonts, custom variables)
components/
  Navigation.tsx      # Fixed top nav with mobile hamburger
  Hero.tsx            # Hero section with CTA
  ProblemSection.tsx  # 3 pain-point cards
  SolutionSection.tsx # 3-step "how it works" process
  FeaturesSection.tsx # Tabbed feature showcase (Navigate/Takeoffs/Estimate)
  SocialProof.tsx     # Customer types carousel
  Testimonials.tsx    # 3 testimonial cards
  CTASection.tsx      # Demo scheduling CTA
  Footer.tsx          # Footer with link columns
  ui/
    Button.tsx        # Variants: primary, secondary, nav
    Card.tsx          # Variants: testimonial, content, problem, feature
    Badge.tsx         # Section label pill with neon dot
lib/
  utils.ts            # cn() — clsx + tailwind-merge utility
public/images/        # All static assets (logos, screenshots, icons)
```

## Commands
- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — ESLint

## Conventions

### Components
- All section components are client components (`"use client"`) for Framer Motion
- PascalCase filenames: `FeaturesSection.tsx`
- Content data (testimonials, features, steps) is hardcoded as arrays inside each component
- UI components in `components/ui/` use variant props with TypeScript interfaces

### Styling
- Tailwind utility classes only — no CSS modules or CSS-in-JS
- Theme colors defined in `globals.css` via `@theme` (not in `tailwind.config.ts`)
  - Primary: `#BFF900` (lime), Dark: `#0B1322` (navy), Secondary: `#172E46`
- Use `cn()` from `lib/utils.ts` for conditional classnames
- Mobile-first responsive design with `sm:`, `md:`, `lg:` breakpoints
- Typography: Inter (body), Source Serif 4 / Noto Serif (headings), loaded via `next/font`

### Animations
- Framer Motion `whileInView` with `viewport={{ once: true }}` pattern
- Standard entrance animations: fade-in, slide-up, scale

### Images
- Use Next.js `<Image>` component with assets from `/public/images/`
- Hero images use `priority` prop for preloading

### Navigation
- Anchor links to section IDs: `#how-it-works`, `#secret-sauce`, `#customers`, `#contact`
- Smooth scrolling enabled via CSS `scroll-behavior: smooth`

### Path Aliases
- `@/*` maps to project root (configured in `tsconfig.json`)

## No Testing
No test framework is configured. No tests exist.
