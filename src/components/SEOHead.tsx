import { useEffect } from 'react';
import { getSEOConfig, getBaseConfig } from '@/lib/seo-config';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, unknown>;
}

/**
 * SEOHead Component
 * Dynamically updates meta tags and structured data based on the current domain
 * Supports both sijalneupane.tech and sijalneupane.com.np
 */
export const SEOHead = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = 'profile',
  structuredData,
}: SEOHeadProps) => {
  useEffect(() => {
    const seoConfig = getSEOConfig();
    const baseConfig = getBaseConfig();

    // Update title
    const pageTitle = title || seoConfig.title;
    document.title = pageTitle;
    updateMetaTag('og:title', pageTitle);
    updateMetaTag('twitter:title', pageTitle);

    // Update description
    const pageDescription = description || seoConfig.description;
    updateMetaTag('description', pageDescription);
    updateMetaTag('og:description', pageDescription);
    updateMetaTag('twitter:description', pageDescription);

    // Update canonical URL
    const canonical = canonicalUrl || seoConfig.canonicalUrl;
    updateCanonicalLink(canonical);
    updateMetaTag('og:url', canonical);
    updateMetaTag('twitter:url', canonical);

    // Update OG image
    const image = ogImage || baseConfig.image;
    updateMetaTag('og:image', image);
    updateMetaTag('twitter:image', image);
    updateMetaTag('og:image:alt', baseConfig.imageAlt);
    updateMetaTag('twitter:image:alt', baseConfig.imageAlt);

    // Update OG type
    updateMetaTag('og:type', ogType);

    // Update Twitter domain
    updateMetaTag('twitter:domain', seoConfig.twitterDomain);

    // Update structured data
    const data = structuredData || seoConfig.structuredData;
    updateStructuredData(data);

    // Update website schema
    updateWebsiteSchema(seoConfig);
  }, [title, description, canonicalUrl, ogImage, ogType, structuredData]);

  return null;
};

/**
 * Helper function to update or create meta tags
 */
const updateMetaTag = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"]`) ||
    document.querySelector(`meta[property="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    const isProperty = name.startsWith('og:') || name.startsWith('twitter:');
    if (isProperty) {
      element.setAttribute('property', name);
    } else {
      element.setAttribute('name', name);
    }
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

/**
 * Helper function to update canonical link
 */
const updateCanonicalLink = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', url);
};

/**
 * Helper function to update structured data (JSON-LD)
 */
const updateStructuredData = (data: Record<string, unknown>) => {
  let script = document.querySelector('script[type="application/ld+json"][data-type="person"]');

  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-type', 'person');
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
};

/**
 * Helper function to update website schema
 */
const updateWebsiteSchema = (seoConfig: ReturnType<typeof getSEOConfig>) => {
  const baseConfig = getBaseConfig();
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sijal Neupane Portfolio',
    alternateName: 'Sijal Neupane - Full Stack Developer',
    url: seoConfig.canonicalUrl,
    description: 'Portfolio website of Sijal Neupane, showcasing Full Stack Development projects and skills',
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: 'Sijal Neupane',
    },
    mainEntity: {
      '@type': 'Person',
      name: 'Sijal Neupane',
    },
  };

  let script = document.querySelector('script[type="application/ld+json"][data-type="website"]');

  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-type', 'website');
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(websiteSchema);
};

export default SEOHead;
