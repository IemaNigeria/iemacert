import React, { useState } from 'react';
import { 
  Building2, Users, Globe, ShieldCheck, Award, 
  Send, CheckCircle2, ArrowRight, ArrowLeft, Calculator, 
  FileText, Clock, HelpCircle, ExternalLink, Loader2, Mail 
} from 'lucide-react';
import { ISO_STANDARDS, SERVICE_CATEGORIES, COMPANY_INFO } from '../data/mockData';
import { WhatsAppIcon } from './SocialLinks';
import { trackConversionEvent } from '../utils/analytics';
import { useLanguage } from '../context/LanguageContext';

export const QuoteCalculatorWidget: React.FC = () => {
  const { language, t, isRTL } = useLanguage();
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState('iso-certification');
  const [selectedStandards, setSelectedStandards] = useState<string[]>(['ISO 9001:2015']);
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [employeeCount, setEmployeeCount] = useState('11-50');
  const [locationsCount, setLocationsCount] = useState('1');
  const [industrySector, setIndustrySector] = useState('Oil & Gas / Energy');
  const [targetTimeline, setTargetTimeline] = useState('Standard (4-6 weeks)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleStandard = (code: string) => {
    if (selectedStandards.includes(code)) {
      if (selectedStandards.length > 1) {
        setSelectedStandards(selectedStandards.filter(s => s !== code));
      }
    } else {
      setSelectedStandards([...selectedStandards, code]);
    }
  };

  const calculateEstimateRange = () => {
    let base = 1200;
    if (selectedStandards.length > 1) base += (selectedStandards.length - 1) * 750;
    
    if (employeeCount === '51-200') base *= 1.4;
    else if (employeeCount === '201-500') base *= 1.9;
    else if (employeeCount === '500+') base *= 2.5;

    if (locationsCount === '2-5') base *= 1.3;
    else if (locationsCount === '6+') base *= 1.7;

    const min = Math.round(base);
    const max = Math.round(base * 1.25);
    return { min, max };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const targetEmail = COMPANY_INFO.email || 'info@iemacert.com';
    const emailSubject = `[Quote Request] ${selectedStandards.join(', ')} - ${companyName} (${contactName})`;
    
    try {
      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          companyName,
          contactName,
          email,
          phone,
          serviceType,
          selectedStandards: selectedStandards.join(', '),
          employeeCount,
          locationsCount,
          industrySector,
          targetTimeline,
          estimatedRangeUSD: `$${estimate.min} - $${estimate.max}`,
          _subject: emailSubject,
          _template: 'table',
          _captcha: 'false'
        })
      });
      trackConversionEvent('quote_form_submit', {
        company: companyName,
        service: selectedStandards.join(', '),
        estimateUSD: `${estimate.min}-${estimate.max}`
      });
    } catch {
      // Graceful fallback
      trackConversionEvent('quote_form_submit', {
        company: companyName,
        service: selectedStandards.join(', '),
        fallback: true
      });
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const estimate = calculateEstimateRange();

  return (
    <div className="bg-[#0E2A47] rounded-2xl shadow-2xl border border-slate-700/80 overflow-hidden text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Title Header */}
      <div className="bg-[#070F2B] text-white p-6 sm:p-8 border-b border-slate-800">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              {t('quote.title')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-serif">
              {t('quote.selectStandards')} &amp; {t('quote.estimatedFee')}
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              {t('quote.subtitle')}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-slate-800/90 text-amber-300 px-4 py-2 rounded-lg text-xs font-bold border border-slate-700 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{t('topbar.accredited')}</span>
            </div>
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 shadow"
            >
              <span>CRM Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Step Progress Pills */}
        <div className="mt-6 grid grid-cols-3 gap-2">
          <div className={`h-2 rounded-full transition-all ${step >= 1 ? 'bg-amber-400' : 'bg-slate-800'}`} />
          <div className={`h-2 rounded-full transition-all ${step >= 2 ? 'bg-amber-400' : 'bg-slate-800'}`} />
          <div className={`h-2 rounded-full transition-all ${step >= 3 ? 'bg-amber-400' : 'bg-slate-800'}`} />
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          
          {/* STEP 1: Service & Standards Selection */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-700/80 pb-4">
                <h3 className="text-lg font-bold text-white font-serif">
                  {language === 'FR' ? 'Étape 1 sur 3 : Sélection des services et normes requises' : language === 'AR' ? 'الخطوة 1 من 3: تحديد الخدمات والمعايير المطلوبة' : 'Step 1 of 3: Select Required Services & Standards'}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  {language === 'FR' ? 'Indiquez les certifications ou services techniques recherchés.' : language === 'AR' ? 'حدد البرامج أو الشهادات التي ترغب بالحصول عليها لمنشأتك.' : 'Choose whether you need Management System Certification or Laboratory Testing/Inspection.'}
                </p>
              </div>

              {/* Service Type Selector */}
              <div>
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-2">
                  {language === 'FR' ? 'Catégorie de prestation' : language === 'AR' ? 'نوع الخدمة' : 'Service Category'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { 
                      id: 'iso-certification', 
                      label: language === 'FR' ? 'Certification ISO' : language === 'AR' ? 'شهادات أنظمة الأيزو' : 'ISO System Certification', 
                      icon: Award, 
                      desc: 'ISO 9001, 14001, 45001, 27001' 
                    },
                    { 
                      id: 'material-testing', 
                      label: language === 'FR' ? 'Essais & CND' : language === 'AR' ? 'اختبارات المواد وفحص NDT' : 'Material Testing & NDT', 
                      icon: Calculator, 
                      desc: language === 'FR' ? 'Essais mécaniques, NDT, polymères' : language === 'AR' ? 'فحوصات ميكانيكية وشاملة' : 'Polymer, NDT, Tensile analysis' 
                    },
                    { 
                      id: 'industrial-inspection', 
                      label: language === 'FR' ? 'Inspection tierce partie' : language === 'AR' ? 'التفتيش الفني كطرف ثالث' : 'Industrial Third-Party Inspection', 
                      icon: ShieldCheck, 
                      desc: language === 'FR' ? 'FAT, équipements de levage, cuves' : language === 'AR' ? 'معدات الرفع، الصمامات، أوعية الضغط' : 'FAT, Lifting equipment, Valves' 
                    },
                  ].map((s) => {
                    const IconComp = s.icon;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setServiceType(s.id)}
                        className={`p-4 rounded-xl text-left border-2 transition-all ${
                          serviceType === s.id 
                            ? 'border-amber-400 bg-[#0A192F] text-white shadow-lg' 
                            : 'border-slate-700/80 hover:border-slate-600 bg-[#0B1E38] text-slate-300'
                        }`}
                      >
                        <IconComp className={`w-5 h-5 mb-2 ${serviceType === s.id ? 'text-amber-400' : 'text-slate-400'}`} />
                        <div className="font-bold text-white text-sm">{s.label}</div>
                        <div className="text-[11px] text-slate-400 mt-1">{s.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Standard Checkbox Selection */}
              {serviceType === 'iso-certification' && (
                <div>
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-2">
                    {t('quote.selectStandards')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ISO_STANDARDS.map((std) => {
                      const isSelected = selectedStandards.includes(std.code);
                      return (
                        <div
                          key={std.id}
                          onClick={() => toggleStandard(std.code)}
                          className={`p-3.5 rounded-xl border cursor-pointer flex items-start gap-3 transition-all ${
                            isSelected 
                              ? 'border-amber-400 bg-[#0A192F] text-white font-semibold shadow-md' 
                              : 'border-slate-700/80 hover:border-slate-600 bg-[#0B1E38] text-slate-200'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => {}}
                            className="mt-1 rounded text-amber-500 focus:ring-amber-400 bg-slate-900 border-slate-700"
                          />
                          <div>
                            <div className="text-sm font-extrabold text-white">{std.code}</div>
                            <div className="text-xs text-slate-300">{std.name}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-[#DC2626] hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-md transition-colors"
                >
                  <span>{language === 'FR' ? 'Continuer vers l’étape 2' : language === 'AR' ? 'المتابعة لبيانات المنشأة' : 'Continue to Company Details'}</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Company Size & Scope */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-700/80 pb-4">
                <h3 className="text-lg font-bold text-white font-serif">
                  {language === 'FR' ? 'Étape 2 sur 3 : Taille de l’organisation et périmètre' : language === 'AR' ? 'الخطوة 2 من 3: حجم المنشأة والمواقع التشغيلية' : 'Step 2 of 3: Organization Scale & Operational Scope'}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  {language === 'FR' ? 'La durée et le coût de l’audit sont calculés selon le nombre d’employés et de sites (règles IAF MD 5).' : language === 'AR' ? 'يتم احتساب أيام التدقيق وفقاً لإجمالي عدد الموظفين وعدد الفروع التشغيلية (قواعد IAF MD 5).' : 'Audit duration and cost are calculated based on workforce size and site locations.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-1">
                    {language === 'FR' ? 'Secteur d’activité' : language === 'AR' ? 'مجال النشاط والقطاع' : 'Industry Sector'}
                  </label>
                  <select
                    value={industrySector}
                    onChange={(e) => setIndustrySector(e.target.value)}
                    className="w-full p-3 bg-[#0A192F] border border-slate-700 rounded-lg text-sm font-medium text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  >
                    <option className="bg-slate-900 text-white">Oil & Gas / Offshore Energy</option>
                    <option className="bg-slate-900 text-white">Manufacturing & Industrial Production</option>
                    <option className="bg-slate-900 text-white">Information Technology & FinTech</option>
                    <option className="bg-slate-900 text-white">Construction & Infrastructure Engineering</option>
                    <option className="bg-slate-900 text-white">Healthcare & Medical Device Manufacturing</option>
                    <option className="bg-slate-900 text-white">Food Processing & Agriculture</option>
                    <option className="bg-slate-900 text-white">Logistics & Maritime Freight</option>
                    <option className="bg-slate-900 text-white">Government & Public Sector</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-1">
                    {t('quote.empCount')}
                  </label>
                  <select
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(e.target.value)}
                    className="w-full p-3 bg-[#0A192F] border border-slate-700 rounded-lg text-sm font-medium text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  >
                    <option className="bg-slate-900 text-white">1-10 Employees</option>
                    <option className="bg-slate-900 text-white">11-50 Employees</option>
                    <option className="bg-slate-900 text-white">51-200 Employees</option>
                    <option className="bg-slate-900 text-white">201-500 Employees</option>
                    <option className="bg-slate-900 text-white">500+ Employees</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-1">
                    {t('quote.locations')}
                  </label>
                  <select
                    value={locationsCount}
                    onChange={(e) => setLocationsCount(e.target.value)}
                    className="w-full p-3 bg-[#0A192F] border border-slate-700 rounded-lg text-sm font-medium text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  >
                    <option value="1" className="bg-slate-900 text-white">1 Central Office / Facility</option>
                    <option value="2-5" className="bg-slate-900 text-white">2 to 5 Sites</option>
                    <option value="6+" className="bg-slate-900 text-white">6+ Multi-site Locations</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-1">
                    {language === 'FR' ? 'Délai d’audit souhaité' : language === 'AR' ? 'الجدول الزمني المستهدف' : 'Target Certification Timeline'}
                  </label>
                  <select
                    value={targetTimeline}
                    onChange={(e) => setTargetTimeline(e.target.value)}
                    className="w-full p-3 bg-[#0A192F] border border-slate-700 rounded-lg text-sm font-medium text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  >
                    <option className="bg-slate-900 text-white">Standard (4-6 weeks)</option>
                    <option className="bg-slate-900 text-white">Expedited (2-3 weeks)</option>
                    <option className="bg-slate-900 text-white">Future Planning (2-3 months)</option>
                  </select>
                </div>
              </div>

              {/* Estimate Preview Callout */}
              <div className="bg-[#0A192F] text-white p-5 rounded-xl flex items-center justify-between flex-wrap gap-4 border border-slate-700">
                <div>
                  <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">{t('quote.estimatedFee')}</div>
                  <div className="text-2xl font-black text-white mt-0.5 font-serif">
                    ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()} USD
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {language === 'FR' ? 'Comprend les audits d’étape 1 et d’étape 2 accrédités EGAC' : language === 'AR' ? 'يشمل أتعاب تدقيق المرحلة الأولى والثانية المعتمدة من إيجاك' : 'Includes Stage 1 & Stage 2 EGAC Accredited Audit Fees'}
                  </div>
                </div>
                <div className="text-right text-xs text-slate-300">
                  <div className="font-bold text-amber-400">{t('quote.selectStandards')}:</div>
                  <div className="font-mono text-xs text-amber-200">{selectedStandards.join(', ')}</div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors border border-slate-700"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t('common.back')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-[#DC2626] hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-md transition-colors"
                >
                  <span>{language === 'FR' ? 'Étape finale : Coordonnées' : language === 'AR' ? 'الخطوة الأخيرة: بيانات التواصل' : 'Final Step: Contact Information'}</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact & Submission */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-700/80 pb-4">
                <h3 className="text-lg font-bold text-white font-serif">
                  {language === 'FR' ? 'Étape 3 sur 3 : Coordonnées du demandeur et livraison de l’offre' : language === 'AR' ? 'الخطوة 3 من 3: بيانات مقدم الطلب واستلام العرض الرسمي' : 'Step 3 of 3: Applicant Contact & Official Proposal Delivery'}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  {language === 'FR' ? 'À quelle adresse devons-nous transmettre la proposition formelle ?' : language === 'AR' ? 'إلى أي بريد ترغب باستلام عرض الأسعار الرسمي المفصل؟' : 'Where should we send your formal written proposal and audit breakdown?'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-1">
                    {t('quote.companyName')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Chevron Engineering Ltd"
                    className="w-full p-3 bg-[#0A192F] border border-slate-700 rounded-lg text-sm text-white focus:ring-2 focus:ring-amber-400 focus:outline-none placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-1">
                    {t('quote.yourName')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Eng. David Okon"
                    className="w-full p-3 bg-[#0A192F] border border-slate-700 rounded-lg text-sm text-white focus:ring-2 focus:ring-amber-400 focus:outline-none placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-1">
                    {t('quote.email')} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. d.okon@company.com"
                    className="w-full p-3 bg-[#0A192F] border border-slate-700 rounded-lg text-sm text-white focus:ring-2 focus:ring-amber-400 focus:outline-none placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-1">
                    {t('quote.phone')} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +234 813 483 1027"
                    className="w-full p-3 bg-[#0A192F] border border-slate-700 rounded-lg text-sm text-white focus:ring-2 focus:ring-amber-400 focus:outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="p-4 bg-emerald-950/50 border border-emerald-800 rounded-xl flex items-start gap-3 text-xs text-emerald-200">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">
                    {language === 'FR' ? 'Engagement de confidentialité et d’impartialité' : language === 'AR' ? 'التزام السرية والحيادية المطلقة' : 'Privacy & Impartiality Commitment'}
                  </div>
                  <div>
                    {language === 'FR' 
                      ? 'Vos données restent strictement confidentielles selon ISO 17021. Une offre officielle au format PDF vous sera envoyée sous 24h ouvrées.'
                      : language === 'AR'
                      ? 'تخضع بياناتكم لحماية وسرية تامة طبقاً لمتطلبات ISO 17021، وسيتم إصدار عرض السعر الرسمي خلال 24 ساعة عمل.'
                      : 'Your company details will remain strictly confidential under our ISO 17021 impartiality guidelines. An official quote PDF will be issued within 24 business hours.'}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-5 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors border border-slate-700"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t('common.back')}</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#DC2626] hover:bg-red-700 disabled:bg-slate-600 text-white px-8 py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
                  id="submit-quote-request-btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                      <span>{language === 'FR' ? 'Transmission en cours...' : language === 'AR' ? 'جاري إرسال الطلب...' : 'Transmitting Application...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t('quote.submitBtn')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

        </form>
      ) : (
        /* Submission Success Message */
        <div className="p-8 sm:p-12 text-center space-y-4 animate-fadeIn">
          <div className="w-16 h-16 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-black text-white font-serif">
            {language === 'FR' ? 'Demande de devis transmise avec succès !' : language === 'AR' ? 'تم استلام طلب عرض الأسعار بنجاح!' : 'Quote Application Submitted to Head Office!'}
          </h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            {t('quote.successMsg')}
          </p>
          <div className="p-4 bg-[#0A192F] rounded-xl max-w-md mx-auto text-xs text-slate-300 border border-slate-700 space-y-1.5 text-left">
            <div className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
              {language === 'FR' ? 'Récapitulatif de la demande :' : language === 'AR' ? 'ملخص الطلب المقدم:' : 'Submission Summary:'}
            </div>
            <div><strong>{t('quote.companyName')}:</strong> {companyName} ({employeeCount}, {locationsCount})</div>
            <div><strong>{t('quote.selectStandards')}:</strong> {selectedStandards.join(', ')}</div>
            <div><strong>{t('quote.yourName')}:</strong> {contactName} ({email} | {phone})</div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/2348134831027?text=${encodeURIComponent(`*IEMA STANDARDS - FORMAL QUOTE REQUEST*\n*Company:* ${companyName}\n*Contact:* ${contactName} (${phone})\n*Email:* ${email}\n*Standards:* ${selectedStandards.join(', ')}\n*Workforce:* ${employeeCount} employees\n*Industry:* ${industrySector}\n\n_Please expedite our formal ISO fee quotation._`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 text-xs font-black px-5 py-2.5 rounded-lg inline-flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4 text-slate-950" />
              <span>{t('wa.btnQuote')} (WhatsApp)</span>
            </a>
            <button
              onClick={() => { setSubmitted(false); setStep(1); }}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-5 py-2.5 rounded-lg text-xs font-bold transition-colors border border-slate-700"
            >
              {language === 'FR' ? 'Soumettre une autre demande' : language === 'AR' ? 'تقديم طلب جديد' : 'Submit Another Application'}
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
