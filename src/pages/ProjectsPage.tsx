import React, { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, ZoomIn, 
  MapPin, CheckCircle2, Building2, ShieldCheck, 
  Layers, ExternalLink, ArrowRight, ChevronDown, ChevronUp
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ClientShowcaseSection } from '../components/ClientShowcaseSection';

// Regenerated project gallery images
import projectGalleryImg1 from '../assets/images/regenerated_image_1787148784888.jpg';
import projectGalleryImg2 from '../assets/images/regenerated_image_1787148787343.jpg';
import projectGalleryImg3 from '../assets/images/regenerated_image_1787148790065.jpg';
import projectGalleryImg4 from '../assets/images/regenerated_image_1787148793926.jpg';
import projectGalleryImg5 from '../assets/images/regenerated_image_1787148795095.jpg';
import projectGalleryImg6 from '../assets/images/regenerated_image_1787148796381.jpg';
import projectGalleryImg7 from '../assets/images/regenerated_image_1787148797573.jpg';
import projectGalleryImg8 from '../assets/images/regenerated_image_1787148799228.jpg';
import projectGalleryImg9 from '../assets/images/regenerated_image_1787148800075.jpg';
import projectGalleryImg10 from '../assets/images/regenerated_image_1787148801048.jpg';
import projectGalleryImg11 from '../assets/images/regenerated_image_1787148801724.jpg';

// Regenerated Ghana audit photos
import ghanaPhoto1 from '../assets/images/regenerated_image_1787149213782.jpg';
import ghanaPhoto2 from '../assets/images/regenerated_image_1787149215133.jpg';
import ghanaPhoto3 from '../assets/images/regenerated_image_1787149216750.jpg';
import ghanaPhoto4 from '../assets/images/regenerated_image_1787149217927.jpg';
import ghanaPhoto5 from '../assets/images/regenerated_image_1787149218617.jpg';
import ghanaPhoto6 from '../assets/images/regenerated_image_1787149220006.jpg';
import ghanaPhoto7 from '../assets/images/regenerated_image_1787150295496.jpg';
import ghanaPhoto8 from '../assets/images/regenerated_image_1787150299078.jpg';
import ghanaPhoto9 from '../assets/images/regenerated_image_1787150300329.jpg';
import ghanaPhoto10 from '../assets/images/regenerated_image_1787150301737.jpg';
import ghanaPhoto11 from '../assets/images/regenerated_image_1787150302918.jpg';
import ghanaPhoto12 from '../assets/images/regenerated_image_1787150303495.jpg';
import ghanaPhoto13 from '../assets/images/regenerated_image_1787150304200.jpg';

// Regenerated Calabar audit photos
import calabarPhoto1 from '../assets/images/regenerated_image_1787150305110.jpg';
import calabarPhoto2 from '../assets/images/regenerated_image_1787150305799.jpg';
import calabarPhoto3 from '../assets/images/regenerated_image_1787150306377.jpg';
import calabarPhoto4 from '../assets/images/regenerated_image_1787150306895.jpg';
import calabarPhoto5 from '../assets/images/regenerated_image_1787151494603.jpg';
import calabarPhoto6 from '../assets/images/regenerated_image_1787151495501.jpg';

// Regenerated Angola audit photos
import angolaPhoto1 from '../assets/images/regenerated_image_1787151496773.jpg';
import angolaPhoto2 from '../assets/images/regenerated_image_1787151498277.jpg';
import angolaPhoto3 from '../assets/images/regenerated_image_1787151499261.jpg';
import angolaPhoto4 from '../assets/images/regenerated_image_1787151499944.jpg';
import angolaPhoto5 from '../assets/images/regenerated_image_1787151500659.jpg';
import angolaPhoto6 from '../assets/images/regenerated_image_1787151501444.jpg';

// Regenerated Ikorodu audit photos
import ikoroduPhoto1 from '../assets/images/regenerated_image_1787151502427.jpg';
import ikoroduPhoto2 from '../assets/images/regenerated_image_1787151503159.jpg';
import ikoroduPhoto3 from '../assets/images/regenerated_image_1787151503966.jpg';
import ikoroduPhoto4 from '../assets/images/regenerated_image_1787151506359.jpg';
import ikoroduPhoto5 from '../assets/images/regenerated_image_1787151508493.jpg';
import ikoroduPhoto6 from '../assets/images/regenerated_image_1787151510013.jpg';

