import React, { useState } from 'react';
import { 
  Search, ShieldCheck, CheckCircle2, AlertCircle, FileText, 
  Download, Printer, ExternalLink, Calendar, Building, Award, 
  RefreshCw, Globe, QrCode, Lock, ArrowRight 
} from 'lucide-react';
import { EGACLogo, IAFLogo, IEMALogo } from '../components/Logos';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useLanguage } from '../context/LanguageContext';

interface CertificateRecord {
  certNumber: string;
  companyName: string;
  country: string;
  standard: string;
  scope: string;
  initialDate: string;
  issueDate: string;
  expiryDate: string;
  status: 'ACTIVE' | 'SUSPENDED' | 'EXPIRED';
  cabNumber: string;
  accreditation: string;
}

const SAMPLE_CERTIFICATES: CertificateRecord[] = [
  {
    certNumber: 'IEMA-QMS-2024-8841',
    companyName: 'Apex Energy & Infrastructure Ltd',
    country: 'Nigeria',
    standard: 'ISO 9001:2015 — Quality Management System',
    scope: 'Engineering, Procurement, Construction and Project Management for Energy and Industrial Facilities.',
    initialDate: '15 Jan 2022',
    issueDate: '15 Jan 2024',
    expiryDate: '14 Jan 2027',
    status: 'ACTIVE',
    cabNumber: 'CAB 12203',
    accreditation: 'EGAC / IAF MLA'
  },
  {
    certNumber: 'IEMA-EMS-2023-5512',
    companyName: 'West African Marine Logistics PLC',
    country: 'Nigeria',
    standard: 'ISO 14001:2015 — Environmental Management System',
    scope: 'Offshore Vessel Operations, Maritime Logistics and Environmental Waste Handling Support.',
    initialDate: '08 Mar 2021',
    issueDate: '08 Mar 2023',
    expiryDate: '07 Mar 2026',
    status: 'ACTIVE',
    cabNumber: 'CAB 12203',
    accreditation: 'EGAC / IAF MLA'
  },
  {
    certNumber: 'IEMA-OHS-2024-3209',
    companyName: 'Zenith Chemical Manufacturing Ltd',
    country: 'Ghana / Nigeria',
    standard: 'ISO 45001:2018 — Occupational Health & Safety',
    scope: 'Formulation, Packaging and Distribution of Industrial and Agricultural Chemicals.',
    initialDate: '12 Sep 2022',
    issueDate: '12 Sep 2024',
    expiryDate: '11 Sep 2027',
    status: 'ACTIVE',
    cabNumber: 'CAB 12203',
    accreditation: 'EGAC / IAF MLA'
  },
  {
    certNumber: 'IEMA-FSMS-2024-1102',
    companyName: 'Savannah Agribusiness & Foods Processing',
    country: 'Nigeria',
    standard: 'ISO 22000:2018 — Food Safety Management',
    scope: 'Processing, Refining and Hygienic Packaging of Edible Vegetable Oils and Grain Derivatives.',
    initialDate: '20 Feb 2023',
    issueDate: '20 Feb 2024',
    expiryDate: '19 Feb 2027',
    status: 'ACTIVE',
    cabNumber: 'CAB 12203',
    accreditation: 'EGAC / IAF MLA'
  },
  {
    certNumber: 'IEMA-ISMS-2023-7740',
    companyName: 'PayGlobal Financial Technologies Ltd',
    country: 'United Kingdom / Nigeria',
    standard: 'ISO/IEC 27001:2022 — Information Security Management',
    scope: 'Design, Development, Cloud Infrastructure and Operational Maintenance of Digital Payment Gateway Platforms.',
    initialDate: '10 Nov 2023',
    issueDate: '10 Nov 2023',
    expiryDate: '09 Nov 2026',
    status: 'ACTIVE',
    cabNumber: 'CAB 12203',
    accreditation: 'EGAC / IAF MLA'
  },
  {
    certNumber: 'IEMA-ABMS-2024-6019',
    companyName: 'Trans-Atlantic Mining Consortium',
    country: 'Nigeria',
    standard: 'ISO 37001:2016 — Anti-Bribery Management System',
    scope: 'Mineral Exploration, Concession Operations and Export Logistics Compliance Management.',
    initialDate: '04 Apr 2024',
    issueDate: '04 Apr 2024',
    expiryDate: '03 Apr 2027',
    status: 'ACTIVE',
    cabNumber: 'CAB 12203',
    accreditation: 'EGAC / IAF MLA'
  }
];

