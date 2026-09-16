import {
  keyChallengesData as aiKeyChallenges,
  innovationTabsData as aiInnovationTabs,
  deliveryStepsData as aiDeliverySteps,
  pocCardsData as aiPocCards,
  techBadgesRows as aiTechRows,
  industriesData as aiIndustries,
  engagementModelsData as aiEngagementModels,
  faqData as aiFaqs,
  ChallengeItem,
  InnovationTab,
  DeliveryStep,
  PocItem,
  IndustryCard,
  EngagementModel,
  FaqItem,
} from './serviceAiData';

export type {
  ChallengeItem,
  InnovationTab,
  DeliveryStep,
  PocItem,
  IndustryCard,
  EngagementModel,
  FaqItem,
};

export interface ServiceHeroData {
  badge: string;
  heading: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  fallbackSrc?: string;
  bgSrc?: string;
  hasGridBg?: boolean;
  activeBadgeText?: string;
  heroGraphicType?: 'image' | 'cloud-topology';
}

export interface ServiceDetailData {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: ServiceHeroData;
  keyChallenges: {
    eyebrow: string;
    title: string;
    items: ChallengeItem[];
  };
  whatWeDeliver: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabs: InnovationTab[];
  };
  deliverySteps: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: DeliveryStep[];
  };
  poc: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaText: string;
    cards: PocItem[];
  };
  tools: {
    eyebrow: string;
    title: string;
    rows: string[][];
  };
  industries: {
    eyebrow: string;
    title: string;
    cards: IndustryCard[];
  };
  engagementModels: {
    eyebrow: string;
    title: string;
    ctaText?: string;
    cards: EngagementModel[];
  };
  faqs: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaText?: string;
    items: FaqItem[];
  };
}

// 1. Artificial Intelligence Service Detail Data
export const artificialIntelligenceServiceData: ServiceDetailData = {
  slug: 'artificial-intelligence',
  meta: {
    title: 'Artificial Intelligence & Data Systems | DevLogix',
    description:
      'AI That Ships to Production, Not Just to Slides. Enterprise agentic workflows, MLOps, vector platforms, and generative systems built for measurable ROI.',
  },
  hero: {
    badge: 'ARTIFICIAL INTELLIGENCE',
    heading: 'AI That Ships to Production, Not Just to Slides.',
    subtitle:
      'Unlock true competitive advantage. We pair production-ready agentic workflows with bulletproof data foundations to deliver tangible business outcomes.',
    ctaText: 'Explore AI Transformation',
    ctaHref: '#what-we-deliver',
    imageSrc: '/images/services/hero-right-AI.png',
    fallbackSrc: '/images/services/ai/hero-ai.jpg',
    bgSrc: '/images/services/hero-section-AI.png',
    activeBadgeText: 'AGENTIC SYSTEM ACTIVE',
  },
  keyChallenges: {
    eyebrow: 'KEY CHALLENGES',
    title: 'Where AI & Data Initiatives Stall Before They Scale',
    items: aiKeyChallenges,
  },
  whatWeDeliver: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'AI & Data Innovation Services',
    subtitle:
      'We embed intelligence deep into your engineering workflow, moving you past generic chatbots.',
    tabs: aiInnovationTabs,
  },
  deliverySteps: {
    eyebrow: 'PROCESS',
    title: 'Our AI Delivery Steps',
    subtitle:
      'We eliminate guesswork through structured milestones that validate technical and business feasibility.',
    steps: aiDeliverySteps,
  },
  poc: {
    eyebrow: 'PROOF OF CONCEPT',
    title: 'Prove it on your data before you scale it.',
    subtitle:
      'De-risk your investment with a 4-to-6 week target pilot designed to test accuracy, user adoption, and system latency on real workloads.',
    ctaText: 'Scope a proof of concept',
    cards: aiPocCards,
  },
  tools: {
    eyebrow: 'TOOLS & TECHNOLOGIES',
    title: 'Equipped with the latest tools.',
    rows: aiTechRows,
  },
  industries: {
    eyebrow: 'INDUSTRIES WE SERVE',
    title: 'Helping every industry put AI to work',
    cards: aiIndustries,
  },
  engagementModels: {
    eyebrow: 'ENGAGEMENT MODELS',
    title: 'Three ways to bring us in',
    ctaText: "Let's Talk",
    cards: aiEngagementModels,
  },
  faqs: {
    eyebrow: 'FAQ',
    title: 'Frequently Asked Questions',
    subtitle:
      'Everything you need to know about our AI engineering methodology, data sovereignty, and delivery timelines.',
    ctaText: "Let's Talk",
    items: aiFaqs,
  },
};

