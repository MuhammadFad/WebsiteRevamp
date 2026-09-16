import type { Metadata } from 'next';
import { AiHeroSection } from '@/components/sections/service-detail/AiHeroSection';
import { KeyChallengesSection } from '@/components/sections/service-detail/KeyChallengesSection';
import { InnovationServicesSection } from '@/components/sections/service-detail/InnovationServicesSection';
import { AiDeliveryStepsSection } from '@/components/sections/service-detail/AiDeliveryStepsSection';
import { PocSection } from '@/components/sections/service-detail/PocSection';
import { ToolsTechnologiesSection } from '@/components/sections/service-detail/ToolsTechnologiesSection';
import { IndustriesWeServeSection } from '@/components/sections/service-detail/IndustriesWeServeSection';
import { EngagementModelsSection } from '@/components/sections/service-detail/EngagementModelsSection';
import { FaqSection } from '@/components/sections/service-detail/FaqSection';
import UpdatedContactBanner from '@/components/sections/UpdatedContactBanner';

export const metadata: Metadata = {
  title: 'Artificial Intelligence & Data Systems | DevLogix',
  description:
    'AI That Ships to Production, Not Just to Slides. Enterprise agentic workflows, MLOps, vector platforms, and generative systems built for measurable ROI.',
  openGraph: {
    title: 'Artificial Intelligence & Data Systems | DevLogix',
    description:
      'We pair production-ready agentic workflows with bulletproof data foundations to deliver tangible business outcomes.',
    type: 'website',
  },
};

export default function ArtificialIntelligencePage() {
  return (
    <>
      {/* 2. Hero Section (height: 680px, Dark/Teal Ambient Background) */}
        <AiHeroSection />

        {/* 3. Key Challenges Section (#F5F7FA) */}
        <KeyChallengesSection />

        {/* 4. Innovation Services / What We Deliver (#FFFFFF) */}
        <InnovationServicesSection />

        {/* 5. Our AI Delivery Steps with Interactive Progress Line (#0B1B2B) */}
        <AiDeliveryStepsSection />

        {/* 6. Proof of Concept (POC) Section (#F5F7FA) */}
        <PocSection />

        {/* 7. Tools & Technologies (#FFFFFF) */}
        <ToolsTechnologiesSection />

        {/* 8. Industries We Serve (#F5F7FA) */}
        <IndustriesWeServeSection />

        {/* 9. Engagement Models (#FFFFFF) */}
        <EngagementModelsSection />

        {/* 10. Frequently Asked Questions Accordion (#F5F7FA) */}
        <FaqSection />

        {/* 11. Re-used Bottom CTA Banner (#FFFFFF) */}
        <UpdatedContactBanner />
    </>
  );
}
