# SEO Setup Guide

This portfolio includes comprehensive SEO features. Here's how to configure them:

## 1. Environment Variables

Create a `.env` file in your project root with:

```env
# Site Configuration
SITE_URL=https://yourdomain.com

# Analytics (Optional)
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_GTAG_ID=GTM-XXXXXXX
```

## 2. Update Personal Information

### In `src/pages/index.astro`:

- Replace "Your Name" with your actual name
- Update the description to match your skills and experience
- Update social media links in the structured data

### In `src/components/SEO.astro`:

- Update the `author` meta tag
- Update the `keywords` meta tag
- Update the `og:site_name` property
- Update the default Twitter creator

### In `public/manifest.json`:

- Update the name and short_name
- Update the description
- Update the theme colors to match your brand

## 3. Create Open Graph Image

Replace `public/og-image.jpg` with a 1200x630px image that includes:

- Your name
- Your title/role
- Your logo (optional)
- Brand colors

## 4. Update Sitemap

In `src/pages/sitemap.xml.ts`, update the pages array to include all your actual pages:

```typescript
const pages = [
  {
    url: '/',
    lastmod: new Date(),
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    url: '/about',
    lastmod: new Date(),
    changefreq: 'monthly',
    priority: 0.8,
  },
  // Add more pages as you create them
];
```

## 5. SEO Features Included

### ✅ Meta Tags

- Title and description
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Canonical URLs
- Robots meta
- Theme color

### ✅ Structured Data

- Person schema for rich snippets
- Skills and social profiles
- Job title and description

### ✅ Technical SEO

- Sitemap.xml (dynamic)
- Robots.txt
- PWA manifest
- Preconnect links for performance

### ✅ Analytics Ready

- Google Analytics 4
- Google Tag Manager
- Easy to extend for other services

### ✅ Social Media

- Open Graph images
- Twitter card optimization
- Social profile links

## 6. Testing Your SEO

1. **Google Search Console**: Submit your sitemap
2. **Social Media**: Test sharing on Facebook, Twitter, LinkedIn
3. **Rich Results Test**: Use Google's tool to test structured data
4. **PageSpeed Insights**: Check performance scores
5. **Mobile-Friendly Test**: Ensure mobile optimization

## 7. Additional Recommendations

- Add more pages (About, Projects, Contact, Blog)
- Create project-specific structured data
- Add breadcrumb navigation
- Implement internal linking strategy
- Set up email newsletter signup
- Add contact forms with proper schema markup

## 8. Performance Tips

- Optimize images (WebP format)
- Use lazy loading for images
- Minimize CSS and JavaScript
- Enable compression on your server
- Use a CDN for static assets

Your portfolio is now SEO-optimized and ready for search engines and social media sharing!
