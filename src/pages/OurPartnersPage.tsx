import React, { useState } from 'react';
import { 
  Globe, Award, ShieldCheck, CheckCircle2, Building2, 
  ExternalLink, ArrowRight, Handshake, FileText, Check, 
  Layers, FlaskConical, Scale, Lock, Sparkles, HelpCircle,
  Flame, Droplets, Compass, ShieldAlert, Cpu, Wrench
} from 'lucide-react';
import { 
  EGACLogo, NiNASLogo, GlobalACILogo, IAFLogo, NDPCLogo, ILACMRADataLogo, OGTANLogo, NNPCLogo, IBSTACLogo, NCDMBLogo,
  SONLogo, NESREALogo, LASEPALogo, FMELogo, CACLogo, OGEPALogo,
  ExxonMobilLogo, IRCALogo, ISPONLogo, NMDRPALogo, NUPRCLogo, ShellLogo, ASTMLogo, ChevronLogo, CORENLogo
} from '../components/Logos';
import { COMPANY_INFO } from '../data/mockData';
import { SeoHead } from '../components/SeoHead';
import { ClientShowcaseSection } from '../components/ClientShowcaseSection';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface OurPartnersPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export interface PartnerOrganization {
  id: string;
  name: string;
  shortName: string;
  category: 'Accreditation' | 'Energy & Oil/Gas' | 'Statutory & Environmental' | 'Technical Alliance';
  logoType: string;
  relationship: string;
  scope: string;
  description: string;
  signatoryBenefits: string[];
  website?: string;
  badge: string;
  colorTheme?: string;
}

