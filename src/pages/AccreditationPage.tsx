import React from 'react';
import { 
  Award, ShieldCheck, CheckCircle2, Globe, FileText, 
  ArrowRight, ExternalLink, Building, Lock, Check, 
  BookOpen, Sparkles, Scale, Search, Users, AlertCircle,
  Landmark, Factory, PackageCheck, LandmarkIcon, Cog, 
  Leaf, ChevronRight, CheckCheck, Shield, Download
} from 'lucide-react';
import { 
  EGACLogo, NiNASLogo, GlobalACILogo, IAFLogo, NDPCLogo, 
  ILACMRADataLogo, IBSTACLogo, NNPCLogo, NCDMBLogo, OGTANLogo,
  FMELogo, LASEPALogo, SONLogo, NESREALogo, CACLogo, OGEPALogo
} from '../components/Logos';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface AccreditationPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const AccreditationPage: React.FC<AccreditationPageProps> = ({ onNavigate }) => {
  const accreditationPills = [
    'EGAC Accredited · CAB #012311A',
    'IAF MLA Full Signatory',
    'ILAC MRA Recognised',
    'Global ACI Member',
    'NDPC Registered DPCO',
    'NiNAS Recognised',
    'FME Licensed',
    'LASEPA Approved',
    'OGEPA Approved'
  ];

  const primaryPartners = [
    {
      name: 'EGAC',
      fullName: 'Egyptian Accreditation Council',
      badge: 'Accrediting Body · CAB #012311A',
      logo: <EGACLogo className="w-12 h-12" />,
      tag: 'Primary Accreditation'
    },
    {
      name: 'IAF MLA',
      fullName: 'International Accreditation Forum',
      badge: 'Member of Multilateral Recognition Arrangement',
      logo: <IAFLogo className="w-12 h-8" />,
      tag: 'Global Equivalence'
    },
    {
      name: 'ILAC MRA',
      fullName: 'International Laboratory Accreditation Cooperation',
      badge: 'Mutual Recognition Arrangement Signatory',
      logo: <ILACMRADataLogo className="w-12 h-12" />,
      tag: 'Testing & Inspection'
    },
    {
      name: 'Global ACI',
      fullName: 'Assessment & Certification Institute',
      badge: 'Global Accreditation & Conformity Infrastructure',
      logo: <GlobalACILogo className="w-12 h-12" />,
      tag: 'International Network'
    },
    {
      name: 'NDPC',
      fullName: 'Nigeria Data Protection Commission',
      badge: 'Registered Data Protection Compliance Organisation',
      logo: <NDPCLogo className="h-8 w-auto" />,
      tag: 'Licensed DPCO'
    },
    {
      name: 'NiNAS',
      fullName: 'Nigeria National Accreditation System',
      badge: 'National Quality Infrastructure Framework',
      logo: <NiNASLogo className="w-12 h-12" />,
      tag: 'National Alignment'
    }
  ];

  const equivalentsList = [
    'IAF MLA Full Signatory',
    'ILAC MRA',
    'GAC Recognition',
    'AFRAC Member',
    'Global ACI',
    'ISO/IEC 17021-1',
    'ISO/IEC 17065',
    'Peer Assessment Verified',
    'UKAS Equivalent',
    'ANAB Equivalent',
    'DAkkS Equivalent',
    'JAS-ANZ Equivalent'
  ];

  const globalRegions = [
    { emoji: '🌍', region: 'Sub-Saharan Africa' },
    { emoji: '🌎', region: 'West Africa / ECOWAS' },
    { emoji: '🇪🇺', region: 'European Union' },
    { emoji: '🇬🇧', region: 'United Kingdom (UKAS Equivalent)' },
    { emoji: '🇺🇸', region: 'United States (ANAB Equivalent)' },
    { emoji: '🇯🇵', region: 'Asia Pacific (APAC)' },
    { emoji: '🇸🇦', region: 'GCC / Arabian Peninsula' },
    { emoji: '🌐', region: 'MENA Region' },
    { emoji: '🇨🇳', region: 'China (CNAS Equivalent)' },
    { emoji: '🇧🇷', region: 'Latin America (IAAC)' },
    { emoji: '🇦🇺', region: 'Australia / Oceania' },
    { emoji: '🇨🇦', region: 'Canada' }
  ];

  const accreditedScopeStandards = [
    {
      code: 'ISO 9001:2015',
      title: 'Quality Management Systems',
      domain: 'Quality / Operations',
      iafMla: true,
      fmeLasepa: false
    },
    {
      code: 'ISO 14001:2015',
      title: 'Environmental Management Systems',
      domain: 'Environment',
      iafMla: true,
      fmeLasepa: true
    },
    {
      code: 'ISO 45001:2018',
      title: 'Occupational Health & Safety',
      domain: 'Safety / HR',
      iafMla: true,
      fmeLasepa: false
    },
    {
      code: 'ISO 22000:2018',
      title: 'Food Safety Management Systems',
      domain: 'Food Industry',
      iafMla: true,
      fmeLasepa: false
    },
    {
      code: 'ISO 22301:2019',
      title: 'Business Continuity Management',
      domain: 'Resilience / BCM',
      iafMla: true,
      fmeLasepa: false
    },
    {
      code: 'ISO/IEC 27001:2022',
      title: 'Information Security Management',
      domain: 'Cybersecurity / IT',
      iafMla: true,
      fmeLasepa: false
    },
    {
      code: 'ISO 50001:2018',
      title: 'Energy Management Systems',
      domain: 'Energy / Utilities',
      iafMla: true,
      fmeLasepa: false
    },
    {
      code: 'ISO 37001:2016',
      title: 'Anti-Bribery Management Systems',
      domain: 'Compliance / AML',
      iafMla: true,
      fmeLasepa: false
    }
  ];

  const whyItMattersPoints = [
    {
      icon: <Landmark className="w-6 h-6 text-amber-500" />,
      title: 'Government Procurement',
      desc: 'Accepted by Nigerian federal and state procurement authorities and internationally by governments requiring ISO-certified suppliers — without additional verification.'
    },
    {
      icon: <Factory className="w-6 h-6 text-blue-500" />,
      title: 'Multinational Supply Chains',
      desc: 'IAF MLA recognition means Fortune 500 companies, global OEMs, and international retailers accept IEMA certificates at par with UKAS, DAkkS, or ANAB-accredited bodies.'
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-emerald-500" />,
      title: 'Export Markets',
      desc: 'Exporters to the EU, UK, USA, GCC, and Asian markets rely on IEMA certificates to satisfy buyer and regulatory requirements without re-auditing or re-certifying abroad.'
    },
    {
      icon: <Building className="w-6 h-6 text-purple-500" />,
      title: 'Financial & Banking Sector',
      desc: 'Recognised for ISO 22301 BCM and ISO 27001 InfoSec certifications required by CBN, SEC, and international banking and insurance counterparties.'
    },
    {
      icon: <Cog className="w-6 h-6 text-rose-500" />,
      title: 'Oil & Gas / Extractives',
      desc: 'OGEPA approval and ISO 14001/45001 certification authority makes IEMA the natural partner for upstream, midstream, and downstream petroleum sector operators.'
    },
    {
      icon: <Leaf className="w-6 h-6 text-teal-500" />,
      title: 'Environmental Compliance',
      desc: 'FME, LASEPA, NESREA, and OGEPA approvals give IEMA unmatched authority across every layer of Nigeria\'s environmental regulatory landscape.'
    }
  ];

  return (
    <div className="space-y-16 pb-20 bg-slate-50 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 transition-colors duration-200 min-h-screen">
      
      {/* SEO Head */}
      <SeoHead
        title="Accreditation & Global Recognition | IEMA Standards"
        description="Internationally accredited by EGAC (CAB 12203) with IAF MLA & ILAC MRA recognition. Fully licensed NDPC DPCO in Nigeria. Verify our global accreditations."
        canonicalPath="accreditation"
        keywords={[
          'our accreditation iemacert',
          'egac cab 012311a',
          'iaf mla signatory nigeria',
          'ilac mra recognized',
          'ndpc registered dpco',
          'ninas recognised',
          'fme licensed consultant',
          'lasepa approved',
          'ogepa approved'
        ]}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'Accreditation & Recognition', isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Hero Header Banner */}
      <section className="bg-[#070F2B] text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600" 
            alt="IEMA Standards Global Accreditations" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold border border-amber-500/30">
            <Award className="w-4 h-4 text-amber-400" />
            <span>EGAC Accredited · CAB #012311A</span>
          </div>

          <div className="space-y-2 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif leading-tight">
              Internationally Accredited.<br />
              <span className="text-amber-400">Nationally Recognised.</span><br />
              Globally Accepted.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed pt-2">
              IEMA Standards Ltd holds formal accreditation from EGAC — a full IAF MLA and ILAC MRA signatory — ensuring that certifications issued by IEMA carry the same global standing as those from any leading international certification body worldwide.
            </p>
          </div>

          {/* Quick Accreditation Badges Row */}
          <div className="flex flex-wrap gap-2 pt-2">
            {accreditationPills.map((pill, idx) => (
              <span 
                key={idx}
                className="bg-white/10 hover:bg-white/15 text-slate-200 px-3 py-1 rounded-full text-xs font-semibold border border-white/10 transition-colors"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section 1: Primary Accreditation: EGAC CAB #012311A */}
        <section className="bg-white dark:bg-[#0E2A47] rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700 shadow-xl space-y-8 text-slate-900 dark:text-white">
          <div className="space-y-3 border-b border-slate-100 dark:border-slate-700 pb-6">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Primary Accreditation
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-serif text-slate-900 dark:text-white">
              EGAC Accreditation — CAB #012311A
            </h2>
            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
              Our certifications are issued under formal accreditation from the Egyptian Accreditation Council (EGAC), operating as a full signatory to both the IAF Multilateral Recognition Arrangement and the ILAC MRA — making every IEMA-issued certificate universally recognised across all member economies worldwide.
            </p>
          </div>

          {/* 6 Key Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryPartners.map((item, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4 hover:border-amber-500 transition-colors shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl p-2 flex items-center justify-center shrink-0 shadow-sm">
                    {item.logo}
                  </div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                    {item.tag}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="font-serif font-black text-lg text-slate-900 dark:text-white">
                    {item.name}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {item.fullName}
                  </div>
                  <div className="text-xs font-bold text-amber-600 dark:text-amber-400 pt-1">
                    {item.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Deep Dive Box on EGAC */}
          <div className="bg-slate-50 dark:bg-[#0B1E38] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-700 pb-4">
              <div>
                <span className="text-[11px] font-black bg-amber-500 text-slate-950 px-2.5 py-1 rounded uppercase tracking-wider">
                  EGAC Accreditation Mark CAB 012311A
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-serif text-slate-900 dark:text-white mt-2">
                  Egyptian Accreditation Council
                </h3>
                <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                  CAB # 012311A · MANAGEMENT SYSTEMS CERTIFICATION
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              EGAC is Egypt's national accreditation body, established and operating under the ISO/IEC 17011 framework. Its full IAF MLA and ILAC MRA signatory status means that accreditation granted by EGAC — and therefore every certificate issued by IEMA Standards Ltd under this accreditation — is recognised in every IAF and ILAC member economy worldwide without further verification or re-certification.
            </p>

            {/* What This Accreditation Delivers */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                What This Accreditation Delivers:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white dark:bg-[#0E2A47] border border-slate-200 dark:border-slate-700 space-y-1.5">
                  <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Full IAF MLA Signatory</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    EGAC is a full signatory to the IAF Multilateral Recognition Arrangement — the international framework ensuring certification body equivalence across borders. Your certificate is accepted everywhere the IAF MLA is recognised.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#0E2A47] border border-slate-200 dark:border-slate-700 space-y-1.5">
                  <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>ILAC MRA Signatory</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    EGAC's ILAC MRA membership extends recognition of IEMA's conformity assessment activities across all ILAC member bodies globally — covering laboratory, inspection, and certification activities.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#0E2A47] border border-slate-200 dark:border-slate-700 space-y-1.5">
                  <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>AFRAC Member Body</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    As an AFRAC member, EGAC brings all IEMA certificates within the African accreditation community's mutual recognition framework — covering all signatory African nations and supporting pan-African trade.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#0E2A47] border border-slate-200 dark:border-slate-700 space-y-1.5">
                  <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                    <span>ISO/IEC 17021-1 Conformant</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    All IEMA management system certifications are conducted in full conformity with ISO/IEC 17021-1 — the international standard governing certification body competence, consistency, and impartiality.
                  </p>
                </div>
              </div>
            </div>

            {/* MLA Callout Banner */}
            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 flex items-start gap-3">
              <Globe className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="text-xs font-black text-amber-900 dark:text-amber-200 uppercase tracking-wider">
                  Multilateral Recognition Arrangement (MLA)
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  The IAF MLA is the backbone of global certificate acceptance. Certificates issued by IEMA Standards Ltd under EGAC accreditation are recognised in over 100 economies across Asia-Pacific, Europe, the Americas, Africa, and the Middle East — accepted without re-audit or re-certification by international buyers, governments, and regulators.
                </p>
              </div>
            </div>

            {/* Downloadable Official Accreditation Certificate Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#070F2B] to-[#0B1E38] text-white border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-amber-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Official Regulatory Accreditation Proof</span>
                </div>
                <h4 className="text-base sm:text-lg font-black font-serif text-white">
                  Download EGAC Accreditation Certificate &amp; IAF Scope Dossier
                </h4>
                <p className="text-xs text-slate-300 max-w-xl">
                  Download the verifiable accreditation certificate (CAB 12203 / CAB #012311A) and full conformity schedule for tender submissions and vendor due diligence.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="/handbook/IEMA_Certification_Handbook_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#DC2626] hover:bg-[#b91c1c] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2 hover:scale-105"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Dossier (PDF)</span>
                </a>
                <a
                  href="https://iaf.nu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-600 hover:border-slate-400 text-slate-200 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <span>Verify on IAF.nu</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: International Accreditation Forum (IAF) Recognition */}
        <section className="bg-white dark:bg-[#0E2A47] rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700 shadow-xl space-y-8 text-slate-900 dark:text-white">
          <div className="space-y-3 border-b border-slate-100 dark:border-slate-700 pb-6">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              IAF Member of Multilateral Recognition Arrangement
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-serif text-slate-900 dark:text-white">
              International Accreditation Forum (IAF) Recognition
            </h2>
            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
              The IAF oversees the global network of accreditation bodies that in turn accredit certification, inspection, and testing bodies worldwide. EGAC's full IAF MLA signatory status places IEMA Standards Ltd within this universally recognised framework — making our certificates equivalent in standing to those issued by UKAS (UK), DAkkS (Germany), ANAB (USA), JAS-ANZ (Australia), or any other IAF MLA-member-accredited body.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
              This is not a regional or local recognition — it is the gold standard of international conformity assessment acceptance, applicable across every major trade corridor, government procurement framework, and international supply chain requirement in the world.
            </p>
          </div>

          {/* Equivalence Badges Matrix */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Recognitions &amp; Global Equivalence:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {equivalentsList.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Global Reach - Your Certificate. Accepted Everywhere. */}
        <section className="bg-[#070F2B] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="space-y-3 border-b border-slate-800 pb-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Global Reach
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-serif text-white">
              Your Certificate. Accepted Everywhere.
            </h2>
            <p className="text-xs sm:text-base text-slate-300 max-w-4xl leading-relaxed">
              Through EGAC's IAF MLA and ILAC MRA signatory status, IEMA-issued certificates are universally accepted across every major trade corridor and regulatory jurisdiction in the world.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-serif">100+</div>
              <div className="text-xs text-slate-300 font-medium">Countries Recognising MLA</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-serif">70+</div>
              <div className="text-xs text-slate-300 font-medium">IAF Member Bodies</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-blue-400 font-serif">30+</div>
              <div className="text-xs text-slate-300 font-medium">AFRAC Member States</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-purple-400 font-serif">6</div>
              <div className="text-xs text-slate-300 font-medium">GCC Markets via GAC</div>
            </div>
          </div>

          {/* Regions Grid */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              International Jurisdictions &amp; Trade Corridors:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {globalRegions.map((reg, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-xs font-semibold text-slate-200 hover:border-amber-400 transition-colors"
                >
                  <span className="text-base">{reg.emoji}</span>
                  <span>{reg.region}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Nigerian & Regional Regulatory Approvals */}
        <section className="bg-white dark:bg-[#0E2A47] rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700 shadow-xl space-y-8 text-slate-900 dark:text-white">
          <div className="space-y-3 border-b border-slate-100 dark:border-slate-700 pb-6">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Nigerian &amp; Regional Regulatory Approvals
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-serif text-slate-900 dark:text-white">
              National Registrations, Licences &amp; Approvals
            </h2>
            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
              Beyond international accreditation, IEMA Standards Ltd holds a comprehensive portfolio of Nigerian statutory registrations, regulatory approvals, and agency licences — establishing our authority across environmental, data protection, standards, and compliance domains nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. NDPC */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-800 space-y-4 hover:border-amber-500 transition-colors">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center border border-slate-200 shadow-sm">
                    <NDPCLogo className="h-6 w-auto" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Nigeria Data Protection Commission
                    </h3>
                    <div className="text-[11px] font-bold text-purple-600 dark:text-purple-400 uppercase">
                      NDPC · REGISTERED DATA PROTECTION COMPLIANCE ORGANISATION
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                IEMA Standards Ltd is registered with the NDPC as a Data Protection Compliance Organisation (DPCO) — authorised to conduct NDPA 2023 compliance audits, gap assessments, and training for organisations operating in Nigeria.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pt-1">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Licensed to conduct NDPA 2023 compliance audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Authorised to issue DPCO compliance reports accepted by NDPC</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Certified NDPA training programme delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Supports required compliance returns and registration filings</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Integrates with ISO/IEC 27001 Information Security certification</span>
                </li>
              </ul>
            </div>

            {/* 2. NiNAS */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-800 space-y-4 hover:border-amber-500 transition-colors">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center border border-slate-200 shadow-sm">
                    <NiNASLogo className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Nigeria National Accreditation System
                    </h3>
                    <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                      NiNAS · NATIONAL ACCREDITATION FRAMEWORK
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                IEMA Standards Ltd is recognised within NINAS — Nigeria's national accreditation infrastructure aligned with AFRAC and the broader international accreditation community. This reinforces domestic validity of certifications we issue within Nigeria's conformity assessment ecosystem.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pt-1">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Recognised within Nigeria's national accreditation framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Aligned with AFRAC (African Accreditation Cooperation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Supports SON and NCC regulatory conformity requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Recognised for public and private sector procurement compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Integrated with national standards infrastructure (NIS standards)</span>
                </li>
              </ul>
            </div>

            {/* 3. FME */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-800 space-y-4 hover:border-amber-500 transition-colors">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center border border-slate-200 shadow-sm shrink-0">
                    <FMELogo className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Federal Ministry of Environment
                    </h3>
                    <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                      FME · LICENSED ENVIRONMENTAL CONSULTANT
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Licensed by the FME as an approved environmental consultant, authorising IEMA to conduct EIAs, Environmental Audits, and EMP development under the EIA Act Cap E12 LFN 2004 and NESREA Act for all federal regulatory submissions.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['EIA Assessments', 'Environmental Audits', 'EMP Development', 'NESREA Compliance'].map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. LASEPA */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-800 space-y-4 hover:border-amber-500 transition-colors">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center border border-slate-200 shadow-sm shrink-0">
                    <LASEPALogo className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Lagos State Environmental Protection Agency
                    </h3>
                    <div className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase">
                      LASEPA · APPROVED CONSULTANT
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Approved by LASEPA as a licensed environmental consultant for Lagos State, enabling IEMA to conduct EIAs, compliance audits, and technical reports accepted for all Lagos State regulatory submissions covering industry, construction, and commercial projects.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Lagos EIA Reports', 'Industrial Audits', 'Compliance Reports', 'LASEPA Submissions'].map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-bold bg-blue-500/10 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded border border-blue-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 5. OGEPA */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-800 space-y-4 hover:border-amber-500 transition-colors">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center border border-slate-200 shadow-sm shrink-0">
                    <OGEPALogo className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Oil &amp; Gas Producing Areas Environmental Protection Agency
                    </h3>
                    <div className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase">
                      OGEPA · APPROVED ENVIRONMENTAL CONSULTANT
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                IEMA holds OGEPA approval as a licensed environmental consultant for the Niger Delta region, covering environmental assessments, pollution control compliance, and environmental management for oil and gas producing communities.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Niger Delta EIAs', 'Oil & Gas Compliance', 'Pollution Control', 'OGEPA Submissions'].map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 6. SON */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-800 space-y-4 hover:border-amber-500 transition-colors">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center border border-slate-200 shadow-sm shrink-0">
                    <SONLogo className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Standards Organisation of Nigeria
                    </h3>
                    <div className="text-[11px] font-bold text-purple-600 dark:text-purple-400 uppercase">
                      SON · CONFORMITY ASSESSMENT ALIGNMENT
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                IEMA operates in alignment with the SON conformity assessment framework. Our ISO management system certifications support organisations in meeting SON product and system requirements applicable to regulated industries across Nigeria.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['SON Alignment', 'NIS Standards', 'Conformity Assessment', 'Regulated Industries'].map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-bold bg-purple-500/10 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded border border-purple-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 7. NESREA */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-800 space-y-4 hover:border-amber-500 transition-colors">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center border border-slate-200 shadow-sm shrink-0">
                    <NESREALogo className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      National Environmental Standards &amp; Regulations Enforcement Agency
                    </h3>
                    <div className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase">
                      NESREA · COMPLIANCE AUTHORITY
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                IEMA's environmental consulting services are fully aligned with NESREA's sectoral regulations. We assist organisations in achieving NESREA compliance through ISO 14001 EMS implementation, environmental reporting, and pollution abatement plans.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['NESREA Regulations', 'EMS ISO 14001', 'Pollution Abatement', 'Environmental Reporting'].map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded border border-teal-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 8. CAC */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-800 space-y-4 hover:border-amber-500 transition-colors">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center border border-slate-200 shadow-sm shrink-0">
                    <CACLogo className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Corporate Affairs Commission
                    </h3>
                    <div className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase">
                      CAC · DULY INCORPORATED GROUP
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                IEMA Standards Ltd is duly incorporated under CAMA with the CAC of Nigeria. Affiliated entities Ecora Consulting Limited and Primose Technologies Ltd are similarly registered — providing a fully compliant corporate group for diverse client mandates.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['IEMA Standards Ltd', 'Ecora Consulting Ltd', 'Primose Technologies', 'Full CAMA Compliance'].map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-bold bg-rose-500/10 text-rose-700 dark:text-rose-300 px-2 py-0.5 rounded border border-rose-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Section 5: Why It Matters - Certificates That Open Doors Worldwide */}
        <section className="bg-white dark:bg-[#0E2A47] rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700 shadow-xl space-y-8 text-slate-900 dark:text-white">
          <div className="space-y-3 border-b border-slate-100 dark:border-slate-700 pb-6">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Why It Matters
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-serif text-slate-900 dark:text-white">
              Certificates That Open Doors Worldwide
            </h2>
            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
              When you receive an ISO certificate from IEMA Standards Ltd, you receive a document with genuine global standing — backed by accreditation chains connecting to every major economy on Earth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItMattersPoints.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-800 space-y-3 hover:border-amber-500 transition-colors shadow-sm"
              >
                <div className="p-3 bg-white dark:bg-[#0E2A47] rounded-xl border border-slate-200 dark:border-slate-700 inline-block shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Certification Scope Table */}
        <section className="bg-white dark:bg-[#0E2A47] rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700 shadow-xl space-y-8 text-slate-900 dark:text-white">
          <div className="space-y-3 border-b border-slate-100 dark:border-slate-700 pb-6">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Certification Scope
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-serif text-slate-900 dark:text-white">
              Standards Within Our Accredited Scope
            </h2>
            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
              The following management system standards fall within IEMA Standards Ltd's accredited scope under EGAC accreditation — recognised across all IAF MLA and ILAC MRA member economies globally.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 dark:bg-[#0B1E38] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">
                  <th className="p-4 font-black">Standard</th>
                  <th className="p-4 font-black">Title</th>
                  <th className="p-4 font-black">Domain</th>
                  <th className="p-4 font-black text-center">IAF MLA</th>
                  <th className="p-4 font-black text-center">FME/LASEPA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {accreditedScopeStandards.map((std, idx) => (
                  <tr 
                    key={idx}
                    className="hover:bg-slate-50 dark:hover:bg-[#0B1E38]/50 transition-colors"
                  >
                    <td className="p-4 font-bold text-amber-600 dark:text-amber-400 whitespace-nowrap">
                      {std.code}
                    </td>
                    <td className="p-4 font-semibold text-slate-900 dark:text-white">
                      {std.title}
                    </td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">
                      {std.domain}
                    </td>
                    <td className="p-4 text-center font-bold text-emerald-600 dark:text-emerald-400">
                      {std.iafMla ? '✓' : '—'}
                    </td>
                    <td className="p-4 text-center font-bold text-slate-700 dark:text-slate-300">
                      {std.fmeLasepa ? '✓' : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 7: Online Verification CTA */}
        <section className="bg-gradient-to-r from-[#0E2A47] to-[#0A1A30] rounded-3xl p-8 sm:p-12 text-white border border-slate-700 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Live Certificate Registry
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif">
              Verify Any IEMA Certificate Online
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Instant real-time lookup across the global EGAC CAB 012311A accredited directory. Confirm validity, issue dates, and accredited scopes with ease.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="https://certificates.iiema.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-2xl text-xs flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Verify a Certificate</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-2xl text-xs transition-colors border border-white/20 flex items-center gap-2"
            >
              <span>Request an Audit Quote</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

      </div>

    </div>
  );
};
