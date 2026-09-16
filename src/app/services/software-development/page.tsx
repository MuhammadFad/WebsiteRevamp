import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/services/Navbar';
import { AiHeroSection } from '@/components/sections/service-detail/AiHeroSection';
import { KeyChallengesSection } from '@/components/sections/service-detail/KeyChallengesSection';
import { InnovationServicesSection } from '@/components/sections/service-detail/InnovationServicesSection';
import { AiDeliveryStepsSection } from '@/components/sections/service-detail/AiDeliveryStepsSection';
import { PocSection } from '@/components/sections/service-detail/PocSection';
import { ToolsTechnologiesSection } from '@/components/sections/service-detail/ToolsTechnologiesSection';
import { IndustriesWeServeSection } from '@/components/sections/service-detail/IndustriesWeServeSection';
import { EngagementModelsSection } from '@/components/sections/service-detail/EngagementModelsSection';
import { FaqSection } from '@/components/sections/service-detail/FaqSection';
import { CtaBannerSection } from '@/components/sections/services/CtaBannerSection';
import { FooterSection } from '@/components/sections/services/FooterSection';
import { softwareDevelopmentServiceData } from '@/data/servicesData';

export const metadata: Metadata = {
  title: 'Custom Software Development Services | DevLogix',
  description:
    'Software That Scales With Your Ambition, Not Against It. Robust full-stack engineering, microservices, cloud-native platforms, and dedicated dev teams.',
  openGraph: {
    title: 'Custom Software Development Services | DevLogix',
    description:
      'We engineer robust, scalable software solutions — from custom platforms to microservices architectures — that ship on time, perform under pressure, and evolve with your business.',
    type: 'website',
  },
};

export default function SoftwareDevelopmentPage() {
  const serviceData = softwareDevelopmentServiceData;

  return (
    <div className="min-h-screen flex flex-col bg-[#0F172A] text-white selection:bg-[#14B8A6] selection:text-white">
      {/* 1. Global High-Fidelity Navbar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 2. Hero Section (680px, Ambient Dark Glow Background, /images/services/software-dev/hero-right.png) */}
        <AiHeroSection data={serviceData.hero} />

        {/* 3. Key Challenges Section (#F5F7FA) */}
        <KeyChallengesSection
          eyebrow={serviceData.keyChallenges.eyebrow}
          title={serviceData.keyChallenges.title}
          items={serviceData.keyChallenges.items}
        />

        {/* 4. What We Deliver / Custom Software Development Services (#FFFFFF) */}
        <InnovationServicesSection
          eyebrow={serviceData.whatWeDeliver.eyebrow}
          title={serviceData.whatWeDeliver.title}
          subtitle={serviceData.whatWeDeliver.subtitle}
          tabs={serviceData.whatWeDeliver.tabs}
        />

        {/* 5. Our Development Delivery Steps with Dynamic Progress Line (#0B1B2B) */}
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
        <CtaBannerSection />
      </main>

      {/* 12. Re-used 5-Column DevLogix Footer (#0B1221) */}
      <FooterSection />
    </div>
  );
}
