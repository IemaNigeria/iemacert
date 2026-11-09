import React, { useState, useEffect } from 'react';
import { 
  Award, ShieldCheck, CheckCircle2, ArrowRight, 
  ChevronRight, Search, Filter, Leaf, Lock, Zap, 
  Utensils, Stethoscope, Scale, FileText, Check,
  Building2, Layers, ListChecks, PackageCheck, BookOpen, ExternalLink, HelpCircle, DollarSign, Clock,
  Phone, Mail, MapPin, Sparkles, CreditCard
} from 'lucide-react';
import { ISO_STANDARDS } from '../data/mockData';
import { IsoStandard } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COST_BREAKDOWN_DATA } from '../data/seoKeywordsData';

interface CertificationsPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  selectedStandardId?: string;
}

// Complete Certification Programs from iemacert.com/certification/ (including ISO/IEC 17065, ISO/IEC 17025, and ISO 15189:2022)
export const IEMACERT_PROGRAMS = [
  {
    id: "iso-9001",
    slug: "quality-management-system-iso-9001",
    title: "Quality Management System (ISO-9001)",
    code: "ISO 9001:2015",
    category: "Quality",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/ISO-9001-1-150x150.png",
    summary: "The international standard for quality management systems ensuring consistent quality, customer satisfaction, defect minimization, and operational excellence.",
    targetUrl: "https://iemacert.com/quality-management-system-iso-9001/"
  },
  {
    id: "iso-14001",
    slug: "environmental-management-system",
    title: "Environmental Management System (ISO-14001)",
    code: "ISO 14001:2015",
    category: "Environment & Energy",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/download-1-150x150.png",
    summary: "Framework for managing environmental responsibilities, waste reduction, legal statutory compliance (NESREA/FMEnv), and lower carbon footprint.",
    targetUrl: "https://iemacert.com/environmental-management-system/"
  },
  {
    id: "iso-45001",
    slug: "occupational-health-and-safety",
    title: "Occupational Health and Safety (ISO-45001)",
    code: "ISO 45001:2018",
    category: "Health & Safety",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/45001-150x150.png",
    summary: "Prevent workplace injuries, eliminate hazards, reduce health risks, and foster a proactive zero-accident safety culture across operations.",
    targetUrl: "https://iemacert.com/occupational-health-and-safety/"
  },
  {
    id: "iso-27001",
    slug: "iso-27001-certification-in-nigeria-information-security-management",
    title: "Information Security Management (ISO-27001)",
    code: "ISO/IEC 27001:2022",
    category: "Information Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/Untitled-design-150x150.png",
    summary: "Enterprise cyber resilience, data privacy protection, Statement of Applicability (SoA) implementation, and NDPR/GDPR compliance.",
    targetUrl: "https://iemacert.com/iso-27001-certification-in-nigeria-information-security-management/"
  },
  {
    id: "iso-22301",
    slug: "iso-22301-business-continuity-management-system",
    title: "Business Continuity System (ISO-22301)",
    code: "ISO 22301:2019",
    category: "Governance",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/QAssurance-logos-3-150x150.png",
    summary: "Business Impact Analysis (BIA), disaster recovery resilience, and seamless continuity during unexpected systemic or operational disruptions.",
    targetUrl: "https://iemacert.com/iso-22301-business-continuity-management-system/"
  },
  {
    id: "iso-20000",
    slug: "information-technology-service",
    title: "Information technology Service (ISO-20000)",
    code: "ISO/IEC 20000-1:2018",
    category: "Information Security",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/ISO-20000-150x150.png",
    summary: "Delivering high-quality IT service management (ITSM), incident resolution workflows, service level agreements (SLAs), and ITIL alignment.",
    targetUrl: "https://iemacert.com/information-technology-service/"
  },
  {
    id: "iso-55001",
    slug: "asset-management-system",
    title: "Asset Management System (ISO-55001)",
    code: "ISO 55001:2014",
    category: "Governance",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/ISO-55001-.jpg",
    summary: "Optimize physical and infrastructure asset life cycles, balance financial risks and asset performance, and maximize return on capital investment.",
    targetUrl: "https://iemacert.com/asset-management-system/"
  },
  {
    id: "iso-50001",
    slug: "energy-management-system",
    title: "Energy Management System (ISO-50001)",
    code: "ISO 50001:2018",
    category: "Environment & Energy",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/ISO-50001--150x150.png",
    summary: "Data-driven energy baseline optimization, Significant Energy Use (SEU) reviews, and drastic reductions in corporate utility and fuel expenses.",
    targetUrl: "https://iemacert.com/energy-management-system/"
  },
  {
    id: "iso-13485",
    slug: "iso-13485-medical-devices-quality",
    title: "Medical Devices Quality (ISO-13485)",
    code: "ISO 13485:2016",
    category: "Food & Medical",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/ISO-9001-1-150x150.png",
    summary: "Clinical safety, ISO 14971 risk management files, cleanroom environmental validation, and international medical device regulatory conformance.",
    targetUrl: "https://iemacert.com/iso-13485-medical-devices-quality/"
  },
  {
    id: "iso-20022",
    slug: "financial-management-system",
    title: "Financial Management System (ISO-20022)",
    code: "ISO 20022",
    category: "Governance",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/QAssurance-logos-3-150x150.png",
    summary: "Universal financial industry messaging scheme, secure banking electronic data interchange, payments messaging compliance, and anti-fraud protocols.",
    targetUrl: "https://iemacert.com/financial-management-system/"
  },
  {
    id: "iso-26000",
    slug: "social-responsibility",
    title: "Social Responsibility (ISO-26000)",
    code: "ISO 26000:2010",
    category: "Governance",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/download-1-150x150.png",
    summary: "Guidance on operating in an ethical and transparent way that contributes to sustainable development, human rights, and social welfare.",
    targetUrl: "https://iemacert.com/social-responsibility/"
  },
  {
    id: "iso-22000",
    slug: "iso-22000-certification",
    title: "Food Safety Management System (ISO-22000)",
    code: "ISO 22000:2018",
    category: "Food & Medical",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/QAssurance-logos-3-150x150.png",
    summary: "HACCP principles, Prerequisite Programs (PRPs), farm-to-fork food safety verification, and NAFDAC/Codex international hygiene standards.",
    targetUrl: "https://iemacert.com/iso-22000-certification/"
  },
  {
    id: "iso-28000",
    slug: "iso-certification-for-logistics-company-security-management-systems-for-the-supply-chain-iso-28000",
    title: "Security management systems for the supply chain (ISO-28000)",
    code: "ISO 28000:2022",
    category: "Governance",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/Untitled-design-150x150.png",
    summary: "Mitigating cargo theft, tampering, piracy, and transit threats across maritime shipping corridors, ports, bonded warehouses, and cross-border logistics.",
    targetUrl: "https://iemacert.com/iso-certification-for-logistics-company-security-management-systems-for-the-supply-chain-iso-28000/"
  },
  {
    id: "as9100",
    slug: "aerospace-quality-managementiso-certification-for-manufacturing-companies",
    title: "AS9100/9110/9120 — aerospace QMS for airlines/MRO/suppliers",
    code: "AS9100 / AS9110 / AS9120",
    category: "Quality",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/ISO-9001-1-150x150.png",
    summary: "Aviation, space, and defense quality management system governing aircraft maintenance (MRO), flight safety, parts traceability, and defense supply chains.",
    targetUrl: "https://iemacert.com/aerospace-quality-managementiso-certification-for-manufacturing-companies"
  },
  {
    id: "iso-21001",
    slug: "iso-certification-for-schools-in-nigeria-education-management-system",
    title: "Education management system (ISO 21001:2018)",
    code: "ISO 21001:2018",
    category: "Governance",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/ISO-55001-.jpg",
    summary: "Educational Organizations Management Systems (EOMS) enhancing learner satisfaction, pedagogical consistency, special needs inclusion, and curriculum quality.",
    targetUrl: "https://iemacert.com/iso-certification-for-schools-in-nigeria-education-management-system/"
  },
  {
    id: "iso-7101",
    slug: "hospital-management-system",
    title: "Hospital Management System (ISO 7101:2023)",
    code: "ISO 7101:2023",
    category: "Food & Medical",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/ISO-50001--150x150.png",
    summary: "Healthcare organization management standard dedicated to clinical governance, patient safety, infection control, and timely high-quality healthcare delivery.",
    targetUrl: "https://iemacert.com/hospital-management-system/"
  },
  {
    id: "iso-37001",
    slug: "anti-bribery-management-system",
    title: "Anti-Bribery Management System (ISO-37001)",
    code: "ISO 37001:2016",
    category: "Governance",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/QAssurance-logos-3-150x150.png",
    summary: "Systematic anti-corruption controls, independent compliance officer functions, commercial partner vetting, and whistleblowing safeguards.",
    targetUrl: "https://iemacert.com/anti-bribery-management-system/"
  },
  {
    id: "iso-29001",
    slug: "petroleum-petrochemical-natural-gas-iso-29001",
    title: "Petroleum, Petrochemical & Natural Gas QMS (ISO-29001)",
    code: "ISO 29001:2020",
    category: "Quality",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/ISO-9001-1-150x150.png",
    summary: "Upstream and downstream hydrocarbon supply chain quality, welding qualifications, mill test reports (MTR), and NIPEX/NNPC vendor compliance.",
    targetUrl: "https://iemacert.com/certification/"
  },
  {
    id: "iso-17065",
    slug: "iso-17065-product-process-service-certification",
    title: "Product, Process & Service Certification (ISO/IEC 17065)",
    code: "ISO/IEC 17065:2012",
    category: "Quality",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/ISO-9001-1-150x150.png",
    summary: "Accreditation for product certification bodies, verifying that manufactured goods, agricultural commodities, industrial equipment, and processes comply with statutory standards (SONCAP, EcoMark, CE).",
    targetUrl: "https://iemacert.com/certification/"
  },
  {
    id: "iso-17025",
    slug: "iso-17025-testing-calibration-laboratories",
    title: "Testing & Calibration Laboratories (ISO/IEC 17025)",
    code: "ISO/IEC 17025:2017",
    category: "Quality",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/ISO-9001-1-150x150.png",
    summary: "International benchmark for laboratory technical competence, measurement accuracy, traceability to SI units, and valid test and calibration certificates under ILAC MRA.",
    targetUrl: "https://iemacert.com/certification/"
  },
  {
    id: "iso-15189",
    slug: "medical-laboratories-quality-competence-iso-15189",
    title: "Medical Laboratories Quality & Competence (ISO 15189:2022)",
    code: "ISO 15189:2022",
    category: "Food & Medical",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
    badge: "https://iemacert.com/wp-content/uploads/2024/01/ISO-9001-1-150x150.png",
    summary: "Gold-standard accreditation for clinical diagnostic and medical pathology laboratories, ensuring test reliability, clinical risk management, specimen integrity, and patient diagnostic safety.",
    targetUrl: "https://iemacert.com/certification/"
  }
];

