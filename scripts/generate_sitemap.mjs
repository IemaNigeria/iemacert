import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://www.iemacert.com';
const TODAY = '2026-09-28';

const REAL_URLS = [
  // Primary Institutional
  '/',
  '/about-us/',
  '/our-team/',
  '/our-partners/',
  '/our-approach/',
  '/accreditation/',
  '/contact-us/',
  '/request-quote/',
  '/verify-certificate/',
  '/projects/',
  '/resources/',
  '/blog/',

  // Core Service Hubs
  '/certifications/',
  '/ecomark-certification-scheme/',
  '/pci-dss-certification-nigeria/',
  '/ndt-testing/',
  '/inspection-services/',
  '/lead-auditor-training/',
  '/environmental-consultancy-nigeria/',
  '/compliance-services/',
  '/data-protection-compliance/',
  '/aml-compliance-nigeria/',
  '/vendor-due-diligence-nigeria/',

  // Individual Dedicated ISO Service Pages
  '/iso-9001-certification-nigeria/',
  '/iso-14001-certification-nigeria/',
  '/iso-45001-certification-nigeria/',
  '/iso-27001-certification-nigeria/',
  '/iso-22000-certification-nigeria/',
  '/iso-22301-certification-nigeria/',
  '/iso-37001-certification-nigeria/',
  '/iso-50001-certification-nigeria/',
  '/iso-13485-certification-nigeria/',
  '/iso-20000-certification-nigeria/',
  '/iso-29001-certification-nigeria/',
  '/iso-41001-certification-nigeria/',
  '/iso-27701-certification-nigeria/'
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${REAL_URLS.map(u => `  <url>
    <loc>${DOMAIN}${u === '/' ? '/' : u}</loc>
    <lastmod>${TODAY}</lastmod>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.resolve('public/sitemap.xml'), xml.trim() + '\n');
console.log(`Generated public/sitemap.xml with ${REAL_URLS.length} clean, indexable real URLs.`);