export const PARTNER_LIST: PartnerOrganization[] = [
  // 1. EGAC
  {
    id: 'partner-egac',
    name: 'Egyptian Accreditation Council (EGAC)',
    shortName: 'EGAC',
    category: 'Accreditation',
    logoType: 'egac',
    relationship: 'Primary International Accreditation Body (ISO/IEC 17021-1 CAB 12203)',
    scope: 'ISO 9001, ISO 14001, ISO 45001, ISO 22000, ISO 27001, ISO 50001, ISO 22301',
    description: 'The Egyptian Accreditation Council is a Government Organization Affiliated to the Ministry of Trade and Industry and is a Non-Profitable Organization. Presidential Decree number 248/2006 has re-organized EGAC as the sole accreditation body in Egypt with full technical, administrative and financial independence for assessment and accreditation of conformity assessment bodies.',
    signatoryBenefits: [
      'IAF Multilateral Recognition Arrangement (MLA) signatory',
      'Certificates validated across all 110+ IAF member economies',
      'Direct listing on central international IAF CertSearch registry',
      'Legally accepted by international EPC contractors and ministries'
    ],
    website: 'https://egac.gov.eg',
    badge: 'Apex Accreditation Body'
  },
  // 2. NNPC
  {
    id: 'partner-nnpc',
    name: 'Nigerian National Petroleum Company Limited (NNPC)',
    shortName: 'NNPC Ltd',
    category: 'Energy & Oil/Gas',
    logoType: 'nnpc',
    relationship: 'National Energy Operator & Technical Procurement Conformity',
    scope: 'Upstream, Midstream & Downstream Quality Conformity & QA/QC',
    description: 'NNPC Limited is a dynamic global energy company with businesses and operations across the entire spectrum of the energy value chain. Formerly a government-owned corporation transformed to a limited liability company in July 2022, NNPC is the primary entity operating in the country’s petroleum industry, recognizing IEMA for quality surveillance and asset integrity audits.',
    signatoryBenefits: [
      'Vendor pre-qualification and technical audit compliance',
      'QA/QC inspection of oilfield pipelines, manifolds, and flowstations',
      'Nigerian Local Content alignment for petroleum service providers',
      'Assurance of asset integrity across crude export terminals'
    ],
    website: 'https://nnpcgroup.com',
    badge: 'National Energy Major'
  },
  // 3. NiNAS
  {
    id: 'partner-ninas',
    name: 'Nigeria National Accreditation System (NiNAS)',
    shortName: 'NiNAS',
    category: 'Accreditation',
    logoType: 'ninas',
    relationship: 'National Quality Infrastructure Partner (ISO/IEC 17011)',
    scope: 'Conformity Assessment & Laboratory Testing Development',
    description: 'The federal government of Nigeria accredits the Institute for Enterprise Management and Analytics as a conformity assessment body, fully authorized to provide certification, inspection and testing of all management systems in accordance with ISO/IEC 17021, covering all scope as contained in the International Accreditation Forum’s guidelines.',
    signatoryBenefits: [
      'Promotion of indigenous technical testing infrastructure',
      'Compliance with National Quality Policy (NQP) directives',
      'Facilitation of non-oil export conformity certifications',
      'Active participation in national technical standardization working groups'
    ],
    website: 'https://ninas.ng',
    badge: 'National Accreditation'
  },
  // 4. IAF
  {
    id: 'partner-iaf',
    name: 'International Accreditation Forum (IAF)',
    shortName: 'IAF MLA',
    category: 'Accreditation',
    logoType: 'iaf',
    relationship: 'Global Mutual Recognition Arrangement Signatory Network',
    scope: 'Management Systems Worldwide Equivalence ("Certified Once, Accepted Worldwide")',
    description: 'The International Accreditation Forum (IAF) is a worldwide association of accreditation bodies and other bodies interested in conformity assessment in the fields of management systems, products, processes, services, personnel, validation and verification and other similar programmes of conformity assessment.',
    signatoryBenefits: [
      'Eliminates trade barriers and redundant re-audits across borders',
      'Recognized by the World Trade Organization (WTO) TBT agreement',
      'Universal acceptance across European Union, USA, GCC, and APAC markets',
      'Uncompromising technical integrity and auditor calibration'
    ],
    website: 'https://iaf.nu',
    badge: 'Global Multilateral Treaty'
  },
  // 5. IRCA
  {
    id: 'partner-irca',
    name: 'International Register of Certificated Auditors (IRCA)',
    shortName: 'IRCA',
    category: 'Accreditation',
    logoType: 'irca',
    relationship: 'Global Auditor Registration & Competency Accreditation Body',
    scope: 'Lead Auditor Training Certification, CQI/IRCA Registration & Professional Competence',
    description: 'IRCA is the world’s leading professional body for management system auditors. Recognized globally for certifying auditor competence across ISO 9001, ISO 14001, ISO 45001, and ISO 27001 standards, IRCA registration represents the international gold standard in auditing credentials.',
    signatoryBenefits: [
      'Certified Lead Auditor courses validated by CQI and IRCA',
      'Global recognition of lead auditor qualification credentials',
      'Audit log verification and professional continuous development',
      'High-credibility third-party assessment integrity'
    ],
    website: 'https://quality.org',
    badge: 'Auditor Registration Body'
  },
  // 6. IBSTAC
  {
    id: 'partner-ibstac',
    name: 'International Bureau for Standard Accreditation (IBSTAC)',
    shortName: 'IBSTAC',
    category: 'Accreditation',
    logoType: 'ibstac',
    relationship: 'International Accreditation Partner for Conformity Assessment',
    scope: 'Standard Accreditation, Process Certification & Product Evaluation',
    description: 'IBSTAC is a United States based non-profit international bureau for standard accreditation. A leading accreditation service provider for certification bodies worldwide, partnering with private organizations, government entities, commercial businesses and professional associations to attain accreditation status for certifying products and processes against global standards.',
    signatoryBenefits: [
      'US-aligned independent standard benchmarking',
      'Cross-border conformity assessment accreditation',
      'Peer review panels and technical auditor validation',
      'High-credibility certification framework for global enterprises'
    ],
    website: 'https://ibstac.org',
    badge: 'International Accreditation'
  },
  // 6. NCDMB
  {
    id: 'partner-ncdmb',
    name: 'Nigerian Content Development and Monitoring Board (NCDMB)',
    shortName: 'NCDMB',
    category: 'Energy & Oil/Gas',
    logoType: 'ncdmb',
    relationship: 'Nigerian Local Content Regulatory Compliance & Verification',
    scope: 'Oil & Gas Local Content Certification & Statutory Authorizations',
    description: 'The Nigerian Content Development and Monitoring Board (NCDMB) is a Federal parastatal under the Ministry of Petroleum Resources. Core mandates include reviewing, assessing and approving Nigerian Content plans submitted by operators, and issuing Certificates of Authorization for approved projects and operations in the oil and gas industry.',
    signatoryBenefits: [
      'Compliance with NOGICD Act local capacity mandates',
      'Pre-qualification for major offshore and onshore EPC tenders',
      'Third-party technical competency and equipment verification',
      'Assisting indigenous contractors achieve international ISO accreditation'
    ],
    website: 'https://ncdmb.gov.ng',
    badge: 'Statutory Regulator'
  },
  // 7. NUPRC
  {
    id: 'partner-nuprc',
    name: 'Nigerian Upstream Petroleum Regulatory Commission (NUPRC)',
    shortName: 'NUPRC',
    category: 'Energy & Oil/Gas',
    logoType: 'nuprc',
    relationship: 'Upstream Petroleum Regulatory & Technical Compliance Authority',
    scope: 'Drilling, Production Platforms, Flowstations, Flowlines & Export Terminals',
    description: 'NUPRC holds statutory responsibility for ensuring compliance to petroleum laws, regulations and guidelines in the Upstream Oil and Gas Sector. This involves monitoring drilling sites, producing wells, offshore production platforms, flowstations, crude export terminals, and pipelines carrying crude oil and natural gas.',
    signatoryBenefits: [
      'Upstream technical safety and environmental compliance audits',
      'Pipeline integrity and hydrocarbon measurement validation',
      'Offshore facility safety management system verifications',
      'Conformity to Petroleum Industry Act (PIA) operational mandates'
    ],
    website: 'https://nuprc.gov.ng',
    badge: 'Upstream Regulator'
  },
  // 8. NMDPRA
  {
    id: 'partner-nmdpra',
    name: 'Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA)',
    shortName: 'NMDPRA',
    category: 'Energy & Oil/Gas',
    logoType: 'nmdpra',
    relationship: 'Midstream & Downstream Petroleum Regulatory & Technical Oversight',
    scope: 'Refineries, Petrochemicals, Gas Processing, Depots, Pipelines & Retail Networks',
    description: 'NMDPRA stimulates and creates an enabling environment driving sustainable development across Nigeria’s Midstream and Downstream value chain. Through effective regulatory oversight, NMDPRA accelerates economic growth while ensuring safe operations and equitable product distribution.',
    signatoryBenefits: [
      'Storage depot and tank farm statutory integrity inspection',
      'Gas processing and LPG plant safety management verification',
      'Product quality testing and calibration verification',
      'Refinery process unit inspection and pressure vessel testing'
    ],
    website: 'https://nmdpra.gov.ng',
    badge: 'Midstream & Downstream'
  },
  // 9. CHEVRON
  {
    id: 'partner-chevron',
    name: 'Chevron Corporation',
    shortName: 'Chevron',
    category: 'Energy & Oil/Gas',
    logoType: 'chevron',
    relationship: 'Global Energy Partner & Supply Chain Quality Alliance',
    scope: 'Operational Excellence Management System (OEMS) & Vendor QA/QC',
    description: 'Chevron Corporation is an American multinational energy corporation predominantly specializing in oil and gas. Operating in more than 180 countries, Chevron enforces stringent Operational Excellence Management System (OEMS) requirements for all certified vendor supply chains.',
    signatoryBenefits: [
      'Stringent QA/QC standards for fabrication and logistics suppliers',
      'ISO 9001 and ISO 45001 vendor compliance recognition',
      'Rigorous non-destructive testing and material verification',
      'Environmental stewardship aligning with ISO 14001'
    ],
    website: 'https://chevron.com',
    badge: 'Global Energy Major'
  },
  // 10. SHELL
  {
    id: 'partner-shell',
    name: 'Shell plc',
    shortName: 'Shell',
    category: 'Energy & Oil/Gas',
    logoType: 'shell',
    relationship: 'Energy Major Technical Standard & Vendor Audit Framework',
    scope: 'HSSE Control Framework, Asset Integrity & ISO Standard Systems',
    description: 'Shell plc is a British multinational oil and gas company headquartered in London. Shell operates world-class upstream and downstream facilities globally, demanding top-tier ISO 9001, ISO 14001, and ISO 45001 conformity from contractors and engineering partners.',
    signatoryBenefits: [
      'Integration with Shell HSSE Control Framework requirements',
      'Verification of contractor quality and safety management systems',
      'Pressure equipment and lifting inspection technical acceptance',
      'Independent third-party vendor audit acceptance'
    ],
    website: 'https://shell.com',
    badge: 'Global Energy Major'
  },
  // 11. SON
  {
    id: 'partner-son',
    name: 'Standards Organisation of Nigeria (SON)',
    shortName: 'SON',
    category: 'Statutory & Environmental',
    logoType: 'son',
    relationship: 'National Standards Body & Product Quality Regulation (MANCAP/SONCAP)',
    scope: 'Mandatory Standards, Product Quality Regulation & ISO Standard Adoption',
    description: 'The Standards Organisation of Nigeria (SON) is the sole statutory body vested with standardising and regulating product quality in Nigeria, established by Act No. 56 of 1971. SON is a full member of the International Organization for Standardization (ISO).',
    signatoryBenefits: [
      'Harmonization of Nigerian Industrial Standards (NIS) with ISO standards',
      'Product testing support for MANCAP and SONCAP conformity certification',
      'National standardization committees participation',
      'Promoting zero-defect quality across domestic manufacturing'
    ],
    website: 'https://son.gov.ng',
    badge: 'National Standards Body'
  },
  // 12. ASTM
  {
    id: 'partner-astm',
    name: 'ASTM International',
    shortName: 'ASTM',
    category: 'Technical Alliance',
    logoType: 'astm',
    relationship: 'Technical Standards & Materials Testing Specification Network',
    scope: 'Standard Specifications, Test Methods, Materials & Chemical Analysis',
    description: 'ASTM International, formerly known as American Society for Testing and Materials, is an international standards organization that develops and publishes voluntary consensus technical standards for a wide range of materials, products, systems, and services.',
    signatoryBenefits: [
      'Laboratory testing protocols calibrated to ASTM standards',
      'Metallurgical and chemical test report compliance',
      'Non-destructive testing procedures following ASTM E-series standards',
      'Global acceptance of material certification data'
    ],
    website: 'https://astm.org',
    badge: 'Technical Standards'
  },
  // 13. COREN
  {
    id: 'partner-coren',
    name: 'Council for the Regulation of Engineering in Nigeria (COREN)',
    shortName: 'COREN',
    category: 'Technical Alliance',
    logoType: 'coren',
    relationship: 'Engineering Practice Regulation & Technical Personnel Standards',
    scope: 'Engineering Quality Assurance, Plant Safety & Professional Practice',
    description: 'The Council for the Regulation of Engineering in Nigeria (COREN) is the statutory body regulating the practice of engineering in all aspects and ramifications. COREN ensures technical audits and industrial engineering inspections are supervised by registered professional engineers.',
    signatoryBenefits: [
      'Certified engineering professionals leading technical inspections',
      'Structural and mechanical integrity assessment validation',
      'Compliance with National Engineering Codes and Standards',
      'Continuous engineering personnel capacity development'
    ],
    website: 'https://coren.gov.ng',
    badge: 'Engineering Authority'
  },
  // 14. MOBIL
  {
    id: 'partner-mobil',
    name: 'ExxonMobil / Mobil',
    shortName: 'Mobil',
    category: 'Energy & Oil/Gas',
    logoType: 'mobil',
    relationship: 'Energy Multilateral Vendor QA/QC & Operations Quality',
    scope: 'Operations Integrity Management System (OIMS) & Technical Verification',
    description: 'Mobil is a petroleum brand owned and operated by American oil and gas corporation ExxonMobil. Known globally for its rigorous Operations Integrity Management System (OIMS), ExxonMobil enforces strict safety, health, environmental, and quality controls across all supplier networks.',
    signatoryBenefits: [
      'Conformance to ExxonMobil Operations Integrity Management System (OIMS)',
      'Subsea and topside equipment inspection protocol recognition',
      'Vendor pre-qualification quality audit acceptance',
      'Marine and pipeline safety certification alignment'
    ],
    website: 'https://exxonmobil.com',
    badge: 'Global Energy Major'
  },
  // 15. LASEPA
  {
    id: 'partner-lasepa',
    name: 'Lagos State Environmental Protection Agency (LASEPA)',
    shortName: 'LASEPA',
    category: 'Statutory & Environmental',
    logoType: 'lasepa',
    relationship: 'State Environmental Regulatory Compliance & Industrial Effluent Audits',
    scope: 'Environmental Impact Assessment (EIA), Effluent Discharge & Air Quality',
    description: 'LASEPA is a parastatal of the Lagos State Ministry of Environment carrying out statutory functions across zonal offices. LASEPA enforces state environmental standards, industrial air emissions, noise levels, and hazardous waste disposal across commercial hubs.',
    signatoryBenefits: [
      'Environmental Impact Assessment (EIA) review & approvals',
      'Periodic industrial effluent and emission laboratory sampling',
      'Compliance audit certification for manufacturing facilities',
      'Support for ISO 14001 environmental management system implementations'
    ],
    website: 'https://www.instagram.com/lasepaofficial/',
    badge: 'Environmental Regulator'
  },
  // 16. ISPON
  {
    id: 'partner-ispon',
    name: 'Institute of Safety Professionals of Nigeria (ISPON)',
    shortName: 'ISPON',
    category: 'Statutory & Environmental',
    logoType: 'ispon',
    relationship: 'Statutory Safety Practice Regulation & Occupational Health Standards',
    scope: 'Occupational Health & Safety (ISO 45001), HSE Competency & Certification',
    description: 'The Institute of Safety Professionals of Nigeria (ISPON) is Nigeria’s focal point for safety standards and regulations. It is the sole organization recognized by federal law to regulate the practice of the safety profession, as empowered by the ISPON Act 2014.',
    signatoryBenefits: [
      'Empowered by federal law under the ISPON Act 2014',
      'Validation of occupational health and safety training curricula',
      'Lead HSE auditor competency benchmarking',
      'Workplace hazard identification and ISO 45001 system integration'
    ],
    website: 'https://ispon.gov.ng',
    badge: 'Safety Authority'
  },
  // 17. NESREA
  {
    id: 'partner-nesrea',
    name: 'National Environmental Standards and Regulations Enforcement Agency (NESREA)',
    shortName: 'NESREA',
    category: 'Statutory & Environmental',
    logoType: 'nesrea',
    relationship: 'Apex Federal Environmental Enforcement Agency',
    scope: 'Federal Environmental Auditing, Extended Producer Responsibility (EPR) & Permits',
    description: 'NESREA was established in Nigeria in 2007 under the Federal Ministry of Environment to ensure environmental protection and sustainable development by enforcing environmental laws, regulations, and guidelines to promote a cleaner and safer environment.',
    signatoryBenefits: [
      'Mandatory Environmental Audit Report (EAR) certification',
      'Permits for industrial discharge, hazardous chemicals, and waste',
      'Extended Producer Responsibility (EPR) compliance frameworks',
      'Harmonization with ISO 14001 Environmental Management Systems'
    ],
    website: 'https://nesrea.gov.ng',
    badge: 'Apex Environmental Agency'
  },
  // 18. NDPC
  {
    id: 'partner-ndpc',
    name: 'Nigeria Data Protection Commission (NDPC)',
    shortName: 'NDPC',
    category: 'Statutory & Environmental',
    logoType: 'ndpc',
    relationship: 'Licensed Data Protection Compliance Organization (DPCO)',
    scope: 'Statutory NDPA Data Privacy Audits, DPIA & Annual Compliance Filings',
    description: 'The National Data Protection Commission was established in Nigeria to promote and enforce data protection principles, ensuring privacy, security, and lawful processing of personal information to safeguard individual rights and build trust in Nigeria’s digital economy.',
    signatoryBenefits: [
      'Official authority to conduct statutory NDPA privacy audits',
      'Preparation and filing of annual Data Protection Compliance Audit Reports (CAR)',
      'Delivery of Data Protection Impact Assessments (DPIA)',
      'Direct coordination with federal regulators on breach containment'
    ],
    website: 'https://ndpc.gov.ng',
    badge: 'Licensed DPCO Body'
  },
  // 20. ILAC
  {
    id: 'partner-ilac',
    name: 'International Laboratory Accreditation Cooperation (ILAC)',
    shortName: 'ILAC MRA',
    category: 'Accreditation',
    logoType: 'ilac',
    relationship: 'Laboratory Testing & Calibration Mutual Recognition Network',
    scope: 'ISO/IEC 17025 Testing & NDT Calibration Protocols',
    description: 'The International Laboratory Accreditation Cooperation was established in 1977 as an international network of accreditation bodies. ILAC promotes international acceptance of accredited laboratory and inspection results, facilitating global trade and ensuring reliability in testing services.',
    signatoryBenefits: [
      'Global acceptance of laboratory test reports and mill certificates',
      'Traceability to international measurement standards (BIPM / NIST)',
      'Verified equipment calibration routines and round-robin proficiency testing',
      'Zero dispute acceptance by global marine classification societies (DNV, BV, ABS)'
    ],
    website: 'https://ilac.org',
    badge: 'Laboratory MRA Network'
  },
  // 21. Global ACI
  {
    id: 'partner-globalaci',
    name: 'Global Accreditation Certification Institute (Global ACI)',
    shortName: 'Global ACI',
    category: 'Technical Alliance',
    logoType: 'globalaci',
    relationship: 'International Technical Calibration & Auditor Training Partner',
    scope: 'Auditor Benchmarking, Personnel Certification & Technical Standard Alignment',
    description: 'Global ACI provides international oversight, curriculum accreditation, and competency benchmarking for IEMA’s lead auditor training programs and cross-border conformity assessment projects.',
    signatoryBenefits: [
      'Standardized auditor certification syllabi matching ISO 19011',
      'Cross-border auditor exchange and witness assessment panels',
      'Periodic peer reviews and technical calibration workshops',
      'Joint industry certifications for specialized engineering niches'
    ],
    website: 'https://globalaci.org',
    badge: 'International Technical Network'
  },
  // 22. OGTAN
  {
    id: 'partner-ogtan',
    name: 'Oil & Gas Trainers Association of Nigeria (OGTAN)',
    shortName: 'OGTAN',
    category: 'Energy & Oil/Gas',
    logoType: 'ogtan',
    relationship: 'Oil & Gas Industry Training & Human Capital Capacity Development Alliance',
    scope: 'Energy Sector Technical Training, Local Content Human Capacity & Competency Certification',
    description: 'OGTAN membership is open to all bonafide Nigerian Companies engaged in training in the Oil, Gas & Energy Industries. OGTAN is the premier umbrella body for training service providers and consulting institutes in the Nigerian petroleum sector, established to build local capacity and human capital under Nigerian Content directives.',
    signatoryBenefits: [
      'OGTAN membership is open to all bonafide Nigerian Companies engaged in training in the Oil, Gas & Energy Industries',
      'Strategic alignment with Nigerian Content Development and Monitoring Board (NCDMB) human capital mandates',
      'Standardization and quality assurance of oilfield and energy industry training curricula',
      'Certified workforce competency development for upstream, midstream, and downstream operations'
    ],
    website: 'https://ogtan.org.ng',
    badge: 'Energy Training Association'
  }
];

