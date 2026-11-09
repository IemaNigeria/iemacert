/**
 * Canonical URL Routing System for IEMA Standards Limited (iemacert.com)
 * Replaces hash-only navigation with real, indexable URLs for SEO.
 */

export interface RouteDefinition {
  path: string;
  page: string;
  params?: Record<string, string>;
  title: string;
  description: string;
  h1: string;
}

export const CANONICAL_ROUTES: RouteDefinition[] = [
  // 1. Home
  {
    path: '/',
    page: 'home',
    title: 'Accredited ISO Certification Body in Nigeria | IEMA Standards (IEMACERT)',
    description: 'EGAC & IAF MLA accredited ISO certification body in Nigeria (CAB 12203). Fast-track ISO 9001, 14001, 45001, 27001 audits & NDT testing in Lagos & Abuja.',
    h1: 'Accredited ISO Management Certification & Conformity Assessment in Nigeria'
  },
  // 2. Institutional Pages
  {
    path: '/about-us/',
    page: 'about',
    title: 'About IEMA Standards Limited | Accredited Certification Body Nigeria',
    description: 'Learn about IEMA Standards Limited, an EGAC-accredited (CAB 12203) certification body providing international conformity assessment across Nigeria and Africa.',
    h1: 'About IEMA Standards Limited'
  },
  {
    path: '/our-team/',
    page: 'team',
    title: 'Our Leadership & Lead Auditors | IEMA Standards Limited',
    description: 'Meet our certified lead auditors, technical inspection specialists, and conformity assessors driving international standards compliance in Nigeria.',
    h1: 'Our Executive Leadership & Certified Lead Auditors'
  },
  {
    path: '/our-partners/',
    page: 'partners',
    title: 'Accreditations, Partners & Regulatory Alliances | IEMA Standards',
    description: 'Explore IEMA Standards partnerships with EGAC, IAF MLA, NiNAS, NCDMB, NIPEX, NNPC, and international accreditation authorities.',
    h1: 'Accreditations, Alliances & Industry Partners'
  },
  {
    path: '/our-approach/',
    page: 'approach',
    title: 'Our 6-Stage Certification Approach | IEMA Standards Limited',
    description: 'Discover our rigorous, transparent 6-stage conformity assessment methodology from preliminary scoping to formal certificate issuance and surveillance.',
    h1: 'Our 6-Stage Conformity Assessment & Audit Approach'
  },
  {
    path: '/accreditation/',
    page: 'accreditation',
    title: 'Official Accreditation & CAB 12203 Scope | IEMA Standards',
    description: 'Verified international accreditation status under EGAC (CAB 12203), IAF MLA mutual recognition, and ISO/IEC 17021-1 conformity governance.',
    h1: 'Official Accreditation Status & Global Recognition'
  },
  {
    path: '/contact-us/',
    page: 'contact',
    title: 'Contact IEMA Standards | Lagos Head Office & Abuja Branch',
    description: 'Contact IEMA Standards Limited at 27A Alternative Drive, Chevron Lekki, Lagos or Maitama, Abuja. Call +234 813 483 1027 or +234 806 964 0868.',
    h1: 'Contact IEMA Standards Limited'
  },
  {
    path: '/request-quote/',
    page: 'quote',
    title: 'Request an ISO Certification Quote | IEMA Standards Limited',
    description: 'Get an immediate, transparent fee quotation for ISO management certification, NDT testing, PCI DSS, or regulatory compliance audits in Nigeria.',
    h1: 'Request a Formal ISO Certification & Audit Quote'
  },
  {
    path: '/verify-certificate/',
    page: 'verify',
    title: 'Verify ISO Certificate Online | IEMA Global Validation Portal',
    description: 'Verify the authenticity, validity, and accredited scope of any certificate issued by IEMA Standards Limited in real time.',
    h1: 'Online Certificate Verification & Public Register'
  },
  {
    path: '/projects/',
    page: 'projects',
    title: 'Projects & Case Studies | IEMA Standards Limited Nigeria',
    description: 'Review our audit, testing, and certification track record with top Nigerian oil & gas operators, banks, manufacturers, and maritime companies.',
    h1: 'Client Projects & Industry Case Studies'
  },
  {
    path: '/resources/',
    page: 'resources',
    title: 'ISO Guides, Handbooks & Resources | IEMA Standards Limited',
    description: 'Download official ISO certification handbooks, audit checklists, transition guidance, and compliance templates.',
    h1: 'Conformity Handbooks & Technical Downloads'
  },
  {
    path: '/blog/',
    page: 'blog',
    title: 'Standards, Compliance & Industry Insights | IEMA Blog',
    description: 'Expert articles on ISO 9001, ISO 27001 implementation, NDPA compliance, NDT inspection standards, and Nigerian regulatory requirements.',
    h1: 'Standards, Certification & Compliance Insights'
  },
  {
    path: '/how-to-get-iso-9001-certified-nigeria/',
    page: 'blog',
    title: 'How to Get ISO 9001 Certified in Nigeria | Step-by-Step 2026 Guide',
    description: 'Step-by-step roadmap for achieving accredited ISO 9001:2015 Quality Management certification in Nigeria. Gap analysis, Stage 1 & Stage 2 audits.',
    h1: 'How to Get ISO 9001 Certified in Nigeria'
  },
  {
    path: '/cost-of-iso-certification-nigeria/',
    page: 'blog',
    title: 'Cost of ISO Certification in Nigeria | 2026 Pricing & Budget Guide',
    description: 'Transparent audit fee breakdown for ISO 9001, 14001, 45001, and 27001 in Nigeria based on IAF MD 5 auditor man-day regulations.',
    h1: 'Cost of ISO Certification in Nigeria'
  },
  {
    path: '/difference-between-iso-22000-and-haccp/',
    page: 'blog',
    title: 'Difference Between ISO 22000 and HACCP | Food Safety Standards',
    description: 'Technical comparison between ISO 22000 management system and HACCP hazard controls for food processors and exporters in Nigeria.',
    h1: 'Difference Between ISO 22000 and HACCP Explained'
  },
  {
    path: '/egac-vs-iaf-accreditation-explained/',
    page: 'blog',
    title: 'EGAC vs. IAF Accreditation Explained | Global Validity CAB 12203',
    description: 'How EGAC accreditation under the IAF Multilateral Recognition Arrangement (MLA) gives Nigerian ISO certificates worldwide legal equivalence.',
    h1: 'EGAC vs. IAF Accreditation Explained'
  },

  // 3. Primary Service Hubs
  {
    path: '/certifications/',
    page: 'certifications',
    title: 'ISO Certification Programs in Nigeria | IEMA Standards Limited',
    description: 'Comprehensive directory of EGAC-accredited ISO certifications including ISO 9001, 14001, 45001, 27001, 22000, 37001, and 22301 in Nigeria.',
    h1: 'Accredited ISO Management Certification Programs'
  },
  {
    path: '/ecomark-certification-scheme/',
    page: 'ecomark',
    title: 'EcoMark Certification Scheme Nigeria & Africa | IEMA Standards',
    description: 'Official EcoMark environmental certification and eco-labelling scheme aligned with ARSO and AfCFTA cross-border trade sustainability mandates.',
    h1: 'EcoMark Environmental Certification Scheme'
  },
  {
    path: '/pci-dss-certification-nigeria/',
    page: 'pci-dss',
    title: 'PCI DSS v4.0.1 Compliance & Certification Nigeria | IEMA Standards',
    description: 'End-to-end PCI DSS v4.0.1 gap analysis, CDE scoping, ASV vulnerability scanning, RoC audits, and SAQ attestation for fintechs, banks, and merchants.',
    h1: 'PCI DSS v4.0.1 Compliance & Certification Services'
  },
  {
    path: '/ndt-testing/',
    page: 'testing-inspection',
    params: { tab: 'materials-testing' },
    title: 'NDT Testing & Material Laboratory Services in Nigeria | IEMA Standards',
    description: 'Accredited Non-Destructive Testing (NDT), ultrasonic testing, radiography, magnetic particle, dye penetrant, and metallurgical analysis in Nigeria.',
    h1: 'Non-Destructive Testing (NDT) & Materials Analysis'
  },
  {
    path: '/inspection-services/',
    page: 'inspection',
    title: 'Third-Party Industrial Inspection Services Nigeria | IEMA Standards',
    description: 'Pre-shipment inspection, lifting equipment load testing, pressure vessel audits, and QA/QC industrial inspection across Nigeria and offshore.',
    h1: 'Third-Party Technical Inspection & QA/QC Services'
  },
  {
    path: '/lead-auditor-training/',
    page: 'training',
    title: 'IRCA Certified Lead Auditor Training Courses Nigeria | IEMA Standards',
    description: 'Professional IRCA-accredited Lead Auditor & Internal Auditor training for ISO 9001, ISO 14001, ISO 45001, and ISO 27001 in Lagos & Abuja.',
    h1: 'Accredited ISO Lead Auditor & Professional Training'
  },
  {
    path: '/environmental-consultancy-nigeria/',
    page: 'environmental',
    title: 'Environmental Consultancy & EIA Services in Nigeria | IEMA Standards',
    description: 'Statutory Environmental Impact Assessment (EIA), Environmental Audits (EA), stack emissions monitoring, and NESREA/FMEnv compliance in Nigeria.',
    h1: 'Environmental Consultancy & Impact Assessment (EIA)'
  },
  {
    path: '/compliance-services/',
    page: 'compliance',
    title: 'Regulatory Compliance Advisory & Statutory Audits | IEMA Standards',
    description: 'Comprehensive compliance services: NDPA data protection, Anti-Money Laundering (AML/SCUML), ISO 37001 anti-bribery, and vendor due diligence.',
    h1: 'Institutional Compliance & Regulatory Advisory'
  },
  {
    path: '/data-protection-compliance/',
    page: 'compliance',
    params: { tab: 'ndpr' },
    title: 'NDPA Data Protection Compliance & DPCO Audits | IEMA Standards',
    description: 'Licensed DPCO statutory audits under the Nigeria Data Protection Act (NDPA), DPIA assessments, DPO retainership, and NDPC annual returns.',
    h1: 'Nigeria Data Protection Act (NDPA) Compliance Services'
  },
  {
    path: '/aml-compliance-nigeria/',
    page: 'compliance',
    params: { tab: 'aml' },
    title: 'Anti-Money Laundering (AML/SCUML) Compliance Nigeria | IEMA Standards',
    description: 'Risk-based AML/CFT policy design, SCUML certificate advisory, NFIU reporting frameworks, and annual statutory independent AML audits in Nigeria.',
    h1: 'Anti-Money Laundering (AML/CFT) & SCUML Compliance'
  },
  {
    path: '/vendor-due-diligence-nigeria/',
    page: 'compliance',
    params: { tab: 'diligence' },
    title: 'Corporate & Vendor Due Diligence Audits Nigeria | IEMA Standards',
    description: 'Ultimate Beneficial Ownership (UBO) screening, PEP checks, supply chain vendor verification, and M&A integrity audits in Nigeria.',
    h1: 'Corporate & Vendor Due Diligence Audit Services'
  },

  // 4. Dedicated Individual ISO Certification Service Pages (Real descriptive URLs)
  {
    path: '/iso-9001-certification-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-9001' },
    title: 'ISO 9001:2015 Certification in Nigeria | Quality Management | IEMA',
    description: 'Fast-track ISO 9001:2015 certification in Lagos, Abuja & Port Harcourt. EGAC accredited CAB 12203. Win oil & gas tenders, boost quality and trust.',
    h1: 'ISO 9001:2015 Quality Management Systems (QMS) Certification in Nigeria'
  },
  {
    path: '/iso-14001-certification-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-14001' },
    title: 'ISO 14001:2015 Environmental Certification Nigeria | IEMA Standards',
    description: 'Accredited ISO 14001:2015 Environmental Management System (EMS) certification in Nigeria. Cut waste, ensure NESREA compliance, and improve sustainability.',
    h1: 'ISO 14001:2015 Environmental Management Systems (EMS) Certification'
  },
  {
    path: '/iso-45001-certification-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-45001' },
    title: 'ISO 45001:2018 Occupational Health & Safety Nigeria | IEMA Standards',
    description: 'Accredited ISO 45001:2018 OH&S certification in Nigeria. Protect workforce safety, reduce workplace incidents, and meet NCDMB & ISPON mandates.',
    h1: 'ISO 45001:2018 Occupational Health & Safety Management (OH&S) Certification'
  },
  {
    path: '/iso-27001-certification-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-27001' },
    title: 'ISO 27001:2022 Information Security Certification Nigeria | IEMA Standards',
    description: 'Accredited ISO/IEC 27001:2022 ISMS certification in Lagos & Abuja. Protect enterprise customer data, prevent cyber breaches, and fulfill CBN fintech rules.',
    h1: 'ISO/IEC 27001:2022 Information Security Management Systems (ISMS) Certification'
  },
  {
    path: '/iso-22000-certification-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-22000' },
    title: 'ISO 22000:2018 Food Safety Management Certification Nigeria | IEMA',
    description: 'Accredited ISO 22000:2018 Food Safety Management System (FSMS) & HACCP certification in Nigeria for food processors, agriculture, and hospitality.',
    h1: 'ISO 22000:2018 Food Safety Management Systems (FSMS) Certification'
  },
  {
    path: '/iso-22301-certification-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-22301' },
    title: 'ISO 22301:2019 Business Continuity Certification Nigeria | IEMA Standards',
    description: 'Accredited ISO 22301:2019 Business Continuity Management Systems (BCMS) certification in Nigeria. Ensure resilience against outages, disasters, and cyber attacks.',
    h1: 'ISO 22301:2019 Business Continuity Management Systems (BCMS) Certification'
  },
  {
    path: '/iso-37001-certification-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-37001' },
    title: 'ISO 37001:2016 Anti-Bribery Management Certification Nigeria | IEMA',
    description: 'Accredited ISO 37001:2016 Anti-Bribery Management System (ABMS) certification. Prove ethical governance, win public tenders, and prevent corruption.',
    h1: 'ISO 37001:2016 Anti-Bribery Management Systems (ABMS) Certification'
  },
  {
    path: '/iso-50001-certification-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-50001' },
    title: 'ISO 50001:2018 Energy Management Certification Nigeria | IEMA Standards',
    description: 'Accredited ISO 50001:2018 Energy Management System (EnMS) certification in Nigeria. Cut operational energy bills, reduce carbon intensity, and optimize facilities.',
    h1: 'ISO 50001:2018 Energy Management Systems (EnMS) Certification'
  },
  {
    path: '/iso-13485-certification-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-13485' },
    title: 'ISO 13485:2016 Medical Devices Quality Certification Nigeria | IEMA',
    description: 'Accredited ISO 13485:2016 certification for medical devices, diagnostic equipment, and healthcare supply manufacturers in Nigeria and West Africa.',
    h1: 'ISO 13485:2016 Medical Devices Quality Management Certification'
  },
  {
    path: '/iso-20000-certification-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-20000' },
    title: 'ISO/IEC 20000-1:2018 IT Service Management Certification | IEMA Standards',
    description: 'Accredited ISO/IEC 20000-1:2018 IT Service Management (ITSM) certification for telecom, IT infrastructure providers, cloud datacenters, and MSPs in Nigeria.',
    h1: 'ISO/IEC 20000-1:2018 IT Service Management (ITSM) Certification'
  },
  {
    path: '/iso-29001-certification-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-29001' },
    title: 'ISO 29001:2020 Oil & Gas Quality Management Nigeria | IEMA Standards',
    description: 'Accredited ISO 29001:2020 petroleum, petrochemical & natural gas sector-specific quality management certification for NNPC, Shell, Chevron suppliers.',
    h1: 'ISO 29001:2020 Petroleum, Petrochemical & Natural Gas Quality Certification'
  },
  {
    path: '/iso-41001-certification-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-41001' },
    title: 'ISO 41001:2018 Facility Management Certification Nigeria | IEMA Standards',
    description: 'Accredited ISO 41001:2018 Facility Management (FM) certification. Optimize building operations, real estate asset value, and workplace productivity.',
    h1: 'ISO 41001:2018 Facility Management Systems (FMS) Certification'
  },
  {
    path: '/iso-27701-certification-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-27701' },
    title: 'ISO/IEC 27701:2019 Privacy Information Management | IEMA Standards',
    description: 'Accredited ISO/IEC 27701:2019 Privacy Information Management System (PIMS) certification. Align ISO 27001 with NDPA and GDPR data privacy mandates.',
    h1: 'ISO/IEC 27701:2019 Privacy Information Management Systems (PIMS) Certification'
  },
  {
    path: '/iso-17065-certification-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-17065' },
    title: 'ISO/IEC 17065:2012 Product, Process & Service Certification Nigeria | IEMA',
    description: 'Accredited ISO/IEC 17065:2012 conformity assessment for product, process, and service certification bodies in Nigeria under EGAC and IAF MLA.',
    h1: 'ISO/IEC 17065:2012 Product, Process & Service Certification'
  },
  {
    path: '/iso-17025-accreditation-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-17025' },
    title: 'ISO/IEC 17025:2017 Testing & Calibration Laboratories Nigeria | IEMA Standards',
    description: 'Accredited ISO/IEC 17025:2017 laboratory competence, measurement accuracy, traceability, and valid test reports under ILAC MRA in Nigeria.',
    h1: 'ISO/IEC 17025:2017 Testing & Calibration Laboratories Competence'
  },
  {
    path: '/iso-15189-certification-nigeria/',
    page: 'iso-detail',
    params: { standard: 'iso-15189' },
    title: 'ISO 15189:2022 Medical Laboratories Quality & Competence Nigeria | IEMA',
    description: 'Accredited ISO 15189:2022 medical and clinical pathology laboratory competence, diagnostic accuracy, and patient safety in Nigeria.',
    h1: 'ISO 15189:2022 Medical Laboratories Quality & Competence'
  }
];

