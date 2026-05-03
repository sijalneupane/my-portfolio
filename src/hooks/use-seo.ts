import { useEffect, useState } from 'react';
import { getSEOConfig, getBaseConfig, type SEOConfig } from '@/lib/seo-config';

/**
 * Hook to access SEO configuration for the current domain
 * Returns SEO config and base config for the active domain
 */
export const useSEO = () => {
  const [seoConfig, setSeoConfig] = useState<SEOConfig | null>(null);
  const [baseConfig, setBaseConfig] = useState<ReturnType<typeof getBaseConfig> | null>(null);

  useEffect(() => {
    setSeoConfig(getSEOConfig());
    setBaseConfig(getBaseConfig());
  }, []);

  return { seoConfig, baseConfig };
};

export default useSEO;
