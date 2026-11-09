import React, { useState } from 'react';
import { 
  Building2, MapPin, CheckCircle2, ArrowRight, ShieldCheck, 
  HelpCircle, ChevronDown, ChevronUp, Sparkles, 
  Search, ExternalLink, Factory, Flame, HardHat, 
  Utensils, HeartPulse, Truck, FileText, Award, Phone
} from 'lucide-react';
import { 
  SEO_KEYWORDS_LIST, NIGERIA_CITY_HUBS, INDUSTRY_VERTICALS, 
  ACCREDITED_VS_UNACCREDITED, SEO_RICH_FAQS 
} from '../data/seoKeywordsData';

interface SeoNigeriaHubSectionProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const SeoNigeriaHubSection: React.FC<SeoNigeriaHubSectionProps> = ({ onNavigate }) => {
  const [selectedCity, setSelectedCity] = useState<string>('Lagos');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('oil-gas');
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [keywordCategoryFilter, setKeywordCategoryFilter] = useState<string>('All');
  const [keywordSearch, setKeywordSearch] = useState<string>('');

  const currentCityData = NIGERIA_CITY_HUBS.find(c => c.city === selectedCity) || NIGERIA_CITY_HUBS[0];
  const currentIndustryData = INDUSTRY_VERTICALS.find(i => i.id === selectedIndustry) || INDUSTRY_VERTICALS[0];

  const filteredFaqs = SEO_RICH_FAQS.filter(faq => 
    faq.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
    faq.detailedAnswer.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
    faq.targetKeyword.toLowerCase().includes(faqSearchQuery.toLowerCase())
  );

