import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { WhatsAppIcon } from './SocialLinks';
import { trackConversionEvent } from '../utils/analytics';
import { useLanguage } from '../context/LanguageContext';

interface FloatingWhatsAppWidgetProps {
  currentPage?: string;
}

export const FloatingWhatsAppWidget: React.FC<FloatingWhatsAppWidgetProps> = ({
  currentPage = 'home'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnreadBadge, setHasUnreadBadge] = useState(true);
  const { language, t, isRTL } = useLanguage();

  // Pre-filled text tailored to page context and selected language
  const getContextMessage = (type: string) => {
    if (language === 'FR') {
      switch (type) {
        case 'quote':
          return `Bonjour IEMA Standards, je souhaite demander un devis de certification ISO accrédité pour notre organisation.`;
        case 'verify':
          return `Bonjour IEMA Standards, je souhaite vérifier l'authenticité d'un certificat ISO délivré.`;
        case 'auditor':
          return `Bonjour, j'aimerais échanger avec un auditeur principal concernant nos exigences de conformité.`;
        default:
          return `Bonjour IEMA Standards, je souhaite obtenir des informations concernant les certifications ISO.`;
      }
    }
    if (language === 'AR') {
      switch (type) {
        case 'quote':
          return `مرحباً إيما ستاندردز، أود طلب عرض سعر معتمد لشهادة الأيزو لمؤسستنا.`;
        case 'verify':
          return `مرحباً، أود التحقق من صحة وصلاحية شهادة أيزو صادرة من جهتكم.`;
        case 'auditor':
          return `مرحباً، أود استشارة أحد المدققين الرئيسيين بخصوص متطلبات التدقيق والمطابقة.`;
        default:
          return `مرحباً إيما ستاندردز، أود الاستفسار حول خدمات شهادات الأيزو والتفتيش الفني.`;
      }
    }
    switch (type) {
      case 'quote':
        return `Hello IEMA Standards Limited, I would like to request an accredited ISO certification quote for our organization.`;
      case 'verify':
        return `Hello IEMA Registry Desk, I would like to verify the validity of an issued ISO certificate.`;
      case 'auditor':
        return `Hello IEMA Technical Directorate, I need technical guidance on Stage 1 / Stage 2 ISO audit requirements.`;
      default:
        return `Hello IEMA Standards Head Office, I would like to make an inquiry regarding ISO certification and compliance in Nigeria.`;
    }
  };

  const handleOpenWhatsApp = (type: string = 'general') => {
    const text = getContextMessage(type);
    const whatsappUrl = `https://wa.me/2348134831027?text=${encodeURIComponent(text)}`;
    
    trackConversionEvent('whatsapp_click', {
      type,
      currentPage,
      destination: '+2348134831027'
    });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setHasUnreadBadge(false);
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasUnreadBadge(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expandable Quick WhatsApp Card */}
      {isOpen && (
        <div 
          className="mb-3 w-80 sm:w-96 bg-white dark:bg-[#0B1E38] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden animate-fadeIn"
          role="dialog"
          aria-label="WhatsApp Quick Chat"
        >
          {/* Card Header with IEMA Branding */}
          <div className="bg-[#0A192F] text-white p-4 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#0A192F] rounded-full"></span>
              </div>
              <div>
                <div className="font-bold text-sm flex items-center gap-1.5">
                  <span>IEMA WhatsApp Desk</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <p className="text-[11px] text-slate-300">Typically replies within minutes</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Message Suggestions */}
          <div className="p-4 space-y-3 text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-[#08152D]">
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Select an option below to connect directly with our accredited certification officers:
            </p>

            <div className="space-y-2">
              <button
                onClick={() => handleOpenWhatsApp('quote')}
                className="w-full text-left p-3 rounded-xl bg-white dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 transition-all flex items-center justify-between group shadow-sm"
              >
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    {t('wa.btnQuote')}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    {language === 'FR' ? 'Estimation immédiate pour ISO 9001, 14001, 45001' : language === 'AR' ? 'تقدير فوري لشهادات ISO 9001 و14001 و45001' : 'Get an instant estimate for ISO 9001, 14001, 45001, etc.'}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all" />
              </button>

              <button
                onClick={() => handleOpenWhatsApp('verify')}
                className="w-full text-left p-3 rounded-xl bg-white dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-700 hover:border-amber-500 hover:bg-amber-50/50 dark:hover:bg-amber-950/20 transition-all flex items-center justify-between group shadow-sm"
              >
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400">
                    {t('wa.btnVerify')}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    {language === 'FR' ? 'Vérification rapide pour conformité aux appels d’offres' : language === 'AR' ? 'التحقق السريع لمتطلبات التأهيل والمناقصات' : 'Fast lookup for tender submission verification'}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all" />
              </button>

              <button
                onClick={() => handleOpenWhatsApp('auditor')}
                className="w-full text-left p-3 rounded-xl bg-white dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all flex items-center justify-between group shadow-sm"
              >
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {t('wa.btnSpeak')}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    {language === 'FR' ? 'Consultation technique directe pour votre secteur' : language === 'AR' ? 'استشارة فنية متخصصة لقطاع عملك' : 'Direct technical consultation for your industry'}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <a
                href="tel:+2348134831027"
                onClick={() => trackConversionEvent('phone_call_click', { source: 'whatsapp_widget' })}
                className="flex items-center gap-1 hover:text-emerald-600 font-semibold"
              >
                <Phone className="w-3 h-3 text-emerald-500" />
                <span>Call +234 813 483 1027</span>
              </a>
              <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-mono">
                Lagos &amp; Abuja
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={toggleWidget}
        aria-label="Open WhatsApp Support Desk"
        className="relative group bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-white dark:border-slate-800 min-h-[52px] min-w-[52px]"
      >
        <WhatsAppIcon className="w-7 h-7 text-white fill-white" />

        {/* Pulse Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10"></span>

        {/* Unread Message Notification Dot */}
        {hasUnreadBadge && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 border-2 border-white dark:border-slate-900 rounded-full flex items-center justify-center text-[9px] font-black">
            1
          </span>
        )}

        {/* Floating Tooltip (Desktop) */}
        <span className="hidden md:group-hover:flex absolute right-full mr-3 whitespace-nowrap bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg font-bold items-center gap-1.5 pointer-events-none">
          <span>Need Help? Chat on WhatsApp</span>
        </span>
      </button>

    </div>
  );
};
