import { useEffect } from 'react';

type MetadataProps = {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  siteName?: string;
};

const useMetadata = ({
  title,
  description,
  keywords = [],
  image = '/preview-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  siteName = 'My Portfolio',
}: MetadataProps) => {
  useEffect(() => {
    // Document title
    document.title = title;

    // Helper function to update/create meta tags
    const updateMetaTag = (attr: 'name' | 'property', name: string, content: string) => {
      const selector = `meta[${attr}="${name}"]`;
      let tag = document.querySelector(selector) as HTMLMetaElement | null;

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords.join(', '));

    // Open Graph (Facebook, WhatsApp, etc.)
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:url', url);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:site_name', siteName);

    // Image dimensions for better social sharing
    updateMetaTag('property', 'og:image:width', '1200');
    updateMetaTag('property', 'og:image:height', '630');
    updateMetaTag('property', 'og:image:alt', `${title} Preview Image`);

    // Twitter Card
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', image);
    updateMetaTag('name', 'twitter:image:alt', `${title} Preview Image`);

    // Theme color for mobile browsers
    updateMetaTag('name', 'theme-color', '#0f172a');

    // Cleanup function
    return () => {
      document.title = ''; // Reset title
    };
  }, [title, description, keywords, image, url, siteName]);
};

export default useMetadata;