  const filteredKeywords = SEO_KEYWORDS_LIST.filter(k => {
    const matchesCat = keywordCategoryFilter === 'All' || k.category.includes(keywordCategoryFilter);
    const matchesSearch = k.keyword.toLowerCase().includes(keywordSearch.toLowerCase()) ||
      k.titleTag.toLowerCase().includes(keywordSearch.toLowerCase()) ||
      (k.location && k.location.toLowerCase().includes(keywordSearch.toLowerCase())) ||
      (k.industry && k.industry.toLowerCase().includes(keywordSearch.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Factory': return <Factory className="w-5 h-5 text-blue-500" />;
      case 'HardHat': return <HardHat className="w-5 h-5 text-amber-600" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-emerald-500" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-500" />;
      case 'Truck': return <Truck className="w-5 h-5 text-indigo-500" />;
      default: return <Building2 className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-16 py-8" id="nigeria-iso-hub">
      
      {/* SECTION 1: NIGERIA CITY HUBS (Lagos, Abuja, Port Harcourt, Kano, Ibadan) */}
      <div className="bg-white dark:bg-[#071330] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-black uppercase tracking-wider border border-emerald-300 dark:border-emerald-800">
              <MapPin className="w-3.5 h-3.5" />
              <span>National On-Site Audit Coverage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif tracking-tight">
              Accredited ISO Certification in Lagos, Abuja &amp; Major Nigerian Cities
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              With full operational headquarters in Lekki District Lagos and mobile lead auditor teams nationwide, IEMA Standards Limited delivers fast-track ISO audits, material testing, and compliance clearances across Nigeria.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shrink-0">
            {NIGERIA_CITY_HUBS.map(hub => (
              <button
                key={hub.city}
                onClick={() => setSelectedCity(hub.city)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCity === hub.city
                    ? 'bg-[#DC2626] text-white shadow-md'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800'
                }`}
              >
                {hub.city}
              </button>
            ))}
          </div>
        </div>

        {/* Selected City Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                <span>{currentCityData.state}</span>
                <span>•</span>
                <span>Audit Turnaround: {currentCityData.turnaroundTime}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-serif">
                {currentCityData.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentCityData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 dark:bg-[#0A192F] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-500" />
                  <span>Key Industries Served</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {currentCityData.keyIndustries.map((ind, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-[#0A192F] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Most Requested Standards</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {currentCityData.popularStandards.map((std, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span className="font-semibold">{std}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-200 dark:border-amber-900/40 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
              <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Regional Operational Point: </span>
                <span>{currentCityData.officeOrHub}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0A192F] text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-[11px] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Fast-Track Regional Quote</span>
              </div>
              <h4 className="text-lg font-black text-white">
                Book An Audit in {currentCityData.city}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Receive an official, itemized audit man-day quotation and scheduling proposal within 24 hours.
              </p>
            </div>

            <div className="space-y-3 text-xs text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>EGAC Accredited (ISO/IEC 17021-1 CAB 12203)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>IAF MLA Mark for Global &amp; NIPEX Recognition</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Hidden Fees — Clear Man-Day Rates</span>
              </div>
            </div>

            <div className="pt-2 space-y-2.5">
              <a
                href="https://crmops.iemacert.com/request-quote.php"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#DC2626] hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow flex items-center justify-center gap-2"
              >
                <span>Request {currentCityData.city} Audit Proposal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="tel:+2348134831027"
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-2.5 px-4 rounded-xl text-xs transition-all border border-slate-700 flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Dispatch: +234 813 483 1027</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: INDUSTRY SPECIFIC HUBS (Group B) */}
      <div className="bg-slate-50 dark:bg-[#0A192F] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-md space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-black uppercase tracking-wider border border-amber-300 dark:border-amber-800">
            <span>Group B • Industry Vertical Focus</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif tracking-tight">
            Tailored ISO Audits &amp; Inspection for Nigerian Industries
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Targeted management system standards and regulatory approvals aligned with Nigeria's core economic sectors.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {INDUSTRY_VERTICALS.map(ind => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustry(ind.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all border ${
                selectedIndustry === ind.id
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent shadow-lg scale-105'
                  : 'bg-white dark:bg-[#071330] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-amber-500'
              }`}
            >
              {getIndustryIcon(ind.iconName)}
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Industry Content */}
        <div className="bg-white dark:bg-[#071330] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Sector Spotlight: {currentIndustryData.name}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-serif">
                {currentIndustryData.headline}
              </h3>
            </div>
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3.5 py-1.5 rounded-full shrink-0">
              Audit Timeline: <span className="text-emerald-600 dark:text-emerald-400 font-black">{currentIndustryData.typicalTimeline}</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {currentIndustryData.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-4 bg-slate-50 dark:bg-[#0A192F] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-500" />
                <span>Primary Standards</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {currentIndustryData.keyStandards.map((std, i) => (
                  <li key={i} className="font-semibold text-slate-800 dark:text-slate-200 flex items-start gap-1.5">
                    <span className="text-amber-500 mt-0.5">•</span>
                    <span>{std}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-[#0A192F] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-rose-500" />
                <span>Regulatory Benchmarks</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {currentIndustryData.mandatoryRegulations.map((reg, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-rose-500 mt-0.5">✓</span>
                    <span>{reg}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-[#0A192F] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>Commercial ROI</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {currentIndustryData.benefits.map((ben, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-500 mt-0.5">★</span>
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: ACCREDITED VS NON-ACCREDITED COMPARISON */}
      <div className="bg-slate-50 dark:bg-[#071330] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8" id="accreditation-trust">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-xs font-black uppercase tracking-wider border border-rose-300 dark:border-rose-800">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Buyer Protection Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif tracking-tight">
            Accredited vs Non-Accredited ISO Certificates
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Why tender boards, NIPEX, NNPC, and international clients reject unaccredited certificates.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse bg-white dark:bg-[#0A192F] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/80">
                <th className="p-4 font-black text-slate-900 dark:text-white uppercase tracking-wider w-1/4">Evaluation Criterion</th>
                <th className="p-4 font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-wider w-3/8 bg-emerald-500/10 border-x border-emerald-500/20">
                  Accredited Body (IEMA Standards CAB 12203)
                </th>
                <th className="p-4 font-black text-rose-700 dark:text-rose-400 uppercase tracking-wider w-3/8 bg-rose-500/10">
                  Unaccredited / "Paper" Certificate
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {ACCREDITED_VS_UNACCREDITED.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-bold text-slate-900 dark:text-white align-top">{row.feature}</td>
                  <td className="p-4 text-slate-700 dark:text-slate-200 bg-emerald-500/5 border-x border-emerald-500/20 align-top">
                    <div className="flex items-start gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{row.accredited}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 bg-rose-500/5 align-top">
                    <div className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold shrink-0">✕</span>
                      <span>{row.unaccredited}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 5: 50 READY-TO-RANK KEYWORDS EXPLORER */}
      <div className="bg-white dark:bg-[#071330] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
              Comprehensive Content &amp; Service Index
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-serif">
              50 Ready-to-Rank ISO &amp; Inspection Directories
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Browse our complete library of certified standards, regional hub services, and technical compliance offerings.
            </p>
          </div>

          {/* Search & Category Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={keywordSearch}
                onChange={(e) => setKeywordSearch(e.target.value)}
                placeholder="Search 50 topics..."
                className="pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-amber-500 w-full sm:w-48"
              />
            </div>

            <div className="flex flex-wrap gap-1">
              {['All', 'Group A', 'Group B', 'Group C', 'Group D'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setKeywordCategoryFilter(cat)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    keywordCategoryFilter === cat
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Keyword Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-h-[460px] overflow-y-auto pr-1">
          {filteredKeywords.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (item.focusStandard) {
                  onNavigate('certifications');
                } else if (item.category.includes('Industry')) {
                  onNavigate('testing-inspection');
                } else {
                  onNavigate('contact');
                }
              }}
              className="p-3.5 bg-slate-50 dark:bg-[#0A192F] hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-800 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">{item.category.split(' - ')[1] || item.category}</span>
                  <span className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">{item.intent}</span>
                </div>
                <div className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {item.h1}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-tight">
                  {item.metaDescription}
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                <span className="font-mono">{item.keyword}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 6: PEOPLE ALSO ASK & RICH FAQ SCHEMA */}
      <div className="bg-white dark:bg-[#071330] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8" id="faq-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 text-xs font-black uppercase tracking-wider border border-purple-300 dark:border-purple-800">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Google "People Also Ask" Knowledge Base</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif tracking-tight">
              Frequently Asked Questions (ISO Nigeria)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Direct answers to the most common queries regarding costs, audit stages, NIPEX requirements, and accreditation validity.
            </p>
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={faqSearchQuery}
              onChange={(e) => setFaqSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-amber-500 w-full"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0A192F] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <span className="font-serif">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-amber-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-3 border-t border-slate-200/60 dark:border-slate-800/60">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-900/40 text-emerald-900 dark:text-emerald-200 font-semibold text-xs leading-relaxed">
                      <span className="font-bold uppercase tracking-wider text-[10px] text-emerald-700 dark:text-emerald-400 block mb-1">Quick Answer:</span>
                      {faq.shortAnswer}
                    </div>
                    <p className="leading-relaxed">{faq.detailedAnswer}</p>
                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800/60">
                      <span>Category: <strong className="text-slate-700 dark:text-slate-300">{faq.category}</strong></span>
                      <span className="font-mono text-[10px]">Target: {faq.targetKeyword}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
