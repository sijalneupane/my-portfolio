/**
 * SEO Configuration for multiple domains
 * Supports: sijalneupane.tech and sijalneupane.com.np
 */

export interface SEOConfig {
  domain: string;
  title: string;
  description: string;
  canonicalUrl: string;
  ogUrl: string;
  twitterDomain: string;
  structuredData: Record<string, unknown>;
}

const getCurrentDomain = (): string => {
  if (typeof window === 'undefined') return 'sijalneupane.tech';
  return window.location.hostname;
};

const getDomainType = (hostname: string): 'tech' | 'np' => {
  if (hostname.includes('sijalneupane.com.np') || hostname.includes('localhost')) {
    return 'np';
  }
  return 'tech';
};

const baseConfig = {
  author: 'Sijal Neupane',
  image: 'https://res.cloudinary.com/ddb1esok3/image/upload/sizz_ktcwvm.png',
  imageAlt: 'Sijal Neupane - Full Stack Developer Portfolio',
  imageWidth: 1200,
  imageHeight: 630,
  twitterHandle: '@_sijalneupane',
  keywords: 'Sijal Neupane, sijalneupane, sijal, neupane, sijal neupane, code bridge, Code bridge, codebridge, Full Stack Developer, Flutter Developer, Django Developer, FastAPI Developer, NestJS Developer, React Developer, Mobile App Developer, Web Developer, Portfolio, Cross-Platform, Backend, Frontend, JavaScript, TypeScript, Python, Dart, Software Engineer, API Development, Database Design, UI/UX, Nepal Developer, JWT Authentication, Async PostgreSQL, RESTful APIs',
  jobTitle: 'Full Stack Developer',
  skills: [
    'Flutter',
    'Django',
    'FastAPI',
    'NestJS',
    'React',
    'TypeScript',
    'JavaScript',
    'Python',
    'Dart',
    'Mobile App Development',
    'Web Development',
    'API Development',
    'Database Design',
    'JWT Authentication',
    'Async PostgreSQL',
    'RESTful APIs',
  ],
  socialLinks: {
    github: 'https://github.com/sijalneupane',
    twitter: 'https://x.com/_sijalneupane',
    linkedin: 'https://www.linkedin.com/in/sijal-neupane-23302a347/',
  },
};

const domainConfigs: Record<'tech' | 'np', Omit<SEOConfig, 'domain'>> = {
  tech: {
    title: 'Sijal Neupane - Full Stack Developer | Flutter, Django, FastAPI, NestJS Expert',
    description: 'Expert Full Stack Developer specializing in Flutter mobile apps, Django/FastAPI backends, NestJS APIs, and React frontends. View my portfolio and projects.',
    canonicalUrl: 'https://sijalneupane.tech',
    ogUrl: 'https://sijalneupane.tech',
    twitterDomain: 'sijalneupane.tech',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Sijal Neupane',
      alternateName: 'Sijal',
      url: 'https://sijalneupane.tech',
      image: {
        '@type': 'ImageObject',
        url: baseConfig.image,
        caption: baseConfig.imageAlt,
      },
      sameAs: Object.values(baseConfig.socialLinks),
      jobTitle: baseConfig.jobTitle,
      description: 'Expert Full Stack Developer specializing in Flutter mobile apps, Django/FastAPI backends with JWT authentication, async PostgreSQL, NestJS APIs, and React frontends',
      knowsAbout: baseConfig.skills,
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance',
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'Nepal',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://sijalneupane.tech',
      },
    },
  },
  np: {
    title: 'Sijal Neupane - Full Stack Developer | Flutter, Django, FastAPI, NestJS Expert',
    description: 'Expert Full Stack Developer specializing in Flutter mobile apps, Django/FastAPI backends, NestJS APIs, and React frontends. View my portfolio and projects.',
    canonicalUrl: 'https://www.sijalneupane.com.np',
    ogUrl: 'https://www.sijalneupane.com.np',
    twitterDomain: 'sijalneupane.com.np',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Sijal Neupane',
      alternateName: 'Sijal',
      url: 'https://www.sijalneupane.com.np',
      image: {
        '@type': 'ImageObject',
        url: baseConfig.image,
        caption: baseConfig.imageAlt,
      },
      sameAs: Object.values(baseConfig.socialLinks),
      jobTitle: baseConfig.jobTitle,
      description: 'Expert Full Stack Developer specializing in Flutter mobile apps, Django/FastAPI backends with JWT authentication, async PostgreSQL, NestJS APIs, and React frontends',
      knowsAbout: baseConfig.skills,
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance',
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'Nepal',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.sijalneupane.com.np',
      },
    },
  },
};

export const getSEOConfig = (): SEOConfig => {
  const hostname = getCurrentDomain();
  const domainType = getDomainType(hostname);
  const config = domainConfigs[domainType];

  return {
    domain: hostname,
    ...config,
  };
};

export const getBaseConfig = () => baseConfig;