/**
 * Maps legacy or alias URLs to their 301 redirect target
 */
export const REDIRECT_MAP_301: Record<string, string> = {
  // Old website pages indexed by Google
  '/aboutus': '/about-us/',
  '/aboutus/': '/about-us/',
  '/ourservices': '/certifications/',
  '/ourservices/': '/certifications/',
  '/our-team': '/our-team/',
  '/contactus': '/contact-us/',
  '/contactus/': '/contact-us/',
  '/certification': '/certifications/',
  '/certification/': '/certifications/',
  '/solutions': '/certifications/',
  '/solutions/': '/certifications/',
  '/our-projects': '/projects/',
  '/our-projects/': '/projects/',
  '/data-protection-compliance': '/data-protection-compliance/',

  // Short slug shortcuts
  '/iso-9001': '/iso-9001-certification-nigeria/',
  '/iso-9001/': '/iso-9001-certification-nigeria/',
  '/iso-14001': '/iso-14001-certification-nigeria/',
  '/iso-14001/': '/iso-14001-certification-nigeria/',
  '/iso-45001': '/iso-45001-certification-nigeria/',
  '/iso-45001/': '/iso-45001-certification-nigeria/',
  '/iso-27001': '/iso-27001-certification-nigeria/',
  '/iso-27001/': '/iso-27001-certification-nigeria/',
  '/iso-22000': '/iso-22000-certification-nigeria/',
  '/iso-22000/': '/iso-22000-certification-nigeria/',
  '/iso-22301': '/iso-22301-certification-nigeria/',
  '/iso-22301/': '/iso-22301-certification-nigeria/',
  '/iso-37001': '/iso-37001-certification-nigeria/',
  '/iso-37001/': '/iso-37001-certification-nigeria/',
  '/iso-50001': '/iso-50001-certification-nigeria/',
  '/iso-50001/': '/iso-50001-certification-nigeria/',
  '/iso-13485': '/iso-13485-certification-nigeria/',
  '/iso-13485/': '/iso-13485-certification-nigeria/',
  '/iso-20000': '/iso-20000-certification-nigeria/',
  '/iso-20000/': '/iso-20000-certification-nigeria/',
  '/iso-29001': '/iso-29001-certification-nigeria/',
  '/iso-29001/': '/iso-29001-certification-nigeria/',
  '/iso-41001': '/iso-41001-certification-nigeria/',
  '/iso-41001/': '/iso-41001-certification-nigeria/',
  '/iso-27701': '/iso-27701-certification-nigeria/',
  '/iso-27701/': '/iso-27701-certification-nigeria/',
  '/iso-17065': '/iso-17065-certification-nigeria/',
  '/iso-17065/': '/iso-17065-certification-nigeria/',
  '/iso-17025': '/iso-17025-accreditation-nigeria/',
  '/iso-17025/': '/iso-17025-accreditation-nigeria/',
  '/iso-15189': '/iso-15189-certification-nigeria/',
  '/iso-15189/': '/iso-15189-certification-nigeria/',

  '/ecomark': '/ecomark-certification-scheme/',
  '/ecomark/': '/ecomark-certification-scheme/',
  '/pci-dss': '/pci-dss-certification-nigeria/',
  '/pci-dss/': '/pci-dss-certification-nigeria/',
  '/testing-inspection': '/ndt-testing/',
  '/testing-inspection/': '/ndt-testing/',
  '/inspection': '/inspection-services/',
  '/inspection/': '/inspection-services/',
  '/training': '/lead-auditor-training/',
  '/training/': '/lead-auditor-training/',
  '/environmental': '/environmental-consultancy-nigeria/',
  '/environmental/': '/environmental-consultancy-nigeria/',
  '/compliance': '/compliance-services/',
  '/compliance/': '/compliance-services/',
  '/about': '/about-us/',
  '/about/': '/about-us/',
  '/team': '/our-team/',
  '/team/': '/our-team/',
  '/partners': '/our-partners/',
  '/partners/': '/our-partners/',
  '/approach': '/our-approach/',
  '/approach/': '/our-approach/',
  '/contact': '/contact-us/',
  '/contact/': '/contact-us/',
  '/quote': '/request-quote/',
  '/quote/': '/request-quote/',
  '/verify': '/verify-certificate/',
  '/verify/': '/verify-certificate/'
};

