import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, Award, FileText, FlaskConical, ShieldCheck, ArrowRight, BookOpen, ExternalLink } from 'lucide-react';
import { trackConversionEvent } from '../utils/analytics';
import { useLanguage } from '../context/LanguageContext';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

interface SearchItem {
  id: string;
  title: string;
  category: 'ISO Standards' | 'Services & Testing' | 'Insights & Blog' | 'Company & Trust';
  description: string;
  page: string;
  params?: Record<string, string>;
  badge?: string;
}

const SEARCH_DATABASE: SearchItem[] = [
  // Standards
  {
    id: 's-9001',
    title: 'ISO 9001:2015 Quality Management Systems (QMS)',
    category: 'ISO Standards',
    description: 'Accredited quality management certification in Nigeria. Fulfill client tenders and international supplier qualifications.',
    page: 'iso-detail',
    params: { standard: 'iso-9001', slug: 'iso-9001-certification-nigeria' },
    badge: 'Most Popular'
  },
  {
    id: 's-14001',
    title: 'ISO 14001:2015 Environmental Management Systems (EMS)',
    category: 'ISO Standards',
    description: 'Statutory environmental compliance, NESREA & NUPRC alignment, and waste reduction audits.',
    page: 'iso-detail',
    params: { standard: 'iso-14001', slug: 'iso-14001-certification-nigeria' }
  },
  {
    id: 's-45001',
    title: 'ISO 45001:2018 Occupational Health & Safety (OH&SMS)',
    category: 'ISO Standards',
    description: 'Workplace hazard prevention, factory safety audits, and oilfield worker health protection.',
    page: 'iso-detail',
    params: { standard: 'iso-45001', slug: 'iso-45001-certification-nigeria' }
  },
  {
    id: 's-27001',
    title: 'ISO/IEC 27001:2022 Information Security Management (ISMS)',
    category: 'ISO Standards',
    description: 'Enterprise cybersecurity, NDPA 2023 compliance, cloud security controls, and banking IT audits.',
    page: 'iso-detail',
    params: { standard: 'iso-27001', slug: 'iso-27001-certification-nigeria' },
    badge: 'Cybersecurity'
  },
  {
    id: 's-22000',
    title: 'ISO 22000:2018 Food Safety Management Systems (FSMS) & HACCP',
    category: 'ISO Standards',
    description: 'Food processing hygiene, cold-chain verification, and NAFDAC export trade readiness.',
    page: 'iso-detail',
    params: { standard: 'iso-22000', slug: 'iso-22000-certification-nigeria' }
  },
  {
    id: 's-37001',
    title: 'ISO 37001:2016 Anti-Bribery Management Systems (ABMS)',
    category: 'ISO Standards',
    description: 'Corporate ethics, procurement transparency, and anti-corruption compliance frameworks.',
    page: 'iso-detail',
    params: { standard: 'iso-37001', slug: 'iso-37001-certification-nigeria' }
  },
  {
    id: 's-17065',
    title: 'ISO/IEC 17065:2012 Product, Process & Service Certification',
    category: 'ISO Standards',
    description: 'Accreditation for product certification bodies, consumer goods, construction materials & statutory marks.',
    page: 'iso-detail',
    params: { standard: 'iso-17065', slug: 'iso-17065-product-process-service-certification' },
    badge: 'Product Quality'
  },
  {
    id: 's-17025',
    title: 'ISO/IEC 17025:2017 Testing & Calibration Laboratories Competence',
    category: 'ISO Standards',
    description: 'International laboratory competence benchmark, test accuracy, measurement uncertainty, and ILAC MRA recognition.',
    page: 'iso-detail',
    params: { standard: 'iso-17025', slug: 'iso-17025-testing-calibration-laboratories' },
    badge: 'Laboratory'
  },
  {
    id: 's-15189',
    title: 'ISO 15189:2022 Medical & Clinical Laboratories Quality & Competence',
    category: 'ISO Standards',
    description: 'Gold-standard accreditation for diagnostic pathology labs, clinical risk management, and patient test accuracy.',
    page: 'iso-detail',
    params: { standard: 'iso-15189', slug: 'medical-laboratories-quality-competence-iso-15189' },
    badge: 'Clinical & Medical'
  },
  {
    id: 's-pci-dss',
    title: 'PCI DSS v4.0.1 Compliance & Qualified Security Audits',
    category: 'Services & Testing',
    description: 'Cardholder data environment audits, RoC validation, and SAQ assistance for fintechs and banks.',
    page: 'pci-dss',
    badge: 'Fintech Security'
  },
  {
    id: 's-ecomark',
    title: 'EcoMark Global & African Sustainability Certification',
    category: 'Services & Testing',
    description: 'Independent eco-labeling scheme evaluating circularity, renewable energy, and eco-packaging.',
    page: 'ecomark',
    badge: 'Green Product'
  },
  {
    id: 's-ndt',
    title: 'Non-Destructive Testing (NDT) & Materials Laboratory',
    category: 'Services & Testing',
    description: 'Ultrasonic testing, radiographic inspection, MPI, dye penetrant, and UTM tensile tests.',
    page: 'testing-inspection',
    params: { tab: 'materials-testing' }
  },
  {
    id: 's-inspection',
    title: 'Technical Inspection & API Asset Integrity',
    category: 'Services & Testing',
    description: 'API 510/570/653 pressure vessels, pipeline corrosion surveillance, and lifting gear inspection.',
    page: 'inspection'
  },
  {
    id: 's-env',
    title: 'Environmental Consultancy & EIA Studies',
    category: 'Services & Testing',
    description: 'Statutory environmental audits (EAR), stack emissions, baseline studies, and LASEPA/NESREA permits.',
    page: 'environmental'
  },
  {
    id: 's-compliance',
    title: 'Regulatory Compliance & NDPA Data Protection',
    category: 'Services & Testing',
    description: 'Licensed DPCO data audits, anti-money laundering (AML) audits, and vendor due diligence.',
    page: 'compliance'
  },

  // Insights / Blog
  {
    id: 'b-how-9001',
    title: 'How to Get ISO 9001 Certified in Nigeria: Step-by-Step Guide',
    category: 'Insights & Blog',
    description: 'Complete breakdown of gap analysis, Stage 1 & Stage 2 audits, timelines, and certification costs.',
    page: 'blog'
  },
  {
    id: 'b-cost',
    title: 'Cost of ISO Certification in Nigeria: Pricing Breakdown & Budget Guide',
    category: 'Insights & Blog',
    description: 'Transparent audit day calculations, SME rates, and ROI analysis for Nigerian businesses.',
    page: 'blog'
  },
  {
    id: 'b-22000-haccp',
    title: 'Difference Between ISO 22000 and HACCP Explained',
    category: 'Insights & Blog',
    description: 'Technical comparison of HACCP prerequisite programs vs ISO 22000 management system integration.',
    page: 'blog'
  },
  {
    id: 'b-egac-iaf',
    title: 'EGAC vs. IAF Accreditation Explained: Why Genuine Recognition Matters',
    category: 'Insights & Blog',
    description: 'How IAF MLA multilateral recognition validates Nigerian certificates worldwide under CAB 12203.',
    page: 'blog'
  },

  // Company / Trust
  {
    id: 'c-accreditation',
    title: 'Accreditation Status & Global Recognition (EGAC CAB 12203)',
    category: 'Company & Trust',
    description: 'View and download official EGAC accreditation certificates with IAF MLA treaty coverage.',
    page: 'accreditation'
  },
  {
    id: 'c-verify',
    title: 'Online Certificate Verification Registry',
    category: 'Company & Trust',
    description: 'Instant lookup and validation tool for all authentic ISO certificates issued by IEMA Standards.',
    page: 'verify'
  },
  {
    id: 'c-quote',
    title: 'Request an Official Audit Quotation',
    category: 'Company & Trust',
    description: 'Fast-track audit proposal form with transparent pricing for Nigerian enterprises.',
    page: 'quote'
  },
  {
    id: 'c-team',
    title: 'Lead Auditors & Executive Technical Directorate',
    category: 'Company & Trust',
    description: 'Meet IEMA certified lead auditors, technical managers, and QHSE compliance specialists.',
    page: 'team'
  },
  {
    id: 'c-partners',
    title: 'Our Clients & Strategic Regulatory Alliances',
    category: 'Company & Trust',
    description: 'Explore the 11+ corporate clients and national energy alliances (NNPC, NCDMB, OGTAN).',
    page: 'partners'
  }
];

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { t, language, isRTL } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) {
      return SEARCH_DATABASE.slice(0, 8);
    }
    const q = query.toLowerCase();
    return SEARCH_DATABASE.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (item: SearchItem) => {
    trackConversionEvent('search_performed', {
      query,
      selectedItem: item.title,
      page: item.page
    });
    onNavigate(item.page, item.params);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div 
        className="w-full max-w-2xl bg-white dark:bg-[#0B1E38] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden flex flex-col text-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#070F2B]">
          <Search className="w-5 h-5 text-amber-500 shrink-0" />
          <input
            ref={inputRef}
            type="search"
            placeholder={t('search.placeholder')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          {results.length > 0 ? (
            results.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className="w-full text-left p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all flex items-start justify-between gap-3 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                    {item.description}
                  </p>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all shrink-0 mt-2" />
              </button>
            ))
          ) : (
            <div className="text-center py-8 space-y-2 text-slate-500 dark:text-slate-400">
              <p className="text-xs">{t('search.noResults')}</p>
              <button
                onClick={() => {
                  onNavigate('contact');
                  onClose();
                }}
                className="text-xs text-amber-600 dark:text-amber-400 font-bold hover:underline"
              >
                {t('contact.sendInquiry')} &rarr;
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 dark:bg-[#070F2B] border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono text-[10px]">ESC</kbd>
            <span>{t('search.close')}</span>
          </div>
          <div>
            <span>Official Portal: </span>
            <strong className="text-slate-700 dark:text-slate-300">www.iemacert.com</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
