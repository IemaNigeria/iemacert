import React, { useState } from 'react';
import { 
  ChevronDown, Search, ArrowRight, Menu, X, 
  ShieldCheck, Phone, Award, FileCheck2, 
  Leaf, Scale, FlaskConical, Lock, ExternalLink,
  Sun, Moon, Users, Globe, Briefcase, FileText, CreditCard
} from 'lucide-react';
import { IEMALogo } from './Logos';
import { SocialMediaBar, WhatsAppIcon } from './SocialLinks';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t, isRTL } = useLanguage();

  const handleNavClick = (page: string, params?: Record<string, string>) => {
    onNavigate(page, params);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpandedSection(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#070E26]/95 backdrop-blur-md text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl transition-colors duration-200">
      
      {/* Top Banner Bar matching iemacert.com */}
      <div className="bg-[#0A192F] dark:bg-[#040817] text-xs py-2 px-4 border-b border-slate-700/60 dark:border-slate-800/80 text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-200 font-semibold">{t('topbar.accredited')}</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            {/* Social Media Links in Top Bar */}
            <SocialMediaBar variant="topbar" className="hidden sm:flex" />

            <div className="h-3.5 w-px bg-slate-700 hidden sm:block"></div>

            <a 
              href="tel:+2348134831027" 
              className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 text-[11px] font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+234 813 483 1027</span>
            </a>

            <a 
              href="https://wa.me/2348134831027?text=Hello%20IEMA%20Standards%20Head%20Office%2C%20I%20would%20like%20to%20make%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-[#25D366] hover:text-[#1EBE5D] text-[11px] font-semibold transition-colors"
              title="Chat with IEMA Head Office on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>{t('topbar.whatsapp')}</span>
            </a>

            <a
              href="https://certificates.iiema.org"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-amber-500/80 text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
              id="top-bar-verify-btn"
            >
              <Search className="w-3 h-3 text-amber-400" />
              <span>{t('topbar.verify')}</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>

            {/* Multilingual Selector (EN / FR / AR) */}
            <div className="relative">
              <button 
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 text-[11px] font-bold text-slate-300 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 px-2.5 py-1 rounded-full border border-slate-700 transition-colors shadow-sm"
                aria-label="Select Language"
                title="Select Regional Language"
              >
                <Globe className="w-3 h-3 text-amber-400" />
                <span>{language === 'EN' ? 'English' : language === 'FR' ? 'Français' : 'العربية'}</span>
                <ChevronDown className="w-2.5 h-2.5 opacity-70" />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 top-full mt-1.5 bg-[#0A1633] border border-slate-700 rounded-xl shadow-2xl p-1.5 z-50 text-[11px] w-36 space-y-1">
                  <button 
                    onClick={() => { setLanguage('EN'); setIsLangDropdownOpen(false); }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${language === 'EN' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'hover:bg-slate-800 text-slate-200'}`}
                  >
                    <span>🇬🇧 English</span>
                    {language === 'EN' && <span className="text-[10px] text-amber-400">✓</span>}
                  </button>
                  <button 
                    onClick={() => { setLanguage('FR'); setIsLangDropdownOpen(false); }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${language === 'FR' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'hover:bg-slate-800 text-slate-200'}`}
                  >
                    <span>🇫🇷 Français</span>
                    {language === 'FR' && <span className="text-[10px] text-amber-400">✓</span>}
                  </button>
                  <button 
                    onClick={() => { setLanguage('AR'); setIsLangDropdownOpen(false); }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${language === 'AR' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'hover:bg-slate-800 text-slate-200'}`}
                  >
                    <span>🇪🇬 العربية (AR)</span>
                    {language === 'AR' && <span className="text-[10px] text-amber-400">✓</span>}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Container with brand logo and exactly replicated navigation structure from iemacert.com */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between relative">
        
        {/* Company Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group shrink-0"
          id="brand-logo-btn"
        >
          <IEMALogo className="h-10 sm:h-12" />
        </button>

        {/* Desktop Navigation Menu — Exactly matching iemacert.com structure:
            1. Home
            2. About Us (Dropdown: Our Accreditation, Our Team, Our approach, Our partners)
            3. Our Services (Dropdown: Certification, Testing, Inspection, Consulting [AML, Due Diligence], Environmental Consultancy, Data Protection Compliance)
            4. Inspections
            5. Contact Us
            6. Get A Quote
            7. Our Projects
        */}
        <nav className="hidden lg:flex items-center space-x-1 font-semibold text-xs xl:text-sm">
          
          {/* 1. Home */}
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
              currentPage === 'home'
                ? 'text-[#0A192F] dark:text-white bg-slate-100 dark:bg-slate-800/90 font-bold border border-slate-300 dark:border-slate-700/80' 
                : 'text-slate-700 dark:text-slate-200 hover:text-[#0A192F] dark:hover:text-amber-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
            }`}
          >
            {t('nav.home')}
          </button>

          {/* 2. About Us (Dropdown) */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('aboutus')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-all whitespace-nowrap ${
                ['about', 'accreditation', 'team', 'approach', 'partners'].includes(currentPage) || activeDropdown === 'aboutus'
                  ? 'text-[#0A192F] dark:text-white bg-slate-100 dark:bg-slate-800/90 font-bold border border-slate-300 dark:border-slate-700/80' 
                  : 'text-slate-700 dark:text-slate-200 hover:text-[#0A192F] dark:hover:text-amber-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }`}
            >
              <span>{t('nav.about')}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 dark:text-amber-400" />
            </button>

            {activeDropdown === 'aboutus' && (
              <div className="absolute top-full left-0 w-64 bg-white dark:bg-[#0B1739]/95 backdrop-blur-md shadow-2xl rounded-xl p-2 border border-slate-200 dark:border-slate-700/80 z-50 animate-fadeIn mt-1 space-y-1 text-slate-800 dark:text-white">
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t('nav.aboutCompany')}</span>
                </button>
                <button
                  onClick={() => handleNavClick('accreditation')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Award className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{t('nav.accreditation')}</span>
                </button>
                <button
                  onClick={() => handleNavClick('team')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Users className="w-3.5 h-3.5 text-blue-500" />
                  <span>{t('nav.aboutTeam')}</span>
                </button>
                <button
                  onClick={() => handleNavClick('approach')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t('nav.aboutApproach')}</span>
                </button>
                <button
                  onClick={() => handleNavClick('partners')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-purple-500" />
                  <span>{t('nav.aboutPartners')}</span>
                </button>
              </div>
            )}
          </div>

          {/* 3. Our Services (Dropdown) */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('ourservices')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('certifications')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-all whitespace-nowrap ${
                ['certifications', 'environmental', 'compliance', 'testing-inspection', 'ecomark', 'pci-dss'].includes(currentPage) || activeDropdown === 'ourservices'
                  ? 'text-[#0A192F] dark:text-white bg-slate-100 dark:bg-slate-800/90 font-bold border border-slate-300 dark:border-slate-700/80' 
                  : 'text-slate-700 dark:text-slate-200 hover:text-[#0A192F] dark:hover:text-amber-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }`}
            >
              <span>{t('nav.certifications')}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 dark:text-amber-400" />
            </button>

            {activeDropdown === 'ourservices' && (
              <div className="absolute top-full left-0 w-80 bg-white dark:bg-[#0B1739]/95 backdrop-blur-md shadow-2xl rounded-xl p-2 border border-slate-200 dark:border-slate-700/80 z-50 animate-fadeIn mt-1 space-y-1 text-slate-800 dark:text-white">
                <button
                  onClick={() => handleNavClick('certifications')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t('nav.service.certification')}</span>
                </button>
                <button
                  onClick={() => handleNavClick('ecomark')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs font-semibold flex items-center gap-2 transition-colors"
                  id="nav-ecomark-desktop"
                >
                  <Leaf className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{t('nav.service.ecomark')}</span>
                </button>
                <button
                  onClick={() => handleNavClick('pci-dss')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs font-semibold flex items-center justify-between transition-colors group"
                  id="nav-pci-dss-desktop"
                >
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-3.5 h-3.5 text-amber-500 group-hover:text-amber-400" />
                    <span>{t('nav.service.pcidss')}</span>
                  </div>
                  <span className="text-[9px] bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 px-1.5 py-0.5 rounded font-mono font-bold">
                    v4.0.1
                  </span>
                </button>
                <button
                  onClick={() => handleNavClick('testing-inspection', { tab: 'materials-testing' })}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <FlaskConical className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{t('nav.service.testing')}</span>
                </button>
                <button
                  onClick={() => handleNavClick('inspection')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <FileCheck2 className="w-3.5 h-3.5 text-blue-500" />
                  <span>{t('nav.service.inspection')}</span>
                </button>
                <button
                  onClick={() => handleNavClick('approach')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t('nav.aboutApproach')}</span>
                </button>

                {/* Consulting Sub-Group */}
                <div className="pt-1 border-t border-slate-100 dark:border-slate-800">
                  <div className="px-3 py-1 text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                    {t('nav.service.consulting')}
                  </div>
                  <button
                    onClick={() => handleNavClick('compliance', { tab: 'aml' })}
                    className="w-full text-left px-3 py-1.5 pl-5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Scale className="w-3 h-3 text-amber-500" />
                    <span>{t('nav.service.aml')}</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('compliance', { tab: 'due-diligence' })}
                    className="w-full text-left px-3 py-1.5 pl-5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    <span>{t('nav.service.dueDiligence')}</span>
                  </button>
                </div>

                <div className="pt-1 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleNavClick('environmental')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs font-semibold flex items-center gap-2 transition-colors"
                  >
                    <Leaf className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{t('nav.service.environmental')}</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('compliance', { tab: 'ndpr' })}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 text-xs font-semibold flex items-center gap-2 transition-colors"
                  >
                    <Lock className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{t('nav.service.dataprotection')}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 4. Accreditation */}
          <button
            onClick={() => handleNavClick('accreditation')}
            className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
              currentPage === 'accreditation'
                ? 'text-[#0A192F] dark:text-white bg-slate-100 dark:bg-slate-800/90 font-bold border border-slate-300 dark:border-slate-700/80' 
                : 'text-slate-700 dark:text-slate-200 hover:text-[#0A192F] dark:hover:text-amber-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
            }`}
          >
            {t('nav.accreditation')}
          </button>

          {/* 5. Process / Approach */}
          <button
            onClick={() => handleNavClick('approach')}
            className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
              currentPage === 'approach'
                ? 'text-[#0A192F] dark:text-white bg-slate-100 dark:bg-slate-800/90 font-bold border border-slate-300 dark:border-slate-700/80' 
                : 'text-slate-700 dark:text-slate-200 hover:text-[#0A192F] dark:hover:text-amber-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
            }`}
          >
            {t('nav.aboutApproach')}
          </button>

          {/* 6. Training */}
          <button
            onClick={() => handleNavClick('training')}
            className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
              currentPage === 'training'
                ? 'text-[#0A192F] dark:text-white bg-slate-100 dark:bg-slate-800/90 font-bold border border-slate-300 dark:border-slate-700/80' 
                : 'text-slate-700 dark:text-slate-200 hover:text-[#0A192F] dark:hover:text-amber-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
            }`}
          >
            {t('nav.training')}
          </button>

          {/* 7. Blog */}
          <button
            onClick={() => handleNavClick('blog')}
            className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
              currentPage === 'blog'
                ? 'text-[#0A192F] dark:text-white bg-slate-100 dark:bg-slate-800/90 font-bold border border-slate-300 dark:border-slate-700/80' 
                : 'text-slate-700 dark:text-slate-200 hover:text-[#0A192F] dark:hover:text-amber-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
            }`}
          >
            {t('nav.blog')}
          </button>

          {/* 8. Contact Us */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
              currentPage === 'contact'
                ? 'text-[#0A192F] dark:text-white bg-slate-100 dark:bg-slate-800/90 font-bold border border-slate-300 dark:border-slate-700/80' 
                : 'text-slate-700 dark:text-slate-200 hover:text-[#0A192F] dark:hover:text-amber-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
            }`}
          >
            {t('nav.contact')}
          </button>

        </nav>

        {/* Action Controls: Search, Theme Switcher & Quote Button */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="px-2.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all flex items-center gap-2 text-xs font-semibold shadow-sm"
            title="Quick Search standards, services, blog (Ctrl+K)"
            aria-label="Quick Search"
          >
            <Search className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[11px] text-slate-500 dark:text-slate-400">{t('nav.search')}</span>
            <kbd className="hidden xl:inline text-[9px] bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-1.5 py-0.5 rounded font-mono">⌘K</kbd>
          </button>

          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-amber-300 transition-all flex items-center gap-1.5 text-xs font-bold shadow-sm"
            aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            title={`Current: ${theme === 'light' ? 'Light Mode' : 'Dark Mode'}`}
            id="theme-toggle-desktop"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-slate-700" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400 fill-amber-400" />
            )}
          </button>

          {/* Primary Call to Action Button: Red Pill Quote Button */}
          <a
            href="https://crmops.iemacert.com/request-quote.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-4 py-2 rounded-full text-xs font-bold shadow-md hover:scale-105 transition-all flex items-center gap-1.5 border border-red-500 whitespace-nowrap"
            id="nav-get-quote-btn"
          >
            <span>{t('nav.getQuote')}</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
        </div>

        {/* Mobile Top Controls: Search, Theme Toggle & Hamburger */}
        <div className="lg:hidden flex items-center gap-1.5">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-amber-500" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-slate-700" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400 fill-amber-400" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            id="mobile-menu-toggle"
            aria-label="Open Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu strictly mirroring iemacert.com navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0A1633] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn text-slate-900 dark:text-slate-100 shadow-xl max-h-[85vh] overflow-y-auto">
          
          {/* Mobile Language Switcher Bar */}
          <div className="bg-slate-100 dark:bg-slate-800/80 p-2.5 rounded-xl mb-3 border border-slate-200 dark:border-slate-700/80">
            <div className="text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-2 flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-amber-500" />
                <span>{t('nav.selectLanguage', 'Select Language')}</span>
              </div>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono font-semibold uppercase">
                {language === 'EN' ? 'English' : language === 'FR' ? 'Français' : 'العربية'}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={() => setLanguage('EN')}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center ${
                  language === 'EN'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => setLanguage('FR')}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center ${
                  language === 'FR'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                🇫🇷 Français
              </button>
              <button
                onClick={() => setLanguage('AR')}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center ${
                  language === 'AR'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                🇪🇬 العربية
              </button>
            </div>
          </div>

          {/* 1. Home */}
          <button
            onClick={() => handleNavClick('home')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {t('nav.home')}
          </button>

          {/* 2. About Us */}
          <div className="space-y-1">
            <button
              onClick={() => toggleMobileSection('aboutus')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
            >
              <span>{t('nav.about')}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'aboutus' ? 'rotate-180 text-amber-500' : ''}`} />
            </button>
            {mobileExpandedSection === 'aboutus' && (
              <div className="pl-4 space-y-1 border-l-2 border-amber-500/40 ml-3">
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {t('nav.aboutCompany')}
                </button>
                <button
                  onClick={() => handleNavClick('accreditation')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {t('nav.accreditation')}
                </button>
                <button
                  onClick={() => handleNavClick('team')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {t('nav.aboutTeam')}
                </button>
                <button
                  onClick={() => handleNavClick('approach')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {t('nav.aboutApproach')}
                </button>
                <button
                  onClick={() => handleNavClick('partners')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {t('nav.aboutPartners')}
                </button>
              </div>
            )}
          </div>

          {/* 3. Our Services */}
          <div className="space-y-1">
            <button
              onClick={() => toggleMobileSection('ourservices')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
            >
              <span>{t('nav.certifications')}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'ourservices' ? 'rotate-180 text-amber-500' : ''}`} />
            </button>
            {mobileExpandedSection === 'ourservices' && (
              <div className="pl-4 space-y-1 border-l-2 border-amber-500/40 ml-3">
                <button
                  onClick={() => handleNavClick('certifications')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
                >
                  {t('nav.service.certification')}
                </button>
                <button
                  onClick={() => handleNavClick('ecomark')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
                  id="nav-ecomark-mobile"
                >
                  {t('nav.service.ecomark')}
                </button>
                <button
                  onClick={() => handleNavClick('pci-dss')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold flex items-center justify-between"
                  id="nav-pci-dss-mobile"
                >
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-3.5 h-3.5 text-amber-500" />
                    <span>{t('nav.service.pcidss')}</span>
                  </div>
                  <span className="text-[9px] bg-amber-500/10 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded font-mono font-bold">
                    v4.0.1
                  </span>
                </button>
                <button
                  onClick={() => handleNavClick('testing-inspection', { tab: 'materials-testing' })}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
                >
                  {t('nav.service.testing')}
                </button>
                <button
                  onClick={() => handleNavClick('inspection')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
                >
                  {t('nav.service.inspection')}
                </button>
                <button
                  onClick={() => handleNavClick('approach')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
                >
                  {t('nav.aboutApproach')}
                </button>
                <div className="pt-1 pb-1">
                  <span className="px-3 text-[10px] font-bold text-amber-500 uppercase">{t('nav.service.consulting')}</span>
                  <button
                    onClick={() => handleNavClick('compliance', { tab: 'aml' })}
                    className="w-full text-left px-3 py-1.5 pl-4 rounded-lg text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    {t('nav.service.aml')}
                  </button>
                  <button
                    onClick={() => handleNavClick('compliance', { tab: 'due-diligence' })}
                    className="w-full text-left px-3 py-1.5 pl-4 rounded-lg text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    {t('nav.service.dueDiligence')}
                  </button>
                </div>
                <button
                  onClick={() => handleNavClick('environmental')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
                >
                  {t('nav.service.environmental')}
                </button>
                <button
                  onClick={() => handleNavClick('compliance', { tab: 'ndpr' })}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
                >
                  {t('nav.service.dataprotection')}
                </button>
              </div>
            )}
          </div>

          {/* 4. Inspections */}
          <button
            onClick={() => handleNavClick('inspection')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {t('nav.testing')}
          </button>

          {/* 5. Contact Us */}
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {t('nav.contact')}
          </button>

          {/* 6. Training */}
          <button
            onClick={() => handleNavClick('training')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {t('nav.training')}
          </button>

          {/* 7. Blog */}
          <button
            onClick={() => handleNavClick('blog')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold transition-all ${
              currentPage === 'blog'
                ? 'bg-slate-100 dark:bg-slate-800 text-[#0A192F] dark:text-amber-400'
                : 'text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {t('nav.blog')}
          </button>

          {/* Direct CTA in Mobile */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#DC2626] text-white py-3 rounded-xl text-center font-bold text-xs shadow flex items-center justify-center gap-2"
            >
              <span>{t('nav.getQuote')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      )}

    </header>
  );
};
