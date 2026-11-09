import React from 'react';
import { MapPin, Phone, Mail, Globe, ShieldCheck } from 'lucide-react';
import { IEMALogo } from './Logos';
import { SocialMediaBar } from './SocialLinks';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate?: (page: string, params?: Record<string, string>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, setLanguage, t, isRTL } = useLanguage();

  return (
    <footer className="bg-[#050B1E] text-slate-300 pt-12 pb-8 border-t-4 border-[#DC2626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
          
          {/* Left Column: Pure Logo, Short Intro & Language Switcher */}
          <div className="space-y-4">
            <div className="inline-flex items-center">
              <IEMALogo forceDark={true} className="h-11 sm:h-12" />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              {t('footer.aboutText')}
            </p>

            {/* Quick Regional Language Switcher in Footer */}
            <div className="pt-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>{t('nav.selectLanguage', 'Select Language')}</span>
              </div>
              <div className="inline-flex items-center gap-1 bg-slate-900/90 border border-slate-700/80 p-1 rounded-xl">
                <button
                  onClick={() => setLanguage('EN')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    language === 'EN'
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  🇬🇧 English
                </button>
                <button
                  onClick={() => setLanguage('FR')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    language === 'FR'
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  🇫🇷 Français
                </button>
                <button
                  onClick={() => setLanguage('AR')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    language === 'AR'
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  🇪🇬 العربية
                </button>
              </div>
            </div>
          </div>

          {/* Middle Column: Quick Services Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.servicesTitle')}
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => onNavigate?.('certifications')} 
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  {t('nav.service.certification')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('ecomark')} 
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors text-left flex items-center gap-1.5"
                >
                  <span>{t('nav.service.ecomark')}</span>
                  <span className="text-[9px] bg-emerald-900/80 text-emerald-300 px-1.5 py-0.5 rounded font-mono">ARSO/AfCFTA</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('pci-dss')} 
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors text-left flex items-center gap-1.5"
                >
                  <span>{t('nav.service.pcidss')}</span>
                  <span className="text-[9px] bg-amber-900/80 text-amber-300 px-1.5 py-0.5 rounded font-mono">QSA/RoC</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('testing-inspection')} 
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  {t('nav.service.testing')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('inspection')} 
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  {t('nav.service.inspection')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('environmental')} 
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  {t('nav.service.environmental')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('compliance')} 
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  {t('nav.service.aml')} &amp; {t('nav.service.dueDiligence')}
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column: Get in Touch & Social Network */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.contactTitle')}
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{t('contact.headOffice')}</div>
                  <div className="text-slate-400">{t('contact.headOfficeAddr')}</div>
                  <div className="text-[11px] text-slate-400 mt-1 pt-1 border-t border-slate-800">
                    <span className="font-semibold text-slate-300">{t('contact.abujaOffice')}:</span> {t('contact.abujaOfficeAddr')}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="flex flex-wrap gap-x-2">
                  <a href="tel:+2348134831027" className="hover:text-emerald-400 transition-colors font-semibold">+234 813 483 1027</a>
                  <span>/</span>
                  <a href="tel:+2348069640868" className="hover:text-emerald-400 transition-colors">+234 806 964 0868</a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@iemacert.com" className="hover:text-emerald-400 transition-colors">info@iemacert.com</a>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Social Network
              </div>
              <SocialMediaBar variant="footer" />
            </div>
          </div>

        </div>

        {/* Impartiality & Governance Statement */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-400 leading-relaxed flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>{t('footer.impartiality')}</span>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">IEMA STANDARDS LIMITED</span>. {t('footer.rights')}
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={() => onNavigate?.('accreditation')} className="hover:text-white">{t('nav.accreditation')}</button>
            <span>&bull;</span>
            <button onClick={() => onNavigate?.('ecomark')} className="hover:text-emerald-400">{t('nav.service.ecomark')}</button>
            <span>&bull;</span>
            <button onClick={() => onNavigate?.('pci-dss')} className="hover:text-amber-400">PCI DSS</button>
            <span>&bull;</span>
            <button onClick={() => onNavigate?.('blog')} className="hover:text-amber-400">{t('nav.blog')}</button>
            <span>&bull;</span>
            <button onClick={() => onNavigate?.('contact')} className="hover:text-white">{t('nav.contact')}</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
