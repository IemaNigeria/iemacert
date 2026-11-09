import React, { useState } from 'react';
import { 
  Award, ShieldCheck, CheckCircle2, ArrowRight, 
  FlaskConical, SearchCheck, FileCheck2, Building2, Users, 
  Globe, Download, ChevronRight, ChevronDown, HelpCircle, Phone, Sparkles, Zap, Lock, Scale, ExternalLink, CreditCard, BookOpen, MessageSquareQuote 
} from 'lucide-react';
import { 
  COMPANY_INFO, ISO_STANDARDS, SERVICE_CATEGORIES, 
  CASE_STUDIES, DOWNLOADABLE_RESOURCES, FAQS 
} from '../data/mockData';
import { 
  EGACLogo, NiNASLogo, GlobalACILogo, IAFLogo, NDPCLogo, ILACMRADataLogo,
  IBSTACLogo, NNPCLogo, NCDMBLogo, OGTANLogo,
  ExxonMobilLogo, IRCALogo, ISPONLogo, LASEPALogo, NMDRPALogo, NUPRCLogo, ShellLogo, SONLogo, ASTMLogo, ChevronLogo, CORENLogo
} from '../components/Logos';
import { SeoHead } from '../components/SeoHead';
import { SeoNigeriaHubSection } from '../components/SeoNigeriaHubSection';
import { FeedbackModal } from '../components/FeedbackModal';

// Newly updated compliance framework images
import ibstacFrameworkImg from '../assets/images/regenerated_image_1787148077572.jpg';
import nnpcCompliantImg from '../assets/images/regenerated_image_1787560309272.jpg';
import ogtanVerifiedImg from '../assets/images/regenerated_image_1787560309968.jpg';
import ncdmbRegulatoryImg from '../assets/images/regenerated_image_1787571357839.jpg';
import ibstacLogoImg from '../assets/images/regenerated_image_1787571357074.jpg';
import nnpcLogoImg from '../assets/images/regenerated_image_1787560309272.jpg';
import ncdmbLogoImg from '../assets/images/regenerated_image_1787571357839.jpg';
import ogtanLogoImg from '../assets/images/regenerated_image_1787560309968.jpg';
import articleIso17020Image from '../assets/images/regenerated_image_1790563435645.jpg';
import { ClientShowcaseSection } from '../components/ClientShowcaseSection';
import fcmbLogo from '../assets/images/clients/fcmb.png';
import rccLogo from '../assets/images/clients/rcc.png';
import bonoLogo from '../assets/images/clients/bono.png';
import quantumLogo from '../assets/images/regenerated_image_1792162958827.jpg';
import shorelineLogo from '../assets/images/clients/shoreline.png';
import sunflagLogo from '../assets/images/regenerated_image_1792162962673.jpg';
import { useLanguage } from '../context/LanguageContext';