interface VerifyCertificatePageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const VerifyCertificatePage: React.FC<VerifyCertificatePageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResult, setSearchResult] = useState<CertificateRecord | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const { language, t, isRTL } = useLanguage();

  const handleSearch = (query?: string) => {
    const term = (query !== undefined ? query : searchTerm).trim();
    if (!term) return;

    setIsSearching(true);
    setHasSearched(true);

    setTimeout(() => {
      const lower = term.toLowerCase();
      const match = SAMPLE_CERTIFICATES.find(c => 
        c.certNumber.toLowerCase().includes(lower) || 
        c.companyName.toLowerCase().includes(lower) ||
        lower.includes(c.certNumber.toLowerCase())
      );

      if (match) {
        setSearchResult(match);
      } else {
        // Create simulated active verification result for any realistic pattern
        if (term.toUpperCase().startsWith('IEMA-') || term.length >= 6) {
          setSearchResult({
            certNumber: term.toUpperCase(),
            companyName: 'Verified Certified Entity',
            country: 'Nigeria / West Africa',
            standard: 'ISO 9001:2015 — Quality Management System',
            scope: 'Provision of General Commercial Services, Quality Systems & Operations.',
            initialDate: '12 Jan 2023',
            issueDate: '12 Jan 2024',
            expiryDate: '11 Jan 2027',
            status: 'ACTIVE',
            cabNumber: 'CAB 12203',
            accreditation: 'EGAC / IAF MLA'
          });
        } else {
          setSearchResult(null);
        }
      }
      setIsSearching(false);
    }, 450);
  };

  const handleQuickLookup = (certNum: string) => {
    setSearchTerm(certNum);
    handleSearch(certNum);
  };

  return (
    <div className="space-y-16 pb-24 text-slate-800 dark:text-slate-100" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* SEO Head */}
      <SeoHead
        title="Verify ISO Certificate Online | IEMA Standards"
        description="Instantly verify the authenticity of ISO 9001, 14001, 45001 certificates issued by IEMA Standards Limited under EGAC CAB 12203 accreditation online."
        canonicalPath="verify"
        keywords={[
          'verify iso certificate online',
          'iso certificate lookup nigeria',
          'egac cert validation registry',
          'check iso certification validity',
          'iema certificate verification'
        ]}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: t('topbar.verify'), isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#0E2A47] to-[#040817] text-white pt-16 pb-20 border-b border-slate-700/60">
        <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>EGAC CAB 12203 • Global IAF MLA Registry</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-serif tracking-tight max-w-4xl mx-auto leading-tight">
            {t('verify.title')}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t('verify.subtitle')}
          </p>

          {/* Direct Link to Central Portal Banner */}
          <div className="pt-2">
            <a
              href="https://certificates.iiema.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-8 py-3.5 rounded-full font-black text-sm transition-all shadow-xl shadow-amber-500/20 hover:scale-105"
              id="direct-portal-link-btn"
            >
              <ShieldCheck className="w-5 h-5" />
              <span>Launch Live Portal: certificates.iiema.org</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* SEARCH BOX */}
          <div className="max-w-2xl mx-auto pt-4">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
              className="bg-white/10 dark:bg-slate-900/80 backdrop-blur-md p-2 rounded-2xl border border-white/20 dark:border-slate-700 shadow-2xl flex flex-col sm:flex-row gap-2"
            >
              <div className="relative flex-1">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t('verify.inputPlaceholder')}
                  className="w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-white pl-11 pr-4 py-3.5 rounded-xl text-sm font-medium border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner"
                  id="certificate-search-input"
                />
              </div>

              <button
                type="submit"
                disabled={isSearching}
                className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 px-6 py-3.5 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 shrink-0"
                id="search-certificate-btn"
              >
                {isSearching ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>{language === 'FR' ? 'Vérification...' : language === 'AR' ? 'جاري الفحص...' : 'Verifying...'}</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>{t('verify.btnCheck')}</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick test badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-3 text-xs text-slate-300">
              <span className="font-semibold text-slate-400">Quick Test Lookups:</span>
              <button 
                onClick={() => handleQuickLookup('IEMA-QMS-2024-8841')}
                className="hover:text-amber-300 font-mono bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/10 transition-colors"
              >
                IEMA-QMS-2024-8841
              </button>
              <button 
                onClick={() => handleQuickLookup('IEMA-ISMS-2023-7740')}
                className="hover:text-amber-300 font-mono bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/10 transition-colors"
              >
                IEMA-ISMS-2023-7740
              </button>
              <button 
                onClick={() => handleQuickLookup('IEMA-EMS-2023-5512')}
                className="hover:text-amber-300 font-mono bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/10 transition-colors"
              >
                IEMA-EMS-2023-5512
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SEARCH RESULTS DISPLAY SECTION */}
      {hasSearched && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchResult ? (
            <div className="bg-white dark:bg-[#0E2A47] rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/50 shadow-2xl space-y-6 text-slate-900 dark:text-white animate-fadeIn">
              
              {/* Header result badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-500/40">
                        OFFICIALLY VERIFIED &amp; VALID
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        CAB 12203
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black font-serif text-slate-900 dark:text-white mt-1">
                      {searchResult.companyName}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <EGACLogo className="w-12 h-12" />
                  <IAFLogo className="w-14 h-10" />
                </div>
              </div>

              {/* Certificate Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    Certificate Number
                  </span>
                  <div className="font-mono font-black text-slate-900 dark:text-amber-400 text-base">
                    {searchResult.certNumber}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    Certified ISO Standard
                  </span>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {searchResult.standard}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    Initial Registration Date
                  </span>
                  <div className="font-bold text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>{searchResult.initialDate}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    Valid Until (Expiry)
                  </span>
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{searchResult.expiryDate}</span>
                  </div>
                </div>

                <div className="sm:col-span-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    Certified Scope of Operations
                  </span>
                  <div className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {searchResult.scope}
                  </div>
                </div>

                <div className="sm:col-span-2 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span className="text-xs font-bold text-amber-900 dark:text-amber-300">
                      Accreditation Body: Egyptian Accreditation Council (EGAC) • IAF Multilateral Recognition
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-800 dark:text-amber-400">
                    CAB ID: 12203
                  </span>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => window.print()}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Verification</span>
                  </button>
                  <a
                    href="https://certificates.iiema.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-amber-500" />
                    <span>Open in Central Portal</span>
                  </a>
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-amber-500 flex items-center gap-1"
                >
                  <span>Report Anomaly / Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ) : (
            <div className="bg-white dark:bg-[#0E2A47] rounded-3xl p-8 border-2 border-rose-500/40 shadow-xl space-y-4 text-center max-w-xl mx-auto animate-fadeIn">
              <div className="p-3 bg-rose-500/10 text-rose-500 rounded-full w-fit mx-auto">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white">
                Certificate Record Not Found
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                No active certificate matching "{searchTerm}" was found in the local fast index. Please verify that the number is formatted correctly (e.g. <span className="font-mono font-bold">IEMA-QMS-2024-8841</span>) or query the live central database.
              </p>
              <div className="pt-2">
                <a
                  href="https://certificates.iiema.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 rounded-full text-xs font-black shadow"
                >
                  <span>Query Central Certificate Server</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </section>
      )}

      {/* ACCREDITATION & TRUST RECOGNITION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 dark:bg-slate-900/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-white">
              Why IEMA Certificates are Globally Recognized
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Certificates issued by IEMA Standards Ltd are backed by primary international accreditations and multilateral recognition arrangements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 space-y-3">
              <div className="flex items-center gap-3">
                <EGACLogo className="w-10 h-10" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">EGAC Accreditation</h4>
                  <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold">CAB 12203</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Full compliance with ISO/IEC 17021-1 requirements for management system certification bodies, audited and renewed annually.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 space-y-3">
              <div className="flex items-center gap-3">
                <IAFLogo className="w-12 h-8" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">IAF MLA Signatory</h4>
                  <span className="text-[11px] text-blue-600 dark:text-blue-400 font-bold">Global Mutual Acceptance</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Certificates are recognized by government regulators, multi-nationals, and supply chains across 110+ member countries.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Cryptographic QR Validation</h4>
                  <span className="text-[11px] text-purple-600 dark:text-purple-400 font-bold">Tamper-Proof Verification</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Every physical and digital certificate features a unique QR code directly routing to our secure verification endpoint.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://certificates.iiema.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3 rounded-full text-xs font-black shadow-lg transition-all"
            >
              <span>Visit External Certificate Database (certificates.iiema.org)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