/**
 * Returns canonical route for a given page name and optional params
 */
export function getUrlForPage(page: string, params?: Record<string, string>): string {
  // 1. ISO Detail standard routes
  if (page === 'iso-detail' && params?.standard) {
    const std = params.standard.toLowerCase();
    const found = CANONICAL_ROUTES.find(r => r.page === 'iso-detail' && r.params?.standard === std);
    if (found) return found.path;
    return `/iso-${std}-certification-nigeria/`;
  }

  // 2. Compliance tab routes
  if (page === 'compliance' && params?.tab) {
    const tab = params.tab.toLowerCase();
    if (tab === 'ndpr' || tab === 'ndpa') return '/data-protection-compliance/';
    if (tab === 'aml') return '/aml-compliance-nigeria/';
    if (tab === 'diligence' || tab === 'due-diligence') return '/vendor-due-diligence-nigeria/';
    if (tab === 'iso37001' || tab === 'anti-bribery') return '/iso-37001-certification-nigeria/';
  }

  // 3. Direct route lookup
  const match = CANONICAL_ROUTES.find(r => r.page === page);
  if (match) return match.path;

  return '/';
}

/**
 * Normalizes input pathname and checks for redirects, 410 gone, or matching page
 */
export function resolveLocation(pathname: string, hash: string): {
  page: string;
  params: Record<string, string>;
  canonicalPath: string;
  redirectTo?: string;
  isGone410?: boolean;
} {
  // Normalize path
  let cleanPath = pathname.toLowerCase();
  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  // 1. Check for 410 Gone (demo product shop items from old theme)
  if (cleanPath.startsWith('/product/') || cleanPath === '/product') {
    return {
      page: 'gone410',
      params: { removedPath: pathname },
      canonicalPath: '/410/',
      isGone410: true
    };
  }

  // 2. Check for 301 Redirects
  if (REDIRECT_MAP_301[cleanPath] || REDIRECT_MAP_301[cleanPath + '/']) {
    const target = REDIRECT_MAP_301[cleanPath] || REDIRECT_MAP_301[cleanPath + '/'];
    if (target !== pathname) {
      return {
        page: '',
        params: {},
        canonicalPath: target,
        redirectTo: target
      };
    }
  }

  // 3. Match against canonical routes
  const matchedRoute = CANONICAL_ROUTES.find(r => {
    const routeClean = r.path.endsWith('/') && r.path.length > 1 ? r.path.slice(0, -1) : r.path;
    return routeClean === cleanPath;
  });

  if (matchedRoute) {
    return {
      page: matchedRoute.page,
      params: { ...matchedRoute.params },
      canonicalPath: matchedRoute.path
    };
  }

  // 4. Legacy Hash support (#iso-detail?standard=iso-9001, #training, etc.)
  if (hash) {
    const hashClean = hash.replace(/^#/, '');
    const [hashPage, hashQuery] = hashClean.split('?');
    const pObj: Record<string, string> = {};
    if (hashQuery) {
      new URLSearchParams(hashQuery).forEach((v, k) => { pObj[k] = v; });
    }

    if (hashPage === 'iso-detail' && pObj.standard) {
      const canonical = getUrlForPage('iso-detail', pObj);
      return {
        page: 'iso-detail',
        params: pObj,
        canonicalPath: canonical,
        redirectTo: canonical
      };
    }

    const legacyMap: Record<string, string> = {
      'about': '/about-us/',
      'team': '/our-team/',
      'partners': '/our-partners/',
      'approach': '/our-approach/',
      'accreditation': '/accreditation/',
      'certifications': '/certifications/',
      'ecomark': '/ecomark-certification-scheme/',
      'ecomark-certification': '/ecomark-certification-scheme/',
      'pci-dss': '/pci-dss-certification-nigeria/',
      'pci': '/pci-dss-certification-nigeria/',
      'testing-inspection': '/ndt-testing/',
      'inspection': '/inspection-services/',
      'training': '/lead-auditor-training/',
      'environmental': '/environmental-consultancy-nigeria/',
      'compliance': '/compliance-services/',
      'contact': '/contact-us/',
      'quote': '/request-quote/',
      'verify': '/verify-certificate/',
      'projects': '/projects/',
      'resources': '/resources/',
      'blog': '/blog/'
    };

    if (legacyMap[hashPage]) {
      const target = legacyMap[hashPage];
      return {
        page: hashPage,
        params: pObj,
        canonicalPath: target,
        redirectTo: target
      };
    }
  }

  // Default Fallback: Home
  return {
    page: 'home',
    params: {},
    canonicalPath: '/'
  };
}
