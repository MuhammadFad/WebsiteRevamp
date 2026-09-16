export interface ChallengeItem {
  id: string;
  badge: string;
  badgeColor: 'orange' | 'rose';
  title: string;
  description: string;
}

export interface InnovationTab {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  fallbackSrc?: string;
}

export interface DeliveryStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface PocItem {
  id: string;
  title: string;
  description: string;
  timeline: string;
  iconType: 'message' | 'chart' | 'database' | 'file' | 'message-square' | 'bar-chart' | 'file-text';
}

export interface IndustryCard {
  id: string;
  title: string;
  imageSrc: string;
  fallbackSrc: string;
  description: string;
}

export interface EngagementModel {
  id: string;
  badge: string;
  title: string;
  description: string;
  bestFor: string;
  timeline: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// 1. Key Challenges Data (exact match to Image 3)
export const keyChallengesData: ChallengeItem[] = [
  {
    id: 'data-sourcing',
    badge: 'DATA SOURCING',
    badgeColor: 'orange',
    title: 'Models starved by messy data',
    description:
      'AI is only as good as the pipeline feeding it. Siloed databases, unformatted text, and broken schemas halt models before training starts.',
  },
  {
    id: 'engineering-gap',
    badge: 'ENGINEERING GAP',
    badgeColor: 'rose',
    title: 'Demos that never reach users',
    description:
      'Building a quick prototype in a notebook is easy. Transitioning to a secure, enterprise-grade cloud system with active traffic is where 80% of projects fail.',
  },
  {
    id: 'quality-safety',
    badge: 'QUALITY & SAFETY',
    badgeColor: 'rose',
    title: "Outputs you can't put in front of customers",
    description:
      'Hallucinations, unpredictable prompts, and data leaks make deployment too risky for customer-facing applications without rigorous guardrails.',
  },
  {
    id: 'business-case',
    badge: 'BUSINESS CASE',
    badgeColor: 'orange',
    title: 'Spend without measurable outcomes',
    description:
      'Investing heavily in GPU compute and complex LLMs without aligning them to actual operational efficiencies or top-line business growth.',
  },
];

// 2. Innovation Services / What We Deliver (exact match to Image 4)
export const innovationTabsData: InnovationTab[] = [
  {
    id: 'data-engineering',
    label: 'Data Engineering',
    title: 'Data Engineering & Platforms',
    description:
      'Raw data is a liability; structured data is an asset. We build the high-speed processing pipelines, sovereign data warehouses, and vector storage networks required to fuel modern LLMs.',
    bullets: [
      'Vector database architecture (Pinecone, pgvector)',
      'Automated batch and streaming pipelines (Spark, Kafka)',
      'Sovereign cloud data vaults meeting strict HIPAA/SOC2',
    ],
    imageSrc: '/images/services/split-right-AI.png',
  },
  {
    id: 'ml-engineering',
    label: 'ML Engineering',
    title: 'ML Engineering & Production MLOps',
    description:
      'Move beyond ad-hoc experimentation. We build production training, automated evaluation loops, and zero-downtime serving clusters with sub-millisecond latencies.',
    bullets: [
      'Automated model drift detection & self-healing retraining triggers',
      'Containerized model deployment via Ray, Triton, and Kubernetes',
      'Cost-optimized inference quantization (FP8, INT4, TensorRT-LLM)',
    ],
    imageSrc: '/images/services/split-right-AI.png',
  },
  {
    id: 'gen-ai',
    label: 'Generative AI & LLMs',
    title: 'Generative AI & Enterprise RAG Systems',
    description:
      'Harness sovereign and foundation models customized for your proprietary IP. We engineer advanced multi-hop Retrieval-Augmented Generation with strict factual boundaries.',
    bullets: [
      'Multi-source hybrid search with BM25 and dense embedding reranking',
      'Proprietary domain LoRA and full-parameter model fine-tuning',
      'Hallucination prevention with deterministic semantic guardrails',
    ],
    imageSrc: '/images/services/split-right-AI.png',
  },
  {
    id: 'agentic-ai',
    label: 'Agentic AI',
    title: 'Autonomous Multi-Agent Orchestration',
    description:
      'Deploy autonomous agents capable of dynamic goal formulation, stateful tool calling, human-in-the-loop approvals, and complex multi-step enterprise reasoning.',
    bullets: [
      'LangGraph and custom stateful multi-agent DAG architectures',
      'Self-correcting code execution, SQL generation, and API dispatch',
      'Comprehensive audit trails, sandboxed execution, and safety kill-switches',
    ],
    imageSrc: '/images/services/split-right-AI.png',
  },
  {
    id: 'ai-products',
    label: 'AI Products',
    title: 'Full-Stack Intelligent User Experiences',
    description:
      'AI is only as good as the interface your users interact with. We craft sleek, intuitive software surfaces with streaming responses and rich generative previews.',
    bullets: [
      'Optimistic streaming UI with latency compensation & token buffering',
      'Context-aware copilot surfaces and inline AI suggestion systems',
      'Comprehensive product analytics tracking user adoption and model utility',
    ],
    imageSrc: '/images/services/split-right-AI.png',
  },
  {
    id: 'workshops',
    label: 'Workshops',
    title: 'Executive AI Strategy & Feasibility Sprints',
    description:
      'Equip your technical and executive teams with an actionable, de-risked AI adoption playbook focused on high-yield, measurable opportunities.',
    bullets: [
      'Technical architecture audit and data readiness scoring',
      'Prioritized ROI-to-feasibility matrix for enterprise workflows',
      'Reference architecture design with explicit compliance safeguards',
    ],
    imageSrc: '/images/services/split-right-AI.png',
  },
];

// 3. AI Delivery Steps (exact match to Image 5)
export const deliveryStepsData: DeliveryStep[] = [
  {
    stepNumber: '01',
    title: 'Assessment',
    description:
      'We evaluate your data readiness, technical infrastructure, and target business cases to build a concrete roadmap.',
  },
  {
    stepNumber: '02',
    title: 'Grounded Prototype',
    description:
      'Within weeks, we deploy a production-like prototype working directly with your real dataset.',
  },
  {
    stepNumber: '03',
    title: 'Productionize',
    description:
      'We transition the prototype to scalable cloud services, embedding guardrails and performance layers.',
  },
  {
    stepNumber: '04',
    title: 'Operate & Improve',
    description:
      'Continuous monitoring, prompt tuning, and system optimization based on live production feedback.',
  },
];

// 4. Proof of Concept (POC)
export const pocCardsData: PocItem[] = [
  {
    id: 'grounded-assistant',
    title: 'Grounded assistant',
    description:
      'LLM application grounded with your internal knowledge base, API ecosystem, and role-based permissions.',
    timeline: '4 Weeks',
    iconType: 'message',
  },
  {
    id: 'predictive-model',
    title: 'Predictive model',
    description:
      'Structured ML model predicting churn, customer lifetime value, dynamic pricing, or demand forecasting.',
    timeline: '6 Weeks',
    iconType: 'chart',
  },
  {
    id: 'data-platform-slice',
    title: 'Data platform slice',
    description:
      'End-to-end data pipeline processing a key subset of enterprise data with vector indexing and streaming.',
    timeline: '5 Weeks',
    iconType: 'database',
  },
  {
    id: 'document-automation',
    title: 'Document automation',
    description:
      'Extract metadata, structured JSON, and verified summaries from complex contracts, invoices, and PDFs.',
    timeline: '4 Weeks',
    iconType: 'file',
  },
];

// 5. Tools & Technologies (3 Centered Rows)
export const techBadgesRows = [
  [
    'Claude 3.5 Sonnet',
    'OpenAI GPT-4o',
    'LangChain',
    'LangGraph',
    'PyTorch',
    'TensorFlow',
  ],
  [
    'Hugging Face',
    'Vertex AI',
    'AWS Bedrock',
    'Azure AI Foundry',
    'Pinecone',
    'MLFlow',
  ],
  [
    'Amazon SageMaker',
    'Weights & Biases',
    'Ray',
    'Kubernetes',
    'Snowflake',
    'Databricks',
  ],
];

// 6. Industries We Serve (exact match to Image 1)
export const industriesData: IndustryCard[] = [
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
    imageSrc: '/images/services/industry-card-1.png',
    fallbackSrc: '/images/services/industry-card-1.png',
    description:
      'Supply chain forecasting and personalized product recommendation models',
  },
  {
    id: 'oil-gas-energy',
    title: 'Oil, Gas & Energy',
    imageSrc: '/images/services/industry-card-2.png',
    fallbackSrc: '/images/services/industry-card-2.png',
    description:
      'Preventive maintenance modeling, seismic data analytics, and workflow automation.',
  },
  {
    id: 'banking-finance',
    title: 'Financial Services',
    imageSrc: '/images/services/industry-card-3.png',
    fallbackSrc: '/images/services/industry-card-3.png',
    description:
      'Algorithmic fraud detection, automated compliance reporting, and intelligent risk underwriting.',
  },
];

