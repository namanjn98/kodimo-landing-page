# Deployment Checklist

## Pre-Deployment

### 1. Assets & Media
- [ ] Export logo from Figma (SVG format)
- [ ] Export hero background image
- [ ] Export step illustrations (2 images)
- [ ] Export feature visuals (3 images)
- [ ] Optimize all images to WebP
- [ ] Add images to `/public/images/`
- [ ] Update image references in components
- [ ] Test image loading and performance

### 2. Content Review
- [ ] Proofread all text content
- [ ] Verify contact information
- [ ] Confirm branding (EstimateAI vs Kodimo)
- [ ] Review testimonial accuracy
- [ ] Check all links and CTAs
- [ ] Verify statistics (500+ customers, 70% time saved, etc.)

### 3. Integrations
- [ ] Add Calendly widget URL
- [ ] Set up Google Analytics / Plausible
- [ ] Configure error tracking (Sentry)
- [ ] Test form submissions (if any)
- [ ] Set up email notifications
- [ ] Configure newsletter signup

### 4. SEO Optimization
- [ ] Add meta descriptions
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Add structured data (JSON-LD)
- [ ] Verify canonical URLs
- [ ] Test social media previews

### 5. Performance
- [ ] Run Lighthouse audit
- [ ] Optimize images (lazy loading)
- [ ] Check font loading strategy
- [ ] Minimize CSS/JS bundles
- [ ] Enable compression
- [ ] Test Core Web Vitals
- [ ] Verify mobile performance

### 6. Testing

#### Functionality
- [ ] All navigation links work
- [ ] Smooth scroll to sections
- [ ] Mobile menu opens/closes
- [ ] All buttons are clickable
- [ ] Forms validate (if any)
- [ ] CTAs link correctly
- [ ] External links open in new tab

#### Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (macOS)
- [ ] Safari (iOS)
- [ ] Edge (latest)
- [ ] Chrome (Android)

#### Device Testing
- [ ] iPhone (375px)
- [ ] iPhone Plus (414px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1440px)
- [ ] Large Display (1920px+)
- [ ] Test landscape mode

#### Accessibility
- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] Color contrast check (WCAG AA)
- [ ] Focus indicators visible
- [ ] Alt text on all images
- [ ] Proper heading hierarchy
- [ ] ARIA labels where needed

### 7. Security
- [ ] Remove development comments
- [ ] Check for exposed API keys
- [ ] Verify environment variables
- [ ] Review .gitignore
- [ ] Set secure headers
- [ ] Enable HTTPS only
- [ ] Configure CSP headers

### 8. Legal
- [ ] Create Privacy Policy page
- [ ] Create Terms of Service page
- [ ] Add cookie consent (if needed)
- [ ] Review GDPR compliance
- [ ] Add disclaimer if needed

## Deployment Steps

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **Configure**
- [ ] Set environment variables
- [ ] Configure custom domain
- [ ] Enable analytics
- [ ] Set up preview deployments

### Option 2: Netlify

1. **Build Settings**
```
Build command: npm run build
Publish directory: .next
```

2. **Environment Variables**
- [ ] Add NEXT_PUBLIC_* variables
- [ ] Configure build plugins

3. **Deploy**
```bash
netlify deploy --prod
```

### Option 3: Other Platforms

#### Cloudflare Pages
```bash
npm run build
# Upload .next directory
```

#### AWS Amplify
```bash
amplify init
amplify publish
```

## Post-Deployment

### 1. Verification
- [ ] Visit production URL
- [ ] Test all functionality
- [ ] Verify images load
- [ ] Check analytics tracking
- [ ] Test forms/integrations
- [ ] Verify SSL certificate
- [ ] Check mobile version

### 2. DNS & Domain
- [ ] Configure DNS records
- [ ] Set up www redirect
- [ ] Verify SSL/TLS
- [ ] Test domain propagation
- [ ] Set up email forwarding (if needed)

### 3. Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error alerts
- [ ] Enable performance monitoring
- [ ] Set up analytics dashboard
- [ ] Configure backup schedule

### 4. SEO Submission
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Create XML sitemap
- [ ] Submit sitemap to search engines
- [ ] Verify meta tags

### 5. Marketing
- [ ] Update social media profiles
- [ ] Announce launch
- [ ] Set up email campaigns
- [ ] Configure A/B testing
- [ ] Enable heatmaps (Hotjar, etc.)

## Environment Variables

Create `.env.local` or configure in hosting platform:

```bash
# Required
NEXT_PUBLIC_SITE_URL=https://kodimo.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kodimo.com

# Integrations (Optional)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
NEXT_PUBLIC_CRISP_WEBSITE_ID=xxxx-xxxx

# Error Tracking (Optional)
NEXT_PUBLIC_SENTRY_DSN=https://xxx@sentry.io/xxx
```

## Performance Targets

- [ ] Lighthouse Performance: 90+
- [ ] First Contentful Paint: <1.5s
- [ ] Largest Contentful Paint: <2.5s
- [ ] Time to Interactive: <3.0s
- [ ] Cumulative Layout Shift: <0.1
- [ ] Total Blocking Time: <200ms

## Launch Day

### Hour Before Launch
- [ ] Final build test
- [ ] Clear CDN cache
- [ ] Test staging environment
- [ ] Prepare rollback plan
- [ ] Brief team members

### At Launch
- [ ] Deploy to production
- [ ] Verify deployment
- [ ] Test critical paths
- [ ] Monitor error rates
- [ ] Check analytics

### After Launch
- [ ] Monitor for 1 hour
- [ ] Check error logs
- [ ] Review analytics
- [ ] Test user flows
- [ ] Collect feedback

## Rollback Plan

If issues occur:

1. **Immediate Actions**
```bash
# Revert deployment
vercel rollback
# or
netlify rollback
```

2. **Investigate**
- Check error logs
- Review recent changes
- Test locally

3. **Fix & Redeploy**
- Fix issues
- Test thoroughly
- Deploy again

## Support Contacts

- **Hosting**: [Support URL]
- **Domain**: [Registrar support]
- **CDN**: [CDN support]
- **Analytics**: [Analytics support]

## Post-Launch Improvements

### Week 1
- [ ] Review analytics data
- [ ] Check conversion rates
- [ ] Review user feedback
- [ ] Fix any reported bugs
- [ ] Optimize based on real data

### Week 2-4
- [ ] A/B test CTAs
- [ ] Optimize images further
- [ ] Add more content
- [ ] Improve SEO
- [ ] Add blog posts

### Month 2+
- [ ] Add case studies
- [ ] Implement advanced features
- [ ] Add video content
- [ ] Expand FAQ section
- [ ] Build email campaigns

## Notes

- Always test in staging before production
- Keep backups of current version
- Document all changes
- Monitor performance metrics
- Collect user feedback continuously

## Quick Commands

```bash
# Development
npm run dev

# Production build (test locally)
npm run build
npm start

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod

# Check for issues
npm run build && npm run lint
```

---

**Last Updated**: 2026-02-06
**Version**: 1.0.0
**Status**: Ready for deployment after adding images