// 2. UI/UX Design & Research Service Detail Data
export const uiUxDesignServiceData: ServiceDetailData = {
  slug: 'ui-ux-design',
  meta: {
    title: 'UI/UX Design & Research | DevLogix',
    description:
      'Interfaces That Convert Users, Not Just Impress Stakeholders. Research-driven, pixel-perfect digital experiences that reduce friction, boost engagement, and drive business growth.',
  },
  hero: {
    badge: 'UI/UX DESIGN',
    heading: 'Interfaces That Convert Users, Not Just Impress Stakeholders.',
    subtitle:
      'We craft research-driven, pixel-perfect digital experiences that reduce friction, boost engagement, and drive measurable business growth across every touchpoint.',
    ctaText: 'Explore UX Solutions',
    ctaHref: '#what-we-deliver',
    imageSrc: '/images/services/hero-right-UI.png',
    fallbackSrc: '/images/services/hero-right-UI.png',
    bgSrc: '/images/services/hero-section-AI.png',
    hasGridBg: false,
  },
  keyChallenges: {
    eyebrow: 'KEY CHALLENGES',
    title: 'Where Digital Products Lose Users Before They Convert',
    items: [
      {
        id: 'data-sourcing',
        badge: 'DATA SOURCING',
        badgeColor: 'orange',
        title: 'Inconsistent experiences across platforms',
        description:
          'Users encounter different layouts, interactions, and visual languages on web, mobile, and tablet — eroding trust and increasing support costs.',
      },
      {
        id: 'engineering-gap',
        badge: 'ENGINEERING GAP',
        badgeColor: 'rose',
        title: 'High bounce rates from poor first impressions',
        description:
          'Users form judgments in under 3 seconds. Cluttered layouts, slow load times, and confusing navigation push 88% of visitors away permanently.',
      },
      {
        id: 'quality-safety',
        badge: 'QUALITY & SAFETY',
        badgeColor: 'rose',
        title: 'Feature-rich products nobody can navigate',
        description:
          'Adding features without user research creates bloated interfaces. Users abandon complex workflows, and support tickets skyrocket as adoption drops.',
      },
      {
        id: 'business-case',
        badge: 'BUSINESS CASE',
        badgeColor: 'orange',
        title: 'Redesigns that miss the real problem',
        description:
          'Visual refreshes without usability testing repeat the same mistakes. Teams spend months on pixel-perfect designs that still fail to improve conversion or retention.',
      },
    ],
  },
  whatWeDeliver: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'UI/UX Design & Research Services',
    subtitle:
      'We embed user-centered design thinking into your product lifecycle, moving you past guesswork to data-driven interfaces.',
    tabs: [
      {
        id: 'ux-research',
        label: 'UX Research',
        title: 'UX Research & User Insights',
        description:
          'Assumptions are a liability; validated insights are an asset. We conduct in-depth user interviews, usability testing, heatmap analysis, and journey mapping to uncover real pain points and opportunities.',
        bullets: [
          'User research & journey mapping (interviews, surveys, analytics)',
          'Interactive prototyping & usability testing (Maze, UserTesting)',
          'Design system creation with tokens, components & documentation',
        ],
        imageSrc: '/images/services/split-right-UI.png',
        fallbackSrc: '/images/services/ui-ux/research-preview.png',
      },
      {
        id: 'ui-design',
        label: 'UI Design',
        title: 'Interface Design & Visual Systems',
        description:
          'Crafting pixel-perfect, accessible user interfaces that reflect your brand identity while maximizing conversion across responsive web, desktop, and native mobile screens.',
        bullets: [
          'High-fidelity responsive UI layouts across mobile, tablet & desktop',
          'Accessible WCAG AAA-compliant typography & contrast hierarchies',
          'Micro-interactions and motion design specifications for dev handoff',
        ],
        imageSrc: '/images/services/split-right-UI.png',
      },
      {
        id: 'design-systems',
        label: 'Design Systems',
        title: 'Multi-Brand Design Systems & Tokens',
        description:
          'Unify your product portfolio under a scalable design system. From atomic component tokens to multi-brand theming, we streamline design-to-code velocity.',
        bullets: [
          'Figma design tokens synced directly to React and CSS variables',
          'Comprehensive Storybook component library and documentation',
          'Automated governance and cross-team versioning protocols',
        ],
        imageSrc: '/images/services/split-right-UI.png',
      },
      {
        id: 'prototyping',
        label: 'Prototyping',
        title: 'High-Fidelity Interactive Prototyping',
        description:
          'Experience ideas before writing code. We build realistic, clickable prototypes that simulate intricate conditional logic and dynamic states for decisive stakeholder validation.',
        bullets: [
          'Framer & ProtoPie advanced stateful prototyping',
          'Realistic user testing with live data inputs and conditional flows',
          'De-risking engineering handoff through interactive validation',
        ],
        imageSrc: '/images/services/split-right-UI.png',
      },
      {
        id: 'mobile-ux',
        label: 'Mobile UX',
        title: 'Native Mobile & Touch Experiences',
        description:
          'Designing thumb-friendly, platform-native iOS and Android applications that leverage intuitive gesture physics, haptics, and modern mobile ergonomics.',
        bullets: [
          'Human Interface Guidelines (iOS) and Material 3 (Android) adherence',
          'Offline-first UI patterns and optimistic interaction feedback',
          'Bottom-sheet navigation and one-handed accessibility layouts',
        ],
        imageSrc: '/images/services/split-right-UI.png',
      },
      {
        id: 'ux-audits',
        label: 'UX Audits',
        title: 'Heuristic Evaluations & Conversion Audits',
        description:
          'Identify exactly where your funnel leaks revenue. We audit your existing software through heuristic inspection, usability benchmarks, and heatmaps to prioritize quick wins.',
        bullets: [
          'Comprehensive heuristic inspection across 10 usability benchmarks',
          'Friction point quantification with session recording analysis',
          'Prioritized UX ROI roadmap detailing immediate high-impact fixes',
        ],
        imageSrc: '/images/services/split-right-UI.png',
      },
    ],
  },
  deliverySteps: {
    eyebrow: 'PROCESS',
    title: 'Our Design Delivery Steps',
    subtitle:
      'We eliminate guesswork through structured design sprints that validate usability and business impact at every stage.',
    steps: [
      {
        stepNumber: '01',
        title: 'Discovery & Research',
        description:
          'We conduct user interviews, competitor audits, analytics reviews, and stakeholder workshops to map pain points and opportunities.',
      },
      {
        stepNumber: '02',
        title: 'Wireframes & Prototypes',
        description:
          'Within days, we deliver interactive wireframes and clickable prototypes validated through rapid usability testing sessions.',
      },
      {
        stepNumber: '03',
        title: 'Visual Design & System',
        description:
          'We craft high-fidelity UI designs with a component-based design system ensuring consistency across all screens and breakpoints.',
      },
      {
        stepNumber: '04',
        title: 'Test, Iterate & Handoff',
        description:
          'Continuous usability testing, A/B validation, and developer-ready handoff with specs, assets, and interaction documentation.',
      },
    ],
  },
  poc: {
    eyebrow: 'PROOF OF CONCEPT',
    title: 'Prove it with real users before you build it.',
    subtitle:
      'De-risk your investment with a 2-to-4 week design sprint that validates usability and conversion before full development begins.',
    ctaText: 'Scope a design sprint',
    cards: [
      {
        id: 'conversion-audit',
        title: 'Conversion audit',
        description:
          'Full UX audit of your existing product with heatmap analysis, user journey mapping, and prioritized improvement recommendations.',
        timeline: '2 Weeks',
        iconType: 'message-square',
      },
      {
        id: 'mobile-redesign',
        title: 'Mobile app redesign',
        description:
          'Complete mobile experience redesign with user research, wireframes, visual design, and interactive prototype for stakeholder review.',
        timeline: '4 Weeks',
        iconType: 'bar-chart',
      },
      {
        id: 'design-system-starter',
        title: 'Design system starter',
        description:
          'A foundational component library with tokens, reusable UI patterns, and documentation ready.',
        timeline: '3 Weeks',
        iconType: 'database',
      },
      {
        id: 'landing-page-opt',
        title: 'Landing page optimization',
        description:
          'Redesigned landing page with A/B test variants, optimized for conversion rate improvement based on behavioral analytics.',
        timeline: '2 Weeks',
        iconType: 'file-text',
      },
    ],
  },
  tools: {
    eyebrow: 'TOOLS & TECHNOLOGIES',
    title: 'Equipped with industry-leading design tools',
    rows: [
      ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Framer', 'Principle'],
      ['Maze', 'Hotjar', 'UserTesting', 'Google Analytics', 'Miro', 'Zeplin'],
      ['Storybook', 'ProtoPie', 'Lottie', 'Webflow', 'Optimal Workshop', 'Lookback'],
    ],
  },
  industries: {
    eyebrow: 'INDUSTRIES WE SERVE',
    title: 'Crafting intuitive experiences for every industry',
    cards: [
      {
        id: 'travel-hospitality',
        title: 'Travel & Hospitality',
        imageSrc: '/images/services/industry-card.png',
        fallbackSrc: '/images/services/industry-card.png',
        description:
          'Dynamic pricing, hyper-personalized itinerary routing, and agentic booking assistants.',
      },
      {
        id: 'retail-cpg',
        title: 'Retail & CPG',
        imageSrc: '/images/services/industry-card (1).png',
        fallbackSrc: '/images/services/industry-card (1).png',
        description:
          'Supply chain forecasting, personalized product recommendation models, and conversational search.',
      },
      {
        id: 'oil-gas-energy',
        title: 'Oil, Gas & Energy',
        imageSrc: '/images/services/industry-card (2).png',
        fallbackSrc: '/images/services/industry-card (2).png',
        description:
          'Preventive maintenance modeling, seismic data analytics, and workflow automation.',
      },
      {
        id: 'banking-finance',
        title: 'Banking & Finance',
        imageSrc: '/images/services/industry-card (3).png',
        fallbackSrc: '/images/services/industry-card (3).png',
        description:
          'Automated audit workflows, predictive risk compliance modeling, and real-time fraud detection.',
      },
    ],
  },
  engagementModels: {
    eyebrow: 'ENGAGEMENT MODELS',
    title: 'Three ways to bring us in',
    ctaText: "Let's Talk",
    cards: [
      {
        id: 'project-scope',
        badge: 'PROJECT SCOPE',
        title: 'Full AI Build',
        description:
          'We assume end-to-end responsibility for engineering. From model selection and data platforming to live deployment and UI product design.',
        bestFor: 'Completing high-priority initiatives with clear specifications and aggressive timelines.',
        timeline: '3 - 6 Months',
      },
      {
        id: 'ongoing',
        badge: 'ONGOING',
        title: 'Embedded AI Team',
        description:
          'We embed senior ML engineers, data pipelines architects, and DevOps experts directly into your sprint cycle to scale internal output.',
        bestFor: 'Long-term technological growth, continuous feature expansion, and continuous model improvement.',
        timeline: 'Flexible retainer',
      },
      {
        id: 'fixed-scope',
        badge: 'FIXED SCOPE',
        title: 'AI Readiness Assessment',
        description:
          'A 2-week technical sprint assessing your data architecture pipelines, model feasibility, and building a secure deployment roadmap.',
        bestFor: 'Teams looking to de-risk investment and validate technical feasibility before writing code.',
        timeline: '2 Weeks',
      },
    ],
  },
  faqs: {
    eyebrow: 'FAQS',
    title: 'Frequently Asked Questions',
    subtitle:
      'Have questions about design process, timelines, or methodology? Speak directly to our design leadership team.',
    ctaText: "Let's Talk",
    items: [
      {
        id: 'faq-1',
        question: 'What does your UI/UX design process look like?',
        answer:
          'Our process begins with intensive discovery and user research, moving into wireframing and clickable prototyping for early validation. Once validated, we develop high-fidelity UI designs and scalable design systems before conducting rigorous usability testing and seamless developer handoff.',
      },
      {
        id: 'faq-2',
        question: 'Do you handle both research and visual design?',
        answer:
          'Yes, we provide end-to-end UX services. Our team pairs qualitative user research (interviews, journey mapping, heuristic audits) with pixel-perfect visual design, typography hierarchy, responsive layouts, and interactive design systems.',
      },
      {
        id: 'faq-3',
        question: 'Can you redesign our existing product without disrupting users?',
        answer:
          'Absolutely. We specialize in phased redesigns that introduce improvements incrementally. Through user cohort testing, telemetry tracking, and feature flags, we ensure users experience zero workflow shock while satisfaction and conversion metrics rise.',
      },
      {
        id: 'faq-4',
        question: 'How do you ensure designs are accessible and inclusive?',
        answer:
          'We design in strict accordance with WCAG 2.1 AA and AAA standards. Every component undergoes rigorous contrast ratio audits, keyboard navigation validation, screen-reader testing, and focus state reviews to ensure full inclusivity across all abilities.',
      },
      {
        id: 'faq-5',
        question: 'How do you measure the success of a redesign?',
        answer:
          'We establish measurable UX and business KPIs before designing. Common benchmarks include task completion rate, time-on-task, Net Promoter Score (NPS), System Usability Scale (SUS), conversion funnel drop-off reduction, and support ticket deflection.',
      },
      {
        id: 'faq-6',
        question: 'Do you create design systems for long-term consistency?',
        answer:
          'Yes, creating scalable, tokenized design systems is one of our core strengths. We deliver structured Figma libraries with design tokens, reusable components, variants, and complete developer documentation synced with your engineering stack.',
      },
      {
        id: 'faq-7',
        question: 'What is the typical timeline and cost for a full UX engagement?',
        answer:
          'Targeted design sprints and POC prototypes typically take 2 to 4 weeks. Full-scale product redesigns and comprehensive enterprise design systems range from 6 to 12 weeks depending on scope, workflow complexity, and screen volume.',
      },
    ],
  },
};

