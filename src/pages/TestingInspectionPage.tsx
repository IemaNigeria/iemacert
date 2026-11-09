import React, { useState, useEffect } from 'react';
import { 
  FlaskConical, SearchCheck, ShieldCheck, CheckCircle2, 
  ArrowRight, Download, FileText, Check, Wrench, Cpu,
  Layers, HardHat, Award, Cog, PackageCheck, Building2,
  ListFilter, Shield, Microscope, ExternalLink, BookOpen,
  Sparkles, Clock, AlertTriangle, FileSpreadsheet, Send
} from 'lucide-react';
import { DETAILED_INSPECTION_MODULES } from '../data/mockData';
import { InspectionDetail } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { downloadIsoHandbookPdf } from '../utils/handbookDownloader';

// Local inspection & testing image assets
import materialsTestingImg from '../assets/images/regenerated_image_1787148800075.jpg';
import ndtServicesImg from '../assets/images/regenerated_image_1787153221960.jpg';
import pressureVesselsImg from '../assets/images/regenerated_image_1787153216295.jpg';
import liftingEquipmentImg from '../assets/images/regenerated_image_1787153224907.jpg';
import preShipmentFatImg from '../assets/images/regenerated_image_1787148796381.jpg';
import testingBannerImg from '../assets/images/regenerated_image_1787148797573.jpg';

interface TestingInspectionPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  initialTab?: string;
}

