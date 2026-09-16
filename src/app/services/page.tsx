import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/services/Navbar';
import { HeroSection } from '@/components/sections/services/HeroSection';
import { StatsSection } from '@/components/sections/services/StatsSection';
import { CoreServicesSection } from '@/components/sections/services/CoreServicesSection';
import { ProcessRoadmapSection } from '@/components/sections/services/ProcessRoadmapSection';
import { LatestInsightsSection } from '@/components/sections/services/LatestInsightsSection';
import { CtaBannerSection } from '@/components/sections/services/CtaBannerSection';
import { FooterSection } from '@/components/sections/services/FooterSection';

export const metadata: Metadata = {
  title: 'Services | DevLogix - Technology That Drives Results',
  description:
    "We don't just build software; we build the future of your business. Explore our core services in software development, AI, cloud solutions, and digital transformation.",
  openGraph: {
    title: 'Services | DevLogix',
    description:
      'Technology That Drives Results. Explore our software development, UI/UX, AI, and cloud solutions.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[#0F172A] text-white selection:bg-[#14B8A6] selection:text-white">
      {/* 1. High-Fidelity Navbar matching exact Figma specifications */}
      <Navbar />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* 2. Hero Section (#0F172A) with Figma Framed Visual */}
        <HeroSection />

        {/* 3. Stats Bar (#0B1221) with 80px dividers */}
        <StatsSection />

        {/* 4. Our Core Services (#FFFFFF) */}
        <CoreServicesSection />

        {/* 5. The DevLogix Way Process Roadmap (#0F172A) */}
        <ProcessRoadmapSection />

        {/* 6. Latest Insights (#F8FAFC) */}
        <LatestInsightsSection />

        {/* 7. Bottom CTA Banner (#FFFFFF) */}
        <CtaBannerSection />
      </main>

      {/* 8. 5-Column High-Fidelity Footer (#0B1221) */}
      <FooterSection />
    </div>
  );
}