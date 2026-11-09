import React, { useState, useEffect } from 'react';
import { Leaf, Award, FileCheck2, ShieldCheck, Check, ArrowRight, Building2, Scale, MapPin, Factory, AlertCircle, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface EnvironmentalPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  initialTab?: string;
}

export const EnvironmentalPage: React.FC<EnvironmentalPageProps> = ({ onNavigate, initialTab = 'eia' }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  return (
    <div className="space-y-12 pb-16 bg-slate-50 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 transition-colors duration-200 min-h-screen">
      
      {/* SEO Head */}
      <SeoHead
        title="Environmental Audits & EIA Studies | IEMA Standards"
        description="Statutory Environmental Impact Assessments (EIA), Environmental Audits (EAR), LASEPA, OGEPA, NESREA filings, and ISO 14001 EMS consultancy across Nigeria."
        canonicalPath="environmental"
        keywords={[
          'environmental consultancy nigeria',
          'environmental impact assessment eia nigeria',
          'environmental audit report ear lagos',
          'lasepa environmental compliance',
          'ogepa permits ogun state',
          'nesrea environmental audit',
          'federal ministry of environment accredited consultant'
        ]}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'Environmental Consultancy & EIA', isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header Banner */}
      <section className="bg-[#070F2B] text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1600" 
            alt="Environmental Protection & EIA Studies" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold border border-emerald-800">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span>Environmental Impact Assessment & Regulatory Consultancy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            Environmental Consultancy & Permitting
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            IEMA Standards Limited is an approved environmental consultancy providing statutory Environmental Impact Assessments (EIA), Environmental Audits (EAR), LASEPA, OGEPA, NESREA regulatory filings, and ISO 14001 certification services.
          </p>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center border-b border-slate-200 dark:border-slate-800 pb-4 gap-2 flex-wrap">
          <button
            onClick={() => setActiveTab('eia')}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-2 ${
              activeTab === 'eia' ? 'bg-[#DC2626] text-white shadow-md' : 'bg-white dark:bg-[#0E2A47] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#12365B] border border-slate-200 dark:border-slate-700'
            }`}
          >
            <Leaf className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            <span>Environmental Impact Assessment (EIA)</span>
          </button>

          <button
            onClick={() => setActiveTab('audit')}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-2 ${
              activeTab === 'audit' ? 'bg-[#DC2626] text-white shadow-md' : 'bg-white dark:bg-[#0E2A47] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#12365B] border border-slate-200 dark:border-slate-700'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            <span>Environmental Audit Services</span>
          </button>

          <button
            onClick={() => setActiveTab('lasepa')}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-2 ${
              activeTab === 'lasepa' ? 'bg-[#DC2626] text-white shadow-md' : 'bg-white dark:bg-[#0E2A47] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#12365B] border border-slate-200 dark:border-slate-700'
            }`}
          >
            <MapPin className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            <span>LASEPA Permits (Lagos)</span>
          </button>

          <button
            onClick={() => setActiveTab('ogepa')}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-2 ${
              activeTab === 'ogepa' ? 'bg-[#DC2626] text-white shadow-md' : 'bg-white dark:bg-[#0E2A47] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#12365B] border border-slate-200 dark:border-slate-700'
            }`}
          >
            <Factory className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            <span>OGEPA Consultancy (Ogun)</span>
          </button>

          <button
            onClick={() => setActiveTab('nesrea')}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-2 ${
              activeTab === 'nesrea' ? 'bg-[#DC2626] text-white shadow-md' : 'bg-white dark:bg-[#0E2A47] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#12365B] border border-slate-200 dark:border-slate-700'
            }`}
          >
            <Scale className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            <span>NESREA Federal Regulations</span>
          </button>

          <button
            onClick={() => setActiveTab('carbon')}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-2 ${
              activeTab === 'carbon' ? 'bg-[#DC2626] text-white shadow-md' : 'bg-white dark:bg-[#0E2A47] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#12365B] border border-slate-200 dark:border-slate-700'
            }`}
          >
            <Award className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            <span>Carbon Footprint & ESG</span>
          </button>
        </div>

        {/* Dynamic Tab Content */}
        <div className="pt-8">
          
          {/* EIA TAB */}
          {activeTab === 'eia' && (
            <div className="bg-white dark:bg-[#0E2A47] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-8 animate-fadeIn text-slate-900 dark:text-white transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-widest bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                    Statutory Development Permitting
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">Environmental Impact Assessment (EIA) Studies</h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Our accredited environmental scientists conduct comprehensive EIA studies, baseline air and water quality sampling, biodiversity monitoring, and stakeholder consultation reports required for Federal Ministry of Environment (FMEnv) approval and project execution.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300 pt-2">
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Baseline Air & Water Sampling
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Social & Community Impact Studies
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> FMEnv Public Panel Review Filings
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Environmental Management Plan (EMP)
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                    <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" alt="Environmental Impact Assessment" className="h-80 w-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              {/* EIA Workflow Steps */}
              <div className="border-t border-slate-200 dark:border-slate-700 pt-6 space-y-4">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">EIA Approval Workflow & FMEnv Panel Review</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-50 dark:bg-[#0A192F] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="text-amber-600 dark:text-amber-400 font-black text-sm">Phase 1: Registration & Scoping</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Formal project registration with FMEnv, site reconnaissance, terms of reference (TOR) approval, and seasonal baseline sampling.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-[#0A192F] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="text-emerald-600 dark:text-emerald-400 font-black text-sm">Phase 2: EIS Reporting & Modeling</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Draft Environmental Impact Statement (EIS) submission, air dispersion modeling, noise mapping, and community disclosure.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-[#0A192F] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="text-blue-600 dark:text-blue-400 font-black text-sm">Phase 3: Panel Review & Approval</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">FMEnv technical panel defense, public presentation, approval granting, and Final EIA Certificate issuance.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AUDIT TAB */}
          {activeTab === 'audit' && (
            <div className="bg-white dark:bg-[#0E2A47] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-8 animate-fadeIn text-slate-900 dark:text-white transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-widest bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                    Post-Operational Compliance
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">Environmental Audit Reports (EAR) & Monitoring</h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Existing commercial facilities, manufacturing plants, and oil installations are legally mandated to undergo triennial (3-year) Environmental Audits (EAR) and quarterly environmental monitoring to assess operational impact against national environmental standards.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300 pt-2">
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Triennial EAR Statutory Filings
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Stack Air Emission Measurements
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Effluent Waste Water Characterization
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Soil & Heavy Metal Contamination Testing
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                    <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800" alt="Environmental Audit" className="h-80 w-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* LASEPA TAB */}
          {activeTab === 'lasepa' && (
            <div className="bg-white dark:bg-[#0E2A47] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-8 animate-fadeIn text-slate-900 dark:text-white transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold text-blue-800 dark:text-blue-300 uppercase tracking-widest bg-blue-100 dark:bg-blue-950 px-3 py-1 rounded-full border border-blue-300 dark:border-blue-800">
                    Lagos State Environmental Protection Agency
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">LASEPA Permits & Compliance (Lagos State)</h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    We assist industries, hotels, real estate developers, and commercial entities operating in Lagos State in securing official LASEPA permits, noise pollution waivers, hazardous waste management approvals, and effluent treatment compliance.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300 pt-2">
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" /> LASEPA Environmental Permit
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Generator Noise Emission Clearances
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Wastewater Treatment Plant Audit
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Hazardous Chemical Storage Authorization
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                    <img src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800" alt="Lagos Environment" className="h-80 w-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* OGEPA TAB */}
          {activeTab === 'ogepa' && (
            <div className="bg-white dark:bg-[#0E2A47] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-8 animate-fadeIn text-slate-900 dark:text-white transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-widest bg-amber-100 dark:bg-amber-950 px-3 py-1 rounded-full border border-amber-300 dark:border-amber-800">
                    Ogun State Environmental Protection Agency
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">OGEPA Consultancy & Industrial Clearances</h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Providing dedicated environmental advisory and OGEPA regulatory clearances for manufacturing plants, industrial estates, processing factories, and warehouse hubs located across Sagamu, Agbara, Ota, and Abeokuta.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300 pt-2">
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-amber-600 dark:text-amber-400" /> OGEPA Facility Registration & Licensing
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-amber-600 dark:text-amber-400" /> Industrial Stack & Gaseous Emission Audit
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-amber-600 dark:text-amber-400" /> Solid & Toxic Waste Disposal Tracking
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-amber-600 dark:text-amber-400" /> Annual Environmental Audit Submissions
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Industrial Plant" className="h-80 w-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* NESREA TAB */}
          {activeTab === 'nesrea' && (
            <div className="bg-white dark:bg-[#0E2A47] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-8 animate-fadeIn text-slate-900 dark:text-white transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-widest bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                    National Environmental Standards & Regulations Enforcement Agency
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">NESREA Federal Regulations & Discharge Permits</h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Guiding organizations through the 35+ NESREA Sectoral Regulations (e.g., Sanitation & Waste Control, Base Metals, Chemicals & Pharmaceuticals, Telecommunications, Food & Beverage) to avoid seal-ups, legal penalties, and regulatory fines.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300 pt-2">
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> NESREA Environmental Permit Acquisition
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Extended Producer Responsibility (EPR) Plans
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Hazardous Waste Import/Export Clearances
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Industrial Sectoral Sanity Audits
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                    <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" alt="Environmental Enforcement" className="h-80 w-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CARBON TAB */}
          {activeTab === 'carbon' && (
            <div className="bg-white dark:bg-[#0E2A47] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-8 animate-fadeIn text-slate-900 dark:text-white transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-widest bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                    GHG Protocol & Net-Zero Verification
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">Carbon Footprint Accounting & Scope 1, 2, 3 ESG</h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Calculate greenhouse gas (GHG) emissions across direct facility operations (Scope 1), purchased energy (Scope 2), and supply chain logistics (Scope 3) in accordance with ISO 14064 GHG Accounting standards.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300 pt-2">
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> ISO 14064 GHG Audit & Verification
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Corporate ESG Disclosures & Sustainability Reports
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Carbon Offset Crediting & Decarbonization Roadmap
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A192F] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> ISO 50001 Energy Management Alignment
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                    <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800" alt="Wind Energy Carbon" className="h-80 w-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* EcoMark Sustainability Scheme Spotlight */}
        <div className="mt-8 p-6 sm:p-8 bg-gradient-to-r from-[#061826] via-[#0A2540] to-[#04121E] text-white rounded-2xl border-2 border-emerald-500/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>Pan-African Sustainability Scheme</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              The <span className="text-emerald-400">EcoMark</span> Certification Scheme
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Voluntary, 3rd-party verified eco-labelling aligned with ARSO and AfCFTA frameworks. Validating products and services across 16+ categories with ISO/IEC 17065 conformity audits.
            </p>
          </div>
          <button
            onClick={() => onNavigate('ecomark')}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-xs shadow hover:scale-105 transition-all flex items-center gap-2 border border-emerald-400/40 shrink-0"
          >
            <span>Learn About EcoMark</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* CTA Quote Request */}
        <div className="mt-8 p-8 bg-[#070F2B] text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-lg">
          <div>
            <h3 className="text-xl font-bold font-serif">Need Environmental Permitting or EIA Advisory?</h3>
            <p className="text-xs text-slate-300 mt-1">Speak directly with our senior environmental auditors and FMEnv certified specialists.</p>
          </div>
          <a
            href="https://crmops.iemacert.com/request-quote.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DC2626] hover:bg-red-700 text-white px-6 py-3 rounded-full font-extrabold text-xs flex items-center gap-2 shrink-0 transition-all shadow hover:scale-105"
          >
            <span>Request Proposal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </section>

    </div>
  );
};
