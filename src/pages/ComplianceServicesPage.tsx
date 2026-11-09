import React, { useState, useEffect } from 'react';
import { 
  FileCheck2, ShieldCheck, Leaf, Lock, Scale, 
  ArrowRight, CheckCircle2, Building2, Check, UserCheck, Eye, 
  AlertTriangle, ExternalLink, HelpCircle, Phone, Mail, Sparkles, ChevronRight, CreditCard
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AmlComplianceSection } from '../components/compliance/AmlComplianceSection';
import { DataProtectionSection } from '../components/compliance/DataProtectionSection';
import { Iso37001Section } from '../components/compliance/Iso37001Section';
import { VendorDueDiligenceSection } from '../components/compliance/VendorDueDiligenceSection';

interface ComplianceServicesPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  initialTab?: string;
}

export const ComplianceServicesPage: React.FC<ComplianceServicesPageProps> = ({ 
  onNavigate, 
  initialTab = 'aml' 
}) => {
  // Normalize initialTab values (e.g. 'due-diligence' -> 'diligence', 'data-protection' -> 'ndpr')
  const normalizeTab = (tabStr?: string) => {
    if (!tabStr) return 'aml';
    const lower = tabStr.toLowerCase();
    if (lower === 'due-diligence' || lower === 'diligence') return 'diligence';
    if (lower === 'data-protection' || lower === 'ndpr' || lower === 'ndpa' || lower === 'gdpr') return 'ndpr';
    if (lower === 'iso37001' || lower === 'iso-37001' || lower === 'anti-bribery') return 'iso37001';
    return 'aml';
  };

  const [activeTab, setActiveTab] = useState<string>(normalizeTab(initialTab));

  useEffect(() => {
    if (initialTab) {
      if (initialTab.toLowerCase() === 'pci' || initialTab.toLowerCase() === 'pci-dss') {
        onNavigate('pci-dss');
      } else {
        setActiveTab(normalizeTab(initialTab));
      }
    }
  }, [initialTab, onNavigate]);

  const tabs = [
    {
      id: 'aml',
      label: 'Anti-Money Laundering (AML/SCUML)',
      icon: Scale,
      badge: 'NFIU & SCUML',
      desc: 'Risk-based AML/CFT/CPF policy design, KYC/CDD, and annual independent statutory audits.'
    },
    {
      id: 'ndpr',
      label: 'Data Protection (NDPA / GDPR)',
      icon: Lock,
      badge: 'NDPC Licensed DPCO',
      desc: 'Nigeria Data Protection Act audits, DPO retainership, DPIA assessments & statutory returns.'
    },
    {
      id: 'iso37001',
      label: 'ISO 37001 Anti-Bribery Systems',
      icon: ShieldCheck,
      badge: 'EGAC & IAF Accredited',
      desc: 'Anti-Bribery Management System certification, procurement defenses, and FCPA/UKBA alignment.'
    },
    {
      id: 'diligence',
      label: 'Corporate & Vendor Due Diligence',
      icon: UserCheck,
      badge: 'UBO & PEP Screening',
      desc: 'Ultimate Beneficial Ownership (UBO) tracing, supply chain ESG audits, and M&A compliance.'
    }
  ];

  return (
    <div className="space-y-12 pb-20 bg-slate-50 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 transition-colors duration-200 min-h-screen">
      
      <SeoHead
        title="Regulatory Compliance & Auditing | IEMA Standards"
        description="Statutory NDPA data protection audits (licensed DPCO), AML/CFT compliance, and ISO 37001 anti-bribery management systems in Nigeria. Contact our experts."
        keywords={[
          'AML compliance Nigeria',
          'SCUML certificate Lagos',
          'NDPA data protection audit',
          'DPCO Nigeria',
          'ISO 37001 certification Nigeria',
          'vendor due diligence Nigeria',
          'UBO screening CAC',
          'NFIU STR CTR reporting'
        ]}
        canonicalPath="compliance"
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'Regulatory Compliance & Statutory Audits', isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header Banner */}
      <section className="bg-[#070F2B] text-white py-16 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1600" 
            alt="Compliance & Regulatory Advisory" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button onClick={() => onNavigate('home')} className="hover:text-amber-400 transition-colors">Home</button>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <button onClick={() => onNavigate('certifications')} className="hover:text-amber-400 transition-colors">Our Services</button>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-amber-400 font-semibold">Institutional Compliance & Regulatory Advisory</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-950/80 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold border border-emerald-800/80">
            <FileCheck2 className="w-4 h-4 text-emerald-400" />
            <span>Institutional Regulatory Governance, Audits & Certification</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif leading-tight">
            Institutional Compliance & Regulatory Advisory
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-4xl leading-relaxed">
            IEMA Standards Limited delivers risk-based anti-money laundering (AML/CFT) frameworks, Special Control Unit Against Money Laundering (SCUML) audit clearances, NDPC-licensed Nigeria Data Protection Act (NDPA/GDPR) audits, accredited ISO 37001 Anti-Bribery systems, and corporate & vendor due diligence for enterprises across Nigeria and international markets.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>NFIU / SCUML Authorized Frameworks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>NDPC Licensed DPCO</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>EGAC & IAF MLA Accredited</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Featured PCI DSS v4.0.1 Hub Card */}
        <div className="bg-gradient-to-r from-[#070F2B] via-[#0A192F] to-[#122A4E] text-white rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-mono font-bold">
              <CreditCard className="w-4 h-4 text-amber-400" />
              <span>Payment Security Mandate</span>
              <span className="text-slate-500">·</span>
              <span className="text-emerald-400">v4.0.1 Ready</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-serif text-white">
              Looking for <span className="text-amber-400">PCI DSS v4.0.1</span> Compliance &amp; Certification?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Full-scope CDE boundary scoping, Report on Compliance (RoC), SAQ A through D attestation, and quarterly ASV vulnerability scanning for banks, fintechs, and payment gateways.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => onNavigate('pci-dss')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
              id="compliance-pci-dss-banner-btn"
            >
              <span>Explore PCI DSS Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs (Rich Card Pills) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between space-y-2 ${
                  isActive
                    ? 'bg-[#DC2626] text-white border-red-700 shadow-xl scale-[1.02]'
                    : 'bg-white dark:bg-[#0E2A47] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#12365B] border-slate-200 dark:border-slate-700/80 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-amber-500'}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isActive ? 'bg-black/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                    {tab.badge}
                  </span>
                </div>
                <div>
                  <h3 className={`text-xs font-black leading-snug ${isActive ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {tab.label}
                  </h3>
                  <p className={`text-[11px] mt-1 line-clamp-2 leading-relaxed ${isActive ? 'text-white/90' : 'text-slate-500 dark:text-slate-400'}`}>
                    {tab.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Tab Content Modules */}
        <div className="pt-2">
          {activeTab === 'aml' && <AmlComplianceSection onNavigate={onNavigate} />}
          {activeTab === 'ndpr' && <DataProtectionSection onNavigate={onNavigate} />}
          {activeTab === 'iso37001' && <Iso37001Section onNavigate={onNavigate} />}
          {activeTab === 'diligence' && <VendorDueDiligenceSection onNavigate={onNavigate} />}
        </div>

        {/* Global Institutional CTA Quote Request */}
        <div className="p-8 sm:p-10 bg-gradient-to-r from-[#070F2B] via-[#0A192F] to-[#1E293B] text-white rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 max-w-2xl relative z-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Confidential Advisory Desk</span>
            <h3 className="text-2xl sm:text-3xl font-black font-serif text-white leading-tight">
              Require an Institutional Compliance Audit or Regulatory Advisory?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Engage directly with our senior compliance officers, licensed DPCO lead auditors, and forensic due diligence investigators for a bespoke compliance audit proposal.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
              <a href="tel:+2348134831027" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+234 813 483 1027</span>
              </a>
              <a href="mailto:info@iemacert.com" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>info@iemacert.com</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full lg:w-auto">
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#DC2626] hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-xl"
            >
              <span>Request Compliance Proposal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm transition-colors text-center"
            >
              Contact Head Office
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