// Regenerated Agege audit photos
import agegePhoto1 from '../assets/images/regenerated_image_1787151512891.jpg';
import agegePhoto2 from '../assets/images/regenerated_image_1787151514086.jpg';

// Regenerated Dexterpro audit photos
import dexterPhoto1 from '../assets/images/regenerated_image_1787151514787.jpg';
import dexterPhoto2 from '../assets/images/regenerated_image_1787151515307.jpg';
import dexterPhoto3 from '../assets/images/regenerated_image_1787151516083.jpg';
import dexterPhoto4 from '../assets/images/regenerated_image_1787151517124.jpg';

// Regenerated Quantum Steels audit photos
import quantumPhoto1 from '../assets/images/regenerated_image_1787151517796.jpg';
import quantumPhoto2 from '../assets/images/regenerated_image_1787151518464.jpg';
import quantumPhoto3 from '../assets/images/regenerated_image_1787151519007.jpg';
import quantumPhoto4 from '../assets/images/regenerated_image_1787151519529.jpg';
import quantumPhoto5 from '../assets/images/regenerated_image_1787151520191.jpg';
import quantumPhoto6 from '../assets/images/regenerated_image_1787151520861.jpg';

// Regenerated Additional Project Gallery photos
import moreGalleryImg1 from '../assets/images/regenerated_image_1787153215170.jpg';
import moreGalleryImg2 from '../assets/images/regenerated_image_1787153216295.jpg';
import moreGalleryImg3 from '../assets/images/regenerated_image_1787153217545.jpg';
import moreGalleryImg4 from '../assets/images/regenerated_image_1787153218832.jpg';
import moreGalleryImg5 from '../assets/images/regenerated_image_1787153219958.jpg';
import moreGalleryImg6 from '../assets/images/regenerated_image_1787153221129.jpg';
import moreGalleryImg7 from '../assets/images/regenerated_image_1787153221960.jpg';
import moreGalleryImg8 from '../assets/images/regenerated_image_1787153223011.jpg';
import moreGalleryImg9 from '../assets/images/regenerated_image_1787153224907.jpg';
import moreGalleryImg10 from '../assets/images/regenerated_image_1787153225732.jpg';
import moreGalleryImg11 from '../assets/images/regenerated_image_1787153230866.jpg';
import moreGalleryImg12 from '../assets/images/regenerated_image_1787153231756.jpg';

interface ProjectsPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

interface PhotoItem {
  id: string;
  title: string;
  image: string;
  caption: string;
}

interface ProjectSection {
  id: string;
  header: string;
  location: string;
  summary: string;
  photos: PhotoItem[];
}