// 3. Digital Transformation Service Detail Data
export const digitalTransformationServiceData: ServiceDetailData = {
  slug: 'digital-transformation',
  meta: {
    title: 'Digital Transformation Services | DevLogix',
    description:
      'Transform Operations, Not Just Digitize Paper Processes. End-to-end enterprise digital transformation, legacy modernization, workflow automation, and change enablement.',
  },
  hero: {
    badge: 'DIGITAL TRANSFORMATION',
    heading: 'Transform Operations, Not Just Digitize Paper Processes.',
    subtitle:
      'We architect end-to-end digital transformation strategies that modernize legacy systems, automate core workflows, and unlock new revenue streams across your entire organization.',
    ctaText: 'Start Your Transformation',
    ctaHref: '#what-we-deliver',
    imageSrc: '/images/services/hero-right-Digi.png',
    fallbackSrc: '/images/services/digital-transformation/hero-dx.jpg',
    bgSrc: '/images/services/hero-section-AI.png',
    hasGridBg: false,
  },
  keyChallenges: {
    eyebrow: 'KEY CHALLENGES',
    title: 'Where Digital Transformation Efforts Stall and Burn Budget',
    items: [
      {
        id: 'legacy-systems',
        badge: 'DATA SOURCING',
        badgeColor: 'orange',
        title: 'Legacy systems that resist integration',
        description:
          'Decades-old monoliths with no APIs, undocumented business logic, and brittle dependencies make every modernization attempt feel like defusing a bomb.',
      },
      {
        id: 'change-resistance',
        badge: 'ENGINEERING GAP',
        badgeColor: 'rose',
        title: 'Change resistance across the organization',
        description:
          'New tools and workflows fail when teams aren’t brought along. Without structured change management, adoption stalls and ROI evaporates within months.',
      },
      {
        id: 'siloed-data',
        badge: 'QUALITY & SAFETY',
        badgeColor: 'rose',
        title: 'Siloed data blocking unified operations',
        description:
          'Departments operate on disconnected systems with conflicting data. Customer records, inventory, and financials can’t be reconciled without manual effort.',
      },
      {
        id: 'transformation-roadmaps',
        badge: 'BUSINESS CASE',
        badgeColor: 'orange',
        title: 'Transformation roadmaps with no measurable milestones',
        description:
          'Multi-year programs with vague goals drain capital. Without phased delivery and clear KPIs, leadership loses confidence before value materializes.',
      },
    ],
  },
  whatWeDeliver: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'Digital Transformation Services',
    subtitle:
      'We embed transformation expertise across your organization, moving you past surface-level digitization to true operational reinvention.',
    tabs: [
      {
        id: 'strategy',
        label: 'Strategy',
        title: 'Digital Strategy & Roadmapping',
        description:
          'A scattered tool stack is a liability; an integrated digital ecosystem is an asset. We map your current state, define target architecture, and build phased roadmaps that deliver value every quarter.',
        bullets: [
          'Business process mapping & automation design (BPMN, Camunda)',
          'Legacy system integration via APIs, middleware (MuleSoft, Dell Boomi)',
          'Change management frameworks & organizational adoption planning',
        ],
        imageSrc: '/images/services/split-right-Digi.png',
        fallbackSrc: '/images/services/digital-transformation/strategy-preview.png',
      },
      {
        id: 'modernization',
        label: 'Modernization',
        title: 'Legacy Modernization & Cloud Replatforming',
        description:
          'Deconstruct rigid monoliths into modular, cloud-native services with zero operational downtime and complete data integrity.',
        bullets: [
          'Monolith-to-microservices decomposition and containerization',
          'Mainframe and legacy database offloading with real-time replication',
          'Automated regression testing and rollback resilience pipelines',
        ],
        imageSrc: '/images/services/split-right-Digi.png',
        fallbackSrc: '/images/services/digital-transformation/strategy-preview.png',
      },
      {
        id: 'process-automation',
        label: 'Process Automation',
        title: 'Intelligent Process Automation & Orchestration',
        description:
          'Eliminate repetitive operational bottlenecks with end-to-end workflow automation that unifies humans, systems, and bots.',
        bullets: [
          'Straight-through document processing and OCR data extraction',
          'Cross-departmental approvals and automated exception routing',
          'Real-time SLA monitoring and task completion telemetry',
        ],
        imageSrc: '/images/services/split-right-Digi.png',
        fallbackSrc: '/images/services/digital-transformation/strategy-preview.png',
      },
      {
        id: 'integration',
        label: 'Integration',
        title: 'Enterprise System & Data Integration',
        description:
          'Break down functional silos with robust API management, enterprise event buses, and unified data pipelines.',
        bullets: [
          'Custom API gateway design, rate-limiting, and developer portals',
          'Bi-directional ERP, CRM, and supply chain data synchronization',
          'Event-driven architectures using Apache Kafka and RabbitMQ',
        ],
        imageSrc: '/images/services/split-right-Digi.png',
        fallbackSrc: '/images/services/digital-transformation/strategy-preview.png',
      },
      {
        id: 'analytics',
        label: 'Analytics',
        title: 'Operational Intelligence & Executive Dashboards',
        description:
          'Transform fragmented operational metrics into unified, executive-grade dashboards that drive faster, high-confidence decisions.',
        bullets: [
          'Unified data warehousing and automated ETL across all platforms',
          'Real-time revenue, throughput, and efficiency tracking',
          'Predictive capacity forecasting and anomaly alert systems',
        ],
        imageSrc: '/images/services/split-right-Digi.png',
        fallbackSrc: '/images/services/digital-transformation/strategy-preview.png',
      },
      {
        id: 'change-mgmt',
        label: 'Change Mgmt',
        title: 'Organizational Change Management & Enablement',
        description:
          'Technology succeeds only when people adopt it. We embed structured enablement programs to guarantee high user engagement and lasting cultural change.',
        bullets: [
          'Role-based training curriculums and interactive digital sandboxes',
          'Change champion networks and feedback deflection loops',
          'Executive alignment sessions and measurable adoption scorecards',
        ],
        imageSrc: '/images/services/split-right-Digi.png',
        fallbackSrc: '/images/services/digital-transformation/strategy-preview.png',
      },
    ],
  },
  deliverySteps: {
    eyebrow: 'PROCESS',
    title: 'Our Transformation Delivery Steps',
    subtitle:
      'We eliminate risk through phased milestones that validate both technical readiness and organizational adoption at every stage.',
    steps: [
      {
        stepNumber: '01',
        title: 'Current State Audit',
        description:
          'We map your entire technology landscape, business processes, and organizational readiness to identify transformation priorities and quick wins.',
      },
      {
        stepNumber: '02',
        title: 'Target Architecture',
        description:
          'We design the future-state digital architecture, defining integration points, automation opportunities, and migration sequences.',
      },
      {
        stepNumber: '03',
        title: 'Phased Implementation',
        description:
          'We execute transformation in measured phases, migrating systems, automating workflows, and training teams in parallel.',
      },
      {
        stepNumber: '04',
        title: 'Optimize & Scale',
        description:
          'Continuous monitoring of adoption metrics, process efficiency, and ROI dashboards to drive the next wave of optimization.',
      },
    ],
  },
  poc: {
    eyebrow: 'PROOF OF CONCEPT',
    title: 'Prove it on one process before you transform the org.',
    subtitle:
      'De-risk your investment with a 6-to-8 week transformation pilot on a single business process to prove measurable operational improvement.',
    ctaText: 'Scope a transformation pilot',
    cards: [
      {
        id: 'process-automation-pilot',
        title: 'Process automation pilot',
        description:
          'End-to-end automation of a single high-volume manual process, demonstrating time savings and error reduction metrics.',
        timeline: '4 Weeks',
        iconType: 'message-square',
      },
      {
        id: 'legacy-system-integration',
        title: 'Legacy system integration',
        description:
          'API-based integration between a legacy system and a modern cloud platform, proving data flow and operational continuity.',
        timeline: '6 Weeks',
        iconType: 'bar-chart',
      },
      {
        id: 'digital-workflow-prototype',
        title: 'Digital workflow prototype',
        description:
          'A fully digitized version of a paper-based or email-driven workflow with approval chains, notifications, and audit trails.',
        timeline: '5 Weeks',
        iconType: 'database',
      },
      {
        id: 'analytics-dashboard',
        title: 'Analytics dashboard',
        description:
          'A real-time operational dashboard consolidating data from multiple systems into unified KPIs and actionable insights.',
        timeline: '4 Weeks',
        iconType: 'file-text',
      },
    ],
  },
  tools: {
    eyebrow: 'TOOLS & TECHNOLOGIES',
    title: 'Equipped with enterprise transformation tools',
    rows: [
      ['Salesforce', 'ServiceNow', 'SAP S/4HANA', 'MuleSoft', 'Power BI', 'Tableau'],
      ['Zapier', 'Camunda', 'Dell Boomi', 'Microsoft 365', 'Jira', 'Confluence'],
      ['Azure DevOps', 'Workday', 'HubSpot', 'Kubernetes', 'Snowflake', 'Terraform'],
    ],
  },
  industries: {
    eyebrow: 'INDUSTRIES WE SERVE',
    title: 'Driving digital evolution across every industry',
    cards: [
      {
        id: 'travel-hospitality',
        title: 'Travel & Hospitality',
        imageSrc: '/images/services/industry-card.png',
        fallbackSrc: '/images/services/industry-card.png',
        description:
          'Dynamic pricing, hyper-personalized itinerary routing, and agentic booking assistants.',
      },
      {
        id: 'retail-cpg',
        title: 'Retail & CPG',
        imageSrc: '/images/services/industry-card (1).png',
        fallbackSrc: '/images/services/industry-card (1).png',
        description:
          'Supply chain forecasting, personalized product recommendation models, and conversational search.',
      },
      {
        id: 'oil-gas-energy',
        title: 'Oil, Gas & Energy',
        imageSrc: '/images/services/industry-card (2).png',
        fallbackSrc: '/images/services/industry-card (2).png',
        description:
          'Preventive maintenance modeling, seismic data analytics, and workflow automation.',
      },
      {
        id: 'banking-finance',
        title: 'Banking & Finance',
        imageSrc: '/images/services/industry-card (3).png',
        fallbackSrc: '/images/services/industry-card (3).png',
        description:
          'Automated audit workflows, predictive risk compliance modeling, and real-time fraud detection.',
      },
    ],
  },
  engagementModels: {
    eyebrow: 'ENGAGEMENT MODELS',
    title: 'Three ways to bring us in',
    ctaText: "Let's Talk",
    cards: [
      {
        id: 'project-scope',
        badge: 'PROJECT SCOPE',
        title: 'Full AI Build',
        description:
          'We assume end-to-end responsibility for engineering. From model selection and data platforming to live deployment and UI product design.',
        bestFor: 'Completing high-priority initiatives with clear specifications and aggressive timelines.',
        timeline: '3 - 6 Months',
      },
      {
        id: 'ongoing',
        badge: 'ONGOING',
        title: 'Embedded AI Team',
        description:
          'We embed senior ML engineers, data pipelines architects, and DevOps experts directly into your sprint cycle to scale internal output.',
        bestFor: 'Long-term technological growth, continuous feature expansion, and continuous model improvement.',
        timeline: 'Flexible retainer',
      },
      {
        id: 'fixed-scope',
        badge: 'FIXED SCOPE',
        title: 'AI Readiness Assessment',
        description:
          'A 2-week technical sprint assessing your data architecture pipelines, model feasibility, and building a secure deployment roadmap.',
        bestFor: 'Teams looking to de-risk investment and validate technical feasibility before writing code.',
        timeline: '2 Weeks',
      },
    ],
  },
  faqs: {
    eyebrow: 'FAQS',
    title: 'Frequently Asked Questions',
    subtitle:
      'Have questions about transformation scope, change management, or timelines? Speak directly to our transformation leadership team.',
    ctaText: "Let's Talk",
    items: [
      {
        id: 'faq-1',
        question: 'What does digital transformation actually involve?',
        answer:
          'Digital transformation is a holistic reinvention of how your business operates and delivers value. It goes beyond digitizing paper processes to re-architecting technology stacks, automating complex manual workflows, breaking down data silos, and aligning organizational culture around modern, digital-first operations.',
      },
      {
        id: 'faq-2',
        question: 'Do you replace legacy systems or integrate with them?',
        answer:
          'We prioritize strategic integration and phased migration rather than risky rip-and-replace overhauls. We build modern API layers, middleware connectors, and event pipelines around legacy monoliths to unlock immediate value while steadily migrating core capabilities to the cloud with zero operational downtime.',
      },
      {
        id: 'faq-3',
        question: 'Our processes are heavily manual. Where do we start?',
        answer:
          'We begin with a comprehensive 2-to-4 week operational audit to map workflows, quantify manual hours, and assess integration bottlenecks. From there, we identify "lighthouse projects"—high-impact, low-complexity processes that can be automated rapidly to prove ROI within 6 to 8 weeks.',
      },
      {
        id: 'faq-4',
        question: 'How do you handle organizational change resistance?',
        answer:
          'Technology fails when teams are left behind. We integrate structured change management from day one, including role-specific training sessions, hands-on digital sandboxes, feedback deflection channels, and cross-functional champion networks to guarantee enthusiastic adoption.',
      },
      {
        id: 'faq-5',
        question: 'Should we transform everything at once or in phases?',
        answer:
          'We strongly recommend a phased, value-driven roadmap. Transformation programs that attempt big-bang rollouts carry high risk and budget fatigue. Delivering in 8-to-12 week increments ensures each milestone generates measurable business ROI and funds the next phase of innovation.',
      },
      {
        id: 'faq-6',
        question: 'How do you ensure data security during migration?',
        answer:
          'Security, compliance, and sovereignty are foundational. We implement strict zero-trust network protocols, end-to-end data encryption at rest and in transit, automated compliance verification (SOC 2, HIPAA, GDPR), and parallel rollback environments to guarantee complete business continuity.',
      },
      {
        id: 'faq-7',
        question: 'What is the typical ROI timeline for a transformation engagement?',
        answer:
          'Targeted automation pilots deliver measurable cost savings and throughput gains within 60 to 90 days. Comprehensive enterprise modernization programs typically achieve full capital payback within 9 to 14 months through reduced licensing, headcount efficiency, and new digital revenue streams.',
      },
    ],
  },
};

