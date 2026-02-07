# Kodimo Landing Page

A modern, responsive landing page for Kodimo - a construction estimation platform that combines AI automation with human expertise.

## Features

- **Modern Design**: Dark theme with neon green accents
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Type-Safe**: Built with TypeScript
- **Component-Based**: Reusable UI components
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Google Fonts (Inter, Noto Serif, Source Serif 4)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
kodimo-landing-page/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── ProblemSection.tsx  # Problem statement
│   ├── SolutionSection.tsx # Solution steps
│   ├── FeaturesSection.tsx # Feature showcase
│   ├── ValueProposition.tsx # Value prop section
│   ├── SocialProof.tsx     # Stats and social proof
│   ├── Testimonials.tsx    # Customer testimonials
│   ├── CTASection.tsx      # Call-to-action
│   ├── Footer.tsx          # Footer
│   └── ui/
│       ├── Button.tsx      # Button component
│       ├── Card.tsx        # Card component
│       ├── Badge.tsx       # Badge component
│       └── Sparkle.tsx     # Sparkle icon
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    └── images/             # Image assets
```

## Sections

1. **Hero**: Eye-catching headline with CTAs
2. **Problem Section**: Three key pain points
3. **Solution Section**: Three-step process
4. **Features Section**: Interactive feature showcase
5. **Value Proposition**: AI + Human hybrid approach
6. **Social Proof**: Statistics and credibility
7. **Testimonials**: Customer success stories
8. **CTA Section**: Demo scheduling
9. **Footer**: Contact info and links

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    lime: '#BFF900',
    dark: '#0B1322',
    navy: '#172E46',
  }
}
```

### Fonts

Fonts are configured in `app/layout.tsx` using Google Fonts.

### Content

Update content in each component file or consider moving content to a separate data file for easier management.

## Build for Production

```bash
npm run build
npm start
```

## Next Steps

- [ ] Add actual images to replace placeholders
- [ ] Integrate Calendly widget for demo scheduling
- [ ] Add form validation
- [ ] Implement analytics tracking
- [ ] Add blog section
- [ ] Set up CMS for content management
- [ ] Add animations for scroll indicators
- [ ] Implement A/B testing

## License

MIT
