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
import { digitalTransformationServiceData } from '@/data/servicesData';

export const metadata: Metadata = {
  title: 'Digital Transformation Services | DevLogix',
  description:
    'Transform Operations, Not Just Digitize Paper Processes. End-to-end enterprise digital transformation, legacy modernization, workflow automation, and change enablement.',
  openGraph: {
    title: 'Digital Transformation Services | DevLogix',
    description:
      'We architect end-to-end digital transformation strategies that modernize legacy systems, automate core workflows, and unlock new revenue streams across your entire organization.',
    type: 'website',
  },
};

export default function DigitalTransformationPage() {
  const serviceData = digitalTransformationServiceData;

  return (
    <>
      {/* 2. Hero Section (680px, Dark Background with Teal Ambient Grid, hero-right-Digi.png) */}
        <AiHeroSection data={serviceData.hero} />

        {/* 3. Key Challenges Section (#F5F7FA) */}
        <KeyChallengesSection
          eyebrow={serviceData.keyChallenges.eyebrow}
          title={serviceData.keyChallenges.title}
          items={serviceData.keyChallenges.items}
        />

        {/* 4. What We Deliver / Digital Transformation Services (#FFFFFF) */}
        <InnovationServicesSection
          eyebrow={serviceData.whatWeDeliver.eyebrow}
          title={serviceData.whatWeDeliver.title}
          subtitle={serviceData.whatWeDeliver.subtitle}
          tabs={serviceData.whatWeDeliver.tabs}
        />

        {/* 5. Our Transformation Delivery Steps with Dynamic Progress Line (#0B1B2B) */}
        <AiDeliveryStepsSection
          eyebrow={serviceData.deliverySteps.eyebrow}
          title={serviceData.deliverySteps.title}
          subtitle={serviceData.deliverySteps.subtitle}
          steps={serviceData.deliverySteps.steps}
        />

        {/* 6. Proof of Concept (POC) Section (#F5F7FA) */}
        <PocSection
          eyebrow={serviceData.poc.eyebrow}
          title={serviceData.poc.title}
          subtitle={serviceData.poc.subtitle}
          ctaText={serviceData.poc.ctaText}
          cards={serviceData.poc.cards}
        />

        {/* 7. Tools & Technologies (#FFFFFF) */}
        <ToolsTechnologiesSection
          eyebrow={serviceData.tools.eyebrow}
          title={serviceData.tools.title}
          rows={serviceData.tools.rows}
        />

        {/* 8. Industries We Serve (#F5F7FA) */}
        <IndustriesWeServeSection
          eyebrow={serviceData.industries.eyebrow}
          title={serviceData.industries.title}
          cards={serviceData.industries.cards}
        />

        {/* 9. Engagement Models (#FFFFFF) */}
        <EngagementModelsSection
          eyebrow={serviceData.engagementModels.eyebrow}
          title={serviceData.engagementModels.title}
          ctaText={serviceData.engagementModels.ctaText}
          cards={serviceData.engagementModels.cards}
        />

        {/* 10. Frequently Asked Questions Accordion (#F5F7FA) */}
        <FaqSection
          eyebrow={serviceData.faqs.eyebrow}
          title={serviceData.faqs.title}
          subtitle={serviceData.faqs.subtitle}
          ctaText={serviceData.faqs.ctaText}
          items={serviceData.faqs.items}
        />

        {/* 11. Re-used Bottom CTA Banner (#FFFFFF) */}
        <UpdatedContactBanner />
    </>
  );
}
