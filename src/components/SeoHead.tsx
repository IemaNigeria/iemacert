import React, { useEffect } from 'react';
import { SEO_RICH_FAQS } from '../data/seoKeywordsData';

export const PRIMARY_DOMAIN = 'https://www.iemacert.com';

interface SeoHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  canonicalUrl?: string;
  keywords?: string[] | string;
  type?: 'website' | 'article' | 'service';
  includeFaqSchema?: boolean;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title = 'ISO Certification Body in Nigeria | IEMA Standards',
  description = 'EGAC & IAF MLA accredited ISO certification body in Nigeria (CAB 12203). Fast-track ISO 9001, 14001 & 45001 audits in Lagos & Abuja. Get a free quote today.',
  canonicalPath = '',
  canonicalUrl = '',
  keywords = [
    'accredited iso certification body in nigeria',
    'iso certification in lagos',
    'iso 9001 certification in nigeria',
    'iso certification companies in lagos',
    'iso certification body in abuja',
    'testing and inspection companies in nigeria',
    'EGAC accredited CAB 12203',
    'IEMA Standards Limited'
  ],
  includeFaqSchema = true
}) => {
  useEffect(() => {
    // 1. Format Title to maintain brand consistency and keep under ~60 characters
    let fullTitle = title.trim();
    if (!fullTitle.includes('IEMA')) {
      fullTitle = `${fullTitle} | IEMA Standards`;
    }

    document.title = fullTitle;

    // 2. Format Description (Ensure under 160 chars)
    const cleanDescription = description.trim();

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', cleanDescription);

    // 3. Update Meta Keywords
    const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywordsString);

    // 4. Resolve Canonical & OpenGraph URL to always use the official live domain https://www.iemacert.com
    let resolvedCanonical = '';
    if (canonicalUrl && canonicalUrl.startsWith('http')) {
      // Replace any old or dead domain with https://www.iemacert.com
      resolvedCanonical = canonicalUrl
        .replace(/^https?:\/\/(www\.)?iemastandards\.com/i, PRIMARY_DOMAIN)
        .replace(/^https?:\/\/iemacert\.com/i, PRIMARY_DOMAIN);
    } else {
      let cleanSubPath = (canonicalPath || '').replace(/^\/+/, '').replace(/^#/, '');
      if (cleanSubPath && !cleanSubPath.endsWith('/')) {
        cleanSubPath += '/';
      }
      resolvedCanonical = cleanSubPath 
        ? `${PRIMARY_DOMAIN}/${cleanSubPath}`
        : `${PRIMARY_DOMAIN}/`;
    }

    // Update or Create Canonical Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', resolvedCanonical);

    // 5. Update OpenGraph Tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateOrCreateMeta('og:site_name', 'IEMA Standards Limited');
    updateOrCreateMeta('og:title', fullTitle);
    updateOrCreateMeta('og:description', cleanDescription);
    updateOrCreateMeta('og:url', resolvedCanonical);
    updateOrCreateMeta('og:image', `${PRIMARY_DOMAIN}/og-image.png`);
    updateOrCreateMeta('og:image:width', '1200');
    updateOrCreateMeta('og:image:height', '630');
    updateOrCreateMeta('og:type', 'website');
    updateOrCreateMeta('og:locale', 'en_US');

    // Update Twitter Tags
    const updateOrCreateTwitter = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateOrCreateTwitter('twitter:card', 'summary_large_image');
    updateOrCreateTwitter('twitter:title', fullTitle);
    updateOrCreateTwitter('twitter:description', cleanDescription);
    updateOrCreateTwitter('twitter:image', `${PRIMARY_DOMAIN}/og-image.png`);

    // 6. Inject Structured Data (FAQ Schema JSON-LD)
    if (includeFaqSchema) {
      const scriptId = 'faq-json-ld-schema';
      let faqScript = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.id = scriptId;
        faqScript.type = 'application/ld+json';
        document.head.appendChild(faqScript);
      }

      const faqSchemaObj = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': SEO_RICH_FAQS.slice(0, 8).map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `${faq.shortAnswer} ${faq.detailedAnswer}`
          }
        }))
      };

      faqScript.textContent = JSON.stringify(faqSchemaObj, null, 2);
    }

    // 7. Inject Service / Organization Schema
    const serviceScriptId = 'service-json-ld-schema';
    let serviceScript = document.getElementById(serviceScriptId) as HTMLScriptElement | null;
    if (!serviceScript) {
      serviceScript = document.createElement('script');
      serviceScript.id = serviceScriptId;
      serviceScript.type = 'application/ld+json';
      document.head.appendChild(serviceScript);
    }

    const businessSchemaObj = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'IEMA Standards Limited',
      'alternateName': ['IEMA Standards', 'IEMACERT'],
      'image': `${PRIMARY_DOMAIN}/og-image.png`,
      'url': PRIMARY_DOMAIN,
      'telephone': '+2348134831027',
      'email': 'info@iemacert.com',
      'priceRange': '₦₦ - ₦₦₦',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '27A Alternative Drive, near Waterbrook School, Chevron, Lekki',
        'addressLocality': 'Lagos',
        'addressRegion': 'Lagos State',
        'postalCode': '105102',
        'addressCountry': 'NG'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 6.4358,
        'longitude': 3.5358
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '08:00',
        'closes': '17:00'
      },
      'sameAs': [
        'https://x.com/iemacert',
        'https://www.instagram.com/iemastandard/',
        'https://www.facebook.com/iemacert',
        'https://www.linkedin.com/company/iema-standards-limited/'
      ],
      'areaServed': [
        'Nigeria', 'Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Ibadan',
        'Ghana', 'Kenya', 'Dubai UAE', 'United Kingdom', 'West Africa'
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Accredited ISO Certification & Industrial Inspection Services',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'ISO 9001:2015 Quality Management System Certification'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'ISO 14001:2015 Environmental Management System Certification'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'ISO 45001:2018 Occupational Health & Safety Certification'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'ISO/IEC 27001:2022 Information Security Management Certification'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'PCI DSS v4.0.1 Compliance, RoC & SAQ Certification'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'EcoMark Environmental Sustainability Certification Scheme'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Non-Destructive Testing (NDT) & Materials Analysis'
            }
          }
        ]
      }
    };

    serviceScript.textContent = JSON.stringify(businessSchemaObj, null, 2);

  }, [title, description, canonicalPath, canonicalUrl, keywords, includeFaqSchema]);

  return null;
};