interface HomePageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('certification');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const { language, t, isRTL } = useLanguage();

  return (
    <div className="space-y-16 pb-16 bg-slate-50 dark:bg-[#0A192F] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* Dynamic SEO Meta Tags & JSON-LD Structured Schema */}
      <SeoHead
        title="ISO Certification Body in Nigeria | IEMA Standards"
        description="EGAC & IAF MLA accredited ISO certification body in Nigeria (CAB 12203). Fast-track ISO 9001, 14001 & 45001 audits in Lagos & Abuja. Get a free quote today."
        canonicalPath=""
        includeFaqSchema={true}
      />
      
      {/* HERO SECTION - Exact iiema.iemacert.com style hero banner */}
      <section className="relative bg-[#070F2B] text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Main Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Yellow Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>{language === 'FR' ? 'ACCRÉDITÉ EGAC • IAF MLA • CAB 12203' : language === 'AR' ? 'معتمد من EGAC • اتفاقية IAF MLA • كود CAB 12203' : 'EGAC ACCREDITED • IAF MLA • CAB 12203'}</span>
                </div>
                <span className="text-xs italic font-serif text-amber-300/90 tracking-wide bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  {language === 'FR' ? '« Faire de l’excellence une habitude »' : language === 'AR' ? '« جعل التميز عادة مستمرة »' : '“Making excellence a habit”'}
                </span>
              </div>

              {/* Bold Title matching iemacert.com */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight font-serif">
                {language === 'FR' ? (
                  <>
                    Organisme de Certification <br />
                    <span className="text-[#F59E0B] font-extrabold underline decoration-amber-500/40">ISO Accrédité</span> <br />
                    au Nigeria &amp; en Afrique
                  </>
                ) : language === 'AR' ? (
                  <>
                    هيئة منح شهادات <br />
                    <span className="text-[#F59E0B] font-extrabold underline decoration-amber-500/40">الأيزو المعتمدة دولياً</span> <br />
                    في نيجيريا وأفريقيا
                  </>
                ) : (
                  <>
                    Accredited ISO <br />
                    <span className="text-[#F59E0B] font-extrabold underline decoration-amber-500/40">Certification Body</span> <br />
                    in Nigeria
                  </>
                )}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                {t('hero.subtitle')}
              </p>

              {/* CTA Button Group */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://crmops.iemacert.com/request-quote.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black px-7 py-3.5 rounded-full text-sm transition-all shadow-xl shadow-red-900/40 hover:scale-105 flex items-center gap-2"
                  id="hero-quote-btn"
                >
                  <span>{t('hero.ctaQuote')}</span>
                  <ExternalLink className="w-4 h-4 opacity-90" />
                </a>

                <a
                  href="https://certificates.iiema.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-3.5 rounded-full text-xs font-black transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-105"
                  id="hero-verify-btn"
                >
                  <ShieldCheck className="w-4 h-4 text-slate-950" />
                  <span>{t('hero.ctaVerify')}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-90" />
                </a>

                <button
                  onClick={() => onNavigate('approach')}
                  className="border border-slate-600 text-slate-200 hover:bg-white/10 px-5 py-3.5 rounded-full text-xs font-extrabold transition-all flex items-center gap-1.5"
                  id="hero-approach-btn"
                >
                  <FileCheck2 className="w-4 h-4 text-amber-400" />
                  <span>{t('nav.aboutApproach')}</span>
                </button>

                <a
                  href="tel:+2348134831027"
                  className="bg-[#10B981] hover:bg-[#059669] text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all shadow-lg flex items-center gap-2"
                  id="hero-phone-btn"
                >
                  <Phone className="w-4 h-4" />
                  <span>+234 813 483 1027</span>
                </a>
              </div>

            </div>

            {/* Right Column: Official Accreditation & Approvals Card matching screenshot */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#0B1739]/90 backdrop-blur-md rounded-2xl p-6 border-2 border-slate-700/80 shadow-2xl space-y-5">
                
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                  <div>
                    <h3 className="text-lg font-black text-white flex items-center gap-2">
                      <span>{t('accredCard.title')}</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{t('accredCard.subtitle')}</p>
                  </div>
                  <Award className="w-6 h-6 text-amber-400 shrink-0" />
                </div>

                {/* Accreditation Logo List */}
                <div className="space-y-3">
                  
                  {/* EGAC Item */}
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-700/80 flex items-center justify-between gap-3 hover:border-amber-500/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center shrink-0">
                        <EGACLogo className="w-10 h-10" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-white">{t('accredCard.egacName')}</div>
                        <div className="text-[11px] text-slate-400">{t('accredCard.egacDesc')}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-black bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded uppercase">
                      {t('accredCard.primary')}
                    </span>
                  </div>

                  {/* NiNAS Item */}
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-700/80 flex items-center justify-between gap-3 hover:border-amber-500/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center shrink-0">
                        <NiNASLogo className="w-10 h-10" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-white">{t('accredCard.ninasName')}</div>
                        <div className="text-[11px] text-slate-400">{t('accredCard.ninasDesc')}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-black bg-blue-950 text-blue-400 border border-blue-800 px-2 py-0.5 rounded uppercase">
                      {t('accredCard.national')}
                    </span>
                  </div>

                  {/* Global ACI Item */}
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-700/80 flex items-center justify-between gap-3 hover:border-amber-500/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center shrink-0">
                        <GlobalACILogo className="w-10 h-10" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-white">Global ACI</div>
                        <div className="text-[11px] text-slate-400">Global Accreditation Certification Institute</div>
                      </div>
                    </div>
                  </div>

                  {/* NDPC Item */}
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-700/80 flex items-center justify-between gap-3 hover:border-amber-500/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-12 bg-white rounded-lg p-1 flex items-center justify-center shrink-0">
                        <NDPCLogo className="h-7 w-auto" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-white">{t('accredCard.ndpcName')}</div>
                        <div className="text-[11px] text-slate-400">{t('accredCard.ndpcDesc')}</div>
                      </div>
                    </div>
                  </div>

                  {/* IAF & ILAC Badges */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-700/80 flex items-center gap-2">
                      <div className="w-8 h-8 bg-white rounded p-0.5 flex items-center justify-center shrink-0">
                        <IAFLogo className="w-7 h-5" />
                      </div>
                      <div className="text-[10px] font-bold text-slate-200">{t('accredCard.iafSignatory')}</div>
                    </div>

                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-700/80 flex items-center gap-2">
                      <div className="w-8 h-8 bg-white rounded p-0.5 flex items-center justify-center shrink-0">
                        <ILACMRADataLogo className="w-7 h-7" />
                      </div>
                      <div className="text-[10px] font-bold text-slate-200">{t('accredCard.ilacTesting')}</div>
                    </div>
                  </div>

                </div>

                <div className="pt-2 text-center border-t border-slate-800">
                  <button
                    onClick={() => onNavigate('accreditation')}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center justify-center gap-1 mx-auto"
                  >
                    <span>{t('accredCard.viewCredentials')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white dark:bg-[#0B1E38] rounded-2xl shadow-xl dark:shadow-2xl border border-slate-200 dark:border-slate-700/80 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 text-center text-slate-900 dark:text-white transition-colors">
          <div className="pt-2 md:pt-0">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">{COMPANY_INFO.stats.certificatesIssued}</div>
            <div className="text-xs text-slate-600 dark:text-slate-300 font-semibold mt-1">
              {t('stats.issued')}
            </div>
          </div>
          <div className="pt-2 md:pt-0 md:pl-4">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-serif">{COMPANY_INFO.stats.auditsCompleted}</div>
            <div className="text-xs text-slate-600 dark:text-slate-300 font-semibold mt-1">
              {t('stats.audits')}
            </div>
          </div>
          <div className="pt-2 md:pt-0 md:pl-4">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">{COMPANY_INFO.stats.clientSatisfaction}</div>
            <div className="text-xs text-slate-600 dark:text-slate-300 font-semibold mt-1">
              {t('stats.satisfaction')}
            </div>
          </div>
          <div className="pt-2 md:pt-0 md:pl-4">
            <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 font-serif">{COMPANY_INFO.stats.accreditedCountries}</div>
            <div className="text-xs text-slate-600 dark:text-slate-300 font-semibold mt-1">
              {t('stats.markets')}
            </div>
          </div>
          <div className="pt-2 md:pt-0 col-span-2 md:col-span-1 md:pl-4">
            <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 font-serif">{COMPANY_INFO.stats.expertAuditors}</div>
            <div className="text-xs text-slate-600 dark:text-slate-300 font-semibold mt-1">
              {t('stats.auditors')}
            </div>
          </div>
        </div>
      </section>

      {/* 30-SECOND EXECUTIVE OVERVIEW: WHO WE ARE • WHAT WE CERTIFY • WHY CHOOSE US • HOW TO START */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#0B1E38] rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 dark:border-slate-700/80 shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{t('overview.tag')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
                {t('overview.heading')}
              </h2>
            </div>
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DC2626] hover:bg-[#b91c1c] text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md self-start sm:self-auto shrink-0"
            >
              <span>{t('overview.quoteIn24h')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Who We Are */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#08152D] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-3 hover:border-amber-500 transition-colors">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-white font-serif">
                  {t('overview.card1Title')}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t('overview.card1Text')}
                </p>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 pt-2"
              >
                <span>{t('overview.card1Link')}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 2. What We Certify */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#08152D] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-3 hover:border-emerald-500 transition-colors">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-white font-serif">
                  {t('overview.card2Title')}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t('overview.card2Text')}
                </p>
              </div>
              <button
                onClick={() => onNavigate('certifications')}
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 pt-2"
              >
                <span>{t('overview.card2Link')}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3. Why Choose Us */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#08152D] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-3 hover:border-blue-500 transition-colors">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-white font-serif">
                  {t('overview.card3Title')}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t('overview.card3Text')}
                </p>
              </div>
              <button
                onClick={() => onNavigate('partners')}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 pt-2"
              >
                <span>{t('overview.card3Link')}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 4. How to Start */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#08152D] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-3 hover:border-red-500 transition-colors">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-sm">
                  04
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-white font-serif">
                  {t('overview.card4Title')}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t('overview.card4Text')}
                </p>
              </div>
              <button
                onClick={() => onNavigate('approach')}
                className="text-xs font-bold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 pt-2"
              >
                <span>{t('overview.card4Link')}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* DEDICATED NIGERIAN & OIL & GAS REGULATORY COMPLIANCE SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#070F2B] to-[#0D1F42] text-white rounded-3xl p-8 sm:p-10 border-2 border-amber-500/30 shadow-2xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 px-3 py-1 rounded-full text-xs font-bold border border-amber-500/30">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Regulatory &amp; Energy Sector Compliance Frameworks</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-serif tracking-tight">
                National Alliances &amp; Oil &amp; Gas Industry Standards
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Operating in full alignment with apex Nigerian energy regulators, local content mandates, and global accreditation bodies.
              </p>
            </div>

            <button
              onClick={() => onNavigate('partners')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all self-start md:self-auto shrink-0 shadow-lg shadow-amber-500/20"
            >
              <span>Explore All Partners &amp; Scopes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4 Feature Cards Grid: IBSTAC, NNPC, NCDMB & NIPEX, OGTAN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. IBSTAC Framework */}
            <div className="bg-[#0B1739] p-6 rounded-2xl border border-slate-700/80 hover:border-amber-500/60 transition-all duration-300 flex flex-col items-center text-center space-y-4 group">
              <div className="w-20 h-20 bg-white rounded-2xl p-2 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
                <img 
                  src={ibstacFrameworkImg} 
                  alt="IBSTAC Framework" 
                  className="w-full h-full object-contain" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-black text-white group-hover:text-amber-400 transition-colors">
                  IBSTAC Framework
                </h3>
                <span className="inline-block text-[10px] font-bold bg-amber-950/80 text-amber-300 border border-amber-800/80 px-2.5 py-0.5 rounded-full uppercase">
                  Accreditation Framework
                </span>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  International Bureau for Standard Accreditation framework verification and ISO audit governance benchmarks.
                </p>
              </div>
            </div>

            {/* 2. NNPC Compliant */}
            <div className="bg-[#0B1739] p-6 rounded-2xl border border-slate-700/80 hover:border-emerald-500/60 transition-all duration-300 flex flex-col items-center text-center space-y-4 group">
              <div className="w-20 h-20 bg-white rounded-2xl p-2 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
                <img 
                  src={nnpcCompliantImg} 
                  alt="NNPC Compliant" 
                  className="w-full h-full object-contain" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-black text-white group-hover:text-emerald-400 transition-colors">
                  NNPC Compliant
                </h3>
                <span className="inline-block text-[10px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 px-2.5 py-0.5 rounded-full uppercase">
                  National Energy
                </span>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  Fully aligned with Nigerian National Petroleum Company Limited vendor pre-qualification and QA/QC requirements.
                </p>
              </div>
            </div>

            {/* 3. NCDMB & NIPEX */}
            <div className="bg-[#0B1739] p-6 rounded-2xl border border-slate-700/80 hover:border-blue-500/60 transition-all duration-300 flex flex-col items-center text-center space-y-4 group">
              <div className="w-20 h-20 bg-white rounded-2xl p-2 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
                <img 
                  src={ncdmbRegulatoryImg} 
                  alt="NCDMB & NIPEX" 
                  className="w-full h-full object-contain" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-black text-white group-hover:text-blue-400 transition-colors">
                  NCDMB &amp; NIPEX
                </h3>
                <span className="inline-block text-[10px] font-bold bg-blue-950/80 text-blue-300 border border-blue-800/80 px-2.5 py-0.5 rounded-full uppercase">
                  Local Content &amp; JQS
                </span>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  Nigerian Content Development &amp; Monitoring Board compliance and NipeX Joint Qualification System alignment.
                </p>
              </div>
            </div>

            {/* 4. OGTAN Verified */}
            <div className="bg-[#0B1739] p-6 rounded-2xl border border-slate-700/80 hover:border-amber-500/60 transition-all duration-300 flex flex-col items-center text-center space-y-4 group">
              <div className="w-20 h-20 bg-white rounded-2xl p-2 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
                <img 
                  src={ogtanVerifiedImg} 
                  alt="OGTAN Verified" 
                  className="w-full h-full object-contain" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-black text-white group-hover:text-amber-400 transition-colors">
                  OGTAN Verified
                </h3>
                <span className="inline-block text-[10px] font-bold bg-amber-950/80 text-amber-300 border border-amber-800/80 px-2.5 py-0.5 rounded-full uppercase">
                  Oil &amp; Gas Trainers
                </span>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  Oil and Gas Trainers Association of Nigeria accredited conformity and professional competence training.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ALLIANCES & ACCREDITATION LOGOS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#0B1E38] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/80 shadow-md space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-serif">
                  Accreditation, Regulatory Alliances &amp; Industry Affiliations
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                International IAF MLA recognition, national regulators, and energy sector compliance partners
              </p>
            </div>
            <button
              onClick={() => onNavigate('partners')}
              className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View All 20+ Partners &amp; Scopes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 items-center">
            {/* 1. EGAC */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-10 h-10 flex items-center justify-center shadow-sm">
                <EGACLogo className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">EGAC CAB 12203</span>
            </div>

            {/* 2. IAF */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-12 h-8 flex items-center justify-center shadow-sm">
                <IAFLogo className="w-10 h-6" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">IAF MLA Signatory</span>
            </div>

            {/* 3. IRCA */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-14 h-8 flex items-center justify-center shadow-sm">
                <IRCALogo className="h-6 w-auto" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">IRCA Lead Auditor</span>
            </div>

            {/* 4. ASTM */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-12 h-8 flex items-center justify-center shadow-sm">
                <ASTMLogo className="h-7 w-auto" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">ASTM Standards</span>
            </div>

            {/* 5. NCDMB */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-10 h-10 flex items-center justify-center shadow-sm overflow-hidden">
                <NCDMBLogo className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">NCDMB &amp; NIPEX</span>
            </div>

            {/* 6. NUPRC */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-10 h-10 flex items-center justify-center shadow-sm overflow-hidden">
                <NUPRCLogo className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">NUPRC Upstream</span>
            </div>

            {/* 7. NMDPRA */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-10 h-10 flex items-center justify-center shadow-sm overflow-hidden">
                <NMDRPALogo className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">NMDPRA Authority</span>
            </div>

            {/* 8. OGTAN */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-14 h-8 flex items-center justify-center shadow-sm overflow-hidden">
                <OGTANLogo className="h-6 w-auto" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">OGTAN Certified</span>
            </div>

            {/* 9. SON */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-10 h-10 flex items-center justify-center shadow-sm overflow-hidden">
                <SONLogo className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">SON Standards</span>
            </div>

            {/* 10. LASEPA */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-14 h-8 flex items-center justify-center shadow-sm overflow-hidden">
                <LASEPALogo className="h-6 w-auto" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">LASEPA Agency</span>
            </div>

            {/* 11. ISPON */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-10 h-10 flex items-center justify-center shadow-sm overflow-hidden">
                <ISPONLogo className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">ISPON Safety Act</span>
            </div>

            {/* 12. COREN */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-14 h-8 flex items-center justify-center shadow-sm overflow-hidden">
                <CORENLogo className="h-6 w-auto" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">COREN Engineers</span>
            </div>

            {/* 13. SHELL */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-14 h-8 flex items-center justify-center shadow-sm overflow-hidden">
                <ShellLogo className="h-6 w-auto" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">Shell Energy</span>
            </div>

            {/* 14. EXXONMOBIL */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-16 h-8 flex items-center justify-center shadow-sm overflow-hidden">
                <ExxonMobilLogo className="h-5 w-auto" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">ExxonMobil</span>
            </div>

            {/* 15. CHEVRON */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-14 h-8 flex items-center justify-center shadow-sm overflow-hidden">
                <ChevronLogo className="h-6 w-auto" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">Chevron Corp</span>
            </div>

            {/* 16. NNPC */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-10 h-10 flex items-center justify-center shadow-sm overflow-hidden">
                <NNPCLogo className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">NNPC Ltd</span>
            </div>

            {/* 17. NiNAS */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-10 h-10 flex items-center justify-center shadow-sm">
                <NiNASLogo className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">NiNAS Quality</span>
            </div>

            {/* 18. NDPC */}
            <div className="bg-slate-50 dark:bg-[#08152D] p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center text-center h-24 hover:border-amber-500 transition-all">
              <div className="bg-white rounded p-1 w-14 h-8 flex items-center justify-center shadow-sm">
                <NDPCLogo className="h-6 w-auto" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">NDPC DPCO</span>
            </div>
          </div>
        </div>
      </section>

      {/* ISO MANAGEMENT SYSTEM STANDARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-widest bg-amber-500/10 dark:bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30 dark:border-amber-500/40">
            EGAC Accredited Scope
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-serif">
            Accredited ISO Management Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Accelerate business compliance, process governance, and international trade qualification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ISO_STANDARDS.slice(0, 8).map((std) => (
            <div 
              key={std.id}
              className="bg-white dark:bg-[#0E2A47] rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group hover:border-amber-500 dark:hover:border-amber-400 text-slate-900 dark:text-white"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${std.badgeColor}`}>
                    {std.code}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors mb-2 font-serif">
                  {std.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {std.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{std.category}</span>
                <button
                  onClick={() => onNavigate('certifications', { standard: std.id })}
                  className="text-xs font-bold text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('certifications')}
            className="inline-flex items-center gap-2 bg-[#0A192F] hover:bg-[#0E2A47] text-white px-7 py-3.5 rounded-full font-bold text-xs shadow-lg border border-slate-700 transition-colors"
          >
            <span>Explore All ISO Standards &amp; Scopes</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </section>

      {/* SERVICES OVERVIEW TABS */}
      <section className="bg-slate-100 dark:bg-[#081226] py-16 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-widest bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
              Full Conformity Spectrum
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
              Testing, Inspection &amp; Compliance Services
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Integrated technical solutions delivered by certified engineers, laboratory specialists, and legal compliance experts.
            </p>
          </div>

          {/* Service Category Buttons */}
          <div className="flex justify-center flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-3 rounded-xl font-extrabold text-xs transition-all flex items-center gap-2 ${
                  activeTab === cat.id 
                    ? 'bg-[#DC2626] text-white shadow-md' 
                    : 'bg-white dark:bg-[#0E2A47] text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#12365B] border border-slate-300 dark:border-slate-700'
                }`}
              >
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          {SERVICE_CATEGORIES.filter(c => c.id === activeTab).map((category) => (
            <div key={category.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#0B1E38] p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white transition-colors">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">{category.tagline}</span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1 font-serif">{category.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">{category.description}</p>
                </div>

                <div className="space-y-4">
                  {category.subServices.map((sub, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 dark:bg-[#0A192F] rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                        <span>{sub.name}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{sub.description}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {sub.features.map((feat, fIdx) => (
                          <span key={fIdx} className="text-[10px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 px-2 py-0.5 rounded font-medium">
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onNavigate(category.id === 'certification' ? 'certifications' : category.id === 'testing' || category.id === 'inspection' ? 'testing-inspection' : 'compliance')}
                    className="bg-[#DC2626] hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-xs font-bold transition-colors flex items-center gap-2 shadow"
                  >
                    <span>Read Full Service Specification</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  {category.id === 'compliance' && (
                    <button
                      onClick={() => onNavigate('pci-dss')}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 shadow-md hover:scale-105"
                      id="home-pci-dss-cta-btn"
                    >
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Dedicated PCI DSS v4.0.1 Hub</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 relative group">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                    <span className="text-xs text-amber-400 font-bold uppercase">{COMPANY_INFO.name}</span>
                    <h4 className="text-lg font-bold">{category.title}</h4>
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* INDUSTRY SECTORS GRID - EXACT 7 SECTORS FROM IEMACERT.COM */}
      <section className="bg-slate-50 dark:bg-[#070F2B] py-16 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-widest bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800 px-3 py-1 rounded-full">
              Industry Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
              Industries We Serve
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              We provide accredited certification, technical inspection, and material testing tailored to key sectors across Nigeria and international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                name: "Oil and Gas",
                desc: "ISO 29001, API 510/653 Inspections, Pressure Vessels, Offshore NDT & NIPEX Compliance.",
                img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600",
                targetPage: "testing-inspection",
              },
              {
                name: "Maritime Compliance",
                desc: "Quayside Crane Load Testing, Marine Hull Inspection, Port Logistics & ISO 28000.",
                img: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&q=80&w=600",
                targetPage: "testing-inspection",
              },
              {
                name: "Manufactured Products & Metals Technology",
                desc: "Heavy Metallurgy, Steel Mills, Rebar Tensile Testing, Polymers & Fabrication QA/QC.",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
                targetPage: "testing-inspection",
              },
              {
                name: "Financial Services & FinTech",
                desc: "ISO/IEC 27001 Information Security, Cyber Resilience, NDPA Data Protection & ISO 22301.",
                img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=600",
                targetPage: "compliance",
              },
              {
                name: "Energy and Environmental",
                desc: "ISO 50001 Energy Audits, ISO 14001 EMS, Environmental Impact Assessments (EIA) & NESREA.",
                img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=600",
                targetPage: "environmental",
              },
              {
                name: "Healthcare, Medical Devices & Pharmaceuticals",
                desc: "ISO 13485 Medical Devices, ISO 7101 Healthcare Management, Cleanroom Audits & Pharma QA.",
                img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
                targetPage: "certifications",
              },
              {
                name: "Institutional & Professional Training",
                desc: "Certified Lead Auditor Courses, Internal Auditor Workshops, Technical Rigging & Safety Training.",
                img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
                targetPage: "training",
              }
            ].map((sector, idx) => (
              <div 
                key={idx}
                onClick={() => onNavigate(sector.targetPage)}
                className="group bg-white dark:bg-[#0E2A47] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between text-slate-900 dark:text-white"
              >
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={sector.img} 
                    alt={sector.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <h3 className="absolute bottom-3 left-3 right-3 text-white font-extrabold text-sm sm:text-base leading-snug drop-shadow-md font-serif">
                    {sector.name}
                  </h3>
                </div>

                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {sector.desc}
                  </p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500">
                    <span>Explore Sector Solutions</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH / 4-STEP AUDIT LIFECYCLE MATCHING IEMACERT.COM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-widest bg-amber-100 dark:bg-amber-950 border border-amber-300 dark:border-amber-800 px-3 py-1 rounded-full">
            {t('methodology.tag')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            {t('methodology.heading')}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            {t('methodology.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {[
            { 
              num: "01", 
              title: t('methodology.step1Title'), 
              desc: t('methodology.step1Desc') 
            },
            { 
              num: "02", 
              title: t('methodology.step2Title'), 
              desc: t('methodology.step2Desc') 
            },
            { 
              num: "03", 
              title: t('methodology.step3Title'), 
              desc: t('methodology.step3Desc') 
            },
            { 
              num: "04", 
              title: t('methodology.step4Title'), 
              desc: t('methodology.step4Desc') 
            },
          ].map((step, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-md relative group hover:border-amber-500 dark:hover:border-amber-400 transition-all text-slate-900 dark:text-white">
              <div className="text-2xl font-black text-amber-600 dark:text-amber-400 mb-2 font-mono">{step.num}</div>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors font-serif">{step.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE IEMA STANDARDS (from iemacert.com) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#0B1E38] rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-700/80 shadow-md space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-100 dark:bg-amber-950 border border-amber-300 dark:border-amber-800 px-3 py-1 rounded-full">
              {t('why.tag')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
              {t('why.heading')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              {t('why.subheading')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: t('why.point1Title'),
                desc: t('why.point1Desc')
              },
              {
                icon: Users,
                title: t('why.point2Title'),
                desc: t('why.point2Desc')
              },
              {
                icon: Zap,
                title: t('why.point3Title'),
                desc: t('why.point3Desc')
              },
              {
                icon: Award,
                title: t('why.point4Title'),
                desc: t('why.point4Desc')
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-slate-50 dark:bg-[#0E2A47] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-sm text-slate-900 dark:text-white font-serif">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CLIENTS & CORPORATE LEADERS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClientShowcaseSection onNavigate={onNavigate} />
      </section>

      {/* CLIENT TESTIMONIALS & TRUSTED VERIFICATIONS FROM IEMACERT.COM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-widest bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-800 px-3 py-1 rounded-full">
            Client Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            Trusted by Industry Leaders Across West Africa
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Read how organizations achieve regulatory compliance, operational quality, and international tender qualification with IEMA Standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              client: "First City Monument Bank (FCMB)",
              logo: fcmbLogo,
              sector: "Commercial Banking & Financial Services",
              standards: "ISO/IEC 27001 (ISMS) • ISO 22301 (BCMS)",
              quote: "IEMA Standards' accredited audit teams provided thorough, technical assessment across our banking infrastructure and disaster recovery architectures, reinforcing our enterprise information security posture.",
              person: "Chief Information Security & Compliance Directorate",
            },
            {
              client: "Reynolds Construction Company (RCC Nigeria)",
              logo: rccLogo,
              sector: "Civil Engineering & Heavy Construction",
              standards: "Integrated Management System (ISO 9001, 14001, 45001)",
              quote: "Their field surveillance auditors showed deep engineering knowledge during our nationwide highway and bridge project audits, ensuring strict QA/QC and occupational safety conformance.",
              person: "Director of Quality, Health, Safety & Environment",
            },
            {
              client: "Bono Energy Group",
              logo: bonoLogo,
              sector: "Energy Logistics & Petroleum Trading",
              standards: "ISO 9001:2015 • ISO 14001:2015 • ISO 45001:2018",
              quote: "The rigorous audits conducted by IEMA Standards elevated our marine and energy supply chain operations, satisfying all NCDMB local content and international trading partner benchmarks.",
              person: "QHSE & Corporate Governance Division",
            },
            {
              client: "Quantum Steels Nigeria Limited",
              logo: quantumLogo,
              sector: "Heavy Metallurgy & Structural Steel Rolling",
              standards: "ISO Certification & Destructive Tensile UTM Testing",
              quote: "IEMA's destructive materials testing and quality audits ensured complete product conformance and chemical heat traceability for our heavy structural steel manufacturing operations.",
              person: "Plant Operations & Metallurgical QA/QC Division",
            },
            {
              client: "Shoreline Natural Resources",
              logo: shorelineLogo,
              sector: "Upstream Oil & Gas Exploration & Production",
              standards: "ISO 14001:2015 • ISO 45001:2018 • NDT Asset Integrity",
              quote: "IEMA's asset integrity inspections and environmental management audits across our oilfield concessions demonstrated the highest caliber of technical independence and regulatory alignment.",
              person: "Head of Upstream Asset Integrity & Environmental Compliance",
            },
            {
              client: "Sunflag Group Nigeria",
              logo: sunflagLogo,
              sector: "Industrial Manufacturing & Steel Mills",
              standards: "ISO 9001:2015 • ISO 14001:2015 • Occupational Safety",
              quote: "Partnering with IEMA Standards for our multi-facility manufacturing audits established unified quality controls and sustainable environmental practices across our plants.",
              person: "Corporate Quality Management & Manufacturing Directorate",
            },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-[#0B1E38] p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:border-amber-500"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="h-11 w-28 bg-white rounded-lg p-1.5 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm overflow-hidden shrink-0">
                    <img
                      src={item.logo}
                      alt={`${item.client} Logo`}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[10px] font-extrabold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 px-2.5 py-0.5 rounded-full uppercase text-right line-clamp-1">
                    {item.sector}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-serif">{item.client}</h3>
                  <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                    {item.standards}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                — {item.person}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST REGULATORY INSIGHTS & KNOWLEDGE BASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full text-xs font-bold border border-amber-500/30 mb-2">
              <BookOpen className="w-3.5 h-3.5 text-amber-500" />
              <span>Official Knowledge Base &amp; Publications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
              Latest Technical Insights &amp; Regulatory Briefs
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
              Authoritative updates on standards transitions, cybersecurity, AI governance, and environmental compliance in Nigeria.
            </p>
          </div>
          <button
            onClick={() => onNavigate('blog')}
            className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-extrabold text-xs sm:text-sm hover:underline self-start md:self-auto"
          >
            <span>View All Insights &amp; Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "What the New ISO/IEC 17020:2026 Means for Inspection Bodies",
              category: "Inspection & Engineering",
              readTime: "8 min read",
              summary: "A technical breakdown of the 2026 revision replacing the 2012 edition, 3-year transition timeline, streamlined independence models, and digital validation rules.",
              image: articleIso17020Image,
              linkedinUrl: "https://www.linkedin.com/pulse/what-new-isoiec-170202026-means-inspection-bodies-4ejie",
            },
            {
              title: "Cyber Threats on the Rise: Why ISO/IEC 27001 Certification is Non-Negotiable",
              category: "Cybersecurity & Privacy",
              readTime: "7 min read",
              summary: "How ISO 27001:2022's 93 restructured controls defend Nigerian enterprises against ransomware, AI-driven attacks, and NDPA 2023 non-compliance penalties.",
              image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
              linkedinUrl: "https://www.linkedin.com/pulse/cyber-threats-rise-heres-why-isoiec-27001-certification-4sree",
            },
            {
              title: "AI is Moving Fast. Governance Needs to Keep Up: Why ISO/IEC 42001 Matters",
              category: "AI & Emerging Tech",
              readTime: "9 min read",
              summary: "World's first certifiable Artificial Intelligence Management System (AIMS) standard: tackling Shadow AI, data provenance, bias, and algorithmic accountability.",
              image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
              linkedinUrl: "https://www.linkedin.com/pulse/ai-moving-fast-governance-needs-keep-up-heres-why-hcu1e",
            },
            {
              title: "ISO 14001:2026: Here’s What Nigerian Businesses Need to Know",
              category: "Environmental & Sustainability",
              readTime: "7 min read",
              summary: "Key changes in the upcoming 2026 Environmental Management System standard: climate resilience, NESREA/NUPRC enforcement, and ESG supply chain readiness.",
              image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800",
              linkedinUrl: "https://www.linkedin.com/pulse/iso-140012026-here-what-nigerian-businesses-need-dynpe",
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-[#0B1E38] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-500 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-2.5 left-2.5 bg-[#070F2B]/90 text-amber-400 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-slate-700">
                    {item.category}
                  </span>
                  <span className="absolute bottom-2 right-2 text-slate-300 text-[10px] bg-slate-900/80 px-2 py-0.5 rounded">
                    {item.readTime}
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-black text-sm text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors line-clamp-2 font-serif leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <a
                  href={item.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0077B5] hover:text-[#005f93] dark:text-amber-400 dark:hover:text-amber-300 transition-colors"
                >
                  <span>Read on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NIGERIA ACCREDITED ISO CERTIFICATION HUB & KEYWORDS DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SeoNigeriaHubSection onNavigate={onNavigate} />
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800 px-3 py-1 rounded-full">
            {t('faq.tag')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            {t('faq.heading')}
          </h2>
        </div>

        <div className="space-y-3">
          {[
            { q: t('faq.q1'), a: t('faq.a1') },
            { q: t('faq.q2'), a: t('faq.a2') },
            { q: t('faq.q3'), a: t('faq.a3') },
            { q: t('faq.q4'), a: t('faq.a4') }
          ].map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-[#0B1E38] rounded-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 shrink-0 text-amber-500 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION BOTTOM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#070F2B] to-[#0D1D4A] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{t('overview.tag')}</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">{t('cta.readyTitle')}</h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {t('cta.readySubtitle')}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-7 py-3.5 rounded-full text-sm transition-all shadow-md flex items-center gap-2"
            >
              <span>{t('cta.requestQuote')}</span>
              <ExternalLink className="w-4 h-4 opacity-90" />
            </a>
            <a
              href="tel:+2348134831027"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>+234 813 483 1027</span>
            </a>
          </div>
        </div>
      </section>

      {/* COMPLAINTS, APPEALS AND FEEDBACK SECTION (Before Footer) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#0B1E38] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700/80 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6 transition-all hover:border-amber-400/60 dark:hover:border-amber-400/40">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full text-xs font-bold border border-amber-500/20">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              <span>IEMA Standards Limited</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
              Complaints, Appeals and Feedback
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              Use this form to raise a complaint, appeal a certification, inspection or testing decision, or share feedback on our services. Every submission is logged, acknowledged and handled impartially.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Impartial Complaints Procedure
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Technical Appeals Committee
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Continuous Improvement &amp; Ratings
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={() => setIsFeedbackModalOpen(true)}
              className="w-full sm:w-auto bg-[#070F2B] hover:bg-[#0D1D4A] dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-slate-950 font-black px-7 py-4 rounded-2xl text-sm transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2.5 border border-slate-700 dark:border-amber-400 group cursor-pointer"
              id="home-feedback-modal-btn"
            >
              <MessageSquareQuote className="w-4 h-4 text-amber-400 dark:text-slate-950 group-hover:rotate-6 transition-transform" />
              <span>Complaints, Appeals &amp; Feedback</span>
            </button>
          </div>
        </div>
      </section>

      {/* Complaints, Appeals and Feedback Modal */}
      <FeedbackModal 
        isOpen={isFeedbackModalOpen} 
        onClose={() => setIsFeedbackModalOpen(false)} 
      />

    </div>
  );
};
