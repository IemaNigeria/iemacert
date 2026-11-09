import React, { useState, useMemo } from 'react';
import { 
  Award, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft,
  ChevronRight, Leaf, Lock, Zap, Utensils, Stethoscope, Scale, 
  FileText, Check, Building2, Layers, ListChecks, PackageCheck, FlaskConical,
  BookOpen, ExternalLink, HelpCircle, DollarSign, Clock,
  Phone, Mail, MapPin, Sparkles, ChevronDown, Download, Share2,
  Calendar, CheckSquare, AlertCircle, Calculator, Compass, Users,
  Globe2, ShieldAlert, Cpu, FileCheck, CheckCircle
} from 'lucide-react';
import { ISO_STANDARDS, TRAINING_COURSES } from '../data/mockData';
import { IEMACERT_PROGRAMS } from './CertificationsPage';
import { IsoStandard } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface IsoCertificationDetailPageProps {
  standardId?: string;
  slug?: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const IsoCertificationDetailPage: React.FC<IsoCertificationDetailPageProps> = ({
  standardId,
  slug,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'principles' | 'clauses' | 'benefits' | 'process' | 'documentation' | 'estimator'>('overview');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isCopied, setIsCopied] = useState(false);

  // Estimator interactive state
  const [empCount, setEmpCount] = useState<number>(35);
  const [sitesCount, setSitesCount] = useState<number>(1);
  const [riskTier, setRiskTier] = useState<'low' | 'med' | 'high'>('med');
  const [hasExistingIMS, setHasExistingIMS] = useState<boolean>(false);

  // Match standard by id or slug
  const standard: IsoStandard = useMemo(() => {
    if (standardId) {
      const found = ISO_STANDARDS.find(s => s.id === standardId);
      if (found) return found;
    }
    if (slug) {
      const prog = IEMACERT_PROGRAMS.find(p => p.slug === slug || p.id === slug || p.targetUrl?.includes(slug));
      if (prog) {
        const found = ISO_STANDARDS.find(s => s.id === prog.id);
        if (found) return found;
      }
      const direct = ISO_STANDARDS.find(s => s.slug === slug || s.id === slug);
      if (direct) return direct;
    }
    return ISO_STANDARDS[0];
  }, [standardId, slug]);

  // Find matching program metadata
  const programMeta = useMemo(() => {
    return IEMACERT_PROGRAMS.find(p => p.id === standard.id) || IEMACERT_PROGRAMS[0];
  }, [standard.id]);

  // Current index for next/prev navigation
  const currentIndex = ISO_STANDARDS.findIndex(s => s.id === standard.id);
  const prevStandard = currentIndex > 0 ? ISO_STANDARDS[currentIndex - 1] : ISO_STANDARDS[ISO_STANDARDS.length - 1];
  const nextStandard = currentIndex < ISO_STANDARDS.length - 1 ? ISO_STANDARDS[currentIndex + 1] : ISO_STANDARDS[0];

  // Related training course
  const relatedCourse = useMemo(() => {
    const codePrefix = standard.code.split(':')[0].replace(/[^0-9]/g, '');
    return TRAINING_COURSES.find(c => c.code.includes(codePrefix) || c.title.toLowerCase().includes(codePrefix)) || TRAINING_COURSES[0];
  }, [standard.code]);

  // Calculate estimated audit man-days based on IAF MD5 rules
  const estimatedAuditDays = useMemo(() => {
    let baseDays = 2.5;
    if (empCount <= 10) baseDays = 2.0;
    else if (empCount <= 25) baseDays = 3.0;
    else if (empCount <= 65) baseDays = 4.0;
    else if (empCount <= 175) baseDays = 5.5;
    else if (empCount <= 400) baseDays = 7.0;
    else baseDays = 9.0;

    if (riskTier === 'high') baseDays *= 1.25;
    if (riskTier === 'low') baseDays *= 0.85;

    if (sitesCount > 1) {
      baseDays += (sitesCount - 1) * 1.2;
    }

    if (hasExistingIMS) {
      baseDays *= 0.75; // 25% IMS reduction
    }

    return Math.max(2, Math.round(baseDays * 10) / 10);
  }, [empCount, sitesCount, riskTier, hasExistingIMS]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${standard.code} - ${standard.name} | IEMA Standards Limited`,
        text: standard.shortDesc,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const getStandardIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf': return <Leaf className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Lock': return <Lock className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Utensils': return <Utensils className="w-6 h-6" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
      case 'Scale': return <Scale className="w-6 h-6" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'DollarSign': return <DollarSign className="w-6 h-6" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6" />;
      case 'PackageCheck': return <PackageCheck className="w-6 h-6" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
      <SeoHead 
        title={`${standard.code} Certification in Nigeria | IEMA Standards`}
        description={`Get EGAC & IAF MLA accredited ${standard.code} certification in Nigeria. Fast 4-8 week roadmap, international recognition, and dedicated auditors. Apply now.`}
        canonicalPath={`#iso-detail?standard=${standard.id}`}
      />

      {/* Top Breadcrumb Bar */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-16 z-30 shadow-xs">
        <Breadcrumbs
          items={[
            { label: 'Certifications', page: 'certifications' },
            { label: standard.code, isCurrent: true }
          ]}
          onNavigate={onNavigate}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5"
          rightContent={
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('certifications')}
                className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Standards</span>
              </button>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>{isCopied ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>
          }
        />
      </div>

      {/* Hero Header Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden py-12 md:py-16 border-b border-slate-800">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Title & Description */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 flex items-center gap-1.5">
                  {getStandardIcon(standard.iconName)}
                  <span>{standard.category}</span>
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> EGAC & IAF MLA Accredited CAB 12203
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  {standard.validityYears || 3}-Year Certificate
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {standard.code} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300 font-extrabold text-2xl sm:text-3xl lg:text-4xl block mt-2">
                  {standard.name}
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {standard.fullDesc}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onNavigate('quote', { standard: standard.code })}
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base rounded-xl shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <DollarSign className="w-5 h-5 text-slate-950" />
                  <span>Request Accredited Quote</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <a
                  href={`https://wa.me/2348134831027?text=Hello%20IEMA%20Standards,%20I%20am%20inquiring%20about%20${encodeURIComponent(standard.code)}%20certification.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-base rounded-xl border border-white/20 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Speak with Lead Auditor</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Official IAF CertSearch Listed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>NIPEX, NCDMB & DPR Tender Eligible</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>ISO/IEC 17021-1 Conformity</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Photo & ISO Seal */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 group">
                <img
                  src={standard.imageUrl || programMeta.image}
                  alt={`${standard.code} ${standard.name}`}
                  className="w-full h-72 sm:h-88 object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                {/* Floating Seal */}
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow-md">
                    ISO
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">{standard.code.split(':')[0]}</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Accredited CAB 12203
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Summary */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">Standard Code</div>
                  <div className="text-xl font-bold text-white mb-2">{standard.code}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-900/90 backdrop-blur-md rounded-lg p-2.5 border border-slate-700">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Certification Cycle</span>
                      <span className="font-bold text-white">4 - 8 Weeks Fast-Track</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Surveillance Cycle</span>
                      <span className="font-bold text-emerald-400">Annual (Y1 & Y2)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Tabs & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main 8-Col Section */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Interactive Tab Navigation */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-1.5 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-wrap gap-1">
              {[
                { id: 'overview', label: 'Executive Overview', icon: FileText },
                { id: 'principles', label: standard.principles && standard.principles.length === 7 ? '7 Principles' : 'Core Principles', icon: Compass },
                { id: 'clauses', label: 'Annex SL Clauses', icon: Layers },
                { id: 'benefits', label: 'Benefits & Tenders', icon: CheckCircle2 },
                { id: 'process', label: '4-Step Audit Process', icon: Clock },
                { id: 'documentation', label: 'Required Documents', icon: ListChecks },
                { id: 'estimator', label: 'Audit Estimator', icon: Calculator },
              ].map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
                    <Award className="w-3.5 h-3.5" />
                    <span>Benefits of {standard.code} Certification for Nigerian Companies</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                    {standard.code}: {standard.name}
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                    {standard.fullDesc}
                  </p>
                </div>

                {/* What is this Management System Callout */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50/40 dark:from-slate-800/80 dark:to-blue-950/30 border border-blue-100 dark:border-slate-700 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>What is {standard.name}?</span>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {standard.marketContext?.qmsDefinition || `${standard.name} is a formalized management framework that documents your processes, responsibilities, and operational controls to achieve excellence, ensure statutory compliance, and deliver consistent stakeholder satisfaction.`}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    <strong className="text-slate-900 dark:text-white">{standard.code}</strong> is the internationally recognized benchmark for {standard.category.toLowerCase()} governance. In addition, it is suitable for any organization regardless of size or sector. Therefore, whether you are in energy, manufacturing, engineering, healthcare, technology, or services, you can implement it effectively.
                  </p>
                </div>

                {/* Why Standard Matters for Nigerian Companies */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Globe2 className="w-5 h-5 text-amber-500" />
                    <span>Why {standard.code} Matters for Nigerian Companies</span>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {standard.marketContext?.whyItMatters || `In today's competitive environment, clients, regulators, and international partners demand verified excellence. Consequently, ${standard.code} provides you with a proven approach to maintain operational reliability in every operation and is a key reason to get ${standard.code} certified in Nigeria.`}
                  </p>
                </div>

                {/* Key Technical Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">Standard Scope</div>
                    <div className="font-bold text-slate-900 dark:text-white text-base">{standard.code}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">High-Level Structure (Annex SL)</div>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">Accreditation Body</div>
                    <div className="font-bold text-slate-900 dark:text-white text-base">EGAC (IAF Signatory)</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Global Acceptance CAB 12203</div>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/50">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">Validity & Cycle</div>
                    <div className="font-bold text-slate-900 dark:text-white text-base">3-Year Triennial</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Annual Surveillance Verification</div>
                  </div>
                </div>

                {/* Why Choose IEMACERT to Get Standard in Nigeria */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <span>Why Choose IEMA Standards to Get {standard.code} Certification in Nigeria?</span>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    <strong className="text-slate-900 dark:text-white">IEMA Standards Limited</strong> is accredited by the Egyptian Accreditation Council (EGAC), which is an official signatory to IAF and ILAC. Therefore, our certificates are globally recognized and accepted, making the benefits of {standard.code} certification for Nigerian companies even more valuable.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Unlike other certification bodies, we focus on practical implementation. In addition, our Lead Auditors have extensive industry experience in energy, maritime, manufacturing, IT, healthcare, and enterprise services. As a result, we convert complex ISO requirements into simple, easy-to-understand operational milestones.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {(standard.marketContext?.valueAddedPoints || [
                      `Accredited and internationally recognized certification process delivering real ROI for ${standard.code}`,
                      `Experienced Lead Auditors who provide practical business insights on ${standard.code} in Nigeria`,
                      "Transparent pricing and efficient audit scheduling",
                      "24/7 expertise and customer support worldwide"
                    ]).map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Regulatory Alignment in Nigeria & Globally */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Globe2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>Regulatory Compliance & Tender Eligibility in Nigeria</span>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Holding an accredited <strong className="text-slate-900 dark:text-white">{standard.code}</strong> certificate from IEMA Standards satisfies mandatory technical compliance prerequisites across:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 dark:text-white">NIPEX & NUPRC/DPR Tenders</strong>
                        <span className="text-slate-600 dark:text-slate-400 text-xs">Mandatory pre-qualification criteria for upstream oil & gas joint ventures.</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 dark:text-white">NCDMB Local Content Audits</strong>
                        <span className="text-slate-600 dark:text-slate-400 text-xs">Proof of world-class technical governance and Nigerian capacity development.</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 dark:text-white">FMEnv & NESREA Statutory Standards</strong>
                        <span className="text-slate-600 dark:text-slate-400 text-xs">Guarantees verifiable environmental and safety compliance protocols.</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 dark:text-white">International IAF MLA Recognition</strong>
                        <span className="text-slate-600 dark:text-slate-400 text-xs">Accepted by multinational clients across UK, USA, EU, Middle East, and Asia.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Target Industries */}
                {standard.targetIndustries && standard.targetIndustries.length > 0 && (
                  <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span>Target Sectors & Practical Applications</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {standard.targetIndustries.map((ind, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-sm font-medium text-slate-800 dark:text-slate-200">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ind}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Deliverables List */}
                {standard.deliverables && standard.deliverables.length > 0 && (
                  <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <PackageCheck className="w-5 h-5 text-amber-500" />
                      <span>Formal Deliverables & Accredited Outcomes</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {standard.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: PRINCIPLES OF THE STANDARD */}
            {activeTab === 'principles' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                    <Compass className="w-3.5 h-3.5" />
                    <span>{standard.code} Foundation</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {standard.principles && standard.principles.length === 7 ? `Seven Principles of ${standard.name}` : `Core Principles of ${standard.name}`}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    {standard.code} is based on structured governance and operational principles. Understanding these principles is essential for effective implementation and to fully enjoy the benefits of {standard.code} certification for Nigerian and international organizations. In fact, they form the foundation of the entire standard.
                  </p>
                </div>

                <div className="space-y-4">
                  {(standard.principles || [
                    { number: 1, title: "Context & Strategic Alignment", desc: "Aligning operations with internal/external stakeholder needs and strategic objectives." },
                    { number: 2, title: "Leadership & Governance", desc: "Strong executive commitment to establish unified purpose, culture, and accountability." },
                    { number: 3, title: "Engagement of People", desc: "Empowering competent, trained personnel across all organizational levels." },
                    { number: 4, title: "Process Approach", desc: "Managing interrelated workflows to achieve predictable, efficient outcomes." },
                    { number: 5, title: "Continual Improvement", desc: "Maintaining ongoing cycles of performance optimization and risk reduction." },
                    { number: 6, title: "Evidence-Based Decisions", desc: "Utilizing verifiable data, audits, and metrics for objective decision-making." },
                    { number: 7, title: "Relationship Management", desc: "Sustaining collaborative, resilient partnerships across supply chain networks." }
                  ]).map((p, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:border-amber-500/50 transition-colors flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 flex items-center justify-center shrink-0 font-black text-base shadow-sm">
                        {p.number || idx + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          Principle {p.number || idx + 1}: {p.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 text-xs sm:text-sm text-blue-950 dark:text-blue-200">
                  <strong className="block mb-1 text-blue-900 dark:text-blue-100">Integrated Implementation Strategy:</strong>
                  Managing activities with these core principles ensures your organization satisfies both client and statutory demands consistently, converting compliance into measurable operational growth.
                </div>
              </div>
            )}

            {/* TAB 3: CLAUSES & STRUCTURE */}
            {activeTab === 'clauses' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Core Clauses & High-Level Structure (Annex SL)
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {standard.code} adheres strictly to the harmonized ISO Annex SL 10-clause structure. Below is the detailed breakdown of mandatory requirements and what third-party Lead Auditors evaluate during Stage 1 and Stage 2 audits.
                  </p>
                </div>

                <div className="space-y-4">
                  {(standard.coreClauses && standard.coreClauses.length > 0 ? standard.coreClauses : [
                    { number: "Clause 4", title: "Context of the Organization", desc: "Determining internal and external issues, interested party needs, and organizational boundaries." },
                    { number: "Clause 5", title: "Leadership & Commitment", desc: "Top management policy establishment, role assignments, and accountability." },
                    { number: "Clause 6", title: "Planning & Risk Management", desc: "Addressing risks and opportunities, establishing measurable quality/performance objectives." },
                    { number: "Clause 7", title: "Support & Resource Management", desc: "Personnel competence, infrastructure, calibration control, and documented information." },
                    { number: "Clause 8", title: "Operational Planning & Control", desc: "Managing operational workflows, vendor controls, and standard operating procedures." },
                    { number: "Clause 9", title: "Performance Evaluation", desc: "Internal audits, monitoring KPIs, customer satisfaction, and management reviews." },
                    { number: "Clause 10", title: "Continual Improvement", desc: "Root cause analysis, corrective action workflows, and systemic enhancements." }
                  ]).map((clause, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:border-blue-500/50 transition-colors space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 px-2.5 py-0.5 rounded-md border border-blue-200 dark:border-blue-800">
                          {clause.number}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Mandatory Clause</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {clause.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {clause.desc}
                      </p>
                      <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <FileCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Auditor Verification: Policies, registers, procedures, and objective evidence.</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: BUSINESS BENEFITS & TENDERS */}
            {activeTab === 'benefits' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>Commercial Growth & Tenders</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Key Benefits of {standard.code} Certification for Nigerian Companies
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    Implementing {standard.code} brings tangible business advantages. Certified organizations in Nigeria report improved operational efficiency, risk mitigation, and compliance within just a few months. Moreover, certification opens doors to new markets and high-value contracts.
                  </p>
                </div>

                {/* 4 Detailed Nigerian Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(standard.marketContext?.keyDetailedBenefits || [
                    {
                      title: `1. Verified Operational Excellence`,
                      desc: `Because you systematically standardize workflows, you consistently deliver conforming results, reducing errors and complaints significantly. This is a major benefit of ${standard.code} certification for Nigerian companies.`
                    },
                    {
                      title: `2. Cost Reduction & Process Optimization`,
                      desc: `${standard.code} helps you eliminate redundancies and cut operational waste. Consequently, your overhead costs decrease while team productivity improves.`
                    },
                    {
                      title: `3. Global Recognition & Tender Access`,
                      desc: `Since ${standard.code} is globally recognized, your EGAC/IAF certificate is accepted worldwide. Furthermore, major tenders in Nigeria mandate accredited ISO certificates as a prerequisite.`
                    },
                    {
                      title: `4. Proactive Risk Mitigation & Governance`,
                      desc: `Through risk-based thinking, you identify operational and regulatory vulnerabilities before disruptions occur, ensuring sustainable business continuity.`
                    }
                  ]).map((item, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-slate-800/80 dark:to-slate-800/40 border border-blue-100 dark:border-slate-700 flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-xs">
                        {i + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* More Benefits in Tenders Callout (NNPC, Shell, Dangote) */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300 dark:border-amber-500/30 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span>Why Get {standard.code} Certified in Nigeria for Tenders & Business Growth?</span>
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    {standard.marketContext?.tenderAdvantage || `When you consider the benefits of ${standard.code} certification for Nigerian companies, winning tenders is crucial. For instance, major corporate and multinational operators in Nigeria (e.g. NNPC, Shell, Chevron, Dangote, MTN, and public sector ministries) require contractors to hold accredited ISO certificates. Consequently, certified companies achieve significantly higher win rates.`}
                  </p>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-2xl font-black text-amber-600 dark:text-amber-400">3x Higher Win Rate</span>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Certified Nigerian companies are 3x more likely to qualify and win large public and multinational contracts.</p>
                    </div>
                    <button
                      onClick={() => onNavigate('quote', { standard: standard.code })}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg shadow-sm shrink-0 cursor-pointer"
                    >
                      Get Tender Ready Today
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Our accreditation is through Egyptian Accreditation Council (EGAC) and recognized worldwide by the International Accreditation Forum (IAF). Check our <button onClick={() => onNavigate('iso-detail', { standard: 'iso-14001', slug: 'environmental-management-system-iso-14001' })} className="text-blue-600 dark:text-blue-400 underline font-medium cursor-pointer">Environmental Management ISO 14001</button> and <button onClick={() => onNavigate('iso-detail', { standard: 'iso-45001', slug: 'occupational-health-safety-iso-45001' })} className="text-blue-600 dark:text-blue-400 underline font-medium cursor-pointer">Occupational Health and Safety ISO 45001</button>.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 5: 4-STEP CERTIFICATION PROCESS */}
            {activeTab === 'process' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>IEMA Standards 4-Step Roadmap</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Our {standard.code} Certification Process - 4 Simple Steps
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    We have made the certification journey straightforward and supportive. Although the audit is rigorous, our Lead Auditors guide you throughout the entire process to ensure you achieve the full benefits of {standard.code} certification quickly.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      step: "Step 1",
                      title: "Application & Pre-Assessment",
                      desc: "Initially, you submit your application and scope details. Then, our assessors conduct a pre-assessment to determine your readiness and provide a clear roadmap.",
                      duration: "Week 1 - 2"
                    },
                    {
                      step: "Step 2",
                      title: "Stage 1 Audit (Documentation Review)",
                      desc: `During this stage, we review your management system documentation against ${standard.code} requirements. If any non-conformities are identified, you have time to address them before the on-site assessment.`,
                      duration: "Week 3 - 4"
                    },
                    {
                      step: "Step 3",
                      title: "Stage 2 Audit (Implementation Audit)",
                      desc: `Next, our team visits your facility or connects via accredited hybrid protocols to verify that your ${standard.name} is effectively operationalized across day-to-day activities.`,
                      duration: "Week 5 - 6"
                    },
                    {
                      step: "Step 4",
                      title: "Certification & Surveillance",
                      desc: `Once you successfully complete the audit and technical review, you receive your EGAC/IAF accredited ${standard.code} certificate valid for 3 years, backed by annual surveillance audits to ensure continual improvement.`,
                      duration: "3-Year Cycle (Annual Surveillance)"
                    }
                  ].map((s, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 px-2.5 py-0.5 rounded-md border border-blue-200 dark:border-blue-800">
                          {s.step}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                          {s.duration}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {s.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 6: DOCUMENTATION & PREREQUISITES */}
            {activeTab === 'documentation' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Mandatory Documentation & Prerequisites Checklist
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Ensure your organization prepares these baseline records prior to scheduling the Stage 1 Readiness Audit.
                  </p>
                </div>

                <div className="space-y-3">
                  {(standard.prerequisites && standard.prerequisites.length > 0 ? standard.prerequisites : [
                    "Documented Management System Policy approved and signed by Top Executive",
                    "Documented Scope of the Management System with organizational boundaries",
                    "Measurable Quality / Performance Objectives and Action Plans",
                    "Standard Operating Procedures (SOPs) and process flow diagrams",
                    "At least 3 months of operational records implementing the standard",
                    "Evidence of a completed internal audit cycle covering all clauses",
                    "Documented Top Management Review meeting minutes"
                  ]).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                      <CheckSquare className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 7: AUDIT MAN-DAYS & DURATION ESTIMATOR */}
            {activeTab === 'estimator' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <span>Interactive Audit Duration & Man-Day Estimator</span>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Based on mandatory international criteria established under <strong className="text-slate-800 dark:text-slate-200">IAF MD5 (Determination of Audit Time of Quality, Environmental, and OH&S Management Systems)</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  {/* Headcount Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Organization Headcount (Full-Time Equivalent): {empCount} employees
                    </label>
                    <input 
                      type="range" 
                      min="5" 
                      max="500" 
                      step="5" 
                      value={empCount} 
                      onChange={(e) => setEmpCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>1-10</span>
                      <span>50</span>
                      <span>150</span>
                      <span>300</span>
                      <span>500+</span>
                    </div>
                  </div>

                  {/* Operating Sites */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Number of Operating Sites: {sitesCount} {sitesCount > 1 ? 'Locations' : 'Location'}
                    </label>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      step="1" 
                      value={sitesCount} 
                      onChange={(e) => setSitesCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>1 Single Site</span>
                      <span>5 Sites</span>
                      <span>10 Sites</span>
                    </div>
                  </div>

                  {/* Risk Tier Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Operational Complexity / Risk Tier
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'low', label: 'Low Risk' },
                        { id: 'med', label: 'Medium Risk' },
                        { id: 'high', label: 'High Risk' }
                      ].map((tier) => (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setRiskTier(tier.id as any)}
                          className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                            riskTier === tier.id
                              ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                          }`}
                        >
                          {tier.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* IMS Integration Checkbox */}
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                    <input
                      type="checkbox"
                      id="ims-toggle"
                      checked={hasExistingIMS}
                      onChange={(e) => setHasExistingIMS(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                    />
                    <label htmlFor="ims-toggle" className="text-xs font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                      <strong className="block text-slate-900 dark:text-white">Integrated Management System (IMS)</strong>
                      <span>Apply 25% discount on audit days if bundling with ISO 9001/14001/45001</span>
                    </label>
                  </div>
                </div>

                {/* Calculated Results Panel */}
                <div className="p-6 rounded-xl bg-gradient-to-r from-slate-900 to-blue-950 text-white border border-slate-800 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-blue-400 font-bold uppercase tracking-wider block">Estimated Audit Effort</span>
                      <div className="text-3xl sm:text-4xl font-black text-white">
                        {estimatedAuditDays} <span className="text-lg font-normal text-slate-300">Auditor Man-Days</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">Typical Turnaround</span>
                      <div className="text-2xl sm:text-3xl font-black text-white">
                        4 - 6 <span className="text-base font-normal text-slate-300">Weeks</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 text-xs text-slate-300">
                    <div>
                      <strong className="text-white">Includes:</strong> Stage 1 Document Review + Stage 2 On-Site Certification + Lead Auditor Report + EGAC Registry.
                    </div>
                    <button
                      onClick={() => onNavigate('quote', { 
                        standard: standard.code,
                        headcount: empCount.toString(),
                        sites: sitesCount.toString(),
                        risk: riskTier
                      })}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Proceed to Official Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Integrated Management System (IMS) Banner */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  Cost-Saving Opportunity
                </span>
                <h3 className="text-xl sm:text-2xl font-black">
                  Bundle with Integrated Management System (IMS)
                </h3>
                <p className="text-slate-300 text-sm max-w-xl">
                  Combine <span className="font-bold text-white">{standard.code}</span> with ISO 9001 (Quality), ISO 14001 (Environment), or ISO 45001 (Health & Safety) to reduce total audit duration, audit days, and save up to 35% on certification fees.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => onNavigate('quote', { bundle: 'IMS-Triple', standard: standard.code })}
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Request IMS Bundle Quote
                  </button>
                  <button
                    onClick={() => onNavigate('approach')}
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl border border-white/20 transition-all cursor-pointer"
                  >
                    Learn About IMS Audits
                  </button>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Frequently Asked Questions about {standard.code}</span>
              </h3>

              <div className="space-y-3">
                {[
                  {
                    q: `How long is the ${standard.code} certificate valid?`,
                    a: `The ${standard.code} certificate is valid for three (3) years from the date of issue. To maintain continuous validity, mandatory annual surveillance audits must be conducted at Month 12 (Year 1) and Month 24 (Year 2), followed by a comprehensive recertification audit prior to the Year 3 expiration date.`
                  },
                  {
                    q: `Is IEMA Standards accredited to issue ${standard.code}?`,
                    a: `Yes. IEMA Standards Limited holds full international accreditation through the Egyptian Accreditation Council (EGAC), an official signatory to the International Accreditation Forum (IAF) Multilateral Recognition Arrangement (MLA). Your certificate is globally valid and verifiable on IAF CertSearch.`
                  },
                  {
                    q: `What is the estimated timeline for ${standard.code} certification in Nigeria?`,
                    a: `The typical end-to-end timeline is 4 to 8 weeks, depending on your organization's current documentation readiness and audit scope. Accelerated fast-track audit scheduling is available for urgent tender and NIPEX submission deadlines.`
                  },
                  {
                    q: `Can ${standard.code} be integrated with our existing management systems?`,
                    a: `Absolutely. ${standard.code} follows the ISO Annex SL High-Level Structure, making it 100% harmonized with other standards like ISO 9001 (Quality), ISO 14001 (Environment), and ISO 45001 (Health & Safety). Combining them saves up to 35% on audit man-days.`
                  },
                  {
                    q: `Can we transfer our existing ${standard.code} certificate from another registrar to IEMA Standards?`,
                    a: `Yes. Under IAF MD2 rules, you can seamlessly transfer any valid accredited ISO certificate to IEMA Standards with zero disruption, preserving your original certification dates and surveillance cycle while enjoying lower renewal fees.`
                  }
                ].map((faq, idx) => (
                  <div 
                    key={idx} 
                    className="border border-slate-200 dark:border-slate-700/80 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <span className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                        {faq.q}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openFaqIndex === idx ? 'rotate-180 text-blue-600' : ''}`} />
                    </button>
                    {openFaqIndex === idx && (
                      <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar 4-Col Section */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Instant Fast Quote Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-6 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                <Sparkles className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-xl font-bold">
                Get Certified in {standard.code}
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Receive a formal, transparent, fixed-price audit proposal customized to your industry headcount and facility locations.
              </p>
              <button
                onClick={() => onNavigate('quote', { standard: standard.code })}
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>

            {/* Lead Auditor Training Recommendation */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                <BookOpen className="w-4 h-4" />
                <span>Professional Training</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {relatedCourse?.title || `${standard.code} Lead Auditor Training Course`}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                Empower your HSE & Quality teams with accredited 5-Day CQI/IRCA aligned Lead Auditor and Internal Auditor courses.
              </p>
              <button
                onClick={() => onNavigate('training', { standard: standard.code })}
                className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 text-blue-600 dark:text-blue-400 font-semibold text-xs rounded-xl border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View Course Dates & Syllabus</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Standard Quick Facts Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4 text-sm">
              <h4 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                Standard Quick Facts
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Standard Category</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{standard.category}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Validity Period</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">3 Years</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Accreditation Body</span>
                  <span className="font-semibold text-slate-900 dark:text-white">EGAC / IAF MLA</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Audit Delivery</span>
                  <span className="font-semibold text-slate-900 dark:text-white">On-Site & Hybrid</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Auditor Qualification</span>
                  <span className="font-semibold text-slate-900 dark:text-white">IRCA Certified</span>
                </div>
              </div>
            </div>

            {/* Direct Verification Badge */}
            <div className="bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl p-5 border border-emerald-200 dark:border-emerald-900/50 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Instant Certificate Verification</span>
              </div>
              <p className="text-emerald-900 dark:text-emerald-200">
                All certificates issued under this standard can be validated 24/7 on our live registry or the international IAF CertSearch directory.
              </p>
              <button
                onClick={() => onNavigate('verify')}
                className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Validate Existing Certificate
              </button>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-200 dark:border-slate-700/80 space-y-3 text-xs">
              <h5 className="font-bold text-slate-900 dark:text-white">Direct Certification Desk</h5>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <a href="tel:+2348134831027" className="hover:underline">+234 813 483 1027</a>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <a href="mailto:info@iemacert.com" className="hover:underline">info@iemacert.com</a>
              </div>
              <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>27A Alternative route, Opp., Madam Juliana Estate Chevron Lekki, Lagos Nigeria</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Next / Prev Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('iso-detail', { standard: prevStandard.id, slug: prevStandard.slug || prevStandard.id })}
            className="w-full sm:w-auto p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors flex items-center gap-3 text-left group cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Previous Standard</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{prevStandard.code}</span>
            </div>
          </button>

          <button
            onClick={() => onNavigate('certifications')}
            className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            Back to All 18 Standards
          </button>

          <button
            onClick={() => onNavigate('iso-detail', { standard: nextStandard.id, slug: nextStandard.slug || nextStandard.id })}
            className="w-full sm:w-auto p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors flex items-center justify-between sm:justify-end gap-3 text-right group cursor-pointer"
          >
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Next Standard</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{nextStandard.code}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </button>
        </div>

      </section>
    </div>
  );
};
