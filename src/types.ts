export interface IsoStandard {
  id: string;
  code: string; // e.g., "ISO 9001:2015"
  name: string; // Quality Management System
  slug?: string; // URL slug e.g. "quality-management-system-iso-9001"
  imageUrl?: string;
  badgeUrl?: string;
  category: 'Quality' | 'Environment & Energy' | 'Health & Safety' | 'Information Security' | 'Food & Medical' | 'Governance';
  shortDesc: string;
  fullDesc: string;
  keyBenefits: string[];
  auditSteps: string[];
  iconName: string;
  badgeColor: string;
  popular?: boolean;
  standardsFamily?: string;
  validityYears?: number;
  targetIndustries?: string[];
  coreClauses?: { number: string; title: string; desc: string }[];
  deliverables?: string[];
  prerequisites?: string[];
  faq?: { q: string; a: string }[];
  principles?: { number: number; title: string; desc: string }[];
  marketContext?: {
    qmsDefinition?: string;
    whyItMatters?: string;
    tenderAdvantage?: string;
    keyDetailedBenefits?: { title: string; desc: string }[];
    whyChooseUs?: string[];
    valueAddedPoints?: string[];
  };
}

export interface TrainingCourse {
  id: string;
  code: string;
  title: string;
  category: 'Lead Auditor' | 'Internal Auditor' | 'Awareness & Implementation' | 'Technical & Safety';
  duration: string;
  hours: number;
  cert: string;
  desc: string;
  fullOverview: string;
  mode: string;
  targetAudience: string[];
  prerequisites: string[];
  learningOutcomes: string[];
  modules: { moduleNumber: number; title: string; topics: string[] }[];
  schedule: { intake: string; format: string; feeUSD: string; feeNGN: string; seatsAvailable: number }[];
  featured?: boolean;
}

export interface InspectionDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  standardsApplied: string[];
  personnelQualifications: string[];
  equipmentUsed: string[];
  methodologies: { title: string; detail: string; applications: string }[];
  deliverables: string[];
  industriesServed: string[];
  statutoryRequirements?: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  subServices: {
    name: string;
    description: string;
    features: string[];
  }[];
  image: string;
}

export interface VerifiedCertificate {
  certificateNumber: string;
  organizationName: string;
  country: string;
  standard: string;
  scope: string;
  issueDate: string;
  expiryDate: string;
  status: 'Active' | 'Suspended' | 'Withdrawn' | 'Expired';
  accreditationBody: string; // EGAC / ISO 17021-1
  initialAuditDate: string;
  surveillanceDue: string;
}

export interface DownloadableResource {
  id: string;
  title: string;
  category: 'Handbook' | 'Policy' | 'Catalogue' | 'Profile' | 'Checklist';
  fileFormat: 'PDF' | 'DOCX';
  fileSize: string;
  description: string;
  updatedDate: string;
  downloadsCount: number;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  serviceProvided: string;
  challenge: string;
  solution: string;
  result: string;
  year: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  qualifications: string;
  bio: string;
  image: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  summary: string;
  content: string;
  image: string;
}

export interface QuoteRequestState {
  serviceType: string;
  selectedStandards: string[];
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  employeeCount: string;
  locationsCount: string;
  industrySector: string;
  targetTimeline: string;
  additionalNotes: string;
}