export const CertificationsPage: React.FC<CertificationsPageProps> = ({ 
  onNavigate, 
  selectedStandardId 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStandard, setActiveStandard] = useState<IsoStandard | null>(
    selectedStandardId ? (ISO_STANDARDS.find(s => s.id === selectedStandardId) || null) : null
  );

  useEffect(() => {
    if (selectedStandardId) {
      const found = ISO_STANDARDS.find(s => s.id === selectedStandardId);
      if (found) {
        setActiveStandard(found);
        // Scroll to detail view if selected
        const detailEl = document.getElementById('selected-standard-detail');
        if (detailEl) {
          detailEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [selectedStandardId]);

  const categories = ['All', 'Quality', 'Environment & Energy', 'Health & Safety', 'Information Security', 'Food & Medical', 'Governance'];

  const filteredPrograms = selectedCategory === 'All'
    ? IEMACERT_PROGRAMS
    : IEMACERT_PROGRAMS.filter(p => p.category === selectedCategory);

  const currentCostInfo = activeStandard 
    ? COST_BREAKDOWN_DATA.find(c => c.standard.includes(activeStandard.code)) || COST_BREAKDOWN_DATA[0]
    : COST_BREAKDOWN_DATA[0];

  const handleProgramClick = (programId: string, slug?: string) => {
    onNavigate('iso-detail', { standard: programId, slug: slug || programId });
  };

  return (
    <div className="space-y-12 pb-16 transition-colors duration-200">
      
      {/* Dynamic SEO Meta Tags for Standard */}
      <SeoHead
        title="ISO Certification Services | IEMA Standards"
        description="Accredited ISO certifications in Nigeria including ISO 9001, 14001, 45001, 27001, 22000 & 37001 under EGAC CAB 12203. Fast-track your compliance audit today."
        canonicalPath="certifications"
        keywords={[
          'iso certification nigeria',
          'accredited iso certification body',
          'iso 9001 certification lagos',
          'iso 14001 certification nigeria',
          'iso 45001 occupational health and safety',
          'iso 27001 information security',
          'EGAC accredited CAB 12203',
          'step by step iso certification'
        ]}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'Certifications', isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />
      
      {/* 1. HERO BANNER: Exactly matching iemacert.com/certification/ */}
      <section className="bg-[#070F2B] text-white py-16 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600" 
            alt="ISO Certification" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold border border-emerald-800">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>EGAC Accredited ISO Certification Body (CAB 12203 & IAF MLA Signatory)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            Certification
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-amber-400 font-serif">
            Our Certification Programs
          </h2>
          <div className="max-w-4xl space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              <strong>IEMA is an accredited ISO certification body.</strong> We specialize in helping small businesses and the world accomplish their ISO certification. We also provide all the tools and consulting for implementation, audit, training and eventual certificate to any of the ISO programs.
            </p>
            <p className="text-xs sm:text-sm text-slate-300">
              Our consultants are experts with over <strong>25 years in the industry</strong>. We develop manuals, process documentation, conduct management reviews, conduct mappings, implement the standards, train your personnel and certify your organization. Need to get certified? Click on your desired certification below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ISO CERTIFICATION & WHY GET ISO CERTIFICATION: Matching iemacert.com */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: About ISO Certification */}
          <div className="bg-white dark:bg-[#0E2A47] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-serif">
                    About ISO Certification
                  </h3>
                  <span className="text-[11px] text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                    Standardization &amp; Quality Assurance
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                ISO certification certifies that a management system, manufacturing process, service, or documentation procedure has all the requirements for standardization and quality assurance.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                <strong>ISO (International Organization for Standardization)</strong> is an independent, non-governmental, international organization that develops standards to ensure the quality, safety and efficiency of products, services and systems.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                ISO certification is required in many industries from energy management and social responsibility to medical devices and energy management. They are simply structured to ensure consistency, each ISO certification has specific standards and requirements and has numerical classifications.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/70 rounded-xl overflow-hidden">
              <img 
                src="https://iemacert.com/wp-content/uploads/2024/01/iso-blog-500x300-1.png" 
                alt="About ISO Certification" 
                className="w-full h-44 object-cover rounded-xl border border-slate-200 dark:border-slate-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // fallback to unsplash if remote wordpress url has cors
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600";
                }}
              />
            </div>
          </div>

          {/* Card 2: Why Get ISO Certification? */}
          <div className="bg-white dark:bg-[#0E2A47] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-serif">
                    Why Get ISO Certification?
                  </h3>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                    Institutional Value &amp; Global Standing
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-semibold">
                The importance of achieving ISO certification cannot be over emphasized. They are numerous, and carry considerable value for your organization.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                From streamlining systems for the efficient use of valuable resources to improving your overall reputation and standing within your industry, ISO certifications ensure that your business is performing to the optimal standard for continued prosperity and improvement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="p-2.5 bg-slate-50 dark:bg-[#071329] rounded-lg border border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Win tenders &amp; international contracts</span>
                </div>
                <div className="p-2.5 bg-slate-50 dark:bg-[#071329] rounded-lg border border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Streamline operational waste &amp; cost</span>
                </div>
                <div className="p-2.5 bg-slate-50 dark:bg-[#071329] rounded-lg border border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Elevate brand authority &amp; trust</span>
                </div>
                <div className="p-2.5 bg-slate-50 dark:bg-[#071329] rounded-lg border border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Meet regulatory &amp; statutory compliance</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/70 rounded-xl overflow-hidden">
              <img 
                src="https://iemacert.com/wp-content/uploads/2024/01/depositphotos_180445264-stock-photo-close-person-hands-using-stamper-500x300-1.jpeg" 
                alt="ISO Certification Value" 
                className="w-full h-44 object-cover rounded-xl border border-slate-200 dark:border-slate-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600";
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. ECOMARK SUSTAINABILITY SCHEME SPOTLIGHT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#061826] via-[#0A2540] to-[#04121E] rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/50 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>ARSO &amp; AfCFTA Aligned Eco-Labelling Scheme</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Looking for the <span className="text-emerald-400">EcoMark</span> Certification Scheme?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Voluntary, third-party verified eco-labelling validating environmental performance, resource efficiency, and AfCFTA cross-border trade readiness across 16+ product and service sectors.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => onNavigate('ecomark')}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2 border border-emerald-400/40"
              id="certifications-ecomark-banner-btn"
            >
              <span>Explore EcoMark Scheme</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dedicated PCI DSS v4.0.1 Banner */}
        <div className="bg-gradient-to-r from-[#070F2B] via-[#0A192F] to-[#122A4E] rounded-3xl p-6 sm:p-8 border-2 border-amber-500/50 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mt-4">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-bold border border-amber-500/30">
              <CreditCard className="w-3.5 h-3.5 text-amber-400" />
              <span>Payment Card Industry Data Security Standard (v4.0.1)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Need <span className="text-amber-400">PCI DSS v4.0.1</span> Compliance or RoC/SAQ Audit?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Full-scope CDE boundary scoping, SAQ A–D and RoC attestation, quarterly ASV scans, and CBN regulatory alignment for banks, fintechs, and payment gateways.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => onNavigate('pci-dss')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              id="certifications-pci-dss-banner-btn"
            >
              <span>Explore PCI DSS Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. SELECT A CERTIFICATION PROGRAM: The complete official Grid from iemacert.com */}
      <section id="select-program-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Official Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            Select a Certification Program
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
            Click on any program below to view detailed scope, clauses, audit roadmap, and request an immediate accredited quote.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat 
                  ? 'bg-[#0A192F] text-white shadow-md' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Grid matching iemacert.com catalog */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
          {filteredPrograms.map((prog) => {
            const isSelected = activeStandard?.id === prog.id;
            return (
              <div
                key={prog.id}
                onClick={() => handleProgramClick(prog.id, prog.slug)}
                className={`group bg-white dark:bg-[#0E2A47] rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-xl ${
                  isSelected 
                    ? 'border-amber-500 dark:border-amber-400 ring-2 ring-amber-500/20' 
                    : 'border-slate-200 dark:border-slate-700/80 hover:border-amber-400 dark:hover:border-amber-500'
                }`}
              >
                {/* Program Featured Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={prog.image} 
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-[#070F2B]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700 text-white font-mono text-[10px] font-bold">
                    {prog.code}
                  </div>
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-white/90 dark:bg-slate-900/90 p-1 shadow border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    <img 
                      src={prog.badge} 
                      alt="ISO Seal" 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-serif group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {prog.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider group-hover:underline flex items-center gap-1">
                      <span>Learn more</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded font-medium">
                      {prog.category}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* 4. ACTIVE SELECTED STANDARD IN-DEPTH DETAIL VIEW */}
      {activeStandard && (
        <section id="selected-standard-detail" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white dark:bg-[#0E2A47] rounded-3xl p-6 sm:p-10 border-2 border-amber-500/40 dark:border-amber-400/40 shadow-2xl space-y-8 text-slate-900 dark:text-white">
            
            {/* Header with Title and Quick CTA */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-700">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full text-xs font-bold border border-amber-300 dark:border-amber-800">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Detailed Specification &amp; Audit Scope</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-serif">
                  {activeStandard.code} — {activeStandard.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Accredited by Egyptian Accreditation Council (EGAC) | IAF MLA Signatory Recognition
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://crmops.iemacert.com/request-quote.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#DC2626] hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
                >
                  <span>Request Fast Quote</span>
                  <ExternalLink className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Overview Box */}
            <div className="bg-slate-50 dark:bg-[#071329] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="text-xs font-extrabold text-amber-700 dark:text-amber-400 uppercase tracking-widest">
                Executive Standard Scope
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {activeStandard.fullDesc}
              </p>
            </div>

            {/* Clauses and Strategic Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Core Clauses */}
              {activeStandard.coreClauses && activeStandard.coreClauses.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold text-amber-700 dark:text-amber-400 uppercase tracking-widest flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>Core Clauses &amp; Framework Architecture</span>
                  </h4>
                  <div className="space-y-2">
                    {activeStandard.coreClauses.map((clause, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 dark:bg-[#071329] rounded-xl border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60 px-2 py-0.5 rounded text-[11px] border border-amber-300 dark:border-amber-800/60">
                            {clause.number}
                          </span>
                          <span className="font-bold text-slate-900 dark:text-white">{clause.title}</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-[11px] pl-1">{clause.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Strategic Benefits */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Key Strategic Benefits</span>
                </h4>
                <div className="space-y-2.5">
                  {activeStandard.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="p-3.5 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-2.5 text-xs text-emerald-950 dark:text-emerald-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Target Industries */}
                {activeStandard.targetIndustries && activeStandard.targetIndustries.length > 0 && (
                  <div className="pt-2 space-y-2">
                    <h5 className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Applicable Sectors:
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {activeStandard.targetIndustries.map((ind, idx) => (
                        <span key={idx} className="text-[11px] bg-slate-100 dark:bg-[#071329] text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Prerequisites & Deliverables in 2 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeStandard.prerequisites && activeStandard.prerequisites.length > 0 && (
                <div className="bg-slate-50 dark:bg-[#071329] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <h5 className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ListChecks className="w-3.5 h-3.5" />
                    <span>Audit Prerequisites</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {activeStandard.prerequisites.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px]">
                        <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeStandard.deliverables && activeStandard.deliverables.length > 0 && (
                <div className="bg-slate-50 dark:bg-[#071329] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <h5 className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <PackageCheck className="w-3.5 h-3.5" />
                    <span>Official Deliverables</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {activeStandard.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Cost & Timeline Callout */}
            <div className="bg-amber-50 dark:bg-amber-950/20 p-5 rounded-2xl border border-amber-200 dark:border-amber-900/40 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Cost of {activeStandard.code} Certification in Nigeria</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded">
                  SME &amp; Corporate Rates
                </span>
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed space-y-1">
                <div className="font-semibold text-slate-900 dark:text-white">
                  Estimated Range: <span className="text-emerald-700 dark:text-emerald-400 font-bold">{currentCostInfo.costRangeNigeria}</span>
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Standard Fast-Track Timeline: <strong>{currentCostInfo.timeline}</strong></span>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 5. STEP BY STEP FOR ISO CERTIFICATION: Matching iemacert.com Section 21 & 22 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Auditing Lifecycle
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            Step By Step for ISO Certification
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
            IEMA STANDARDS LIMITED is an EGAC-accredited ISO certification body providing globally recognised ISO certification and conformity assessment services with a strong focus on quality, credibility, and technical competence.
          </p>
        </div>

        {/* Step-by-Step Images & Process Grid from iemacert.com */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Visual Step Chart from iemacert.com */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg bg-white dark:bg-slate-800">
              <img 
                src="https://iemacert.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-07-at-06.14.34-1024x724.jpeg" 
                alt="Step by Step for ISO Certification Flowchart"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
            <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
              Official IEMA Step-by-Step Certification Workflow (Stage 1 Desktop Audit &rarr; Stage 2 Site Verification &rarr; Certification Grant).
            </p>
          </div>

          {/* Tender Pre-Qualification Card from iemacert.com */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg bg-white dark:bg-slate-800">
              <img 
                src="https://iemacert.com/wp-content/uploads/2024/01/tenders-1024x640.jpeg" 
                alt="ISO Certification for Tenders & Pre-qualification"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
            <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
              Qualify for high-value tenders (NIPEX, IOCs, Federal RFPs, and Multilateral contracts) with EGAC &amp; IAF recognized credentials.
            </p>
          </div>

        </div>

        {/* 4-Stage Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
          <div className="bg-white dark:bg-[#0E2A47] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-amber-600 dark:text-amber-400 font-mono">01</span>
              <span className="text-[10px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold px-2 py-0.5 rounded">Days 1 - 5</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm font-serif">Application &amp; Scope</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Complete organizational questionnaire detailing headcount, sites, and operational boundaries.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0E2A47] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-amber-600 dark:text-amber-400 font-mono">02</span>
              <span className="text-[10px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold px-2 py-0.5 rounded">Days 10 - 20</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm font-serif">Stage 1 Readiness</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Desktop evaluation of policy manuals, mandatory SOPs, risk registers, and management reviews.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0E2A47] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-amber-600 dark:text-amber-400 font-mono">03</span>
              <span className="text-[10px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold px-2 py-0.5 rounded">Days 30 - 45</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm font-serif">Stage 2 Site Audit</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              On-site physical inspection, operational process sampling, staff interviews, and evidence checks.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0E2A47] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">04</span>
              <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold px-2 py-0.5 rounded">Days 50 - 60</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm font-serif">Certification Grant</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Impartiality committee review, certificate issue with EGAC/IAF marks, and public registry listing.
            </p>
          </div>
        </div>

      </section>

      {/* 6. GET IN TOUCH & FAST QUOTE CTA (From iemacert.com bottom section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#070F2B] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-black font-serif text-white">
                Ready to Get Your Organization Certified?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Contact our certification advisory desk today. We assist you through documentation development, gap analysis, employee training, and formal accredited audits.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>27A Alternative drive, near waterbrook school, Chevron Lekki, Lagos Nigeria</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+234 813 483 1027 / +234 703 469 0322</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>info@iemacert.com</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3.5">
              <a
                href="https://crmops.iemacert.com/request-quote.php"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#DC2626] hover:bg-red-700 text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg text-center transition-all flex items-center justify-center gap-2"
              >
                <span>Request Fast-Track Quote</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://certificates.iiema.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm border border-slate-700 text-center transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verify a Certificate</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