export const TestingInspectionPage: React.FC<TestingInspectionPageProps> = ({ 
  onNavigate, 
  initialTab = 'materials-testing' 
}) => {
  const [activeModuleId, setActiveModuleId] = useState<string>(initialTab);
  const [selectedSpecimenTest, setSelectedSpecimenTest] = useState<string>('mechanical');

  useEffect(() => {
    if (initialTab) {
      // Handle legacy tab ids if passed
      if (initialTab === 'testing' || initialTab === 'materials') setActiveModuleId('materials-testing');
      else if (initialTab === 'ndt') setActiveModuleId('ndt-services');
      else if (initialTab === 'inspection') setActiveModuleId('pressure-vessels-tanks');
      else if (initialTab === 'lifting') setActiveModuleId('lifting-equipment-cranes');
      else if (initialTab === 'fat') setActiveModuleId('pre-shipment-fat');
      else setActiveModuleId(initialTab);
    }
  }, [initialTab]);

  const activeModule: InspectionDetail = 
    DETAILED_INSPECTION_MODULES.find(m => m.id === activeModuleId) || 
    DETAILED_INSPECTION_MODULES[0];

  const getModuleImage = (id: string) => {
    switch (id) {
      case 'materials-testing':
        return materialsTestingImg;
      case 'ndt-services':
        return ndtServicesImg;
      case 'pressure-vessels-tanks':
        return pressureVesselsImg;
      case 'lifting-equipment-cranes':
        return liftingEquipmentImg;
      case 'pre-shipment-fat':
        return preShipmentFatImg;
      default:
        return ndtServicesImg;
    }
  };

  return (
    <div className="space-y-12 pb-16 bg-slate-50 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
      
      {/* Dynamic SEO Meta Tags for Testing & Inspection */}
      <SeoHead
        title="Industrial Testing & NDT Services | IEMA Standards"
        description="ISO/IEC 17025 accredited materials testing laboratory and inspection services in Nigeria. Mechanical testing, Charpy impact, OES spectrometry, and ASNT NDT."
        canonicalPath="testing-inspection"
        keywords={[
          'materials testing laboratory nigeria',
          'iso 17025 accredited testing lab',
          'tensile testing charpy impact test',
          'optical emission spectrometry lagos',
          'polymer and elastomer testing',
          'corrosion testing astm g48',
          'non destructive testing services lagos',
          'asnt level iii ndt inspection',
          'testing and inspection services in west africa'
        ]}
      />
      
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'Testing & Inspection Services', isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header Banner */}
      <section className="bg-[#070F2B] text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={testingBannerImg} 
            alt="Material Testing Laboratory & NDT" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold border border-emerald-800">
            <FlaskConical className="w-4 h-4 text-emerald-400" />
            <span>ISO/IEC 17025 Accredited Laboratory & ASNT Level III Inspection Body</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            Industrial Material Testing & Technical Inspection
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Independent destructive mechanical testing, chemical spectrometry, polymer characterization, ASNT Non-Destructive Testing (NDT), API vessel surveys, and statutory lifting load tests conforming to ISO/IEC 17025 and ILAC-MRA frameworks.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DC2626] hover:bg-red-700 text-white px-6 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg transition-colors"
            >
              <span>Submit Test Request Online</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => onNavigate('contact', { subject: 'Testing & Inspection Laboratory Inquiry' })}
              className="bg-slate-800/80 hover:bg-slate-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 border border-slate-700 transition-colors"
            >
              <span>Speak with Laboratory Specialist</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs">
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <div className="font-extrabold text-amber-400 text-lg">ISO/IEC 17025</div>
              <div className="text-slate-400">Accredited Laboratory</div>
            </div>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <div className="font-extrabold text-emerald-400 text-lg">1,000 kN UTM</div>
              <div className="text-slate-400">Tensile & Bend Capacity</div>
            </div>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <div className="font-extrabold text-blue-400 text-lg">ASNT & LEEA</div>
              <div className="text-slate-400">Certified Inspectors</div>
            </div>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <div className="font-extrabold text-purple-400 text-lg">24–48 Hours</div>
              <div className="text-slate-400">Test Report Turnaround</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Inspection & Testing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex justify-start sm:justify-center border-b border-slate-200 dark:border-slate-800 pb-4 gap-2 overflow-x-auto no-scrollbar">
          {DETAILED_INSPECTION_MODULES.map((mod) => {
            const isSelected = activeModule.id === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`px-4 py-3 rounded-xl font-extrabold text-xs transition-all shrink-0 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg'
                    : 'bg-white dark:bg-[#0B1E38] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700'
                }`}
              >
                {mod.id === 'materials-testing' && <FlaskConical className="w-4 h-4" />}
                {mod.id === 'ndt-services' && <Layers className="w-4 h-4" />}
                {mod.id === 'pressure-vessels-tanks' && <SearchCheck className="w-4 h-4" />}
                {mod.id === 'lifting-equipment-cranes' && <Wrench className="w-4 h-4" />}
                {mod.id === 'pre-shipment-fat' && <Cpu className="w-4 h-4" />}
                <span>{mod.title.split('(')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Module Detail Canvas */}
        <div className="space-y-8 animate-fadeIn">
          
          {/* Hero Banner for Active Module */}
          <div className="bg-white dark:bg-[#0B1E38] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl text-slate-900 dark:text-white transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest bg-amber-100 dark:bg-amber-500/10 px-3 py-1 rounded-full border border-amber-300 dark:border-amber-500/20">
                  {activeModule.tagline}
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif leading-tight">
                  {activeModule.title}
                </h2>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {activeModule.description}
                </p>

                {/* Key Quick Highlights */}
                <div className="pt-2 flex flex-wrap gap-2">
                  <div className="bg-slate-100 dark:bg-[#070F2B] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ISO/IEC 17025 & ILAC-MRA Accredited</span>
                  </div>
                  <div className="bg-slate-100 dark:bg-[#070F2B] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-blue-700 dark:text-blue-300 font-bold flex items-center gap-1.5">
                    <HardHat className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>ASTM / ASME / ISO / BS Compliant</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="https://crmops.iemacert.com/request-quote.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#DC2626] hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md transition-colors flex items-center gap-2"
                  >
                    <span>Request Laboratory Testing Quote</span>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>

                  <button
                    onClick={() => onNavigate('contact', { subject: `Technical inquiry for ${activeModule.title}` })}
                    className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-5 py-3 rounded-xl font-bold text-xs transition-colors border border-slate-300 dark:border-slate-700"
                  >
                    Speak with Technical Specialist
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 h-72 sm:h-80">
                  <img
                    src={getModuleImage(activeModule.id)}
                    alt={activeModule.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Technical Methodologies & Inspection Techniques */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-serif flex items-center gap-2">
                <Microscope className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span>Test Methodologies & Engineering Capabilities</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeModule.methodologies.map((method, idx) => (
                <div key={idx} className="bg-white dark:bg-[#0B1E38] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2.5 flex flex-col justify-between hover:border-amber-500/50 transition-colors shadow-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-amber-300 dark:border-amber-500/40">
                        {idx + 1}
                      </span>
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm leading-snug">{method.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-8">
                      {method.detail}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 pl-8">
                    <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">Typical Applications & Standards:</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">{method.applications}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Column Specifications Grid: Standards, Qualifications & Equipment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Standards Applied */}
            <div className="bg-white dark:bg-[#0B1E38] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                <FileText className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>International Codes & Standards</span>
              </div>
              <ul className="space-y-2">
                {activeModule.standardsApplied.map((std, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <Check className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>{std}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personnel Qualifications */}
            <div className="bg-white dark:bg-[#0B1E38] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Specialist Qualifications & Credentials</span>
              </div>
              <ul className="space-y-2">
                {activeModule.personnelQualifications.map((qual, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment Used */}
            <div className="bg-white dark:bg-[#0B1E38] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                <Cog className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Laboratory Equipment & Instrumentation</span>
              </div>
              <ul className="space-y-2">
                {activeModule.equipmentUsed.map((eq, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Deliverables & Industries Served */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Official Inspection Deliverables */}
            <div className="bg-white dark:bg-[#0B1E38] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                <PackageCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Official Test Deliverables & Certification Dossiers</span>
              </div>
              <ul className="space-y-2">
                {activeModule.deliverables.map((del, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sectors Served */}
            <div className="bg-white dark:bg-[#0B1E38] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold text-purple-700 dark:text-purple-400 uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Target Industries & Client Sectors</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {activeModule.industriesServed.map((ind, idx) => (
                  <span key={idx} className="text-xs bg-slate-100 dark:bg-[#070F2B] text-slate-800 dark:text-slate-300 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 font-medium">
                    {ind}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 leading-relaxed">
                All laboratory testing and technical inspections are executed under strict impartiality protocols conforming to ISO/IEC 17025 and ISO/IEC 17020 Type A inspection standards.
              </p>
            </div>

          </div>

        </div>

        {/* Dedicated Materials Testing & Handbook Feature Showcase */}
        <div className="bg-gradient-to-br from-[#070F2B] via-[#0B1E38] to-[#12365B] text-white p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold border border-amber-500/30">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Official Technical Publication 2025/2026</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-serif">
                IEMA Materials Testing & Technical Inspection Handbook
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Download the complete technical handbook covering mechanical tensile standards, Charpy cryogenic test preparation, chemical OES limits, corrosion test procedures (ASTM G48), polymer characterization, and turnaround time guarantees.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="text-amber-400 font-bold text-xs">Specimen Specs</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">Full sample cut sizes for ASTM & ISO mechanical tests</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="text-emerald-400 font-bold text-xs">Test Methods Matrix</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">Detailed ASTM, ASME, BS EN, and API procedure checklists</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="text-blue-400 font-bold text-xs">Fast Turnaround</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">24h Express and 48h Standard testing turnaround SLAs</div>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href="/pdf/Certificate-Handbook.pdf"
                  download="Certificate-Handbook.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    downloadIsoHandbookPdf();
                  }}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3.5 rounded-xl font-extrabold text-xs flex items-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer no-underline"
                >
                  <Download className="w-4 h-4 text-slate-950" />
                  <span>ISO certification handbook</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-gradient-to-b from-slate-900 to-[#070F2B] p-6 rounded-2xl border border-amber-500/40 shadow-2xl text-center space-y-4 max-w-xs w-full">
                <div className="w-16 h-20 mx-auto bg-amber-500/20 border border-amber-500/50 rounded-lg flex flex-col items-center justify-center text-amber-400">
                  <BookOpen className="w-8 h-8 mb-1" />
                  <span className="text-[9px] font-mono font-black">PDF • 5.4MB</span>
                </div>
                <div>
                  <h4 className="font-serif font-black text-white text-sm">Testing Handbook 2025/2026</h4>
                  <p className="text-[11px] text-slate-400 mt-1">ISO/IEC 17025 Accredited Laboratory & NDT Services</p>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 space-y-1 text-left">
                  <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-400" /> ASTM A370 & E23 Tensile/Impact</div>
                  <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-400" /> Spark OES & PMI Spectroscopy</div>
                  <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-400" /> ASTM G48 Pitting Corrosion</div>
                  <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-400" /> ASNT Level III NDT Procedures</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

