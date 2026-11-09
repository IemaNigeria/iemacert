import React from 'react';
import { 
  Building2, ShieldCheck, Award, Users, CheckCircle2, 
  FileText, Globe, ArrowRight, Download, Check, Target, 
  Eye, Compass, Sparkles, CheckCircle, Clock,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { downloadIsoHandbookPdf } from '../utils/handbookDownloader';
import { SeoHead } from '../components/SeoHead';

// Image assets
import egacLogo from '../assets/images/regenerated_image_1786960647345.png';
import iafLogo from '../assets/images/iaf_logo.png';
import ibstacLogo from '../assets/images/regenerated_image_1787571357074.jpg';
import ilacLogo from '../assets/images/regenerated_image_1786965083511.png';
import ninasLogo from '../assets/images/ninas_logo.png';
import ndpcLogo from '../assets/images/regenerated_image_1786960923682.png';
import ogtanLogo from '../assets/images/regenerated_image_1787560309968.jpg';
import nnpcLogo from '../assets/images/regenerated_image_1787560309272.jpg';
import ncdmbLogo from '../assets/images/regenerated_image_1787571357839.jpg';
import globalAciLogo from '../assets/images/global_aci_logo.png';
import { ClientShowcaseSection } from '../components/ClientShowcaseSection';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useLanguage } from '../context/LanguageContext';

