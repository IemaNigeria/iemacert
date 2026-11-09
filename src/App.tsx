import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { TestingInspectionPage } from './pages/TestingInspectionPage';
import { InspectionPage } from './pages/InspectionPage';
import { ComplianceServicesPage } from './pages/ComplianceServicesPage';
import { EnvironmentalPage } from './pages/EnvironmentalPage';
import { AccreditationPage } from './pages/AccreditationPage';
import { TrainingPage } from './pages/TrainingPage';
import { BlogPage } from './pages/BlogPage';
import { OurTeamPage } from './pages/OurTeamPage';
import { OurPartnersPage } from './pages/OurPartnersPage';
import { OurApproachPage } from './pages/OurApproachPage';
import { GetQuotePage } from './pages/GetQuotePage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { VerifyCertificatePage } from './pages/VerifyCertificatePage';
import { IsoCertificationDetailPage } from './pages/IsoCertificationDetailPage';
import { EcoMarkPage } from './pages/EcoMarkPage';
import { PciDssPage } from './pages/PciDssPage';
import { Gone410Page } from './pages/Gone410Page';
import { resolveLocation, getUrlForPage } from './utils/routes';
import { FloatingWhatsAppWidget } from './components/FloatingWhatsAppWidget';
import { ExitIntentModal } from './components/ExitIntentModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { trackPageView } from './utils/analytics';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [navParams, setNavParams] = useState<Record<string, string>>({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync real URL path and legacy hash changes
  useEffect(() => {
    const handleUrlChange = () => {
      const { pathname, hash } = window.location;
      const resolved = resolveLocation(pathname, hash);

      if (resolved.redirectTo) {
        // Perform 301 redirect in browser history without reload
        window.history.replaceState(null, '', resolved.redirectTo);
        const reResolved = resolveLocation(resolved.redirectTo, '');
        setCurrentPage(reResolved.page || 'home');
        setNavParams(reResolved.params);
      } else {
        setCurrentPage(resolved.page || 'home');
        setNavParams(resolved.params);
      }
      trackPageView(resolved.page || 'home', resolved.redirectTo || pathname);
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const handleNavigate = (page: string, params?: Record<string, string>) => {
    setCurrentPage(page);
    setNavParams(params || {});

    // Compute canonical real URL path instead of fragment hash
    const targetUrl = getUrlForPage(page, params);
    window.history.pushState(null, '', targetUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    trackPageView(page, targetUrl);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 flex flex-col font-sans antialiased selection:bg-amber-500 selection:text-slate-950 transition-colors duration-200">
      {/* Top Header Navigation */}
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page View Container */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'team' && <OurTeamPage onNavigate={handleNavigate} />}
        {currentPage === 'partners' && <OurPartnersPage onNavigate={handleNavigate} />}
        {currentPage === 'approach' && <OurApproachPage onNavigate={handleNavigate} />}
        {currentPage === 'certifications' && (
          <CertificationsPage 
            onNavigate={handleNavigate} 
            selectedStandardId={navParams.standard}
          />
        )}
        {currentPage === 'iso-detail' && (
          <IsoCertificationDetailPage 
            onNavigate={handleNavigate} 
            standardId={navParams.standard}
            slug={navParams.slug}
          />
        )}
        {currentPage === 'environmental' && (
          <EnvironmentalPage 
            onNavigate={handleNavigate} 
            initialTab={navParams.tab}
          />
        )}
        {currentPage === 'compliance' && (
          <ComplianceServicesPage 
            onNavigate={handleNavigate} 
            initialTab={navParams.tab}
          />
        )}
        {currentPage === 'accreditation' && (
          <AccreditationPage 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'ecomark' && (
          <EcoMarkPage 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'pci-dss' && (
          <PciDssPage 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'training' && (
          <TrainingPage 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'blog' && (
          <BlogPage 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'testing-inspection' && (
          <TestingInspectionPage 
            onNavigate={handleNavigate} 
            initialTab={navParams.tab}
          />
        )}
        {currentPage === 'inspection' && (
          <InspectionPage 
            onNavigate={handleNavigate} 
            initialService={navParams.service}
          />
        )}
        {currentPage === 'quote' && <GetQuotePage onNavigate={handleNavigate} />}
        {currentPage === 'verify' && <VerifyCertificatePage onNavigate={handleNavigate} />}
        {currentPage === 'resources' && <ResourcesPage />}
        {(currentPage === 'projects' || currentPage === 'case-studies') && <ProjectsPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
        {currentPage === 'gone410' && <Gone410Page onNavigate={handleNavigate} removedPath={navParams.removedPath} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Interactive Conversion & Support Widgets */}
      <FloatingWhatsAppWidget currentPage={currentPage} />
      <ExitIntentModal onNavigate={handleNavigate} />
      <QuickSearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onNavigate={handleNavigate} 
      />
    </div>
  );
}
