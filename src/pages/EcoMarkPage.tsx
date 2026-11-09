import React, { useState } from 'react';
import { 
  Leaf, ShieldCheck, Award, CheckCircle2, Globe, 
  ArrowRight, FileCheck2, Scale, Building2, 
  Layers, Search, Check, FileText, ChevronRight, 
  ExternalLink, Sparkles, AlertTriangle, ShieldAlert,
  BarChart3, Users, HelpCircle,
  RefreshCw, Factory, Truck, Trash2, 
  Zap, HeartPulse, Building, DollarSign, Package
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { EcoMarkLogo } from '../components/Logos';

interface EcoMarkPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

// 8 Product Categories from Official EcoMark Scheme
const PRODUCT_CATEGORIES = [
  {
    id: 'agricultural-food',
    title: 'Agricultural & Food Products',
    icon: Leaf,
    description: 'Fresh agricultural produce, processed food, organic goods, beverages, and bio-based commodities.',
    criteria: ['Chemical & pesticide residue control', 'Sustainable soil & water stewardship', 'Eco-friendly packaging & traceability', 'Post-harvest waste reduction']
  },
  {
    id: 'consumer-household',
    title: 'Consumer Goods & Household Products',
    icon: Package,
    description: 'Durable and non-durable everyday consumer goods, cleaning supplies, and domestic utility items.',
    criteria: ['Non-toxic ingredient formulation', 'Recyclability & biodegradable content', 'Low lifecycle energy footprint', 'Eco-label consumer instructions']
  },
  {
    id: 'construction-materials',
    title: 'Construction & Building Materials',
    icon: Building2,
    description: 'Eco-cement, sustainable timber, green tiles, recycled aggregates, insulation, and paints/coatings.',
    criteria: ['Embodied carbon minimization', 'Volatile Organic Compound (VOC) limits', 'Sustainable raw material sourcing', 'Durability & structural circularity']
  },
  {
    id: 'packaging-containers',
    title: 'Packaging Materials & Containers',
    icon: Package,
    description: 'Biodegradable plastics, corrugated cartons, glass, aluminum, and reusable shipping containers.',
    criteria: ['Post-consumer recycled (PCR) content', 'Compostability & recyclability metrics', 'Zero hazardous plasticizers/PFAS', 'Lightweighting optimization']
  },
  {
    id: 'textiles-apparel',
    title: 'Textiles, Leather & Apparel',
    icon: Layers,
    description: 'Eco-cotton, sustainable fabrics, industrial uniforms, footwear, and finished leather goods.',
    criteria: ['Wastewater effluent dye treatment', 'Banned azo dye & heavy metal elimination', 'Water conservation in tanning/dyeing', 'Ethical and fair labor standards']
  },
  {
    id: 'electronics-electrical',
    title: 'Electronics & Electrical Equipment',
    icon: Zap,
    description: 'Energy-efficient appliances, solar components, lighting fixtures, and industrial electronic equipment.',
    criteria: ['RoHS hazardous substance compliance', 'High energy-efficiency ratings', 'Design for repairability & disassembly', 'E-waste takeback compatibility']
  },
  {
    id: 'chemicals-cleaning',
    title: 'Chemicals & Cleaning Products',
    icon: Sparkles,
    description: 'Industrial degreasers, sanitizers, agricultural bio-inputs, and green chemical formulations.',
    criteria: ['Biodegradability in aquatic systems', 'Zero phosphate & alkylphenol ethoxylates', 'Safe SDS documentation & handling', 'Reduced packaging toxicity']
  },
  {
    id: 'personal-care-cosmetics',
    title: 'Personal Care & Cosmetic Products',
    icon: HeartPulse,
    description: 'Natural skincare, hair care, organic soaps, lotions, and dermatological formulations.',
    criteria: ['Ethically sourced botanical extracts', 'Microplastic-free formulation', 'Cruelty-free & dermatological safety', 'Recyclable packaging containers']
  }
];

// 8 Service Sectors from Official EcoMark Scheme
const SERVICE_SECTORS = [
  {
    id: 'manufacturing-industrial',
    title: 'Manufacturing & Industrial Operations',
    icon: Factory,
    description: 'Light, medium, and heavy industrial facilities aiming for decarbonization and clean production.',
    criteria: ['Air emissions & stack monitoring', 'Industrial effluent discharge treatment', 'Energy baseline & SEU management', 'ISO 14001 EMS alignment']
  },
  {
    id: 'waste-recycling',
    title: 'Waste Management & Recycling Services',
    icon: Trash2,
    description: 'Material recovery facilities, e-waste recyclers, composters, and hazardous waste handlers.',
    criteria: ['Diversion from landfill rates', 'Hazardous waste containment controls', 'Chain-of-custody tracking for recyclates', 'Worker safety & PPE protocols']
  },
  {
    id: 'hospitality-tourism',
    title: 'Hospitality, Tourism & Event Management',
    icon: Building,
    description: 'Eco-resorts, hotels, conference centres, tour operators, and green event coordinators.',
    criteria: ['Single-use plastic elimination', 'Water & energy saving infrastructure', 'Local & organic food sourcing', 'Community engagement & conservation']
  },
  {
    id: 'healthcare-pharma',
    title: 'Healthcare & Pharmaceutical Services',
    icon: HeartPulse,
    description: 'Hospitals, medical labs, pharmaceutical manufacturing, and diagnostic centers.',
    criteria: ['Biomedical & sharps waste disposal', 'Pharmaceutical effluent neutralization', 'Energy efficiency in clinical cleanrooms', 'Safe chemical management']
  },
  {
    id: 'logistics-distribution',
    title: 'Logistics, Transportation & Distribution',
    icon: Truck,
    description: 'Freight forwarders, fleet operators, cold chains, bonded warehousing, and last-mile delivery.',
    criteria: ['Fleet emission reduction & route optimization', 'Green warehousing & solar storage', 'Eco-packaging handling & pallet reuse', 'Idling reduction policies']
  },
  {
    id: 'energy-production',
    title: 'Energy Production & Distribution',
    icon: Zap,
    description: 'Renewable energy developers, mini-grid operators, gas-to-power systems, and energy utilities.',
    criteria: ['Lifecycle carbon intensity monitoring', 'Habitat & biodiversity preservation', 'Spill prevention & leak detection', 'Grid efficiency & waste heat recovery']
  },
  {
    id: 'construction-facility',
    title: 'Construction & Facility Management',
    icon: Building2,
    description: 'General contractors, property managers, MEP engineers, and commercial building operators.',
    criteria: ['Construction & demolition waste sorting', 'Green building operations & maintenance', 'Water fixture efficiency audits', 'Indoor air quality (IAQ) controls']
  },
  {
    id: 'financial-investment',
    title: 'Financial Services & Investment Advisory',
    icon: DollarSign,
    description: 'Banks, microfinance institutions, private equity firms, and ESG investment funds.',
    criteria: ['ESG risk screening for loan portfolios', 'Green finance product structuring', 'Paperless & carbon-neutral operations', 'Sustainability disclosure reporting']
  }
];

// 5-Stage Certification Process
const CERTIFICATION_STAGES = [
  {
    number: '01',
    title: 'Application & Preliminary Review',
    subtitle: 'Scope Definition & Gap Assessment',
    timeline: 'Weeks 1 – 2',
    description: 'The process begins with the submission of a formal application to IEMA Standards. Upon receipt, IEMA Standards conducts a preliminary eligibility review to confirm that products or services fall within the defined scope. A Preliminary Gap Assessment is conducted (via document review or brief advisory visit) to identify current conformance. Outcome: A formal Audit Plan detailing scope, timeline, resource requirements, and applicable assessment criteria.',
    deliverables: ['Eligibility Confirmation', 'Preliminary Gap Assessment Report', 'Comprehensive Formal Audit Plan']
  },
  {
    number: '02',
    title: 'Document Review & Evidence Evaluation',
    subtitle: 'Comprehensive Desk-Based Verification',
    timeline: 'Weeks 2 – 4',
    description: 'IEMA Standards\' assigned audit team conducts a thorough desk-based review of all documentary evidence: environmental policies, management system procedures, product specifications, Environmental Impact Assessments (EIA/EAR), legal registers, supplier records, and test reports. The objective is to ensure documented practices are consistent with EcoMark benchmarks and substantiated by verifiable data.',
    deliverables: ['Document Review Findings Report', 'Evidence Deficiencies & Clarification Requests', 'On-Site Audit Preparedness Clearance']
  },
  {
    number: '03',
    title: 'On-Site Audit & Physical Inspection',
    subtitle: 'Direct Operational & Laboratory Verification',
    timeline: 'Weeks 4 – 6',
    description: 'Qualified and authorized auditors conduct a rigorous on-site audit at the applicant’s facility or service delivery location. This includes direct inspection of production lines, equipment, waste management practices, energy records, environmental controls, and staff interviews. For product certification, physical samples are drawn for laboratory testing against environmental and quality parameters.',
    deliverables: ['Physical Facility Inspection', 'Personnel Interviews & Process Observations', 'Product Sampling & Lab Testing Reports', 'Formal Stage 3 Audit Report']
  },
  {
    number: '04',
    title: 'Technical Review & Certification Decision',
    subtitle: 'Independent Panel Evaluation & Award',
    timeline: 'Weeks 6 – 7',
    description: 'The completed Audit Report is submitted to IEMA Standards\' independent Technical Review Panel. Operating separately from the audit team to guarantee impartiality, the Panel reviews all findings against EcoMark criteria. Upon closure of any minor corrective actions, the Panel issues a Certification Decision authorising issuance of the EcoMark Certificate.',
    deliverables: ['Independent Technical Review', 'Corrective Action Verification', 'Official EcoMark Certificate & Public Register Listing']
  },
  {
    number: '05',
    title: 'Surveillance Audits & Certificate Renewal',
    subtitle: 'Continuous Performance & 3-Year Re-Certification',
    timeline: 'Ongoing (Annual / Bi-Annual)',
    description: 'EcoMark certification is an ongoing commitment to environmental performance. Certified organisations undergo periodic surveillance audits (annually or bi-annually based on risk profile) to verify continued conformance. At the end of the 3-year certification cycle, a full re-certification audit is conducted to renew the credential.',
    deliverables: ['Annual/Bi-Annual Surveillance Audits', 'Scope Variation & Operational Change Reviews', '3-Year Re-Certification Renewal']
  }
];

export const EcoMarkPage: React.FC<EcoMarkPageProps> = ({ onNavigate }) => {
  const [scopeTab, setScopeTab] = useState<'products' | 'services'>('products');
  const [activeStage, setActiveStage] = useState<number>(0);
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>('agricultural-food');
  const [selectedServiceSector, setSelectedServiceSector] = useState<string>('manufacturing-industrial');

  return (
    <div className="space-y-12 pb-20 transition-colors duration-200">
      
      {/* Dynamic SEO Meta Tags */}
      <SeoHead
        title="EcoMark Sustainability Scheme | IEMA Standards"
        description="EcoMark voluntary eco-labelling and sustainability certification aligned with ARSO and AfCFTA standards under ISO/IEC 17065. Apply for EcoMark certification."
        canonicalPath="ecomark"
        keywords={[
          'ecomark certification scheme',
          'eco-labelling nigeria',
          'sustainability certification africa',
          'ARSO eco mark standards',
          'AfCFTA sustainability certification',
          'ISO/IEC 17065 conformity assessment',
          'green product certification nigeria',
          'IEMA Standards EcoMark'
        ]}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'EcoMark Sustainability Certification', isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* 1. HERO SECTION: Official Scheme Branding */}
      <section className="bg-gradient-to-br from-[#061826] via-[#0A2540] to-[#04121E] text-white py-16 sm:py-24 border-b border-emerald-900/40 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          {/* Top Category Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 bg-emerald-900/80 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold border border-emerald-500/40 shadow-sm backdrop-blur-md">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Sustainability Certification Scheme</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-slate-800/80 text-slate-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-700 backdrop-blur-md">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>ARSO &amp; AfCFTA Trade Framework Aligned</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-slate-800/80 text-slate-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-700 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>ISO/IEC 17065 Conformity Assessment Body</span>
            </div>
          </div>

          {/* Scheme Title & Header */}
          <div className="space-y-3 max-w-4xl">
            <div className="text-xs font-extrabold tracking-widest text-emerald-400 uppercase">
              IEMA STANDARDS LIMITED &bull; Certification | Inspection | Testing
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">EcoMark</span> Certification Scheme
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
              Voluntary, third-party verified eco-labelling and sustainability certification validating products and services across Nigeria and Africa.
            </p>
          </div>

          {/* Quick Summary Lead */}
          <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
            At its core, <strong>EcoMark is more than a label</strong> — it is an auditable mark of verified conformity, assuring consumers, regulators, procurement authorities, and AfCFTA trade partners that an organisation’s products or services meet rigorous environmental and social benchmarks.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2 border border-red-500"
              id="ecomark-hero-apply-btn"
            >
              <span>Apply for EcoMark Certification</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://crmops.iemacert.com/request-quote.php?note=EcoMark%20Pre-Audit%20Gap%20Assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2 border border-emerald-400/40"
              id="ecomark-hero-gap-btn"
            >
              <FileCheck2 className="w-4 h-4 text-emerald-200" />
              <span>Request Pre-Audit Gap Assessment</span>
            </a>

            <button
              onClick={() => {
                const el = document.getElementById('process-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all border border-slate-700 flex items-center gap-2"
            >
              <span>View 5-Stage Audit Roadmap</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">ISO/IEC 17065</div>
              <div className="text-[11px] text-slate-300 uppercase font-semibold">Standard Alignment</div>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">16+ Sectors</div>
              <div className="text-[11px] text-slate-300 uppercase font-semibold">Products &amp; Services Scope</div>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-teal-400 font-mono">AfCFTA &bull; ARSO</div>
              <div className="text-[11px] text-slate-300 uppercase font-semibold">Pan-African Recognition</div>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">3-Year Cycle</div>
              <div className="text-[11px] text-slate-300 uppercase font-semibold">Surveillance &amp; Renewal</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHAT IS ECOMARK & COMPARISON: Verified Label vs Self-Declared Claims */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Detailed Conceptual Foundation */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0E2A47] p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                <Leaf className="w-3.5 h-3.5 text-emerald-500" />
                <span>Foundational Standard Overview</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif leading-snug">
                What is the EcoMark Certification Scheme?
              </h2>

              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                EcoMark is a <strong>voluntary, third-party verified eco-labelling and sustainability certification scheme</strong> established to recognise and validate products and services that demonstrably meet defined environmental, social, and quality performance standards.
              </p>

              <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                In a global marketplace increasingly shaped by sustainability imperatives, supply chain transparency expectations, and regulatory pressure on environmental disclosure, EcoMark provides organisations with a <strong>credible, structured, and internationally aligned mechanism</strong> to substantiate their environmental commitments.
              </p>

              <div className="bg-slate-50 dark:bg-[#071329] p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-700 dark:text-emerald-400 text-xs uppercase tracking-wider">
                  <Globe className="w-4 h-4" />
                  <span>The African Market Context</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  The scheme is designed with the African market context at its centre. It is aligned with the technical frameworks of <strong>ARSO (the African Organisation for Standardisation)</strong>, the environmental and trade sustainability objectives of the <strong>African Continental Free Trade Area (AfCFTA)</strong>, and internationally recognised environmental management principles. By earning the EcoMark, organisations position themselves as credible leaders in regional and global value chains.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center gap-4">
              <EcoMarkLogo className="w-14 h-14" showText={true} />
            </div>
          </div>

          {/* Right Column: Contrast Matrix (Self-Declared vs EcoMark) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#0B1A2C] text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Compliance Benchmark
                </span>
                <span className="text-[10px] bg-red-500/20 text-red-300 px-2.5 py-0.5 rounded-full border border-red-500/30">
                  Anti-Greenwashing
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                Eliminating Unsubstantiated Green Claims
              </h3>

              <div className="space-y-3 pt-2">
                {/* Flawed: Self-Declared */}
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 space-y-1.5">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>Self-Declared Green Claims (Unverified)</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Susceptible to greenwashing accusations, consumer skepticism, regulatory sanctions, and exclusion from international procurement frameworks.
                  </p>
                </div>

                {/* Superior: EcoMark Certification */}
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-600/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs uppercase">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>EcoMark 3rd-Party Verification (Audited)</span>
                  </div>
                  <p className="text-[11px] text-slate-200 leading-relaxed">
                    Issued only following thorough, evidence-based conformity assessments conducted by accredited auditors under ISO/IEC 17065, establishing legally defensible market trust.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs space-y-2">
              <div className="font-bold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Audited Integrity Guarantee</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Certification is governed by an independent Technical Review Panel with mandatory separation from the audit team to guarantee total impartiality.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. WHY ECOMARK MATTERS — 7 Strategic Value Dimensions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
            Business Impact &amp; ROI
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-serif">
            Why EcoMark Matters
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
            Anchored in four broad imperatives: <strong>market credibility</strong>, <strong>regulatory alignment</strong>, <strong>competitive differentiation</strong>, and <strong>long-term operational sustainability</strong>.
          </p>
        </div>

        {/* 7 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Consumer & Market Trust */}
          <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-serif">
                1. Consumer &amp; Market Trust
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Independent, third-party certification removes ambiguity and builds confidence among increasingly environmentally conscious consumers and institutional buyers. Signals that claims are verified, not aspirational.
              </p>
            </div>
            <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 pt-2 border-t border-slate-100 dark:border-slate-800">
              <Check className="w-3 h-3" />
              <span>Verifiable Eco-Labelling</span>
            </div>
          </div>

          {/* 2. Regulatory Compliance */}
          <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-serif">
                2. Regulatory Compliance
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                As environmental legislation tightens across Nigeria (NESREA, FMEnv, LASEPA) and Africa — including carbon disclosure frameworks — EcoMark provides a structured basis for proactive compliance.
              </p>
            </div>
            <div className="text-[11px] font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1 pt-2 border-t border-slate-100 dark:border-slate-800">
              <Check className="w-3 h-3" />
              <span>NESREA / FMEnv / Pan-African Law</span>
            </div>
          </div>

          {/* 3. AfCFTA Market Access */}
          <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-serif">
                3. AfCFTA Market Access
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                The African Continental Free Trade Area places sustainability at the heart of intra-African trade. Certified organisations meet environmental conformity expectations of partner-country buyers effortlessly.
              </p>
            </div>
            <div className="text-[11px] font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1 pt-2 border-t border-slate-100 dark:border-slate-800">
              <Check className="w-3 h-3" />
              <span>Cross-Border Intra-African Trade</span>
            </div>
          </div>

          {/* 4. Greenwashing Risk Mitigation */}
          <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-600 dark:text-red-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-serif">
                4. Greenwashing Mitigation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Self-declared environmental claims expose organisations to reputational and legal risk. EcoMark replaces unsubstantiated claims with an audited standard protecting brands under growing regulatory scrutiny.
              </p>
            </div>
            <div className="text-[11px] font-bold text-red-700 dark:text-red-400 flex items-center gap-1 pt-2 border-t border-slate-100 dark:border-slate-800">
              <Check className="w-3 h-3" />
              <span>Auditable, Legally Defensible Proof</span>
            </div>
          </div>

          {/* 5. Supply Chain Competitiveness */}
          <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-serif">
                5. Supply Chain Competitiveness
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Multinational and institutional buyers embed sustainability criteria into supplier scoring. EcoMark-certified suppliers carry a demonstrable scoring advantage in corporate and government tenders.
              </p>
            </div>
            <div className="text-[11px] font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1 pt-2 border-t border-slate-100 dark:border-slate-800">
              <Check className="w-3 h-3" />
              <span>Tender Pre-Qualification Advantage</span>
            </div>
          </div>

          {/* 6. Access to Green Finance & Investment */}
          <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-serif">
                6. Access to Green Finance
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Financial institutions and development finance bodies are expanding green lending and sustainability-linked instruments. EcoMark serves as essential qualifying criterion and supporting evidence.
              </p>
            </div>
            <div className="text-[11px] font-bold text-teal-700 dark:text-teal-400 flex items-center gap-1 pt-2 border-t border-slate-100 dark:border-slate-800">
              <Check className="w-3 h-3" />
              <span>ESG Loans &amp; Capital Attraction</span>
            </div>
          </div>

          {/* 7. Operational Efficiency (Span 3 on LG) */}
          <div className="bg-gradient-to-r from-emerald-950 via-[#0A2540] to-teal-950 text-white p-6 rounded-2xl border border-emerald-800/80 shadow-md md:col-span-2 lg:col-span-3 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider border border-emerald-500/30">
                <RefreshCw className="w-3 h-3" />
                <span>Resource Optimization</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-white">
                7. Operational Efficiency &amp; Cost Reductions
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The process of preparing for EcoMark certification surfaces inefficiencies in resource use, raw materials, waste generation, and energy consumption — driving tangible operational cost savings alongside environmental gains.
              </p>
            </div>
            <div className="shrink-0 text-center sm:text-right">
              <div className="text-3xl font-black text-amber-300 font-mono">15-30%</div>
              <div className="text-[10px] text-emerald-200 uppercase font-semibold">Typical Waste &amp; Energy Savings</div>
            </div>
          </div>

        </div>

      </section>

      {/* 4. SCOPE OF THE ECOMARK SCHEME: Interactive Product Categories vs Service Sectors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
            Sector-Inclusive Standard
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-serif">
            Scope of the EcoMark Scheme
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
            Recognising that environmental impact and sustainable practice are not confined to a single industry, EcoMark technical criteria adapt to specific operational contexts across products and services.
          </p>
        </div>

        {/* Navigation Switcher Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-inner gap-2">
            <button
              onClick={() => setScopeTab('products')}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                scopeTab === 'products'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Product Categories (8)</span>
            </button>
            <button
              onClick={() => setScopeTab('services')}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                scopeTab === 'services'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <Factory className="w-4 h-4" />
              <span>Service Sectors (8)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Product Categories Grid */}
        {scopeTab === 'products' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-fadeIn">
            {PRODUCT_CATEGORIES.map((cat) => {
              const IconComp = cat.icon;
              const isSelected = selectedProductCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedProductCategory(cat.id)}
                  className={`bg-white dark:bg-[#0E2A47] p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'border-emerald-500 shadow-lg ring-2 ring-emerald-500/20'
                      : 'border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-sm font-serif">
                      {cat.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">
                      Core Evaluation Parameters:
                    </span>
                    <ul className="space-y-1">
                      {cat.criteria.map((cr, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[10px] text-slate-600 dark:text-slate-400">
                          <Check className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{cr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Service Sectors Grid */}
        {scopeTab === 'services' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-fadeIn">
            {SERVICE_SECTORS.map((sec) => {
              const IconComp = sec.icon;
              const isSelected = selectedServiceSector === sec.id;
              return (
                <div
                  key={sec.id}
                  onClick={() => setSelectedServiceSector(sec.id)}
                  className={`bg-white dark:bg-[#0E2A47] p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'border-emerald-500 shadow-lg ring-2 ring-emerald-500/20'
                      : 'border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-sm font-serif">
                      {sec.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      {sec.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider block">
                      Core Evaluation Parameters:
                    </span>
                    <ul className="space-y-1">
                      {sec.criteria.map((cr, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[10px] text-slate-600 dark:text-slate-400">
                          <Check className="w-3 h-3 text-blue-500 shrink-0 mt-0.5" />
                          <span>{cr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </section>

      {/* 5. WHO CAN APPLY FOR ECOMARK CERTIFICATION? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-[#0E2A47] dark:to-[#071329] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-xl space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full text-xs font-bold border border-amber-200 dark:border-amber-800">
              <Users className="w-3.5 h-3.5 text-amber-500" />
              <span>Universal Inclusivity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
              Who Can Apply for EcoMark Certification?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              EcoMark certification is open to any legally registered organisation operating within the <strong>Federal Republic of Nigeria</strong> or elsewhere across the African continent, regardless of size or sector.
            </p>
          </div>

          {/* Size Agnostic Callout */}
          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed">
              <strong>No Minimum Size Requirement:</strong> Micro, small, medium, and large enterprises (MSMEs to multinationals) are equally eligible. The conformity assessment process is scaled proportionately to the complexity and risk profile of the applicant’s operations.
            </div>
          </div>

          {/* 5 Target Organization Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            <div className="p-5 bg-white dark:bg-[#070F2B] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                <Factory className="w-4 h-4 text-amber-500" />
                <span>Manufacturers &amp; Producers</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Physical goods producers seeking independent validation of product environmental performance, clean production processes, and supply chain stewardship.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-[#070F2B] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                <Building className="w-4 h-4 text-emerald-500" />
                <span>Service Operators &amp; Facilities</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Hospitality operators, healthcare centers, logistics firms, energy utilities, and property managers managing direct or indirect environmental footprints.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-[#070F2B] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                <Globe className="w-4 h-4 text-blue-500" />
                <span>Exporters &amp; Trading Houses</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Commodity exporters and trading companies demonstrating sustainability compliance as a condition for AfCFTA trade facilitation and multinational supply chains.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-[#070F2B] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                <Scale className="w-4 h-4 text-purple-500" />
                <span>Public Sector Bodies</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Government-linked agencies, parastatals, and municipalities committed to environmental stewardship seeking independent validation of green initiatives.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-[#070F2B] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                <Sparkles className="w-4 h-4 text-teal-500" />
                <span>Green Startups &amp; Social Enterprises</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Emerging enterprises building sustainability into their core business model and seeking third-party credibility to support ESG investor engagement, donor grant applications, and commercial market positioning.
              </p>
            </div>

          </div>

          {/* Pre-Certification Gap Assessment Prompt */}
          <div className="p-5 bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-300 dark:border-amber-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-bold text-amber-900 dark:text-amber-300">
                Not ready for a full certification audit yet?
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                Engage IEMA Standards for a pre-certification <strong>Gap Assessment</strong> to identify specific deficiencies and receive a structured roadmap toward readiness.
              </p>
            </div>
            <a
              href="https://crmops.iemacert.com/request-quote.php?note=EcoMark%20Pre-Audit%20Gap%20Assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap shadow transition-colors shrink-0 inline-flex items-center gap-1.5"
            >
              <span>Request Gap Assessment</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* 6. THE ECOMARK CERTIFICATION PROCESS: 5 Interactive Stages */}
      <section id="process-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
            Conformity Assessment Framework
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-serif">
            The EcoMark 5-Stage Certification Process
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
            Administered in accordance with internationally recognised conformity assessment principles (ISO/IEC 17065). Structured to be rigorous, transparent, impartial, and proportionate.
          </p>
        </div>

        {/* Stage Navigation Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {CERTIFICATION_STAGES.map((stg, idx) => (
            <button
              key={stg.number}
              onClick={() => setActiveStage(idx)}
              className={`p-3 rounded-2xl text-left border transition-all ${
                activeStage === idx
                  ? 'bg-[#0A192F] text-white border-amber-400 shadow-md ring-2 ring-amber-400/20'
                  : 'bg-white dark:bg-[#0E2A47] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-black text-xs text-amber-400">STAGE {stg.number}</span>
                <span className="text-[9px] font-semibold text-slate-400">{stg.timeline}</span>
              </div>
              <div className="font-bold text-xs mt-1 truncate">
                {stg.title.split('—')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Display Card */}
        <div className="bg-white dark:bg-[#0E2A47] p-6 sm:p-10 rounded-3xl border-2 border-emerald-500/40 dark:border-emerald-400/40 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-700">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                <span>STAGE {CERTIFICATION_STAGES[activeStage].number}</span>
                <span>&bull;</span>
                <span>{CERTIFICATION_STAGES[activeStage].timeline}</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
                {CERTIFICATION_STAGES[activeStage].title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400">
                {CERTIFICATION_STAGES[activeStage].subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                disabled={activeStage === 0}
                onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 disabled:opacity-40 text-xs font-bold text-slate-700 dark:text-slate-200"
              >
                Previous Stage
              </button>
              <button
                disabled={activeStage === CERTIFICATION_STAGES.length - 1}
                onClick={() => setActiveStage(prev => Math.min(CERTIFICATION_STAGES.length - 1, prev + 1))}
                className="p-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-xs font-bold text-white shadow"
              >
                Next Stage
              </button>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
            {CERTIFICATION_STAGES[activeStage].description}
          </p>

          <div className="bg-slate-50 dark:bg-[#071329] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-emerald-500" />
              <span>Key Outputs &amp; Official Deliverables for Stage {CERTIFICATION_STAGES[activeStage].number}:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CERTIFICATION_STAGES[activeStage].deliverables.map((del, idx) => (
                <div key={idx} className="p-3 bg-white dark:bg-[#0B1A2C] rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* 7. OUR APPROACH & METHODOLOGY: 5 Pillars of Integrity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">
            Technical Governance
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-serif">
            Our Approach &amp; Methodology
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
            Founded on three core principles: <strong>technical rigour</strong>, <strong>operational impartiality</strong>, and <strong>continuous improvement</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">01</span>
              <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold px-2 py-0.5 rounded">Quantifiable</span>
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-serif">
              Technical Rigour &amp; Criteria Integrity
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Maintained by IEMA Standards\' Technical Committee (environmental scientists, quality managers, regulatory specialists). Quantifiable criteria: resource consumption, emissions/effluent, waste management, chemicals, biodiversity, and lifecycle considerations. 3-year review cycles aligned with ARSO &amp; AfCFTA.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-amber-600 dark:text-amber-400 font-mono">02</span>
              <span className="text-[10px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold px-2 py-0.5 rounded">Impartial</span>
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-serif">
              Impartiality &amp; Independence
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Strict separation between audit execution and certification decision-making. The independent Technical Review Panel makes award decisions. All personnel sign mandatory conflict-of-interest declarations governed by an Impartiality Policy.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">03</span>
              <span className="text-[10px] bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-bold px-2 py-0.5 rounded">Calibrated</span>
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-serif">
              Risk-Based Audit Planning
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Audit depth, sampling frequency, and surveillance intervals are calibrated to the environmental risk profile. Higher-risk sectors (chemical/heavy manufacturing) receive intensive testing; lower-risk services experience efficient, proportionate evaluations.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-purple-600 dark:text-purple-400 font-mono">04</span>
              <span className="text-[10px] bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-bold px-2 py-0.5 rounded">Competent</span>
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-serif">
              Competence of Audit Personnel
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Audits are conducted by formally trained, evaluated, and authorised personnel under IEMA Standards\' competence framework. Sector-specific technical experts and accredited laboratory specialists are engaged for specialised testing requirements.
            </p>
          </div>

          {/* Pillar 5 (Spans 2 columns on lg) */}
          <div className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3 md:col-span-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-teal-600 dark:text-teal-400 font-mono">05</span>
              <span className="text-[10px] bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-bold px-2 py-0.5 rounded">Public Trust</span>
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-serif">
              Transparency &amp; Stakeholder Confidence (Public Register)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Certified organisations are registered on IEMA Standards\' public EcoMark Register for instantaneous online verification by buyers, regulators, and consumers. Formal Complaints and Appeals procedures guarantee independent dispute resolution and continuous accountability.
            </p>
          </div>

        </div>

      </section>

      {/* 8. ECOMARK & IEMA STANDARDS LIMITED — The Triple Role Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#050B1E] text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8">
          
          <div className="max-w-4xl space-y-3">
            <div className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
              Institutional Mandate
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white font-serif">
              EcoMark &amp; IEMA Standards Limited
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              IEMA Standards Limited is an accredited Conformity Assessment Body (CAB) offering certification, inspection, and testing services across Nigeria and Africa. Headquartered in Lekki, Lagos, IEMA Standards manages the complete lifecycle of the EcoMark scheme.
            </p>
          </div>

          {/* 3 Columns Matching PDF Section 8 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1: Scheme Ownership */}
            <div className="bg-[#0A192F] p-6 rounded-2xl border border-blue-900/60 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-serif">
                  Scheme Ownership
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  IEMA Standards develops, owns, and maintains the EcoMark technical criteria, ensuring continuous alignment with ARSO standards, AfCFTA sustainability frameworks, and evolving international environmental best practice.
                </p>
              </div>
              <div className="text-[10px] text-blue-300 font-mono pt-2 border-t border-slate-800">
                Governance &amp; Standard Setting
              </div>
            </div>

            {/* Box 2: Certification Services */}
            <div className="bg-[#0A192F] p-6 rounded-2xl border border-emerald-900/60 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-serif">
                  Certification Services
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  IEMA Standards conducts independent, structured conformity assessments — including document reviews, on-site audits, and product testing — and issues EcoMark certificates via an independent Technical Review Panel.
                </p>
              </div>
              <div className="text-[10px] text-emerald-300 font-mono pt-2 border-t border-slate-800">
                ISO/IEC 17065 CAB Delivery
              </div>
            </div>

            {/* Box 3: Advisory & Capacity Building */}
            <div className="bg-[#0A192F] p-6 rounded-2xl border border-amber-900/60 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-serif">
                  Advisory &amp; Capacity Building
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  IEMA Standards supports organisations through preliminary gap assessments, advisory engagements, and pre-certification readiness reviews to build a clear, structured roadmap to full certification.
                </p>
              </div>
              <div className="text-[10px] text-amber-300 font-mono pt-2 border-t border-slate-800">
                Roadmap &amp; Readiness Support
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. READY TO EARN THE ECOMARK? OFFICIAL DIRECT CONTACT FOOTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#071329] via-[#0A192F] to-[#040817] text-white p-8 sm:p-12 rounded-3xl border-2 border-emerald-500/40 shadow-2xl space-y-6 text-center sm:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/40">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>Begin Your Sustainability Certification Journey</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white font-serif">
                Ready to Earn the EcoMark?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Contact IEMA Standards Limited today to begin your EcoMark certification journey — or to request a preliminary Gap Assessment tailored to your product line or service operations.
              </p>
            </div>

            <div className="space-y-3 shrink-0 text-center sm:text-right">
              <a
                href="https://crmops.iemacert.com/request-quote.php"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2 border border-red-500"
              >
                <span>Request Official Proposal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