// 4. Software Development Service Detail Data
export const softwareDevelopmentServiceData: ServiceDetailData = {
  slug: 'software-development',
  meta: {
    title: 'Custom Software Development Services | DevLogix',
    description:
      'Software That Scales With Your Ambition, Not Against It. Robust full-stack engineering, microservices, cloud-native platforms, and dedicated dev teams.',
  },
  hero: {
    badge: 'SOFTWARE DEVELOPMENT',
    heading: 'Software That Scales With Your Ambition, Not Against It.',
    subtitle:
      'We engineer robust, scalable software solutions — from custom platforms to microservices architectures — that ship on time, perform under pressure, and evolve with your business.',
    ctaText: 'Explore Dev Solutions',
    ctaHref: '#what-we-deliver',
    imageSrc: '/images/services/software-dev/hero-right.png',
    fallbackSrc: '/images/services/sd-hero.jpg',
    bgSrc: '/images/services/hero-section-AI.png',
    hasGridBg: false,
  },
  keyChallenges: {
    eyebrow: 'KEY CHALLENGES',
    title: 'Where Software Projects Derail Before They Deliver Value',
    items: [
      {
        id: 'monolithic-codebases',
        badge: 'DATA SOURCING',
        badgeColor: 'orange',
        title: 'Monolithic codebases that resist change',
        description:
          'Years of feature layering without architectural discipline create fragile monoliths. Every new release risks breaking existing functionality and slows time-to-market.',
      },
      {
        id: 'talent-gaps',
        badge: 'ENGINEERING GAP',
        badgeColor: 'rose',
        title: 'Talent gaps that block critical initiatives',
        description:
          'Finding senior engineers skilled in modern stacks, DevOps, and security is increasingly competitive. Projects stall for months waiting on hiring that may never close.',
      },
      {
        id: 'technical-debt',
        badge: 'QUALITY & SAFETY',
        badgeColor: 'rose',
        title: 'Technical debt compounding with every sprint',
        description:
          'Shortcuts taken under deadline pressure accumulate. Test coverage erodes, documentation goes stale, and refactoring becomes a project in itself that never gets prioritized.',
      },
      {
        id: 'vendor-lockin',
        badge: 'BUSINESS CASE',
        badgeColor: 'orange',
        title: 'Vendor lock-in limiting future flexibility',
        description:
          'Proprietary frameworks and single-cloud dependencies create switching costs that grow every quarter. When requirements change, you’re trapped negotiating instead of building.',
      },
    ],
  },
  whatWeDeliver: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'Custom Software Development Services',
    subtitle:
      'We embed engineering excellence into every layer of your stack, moving you past throwaway prototypes to production-grade, maintainable software.',
    tabs: [
      {
        id: 'full-stack',
        label: 'Full-Stack Dev',
        title: 'Full-Stack Application Development',
        description:
          'Unstructured code is a liability; clean architecture is an asset. We build scalable full-stack applications using modern frameworks, clean code practices, and automated testing pipelines.',
        bullets: [
          'Clean architecture & SOLID principles (React, Node.js, .NET)',
          'Automated CI/CD pipelines with full test coverage (Jest, Cypress)',
          'Microservices & API design with OpenAPI and GraphQL schemas',
        ],
        imageSrc: '/images/services/software-dev/split-right.png',
        fallbackSrc: '/images/services/sd-preview.png',
      },
      {
        id: 'api-backend',
        label: 'API & Backend',
        title: 'High-Performance Backend & API Systems',
        description:
          'Engineer fault-tolerant backend services capable of handling millions of concurrent requests with sub-millisecond latencies.',
        bullets: [
          'Distributed event-driven architectures with Kafka & RabbitMQ',
          'Robust rate-limiting, authentication (OAuth2, JWT), and caching layers (Redis)',
          'Database modeling and performance tuning (PostgreSQL, MongoDB)',
        ],
        imageSrc: '/images/services/software-dev/split-right.png',
        fallbackSrc: '/images/services/sd-preview.png',
      },
      {
        id: 'mobile-apps',
        label: 'Mobile Apps',
        title: 'Cross-Platform & Native Mobile Engineering',
        description:
          'Ship responsive, high-framerate iOS and Android apps using unified codebases without sacrificing native capabilities.',
        bullets: [
          'Production React Native and Flutter cross-platform architecture',
          'Native device integrations, biometric auth, and push notification pipelines',
          'Offline-first synchronization with resilient local data storage',
        ],
        imageSrc: '/images/services/software-dev/split-right.png',
        fallbackSrc: '/images/services/sd-preview.png',
      },
      {
        id: 'devops',
        label: 'DevOps & CI/CD',
        title: 'Cloud DevOps, Automation & Site Reliability',
        description:
          'Eliminate release anxiety with automated deployment pipelines, infrastructure as code, and proactive monitoring.',
        bullets: [
          'Automated multi-stage CI/CD pipelines with zero-downtime rollouts',
          'Infrastructure as Code (IaC) using Terraform and Kubernetes orchestration',
          'Real-time observability, alerting, and APM tracing (Datadog, Prometheus)',
        ],
        imageSrc: '/images/services/software-dev/split-right.png',
        fallbackSrc: '/images/services/sd-preview.png',
      },
      {
        id: 'qa-testing',
        label: 'QA & Testing',
        title: 'Automated Quality Engineering & Testing',
        description:
          'Embed continuous quality gates throughout development cycles to detect regressions before they reach staging.',
        bullets: [
          'End-to-end automated functional and regression test suites',
          'Performance load testing, stress benchmarks, and capacity profiling',
          'Static security analysis (SAST) and automated dependency vulnerability scans',
        ],
        imageSrc: '/images/services/software-dev/split-right.png',
        fallbackSrc: '/images/services/sd-preview.png',
      },
      {
        id: 'architecture',
        label: 'Architecture',
        title: 'Enterprise Software Architecture & Modernization',
        description:
          'Design future-proof system topologies that accommodate 10x traffic growth without requiring costly structural rewrites.',
        bullets: [
          'Legacy monolith decomposition and domain-driven design (DDD)',
          'Multi-tenant SaaS multi-region architecture and database partitioning',
          'Comprehensive technical roadmaps and architectural governance',
        ],
        imageSrc: '/images/services/software-dev/split-right.png',
        fallbackSrc: '/images/services/sd-preview.png',
      },
    ],
  },
  deliverySteps: {
    eyebrow: 'PROCESS',
    title: 'Our Development Delivery Steps',
    subtitle:
      'We eliminate scope creep through structured sprints that validate working software against business requirements at every iteration.',
    steps: [
      {
        stepNumber: '01',
        title: 'Requirements & Architecture',
        description:
          'We define functional requirements, choose the optimal tech stack, and design a scalable system architecture with clear milestones.',
      },
      {
        stepNumber: '02',
        title: 'MVP Development',
        description:
          'Within weeks, we deliver a working MVP with core features, automated tests, and CI/CD pipeline ready for stakeholder feedback.',
      },
      {
        stepNumber: '03',
        title: 'Full Build & QA',
        description:
          'We build the complete feature set with rigorous code reviews, automated testing suites, performance optimization, and security hardening.',
      },
      {
        stepNumber: '04',
        title: 'Deploy & Maintain',
        description:
          'Continuous deployment, monitoring, bug fixes, and feature iterations based on user feedback and analytics data.',
      },
    ],
  },
  poc: {
    eyebrow: 'PROOF OF CONCEPT',
    title: 'Prove it with a working MVP before you scale it.',
    subtitle:
      'De-risk your investment with a 4-to-8 week MVP sprint that delivers a working prototype to validate core functionality and user adoption.',
    ctaText: 'Scope an MVP sprint',
    cards: [
      {
        id: 'custom-web-application',
        title: 'Custom web application',
        description:
          'A responsive web application with authentication, role-based access, and core business logic demonstrated on production data.',
        timeline: '4 Weeks',
        iconType: 'message-square',
      },
      {
        id: 'api-microservice',
        title: 'API & microservice',
        description:
          'A RESTful or GraphQL API with documentation, rate limiting, and integration tests, ready to connect with existing systems.',
        timeline: '6 Weeks',
        iconType: 'bar-chart',
      },
      {
        id: 'mobile-app-prototype',
        title: 'Mobile app prototype',
        description:
          'A cross-platform mobile application with native-feel UX, offline capability, and push notifications for core user workflows.',
        timeline: '4 Weeks',
        iconType: 'database',
      },
      {
        id: 'devops-pipeline-setup',
        title: 'DevOps pipeline setup',
        description:
          'Fully automated CI/CD pipeline with infrastructure-as-code, staging environments, monitoring, and zero-downtime deployment.',
        timeline: '4 Weeks',
        iconType: 'file-text',
      },
    ],
  },
  tools: {
    eyebrow: 'TOOLS & TECHNOLOGIES',
    title: 'Equipped with modern dev stacks & tools',
    rows: [
      ['React / Next.js', 'Angular', 'Node.js', '.NET Core', 'Python', 'TypeScript'],
      ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'GitHub Actions', 'Jenkins'],
      ['AWS / Azure / GCP', 'Terraform', 'GraphQL', 'Kubernetes', 'Elasticsearch', 'RabbitMQ'],
    ],
  },
  industries: {
    eyebrow: 'INDUSTRIES WE SERVE',
    title: 'Building software solutions for every industry',
    cards: [
      {
        id: 'travel-hospitality',
        title: 'Travel & Hospitality',
        imageSrc: '/images/services/industry-card.png',
        fallbackSrc: '/images/services/industry-card.png',
        description:
          'Dynamic pricing, hyper-personalized itinerary routing, and agentic booking assistants.',
      },
      {
        id: 'retail-cpg',
        title: 'Retail & CPG',
        imageSrc: '/images/services/industry-card (1).png',
        fallbackSrc: '/images/services/industry-card (1).png',
        description:
          'Supply chain forecasting, personalized product recommendation models, and conversational search.',
      },
      {
        id: 'oil-gas-energy',
        title: 'Oil, Gas & Energy',
        imageSrc: '/images/services/industry-card (2).png',
        fallbackSrc: '/images/services/industry-card (2).png',
        description:
          'Preventive maintenance modeling, seismic data analytics, and workflow automation.',
      },
      {
        id: 'banking-finance',
        title: 'Banking & Finance',
        imageSrc: '/images/services/industry-card (3).png',
        fallbackSrc: '/images/services/industry-card (3).png',
        description:
          'Automated audit workflows, predictive risk compliance modeling, and real-time fraud detection.',
      },
    ],
  },
  engagementModels: {
    eyebrow: 'ENGAGEMENT MODELS',
    title: 'Three ways to bring us in',
    ctaText: "Let's Talk",
    cards: [
      {
        id: 'project-scope',
        badge: 'PROJECT SCOPE',
        title: 'Full AI Build',
        description:
          'We assume end-to-end responsibility for engineering. From model selection and data platforming to live deployment and UI product design.',
        bestFor: 'Completing high-priority initiatives with clear specifications and aggressive timelines.',
        timeline: '3 - 6 Months',
      },
      {
        id: 'ongoing',
        badge: 'ONGOING',
        title: 'Embedded AI Team',
        description:
          'We embed senior ML engineers, data pipelines architects, and DevOps experts directly into your sprint cycle to scale internal output.',
        bestFor: 'Long-term technological growth, continuous feature expansion, and continuous model improvement.',
        timeline: 'Flexible retainer',
      },
      {
        id: 'fixed-scope',
        badge: 'FIXED SCOPE',
        title: 'AI Readiness Assessment',
        description:
          'A 2-week technical sprint assessing your data architecture pipelines, model feasibility, and building a secure deployment roadmap.',
        bestFor: 'Teams looking to de-risk investment and validate technical feasibility before writing code.',
        timeline: '2 Weeks',
      },
    ],
  },
  faqs: {
    eyebrow: 'FAQS',
    title: 'Frequently Asked Questions',
    subtitle:
      'Have questions about architecture, tech stack, or delivery timelines? Speak directly to our engineering leadership team.',
    ctaText: "Let's Talk",
    items: [
      {
        id: 'faq-1',
        question: 'What technologies do you specialize in?',
        answer:
          'We specialize in modern enterprise stacks across frontend, backend, mobile, and cloud infrastructure. Our primary technologies include React, Next.js, TypeScript, Node.js, Python, .NET Core, React Native, Flutter, PostgreSQL, MongoDB, Docker, Kubernetes, AWS, Azure, and Google Cloud.',
      },
      {
        id: 'faq-2',
        question: 'Do you handle frontend, backend, and infrastructure?',
        answer:
          'Yes, we provide end-to-end engineering teams that cover every layer of development. From pixel-perfect, accessible frontends and resilient API microservices to cloud infrastructure, automated CI/CD pipelines, and 24/7 reliability monitoring, we take full technical ownership.',
      },
      {
        id: 'faq-3',
        question: 'Our existing codebase is outdated. Can you modernize it?',
        answer:
          'Absolutely. We specialize in legacy system modernization and technical debt remediation. We perform deep architectural audits, establish comprehensive automated test coverage, and incrementally decompose monoliths into clean microservices or serverless architectures with zero downtime.',
      },
      {
        id: 'faq-4',
        question: 'How do you ensure code quality and prevent technical debt?',
        answer:
          'We adhere to strict engineering standards: test-driven development (TDD), mandatory peer code reviews, automated CI/CD linting and static analysis (SonarQube), branch protection rules, and continuous refactoring baked directly into our two-week sprint cycles.',
      },
      {
        id: 'faq-5',
        question: 'Should we build custom software or use off-the-shelf solutions?',
        answer:
          'If a workflow represents your core competitive advantage or requires bespoke integration with proprietary systems, custom software provides unmatched flexibility and long-term cost efficiency. For generic commodities, we recommend integrating best-in-class SaaS platforms to save time and capital.',
      },
      {
        id: 'faq-6',
        question: 'How do you handle security and compliance requirements?',
        answer:
          'Security is embedded into every phase of our software development life cycle (DevSecOps). We implement OWASP top 10 protections, automated dependency vulnerability scanning, zero-trust network boundaries, role-based access controls, and ensure compliance with SOC 2, HIPAA, and GDPR standards.',
      },
      {
        id: 'faq-7',
        question: 'What is the typical cost and timeline for a custom software project?',
        answer:
          'Targeted MVP sprints and rapid proof of concepts typically deliver working software in 4 to 8 weeks. Full enterprise platform builds and large-scale migrations range from 3 to 9 months depending on functional complexity, integrations, and compliance requirements.',
      },
    ],
  },
};

