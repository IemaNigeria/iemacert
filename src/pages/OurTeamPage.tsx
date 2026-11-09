import React, { useState } from 'react';
import { 
  Users, Award, ShieldCheck, CheckCircle2, Mail, Phone, 
  Linkedin, Briefcase, GraduationCap, Scale, Lock, Globe, 
  ChevronRight, ArrowRight, FileCheck, Star, Sparkles, Building,
  Search, Filter, Laptop, UserCheck, HeartHandshake, FileSpreadsheet
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import emekaOkoyePhoto from '../assets/images/regenerated_image_1786971948359.jpg';
import raymondSmithPhoto from '../assets/images/regenerated_image_1786972154158.jpg';
import feyisikemiAdetulaPhoto from '../assets/images/regenerated_image_1786972429692.jpg';
import subairFathiaPhoto from '../assets/images/regenerated_image_1786972432381.jpg';
import chukwumaPhoto from '../assets/images/regenerated_image_1786972431496.jpg';
import adewunmiAdenijiPhoto from '../assets/images/regenerated_image_1786972430623.jpg';
import rachelOludarePhoto from '../assets/images/regenerated_image_1787579822488.png';
import fortuneAnthonyPhoto from '../assets/images/regenerated_image_1786973774379.jpg';
import boluwatifeAyobamiPhoto from '../assets/images/regenerated_image_1786973777936.jpg';
import estherOnovoPhoto from '../assets/images/regenerated_image_1786974916865.jpg';
import ihazaDeborahPhoto from '../assets/images/regenerated_image_1786974915031.jpg';
import imalaIkechukwuPhoto from '../assets/images/regenerated_image_1787836884819.jpg';
import oluwatoyinAbubakarPhoto from '../assets/images/oluwatoyin_abubakar.jpg';
import oyebodeDorcasPhoto from '../assets/images/regenerated_image_1787755721375.jpg';
import gamboDoraParyaPhoto from '../assets/images/regenerated_image_1789476014628.png';
import yanatamJacksonPhoto from '../assets/images/regenerated_image_1787579828421.jpg';

interface OurTeamPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export interface TeamMemberProfile {
  id: string;
  name: string;
  role: string;
  department: 'Executive Leadership' | 'Audit & Assessment Faculty' | 'HSE & Compliance' | 'Client Relations & Business' | 'Technology & Digital';
  qualifications: string[];
  bio: string;
  specializations: string[];
  image: string;
  fallbackImage?: string;
  email?: string;
  location?: string;
}

export const TEAM_PROFILES: TeamMemberProfile[] = [
  {
    id: 'team-raymond-smith',
    name: 'Raymond Smith',
    role: 'Founder & Chief Executive Officer (Director-General)',
    department: 'Executive Leadership',
    qualifications: [
      'Founder & CEO, IEMA Standards Limited',
      'Executive Conformity Assessment & Quality Governance Strategist',
      'EGAC & IAF Multilateral Recognition Liaison',
      'Director-General of Operations & Strategic Alliances'
    ],
    bio: 'Founder and Chief Executive Officer of IEMA Standards Limited. Leads corporate strategy, international accreditation governance under the Egyptian Accreditation Council (EGAC CAB 12203), and the expansion of accredited conformity assessment services across Nigeria, West Africa, and international markets.',
    specializations: ['Quality Infrastructure Governance', 'EGAC & IAF Conformity Frameworks', 'Strategic Corporate Expansion', 'International Alliances'],
    image: raymondSmithPhoto,
    email: 'raymond@iemacert.com',
    location: 'Lagos & Abuja, Nigeria'
  },
  {
    id: 'team-esther-onovo',
    name: 'Esther Onovo',
    role: 'Chief Finance Officer (CFO)',
    department: 'Executive Leadership',
    qualifications: [
      'Chief Finance Officer, IEMA Standards Limited',
      'Corporate Finance Strategy & Capital Management',
      'Fiscal Compliance & Resource Allocation Specialist',
      'Audit Fee Structure & Man-Day Pricing Governance'
    ],
    bio: 'Oversees global and regional financial management, audit budget frameworks, capital allocation, and statutory financial governance across all IEMA Standards Limited branch operations and accredited audit programs.',
    specializations: ['Corporate Financial Strategy', 'Audit Man-Day Budgeting', 'Fiscal Compliance', 'Resource Allocation'],
    image: estherOnovoPhoto,
    location: 'Lagos, Nigeria'
  },
  {
    id: 'team-rachel-oludare',
    name: 'Rachel Oludare',
    role: 'Certification Manager',
    department: 'Executive Leadership',
    qualifications: [
      'Certification Manager, IEMA Standards Limited',
      'Independent Certification Decision Authority (ISO/IEC 17021-1)',
      'Certified Lead Auditor (ISO 9001, ISO 14001, ISO 45001, ISO 22000)',
      'Audit Package Technical Reviewer & Impartiality Oversight Lead'
    ],
    bio: 'Heads the Certification Management division at IEMA Standards Limited. Entrusted with independent certification decision-making in strict alignment with ISO/IEC 17021-1, conducting comprehensive technical reviews of Stage 1 & Stage 2 audit dossiers, authorizing certificate issuances and renewals, managing surveillance cycles, and safeguarding absolute impartiality.',
    specializations: ['Certification Decision Governance', 'ISO/IEC 17021-1 Conformity', 'Audit Dossier Technical Review', 'Certificate Issuance & Scope Management'],
    image: rachelOludarePhoto,
    email: 'rachel@iemacert.com',
    location: 'Lagos & Abuja'
  },
  {
    id: 'team-oyebode-dorcas',
    name: 'Oyebode Dorcas Opeyemi',
    role: 'Legal and Compliance Officer',
    department: 'HSE & Compliance',
    qualifications: [
      'Legal & Compliance Officer, IEMA Standards Limited',
      'Corporate Legal Governance & Regulatory Compliance',
      'ISO Impartiality & Conformity Assessment Legalities',
      'Statutory & Contractual Compliance Oversight'
    ],
    bio: 'Oversees legal governance, statutory regulatory compliance, and contractual integrity at IEMA Standards Limited. Ensures strict alignment with international accreditation requirements, ethical audit conduct, and institutional risk management.',
    specializations: ['Legal Governance', 'Regulatory Compliance', 'Contractual Integrity', 'Accreditation Compliance'],
    image: oyebodeDorcasPhoto,
    fallbackImage: oyebodeDorcasPhoto,
    email: 'ope@iemacert.com',
    location: 'Lagos, Nigeria'
  },
  {
    id: 'team-ihaza-deborah',
    name: 'Ihaza Deborah',
    role: 'Lead Auditor',
    department: 'Audit & Assessment Faculty',
    qualifications: [
      'Certified Lead Auditor (ISO 22000, ISO 9001, HACCP)',
      'Food Safety Management Systems Lead Specialist',
      'Agricultural Value Chain & Cold-Chain Assessor',
      'NAFDAC & International Food Standards Conformity'
    ],
    bio: 'Specializes in Food Safety Management Systems (ISO 22000), HACCP verification, farm-to-table hygiene audits, edible oil packaging, and consumer goods processing facilities across Nigeria.',
    specializations: ['ISO 22000 Food Safety', 'HACCP Systems', 'FMCG & Packaging Auditing', 'ISO 9001 Quality'],
    image: ihazaDeborahPhoto,
    email: 'debbie@iemacert.com',
    location: 'Lagos, Nigeria'
  },
  {
    id: 'team-feyisikemi-adetula',
    name: 'Feyisikemi Adetula',
    role: 'Client Relationship Manager',
    department: 'Client Relations & Business',
    qualifications: [
      'Client Relationship Manager, IEMA Standards Limited',
      'Corporate Account Governance & Client Onboarding',
      'Audit Coordination & Stakeholder Liaison',
      'Certification Lifecycle & Renewal Specialist'
    ],
    bio: 'Serves as the primary bridge between client organizations and IEMA audit teams, guiding applicants smoothly through application submissions, audit planning, surveillance renewals, and certification deliveries.',
    specializations: ['Client Relationship Management', 'Audit Onboarding', 'Certification Lifecycle', 'Stakeholder Engagement'],
    image: feyisikemiAdetulaPhoto,
    email: 'feyi@iemacert.com',
    location: 'Lagos, Nigeria'
  },
  {
    id: 'team-fortune-anthony',
    name: 'Fortune S. Anthony',
    role: 'Business Analyst',
    department: 'Client Relations & Business',
    qualifications: [
      'Business Analyst, IEMA Standards Limited',
      'Enterprise Growth & Commercial Partnerships',
      'Tender & Pre-qualification Advisor (NIPEX, NNPC, MAN)',
      'Regional Market Expansion Strategist'
    ],
    bio: 'Drives commercial development, institutional partnerships, industry association engagements, and assists corporate clients in selecting suitable ISO standards for procurement and regulatory compliance.',
    specializations: ['Enterprise Business Development', 'NIPEX / NNPC Tender Alignment', 'Strategic Partnerships', 'Market Expansion'],
    image: fortuneAnthonyPhoto,
    email: 'fortune@iemacert.com',
    location: 'Lagos & Abuja'
  },
  {
    id: 'team-oluwatoyin-abubakar',
    name: 'Oluwatoyin Abubakar',
    role: 'Business Development Manager',
    department: 'Client Relations & Business',
    qualifications: [
      'Business Development Manager, IEMA Standards Limited',
      'Corporate Client Acquisition & Strategic Partnerships',
      'ISO Certification Advisory & Key Account Growth',
      'Management Systems Market Expansion Lead'
    ],
    bio: 'Drives enterprise client acquisition, corporate partnerships, and market expansion across Nigeria for IEMA Standards Limited. Guides organizations through the selection, readiness, and scheduling of accredited ISO certification and compliance audit services.',
    specializations: ['Business Development', 'ISO Certification Advisory', 'Key Account Management', 'Client Partnerships'],
    image: oluwatoyinAbubakarPhoto,
    fallbackImage: '/oluwatoyin_abubakar.jpg',
    email: 'toyin@iemacert.com',
    location: 'Lagos, Nigeria'
  },
  {
    id: 'team-gambo-dora-parya',
    name: 'Gambo Dora Parya',
    role: 'Training/Membership Coordinator',
    department: 'Client Relations & Business',
    qualifications: [
      'Training & Membership Coordinator, IEMA Standards Limited',
      'ISO Lead Auditor & Internal Auditor Course Coordination',
      'Professional Membership Registry & Accreditation Records',
      'Corporate Capacity Building & CPD Program Management'
    ],
    bio: 'Coordinates accredited training academies, ISO Lead Auditor courses, and professional membership registries at IEMA Standards Limited. Oversees candidate enrollments, continuous professional development (CPD) modules, and corporate training logistics across Nigeria.',
    specializations: ['Training Academy Coordination', 'Membership Registry Management', 'ISO Lead Auditor Logistics', 'Capacity Building & Workshops'],
    image: gamboDoraParyaPhoto,
    fallbackImage: '/gambo_dora_parya.jpg',
    email: 'dora@iemacert.com',
    location: 'Abuja & Lagos, Nigeria'
  },
  {
    id: 'team-boluwatife-ayobami',
    name: 'Boluwatife Ayobami',
    role: 'Financial Consultant',
    department: 'Client Relations & Business',
    qualifications: [
      'Financial Consultant, IEMA Standards Limited',
      'Audit Investment Analysis & Cost Optimization',
      'SME Certification Budgeting Specialist',
      'Management Systems ROI Evaluation'
    ],
    bio: 'Provides specialized financial consulting, cost-efficiency planning, and investment return modeling for SMEs and corporate enterprises adopting international management systems standards.',
    specializations: ['Financial Consulting', 'SME Audit Budgeting', 'ISO Implementation ROI', 'Cost Optimization'],
    image: boluwatifeAyobamiPhoto,
    email: 'boluwatife@iemacert.com',
    location: 'Lagos, Nigeria'
  },
  {
    id: 'team-yanatam-jackson',
    name: 'Yanatam Jackson',
    role: 'Accountant',
    department: 'Client Relations & Business',
    qualifications: [
      'Accountant, IEMA Standards Limited',
      'Financial Accounting & Statutory Tax Compliance',
      'Audit Billing, Treasury & Payroll Management',
      'Financial Reporting & Budgetary Controls'
    ],
    bio: 'Manages corporate financial accounting, general ledger operations, audit fee invoicing, treasury management, and fiscal compliance for IEMA Standards Limited. Ensures accurate financial reporting, billing integrity, and strict alignment with statutory accounting standards.',
    specializations: ['Financial Accounting', 'Corporate Tax & Compliance', 'Audit Billing & Invoicing', 'Budgetary Controls & Reconciliation'],
    image: yanatamJacksonPhoto,
    fallbackImage: '/yanatam_jackson.jpg',
    email: 'jackson@iemacert.com',
    location: 'Lagos, Nigeria'
  },
  {
    id: 'team-emeka-okoye',
    name: 'Emeka Okoye',
    role: 'Internal Auditor',
    department: 'Audit & Assessment Faculty',
    qualifications: [
      'Internal Quality Auditor, IEMA Standards Limited',
      'ISO/IEC 17021-1 & ISO 9001 Internal Reviewer',
      'Peer Review & Audit Report Quality Controller',
      'Corrective Action Tracking & Governance'
    ],
    bio: 'Responsible for internal quality control, periodic internal audits of IEMA certification procedures, auditor competency surveillance, and continuous improvement of accreditation records.',
    specializations: ['Internal Auditing', 'Quality Control of Audit Dossiers', 'Process Improvement', 'Accreditation Records'],
    image: emekaOkoyePhoto,
    email: 'emeka@iemacert.com',
    location: 'Lagos, Nigeria'
  },
  {
    id: 'team-subair-fathia',
    name: 'Subair Fathia',
    role: 'Associate Auditor',
    department: 'Audit & Assessment Faculty',
    qualifications: [
      'Associate Auditor, IEMA Standards Limited',
      'Quality & Compliance Records Specialist',
      'Clause-by-Clause Evaluation Assistant',
      'Audit Dossier Compilation & Verification'
    ],
    bio: 'Assists senior audit faculty in evaluating quality manuals, procedure registers, internal audit logs, and management review minutes for certification applicants.',
    specializations: ['Clause Evaluation', 'Quality Documentation', 'Audit Assistance', 'Compliance Verification'],
    image: subairFathiaPhoto,
    email: 'fathia@iemacert.com',
    location: 'Lagos, Nigeria'
  },
  {
    id: 'team-imala-ikechukwu',
    name: 'Imala Ikechukwu',
    role: 'Associate Auditor',
    department: 'Audit & Assessment Faculty',
    qualifications: [
      'Associate Auditor, IEMA Standards Limited',
      'Continuous Improvement & Quality Standards Researcher',
      'Operational Process Flow Assessor',
      'Audit Evidence & Records Management'
    ],
    bio: 'Focuses on operational continuous improvement, technical verification of audit records, and assisting lead auditors during on-site inspections for industrial clients.',
    specializations: ['Continuous Improvement', 'Process Verification', 'Audit Evidence Support', 'Quality Standards'],
    image: imalaIkechukwuPhoto,
    email: 'ik@iemacert.com',
    location: 'Lagos, Nigeria'
  },
  {
    id: 'team-chukwuma',
    name: 'Chukwuma',
    role: 'IT Specialist',
    department: 'Technology & Digital',
    qualifications: [
      'IT Specialist & Infrastructure Administrator',
      'Enterprise Systems & Cloud Infrastructure Security',
      'Digital Audit Tools & Secure Data Repository',
      'Network Security & NDPA Data Protection Controls'
    ],
    bio: 'Oversees enterprise IT operations, secure database systems, digital certificate repository management, cloud systems, and technical data protection controls at IEMA Standards Limited.',
    specializations: ['Enterprise IT Infrastructure', 'Network Security', 'Database Management', 'Digital Certificate Systems'],
    image: chukwumaPhoto,
    email: 'chukwuma@iemacert.com',
    location: 'Lagos, Nigeria'
  },
  {
    id: 'team-adewunmi-adeniji',
    name: 'Adewunmi Adeniji',
    role: 'Web Developer & Digital Systems Lead',
    department: 'Technology & Digital',
    qualifications: [
      'Web Developer & Digital Platforms Engineer',
      'Portal Architecture & Web Application Development',
      'Online Certificate Verification Integration (iiema.org)',
      'Frontend & Backend Systems Security'
    ],
    bio: 'Designs, develops, and maintains IEMA Standards Limited’s digital web platforms, client portals, online certificate registry integrations, and interactive audit quoting infrastructure.',
    specializations: ['Full-Stack Web Engineering', 'Certificate Registry Architecture', 'Client Portal Systems', 'UI/UX & Web Performance'],
    image: adewunmiAdenijiPhoto,
    email: 'adeniji@iemacert.com',
    location: 'Lagos, Nigeria'
  }
];

export const OurTeamPage: React.FC<OurTeamPageProps> = ({ onNavigate }) => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'team' | 'impartiality' | 'qualifications'>('team');

  const departments = [
    'All',
    'Executive Leadership',
    'Audit & Assessment Faculty',
    'HSE & Compliance',
    'Client Relations & Business',
    'Technology & Digital'
  ];

  const filteredMembers = TEAM_PROFILES.filter(m => {
    const matchesDept = selectedDept === 'All' || m.department === selectedDept;
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.specializations.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      m.bio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16 bg-slate-50 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
      
      {/* Dynamic SEO Meta */}
      <SeoHead
        title="Our Leadership & Lead Auditors | IEMA Standards"
        description="Meet the executive leaders, IRCA-certified lead auditors, compliance officers, and technical specialists at IEMA Standards Limited. Contact our audit team."
        canonicalPath="team"
        keywords={[
          'iema standards limited team',
          'iema standards staff',
          'raymond smith ceo iema standards',
          'iso lead auditors nigeria',
          'iema standards management team'
        ]}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'About Us', page: 'about' },
          { label: 'Leadership & Lead Auditors', isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Hero Section */}
      <section className="bg-[#070F2B] text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" 
            alt="IEMA Standards Team" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold border border-amber-500/30">
            <Users className="w-4 h-4 text-amber-400" />
            <span>Dedicated Staff &amp; Leadership Directory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            Our Team
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
            Meet the experienced executives, accredited lead auditors, compliance officers, client managers, and technical specialists powering <strong>IEMA Standards Limited</strong> across Nigeria and international markets.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-4xl">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl font-black text-amber-400 font-serif">{TEAM_PROFILES.length}</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">Core Staff &amp; Leads</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl font-black text-emerald-400 font-serif">100%</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">EGAC / IAF Impartiality</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl font-black text-blue-400 font-serif">3 Hubs</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">Lagos • Abuja • Port Harcourt</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl font-black text-purple-400 font-serif">3,200+</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">Audits Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Sub-Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('team')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'team'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-white dark:bg-[#0E2A47] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
              }`}
            >
              Our Team Members ({TEAM_PROFILES.length})
            </button>
            <button
              onClick={() => setActiveTab('impartiality')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'impartiality'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-white dark:bg-[#0E2A47] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
              }`}
            >
              Impartiality &amp; Governance Charter
            </button>
            <button
              onClick={() => setActiveTab('qualifications')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'qualifications'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-white dark:bg-[#0E2A47] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
              }`}
            >
              Competency Framework (ISO 19011)
            </button>
          </div>
        </div>
      </section>

      {/* TAB 1: TEAM DIRECTORY */}
      {activeTab === 'team' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
          
          {/* Filters & Search */}
          <div className="bg-white dark:bg-[#0E2A47] p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedDept === dept
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search staff by name or role..."
                className="pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-amber-500 w-full"
              />
            </div>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white dark:bg-[#0E2A47] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-amber-500"
              >
                <div>
                  {/* Photo */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (member.fallbackImage && target.src !== member.fallbackImage) {
                          target.src = member.fallbackImage;
                          return;
                        }
                        target.onerror = null;
                        target.src = 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=600';
                      }}
                    />
                  </div>

                  {/* Name, Role and Email */}
                  <div className="p-5 space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-black font-serif text-slate-900 dark:text-white leading-snug">
                        {member.name}
                      </h3>
                      
                      {/* Prominently Displayed Role */}
                      <div className="pt-0.5">
                        <span className="inline-block text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-200 dark:border-amber-500/30">
                          {member.role}
                        </span>
                      </div>
                      
                      <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        {member.department}
                      </div>
                    </div>

                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-amber-500 dark:hover:text-amber-400 flex items-center gap-1.5 break-all transition-colors pt-1"
                      >
                        <Mail className="w-3.5 h-3.5 shrink-0 text-amber-500" />
                        <span>{member.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-[#0E2A47] rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
              <Users className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">No team members match your search</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Try changing the department filter or search keyword.</p>
              <button
                onClick={() => { setSelectedDept('All'); setSearchQuery(''); }}
                className="bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>
      )}

      {/* TAB 2: IMPARTIALITY & GOVERNANCE CHARTER */}
      {activeTab === 'impartiality' && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
          <div className="bg-white dark:bg-[#0E2A47] rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6 text-slate-900 dark:text-white">
            <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-700 pb-4">
              <Scale className="w-8 h-8 text-amber-500 shrink-0" />
              <div>
                <h2 className="text-2xl font-black font-serif">Impartiality, Independence &amp; Ethics Policy</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Strict adherence to ISO/IEC 17021-1:2015 Clause 5.2</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Top management of <strong>IEMA STANDARDS LIMITED</strong> is fully committed to safeguarding impartiality in all management system certification activities. We recognize that commercial, financial, or interpersonal pressures must never compromise the objectivity of audit findings or certification decisions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 font-serif">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Separation of Certification and Consulting</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  IEMA Standards Limited does not provide management system consultancy, internal audit outsourcing to certified clients, or software development that creates conflict of interest. An organization that has received management system consulting from any related entity will not be audited for a minimum statutory cooling-off period of two (2) years.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 font-serif">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>Independent Impartiality Committee</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our certification decisions are governed under the oversight of an independent Impartiality Advisory Committee comprised of external stakeholders, industry association delegates, legal advisors, and customer representatives. The committee has unhindered authority to review any certificate grant or refusal.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 font-serif">
                  <FileCheck className="w-4 h-4 text-purple-500" />
                  <span>Auditor Code of Conduct &amp; Annual Disclosures</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  All auditors and technical experts execute legally binding conflict-of-interest declarations prior to every audit assignment. Any prior commercial relationship with a client within the past 24 months immediately disqualifies an auditor from participating in that audit.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 font-serif">
                  <Lock className="w-4 h-4 text-amber-500" />
                  <span>Client Confidentiality &amp; Data Security</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Information obtained during the audit process is classified as proprietary and confidential. In strict compliance with the Nigeria Data Protection Act (NDPA) and international standards, no client records or proprietary trade procedures are disclosed without prior written authorization.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAB 3: AUDITOR COMPETENCY FRAMEWORK */}
      {activeTab === 'qualifications' && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
          <div className="bg-white dark:bg-[#0E2A47] rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6 text-slate-900 dark:text-white">
            <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-700 pb-4">
              <GraduationCap className="w-8 h-8 text-amber-500 shrink-0" />
              <div>
                <h2 className="text-2xl font-black font-serif">Auditor Qualification &amp; Competency Framework</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Benchmarked against ISO 19011:2018 &amp; ISO/IEC 17021-1 Annex A</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every lead auditor deployed by IEMA Standards Limited undergoes a strict 4-stage competency qualification workflow before leading third-party conformity assessment missions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-sm">1</span>
                <div>
                  <h3 className="text-sm font-bold font-serif text-slate-900 dark:text-white">Formal Academic &amp; Technical Baseline</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    Minimum of a recognized Bachelor’s Degree in Engineering, Science, Information Technology, Law, or Business Administration, plus at least 5 years of verifiable sector experience in the targeted technical NACE codes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-sm">2</span>
                <div>
                  <h3 className="text-sm font-bold font-serif text-slate-900 dark:text-white">Accredited IRCA / Exemplar Global 5-Day Lead Auditor Course</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    Successful completion and examination of an accredited 40-hour Lead Auditor certification course for the relevant ISO standard (e.g. ISO 9001, ISO 14001, ISO 45001, ISO 27001).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-sm">3</span>
                <div>
                  <h3 className="text-sm font-bold font-serif text-slate-900 dark:text-white">Mentored Witness Audits &amp; Practical Logging</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    Completion of at least four (4) full on-site audits under the direct supervision of a designated Senior Lead Auditor, accumulating no fewer than 20 audit days across document review, opening meetings, clause-by-sampling, and closing presentations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-sm">4</span>
                <div>
                  <h3 className="text-sm font-bold font-serif text-slate-900 dark:text-white">Annual Continual Professional Development (CPD) &amp; Calibration</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    Mandatory completion of 20+ hours of annual CPD training on regulatory amendments, ISO standard revisions (e.g. Climate Action amendments), cybersecurity threats, and annual witness assessment evaluations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#070F2B] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-white">Work With Our Team</h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Connect directly with our leadership, lead auditors, and client support specialists to discuss your organization's ISO certification, audit timelines, and conformity requirements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-6 py-3 rounded-full text-xs sm:text-sm transition-all shadow-lg hover:scale-105"
            >
              <span>Request an Audit Quote</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="border border-slate-600 hover:border-amber-400 text-slate-200 hover:text-amber-400 font-bold px-5 py-3 rounded-full text-xs sm:text-sm transition-all"
            >
              <span>Contact Secretariat</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
