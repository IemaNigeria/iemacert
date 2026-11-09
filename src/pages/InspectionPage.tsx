import React, { useState } from 'react';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, FileText, Download, 
  ExternalLink, PhoneCall, Mail, Award, Layers, SearchCheck, 
  Wrench, Cpu, Building2, Check, Sparkles, X, ChevronRight,
  Flame, CheckCheck, Compass, Eye, ShieldAlert, FileCode2
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

// High-resolution local image assets for Inspection services
import techInspectionImg from '../assets/images/regenerated_image_1787148796381.jpg';
import techTrainingImg from '../assets/images/regenerated_image_1787148784888.jpg';
import ndtServicesImg from '../assets/images/regenerated_image_1787153221960.jpg';
import apiInspectionImg from '../assets/images/regenerated_image_1787153216295.jpg';

interface InspectionPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  initialService?: string;
}

interface InspectionService {
  id: string;
  title: string;
  image: string;
  fallbackImage?: string;
  excerpt: string;
  url: string;
  badge: string;
  fullContent: {
    leadParagraph: string;
    overview: string;
    keyAreas: { title: string; desc: string }[];
    standards: string[];
    deliverables: string[];
    industries: string[];
  };
}

const INSPECTION_SERVICES: InspectionService[] = [
  {
    id: 'technical-inspection-and-verification',
    title: 'Technical Inspection and Verification Services',
    image: techInspectionImg,
    fallbackImage: techInspectionImg,
    excerpt: 'The need for quality, safety, and reliability are paramount as companies strive to meet the growing global infrastructure requirements and demands for secure and sustainable sources of energy.',
    url: 'https://iemacert.com/service/technical-inspection-and-verification-services/',
    badge: 'ISO/IEC 17020 Type A Inspection',
    fullContent: {
      leadParagraph: 'IEMA Standards provides independent third-party technical inspection, vendor surveillance, and quality verification services for capital projects, manufacturing facilities, and critical industrial assets.',
      overview: 'As global industrial operations and infrastructure become more intricate, independent verification ensures that materials, equipment, and construction activities comply with design specifications, statutory regulations, and international engineering standards. We deploy certified welding inspectors, coating specialists, and quality engineers to safeguard your investments from fabrication defects and regulatory non-compliance.',
      keyAreas: [
        {
          title: 'Third-Party Vendor Surveillance & Source Inspection',
          desc: 'Witnessing critical manufacturing milestones, factory acceptance testing (FAT), hydrostatic testing, and material release at equipment manufacturer facilities globally.'
        },
        {
          title: 'In-Process Construction & Site Quality Verification',
          desc: 'Monitoring structural steel erection, piping spool fabrication, welding traceability, dimensional control, and civil installations.'
        },
        {
          title: 'Welding & Protective Coating Inspection',
          desc: 'Inspection by CSWIP / AWS CWIs and NACE / FROSIO coating inspectors to verify surface preparation (SSPC/NACE), blast profiles, DFT, and prevent weld discontinuities.'
        },
        {
          title: 'Pre-Shipment & Cargo Inspection (PSI)',
          desc: 'Container loading supervision, packing and preservation checks, quantity tallying, and export/import regulatory compliance verification.'
        },
        {
          title: 'Rotating & Static Equipment Verification',
          desc: 'Alignment checks, vibration baseline verification, pressure vessel hydrotest witnessing, and mechanical completion certification.'
        }
      ],
      standards: [
        'ISO/IEC 17020 (Conformity assessment — Requirements for inspection bodies)',
        'ASME Boiler and Pressure Vessel Code (BPVC Section VIII & IX)',
        'ASME B31.3 / B31.1 (Process & Power Piping Codes)',
        'AWS D1.1 / AWS D1.6 (Structural Welding Code - Steel & Stainless)',
        'NACE SP0188 / ISO 12944 / SSPC (Paints, Coatings & Corrosion Control)',
        'EN 10204 Type 3.2 (Independent Third-Party Verification Certification)'
      ],
      deliverables: [
        'Detailed Inspection & Vendor Surveillance Reports (IVR) with high-resolution photographic evidence',
        'Inspection Release Notes (IRN) and Material Dispatch Authorizations',
        'Welding Procedure Specification (WPS) & Procedure Qualification Record (PQR) Review Dossiers',
        'Comprehensive Quality Dossiers and Punch-List Tracking Registers'
      ],
      industries: [
        'Oil & Gas Exploration, Upstream Facilities, Pipelines & Refineries',
        'Power Generation, Solar, Thermal & Renewable Utilities',
        'Heavy Civil Infrastructure, Bridges & Marine Deepwater Ports',
        'Mining, Smelting & Chemical Processing Plants'
      ]
    }
  },
  {
    id: 'technical-certification-and-training',
    title: 'Technical Certification and Training',
    image: techTrainingImg,
    fallbackImage: techTrainingImg,
    excerpt: 'Today, ISO 9001 certifications have become standard for company suppliers as verification of internationally standardized qualification. An ISO 9001 certification enables companies to market themselves as ISO 9001 certified to attract new clientele and qualifies companies to partake in project bidding.',
    url: 'https://iemacert.com/service/technical-certification-and-training/',
    badge: 'EGAC CAB 012311A & IAF Accredited',
    fullContent: {
      leadParagraph: 'Accredited management systems certification, technical auditor qualifications, and competency training programs designed to elevate organizational performance and qualify companies for high-value tenders.',
      overview: 'Holding recognized third-party certification is essential for market access, vendor pre-qualification, and international procurement. IEMA delivers accredited ISO certifications (ISO 9001, ISO 14001, ISO 45001, ISO/IEC 27001, ISO 22000, ISO 22301) alongside rigorous technical training courses for Lead Auditors, Internal Auditors, and technical specialists.',
      keyAreas: [
        {
          title: 'Accredited Management System Certification',
          desc: 'Stage 1 and Stage 2 third-party certification audits under EGAC accreditation with worldwide recognition through the IAF Multilateral Recognition Arrangement (MLA).'
        },
        {
          title: 'Lead Auditor & Internal Auditor Training Courses',
          desc: '5-day professional Lead Auditor and 3-day Internal Auditor courses covering audit principles, risk-based thinking, non-conformance reporting, and ISO 19011 protocols.'
        },
        {
          title: 'Supplier Qualification & Technical Gap Assessments',
          desc: 'Pre-audit readiness assessments and supply chain compliance audits to ensure vendor adherence to corporate quality and statutory criteria.'
        },
        {
          title: 'NDT Level I & Level II Competency Courses',
          desc: 'Structured training and certification programs in accordance with ASNT SNT-TC-1A for Visual, Magnetic Particle, Liquid Penetrant, and Ultrasonic testing.'
        },
        {
          title: 'Customized Corporate QHSE Masterclasses',
          desc: 'Tailored workshops on hazard identification (HIRA), environmental aspect evaluation, API code orientation, and data protection compliance.'
        }
      ],
      standards: [
        'ISO 9001:2015 (Quality Management Systems)',
        'ISO 14001:2015 (Environmental Management Systems)',
        'ISO 45001:2018 (Occupational Health and Safety Management)',
        'ISO/IEC 27001:2022 (Information Security Management Systems)',
        'ISO 22000:2018 (Food Safety Management Systems)',
        'ISO 19011:2018 (Guidelines for Auditing Management Systems)'
      ],
      deliverables: [
        'Internationally Recognized ISO Certificates with QR-Code Online Real-Time Verification',
        'Certified Auditor / Lead Auditor Professional Credentials',
        'Comprehensive Audit Reports with Gap Analysis & Corrective Action Plans',
        'Authorized Use of Official IEMA Certification & EGAC/IAF Accreditation Marks'
      ],
      industries: [
        'Engineering, Procurement & Construction (EPC)',
        'Telecommunications, IT & Financial Technology',
        'Manufacturing, Automotive & Industrial Goods',
        'Healthcare, Pharmaceuticals & Food Processing'
      ]
    }
  },
  {
    id: 'ndt-conventional-and-advanced',
    title: 'NDT Conventional and Advanced Technical Services',
    image: ndtServicesImg,
    fallbackImage: ndtServicesImg,
    excerpt: 'The field of non-destructive testing (NDT) comprises a vast array of analytical techniques that are applicable to a wide range of industries. These techniques can identify and assess defects and examine the properties of all kinds of materials and structures without causing any damage.',
    url: 'https://iemacert.com/ndt-conventional-and-advanced-technical-services/',
    badge: 'ASNT Level II & III Certified',
    fullContent: {
      leadParagraph: 'Comprehensive non-destructive examination and advanced flaw detection services performed by ASNT/PCN Level II and Level III specialists to evaluate structural and volumetric integrity without disrupting operations.',
      overview: 'Non-Destructive Testing (NDT) is fundamental to preventing catastrophic equipment failures in high-risk operating environments. IEMA Standards utilizes state-of-the-art diagnostic instruments—from phased array ultrasonics to digital radiography—to detect cracks, laminations, corrosion thinning, and welding defects in pipelines, pressure vessels, storage tanks, and offshore platforms.',
      keyAreas: [
        {
          title: 'Advanced Ultrasonic Flaw Detection (PAUT & TOFD)',
          desc: 'Phased Array Ultrasonic Testing (PAUT) and Time-Of-Flight Diffraction (TOFD) for high-resolution volumetric weld scanning, planar defect imaging, and precise flaw sizing.'
        },
        {
          title: 'Industrial Radiography (RT & CR/DR)',
          desc: 'X-Ray and Gamma-Ray (Ir-192, Se-75) radiography coupled with Computed Radiography for permanent high-contrast imaging of internal volumetric flaws.'
        },
        {
          title: 'Surface & Near-Surface Examination (MPI & DPI)',
          desc: 'Wet Fluorescent Magnetic Particle Inspection (WFMT) and Liquid Dye Penetrant testing to capture tight surface-breaking fatigue cracks.'
        },
        {
          title: 'Corrosion Mapping & Ultrasonic Thickness Gauging (UTG)',
          desc: 'Automated and manual high-temperature thickness surveys to map internal erosion/corrosion patterns across operating pipelines and vessels.'
        },
        {
          title: 'Magnetic Flux Leakage (MFL) Tank Bottom Scanning',
          desc: 'High-speed electromagnetic screening of aboveground storage tank bottom floor plates to identify underside and top-side pitting.'
        },
        {
          title: 'Positive Material Identification (PMI - XRF / OES)',
          desc: 'Handheld XRF and portable Optical Emission Spectrometry for on-site alloy chemistry verification and material grade certification.'
        }
      ],
      standards: [
        'ASNT SNT-TC-1A / ASNT ACCP / ISO 9712 NDT Certifications',
        'ASME Section V (Boiler and Pressure Vessel Code - NDT Examination)',
        'API 1104 (Welding of Pipelines and Related Facilities)',
        'AWS D1.1 (Structural Welding Code - Steel)',
        'BS EN ISO 17636 / BS EN ISO 11666 (Weld Radiography & Ultrasonics)'
      ],
      deliverables: [
        'Signed ASNT Level III Approved NDT Reports with Exact Defect Coordinates',
        'Digitized PAUT / TOFD Scan Data and High-Resolution Radiographic Images',
        'Remaining Wall Thickness Heatmaps and Minimum Allowable Thickness Surveys',
        'Asset Integrity Life Assessment & Fitness-for-Service (FFS) Recommendations'
      ],
      industries: [
        'Upstream & Downstream Oil & Gas / Cross-Country Pipelines',
        'Offshore Platforms, FPSOs, Jackets & Marine Vessels',
        'Power Utilities, Boilers & Steam Generation Facilities',
        'Heavy Structural Steel & Bridge Infrastructure'
      ]
    }
  },
  {
    id: 'api-inspection-and-integrity-testing',
    title: 'API Inspection and Integrity Testing',
    image: apiInspectionImg,
    fallbackImage: apiInspectionImg,
    excerpt: "API has specific standards for construction and repairs of piping, vessels, tanks and their appurtenances. These standards provide the best construction and repair methods. TIS provides inspection services that ensure inspection, construction, and repair of client's assets fall in line with specifications, codes, and standards",
    url: 'https://iemacert.com/service/api-inspection-and-integrity-testing/',
    badge: 'API 510 • API 570 • API 653 Certified',
    fullContent: {
      leadParagraph: 'Statutory in-service and out-of-service integrity assessments of pressurized equipment, process piping, and bulk storage tanks in compliance with American Petroleum Institute (API) codes.',
      overview: 'Maintaining the mechanical integrity of pressure equipment is vital for personnel safety, environmental protection, and regulatory compliance. Our certified API inspectors execute thorough internal and external examinations, calculate remaining corrosion rates, evaluate fitness-for-service, and certify repairs on pressurized vessels, process piping systems, and aboveground storage tanks.',
      keyAreas: [
        {
          title: 'API 510 Pressure Vessel In-Service Inspections',
          desc: 'Internal and external visual examinations, corrosion rate calculations, remaining service life estimation, and weld repair recertifications on operating pressure vessels.'
        },
        {
          title: 'API 570 Process Piping Inspection & Corrosion Loops',
          desc: 'Systematic inspection of process piping circuits, injection points, deadlegs, small-bore connections, and pipe supports to prevent containment loss.'
        },
        {
          title: 'API 653 Aboveground Storage Tank Integrity',
          desc: 'Tank bottom floor Magnetic Flux Leakage (MFL) scanning, shell roundness/settlement evaluations, annular plate inspections, and roof structure surveys.'
        },
        {
          title: 'API 579-1 / ASME FFS-1 Fitness-for-Service Analysis',
          desc: 'Level 1 and Level 2 engineering evaluations of flawed or corroded equipment to establish Maximum Allowable Working Pressure (MAWP) and safe operating limits.'
        },
        {
          title: 'API 580 / 581 Risk-Based Inspection (RBI) Program Development',
          desc: 'Formulating prioritized inspection plans based on likelihood and consequence of failure to optimize turnaround schedules.'
        }
      ],
      standards: [
        'API 510 (Pressure Vessel Inspection Code: In-service Inspection & Repair)',
        'API 570 (Piping Inspection Code: In-service Inspection of Piping Systems)',
        'API 653 (Tank Inspection, Repair, Alteration, and Reconstruction)',
        'API 579-1 / ASME FFS-1 (Fitness-For-Service Standards)',
        'API 571 (Damage Mechanisms Affecting Fixed Equipment in the Refining Industry)',
        'ASME Section VIII Div 1 & Div 2 (Pressure Vessels)'
      ],
      deliverables: [
        'Official API 510 / 570 / 653 Certified In-Service & Turnaround Inspection Reports',
        'Tank Floor Underside Corrosion MFL Scan Topography Maps',
        'Remaining Corrosion Rate & Service Life Calculations',
        'Statutory Recertification of Maximum Allowable Working Pressure (MAWP)'
      ],
      industries: [
        'Petroleum Refineries & Petrochemical Complexes',
        'Bulk Liquid Terminals & Tank Farms',
        'Gas Processing Plants & LNG Terminals',
        'Chemical Manufacturing & Heavy Process Utilities'
      ]
    }
  }
];

