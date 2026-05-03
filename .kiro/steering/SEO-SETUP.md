# SEO Optimization Setup for Multiple Domains

This project is now optimized for SEO across two domains:
- **sijalneupane.tech** (primary .tech domain)
- **sijalneupane.com.np** (secondary .com.np domain)

## Overview

The SEO system automatically detects which domain is being accessed and applies the appropriate SEO metadata, canonical URLs, and structured data.

## Architecture

### 1. **SEO Configuration (`src/lib/seo-config.ts`)**
- Centralized configuration for both domains
- Automatically detects current domain
- Provides domain-specific URLs, titles, descriptions, and structured data
- Exports `getSEOConfig()` for runtime domain detection

### 2. **SEO Head Component (`src/components/SEOHead.tsx`)**
- React component that manages all meta tags dynamically
- Updates on component mount and when props change
- Handles:
  - Meta tags (title, description, keywords)
  - Open Graph tags (og:title, og:description, og:url, og:image)
  - Twitter Card tags
  - Canonical links
  - JSON-LD structured data

### 3. **Domain Detection Script (`index.html`)**
- Runs before React loads
- Detects domain and updates critical meta tags immediately
- Prevents SEO issues from client-side rendering delays
- Stores domain info for React components

### 4. **SEO Hook (`src/hooks/use-seo.ts`)**
- React hook for accessing SEO config in components
- Useful for page-specific SEO customization

## How It Works

### Domain Detection Logic
```
- If hostname includes "sijalneupane.com.np" or "localhost" → Use .com.np config
- Otherwise → Use .tech config
```

### Meta Tag Updates
1. **Initial Load**: Domain detection script updates critical tags before React renders
2. **React Mount**: SEOHead component ensures all tags are correct
3. **Dynamic Updates**: Use SEOHead props to customize per-page SEO

## Usage

### Default (Homepage)
The SEOHead component is already integrated in `App.tsx` and will automatically apply the correct SEO for the current domain.

### Custom Page SEO
To customize SEO for specific pages, pass props to SEOHead:

```tsx
import { SEOHead } from '@/components/SEOHead';

export const MyPage = () => {
  return (
    <>
      <SEOHead
        title="Custom Page Title"
        description="Custom page description"
        ogImage="https://example.com/custom-image.png"
        ogType="article"
      />
      {/* Page content */}
    </>
  );
};
```

### Access SEO Config in Components
```tsx
import { useSEO } from '@/hooks/use-seo';

export const MyComponent = () => {
  const { seoConfig, baseConfig } = useSEO();
  
  return (
    <div>
      <p>Current domain: {seoConfig?.domain}</p>
      <p>Canonical URL: {seoConfig?.canonicalUrl}</p>
    </div>
  );
};
```

## SEO Features Implemented

### ✅ Meta Tags
- Title tags (unique per domain)
- Meta descriptions
- Keywords
- Author
- Robots directives
- Language and geo-targeting

### ✅ Open Graph Tags
- og:title, og:description, og:url
- og:image with dimensions
- og:type (profile)
- og:site_name
- Profile-specific tags (first_name, last_name)

### ✅ Twitter Card Tags
- twitter:card (summary_large_image)
- twitter:site, twitter:creator
- twitter:title, twitter:description
- twitter:image, twitter:url, twitter:domain

### ✅ Structured Data (JSON-LD)
- Person schema with skills and social links
- WebSite schema
- Proper @context and @type definitions
- mainEntityOfPage references

### ✅ Canonical URLs
- Domain-specific canonical links
- Prevents duplicate content issues
- Properly set for both domains

### ✅ Favicon & App Icons
- Favicon setup
- Apple touch icon
- Web manifest
- Theme colors

## Domain-Specific Configuration

### sijalneupane.tech
```
Canonical: https://sijalneupane.tech
OG URL: https://sijalneupane.tech
Twitter Domain: sijalneupane.tech
```

### sijalneupane.com.np
```
Canonical: https://www.sijalneupane.com.np
OG URL: https://www.sijalneupane.com.np
Twitter Domain: sijalneupane.com.np
```

## Testing SEO

### 1. Check Meta Tags
Open browser DevTools → Elements → Head section
Verify correct canonical URL and domain-specific tags

### 2. Test with SEO Tools
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [SEO Checker Tools](https://www.seobility.net/)

### 3. Verify Structured Data
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

### 4. Check Open Graph
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Deployment Considerations

### For sijalneupane.tech
1. Ensure DNS points to your hosting
2. Set up SSL certificate
3. Verify in Google Search Console
4. Submit sitemap

### For sijalneupane.com.np
1. Ensure DNS points to your hosting
2. Set up SSL certificate
3. Verify in Google Search Console (separate property)
4. Submit sitemap
5. Consider geo-targeting to Nepal in Search Console

## Adding New Pages

When adding new routes, you can customize SEO per page:

```tsx
// src/pages/MyNewPage.tsx
import { SEOHead } from '@/components/SEOHead';

export default function MyNewPage() {
  return (
    <>
      <SEOHead
        title="My New Page - Sijal Neupane"
        description="Description of my new page"
      />
      {/* Page content */}
    </>
  );
}
```

## Maintenance

### Update SEO Config
Edit `src/lib/seo-config.ts` to:
- Change titles or descriptions
- Add/remove skills
- Update social links
- Modify structured data

### Update Base Config
The `baseConfig` object contains shared data:
- Author name
- Image URLs
- Twitter handle
- Skills list
- Social links

Changes here apply to both domains.

## Troubleshooting

### Meta tags not updating
1. Clear browser cache
2. Check browser DevTools for correct tags
3. Verify SEOHead component is mounted in App.tsx
4. Check console for JavaScript errors

### Wrong domain detected
1. Check hostname in browser console: `window.location.hostname`
2. Verify domain detection logic in `src/lib/seo-config.ts`
3. Check index.html domain detection script

### Structured data not validating
1. Use [Schema.org Validator](https://validator.schema.org/)
2. Check JSON-LD syntax in browser DevTools
3. Ensure all required fields are present

## Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
