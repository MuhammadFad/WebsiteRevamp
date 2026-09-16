import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
import { coreServicesData } from '@/data/servicesPageData';
import { getServiceData, servicesDataMap } from '@/data/servicesData';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const dynamicSlugs = Object.keys(servicesDataMap);
  const coreSlugs = coreServicesData.map((s) => s.slug);
  const allSlugs = Array.from(new Set([...dynamicSlugs, ...coreSlugs]));

  return allSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const serviceData = getServiceData(slug);

  if (serviceData) {
    return {
      title: serviceData.meta.title,
      description: serviceData.meta.description,
      openGraph: {
        title: serviceData.meta.title,
        description: serviceData.meta.description,
        type: 'website',
      },
    };
  }

  const coreService = coreServicesData.find((s) => s.slug === slug);
  if (coreService) {
    return {
      title: `${coreService.title} | DevLogix Services`,
      description: coreService.description,
    };
  }

  return {
    title: 'Service Detail | DevLogix',
  };
}

export default async function ServiceDynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const serviceData = getServiceData(slug);

  // If specific service detail dataset exists (e.g., ui-ux-design, artificial-intelligence)
  if (serviceData) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[#0F172A] text-white selection:bg-[#14B8A6] selection:text-white">
        {/* Global High-Fidelity Navbar */}
        <Navbar />

        <main className="flex-1 w-full overflow-x-hidden">
          {/* Hero Section */}
          <AiHeroSection data={serviceData.hero} />

          {/* Key Challenges Section */}
          <KeyChallengesSection
            eyebrow={serviceData.keyChallenges.eyebrow}
            title={serviceData.keyChallenges.title}
            items={serviceData.keyChallenges.items}
          />

          {/* What We Deliver / Innovation Services Section */}
          <InnovationServicesSection
            eyebrow={serviceData.whatWeDeliver.eyebrow}
            title={serviceData.whatWeDeliver.title}
            subtitle={serviceData.whatWeDeliver.subtitle}
            tabs={serviceData.whatWeDeliver.tabs}
          />

          {/* Delivery Steps with Interactive Progress Line */}
          <AiDeliveryStepsSection
            eyebrow={serviceData.deliverySteps.eyebrow}
            title={serviceData.deliverySteps.title}
            subtitle={serviceData.deliverySteps.subtitle}
            steps={serviceData.deliverySteps.steps}
          />

          {/* Proof of Concept (POC) Section */}
          <PocSection
            eyebrow={serviceData.poc.eyebrow}
            title={serviceData.poc.title}
            subtitle={serviceData.poc.subtitle}
            ctaText={serviceData.poc.ctaText}
            cards={serviceData.poc.cards}
          />

          {/* Tools & Technologies */}
          <ToolsTechnologiesSection
            eyebrow={serviceData.tools.eyebrow}
            title={serviceData.tools.title}
            rows={serviceData.tools.rows}
          />

          {/* Industries We Serve */}
          <IndustriesWeServeSection
            eyebrow={serviceData.industries.eyebrow}
            title={serviceData.industries.title}
            cards={serviceData.industries.cards}
          />

          {/* Engagement Models */}
          <EngagementModelsSection
            eyebrow={serviceData.engagementModels.eyebrow}
            title={serviceData.engagementModels.title}
            ctaText={serviceData.engagementModels.ctaText}
            cards={serviceData.engagementModels.cards}
          />

          {/* Frequently Asked Questions Accordion */}
          <FaqSection
            eyebrow={serviceData.faqs.eyebrow}
            title={serviceData.faqs.title}
            subtitle={serviceData.faqs.subtitle}
            ctaText={serviceData.faqs.ctaText}
            items={serviceData.faqs.items}
          />

          {/* Re-used Bottom CTA Banner */}
          <CtaBannerSection />
        </main>

        {/* Re-used 5-Column DevLogix Footer */}
        <FooterSection />
      </div>
    );
  }

  // Fallback for slugs without dedicated dataset yet
  const coreService = coreServicesData.find((s) => s.slug === slug);
  if (!coreService) {
    notFound();
  }

  // Fallback default AI service view if slug is in core services
  const fallbackAiData = getServiceData('artificial-intelligence');
  if (fallbackAiData) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[#0F172A] text-white selection:bg-[#14B8A6] selection:text-white">
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden">
          <AiHeroSection data={fallbackAiData.hero} />
          <KeyChallengesSection
            eyebrow={fallbackAiData.keyChallenges.eyebrow}
            title={fallbackAiData.keyChallenges.title}
            items={fallbackAiData.keyChallenges.items}
          />
          <InnovationServicesSection
            eyebrow={fallbackAiData.whatWeDeliver.eyebrow}
            title={fallbackAiData.whatWeDeliver.title}
            subtitle={fallbackAiData.whatWeDeliver.subtitle}
            tabs={fallbackAiData.whatWeDeliver.tabs}
          />
          <AiDeliveryStepsSection
            eyebrow={fallbackAiData.deliverySteps.eyebrow}
            title={fallbackAiData.deliverySteps.title}
            subtitle={fallbackAiData.deliverySteps.subtitle}
            steps={fallbackAiData.deliverySteps.steps}
          />
          <PocSection
            eyebrow={fallbackAiData.poc.eyebrow}
            title={fallbackAiData.poc.title}
            subtitle={fallbackAiData.poc.subtitle}
            ctaText={fallbackAiData.poc.ctaText}
            cards={fallbackAiData.poc.cards}
          />
          <ToolsTechnologiesSection
            eyebrow={fallbackAiData.tools.eyebrow}
            title={fallbackAiData.tools.title}
            rows={fallbackAiData.tools.rows}
          />
          <IndustriesWeServeSection
            eyebrow={fallbackAiData.industries.eyebrow}
            title={fallbackAiData.industries.title}
            cards={fallbackAiData.industries.cards}
          />
          <EngagementModelsSection
            eyebrow={fallbackAiData.engagementModels.eyebrow}
            title={fallbackAiData.engagementModels.title}
            ctaText={fallbackAiData.engagementModels.ctaText}
            cards={fallbackAiData.engagementModels.cards}
          />
          <FaqSection
            eyebrow={fallbackAiData.faqs.eyebrow}
            title={fallbackAiData.faqs.title}
            subtitle={fallbackAiData.faqs.subtitle}
            ctaText={fallbackAiData.faqs.ctaText}
            items={fallbackAiData.faqs.items}
          />
          <CtaBannerSection />
        </main>
        <FooterSection />
      </div>
    );
  }

  notFound();
}
