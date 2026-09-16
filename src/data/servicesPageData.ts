export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  desc?: string;
  iconType: 'code' | 'design' | 'ai' | 'transform' | 'cloud';
}

export interface ProcessStep {
  stepNumber: string;
  num?: string;
  title: string;
  description: string;
  desc?: string;
}

export interface InsightItem {
  id: string;
  badge: string;
  tag?: string;
  date: string;
  title: string;
  excerpt: string;
  desc?: string;
  author: {
    name: string;
    avatarUrl?: string;
  } | string;
  imageUrl: string;
  transmissionHref: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const navItems: NavItem[] = [
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Industries', href: '/industries', hasDropdown: true },
  { label: 'Insights', href: '/insights', hasDropdown: true },
  { label: 'About', href: '/about', hasDropdown: true },
];

export const statsData: StatItem[] = [
  { value: '12+', label: 'INDUSTRIES VERTICALIZED' },
  { value: '7+', label: 'REGIONAL HUBS' },
  { value: '15+', label: 'INDUSTRY EXPERTS' },
  { value: '50+', label: 'PROJECTS DELIVERED' },
];

export const coreServicesData: ServiceItem[] = [
  {
    id: 'software-dev',
    slug: 'software-development',
    title: 'Software Development',
    description:
      'Build scalable, secure, and high-performance software tailored to your business needs and goals.',
    desc:
      'Build scalable, secure, and high-performance software tailored to your business needs and goals.',
    iconType: 'code',
  },
  {
    id: 'ui-ux',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Create intuitive, engaging, and user-friendly digital experiences that people love to use daily.',
    desc:
      'Create intuitive, engaging, and user-friendly digital experiences that people love to use daily.',
    iconType: 'design',
  },
  {
    id: 'ai-ml',
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    description:
      'Leverage intelligent AI and machine learning to automate processes and drive smarter decisions.',
    desc:
      'Leverage intelligent AI and machine learning to automate processes and drive smarter decisions.',
    iconType: 'ai',
  },
  {
    id: 'digital-trans',
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    description:
      'Modernize your operations with end-to-end digital strategies that unlock new growth opportunities.',
    desc:
      'Modernize your operations with end-to-end digital strategies that unlock new growth opportunities.',
    iconType: 'transform',
  },
  {
    id: 'cloud-sol',
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    description:
      'Deploy resilient, secure cloud infrastructure designed to scale with your business at every stage.',
    desc:
      'Deploy resilient, secure cloud infrastructure designed to scale with your business at every stage.',
    iconType: 'cloud',
  },
];

// Backwards compatibility alias
export const coreServices = coreServicesData;

export const processRoadmapData: ProcessStep[] = [
  {
    stepNumber: '01',
    num: '01',
    title: 'Discover',
    description: 'We dive deep into your goals, challenges, and target audience.',
    desc: 'We dive deep into your goals, challenges, and target audience.',
  },
  {
    stepNumber: '02',
    num: '02',
    title: 'Build',
    description: 'Agile development with frequent updates and feedback.',
    desc: 'Agile development with frequent updates and feedback.',
  },
  {
    stepNumber: '03',
    num: '03',
    title: 'Launch',
    description: 'Polished deployment with full testing and QA.',
    desc: 'Polished deployment with full testing and QA.',
  },
  {
    stepNumber: '04',
    num: '04',
    title: 'Scale',
    description: 'Ongoing support and performance optimization.',
    desc: 'Ongoing support and performance optimization.',
  },
];

// Backwards compatibility alias
export const processSteps = processRoadmapData;

export const latestInsightsData: InsightItem[] = [
  {
    id: 'insight-1',
    badge: 'INFRASTRUCTURE',
    tag: 'INFRASTRUCTURE',
    date: 'MARCH 8, 2026',
    title: 'Why Monoliths are Winning the War of Sovereign Economics',
    excerpt:
      'Sovereign deployment mandates and high cloud costs have triggered a massive resurgence of the modular monolith.',
    desc:
      'Sovereign deployment mandates and high cloud costs have triggered a massive resurgence of the modular monolith.',
    author: {
      name: 'Devon Sterling',
      avatarUrl: '/images/services/avatar-devon.jpg',
    },
    imageUrl: '/images/services/insight-1.png',
    transmissionHref: '/insights/sovereign-economics-monoliths',
  },
  {
    id: 'insight-2',
    badge: 'SOVEREIGN AI',
    tag: 'SOVEREIGN AI',
    date: 'MARCH 5, 2026',
    title: 'A Comprehensive Review of On-Premise LLM Latency',
    excerpt:
      'Evaluating open-weight performance inside sovereign institutional data centers.',
    desc:
      'Evaluating open-weight performance inside sovereign institutional data centers.',
    author: {
      name: 'Sarah Jenkins',
      avatarUrl: '/images/services/avatar-sarah.jpg',
    },
    imageUrl: '/images/services/insight-2.png',
    transmissionHref: '/insights/on-premise-llm-latency-review',
  },
  {
    id: 'insight-3',
    badge: 'CYBERNETICS',
    tag: 'CYBERNETICS',
    date: 'FEB 28, 2026',
    title: 'Securing Edge Node Deployments Against Physical Intrusions',
    excerpt:
      'How we implemented encrypted root partitions and auto-destruct key metrics across ruggedized factory-floor computational clusters.',
    desc:
      'How we implemented encrypted root partitions and auto-destruct key metrics across ruggedized factory-floor computational clusters.',
    author: {
      name: 'Devon Sterling',
      avatarUrl: '/images/services/avatar-devon.jpg',
    },
    imageUrl: '/images/services/insight-3.png',
    transmissionHref: '/insights/securing-edge-node-deployments',
  },
];

// Backwards compatibility alias
export const latestInsights = latestInsightsData.map((item) => ({
  tag: item.badge,
  date: item.date,
  title: item.title,
  desc: item.excerpt,
  author: typeof item.author === 'string' ? item.author : item.author.name,
}));

export const footerColumnsData: FooterColumn[] = [
  {
    title: 'SERVICES',
    links: [
      { label: 'Software Development', href: '/services/software-development' },
      { label: 'UI/UX Design', href: '/services/ui-ux-design' },
      { label: 'Artificial Intelligence', href: '/services/artificial-intelligence' },
      { label: 'Digital Transformation', href: '/services/digital-transformation' },
      { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
    ],
  },
  {
    title: 'INDUSTRIES',
    links: [
      { label: 'Hospitality', href: '/industries/hospitality' },
      { label: 'Communications', href: '/industries/communications' },
      { label: 'Banking & Financial', href: '/industries/banking-financial' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Retail', href: '/industries/retail' },
      { label: 'Public Sector', href: '/industries/public-sector' },
    ],
  },
  {
    title: 'INSIGHTS',
    links: [
      { label: 'Case Studies', href: '/insights/case-studies' },
      { label: 'Newsroom', href: '/insights/newsroom' },
      { label: 'Whitepapers / EBooks', href: '/insights/whitepapers' },
      { label: 'Blogs', href: '/insights/blogs' },
    ],
  },
  {
    title: 'QUICK LINKS',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Team', href: '/team' },
    ],
  },
];