export const OurPartnersPage: React.FC<OurPartnersPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [applicationModal, setApplicationModal] = useState<boolean>(false);
  const [partnerType, setPartnerType] = useState<string>('Consultancy Affiliate');
  const [partnerName, setPartnerName] = useState<string>('');
  const [partnerEmail, setPartnerEmail] = useState<string>('');
  const [partnerPhone, setPartnerPhone] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const categories = ['All', 'Accreditation', 'Energy & Oil/Gas', 'Statutory & Environmental', 'Technical Alliance'];

  const filteredPartners = selectedCategory === 'All'
    ? PARTNER_LIST
    : PARTNER_LIST.filter(p => p.category === selectedCategory);

  const renderLogo = (logoType: string, name: string, shortName: string) => {
    switch (logoType) {
      case 'ogtan':
        return <OGTANLogo className="w-16 h-16" />;
      case 'egac':
        return <EGACLogo className="w-16 h-16" />;
      case 'ninas':
        return <NiNASLogo className="w-16 h-16" />;
      case 'globalaci':
        return <GlobalACILogo className="w-16 h-16" />;
      case 'iaf':
        return <IAFLogo className="w-16 h-12" />;
      case 'ndpc':
        return <NDPCLogo className="h-12 w-auto" />;
      case 'ilac':
        return <ILACMRADataLogo className="w-16 h-16" />;
      case 'ibstac':
        return <IBSTACLogo className="w-16 h-16" />;
      case 'nnpc':
        return <NNPCLogo className="w-16 h-16" />;
      case 'ncdmb':
        return <NCDMBLogo className="w-16 h-16" />;
      case 'nuprc':
        return <NUPRCLogo className="w-16 h-16" />;
      case 'nmdpra':
        return <NMDRPALogo className="w-16 h-16" />;
      case 'chevron':
        return <ChevronLogo className="h-12 w-auto" />;
      case 'shell':
        return <ShellLogo className="h-12 w-auto" />;
      case 'mobil':
      case 'exxonmobil':
        return <ExxonMobilLogo className="h-10 w-auto" />;
      case 'son':
        return <SONLogo className="w-16 h-16" />;
      case 'astm':
        return <ASTMLogo className="h-12 w-auto" />;
      case 'coren':
        return <CORENLogo className="h-12 w-auto" />;
      case 'lasepa':
        return <LASEPALogo className="w-16 h-16" />;
      case 'ispon':
        return <ISPONLogo className="w-16 h-16" />;
      case 'nesrea':
        return <NESREALogo className="w-16 h-16" />;
      case 'irca':
        return <IRCALogo className="h-12 w-auto" />;
      default:
        return (
          <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-xs">
            {shortName}
          </div>
        );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16 bg-slate-50 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
      
      {/* SEO Head */}
      <SeoHead
        title="Accreditation Partners & Alliances | IEMA Standards"
        description="Explore our accreditations and institutional alliances: EGAC, IAF MLA, ILAC MRA, NDPC, NiNAS, FMEnv, NESREA, LASEPA, OGEPA, and COREN. Verify our credentials."
        canonicalPath="partners"
        keywords={[
          'accreditation partners nigeria',
          'egac iaf mla partners',
          'ndpc licensed dpco',
          'fme lasepa ogepa approved',
          'ninas ilac mra accreditation'
        ]}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'About Us', page: 'about' },
          { label: 'Our Partners & Alliances', isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Hero Section */}
      <section className="bg-[#070F2B] text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1600" 
            alt="International Accreditation Partnerships" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold border border-amber-500/30">
            <Globe className="w-4 h-4 text-amber-400" />
            <span>Global Accreditation Alliances &amp; Statutory Authority Licenses</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            Our Strategic Partners &amp; Accreditations
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
            Our conformity assessments, management system certifications, and laboratory inspection reports derive their worldwide authority from strategic affiliations with premier international accreditation councils and federal regulatory commissions.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                const el = document.getElementById('partners-grid');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-full text-xs sm:text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <span>Explore 20+ Partner Network</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setApplicationModal(true)}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <Handshake className="w-4 h-4 text-amber-400" />
              <span>Become an Affiliate Partner</span>
            </button>
          </div>
        </div>
      </section>

      {/* Global Recognition Framework Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#0E2A47] rounded-3xl p-8 lg:p-10 border border-slate-200 dark:border-slate-700/80 shadow-xl space-y-6 text-slate-900 dark:text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-50 dark:bg-amber-950/60 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-800">
                Multilateral Recognition Arrangement (MLA)
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 dark:text-white">
                The "Certified Once, Accepted Everywhere" Principle
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Under the International Accreditation Forum (IAF) Multilateral Recognition Arrangement (MLA), accreditation granted by EGAC to IEMA Standards Limited operates under mutual recognition treaties with accreditation bodies in over 110 countries. This ensures your certificate is accepted without re-audit by public and private procurement boards across Europe, the Americas, Middle East, and Asia.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center space-y-3">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <EGACLogo className="w-14 h-14" />
                <span className="text-2xl font-black text-slate-400">+</span>
                <IAFLogo className="w-16 h-10" />
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">IAF MLA Signatory Status</div>
              <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>110+ Signatory Member Economies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Partners Category Filter & Grid */}
      <section id="partners-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black font-serif text-slate-900 dark:text-white">
              Accredited Bodies &amp; Strategic Alliances ({PARTNER_LIST.length})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Select a category to inspect our governance frameworks, energy alliances, and statutory licenses.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0E2A47] dark:bg-amber-400 text-white dark:text-slate-950 shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Partners Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white dark:bg-[#0E2A47] rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:border-amber-500 text-slate-900 dark:text-white"
            >
              <div className="space-y-3.5">
                {/* Header with Logo and Title */}
                <div className="flex items-start gap-3.5">
                  <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                    {renderLogo(partner.logoType, partner.name, partner.shortName)}
                  </div>
                  <div className="space-y-1 min-w-0">
                    <span className="text-[9px] font-black bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-300 dark:border-amber-800 uppercase tracking-wider">
                      {partner.badge}
                    </span>
                    <h3 className="text-base font-black text-slate-900 dark:text-white font-serif group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                      {partner.name}
                    </h3>
                    <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 truncate">
                      {partner.relationship}
                    </p>
                  </div>
                </div>

                {/* Scope Badge */}
                <div className="bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5 text-[11px]">Authorized Scope:</span>
                  <span className="text-slate-600 dark:text-slate-400 font-mono text-[10px] leading-tight block">{partner.scope}</span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4">
                  {partner.description}
                </p>

                {/* Signatory Key Strengths */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/80">
                  <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                    Core Conformity Value
                  </div>
                  <ul className="space-y-1">
                    {partner.signatoryBenefits.slice(0, 3).map((b, bIdx) => (
                      <li key={bIdx} className="text-[11px] text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-end text-xs">
                <button
                  onClick={() => onNavigate('approach')}
                  className="font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-[11px]"
                >
                  Audit Process &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Affiliate Partner Modal */}
      {applicationModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0B1739] max-w-lg w-full rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-2xl space-y-6 animate-fadeIn text-slate-900 dark:text-white">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold font-serif">Become an Affiliate Partner</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Join our accredited international conformity alliance network.</p>
              </div>
              <button 
                onClick={() => setApplicationModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg">Application Submitted</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                  Thank you. Our partnership board will review your profile and contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setApplicationModal(false); setFormSubmitted(false); }}
                  className="mt-4 bg-[#0E2A47] dark:bg-amber-400 text-white dark:text-slate-950 px-6 py-2 rounded-xl text-xs font-bold"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Partnership Category</label>
                  <select 
                    value={partnerType} 
                    onChange={(e) => setPartnerType(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold"
                  >
                    <option value="Consultancy Affiliate">ISO Consultancy Affiliate</option>
                    <option value="Inspection Laboratory">Technical Testing &amp; Inspection Lab</option>
                    <option value="Training Academy">Academic / Training Academy</option>
                    <option value="Corporate Entity">Enterprise Certification Partner</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Organization / Contact Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Engineering Ltd"
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Corporate Email</label>
                    <input
                      type="email"
                      required
                      placeholder="info@company.com"
                      value={partnerEmail}
                      onChange={(e) => setPartnerEmail(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+234..."
                      value={partnerPhone}
                      onChange={(e) => setPartnerPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setApplicationModal(false)}
                    className="px-4 py-2 rounded-xl text-slate-500 font-bold hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#DC2626] hover:bg-red-700 text-white px-6 py-2.5 rounded-xl font-black shadow-md flex items-center gap-1.5"
                  >
                    <span>Submit Partner Application</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* OUR CERTIFIED CLIENTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClientShowcaseSection 
          onNavigate={onNavigate} 
          title="Certified Corporate Clients &amp; Audit Partners"
          subtitle="Explore the tier-1 financial institutions, energy majors, and infrastructure conglomerates that have partnered with IEMA Standards for accredited ISO certifications, technical testing, and regulatory conformity."
        />
      </section>

      {/* CTA Quote Request */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-[#070F2B] text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
          <div>
            <h3 className="text-xl font-bold font-serif">Looking for an Accredited ISO Certification Body in Nigeria?</h3>
            <p className="text-xs text-slate-300 mt-1">Get an internationally validated quote for your organization with full IAF MLA recognition.</p>
          </div>
          <a
            href="https://crmops.iemacert.com/request-quote.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DC2626] hover:bg-red-700 text-white px-6 py-3 rounded-full font-extrabold text-xs flex items-center gap-2 shrink-0 transition-colors shadow hover:scale-105"
          >
            <span>Request Certification Proposal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  );
};