interface AboutPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { language, t, isRTL } = useLanguage();
  const coreValues = [
    {
      title: 'Impartiality & Independence',
      desc: 'We maintain absolute structural and operational neutrality. All certification decisions are governed by an independent Impartiality Committee under ISO/IEC 17021-1, completely free from commercial or financial pressure.',
      icon: ShieldCheck,
      color: 'emerald'
    },
    {
      title: 'Technical Rigor & Competence',
      desc: 'Our audits and inspections are conducted by IRCA/CQI-certified Lead Auditors and ASNT Level III technical experts who evaluate real operational substance rather than routine paper checklists.',
      icon: Award,
      color: 'amber'
    },
    {
      title: 'Integrity & Transparency',
      desc: 'We operate with unyielding ethical conduct, transparent man-day pricing, clear audit findings, and verifiable certification registries accessible to regulators and clients 24/7.',
      icon: CheckCircle2,
      color: 'blue'
    },
    {
      title: 'Client-Centric Continuous Improvement',
      desc: 'We partner closely with client organizations through every stage of conformity, helping them embed continuous improvement, eliminate risks, and succeed in competitive international tenders.',
      icon: Target,
      color: 'indigo'
    }
  ];

  const objectives = [
    'Deliver timely, rigorous, and efficient ISO certification services that fulfill client, statutory, and regulatory requirements.',
    'Maintain continuous international accreditation under the Egyptian Accreditation Council (EGAC CAB 12203) with IAF MLA worldwide recognition.',
    'Provide state-of-the-art non-destructive testing (NDT), polymer testing, and third-party industrial inspection services.',
    'Equip African and international enterprises to achieve vendor prequalification across high-value energy, manufacturing, and public sector supply chains.',
    'Promote global sustainability, occupational health and safety, and environmental stewardship across all audited client facilities.'
  ];

  return (
    <div className="space-y-16 pb-16 transition-colors duration-200" dir={isRTL ? 'rtl' : 'ltr'}>
      <SeoHead
        title="About Us | IEMA Standards Limited"
        description="EGAC-accredited, IAF MLA recognized certification & inspection body in Nigeria. Learn about our leadership, international credentials, and audit methodology."
        canonicalPath="about"
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: t('nav.about'), isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />
      
      {/* Header Banner */}
      <section className="bg-[#070F2B] text-white py-16 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600" 
            alt="IEMA Standards Headquarters" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-950/80 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold border border-emerald-700/60 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t('topbar.accredited')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif max-w-4xl">
            {language === 'FR' ? "Profil & Présentation de l'entreprise" : language === 'AR' ? 'نبذة عن الشركة وهيكلها المؤسسي' : 'Our Company Overview'}
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg max-w-3xl leading-relaxed">
            {language === 'FR'
              ? "IEMA Standards Limited est un organisme international indépendant de certification ISO, d'inspection technique et d'essais dédié à aider les organisations à atteindre la conformité internationale, l'excellence opérationnelle et l'admissibilité aux appels d'offres."
              : language === 'AR'
              ? 'تعتبر IEMA Standards Limited هيئة مستقلة معترف بها دولياً في منح شهادات الآيزو والتفتيش الفني والاختبارات لمساعدة المؤسسات على تحقيق الامتثال الدولي والتميز التشغيلي والتأهل للمناقصات.'
              : 'IEMA Standards Limited is a globally recognized independent ISO certification, technical inspection, and testing body dedicated to helping organizations achieve international conformity, operational excellence, and tender readiness.'}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/pdf/Certificate-Handbook.pdf"
              download="Certificate-Handbook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                downloadIsoHandbookPdf();
              }}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-lg flex items-center gap-2 cursor-pointer active:scale-95 no-underline"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>{language === 'FR' ? 'Manuel de certification ISO' : language === 'AR' ? 'دليل شهادات الآيزو' : 'ISO certification handbook'}</span>
            </a>
            <button
              onClick={() => onNavigate('quote')}
              className="bg-[#DC2626] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <span>{t('cta.requestQuote')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('verify')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t('topbar.verify')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-widest bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 px-3 py-1 rounded-full">
              <Compass className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white font-serif">
              Empowering Organizations Through Globally Accredited Standards
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>IEMA Standards Limited</strong> (operating under <em>iemacert.com</em>) is an accredited conformity assessment and inspection institution. We operate under the international framework of the <strong>International Bureau For Standard Accreditation (IBSTAC)</strong> and hold formal international accreditation from the <strong>Egyptian Accreditation Council (EGAC)</strong>, a premier signatory to the <strong>International Accreditation Forum (IAF MLA)</strong> and <strong>ILAC MRA</strong>.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              We work hand-in-hand with enterprises of all sizes—from high-growth SMEs to multinational oil &amp; gas operators, financial institutions, construction leaders, and government authorities—to establish, audit, and certify robust Management Systems adhering to international benchmarks (ISO 9001, ISO 14001, ISO 45001, ISO 22000, ISO 27001, ISO 50001).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white dark:bg-[#0E2A47] rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-sm">
                <div className="font-extrabold text-slate-900 dark:text-white text-sm flex items-center gap-2 font-serif">
                  <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>EGAC CAB 12203</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Full signatory accreditation via EGAC, recognized across 100+ countries under the IAF MLA.</p>
              </div>

              <div className="p-4 bg-white dark:bg-[#0E2A47] rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-sm">
                <div className="font-extrabold text-slate-900 dark:text-white text-sm flex items-center gap-2 font-serif">
                  <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Strict Impartiality</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Independent Impartiality Committee governing all audit verdicts without commercial bias.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700 relative">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000"
                alt="IEMA Standards Executive Headquarters"
                className="w-full h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-[#070F2B] text-white space-y-2">
                <div className="text-xs text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Corporate Head Office</span>
                </div>
                <div className="text-sm font-semibold">{COMPANY_INFO.address}</div>
                <div className="text-xs text-slate-300 flex items-center gap-4 pt-1">
                  <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-emerald-400" /> {COMPANY_INFO.phone}</span>
                  <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-amber-400" /> {COMPANY_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MISSION, VISION & OBJECTIVES */}
      <section className="bg-slate-50 dark:bg-slate-900/60 py-16 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Purpose &amp; Direction</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
              Our Mission, Vision &amp; Strategic Objectives
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Defining our foundational commitment to operational excellence, regulatory compliance, and industrial safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white dark:bg-[#0E2A47] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-serif">Our Mission</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To work with clients to optimize their processes for international standards, ensure they deploy and implement updated standards to maintain industry leadership, and assist them in establishing company-wide policies and standard operating procedures required for international certification and continuous improvement.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-3">
                Furthermore, our mission is to deliver world-class non-destructive testing (NDT), polymer laboratory analysis, and industrial third-party inspection services that enhance workplace safety, material reliability, and environmental compliance across diverse industrial sectors.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white dark:bg-[#0E2A47] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-serif">Our Vision</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To be a leading and trusted global ISO certification body and Africa's premier inspection and NDT testing authority, recognized for technical excellence, utmost professionalism, innovative methodologies, and an uncompromising commitment to quality, occupational safety, and environmental sustainability.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-3">
                Through our multilateral recognitions with EGAC, IAF, and ILAC, we envision a future where certificates bearing the IEMA mark of conformity are accepted without barrier across global borders, major multinational energy operators, and international regulatory bodies.
              </p>
            </div>
          </div>

          {/* Objectives List */}
          <div className="bg-white dark:bg-[#0E2A47] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Strategic Pillars</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-serif">Our Core Objectives</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {objectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-800">
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-widest bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
            Our Foundational Ethics
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            The Core Values That Guide Our Audits
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Every audit, inspection report, laboratory test, and certification decision is rooted in these non-negotiable principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all space-y-3">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit text-emerald-600 dark:text-emerald-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-serif">{val.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ACCREDITATIONS & GLOBAL PARTNERS WITH LOGOS */}
      <section className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white py-16 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Global Frameworks</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
              Accreditation &amp; Regulatory Alliances
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Our certifications and test reports carry worldwide legal validity and recognition across public procurement registries, oil majors, financial authorities, and international standard councils.
            </p>
          </div>

          {/* Logo Showcase Grid - Complete 10 Alliances & Accreditations */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6 items-stretch">
            {/* 1. EGAC */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center min-h-[120px] group hover:border-amber-500 hover:shadow-md transition-all">
              <img src={egacLogo} alt="EGAC Accreditation CAB 12203" className="max-h-12 max-w-full object-contain" onError={(e) => { (e.target as HTMLImageElement).src = '/egac_logo.png'; }} />
              <span className="text-[11px] font-bold text-slate-800 mt-2">EGAC Accredited</span>
              <span className="text-[9px] text-amber-600 font-bold uppercase tracking-wider">CAB 12203</span>
            </div>

            {/* 2. IAF MLA */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center min-h-[120px] group hover:border-amber-500 hover:shadow-md transition-all">
              <img src={iafLogo} alt="IAF MLA Signatory" className="max-h-12 max-w-full object-contain" onError={(e) => { (e.target as HTMLImageElement).src = '/iaf_logo.png'; }} />
              <span className="text-[11px] font-bold text-slate-800 mt-2">IAF MLA Signatory</span>
              <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider">Global Recognition</span>
            </div>

            {/* 3. IBSTAC */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center min-h-[120px] group hover:border-amber-500 hover:shadow-md transition-all">
              <img src={ibstacLogo} alt="IBSTAC Framework" className="max-h-12 max-w-full object-contain" onError={(e) => { (e.target as HTMLImageElement).src = '/IBSTAC.png'; }} />
              <span className="text-[11px] font-bold text-slate-800 mt-2">IBSTAC Framework</span>
              <span className="text-[9px] text-blue-600 font-bold uppercase tracking-wider">US Accreditation</span>
            </div>

            {/* 4. ILAC MRA */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center min-h-[120px] group hover:border-amber-500 hover:shadow-md transition-all">
              <img src={ilacLogo} alt="ILAC-MRA International Laboratory Accreditation" className="max-h-12 max-w-full object-contain" onError={(e) => { (e.target as HTMLImageElement).src = '/ilac_logo.png'; }} />
              <span className="text-[11px] font-bold text-slate-800 mt-2">ILAC-MRA</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">ISO/IEC 17025 Testing</span>
            </div>

            {/* 5. NiNAS */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center min-h-[120px] group hover:border-amber-500 hover:shadow-md transition-all">
              <img src={ninasLogo} alt="NiNAS Nigeria National Accreditation System" className="max-h-12 max-w-full object-contain" onError={(e) => { (e.target as HTMLImageElement).src = '/ninas_logo.png'; }} />
              <span className="text-[11px] font-bold text-slate-800 mt-2">NiNAS Affiliated</span>
              <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider">National Quality</span>
            </div>

            {/* 6. NDPC */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center min-h-[120px] group hover:border-amber-500 hover:shadow-md transition-all">
              <img src={ndpcLogo} alt="NDPC Licensed DPCO" className="max-h-12 max-w-full object-contain" onError={(e) => { (e.target as HTMLImageElement).src = '/ndpc_logo.png'; }} />
              <span className="text-[11px] font-bold text-slate-800 mt-2">NDPC Licensed DPCO</span>
              <span className="text-[9px] text-blue-600 font-bold uppercase tracking-wider">Data Protection</span>
            </div>

            {/* 7. Global ACI */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center min-h-[120px] group hover:border-amber-500 hover:shadow-md transition-all">
              <img src={globalAciLogo} alt="Global ACI" className="max-h-12 max-w-full object-contain" onError={(e) => { (e.target as HTMLImageElement).src = '/global_aci_logo.png'; }} />
              <span className="text-[11px] font-bold text-slate-800 mt-2">Global ACI</span>
              <span className="text-[9px] text-amber-600 font-bold uppercase tracking-wider">Auditor Oversight</span>
            </div>

            {/* 8. NNPC */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center min-h-[120px] group hover:border-amber-500 hover:shadow-md transition-all">
              <img src={nnpcLogo} alt="NNPC Limited Vendor Compliant" className="max-h-12 max-w-full object-contain" onError={(e) => { (e.target as HTMLImageElement).src = '/NNPC.png'; }} />
              <span className="text-[11px] font-bold text-slate-800 mt-2">NNPC Compliant</span>
              <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider">Energy &amp; Petroleum</span>
            </div>

            {/* 9. NCDMB */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center min-h-[120px] group hover:border-amber-500 hover:shadow-md transition-all">
              <img src={ncdmbLogo} alt="NCDMB & NIPEX Recognized" className="max-h-12 max-w-full object-contain" onError={(e) => { (e.target as HTMLImageElement).src = '/NCDMB.png'; }} />
              <span className="text-[11px] font-bold text-slate-800 mt-2">NCDMB &amp; NIPEX</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Local Content</span>
            </div>

            {/* 10. OGTAN */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center min-h-[120px] group hover:border-amber-500 hover:shadow-md transition-all">
              <img src={ogtanLogo} alt="OGTAN Certified Member" className="max-h-12 max-w-full object-contain" onError={(e) => { (e.target as HTMLImageElement).src = '/ogtan_logo.png'; }} />
              <span className="text-[11px] font-bold text-slate-800 mt-2">OGTAN Certified</span>
              <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider">Oil &amp; Gas Faculty</span>
            </div>
          </div>

          {/* Core Framework Standards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
              <div className="text-amber-600 dark:text-amber-400 font-mono font-bold text-sm">ISO/IEC 17021-1:2015</div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-serif">Management Systems Certification</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Specifies requirements for bodies providing audit and certification of management systems (ISO 9001, 14001, 45001, 27001, 22000, 50001, 22301, 37001).
              </p>
            </div>

            <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
              <div className="text-emerald-600 dark:text-emerald-400 font-mono font-bold text-sm">ISO/IEC 17025:2017</div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-serif">Testing &amp; Calibration Laboratories</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                General requirements for the competence, impartiality, and consistent operation of our polymer testing and non-destructive material testing (NDT) facility.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
              <div className="text-blue-600 dark:text-blue-400 font-mono font-bold text-sm">ISO/IEC 17065:2012</div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-serif">Product &amp; Inspection Certification</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                International standard governing product conformity assessment, industrial batch testing, QA/QC factory acceptance testing (FAT), and pre-shipment inspections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE IEMACERT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#070F2B] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">The IEMA Advantage</span>
              <h2 className="text-2xl sm:text-4xl font-black font-serif text-white">
                Why Organizations Worldwide Choose IEMACERT
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We combine global accreditation rigor with responsive, transparent, and client-focused service delivery.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('approach')}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>Explore Our 6-Stage Audit Methodology</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>EGAC / IAF Recognition</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">Certificates accepted globally across all IAF MLA signatory nations and procurement bodies.</p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Structured 60-Day Delivery</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">Predictable audit scheduling from Stage 1 readiness review to certificate issuance.</p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>24/7 Digital Registry</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">Instant online QR verification for clients, auditors, and regulatory inspectors.</p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Award className="w-4 h-4" />
                  <span>Senior Lead Faculty</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">IRCA/CQI certified lead auditors with deep sector-specific operational experience.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CERTIFIED CLIENTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClientShowcaseSection onNavigate={onNavigate} />
      </section>

      {/* THREE STRATEGIC PILLARS NAVIGATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#0E2A47] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:border-amber-500 text-slate-900 dark:text-white">
            <div className="space-y-3">
              <div className="p-3 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif">Our 6-Stage Approach</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Discover our structured 60-day ISO certification roadmap, from Stage 1 readiness reviews to independent impartiality board approval and IAF MLA global recognition.
              </p>
            </div>
            <button
              onClick={() => onNavigate('approach')}
              className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1.5 pt-2"
            >
              <span>Explore Our Methodology</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white dark:bg-[#0E2A47] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:border-amber-500 text-slate-900 dark:text-white">
            <div className="space-y-3">
              <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl w-fit">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif">Our Team</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Meet our 13-member multidisciplinary faculty of executive leaders, lead auditors, financial consultants, and technical systems specialists.
              </p>
            </div>
            <button
              onClick={() => onNavigate('team')}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1.5 pt-2"
            >
              <span>Meet Our Full Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white dark:bg-[#0E2A47] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:border-amber-500 text-slate-900 dark:text-white">
            <div className="space-y-3">
              <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl w-fit">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif">Partners &amp; Accreditations</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Explore our formal affiliations with the Egyptian Accreditation Council (EGAC), IAF Multilateral Recognition Arrangement, NiNAS, and our NDPC DPCO regulatory license.
              </p>
            </div>
            <button
              onClick={() => onNavigate('partners')}
              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5 pt-2"
            >
              <span>View Alliances &amp; Accreditations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