// 1. Top Main Gallery (12 items matching ourproject.jpg reference)
const MAIN_GALLERY_ITEMS: PhotoItem[] = [
  {
    id: 'mg-1',
    title: 'ISO Management System Audit & Closing Conference',
    image: projectGalleryImg1,
    caption: 'Lead auditors and client QHSE executive committee reviewing Stage 2 audit findings, process metrics, and compliance verifications in conference session.'
  },
  {
    id: 'mg-2',
    title: 'Stage 1 Documentation Review & Gap Assessment Session',
    image: projectGalleryImg2,
    caption: 'Technical evaluation of quality manuals, standard operating procedures (SOPs), risk registers, and regulatory compliance files.'
  },
  {
    id: 'mg-3',
    title: 'Multi-Disciplinary Technical Audit Review Meeting',
    image: projectGalleryImg3,
    caption: 'Cross-functional review of process flows, risk assessments, operational KPIs, and corrective action programs with department heads.'
  },
  {
    id: 'mg-4',
    title: 'Integrated Management System (IMS) Review Discussion',
    image: projectGalleryImg4,
    caption: 'Detailed stakeholder interview and evidence assessment covering ISO 9001 quality objectives and ISO 45001 occupational safety controls.'
  },
  {
    id: 'mg-5',
    title: 'Opening Conference & Audit Scope Definition Meeting',
    image: projectGalleryImg5,
    caption: 'Audit kickoff conference confirming audit criteria, sampled facility boundaries, interview schedules, and reporting deliverables.'
  },
  {
    id: 'mg-6',
    title: 'Fabrication Shop Heavy Piping & Spool Inspection',
    image: projectGalleryImg6,
    caption: 'Third-party welding inspection, dimensional verification, and material heat number traceability on high-pressure cryogenic process piping.'
  },
  {
    id: 'mg-7',
    title: 'Structural Steel & Industrial Bundled Pipe QA/QC Verification',
    image: projectGalleryImg7,
    caption: 'Quality surveillance, non-destructive testing witnessing, and surface coating profile checks on heavy structural steel assemblies.'
  },
  {
    id: 'mg-8',
    title: 'Manufacturing Plant & Processing Line Surveillance Tour',
    image: projectGalleryImg8,
    caption: 'On-site technical walkthrough evaluating active production lines, machine guarding, environmental discharge controls, and employee safety protocols.'
  },
  {
    id: 'mg-9',
    title: 'Materials Testing Laboratory & UTM Apparatus Calibration',
    image: projectGalleryImg9,
    caption: 'Destructive tensile strength testing, Charpy V-notch impact verification, and Universal Testing Machine (UTM) apparatus evaluation under ISO/IEC 17025.'
  },
  {
    id: 'mg-10',
    title: 'Industrial Facility Quality Audit Team Milestone Photo',
    image: projectGalleryImg10,
    caption: 'IEMA lead auditors, field technical inspectors, and client project management team celebrating successful Stage 2 audit completion.'
  },
  {
    id: 'mg-11',
    title: 'On-Site Technical Verification & Plant Management Milestone',
    image: projectGalleryImg11,
    caption: 'Statutory plant inspection and ISO conformity assessment milestone photo with resident engineers and facility leadership.'
  }
];

// Additional 12 Gallery Picture Slots (Revealed via 'View More' button)
const MORE_GALLERY_ITEMS: PhotoItem[] = [
  {
    id: 'more-1',
    title: 'Offshore Facility Structural Integrity Audit',
    image: moreGalleryImg1,
    caption: 'Field verification of heavy structural framework and integrity certification.'
  },
  {
    id: 'more-2',
    title: 'Pipeline Hydrotest & Pressure Gauge Surveillance',
    image: moreGalleryImg2,
    caption: 'Witnessing hydrostatic pressure testing and safety relief valve inspection.'
  },
  {
    id: 'more-3',
    title: 'Petrochemical Refined Products Sampling QA/QC',
    image: moreGalleryImg3,
    caption: 'Auditing chemical analytical laboratories and fuel testing calibration records.'
  },
  {
    id: 'more-4',
    title: 'Port Terminal Bulk Storage & Bunkering Inspection',
    image: moreGalleryImg4,
    caption: 'API tank integrity assessment and spill protection containment review.'
  },
  {
    id: 'more-5',
    title: 'Industrial Automated Packaging Line Hygiene Audit',
    image: moreGalleryImg5,
    caption: 'Hygiene and ISO 22000 food safety verification along automated high-speed lines.'
  },
  {
    id: 'more-6',
    title: 'Power Generation Turbine Hall Safety Compliance',
    image: moreGalleryImg6,
    caption: 'Workplace safety and thermal barrier evaluation in electrical generation plant.'
  },
  {
    id: 'more-7',
    title: 'Subsea Manifold Fabrication Welding NDT Review',
    image: moreGalleryImg7,
    caption: 'Ultrasonic inspection and radiographic weld examination for subsea structures.'
  },
  {
    id: 'more-8',
    title: 'Environmental Air Quality & Emissions Stack Monitoring',
    image: moreGalleryImg8,
    caption: 'ISO 14001 environmental emissions monitoring and stack filtration audit.'
  },
  {
    id: 'more-9',
    title: 'Crane Proof Load Test & Rigging Gear Examination',
    image: moreGalleryImg9,
    caption: 'Statutory certification of heavy dockside cranes and lifting tackle.'
  },
  {
    id: 'more-10',
    title: 'High-Voltage Switchgear Thermographic Survey',
    image: moreGalleryImg10,
    caption: 'Infrared thermography scan for hot-spot detection on power transformers.'
  },
  {
    id: 'more-11',
    title: 'Cleanroom Pharmaceutical Facility GMP Audit',
    image: moreGalleryImg11,
    caption: 'Sterile environment verification and HVAC HEPA filtration audit.'
  },
  {
    id: 'more-12',
    title: 'Executive QHSE Management Audit Debrief Conference',
    image: moreGalleryImg12,
    caption: 'Formal presentation of technical certification dossiers to corporate leadership.'
  }
];