export const InspectionPage: React.FC<InspectionPageProps> = ({ 
  onNavigate,
  initialService 
}) => {
  const [selectedService, setSelectedService] = useState<InspectionService | null>(
    initialService ? INSPECTION_SERVICES.find(s => s.id === initialService) || null : null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenDetail = (service: InspectionService) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* SEO Title & Description */}
      <SeoHead
        title="Technical Inspection Services | IEMA Standards"
        description="Third-party technical inspection, API 510/570/653 tank integrity, vendor quality surveillance, and advanced NDT in Nigeria. Request an inspection proposal."
        canonicalPath="inspection"
        keywords={[
          'inspection company in nigeria for reliable services',
          'technical inspection and verification services',
          'technical certification and training',
          'ndt conventional and advanced technical services',
          'api inspection and integrity testing',
          'api 510 570 653 inspection nigeria',
          'third party inspection lagos port harcourt'
        ]}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'Technical Inspection & Verification', isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Main Container - Structured exactly like the screenshot in reference.jpg */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
        
        {/* White Card Container matching reference layout */}
        <div className="bg-white dark:bg-[#0B1E38] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-md border border-slate-200 dark:border-slate-800 space-y-8">
          
          {/* Section Header with Golden/Yellow Accent Bar */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E2A47] dark:text-white tracking-tight">
              Our Inspections
            </h1>
            <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
          </div>

          {/* 4-Card Responsive Grid - Layout strictly matching reference image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {INSPECTION_SERVICES.map((service) => (
              <div 
                key={service.id}
                className="bg-white dark:bg-[#081528] rounded-lg overflow-hidden border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Card Top Image */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h2 className="text-base sm:text-lg font-bold text-[#0E2A47] dark:text-white leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.excerpt}
                    </p>
                  </div>

                  {/* Read More Action Button with Yellow Circular Arrow */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleOpenDetail(service)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#0E2A47] dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors group/btn cursor-pointer py-1"
                    >
                      <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[11px] font-black group-hover/btn:scale-110 transition-transform shrink-0 shadow-sm">
                        ➔
                      </span>
                      <span className="font-bold underline decoration-amber-400 decoration-2 underline-offset-4">Read More</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* IN-DEPTH SERVICE DETAILS MODAL (Content from the 4 official URLs) */}
      {isModalOpen && selectedService && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white dark:bg-[#070F2B] w-full max-w-4xl rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-slate-900 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 bg-[#0E2A47] text-white flex items-center justify-between border-b border-slate-700 relative">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded">
                    {selectedService.badge}
                  </span>
                  <span className="text-xs text-slate-300">IEMA Standards Technical Service</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-serif text-white">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with full content from the provided URLs */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              
              {/* Modal Featured Image */}
              <div className="rounded-xl overflow-hidden h-48 sm:h-64 w-full bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm relative">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-semibold drop-shadow">
                  {selectedService.title} — Verified On-Site Inspection &amp; Certification
                </div>
              </div>

              {/* Lead Paragraph */}
              <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 p-4 rounded-xl text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-medium">
                {selectedService.fullContent.leadParagraph}
              </div>

              {/* Full Description / Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Service Overview &amp; Technical Scope:
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedService.fullContent.overview}
                </p>
              </div>

              {/* Key Technical Areas Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Core Capabilities &amp; Assessment Scopes:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedService.fullContent.keyAreas.map((area, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-800 space-y-1.5"
                    >
                      <div className="font-bold text-xs sm:text-sm text-[#0E2A47] dark:text-white flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{area.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                        {area.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applicable International Standards & Codes */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Engineering Standards, Codes &amp; Accreditations:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.fullContent.standards.map((std, idx) => (
                    <div 
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-100 dark:bg-[#0E2A47] text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 border border-slate-200 dark:border-slate-700"
                    >
                      <FileCode2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{std}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables and Reporting */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Inspection Deliverables &amp; Technical Dossiers:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {selectedService.fullContent.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Industrial Sectors */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                  Applicable Sectors:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedService.fullContent.industries.map((ind, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-slate-100 dark:bg-[#0E2A47] text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full font-medium border border-slate-200 dark:border-slate-700"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer with Quote & Contact CTAs */}
            <div className="p-4 bg-slate-100 dark:bg-[#0E2A47] border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Certified Third-Party Inspection &amp; Technical Verification Services
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleCloseModal}
                  className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Close
                </button>
                <a
                  href="https://crmops.iemacert.com/request-quote.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 sm:w-auto bg-[#DC2626] hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow"
                >
                  <span>Request Quote</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