export const cloudSolutionsServiceData: ServiceDetailData = {
  slug: 'cloud-solutions',
  meta: {
    title: 'Cloud Solutions & Migration Services | DevLogix',
    description:
      'Cloud Infrastructure That Performs, Not Just Exists in a Dashboard. We design, migrate, and manage cloud architectures on AWS, Azure, and GCP that cut costs, guarantee uptime, and scale elastically.',
  },
  hero: {
    badge: 'CLOUD SOLUTIONS',
    heading: 'Cloud Infrastructure That Performs, Not Just Exists in a Dashboard.',
    subtitle:
      'We design, migrate, and manage cloud architectures on AWS, Azure, and GCP that cut costs, guarantee uptime, and scale elastically with your traffic.',
    ctaText: 'Explore Cloud Solutions',
    ctaHref: '#what-we-deliver',
    imageSrc: '/images/services/hero-right-cloud.png',
    fallbackSrc: '/images/services/hero-right-cloud.png',
    hasGridBg: true,
    activeBadgeText: '05 — CLOUD SOLUTIONS',
  },
  keyChallenges: {
    eyebrow: 'KEY CHALLENGES',
    title: 'Where Cloud Investments Leak Budget Without Delivering Uptime',
    items: [
      {
        id: 'cloud-challenge-1',
        badge: 'DATA SOURCING',
        badgeColor: 'orange',
        title: 'Runaway cloud bills with no visibility',
        description:
          'Over-provisioned instances, forgotten resources, and untagged assets inflate costs monthly. Without FinOps discipline, cloud spend grows 30-40% faster than workloads demand.',
      },
      {
        id: 'cloud-challenge-2',
        badge: 'ENGINEERING GAP',
        badgeColor: 'rose',
        title: 'Migrations that stall mid-flight',
        description:
          'Lift-and-shift projects hit hidden dependencies, data-gravity issues, and compliance blockers that halt progress. Half-migrated environments are the worst of both worlds.',
      },
      {
        id: 'cloud-challenge-3',
        badge: 'QUALITY & SAFETY',
        badgeColor: 'rose',
        title: 'Security gaps across multi-cloud sprawl',
        description:
          'Misconfigured IAM roles, exposed storage buckets, and unencrypted data channels create vulnerabilities that grow with every new service deployed across clouds.',
      },
      {
        id: 'cloud-challenge-4',
        badge: 'BUSINESS CASE',
        badgeColor: 'orange',
        title: 'Single-cloud lock-in limiting agility',
        description:
          "Deep investment in one provider's proprietary services creates exit costs that climb every quarter. When pricing changes or outages hit, you have no leverage or fallback.",
      },
    ],
  },
  whatWeDeliver: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'Cloud Architecture & Migration Services',
    subtitle:
      'We embed cloud-native expertise across your infrastructure, moving you past lift-and-shift to truly elastic, cost-optimized architectures.',
    tabs: [
      {
        id: 'cloud-migration',
        label: 'Cloud Migration',
        title: 'Cloud Migration & Modernization',
        description:
          'On-premise sprawl is a liability; cloud-native architecture is an asset. We plan and execute zero-downtime migrations, re-platforming legacy workloads into containerized, auto-scaling cloud environments.',
        bullets: [
          'Multi-cloud architecture design (AWS, Azure, GCP)',
          'Infrastructure-as-code with Terraform, Pulumi, and CloudFormation',
          'Zero-trust security architecture with IAM, VPC, and encryption',
        ],
        imageSrc: '/images/services/cloud.png',
      },
      {
        id: 'infrastructure',
        label: 'Infrastructure',
        title: 'Scalable Cloud Infrastructure as Code',
        description:
          'Automate provisioning and eliminate configuration drift with modular, declarative IaC blueprints that deploy identical environments across development, staging, and production.',
        bullets: [
          'Terraform & Pulumi declarative environment modules',
          'Automated CI/CD infrastructure deployment pipelines',
          'Multi-region high availability and disaster recovery topologies',
        ],
        imageSrc: '/images/services/cloud.png',
      },
      {
        id: 'kubernetes-containers',
        label: 'Kubernetes & Containers',
        title: 'Container Orchestration & Microservices',
        description:
          'De-risk container deployments with enterprise-grade Kubernetes setups, service meshes, and automated auto-scaling policies that maintain responsiveness under surge.',
        bullets: [
          'Managed K8s clusters on EKS, AKS, and GKE',
          'Service mesh integration with Istio and Linkerd',
          'Canary deployments, blue-green releases, and progressive delivery',
        ],
        imageSrc: '/images/services/cloud-datacenter.jpg',
      },
      {
        id: 'finops',
        label: 'FinOps',
        title: 'FinOps & Continuous Cloud Cost Governance',
        description:
          'Regain financial control over cloud sprawl with automated resource right-sizing, commitment management, and transparent team-level attribution.',
        bullets: [
          'Rightsizing recommendations and idle resource cleanup',
          'Reserved Instance and Savings Plans optimization',
          'Automated spending alerts and multi-tenant cost allocation',
        ],
        imageSrc: '/images/services/cloud.png',
      },
      {
        id: 'security',
        label: 'Security',
        title: 'Zero-Trust Cloud Security & Compliance',
        description:
          'Harden cloud attack surfaces with continuous posture management, zero-trust network micro-segmentation, and automated compliance auditing.',
        bullets: [
          'Cloud Security Posture Management (CSPM) and GuardDuty',
          'Granular IAM role engineering and least-privilege policies',
          'SOC 2, HIPAA, PCI-DSS, and GDPR continuous compliance',
        ],
        imageSrc: '/images/services/cloud-datacenter.jpg',
      },
      {
        id: 'monitoring',
        label: 'Monitoring',
        title: 'Full-Stack Telemetry & Observability',
        description:
          'Gain complete visibility into distributed microservices and infrastructure health with unified metrics, distributed tracing, and predictive anomaly alerts.',
        bullets: [
          'Unified telemetry dashboards with Datadog, Prometheus, and Grafana',
          'Distributed APM tracing across multi-cloud services',
          'SLO/SLA breach forecasting and automated incident escalation',
        ],
        imageSrc: '/images/services/cloud.png',
      },
    ],
  },
  deliverySteps: {
    eyebrow: 'PROCESS',
    title: 'Our Cloud Delivery Steps',
    subtitle:
      'We eliminate risk through structured migration phases that validate performance, security, and cost efficiency before each workload goes live.',
    steps: [
      {
        stepNumber: '01',
        title: 'Cloud Readiness Audit',
        description:
          'We assess your current infrastructure, workloads, dependencies, and compliance requirements to build a prioritized migration roadmap.',
      },
      {
        stepNumber: '02',
        title: 'Architecture Design',
        description:
          'We design the target cloud architecture with networking, security zones, auto-scaling policies, and disaster recovery plans.',
      },
      {
        stepNumber: '03',
        title: 'Migrate & Deploy',
        description:
          'We execute zero-downtime migration in waves, containerizing workloads, configuring CI/CD, and validating performance at each stage.',
      },
      {
        stepNumber: '04',
        title: 'Optimize & Govern',
        description:
          'Continuous cost optimization, security monitoring, compliance audits, and infrastructure scaling based on real-time usage patterns.',
      },
    ],
  },
  poc: {
    eyebrow: 'PROOF OF CONCEPT',
    title: 'Prove it with one workload before you migrate everything.',
    subtitle:
      'De-risk your cloud move with a 4-to-6 week pilot migration that proves performance, cost savings, and security compliance on a single critical workload.',
    ctaText: 'Scope a migration pilot',
    cards: [
      {
        id: 'cloud-poc-1',
        title: 'Workload migration pilot',
        iconType: 'message-square',
        description:
          'Migration of a single production workload to the cloud with full performance benchmarking, security hardening, and cost analysis.',
        timeline: '4 Weeks',
      },
      {
        id: 'cloud-poc-2',
        title: 'Kubernetes cluster setup',
        iconType: 'bar-chart',
        description:
          'Production-grade Kubernetes cluster with auto-scaling, service mesh, monitoring, and CI/CD pipeline for containerized deployments.',
        timeline: '5 Weeks',
      },
      {
        id: 'cloud-poc-3',
        title: 'FinOps cost optimization',
        iconType: 'database',
        description:
          'Complete cloud cost audit with rightsizing recommendations, reserved instance planning, and automated cost governance policies.',
        timeline: '4 Weeks',
      },
      {
        id: 'cloud-poc-4',
        title: 'Disaster recovery setup',
        iconType: 'file-text',
        description:
          'Multi-region disaster recovery architecture with automated failover, RPO/RTO validation, and runbook documentation.',
        timeline: '4 Weeks',
      },
    ],
  },
  tools: {
    eyebrow: 'TOOLS & TECHNOLOGIES',
    title: 'Equipped with cloud-native platforms & tools',
    rows: [
      ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform', 'Pulumi', 'Ansible'],
      ['Docker', 'Kubernetes', 'Istio', 'Prometheus', 'Grafana', 'Datadog'],
      ['CloudFormation', 'Helm', 'ArgoCD', 'Vault', 'AWS Lambda', 'Azure Functions'],
    ],
  },
  industries: {
    eyebrow: 'INDUSTRIES WE SERVE',
    title: 'Powering cloud infrastructure across every industry',
    cards: [
      {
        id: 'cloud-ind-1',
        title: 'Travel & Hospitality',
        description:
          'Dynamic pricing, hyper-personalized itinerary routing, and agentic booking assistants.',
        imageSrc: '/images/services/industry-card.png',
        fallbackSrc: '/images/services/industry-card.png',
      },
      {
        id: 'cloud-ind-2',
        title: 'Retail & CPG',
        description:
          'Supply chain forecasting, personalized product recommendation models, and conversational search.',
        imageSrc: '/images/services/industry-card (1).png',
        fallbackSrc: '/images/services/industry-card (1).png',
      },
      {
        id: 'cloud-ind-3',
        title: 'Oil, Gas & Energy',
        description:
          'Preventive maintenance modeling, seismic data analytics, and workflow automation.',
        imageSrc: '/images/services/industry-card (2).png',
        fallbackSrc: '/images/services/industry-card (2).png',
      },
      {
        id: 'cloud-ind-4',
        title: 'Banking & Finance',
        description:
          'Automated audit workflows, predictive risk compliance modeling, and real-time fraud detection.',
        imageSrc: '/images/services/industry-card (3).png',
        fallbackSrc: '/images/services/industry-card (3).png',
      },
    ],
  },
  engagementModels: {
    eyebrow: 'ENGAGEMENT MODELS',
    title: 'Three ways to bring us in',
    ctaText: "Let's Talk",
    cards: [
      {
        id: 'cloud-eng-1',
        badge: 'PROJECT SCOPE',
        title: 'Full AI Build',
        description:
          'We assume end-to-end responsibility for engineering. From model selection and data platforming to live deployment and UI product design.',
        bestFor:
          'Completing high-priority initiatives with clear specifications and aggressive timelines.',
        timeline: '3 - 6 Months',
      },
      {
        id: 'cloud-eng-2',
        badge: 'ONGOING',
        title: 'Embedded AI Team',
        description:
          'We embed senior ML engineers, data pipelines architects, and DevOps experts directly into your sprint cycle to scale internal output.',
        bestFor:
          'Long-term technological growth, continuous feature expansion, and continuous model improvement.',
        timeline: 'Flexible retainer',
      },
      {
        id: 'cloud-eng-3',
        badge: 'FIXED SCOPE',
        title: 'AI Readiness Assessment',
        description:
          'A 2-week technical sprint assessing your data architecture pipelines, model feasibility, and building a secure deployment roadmap.',
        bestFor:
          'Teams looking to de-risk investment and validate technical feasibility before writing code.',
        timeline: '2 Weeks',
      },
    ],
  },
  faqs: {
    eyebrow: 'FAQS',
    title: 'Frequently Asked Questions',
    subtitle:
      'Have questions about cloud architecture, migration planning, or cost optimization? Speak directly to our cloud engineering team.',
    ctaText: "Let's Talk",
    items: [
      {
        id: 'cloud-faq-1',
        question: 'Which cloud providers do you work with?',
        answer:
          'We hold advanced certifications across all three major public cloud platforms: Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). We also support hybrid deployments and multi-cloud architectures depending on your workload requirements.',
      },
      {
        id: 'cloud-faq-2',
        question: 'Do you manage infrastructure post-migration or just set it up?',
        answer:
          'We offer both flexible models. We can execute a turnkey migration and hand over fully documented Infrastructure-as-Code pipelines to your in-house team, or provide ongoing 24/7 SRE managed services, proactive patching, monitoring, and FinOps cost optimization.',
      },
      {
        id: 'cloud-faq-3',
        question: 'Our infrastructure is fully on-premise. Where do we start?',
        answer:
          'We start with a thorough Cloud Readiness Audit. We discover all existing physical and virtual workloads, map inter-service dependencies, assess licensing constraints, and establish a staged migration roadmap with clear ROI, cost projections, and zero-downtime transition plans.',
      },
      {
        id: 'cloud-faq-4',
        question: 'How do you ensure zero downtime during cloud migration?',
        answer:
          'We employ phased migration strategies including database change data capture (CDC), bi-directional data replication, blue-green traffic routing, and canary cutovers. Critical production traffic only shifts after the target cloud cluster has been fully validated under simulated peak load.',
      },
      {
        id: 'cloud-faq-5',
        question: 'Should we go multi-cloud or stick with one provider?',
        answer:
          'For most organizations, standardizing on a primary cloud provider with cloud-agnostic primitives (like Kubernetes, Terraform, and PostgreSQL) minimizes operational complexity while avoiding hard lock-in. We evaluate your regulatory, geo-redundancy, and pricing needs to recommend the optimal strategy.',
      },
      {
        id: 'cloud-faq-6',
        question: 'How do you handle data sovereignty and compliance in the cloud?',
        answer:
          'We architect dedicated VPCs, regional data-residency boundaries, and customer-managed encryption keys (KMS) ensuring full compliance with GDPR, HIPAA, SOC 2, and PCI-DSS. Automated policy-as-code guardrails prevent unapproved cross-region data transfers.',
      },
      {
        id: 'cloud-faq-7',
        question: 'What is the typical timeline and cost savings from cloud migration?',
        answer:
          'A targeted workload migration pilot typically takes 4 to 6 weeks. Enterprise-scale migrations are scheduled across 3 to 9 months in planned waves. Post-migration with active FinOps governance, clients routinely achieve 25% to 40% reductions in total cost of infrastructure ownership.',
      },
    ],
  },
};

export const servicesDataMap: Record<string, ServiceDetailData> = {
  'artificial-intelligence': artificialIntelligenceServiceData,
  'ui-ux-design': uiUxDesignServiceData,
  'digital-transformation': digitalTransformationServiceData,
  'software-development': softwareDevelopmentServiceData,
  'cloud-solutions': cloudSolutionsServiceData,
};

export const servicesData = servicesDataMap;

export function getServiceData(slug: string): ServiceDetailData | undefined {
  return servicesDataMap[slug];
}