// 2. Specific Project Photo Sections (At least 6 photos per section)
const PROJECT_SECTIONS: ProjectSection[] = [
  {
    id: 'audit-ghana',
    header: 'AUDIT INSPECTION IN GHANA',
    location: 'Accra & Takoradi Port, Ghana',
    summary: 'Comprehensive ISO 9001, ISO 14001, and ISO 45001 certification audits and marine logistics technical inspections conducted across offshore operational bases and port terminals in Ghana.',
    photos: [
      {
        id: 'ghana-1',
        title: 'Takoradi Marine Base Audit Opening Meeting',
        image: ghanaPhoto1,
        caption: 'Lead audit team reviewing marine supply vessel compliance and safety registers with offshore facility managers.'
      },
      {
        id: 'ghana-2',
        title: 'Port Quayside & Drydock Inspection',
        image: ghanaPhoto2,
        caption: 'On-site technical inspection of heavy lifting gear, cargo transit frames, and marine environmental controls.'
      },
      {
        id: 'ghana-3',
        title: 'Accra Corporate QHSE Verification Session',
        image: ghanaPhoto3,
        caption: 'Headquarters executive audit reviewing integrated management policies and subcontractor pre-qualification matrices.'
      },
      {
        id: 'ghana-4',
        title: 'Offshore Supply Vessel Lifting Gear & Crane Inspection',
        image: ghanaPhoto4,
        caption: 'Proof load testing witnessing and thorough examination of pedestal cranes, slings, and rigging shackles.'
      },
      {
        id: 'ghana-5',
        title: 'Environmental Discharge & Spill Containment Audit',
        image: ghanaPhoto5,
        caption: 'Field verification of oily water separators, bunded chemical storage areas, and marine pollution response kits.'
      },
      {
        id: 'ghana-6',
        title: 'Ghana Project Technical Certification Handover',
        image: ghanaPhoto6,
        caption: 'Closing exit conference presenting accredited audit certificates to West African offshore operations executive leadership.'
      },
      {
        id: 'ghana-7',
        title: 'Offshore Platform Pipeline Integrity Inspection',
        image: ghanaPhoto7,
        caption: 'Ultrasonic thickness testing and non-destructive examination on offshore production platform flowlines.'
      },
      {
        id: 'ghana-8',
        title: 'Petroleum Terminal Loading Manifold Inspection',
        image: ghanaPhoto8,
        caption: 'Pressure testing verification and flange torque verification on coastal bunkering loading arms.'
      },
      {
        id: 'ghana-9',
        title: 'Heavy Industrial Fabrication & Welding QA/QC',
        image: ghanaPhoto9,
        caption: 'Witnessing magnetic particle inspection (MPI) on offshore structural riser clamps.'
      },
      {
        id: 'ghana-10',
        title: 'Marine Vessel Engine Room HSSE Audit',
        image: ghanaPhoto10,
        caption: 'Occupational safety and environmental containment audit across marine auxiliary machinery spaces.'
      },
      {
        id: 'ghana-11',
        title: 'Takoradi Logistics Yard Lifting Equipment Inspection',
        image: ghanaPhoto11,
        caption: 'Thorough statutory inspection and proof load test witnessing on port heavy mobile cranes.'
      },
      {
        id: 'ghana-12',
        title: 'Ghana Environmental Monitoring & Effluent Sampling',
        image: ghanaPhoto12,
        caption: 'Field water quality sampling and emissions monitoring verification at Takoradi shore base.'
      },
      {
        id: 'ghana-13',
        title: 'Takoradi Port Audit Exit Debrief & Closing Conference',
        image: ghanaPhoto13,
        caption: 'Closing debrief with marine operations lead and compliance committee on ISO audit closure.'
      }
    ]
  },
  {
    id: 'audit-calabar',
    header: 'AUDIT INSPECTION IN CALABAR',
    location: 'Calabar Free Trade Zone (FTZ), Cross River State, Nigeria',
    summary: 'Statutory API 653 bulk hydrocarbon storage tank inspection, magnetic flux leakage (MFL) tank floor scanning, and ISO 14001 environmental conformity verification at Calabar FTZ.',
    photos: [
      {
        id: 'calabar-1',
        title: 'Calabar FTZ Bulk Storage Tank Field Inspection',
        image: calabarPhoto1,
        caption: 'Certified API 653 inspectors conducting out-of-service internal and external structural integrity scans on terminal tanks.'
      },
      {
        id: 'calabar-2',
        title: 'Tank Floor MFL Scanning & UT Thickness Gauging',
        image: calabarPhoto2,
        caption: 'Electromagnetic non-destructive testing of bottom annular plates and remaining service life calculations.'
      },
      {
        id: 'calabar-3',
        title: 'Terminal Management Audit Closing Conference',
        image: calabarPhoto3,
        caption: 'Formal presentation of technical inspection dossiers and environmental management audit findings to terminal directors.'
      },
      {
        id: 'calabar-4',
        title: 'Hydrocarbon Loading Gantry & Pipeline NDT Testing',
        image: calabarPhoto4,
        caption: 'Ultrasonic thickness measurements and visual inspection of high-pressure transfer piping and emergency shutoff valves.'
      },
      {
        id: 'calabar-5',
        title: 'Calabar Free Trade Zone Environmental Safety Audit',
        image: calabarPhoto5,
        caption: 'Reviewing storm water runoff interceptors, hazardous waste management registers, and atmospheric emissions monitoring logs.'
      },
      {
        id: 'calabar-6',
        title: 'Terminal Storage Integrity Certificate Presentation',
        image: calabarPhoto6,
        caption: 'IEMA lead inspection engineer presenting API 653 fitness-for-service inspection certification to terminal management.'
      }
    ]
  },
  {
    id: 'audit-angola',
    header: 'AUDIT INSPECTOIN IN ANGOLA',
    location: 'Luanda & Soyo Supply Hub, Angola',
    summary: 'Third-party technical verification, advanced Phased Array Ultrasonic Testing (PAUT) for subsea pipelines, and ISO management systems certification across deepwater energy operations in Angola.',
    photos: [
      {
        id: 'angola-1',
        title: 'Luanda Offshore Engineering Facility Audit',
        image: angolaPhoto1,
        caption: 'Lead auditors assessing technical procedures, welder performance qualifications, and offshore QA/QC governance.'
      },
      {
        id: 'angola-2',
        title: 'High-Pressure Subsea Pipeline Weld PAUT Examination',
        image: angolaPhoto2,
        caption: 'Volumetric ultrasonic flaw detection and sectorial scanning on heavy-wall duplex stainless steel pipeline welds.'
      },
      {
        id: 'angola-3',
        title: 'Soyo LNG Terminal Operational Review',
        image: angolaPhoto3,
        caption: 'Field surveillance and inspection of cryogenic process equipment and emergency shutdown systems.'
      },
      {
        id: 'angola-4',
        title: 'Deepwater Riser & Spool Dimensional Verification',
        image: angolaPhoto4,
        caption: 'Laser dimensional metrology, flange face profile verification, and protective cladding coating inspection.'
      },
      {
        id: 'angola-5',
        title: 'Luanda Technical QA/QC Team Briefing & Gap Review',
        image: angolaPhoto5,
        caption: 'Detailed walkthrough of ISO 29001 petroleum quality requirements and special process qualification protocols.'
      },
      {
        id: 'angola-6',
        title: 'Angola Energy Sector ISO Milestone Recognition',
        image: angolaPhoto6,
        caption: 'Executive certification handover following successful Stage 2 audit and independent committee endorsement.'
      }
    ]
  },
  {
    id: 'audit-ikorodu',
    header: 'Audit Inspection in Ikorodu',
    location: 'Ikorodu Industrial Corridor, Lagos State',
    summary: 'Comprehensive ISO 9001:2015 quality management and ISO 45001 occupational safety audit at major industrial manufacturing and processing facilities in Ikorodu.',
    photos: [
      {
        id: 'ikorodu-1',
        title: 'Ikorodu Plant Production Line Inspection',
        image: ikoroduPhoto1,
        caption: 'Detailed evaluation of raw material quality controls, continuous processing lines, and critical control point (CCP) logs.'
      },
      {
        id: 'ikorodu-2',
        title: 'Industrial Safety & Machine Guarding Audit',
        image: ikoroduPhoto2,
        caption: 'Physical walkthrough inspecting machinery safety interlocks, emergency stop systems, and PPE compliance.'
      },
      {
        id: 'ikorodu-3',
        title: 'Ikorodu Plant Management Audit Wrap-Up',
        image: ikoroduPhoto3,
        caption: 'Quality committee review of corrective actions, standard operating compliance, and ISO certificate milestone.'
      },
      {
        id: 'ikorodu-4',
        title: 'Raw Materials Ingress & Batch Quality Sampling',
        image: ikoroduPhoto4,
        caption: 'Auditing receiving inspection protocols, Certificate of Analysis (CoA) verification, and warehouse quarantine areas.'
      },
      {
        id: 'ikorodu-5',
        title: 'Electrical Substation & High-Voltage Safety Verification',
        image: ikoroduPhoto5,
        caption: 'Thermographic infrared electrical panel inspection, lockout/tagout (LOTO) procedures, and earthing pit resistance tests.'
      },
      {
        id: 'ikorodu-6',
        title: 'Ikorodu Manufacturing Facility ISO Certificate Handover',
        image: ikoroduPhoto6,
        caption: 'Celebration of Stage 2 audit certification success with plant operations engineers and executive management.'
      }
    ]
  },
  {
    id: 'audit-agege',
    header: 'Audit Inspection in Agege',
    location: 'Agege Commercial & Light Industrial District, Lagos State',
    summary: 'Quality management system surveillance, hygiene standards compliance, and workplace safety inspection for commercial and processing operations in Agege.',
    photos: [
      {
        id: 'agege-1',
        title: 'Facility Quality Assurance Audit & Inspection',
        image: agegePhoto1,
        caption: 'Auditors examining document control registers, quality inspection logs, and personnel training matrices.'
      },
      {
        id: 'agege-2',
        title: 'Operational Workflow & Storage Verification',
        image: agegePhoto2,
        caption: 'Inspection of storage facilities, batch traceability codes, and handling procedures in line with ISO standards.'
      }
    ]
  },
  {
    id: 'audit-dexterpro',
    header: 'Audit Inspection at Dexterpro Limited',
    location: 'Dexterpro Limited Operational Facilities, Nigeria',
    summary: 'Integrated Management System (IMS) audit covering ISO 9001 (Quality), ISO 14001 (Environment), and ISO 45001 (Health & Safety) for Dexterpro Limited.',
    photos: [
      {
        id: 'dexter-1',
        title: 'Dexterpro Limited Opening Conference',
        image: dexterPhoto1,
        caption: 'Audit team alignment on audit criteria, department sampling plans, and operational evidence requirements.'
      },
      {
        id: 'dexter-2',
        title: 'Technical Process & Quality Records Audit',
        image: dexterPhoto2,
        caption: 'Detailed verification of equipment calibration certificates, maintenance logs, and non-conformance resolution reports.'
      },
      {
        id: 'dexter-3',
        title: 'Dexterpro Executive Certification Recommendation',
        image: dexterPhoto3,
        caption: 'IEMA lead auditor presenting formal recommendation for accredited multi-standard ISO certification.'
      },
      {
        id: 'dexter-4',
        title: 'Field Contracting Equipment & Calibration Verification',
        image: dexterPhoto4,
        caption: 'Witnessing calibration validity of project field tools, torque wrenches, and electrical safety monitoring units.'
      }
    ]
  },
  {
    id: 'audit-quantum-steels',
    header: 'Audit Inspection at Quantum Steels Nigeria Limited',
    location: 'Quantum Steels Steel Rolling & Meltshop Facility, Ogun / Lagos State',
    summary: 'Heavy metallurgy quality assurance, structural steel mechanical testing verification, welding procedure auditing, and occupational health surveillance at Quantum Steels Nigeria Limited.',
    photos: [
      {
        id: 'quantum-1',
        title: 'Steel Meltshop & Rebar Rolling Mill QA/QC Inspection',
        image: quantumPhoto1,
        caption: 'Surveillance of molten steel chemistry control, billet heating parameters, and finished rebar tensile sampling.'
      },
      {
        id: 'quantum-2',
        title: 'Structural Steel Bundles & Mechanical Testing Surveillance',
        image: quantumPhoto2,
        caption: 'Laboratory verification of tensile strength, bend tests, and rib geometry in accordance with NIS 117 / BS 4449.'
      },
      {
        id: 'quantum-3',
        title: 'Quantum Steels Executive QHSE Audit Wrap-Up',
        image: quantumPhoto3,
        caption: 'Joint milestone session with Quantum Steels plant directors and IEMA Standards inspection team.'
      },
      {
        id: 'quantum-4',
        title: 'Universal Testing Machine (UTM) Tensile & Yield Test Witnessing',
        image: quantumPhoto4,
        caption: 'Witnessing high-capacity 1000kN servo-hydraulic UTM destructive tensile pull tests on high-yield structural rebar.'
      },
      {
        id: 'quantum-5',
        title: 'Billet Heating Furnace Temperature & Pyrometer Calibration',
        image: quantumPhoto5,
        caption: 'Verifying thermal instrumentation calibration and heat-by-heat metallurgical chemistry traceability logs.'
      },
      {
        id: 'quantum-6',
        title: 'Quantum Steels Mill Senior Management Quality Milestone',
        image: quantumPhoto6,
        caption: 'Formal presentation of metallurgical conformity assessment and accredited ISO certification dossier.'
      }
    ]
  }
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'gallery'>('all');
  const [showMoreGallery, setShowMoreGallery] = useState<boolean>(false);
  
  const displayedGalleryItems = showMoreGallery 
    ? [...MAIN_GALLERY_ITEMS, ...MORE_GALLERY_ITEMS] 
    : MAIN_GALLERY_ITEMS;

  // Lightbox state
  const [lightboxList, setLightboxList] = useState<PhotoItem[]>(displayedGalleryItems);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : lightboxList.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < lightboxList.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, lightboxList]);

  const openLightbox = (list: PhotoItem[], index: number) => {
    setLightboxList(list);
    setLightboxIndex(index);
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 transition-colors duration-200 pb-20">
      
      {/* SEO Metadata */}
      <SeoHead
        title="ISO Audits & Inspection Projects | IEMA Standards"
        description="View our portfolio of accredited ISO certification audits, factory inspections, and environmental assessments across Nigeria, Ghana, and West Africa."
        canonicalPath="projects"
        keywords={[
          'our projects iemacert',
          'audit inspection in ghana',
          'audit inspection in calabar',
          'audit inspectoin in angola',
          'audit inspection in ikorodu',
          'audit inspection in agege',
          'audit inspection dexterpro limited',
          'audit inspection quantum steels nigeria limited'
        ]}
      />

      {/* 1. TOP VIBRANT YELLOW BANNER (Strictly matching reference image layout) */}
      <section className="bg-[#FFD200] dark:bg-[#F5C400] text-slate-950 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-6xl mx-auto space-y-3">
          
          {/* Breadcrumb matching reference: Home > Our Projects */}
          <div className="text-xs text-slate-900/80 font-medium flex items-center gap-1.5">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:underline text-slate-950 font-semibold cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-800 font-bold">›</span>
            <span className="text-slate-900 font-semibold">Our Projects</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight font-sans">
            Our Projects
          </h1>

          {/* White underline bar matching reference */}
          <div className="w-12 h-1 bg-white"></div>

        </div>
      </section>

      {/* 2. MAIN WHITE CONTAINER & MAIN 12-PHOTO GALLERY */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        
        {/* Main Card Container matching ourproject.jpg */}
        <div className="bg-white dark:bg-[#0B1E38] rounded-xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-10">
          
          {/* Centered Filter Tabs matching reference (ALL | GALLERY ITEM) */}
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-xs ${
                activeFilter === 'all'
                  ? 'bg-[#1F2937] text-white shadow-sm'
                  : 'bg-white dark:bg-[#0E2A47] text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              ALL
            </button>

            <button
              onClick={() => setActiveFilter('gallery')}
              className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-xs ${
                activeFilter === 'gallery'
                  ? 'bg-[#1F2937] text-white shadow-sm'
                  : 'bg-white dark:bg-[#0E2A47] text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              GALLERY ITEM
            </button>
          </div>

          {/* 3-Column Photo Grid matching reference */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {MAIN_GALLERY_ITEMS.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(MAIN_GALLERY_ITEMS, index)}
                className="group relative bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200/80 dark:border-slate-700/80"
              >
                {/* Photo Image with smooth hover scale */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-200 dark:bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle hover overlay with expand icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-slate-950 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 3. DEDICATED PROJECT SECTIONS WITH SPECIFIED HEADERS & PICTURE SETS */}
        <div className="space-y-12">
          
          <div className="text-center space-y-2 pt-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2A47] dark:text-white font-serif">
              Field Audit &amp; Technical Inspection Deployments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Visual documentation of accredited ISO management audits, industrial surveillance, and asset integrity campaigns executed across client locations.
            </p>
          </div>

          {PROJECT_SECTIONS.map((section) => (
            <div 
              key={section.id}
              className="bg-white dark:bg-[#0B1E38] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
            >
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-500" />
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {section.location}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-[#0E2A47] dark:text-white tracking-tight uppercase">
                    {section.header}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full text-xs font-bold self-start sm:self-auto border border-amber-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Engagement</span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {section.summary}
              </p>

              {/* Photo Set Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {section.photos.map((photo, pIdx) => (
                  <div
                    key={photo.id}
                    onClick={() => openLightbox(section.photos, pIdx)}
                    className="group relative bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer border border-slate-200 dark:border-slate-700/80"
                  >
                    <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-200 dark:bg-slate-900">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                        <div className="w-9 h-9 rounded-full bg-white/90 text-slate-950 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <ZoomIn className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* 4. EXPANDABLE MORE PICTURES SECTION BEFORE FOOTER */}
        <div className="space-y-6 pt-4">
          
          {/* Expanded 12 Picture Boxes */}
          {showMoreGallery && (
            <div className="bg-white dark:bg-[#0B1E38] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <h3 className="text-lg sm:text-xl font-black text-[#0E2A47] dark:text-white tracking-tight uppercase">
                  Additional Project Inspection Gallery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Additional project inspection and quality verification documentation.
                </p>
              </div>

              {/* 12 Picture Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {MORE_GALLERY_ITEMS.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(MORE_GALLERY_ITEMS, index)}
                    className="group relative bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer border border-slate-200 dark:border-slate-700/80"
                  >
                    <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-200 dark:bg-slate-900">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                        <div className="w-9 h-9 rounded-full bg-white/90 text-slate-950 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <ZoomIn className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* View More Button */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => setShowMoreGallery((prev) => !prev)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0E2A47] hover:bg-[#1A365D] dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-slate-950 font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <span>{showMoreGallery ? 'Show Less' : 'View More'}</span>
              {showMoreGallery ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

        </div>

        {/* CLIENTS UNDER ACCREDITED AUDIT SURVEILLANCE */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <ClientShowcaseSection 
            onNavigate={onNavigate} 
            title="Clients &amp; Organizations Under Audit Surveillance"
            subtitle="Explore our active corporate audit and technical surveillance engagements across Nigerian financial institutions, energy majors, and infrastructure projects."
          />
        </div>

      </main>

      {/* 4. INTERACTIVE LIGHTBOX PHOTO VIEWER MODAL */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Modal Container */}
          <div 
            className="relative max-w-5xl w-full text-white rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close & Counter Bar */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
              <span className="text-xs text-white/70 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full font-medium">
                {lightboxIndex + 1} / {lightboxList.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-lg"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Preview Area with Navigation Arrows */}
            <div className="relative w-full flex items-center justify-center overflow-hidden max-h-[88vh]">
              <img
                src={lightboxList[lightboxIndex].image}
                alt={`Project photo ${lightboxIndex + 1}`}
                className="max-w-full max-h-[88vh] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Prev Button */}
              <button
                onClick={() => setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : lightboxList.length - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-lg"
                title="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={() => setLightboxIndex((prev) => (prev !== null && prev < lightboxList.length - 1 ? prev + 1 : 0))}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-lg"
                title="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
