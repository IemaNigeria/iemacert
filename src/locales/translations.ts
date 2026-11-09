// Comprehensive Multilingual Translations for IEMA Standards (iemacert.com)
// Supported Languages: English (EN), French (FR), Arabic (AR)

export type Language = 'EN' | 'FR' | 'AR';

export interface Translations {
  [key: string]: {
    EN: string;
    FR: string;
    AR: string;
  };
}

export const TRANSLATIONS: Translations = {
  // ----------------------------------------------------
  // Top Banner & General Header
  // ----------------------------------------------------
  'topbar.accredited': {
    EN: 'EGAC & IAF MLA Accredited Certification Body (CAB 12203)',
    FR: 'Organisme de certification accrédité EGAC et IAF MLA (CAB 12203)',
    AR: 'هيئة إصدار شهادات معتمدة من EGAC والمنتدى الدولي للاعتماد IAF MLA (CAB 12203)'
  },
  'topbar.verify': {
    EN: 'Verify Certificate',
    FR: 'Vérifier un certificat',
    AR: 'التحقق من الشهادة'
  },
  'topbar.whatsapp': {
    EN: 'WhatsApp Desk',
    FR: 'Bureau WhatsApp',
    AR: 'مكتب واتساب'
  },
  'topbar.phone': {
    EN: '+234 813 483 1027',
    FR: '+234 813 483 1027',
    AR: '+234 813 483 1027'
  },

  // ----------------------------------------------------
  // Navigation & Dropdowns
  // ----------------------------------------------------
  'nav.home': {
    EN: 'Home',
    FR: 'Accueil',
    AR: 'الرئيسية'
  },
  'nav.about': {
    EN: 'About Us',
    FR: 'À Propos',
    AR: 'من نحن'
  },
  'nav.aboutCompany': {
    EN: 'Company Profile',
    FR: "Profil de l'entreprise",
    AR: 'ملف الشركة'
  },
  'nav.aboutCompanyDesc': {
    EN: 'Who we are, our mission, vision and core values',
    FR: 'Qui nous sommes, notre mission, vision et valeurs',
    AR: 'من نحن، رسالتنا، رؤيتنا وقيمنا الجوهرية'
  },
  'nav.aboutTeam': {
    EN: 'Our Leadership & Auditors',
    FR: 'Notre direction et auditeurs',
    AR: 'قيادتنا والمدققون'
  },
  'nav.aboutTeamDesc': {
    EN: 'CQI/IRCA certified lead auditors and technical experts',
    FR: 'Auditeurs principaux et experts techniques certifiés CQI/IRCA',
    AR: 'مدققون رئيسيون وخبراء فنيون معتمدون دولياً'
  },
  'nav.aboutPartners': {
    EN: 'Accreditations & Alliances',
    FR: 'Accréditations et alliances',
    AR: 'الاعتمادات والشركاء'
  },
  'nav.aboutPartnersDesc': {
    EN: 'EGAC, IAF, ILAC, NiNAS, NDPC and institutional partners',
    FR: 'EGAC, IAF, ILAC, NiNAS, NDPC et partenaires institutionnels',
    AR: 'إيجاك، المنتدى الدولي، إيلاك والشركاء الرسميون'
  },
  'nav.aboutApproach': {
    EN: '4-Stage Methodology',
    FR: 'Méthodologie en 4 étapes',
    AR: 'منهجيتنا في 4 مراحل'
  },
  'nav.aboutApproachDesc': {
    EN: 'Our structured conformity assessment and audit roadmap',
    FR: "Notre feuille de route d'audit et d'évaluation de conformité",
    AR: 'خارطة طريق التدقيق وتقييم المطابقة المؤسسي'
  },
  'nav.aboutResources': {
    EN: 'Handbooks & Downloads',
    FR: 'Guides et téléchargements',
    AR: 'الكتيبات والتحميلات'
  },
  'nav.aboutResourcesDesc': {
    EN: 'Downloadable ISO handbooks, brochures and guides',
    FR: 'Guides ISO téléchargeables, brochures et documentations',
    AR: 'كتيبات الأيزو والمطبوعات الإرشادية للتحميل'
  },
  'nav.services': {
    EN: 'Our Services',
    FR: 'Nos Services',
    AR: 'خدماتنا'
  },
  'nav.certifications': {
    EN: 'Certifications',
    FR: 'Certifications',
    AR: 'برامج الشهادات'
  },
  'nav.testing': {
    EN: 'Inspection & Testing',
    FR: 'Inspection et essais',
    AR: 'التفتيش والاختبارات'
  },
  'nav.accreditation': {
    EN: 'Accreditation',
    FR: 'Accréditation',
    AR: 'الاعتماد الدولي'
  },
  'nav.training': {
    EN: 'Training',
    FR: 'Formations',
    AR: 'الدورات التدريبية'
  },
  'nav.blog': {
    EN: 'Blog',
    FR: 'Blog & Articles',
    AR: 'المدونة والمقالات'
  },
  'nav.contact': {
    EN: 'Contact',
    FR: 'Contact',
    AR: 'اتصل بنا'
  },
  'nav.getQuote': {
    EN: 'Get A Quote',
    FR: 'Demander un devis',
    AR: 'طلب عرض سعر'
  },
  'nav.search': {
    EN: 'Search',
    FR: 'Rechercher',
    AR: 'بحث'
  },
  'nav.selectLanguage': {
    EN: 'Language',
    FR: 'Langue',
    AR: 'اللغة'
  },

  // Services Menu Sub-items
  'nav.service.certification': {
    EN: 'ISO Certification Programs',
    FR: 'Programmes de certification ISO',
    AR: 'برامج شهادات الأيزو'
  },
  'nav.service.ecomark': {
    EN: 'EcoMark Certification Scheme',
    FR: 'Schéma de certification EcoMark',
    AR: 'برنامج شهادة إيكو مارك (EcoMark)'
  },
  'nav.service.pcidss': {
    EN: 'PCI DSS v4.0.1 Compliance & Audit',
    FR: 'Conformité et audit PCI DSS v4.0.1',
    AR: 'الامتثال لشهادة أمن بيانات بطاقات الدفع PCI DSS'
  },
  'nav.service.testing': {
    EN: 'Materials Testing & NDT',
    FR: 'Essais de matériaux et CND',
    AR: 'اختبارات المواد والفحص غير الإتلافي NDT'
  },
  'nav.service.inspection': {
    EN: 'Technical Inspection Services',
    FR: 'Services d’inspection technique',
    AR: 'خدمات التفتيش الفني والهندسي'
  },
  'nav.service.consulting': {
    EN: 'Consulting & Governance',
    FR: 'Conseil et gouvernance',
    AR: 'الاستشارات والحوكمة المؤسسية'
  },
  'nav.service.aml': {
    EN: 'Anti-Money Laundering (AML) Compliance',
    FR: 'Conformité anti-blanchiment (LCB/FT)',
    AR: 'الامتثال لمكافحة غسل الأموال (AML)'
  },
  'nav.service.dueDiligence': {
    EN: 'Due Diligence Audit Services',
    FR: 'Audits de diligence raisonnable',
    AR: 'خدمات تدقيق الفحص النافي للجهالة'
  },
  'nav.service.environmental': {
    EN: 'Environmental Consultancy & EIA',
    FR: 'Conseil en environnement et EIE',
    AR: 'الاستشارات البيئية ودراسات الأثر البيئي'
  },
  'nav.service.dataprotection': {
    EN: 'Data Protection Compliance (NDPC)',
    FR: 'Protection des données (NDPC)',
    AR: 'الامتثال لحماية البيانات الشخصية (NDPC)'
  },

  // ----------------------------------------------------
  // Hero Section
  // ----------------------------------------------------
  'hero.kicker': {
    EN: 'EGAC ACCREDITED • IAF MLA • CAB 12203',
    FR: 'ACCRÉDITÉ EGAC • IAF MLA • CAB 12203',
    AR: 'معتمد من EGAC • عضو IAF MLA • كود CAB 12203'
  },
  'hero.motto': {
    EN: '“Making excellence a habit”',
    FR: '« Faire de l’excellence une habitude »',
    AR: '« جعل التميز عادة مستمرة »'
  },
  'hero.titleLine1': {
    EN: 'Accredited ISO',
    FR: 'Organisme de Certification',
    AR: 'هيئة منح شهادات'
  },
  'hero.titleHighlight': {
    EN: 'Certification Body',
    FR: 'ISO Accrédité',
    AR: 'الأيزو المعتمدة دولياً'
  },
  'hero.titleLine2': {
    EN: 'in Nigeria & West Africa',
    FR: 'au Nigeria & en Afrique de l’Ouest',
    AR: 'في نيجيريا وغرب أفريقيا'
  },
  'hero.subtitle': {
    EN: 'IEMA Standards Limited delivers accredited ISO management system audits, mechanical & NDT testing, environmental permits, and statutory compliance with worldwide legal validity under EGAC and IAF MLA.',
    FR: 'IEMA Standards Limited fournit des audits de systèmes de management ISO accrédités, des essais mécaniques et CND, et la conformité réglementaire avec validité juridique mondiale sous EGAC et IAF MLA.',
    AR: 'تقدم شركة إيما ستاندردز ليمتد خدمات تدقيق أنظمة إدارة الأيزو المعتمدة، والاختبارات الميكانيكية وغير الإتلافية (NDT)، والامتثال البيئي والتنظيمي المعترف به عالمياً تحت مظلة إيجاك واتفاقية المنتدى الدولي للاعتماد IAF MLA.'
  },
  'hero.ctaQuote': {
    EN: 'Request Certification Quote',
    FR: 'Demander un devis de certification',
    AR: 'طلب عرض سعر للشهادة'
  },
  'hero.ctaVerify': {
    EN: 'Verify Issued Certificate',
    FR: 'Vérifier un certificat émis',
    AR: 'التحقق من صحة شهادة صادرة'
  },
  'hero.ctaApproach': {
    EN: 'Our 4-Stage Methodology',
    FR: 'Notre méthode en 4 étapes',
    AR: 'منهجيتنا في 4 مراحل'
  },
  'hero.ctaHandbook': {
    EN: 'Download ISO Handbook',
    FR: 'Télécharger le guide ISO',
    AR: 'تحميل كتيب شهادات الأيزو'
  },

  // ----------------------------------------------------
  // Hero Right Card: Official Accreditation & Approvals
  // ----------------------------------------------------
  'accredCard.title': {
    EN: 'Official Accreditation & Approvals',
    FR: 'Accréditations officielles et agréments',
    AR: 'الاعتمادات والتراخيص الرسمية'
  },
  'accredCard.subtitle': {
    EN: 'Verifiable International & Nigerian Regulatory Status',
    FR: 'Statut réglementaire vérifiable au Nigeria et à l’international',
    AR: 'اعتمادات رسمية قابلة للتحقق محلياً ودولياً'
  },
  'accredCard.egacName': {
    EN: 'EGAC Accreditation (CAB 12203)',
    FR: 'Accréditation EGAC (CAB 12203)',
    AR: 'اعتماد مجلس الاعتماد الوطني EGAC (CAB 12203)'
  },
  'accredCard.egacDesc': {
    EN: 'Egyptian Accreditation Council • ISO/IEC 17021-1',
    FR: 'Conseil égyptien d’accréditation • ISO/CEI 17021-1',
    AR: 'مجلس الاعتماد الوطني المصري • معيار ISO/IEC 17021-1'
  },
  'accredCard.primary': {
    EN: 'PRIMARY',
    FR: 'PRINCIPAL',
    AR: 'أساسي'
  },
  'accredCard.ninasName': {
    EN: 'NiNAS: Nigeria Accreditation System',
    FR: 'NiNAS : Système d’accréditation du Nigeria',
    AR: 'نظام الاعتماد الوطني النيجيري NiNAS'
  },
  'accredCard.ninasDesc': {
    EN: 'Nigeria Apex Quality Body • ISO/IEC 17011',
    FR: 'Organisme supérieur de qualité au Nigeria • ISO/CEI 17011',
    AR: 'الهيئة الوطنية العليا للجودة بالنيجيريا • ISO/IEC 17011'
  },
  'accredCard.national': {
    EN: 'NATIONAL',
    FR: 'NATIONAL',
    AR: 'وطني'
  },
  'accredCard.ndpcName': {
    EN: 'NDPC License (DPCO)',
    FR: 'Licence NDPC (DPCO)',
    AR: 'ترخيص مفوضية حماية البيانات NDPC'
  },
  'accredCard.ndpcDesc': {
    EN: 'Nigeria Data Protection Commission Audit Body',
    FR: 'Organisme d’audit de la Commission de protection des données',
    AR: 'هيئة تدقيق مرخصة لحماية البيانات الشخصية'
  },
  'accredCard.iafSignatory': {
    EN: 'IAF MLA Signatory',
    FR: 'Signataire IAF MLA',
    AR: 'عضو معاهدة IAF MLA'
  },
  'accredCard.ilacTesting': {
    EN: 'ILAC MRA Testing',
    FR: 'Essais ILAC MRA',
    AR: 'فحوصات ILAC MRA'
  },
  'accredCard.viewCredentials': {
    EN: 'View Full Accreditation Credentials & Scopes',
    FR: 'Consulter tous les certificats et portées d’accréditation',
    AR: 'عرض جميع اعتماداتنا ونطاقات الصلاحية الكاملة'
  },

  // ----------------------------------------------------
  // Statistics Banner
  // ----------------------------------------------------
  'stats.issued': {
    EN: 'Certificates Issued',
    FR: 'Certificats émis',
    AR: 'شهادة صادرة'
  },
  'stats.audits': {
    EN: 'Audits Completed',
    FR: 'Audits réalisés',
    AR: 'عملية تدقيق منجزة'
  },
  'stats.satisfaction': {
    EN: 'Client Satisfaction',
    FR: 'Satisfaction client',
    AR: 'نسبة رضا العملاء'
  },
  'stats.markets': {
    EN: 'Global Markets (IAF)',
    FR: 'Marchés mondiaux (IAF)',
    AR: 'دولة تعترف بالشهادة'
  },
  'stats.auditors': {
    EN: 'Certified Lead Auditors',
    FR: 'Auditeurs principaux certifiés',
    AR: 'مدقق رئيسي معتمد'
  },

  // ----------------------------------------------------
  // 30-Second Executive Overview
  // ----------------------------------------------------
  'overview.tag': {
    EN: 'Executive 30-Second Overview',
    FR: 'Synthèse exécutive en 30 secondes',
    AR: 'ملخص تنفيذي في 30 ثانية'
  },
  'overview.heading': {
    EN: 'Everything You Need to Know About IEMA Standards',
    FR: 'Tout ce que vous devez savoir sur IEMA Standards',
    AR: 'كل ما تحتاج لمعرفته عن شركة إيما ستاندردز'
  },
  'overview.quoteIn24h': {
    EN: 'Fast Proposal in 24h',
    FR: 'Proposition rapide sous 24h',
    AR: 'عرض أسعار سريع خلال 24 ساعة'
  },

  'overview.card1Title': {
    EN: 'Who We Are',
    FR: 'Qui nous sommes',
    AR: 'من نحن'
  },
  'overview.card1Text': {
    EN: 'An internationally accredited Conformity Assessment Body (EGAC CAB 12203) with IAF MLA worldwide equivalence, headquartered in Lekki, Lagos and Maitama, Abuja.',
    FR: 'Un organisme d’évaluation de la conformité accrédité au niveau international (EGAC CAB 12203) avec équivalence mondiale IAF MLA, siégeant à Lekki, Lagos et Maitama, Abuja.',
    AR: 'هيئة تقييم مطابقة معتمدة دولياً (EGAC CAB 12203) تحظى باعتراف دولي متبادل تحت معاهدة IAF MLA، ومقرها الرئيسي في ليكي بلاغوس وفرع مايتاما بأبوجا.'
  },
  'overview.card1Link': {
    EN: 'About Our Governance',
    FR: 'À propos de notre gouvernance',
    AR: 'حول حوكمتنا واعتماداتنا'
  },

  'overview.card2Title': {
    EN: 'What We Certify',
    FR: 'Ce que nous certifions',
    AR: 'الشهادات التي نمنحها'
  },
  'overview.card2Text': {
    EN: 'ISO 9001 (Quality), ISO 14001 (EMS), ISO 45001 (Safety), ISO 27001 (Cybersecurity), ISO 22000 (Food), PCI DSS v4.0.1, EcoMark, NDT testing, and API technical inspections.',
    FR: 'ISO 9001 (Qualité), ISO 14001 (Environnement), ISO 45001 (Sécurité), ISO 27001 (Cybersécurité), ISO 22000 (Agroalimentaire), PCI DSS v4.0.1, EcoMark, essais CND et inspections techniques API.',
    AR: 'أيزو 9001 (الجودة)، أيزو 14001 (البيئة)، أيزو 45001 (السلامة والصحة المهنية)، أيزو 27001 (أمن المعلومات)، أيزو 22000 (سلامة الغذاء)، شهادة PCI DSS v4.0.1، وفحوصات NDT.'
  },
  'overview.card2Link': {
    EN: 'Explore All Scopes',
    FR: 'Explorer tous nos domaines',
    AR: 'استكشف جميع البرامج والشهادات'
  },

  'overview.card3Title': {
    EN: 'Why Choose Us',
    FR: 'Pourquoi nous choisir',
    AR: 'لماذا تختارنا'
  },
  'overview.card3Text': {
    EN: 'Trusted by tier-1 banks (FCMB), energy operators (Bono Energy, Shoreline), and heavy industry (RCC, Sunflag, Quantum). Certificates recognized by NNPC, NCDMB, and across 110+ nations.',
    FR: 'Plébiscité par de grandes banques (FCMB), des acteurs de l’énergie (Bono, Shoreline) et l’industrie (RCC, Sunflag, Quantum). Certificats reconnus par NNPC, NCDMB et dans plus de 110 pays.',
    AR: 'موثوقون من كبرى البنوك (FCMB)، وشركات الطاقة والنفط (بونو إنرجي، شورلاين)، والمصانع الكبرى (RCC، صن فلاغ). شهادات معتمدة لدى NNPC وNCDMB وأكثر من 110 دولة.'
  },
  'overview.card3Link': {
    EN: 'View Clients & Alliances',
    FR: 'Voir nos clients et alliances',
    AR: 'عرض شركائنا وعملاءنا الكبار'
  },

  'overview.card4Title': {
    EN: 'How to Start',
    FR: 'Comment démarrer',
    AR: 'كيف تبدأ معنا'
  },
  'overview.card4Text': {
    EN: 'Simple 3-step pathway: (1) Submit company headcount & standard needed, (2) Receive formal transparent man-day proposal in 24 hours, (3) Schedule Stage 1 & Stage 2 audits.',
    FR: 'Parcours simple en 3 étapes : (1) Soumettez l’effectif et la norme, (2) Recevez une proposition transparente sous 24h, (3) Planifiez les audits d’étape 1 et 2.',
    AR: 'مسار مبسط في 3 خطوات: (1) أرسل حجم فريقك والمعيار المطلوب، (2) احصل على عرض أسعار رسمي شفاف خلال 24 ساعة، (3) جدول تدقيق المرحلة الأولى والثانية.'
  },
  'overview.card4Link': {
    EN: 'Request Proposal',
    FR: 'Demander une proposition',
    AR: 'طلب عرض سعر فوري'
  },

  // ----------------------------------------------------
  // Core Services Section & Tabs
  // ----------------------------------------------------
  'solutions.tag': {
    EN: 'Accredited Technical Solutions',
    FR: 'Solutions techniques accréditées',
    AR: 'حلول فنية وتقييم مطابقة معتمد'
  },
  'solutions.heading': {
    EN: 'Conformity Assessment & Regulatory Services',
    FR: 'Évaluation de conformité et services réglementaires',
    AR: 'خدمات تقييم المطابقة والامتثال التنظيمي'
  },
  'solutions.subheading': {
    EN: 'Delivering end-to-end assurance from accredited management systems certification to non-destructive testing, environmental audits, and cybersecurity.',
    FR: 'Assurer une conformité complète, de la certification de systèmes de management aux essais non destructifs, audits environnementaux et cybersécurité.',
    AR: 'نقدم حلولاً متكاملة من منح شهادات أنظمة الإدارة المعتمدة دولياً إلى الفحوصات غير الإتلافية والدراسات البيئية وأمن المعلومات.'
  },
  'solutions.tabCert': {
    EN: 'Certification',
    FR: 'Certification',
    AR: 'منح الشهادات'
  },
  'solutions.tabEcoMark': {
    EN: 'EcoMark Scheme',
    FR: 'Programme EcoMark',
    AR: 'برنامج إيكو مارك'
  },
  'solutions.tabPciDss': {
    EN: 'PCI DSS v4.0.1',
    FR: 'PCI DSS v4.0.1',
    AR: 'شهادة PCI DSS'
  },
  'solutions.tabTesting': {
    EN: 'Testing & NDT',
    FR: 'Essais & CND',
    AR: 'الاختبارات وNDT'
  },
  'solutions.tabInspection': {
    EN: 'Inspection',
    FR: 'Inspection',
    AR: 'التفتيش الفني'
  },
  'solutions.tabEnvironmental': {
    EN: 'Environmental',
    FR: 'Environnement',
    AR: 'البيئة والاستدامة'
  },
  'solutions.tabCompliance': {
    EN: 'Compliance & AML',
    FR: 'Conformité & AML',
    AR: 'الامتثال وغسل الأموال'
  },

  // ----------------------------------------------------
  // Popular Standards Cards
  // ----------------------------------------------------
  'standards.title': {
    EN: 'Our Accredited Management System Programs',
    FR: 'Nos programmes de systèmes de management accrédités',
    AR: 'برامج أنظمة الإدارة المعتمدة لدينا'
  },
  'standards.subtitle': {
    EN: 'Rigorous conformity assessments designed for enterprises seeking operational excellence and international tender eligibility.',
    FR: 'Des évaluations rigoureuses pour les entreprises visant l’excellence opérationnelle et les appels d’offres mondiaux.',
    AR: 'تقييمات مطابقة مهنية دقيقة مصممة للشركات الساعية للتميز التشغيلي والتأهل للمناقصات العالمية.'
  },
  'standards.viewAll': {
    EN: 'View All 18 Certification Standards',
    FR: 'Voir l’ensemble des 18 normes',
    AR: 'عرض جميع المعايير الـ 18 المعتمدة'
  },
  'standards.learnMore': {
    EN: 'Learn More & Scope',
    FR: 'En savoir plus et périmètre',
    AR: 'التفاصيل ونطاق الشهادة'
  },

  'iso.9001.name': {
    EN: 'ISO 9001:2015',
    FR: 'ISO 9001:2015',
    AR: 'أيزو 9001:2015'
  },
  'iso.9001.title': {
    EN: 'Quality Management Systems (QMS)',
    FR: 'Systèmes de management de la qualité (SMQ)',
    AR: 'نظام إدارة الجودة'
  },
  'iso.9001.desc': {
    EN: 'The global benchmark for customer satisfaction, process optimization, risk-based thinking, and international contract qualification.',
    FR: 'La référence mondiale pour la satisfaction client, l’optimisation des processus et la qualification aux marchés internationaux.',
    AR: 'المعيار العالمي الأول لرضا العملاء وتحسين العمليات وإدارة المخاطر والتأهل للمناقصات الدولية.'
  },

  'iso.14001.name': {
    EN: 'ISO 14001:2015',
    FR: 'ISO 14001:2015',
    AR: 'أيزو 14001:2015'
  },
  'iso.14001.title': {
    EN: 'Environmental Management Systems (EMS)',
    FR: 'Systèmes de management environnemental (SME)',
    AR: 'نظام الإدارة البيئية'
  },
  'iso.14001.desc': {
    EN: 'Systematic environmental stewardship, statutory emissions compliance, resource efficiency, and ESG tender credentials.',
    FR: 'Gestion environnementale systématique, conformité des émissions, efficacité des ressources et crédibilité ESG.',
    AR: 'إدارة بيئية منهجية، والامتثال للانبعاثات وخفض الهدر، وتعزيز معايير الاستدامة البيئية والحوكمة ESG.'
  },

  'iso.45001.name': {
    EN: 'ISO 45001:2018',
    FR: 'ISO 45001:2018',
    AR: 'أيزو 45001:2018'
  },
  'iso.45001.title': {
    EN: 'Occupational Health & Safety (OH&S)',
    FR: 'Santé et sécurité au travail (SST)',
    AR: 'نظام إدارة السلامة والصحة المهنية'
  },
  'iso.45001.desc': {
    EN: 'Proactive hazard mitigation, workplace accident reduction, workforce well-being, and oil & gas pre-qualification compliance.',
    FR: 'Prévention des risques, réduction des accidents du travail, bien-être des équipes et conformité préalable pétrole & gaz.',
    AR: 'تقليل حوادث العمل والحد من المخاطر التشغيلية، وضمان سلامة الكوادر، والتأهيل المسبق لشركات النفط والغاز.'
  },

  'iso.27001.name': {
    EN: 'ISO/IEC 27001:2022',
    FR: 'ISO/CEI 27001:2022',
    AR: 'أيزو 27001:2022'
  },
  'iso.27001.title': {
    EN: 'Information Security & Cybersecurity',
    FR: 'Sécurité de l’information & cybersécurité',
    AR: 'نظام إدارة أمن المعلومات والبيانات'
  },
  'iso.27001.desc': {
    EN: 'Comprehensive defense for digital assets, cloud infrastructure, and customer data, aligned with global cybersecurity frameworks.',
    FR: 'Protection complète des actifs numériques, des infrastructures cloud et des données clients selon les normes mondiales.',
    AR: 'حماية شاملة للأصول الرقمية والبيانات السحابية وسجلات العملاء المتوافقة مع أحدث معايير الأمن السيبراني.'
  },

  'iso.22000.name': {
    EN: 'ISO 22000:2018 / HACCP',
    FR: 'ISO 22000:2018 / HACCP',
    AR: 'أيزو 22000:2018 / الهاسب HACCP'
  },
  'iso.22000.title': {
    EN: 'Food Safety Management Systems (FSMS)',
    FR: 'Management de la sécurité des denrées alimentaires',
    AR: 'نظام إدارة سلامة الغذاء والصناعات الغذائية'
  },
  'iso.22000.desc': {
    EN: 'Farm-to-fork contamination controls, NAFDAC regulatory alignment, and international food export eligibility.',
    FR: 'Contrôle des contaminations de la ferme à l’assiette, alignement NAFDAC et éligibilité aux exportations alimentaires.',
    AR: 'التحكم الدقيق في مخاطر التلوث من المزرعة للمستهلك، والامتثال لمعايير NAFDAC، والتأهل للتصدير الغذائي الدولي.'
  },

  'iso.22301.name': {
    EN: 'ISO 22301:2019',
    FR: 'ISO 22301:2019',
    AR: 'أيزو 22301:2019'
  },
  'iso.22301.title': {
    EN: 'Business Continuity Management (BCMS)',
    FR: 'Management de la continuité d’activité',
    AR: 'نظام إدارة استمرارية الأعمال والتعافي'
  },
  'iso.22301.desc': {
    EN: 'Robust operational resilience to withstand disruptions, power failures, supply chain shocks, and crisis scenarios.',
    FR: 'Résilience opérationnelle face aux pannes, ruptures de chaînes d’approvisionnement et situations de crise.',
    AR: 'ضمان مرونة المنشأة واستمرار عملياتها التشغيلية الحيوية عند حدوث الأزمات وانقطاع الإمدادات والخدمات.'
  },

  // ----------------------------------------------------
  // 4-Stage Conformity Assessment Methodology
  // ----------------------------------------------------
  'methodology.tag': {
    EN: 'Our Structured 4-Stage Audit Roadmap',
    FR: 'Notre feuille de route d’audit en 4 étapes',
    AR: 'خارطة طريق التدقيق المنهجية في 4 مراحل'
  },
  'methodology.heading': {
    EN: 'How Your Organization Achieves Accredited Certification',
    FR: 'Comment votre organisation obtient sa certification accréditée',
    AR: 'كيف تحصل منشأتك على شهادة الأيزو المعتمدة دولياً'
  },
  'methodology.subheading': {
    EN: 'In strict adherence to ISO/IEC 17021-1 and IAF MD 5 guidelines, ensuring legal validity across all 110+ IAF member countries.',
    FR: 'En stricte conformité avec ISO/CEI 17021-1 et les directives IAF MD 5, garantissant la validité juridique dans plus de 110 pays membres.',
    AR: 'وفقاً لمتطلبات المعيار الدولي ISO/IEC 17021-1 وتوجيهات IAF MD 5، مما يضمن الاعتراف القانوني بالشهادة في أكثر من 110 دولة.'
  },

  'methodology.step1Title': {
    EN: 'Stage 1: Documentation Audit & Scope Review',
    FR: 'Étape 1 : Audit documentaire et revue du périmètre',
    AR: 'المرحلة 1: تدقيق التوثيق ومراجعة نطاق العمل'
  },
  'methodology.step1Desc': {
    EN: 'Review of your management system manual, policies, mandatory procedures, and internal audit records to confirm readiness.',
    FR: 'Examen de votre manuel de gestion, des politiques, des procédures obligatoires et des audits internes pour valider la préparation.',
    AR: 'مراجعة دليل نظام الإدارة والسياسات والإجراءات الإلزامية وسجلات التدقيق الداخلي للتأكد من الجاهزية التامة.'
  },

  'methodology.step2Title': {
    EN: 'Stage 2: On-Site Implementation Audit',
    FR: 'Étape 2 : Audit de mise en œuvre sur site',
    AR: 'المرحلة 2: التدقيق الميداني على تنفيذ النظام'
  },
  'methodology.step2Desc': {
    EN: 'Lead auditors verify operational compliance, interview staff, sample process records, and evaluate live conformity across your sites.',
    FR: 'Les auditeurs principaux vérifient la conformité opérationnelle, interrogent les équipes et évaluent les processus sur vos sites.',
    AR: 'يقوم المدققون الرئيسيون بالتحقق من التطبيق العملي ومقابلة الموظفين وفحص الأدلة الواقعية على أرض الواقع.'
  },

  'methodology.step3Title': {
    EN: 'Independent Review & Certification Decision',
    FR: 'Étape 3 : Examen indépendant et décision de certification',
    AR: 'المرحلة 3: مراجعة لجنة الحياد وقرار منح الشهادة'
  },
  'methodology.step3Desc': {
    EN: 'Our autonomous Impartiality & Technical Committee validates audit evidence and officially issues your accredited certificate.',
    FR: 'Notre comité technique et d’impartialité autonome valide les preuves d’audit et émet officiellement votre certificat accrédité.',
    AR: 'تقوم لجنة الحياد الفنية المستقلة بمراجعة تقرير التدقيق وإصدار الشهادة المعتمدة دولياً برقم كودي فريد.'
  },

  'methodology.step4Title': {
    EN: 'Annual Surveillance & Continuous Improvement',
    FR: 'Étape 4 : Surveillance annuelle et amélioration continue',
    AR: 'المرحلة 4: التدقيق الدوري السنوي والتجديد'
  },
  'methodology.step4Desc': {
    EN: 'Routine annual surveillance audits ensure ongoing conformity, stakeholder trust, and smooth 3-year recertification cycles.',
    FR: 'Des audits annuels de surveillance garantissent la conformité continue et le renouvellement sans encombre tous les 3 ans.',
    AR: 'تدقيق دوري سنوي لضمان استمرارية الامتثال وتطوير الأداء وتجديد صلاحية الشهادة كل 3 سنوات بسلاسة.'
  },

  // ----------------------------------------------------
  // Why Choose Us
  // ----------------------------------------------------
  'why.tag': {
    EN: 'The IEMA Standards Advantage',
    FR: 'L’avantage IEMA Standards',
    AR: 'مزايا التعامل مع إيما ستاندردز'
  },
  'why.heading': {
    EN: 'Why Leading Enterprises Choose IEMA Standards',
    FR: 'Pourquoi les grandes entreprises choisissent IEMA Standards',
    AR: 'لماذا تفضل كبرى المؤسسات والشركات إيما ستاندردز'
  },
  'why.subheading': {
    EN: 'Combining international accreditation rigor with local Nigerian regulatory insight and fast, transparent certification timelines.',
    FR: 'Allier la rigueur de l’accréditation internationale à la maîtrise réglementaire locale avec des délais d’audit rapides et transparents.',
    AR: 'نجمع بين صرامة الاعتماد الدولي والخبرة العميقة بالمتطلبات التنظيمية المحلية مع سرعة الإنجاز والشفافية التامة.'
  },

  'why.point1Title': {
    EN: 'EGAC & IAF MLA Global Legal Validity',
    FR: 'Validité juridique mondiale EGAC & IAF MLA',
    AR: 'اعتراف قانوني دولي كامل مع EGAC وIAF MLA'
  },
  'why.point1Desc': {
    EN: 'Our certificates are legally recognized by regulatory authorities, multinational oil corporations, EPC contractors, and across 110+ countries.',
    FR: 'Nos certificats sont reconnus par les régulateurs, les multinationales pétrolières, les maîtres d’œuvre et dans plus de 110 pays.',
    AR: 'شهاداتنا معترف بها قانونياً لدى الهيئات الحكومية وكبرى شركات النفط ومقاولي المشاريع الكبرى وفي أكثر من 110 دول.'
  },

  'why.point2Title': {
    EN: 'CQI/IRCA Certified Lead Auditors',
    FR: 'Auditeurs certifiés CQI/IRCA',
    AR: 'مدققون رئيسيون معتمدون من CQI/IRCA'
  },
  'why.point2Desc': {
    EN: 'Audits conducted by seasoned industry specialists with deep technical domain experience in energy, manufacturing, finance, and engineering.',
    FR: 'Des audits menés par des spécialistes chevronnés ayant une solide expertise dans l’énergie, l’industrie, la finance et l’ingénierie.',
    AR: 'عمليات تدقيق يقودها نخبة من الخبراء الفنيين ذوي الخبرة العميقة في قطاعات الطاقة والصناعة والمصارف والهندسة.'
  },

  'why.point3Title': {
    EN: 'Uncompromising Impartiality & Governance',
    FR: 'Impartialité et gouvernance sans compromis',
    AR: 'حيادية واستقلالية تامة دون أي تضارب للمصالح'
  },
  'why.point3Desc': {
    EN: 'Operating in strict accordance with ISO/IEC 17021-1, governed by an independent impartiality council free from commercial pressure.',
    FR: 'Fonctionnement rigoureusement conforme à ISO/CEI 17021-1, encadré par un conseil d’impartialité indépendant.',
    AR: 'نعمل وفق أعلى معايير الحوكمة الدولية ISO/IEC 17021-1 تحت إشراف لجنة حيادية مستقلة تضمن النزاهة المطلقة.'
  },

  'why.point4Title': {
    EN: 'Instant Online Verification Portal',
    FR: 'Portail de vérification en ligne instantané',
    AR: 'بوابة إلكترونية للتحقق الفوري من الشهادات'
  },
  'why.point4Desc': {
    EN: 'Publicly verifiable 24/7 on certificates.iiema.org and integrated with international IAF CERTSEARCH registries.',
    FR: 'Vérifiable 24h/24 sur certificates.iiema.org et synchronisé avec le registre mondial IAF CERTSEARCH.',
    AR: 'إمكانية التحقق الفوري من صلاحية الشهادة إلكترونياً على مدار الساعة ومزامنة مع قواعد بيانات IAF CERTSEARCH.'
  },

  // ----------------------------------------------------
  // Frequently Asked Questions
  // ----------------------------------------------------
  'faq.tag': {
    EN: 'Frequently Asked Questions',
    FR: 'Foire aux questions',
    AR: 'الأسئلة الشائعة والمتكررة'
  },
  'faq.heading': {
    EN: 'Clear Answers on ISO Certification in Nigeria',
    FR: 'Réponses claires sur la certification ISO au Nigeria',
    AR: 'إجابات وافية حول شهادات الأيزو والاعتماد في نيجيريا'
  },

  'faq.q1': {
    EN: 'What is an accredited ISO certificate, and why does EGAC/IAF MLA matter?',
    FR: 'Qu’est-ce qu’un certificat ISO accrédité et pourquoi l’accréditation EGAC/IAF MLA est-elle essentielle ?',
    AR: 'ما هو الفرق بين شهادة الأيزو المعتمدة والشهادات غير المعتمدة؟ وما أهمية EGAC / IAF MLA؟'
  },
  'faq.a1': {
    EN: 'An accredited ISO certificate is issued by a Certification Body audited and authorized by an official accreditation council (such as EGAC). Through the IAF Multilateral Recognition Arrangement (MLA), a certificate from IEMA Standards Limited carries worldwide legal validity across 110+ signatory countries without requiring re-audit.',
    FR: 'Un certificat ISO accrédité est émis par un organisme audité par un conseil d’accréditation officiel (tel qu’EGAC). Grâce à l’accord multilatéral IAF MLA, un certificat émis par IEMA Standards bénéficie d’une validité juridique mondiale dans plus de 110 pays sans nouvel audit.',
    AR: 'الشهادة المعتمدة تصدر عن جهة منح شهادات خاضعة للمراقبة والاعتماد من مجلس اعتماد وطني رسمي مثل EGAC. وبفضل اتفاقية الاعتراف متعددة الأطراف IAF MLA، تكون الشهادة الصادرة عن إيما ستاندردز مقبولة قانونياً ورسمياً في أكثر من 110 دولة حول العالم.'
  },

  'faq.q2': {
    EN: 'How long does the ISO certification audit process typically take?',
    FR: 'Combien de temps prend généralement le processus de certification ISO ?',
    AR: 'كم من الوقت يستغرقه الحصول على شهادة الأيزو عادةً؟'
  },
  'faq.a2': {
    EN: 'For organizations with documented management systems in place, Stage 1 and Stage 2 audits are typically completed within 3 to 6 weeks. Our expedited track supports fast-track schedules for urgent tender deadlines.',
    FR: 'Pour les entreprises disposant déjà d’un système documenté, les étapes 1 et 2 sont réalisées en 3 à 6 semaines. Notre filière accélérée permet de répondre aux échéances d’appels d’offres urgents.',
    AR: 'بالنسبة للمؤسسات التي تمتلك نظام إدارة موثقاً وجاهزاً، تكتمل مراحل التدقيق الأولى والثانية خلال فترة تتراوح بين 3 إلى 6 أسابيع، مع توفر مسار سريع للمناقصات العاجلة.'
  },

  'faq.q3': {
    EN: 'How can our clients or regulatory bodies verify our certificate?',
    FR: 'Comment nos clients ou les régulateurs peuvent-ils vérifier notre certificat ?',
    AR: 'كيف يمكن لعملائنا أو الجهات الحكومية التحقق من صحة شهادتنا؟'
  },
  'faq.a3': {
    EN: 'Every certificate features a unique QR code and serial number verifiable 24/7 on our live registry portal at certificates.iiema.org and listed on international IAF CERTSEARCH registries.',
    FR: 'Chaque certificat dispose d’un QR code et d’un numéro de série unique vérifiable 24h/24 sur notre portail certificates.iiema.org et sur le registre international IAF CERTSEARCH.',
    AR: 'تحتوي كل شهادة على رمز استجابة سريعة QR ورقم تسلسلي فريد يمكن التحقق منه إلكترونياً على مدار الساعة عبر بوابة certificates.iiema.org وقواعد بيانات IAF CERTSEARCH الدولية.'
  },

  'faq.q4': {
    EN: 'What is the difference between Stage 1 and Stage 2 audits?',
    FR: 'Quelle est la différence entre l’audit d’étape 1 et l’audit d’étape 2 ?',
    AR: 'ما الفرق بين تدقيق المرحلة الأولى (Stage 1) والمرحلة الثانية (Stage 2)؟'
  },
  'faq.a4': {
    EN: 'Stage 1 evaluates your documentation, management review, and internal audit readiness to ensure there are no major gaps. Stage 2 evaluates the actual on-site implementation and effectiveness of your processes.',
    FR: 'L’étape 1 évalue la documentation, la revue de direction et la préparation des audits internes. L’étape 2 évalue la mise en œuvre réelle sur site et l’efficacité des processus.',
    AR: 'تركز المرحلة الأولى على تدقيق وثائق النظام وسياسات العمل ومراجعة الإدارة والتدقيق الداخلي، بينما تركز المرحلة الثانية على التدقيق الميداني العملي وقياس فعالية تطبيق النظام على أرض الواقع.'
  },

  // ----------------------------------------------------
  // Call to Action Banner
  // ----------------------------------------------------
  'cta.readyTitle': {
    EN: 'Ready to Achieve Internationally Accredited ISO Certification?',
    FR: 'Prêt à obtenir votre certification ISO accréditée au niveau international ?',
    AR: 'هل أنتم مستعدون للحصول على شهادة أيزو معتمدة دولياً ومقبولة عالمياً؟'
  },
  'cta.readySubtitle': {
    EN: 'Get in touch with our Lead Auditors today. We provide transparent man-day quotations within 24 hours with zero hidden fees.',
    FR: 'Contactez nos auditeurs principaux dès aujourd’hui. Devis transparents en jours-homme fournis sous 24h sans frais cachés.',
    AR: 'تواصل مع مدققينا المعتمدين اليوم للحصول على عرض أسعار رسمي وشفاف خلال 24 ساعة دون أي رسوم مخفية.'
  },
  'cta.requestQuote': {
    EN: 'Request Formal Quotation',
    FR: 'Demander une offre formelle',
    AR: 'طلب عرض سعر رسمي'
  },
  'cta.speakAuditor': {
    EN: 'Speak with Lead Auditor',
    FR: 'Parler à un auditeur principal',
    AR: 'التحدث مع مدقق رئيسي'
  },
  'cta.callOffice': {
    EN: 'Call +234 813 483 1027',
    FR: 'Appeler +234 813 483 1027',
    AR: 'اتصل بنا: 1027 483 813 234+'
  },

  // ----------------------------------------------------
  // Quick Search Modal
  // ----------------------------------------------------
  'search.placeholder': {
    EN: 'Search standards, services, articles, cities (e.g. ISO 9001, NDT, Lagos)...',
    FR: 'Rechercher normes, services, articles (ex: ISO 9001, CND, Lagos)...',
    AR: 'ابحث في المعايير والخدمات والمقالات (مثال: ISO 9001، فحص NDT، لاغوس)...'
  },
  'search.title': {
    EN: 'Quick Search & Standards Finder',
    FR: 'Recherche rapide de normes et services',
    AR: 'البحث السريع في المعايير والخدمات'
  },
  'search.close': {
    EN: 'Close (Esc)',
    FR: 'Fermer (Échap)',
    AR: 'إغلاق (Esc)'
  },
  'search.noResults': {
    EN: 'No results found. Try searching for ISO 9001, 14001, NDT, or Lagos.',
    FR: 'Aucun résultat trouvé. Essayez de chercher ISO 9001, 14001, CND ou Lagos.',
    AR: 'لم يتم العثور على نتائج. جرب البحث عن ISO 9001 أو 14001 أو NDT أو لاغوس.'
  },
  'search.categories': {
    EN: 'Categories',
    FR: 'Catégories',
    AR: 'الأقسام'
  },
  'search.all': {
    EN: 'All',
    FR: 'Tout',
    AR: 'الكل'
  },

  // ----------------------------------------------------
  // Floating WhatsApp Widget
  // ----------------------------------------------------
  'wa.headerTitle': {
    EN: 'IEMA Standards Support Desk',
    FR: 'Bureau d’assistance IEMA Standards',
    AR: 'مكتب الدعم والمساعدة - إيما ستاندردز'
  },
  'wa.online': {
    EN: 'Online • Typically replies within 10 minutes',
    FR: 'En ligne • Répond habituellement en 10 minutes',
    AR: 'متصل الآن • الرد عادة خلال 10 دقائق'
  },
  'wa.greeting': {
    EN: 'Hello! How can our Lead Auditors and certification officers assist you today?',
    FR: 'Bonjour ! Comment nos auditeurs principaux peuvent-ils vous aider aujourd’hui ?',
    AR: 'مرحباً بكم! كيف يمكن لمدققينا ومستشارينا مساعدتكم اليوم في استفسارات الشهادات؟'
  },
  'wa.btnQuote': {
    EN: 'Request a Fast Quote',
    FR: 'Demander un devis rapide',
    AR: 'طلب عرض سعر سريع'
  },
  'wa.btnVerify': {
    EN: 'Verify a Certificate',
    FR: 'Vérifier une certification',
    AR: 'التحقق من صحة شهادة'
  },
  'wa.btnSpeak': {
    EN: 'Speak with Lead Auditor',
    FR: 'Parler à un auditeur principal',
    AR: 'التحدث مع مدقق رئيسي'
  },
  'wa.startChat': {
    EN: 'Start WhatsApp Chat',
    FR: 'Démarrer la discussion WhatsApp',
    AR: 'بدء المحادثة على واتساب'
  },

  // ----------------------------------------------------
  // Exit Intent Modal
  // ----------------------------------------------------
  'exit.title': {
    EN: 'Before You Go: Download Free ISO Readiness Checklist',
    FR: 'Avant de partir : Téléchargez la liste de contrôle ISO gratuite',
    AR: 'قبل المغادرة: حمّل قائمة الفحص والجاهزية للحصول على الأيزو مجاناً'
  },
  'exit.subtitle': {
    EN: 'Ensure your organization fulfills the mandatory Stage 1 & Stage 2 audit requirements to avoid costly non-conformances.',
    FR: 'Assurez-vous que votre organisation remplit les critères d’audit des étapes 1 et 2 pour éviter des non-conformités coûteuses.',
    AR: 'تأكد من استيفاء منشأتك لمتطلبات المرحلة الأولى والثانية من التدقيق لتجنب حالات عدم المطابقة المكلفة.'
  },
  'exit.downloadBtn': {
    EN: 'Download Free PDF Handbook',
    FR: 'Télécharger le guide PDF gratuit',
    AR: 'تحميل الدليل الإرشادي المجاني PDF'
  },
  'exit.consultBtn': {
    EN: 'Book 15-Min Free Audit Consultation',
    FR: 'Réserver 15 min de consultation gratuite',
    AR: 'حجز استشارة تدقيق مجانية (15 دقيقة)'
  },
  'exit.dismiss': {
    EN: 'No thanks, I will continue browsing',
    FR: 'Non merci, je continue ma navigation',
    AR: 'لا شكراً، سأواصل التصفح'
  },

  // ----------------------------------------------------
  // Contact & Locations
  // ----------------------------------------------------
  'contact.headOffice': {
    EN: 'Lagos Head Office (Chevron Lekki)',
    FR: 'Siège social de Lagos (Chevron Lekki)',
    AR: 'المقر الرئيسي في لاغوس (تشيفرون، ليكي)'
  },
  'contact.headOfficeAddr': {
    EN: '27A Alternative Drive, near Waterbrook School, Chevron, Lekki, Lagos, Nigeria',
    FR: '27A Alternative Drive, près de Waterbrook School, Chevron, Lekki, Lagos, Nigeria',
    AR: '27A طريق ألترناتيف، بالقرب من مدرسة ووتربروك، تشيفرون، ليكي، لاغوس، نيجيريا'
  },
  'contact.abujaOffice': {
    EN: 'Abuja Regional Office (Maitama)',
    FR: 'Bureau régional d’Abuja (Maitama)',
    AR: 'المكتب الإقليمي في أبوجا (مايتاما)'
  },
  'contact.abujaOfficeAddr': {
    EN: 'Suite B12, Transcorp Hilton Commercial Arcade, Maitama, Abuja, Nigeria',
    FR: 'Suite B12, Transcorp Hilton Commercial Arcade, Maitama, Abuja, Nigeria',
    AR: 'جناح B12، الممشى التجاري بفندق ترانسكورب هيلتون، مايتاما، أبوجا، نيجيريا'
  },
  'contact.hours': {
    EN: 'Monday - Friday: 8:00 AM - 5:00 PM (WAT)',
    FR: 'Lundi - Vendredi : 8h00 - 17h00 (WAT)',
    AR: 'من الإثنين إلى الجمعة: 8:00 صباحاً - 5:00 مساءً بتوقيت غرب أفريقيا'
  },
  'contact.sendInquiry': {
    EN: 'Send Official Inquiry',
    FR: 'Envoyer une demande officielle',
    AR: 'إرسال طلب استفسار رسمي'
  },

  // ----------------------------------------------------
  // Interactive Quote Calculator
  // ----------------------------------------------------
  'quote.title': {
    EN: 'Interactive ISO Certification Cost Estimator',
    FR: 'Estimateur interactif des coûts de certification ISO',
    AR: 'حاسبة تقدير تكاليف تدقيق وشهادات الأيزو'
  },
  'quote.subtitle': {
    EN: 'Calculated in accordance with IAF MD 5 auditor man-day rules.',
    FR: 'Calculé conformément aux règles de jours-homme d’audit IAF MD 5.',
    AR: 'محسوبة وفقاً للوائح والقواعد المعتمدة لأيام تدقيق المراجعين IAF MD 5.'
  },
  'quote.selectStandards': {
    EN: 'Select Required Standard(s)',
    FR: 'Sélectionnez la ou les normes requises',
    AR: 'حدد المعايير والشهادات المطلوبة'
  },
  'quote.empCount': {
    EN: 'Total Number of Employees',
    FR: 'Nombre total d’employés',
    AR: 'إجمالي عدد الموظفين في المنشأة'
  },
  'quote.locations': {
    EN: 'Number of Physical Operating Sites',
    FR: 'Nombre de sites physiques opérationnels',
    AR: 'عدد الفروع والمواقع التشغيلية'
  },
  'quote.estimatedFee': {
    EN: 'Estimated IAF MD 5 Audit Fee Range:',
    FR: 'Fourchette estimée des frais d’audit (IAF MD 5) :',
    AR: 'نطاق رسوم التدقيق التقديرية وفق معايير IAF MD 5:'
  },
  'quote.submitBtn': {
    EN: 'Submit for Formal Quotation',
    FR: 'Soumettre pour une proposition formelle',
    AR: 'إرسال للحصول على عرض سعر رسمي معتمد'
  },
  'quote.successMsg': {
    EN: 'Thank you! Your certification request has been received. Our Lead Auditor will contact you within 24 hours.',
    FR: 'Merci ! Votre demande a été reçue. Notre auditeur principal vous contactera sous 24 heures.',
    AR: 'شكراً لكم! تم استلام طلبكم بنجاح، وسيتواصل معكم مدققنا الرئيسي خلال 24 ساعة.'
  },
  'quote.yourName': {
    EN: 'Full Name',
    FR: 'Nom complet',
    AR: 'الاسم بالكامل'
  },
  'quote.companyName': {
    EN: 'Company / Organization Name',
    FR: 'Nom de l’entreprise / organisation',
    AR: 'اسم الشركة أو المؤسسة'
  },
  'quote.email': {
    EN: 'Corporate Email',
    FR: 'E-mail professionnel',
    AR: 'البريد الإلكتروني للعمل'
  },
  'quote.phone': {
    EN: 'Phone / WhatsApp Number',
    FR: 'Numéro de téléphone / WhatsApp',
    AR: 'رقم الهاتف أو الواتساب'
  },

  // ----------------------------------------------------
  // Footer
  // ----------------------------------------------------
  'footer.aboutText': {
    EN: 'IEMA STANDARDS LIMITED is an EGAC-accredited ISO certification body providing globally recognised ISO certification, EcoMark sustainability certification, and conformity assessment services across Nigeria and Africa.',
    FR: 'IEMA STANDARDS LIMITED est un organisme de certification accrédité EGAC fournissant des certifications ISO reconnues mondialement, des certifications EcoMark et des services d’évaluation de conformité au Nigeria et en Afrique.',
    AR: 'إيما ستاندردز ليمتد هي هيئة إصدار شهادات أيزو معتمدة من EGAC تقدم شهادات الأيزو المعترف بها دولياً وبرنامج إيكو مارك وخدمات تقييم المطابقة في نيجيريا وأفريقيا.'
  },
  'footer.servicesTitle': {
    EN: 'Our Services',
    FR: 'Nos Services',
    AR: 'خدماتنا'
  },
  'footer.contactTitle': {
    EN: 'Get in Touch',
    FR: 'Contactez-nous',
    AR: 'تواصل معنا'
  },
  'footer.rights': {
    EN: 'All Rights Reserved. Accredited Conformity Assessment Body CAB 12203.',
    FR: 'Tous droits réservés. Organisme d’évaluation de la conformité accrédité CAB 12203.',
    AR: 'جميع الحقوق محفوظة. هيئة تقييم مطابقة معتمدة برقم CAB 12203.'
  },
  'footer.impartiality': {
    EN: 'IEMA Standards Limited operates under strict principles of neutrality, independence, and technical integrity in accordance with ISO/IEC 17021-1:2015.',
    FR: 'IEMA Standards Limited opère selon des principes stricts de neutralité, d’indépendance et d’intégrité technique conformément à la norme ISO/CEI 17021-1:2015.',
    AR: 'تعمل إيما ستاندردز ليمتد وفق مبادئ صارمة للحياد والاستقلالية والنزاهة الفنية والمهنية طبقاً للمعيار الدولي ISO/IEC 17021-1:2015.'
  },
  'footer.regionalBranches': {
    EN: 'Lagos & Abuja Offices',
    FR: 'Bureaux de Lagos et Abuja',
    AR: 'مكاتب لاغوس وأبوجا'
  },

  // ----------------------------------------------------
  // Certificate Verification Page
  // ----------------------------------------------------
  'verify.title': {
    EN: 'Official ISO Certificate Verification Portal',
    FR: 'Portail officiel de vérification des certificats ISO',
    AR: 'البوابة الرسمية للتحقق من صحة شهادات الأيزو'
  },
  'verify.subtitle': {
    EN: 'Authenticate any certificate issued by IEMA Standards Limited (EGAC CAB 12203).',
    FR: 'Vérifiez l’authenticité de tout certificat délivré par IEMA Standards Limited (EGAC CAB 12203).',
    AR: 'تحقق من صحة وصلاحية أي شهادة صادرة عن شركة إيما ستاندردز (EGAC CAB 12203).'
  },
  'verify.inputPlaceholder': {
    EN: 'Enter Certificate Number (e.g., IEMA-QMS-2024-0891)...',
    FR: 'Entrez le numéro du certificat (ex: IEMA-QMS-2024-0891)...',
    AR: 'أدخل رقم الشهادة (مثال: IEMA-QMS-2024-0891)...'
  },
  'verify.btnCheck': {
    EN: 'Verify Authenticity',
    FR: 'Vérifier l’authenticité',
    AR: 'فحص صحة الشهادة'
  },

  // ----------------------------------------------------
  // Common UI Actions
  // ----------------------------------------------------
  'common.learnMore': {
    EN: 'Learn More',
    FR: 'En savoir plus',
    AR: 'المزيد من التفاصيل'
  },
  'common.viewDetails': {
    EN: 'View Details',
    FR: 'Voir les détails',
    AR: 'عرض التفاصيل'
  },
  'common.close': {
    EN: 'Close',
    FR: 'Fermer',
    AR: 'إغلاق'
  },
  'common.back': {
    EN: 'Back',
    FR: 'Retour',
    AR: 'رجوع'
  },
  'common.next': {
    EN: 'Next',
    FR: 'Suivant',
    AR: 'التالي'
  },
  'common.submit': {
    EN: 'Submit',
    FR: 'Envoyer',
    AR: 'إرسال'
  },
  'common.downloadPdf': {
    EN: 'Download PDF',
    FR: 'Télécharger le PDF',
    AR: 'تحميل ملف PDF'
  }
};