// 7. Engagement Models
export const engagementModelsData: EngagementModel[] = [
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
];

// 8. Frequently Asked Questions
export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What does AI & Data Systems mean at DevLogix?',
    answer:
      'At DevLogix, AI & Data Systems represents our philosophy that generative models and autonomous agents cannot exist in isolation. We treat data engineering, vector retrieval, scalable cloud infrastructure, and model evaluation as a unified engineering discipline to ship software that is resilient, low-latency, and safe.',
  },
  {
    id: 'faq-2',
    question: 'Do you build the data platform too, or only the AI layer on top?',
    answer:
      'We build both. In fact, over 60% of enterprise AI failure stems from underlying data fragmentation. Our team specializes in lakehouse design, streaming Kafka/Spark pipelines, data governance, and vector indexing alongside our LLM application engineering.',
  },
  {
    id: 'faq-3',
    question: 'Our data is a mess. Can we still do AI?',
    answer:
      'Yes. Most enterprise datasets are unstructured and imperfect. We start by scoping targeted vertical slices—extracting, cleansing, and embedding only the specific high-signal documents and transactional tables needed for your first high-ROI pilot.',
  },
  {
    id: 'faq-4',
    question: 'How do you prevent hallucinations in production?',
    answer:
      'We deploy a multi-layered defense: strict Retrieval-Augmented Generation (RAG) that restricts answers to verified ground truth, deterministic prompt guardrails, semantic schema validators, and real-time automated confidence scoring that flags or escalates uncertain outputs.',
  },
  {
    id: 'faq-5',
    question: 'Build or buy, when should we build?',
    answer:
      'We recommend buying off-the-shelf SaaS for generic horizontal tools (like basic copy assistance). However, when workflows involve proprietary business logic, private customer data, or unique IP that constitutes your competitive moat, building custom bespoke systems delivers far higher enterprise value and lower long-term unit economics.',
  },
  {
    id: 'faq-6',
    question: 'How do you keep our data private?',
    answer:
      'We deploy solutions within your sovereign cloud tenancy (AWS, Azure, or GCP) or on-premise infrastructure. No customer data or prompts are ever used to train public foundation models, and all data is encrypted at rest (AES-256) and in transit with zero external persistence.',
  },
  {
    id: 'faq-7',
    question: 'What does an engagement cost and how fast is value visible?',
    answer:
      'Our targeted Proof-of-Concept pilots typically range from 4 to 6 weeks with fixed transparent pricing, delivering a fully benchmarked production-grade prototype with your data. Full production rollouts scale depending on pipeline complexity and integration depth.',
  },
];
