import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/services/HeroSection';
import { StatsSection } from '@/components/sections/services/StatsSection';
import { CoreServicesSection } from '@/components/sections/services/CoreServicesSection';
import { ProcessRoadmapSection } from '@/components/sections/services/ProcessRoadmapSection';
import { LatestInsightsSection } from '@/components/sections/services/LatestInsightsSection';
import UpdatedContactBanner from '@/components/sections/UpdatedContactBanner';

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

// Root layout (src/app/layout.tsx) already supplies the site's one Header/Footer — this page
// used to render its own Navbar + FooterSection on top of that, producing a double header and
// footer. Removed; every section here also moved off hardcoded hex onto the shared design tokens.
export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CoreServicesSection />
      <ProcessRoadmapSection />
      <LatestInsightsSection />
      <UpdatedContactBanner />
    </>
  );
}
