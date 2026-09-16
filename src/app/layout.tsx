import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.devlogix.com";

// No title.template here: every page below sets its own complete "{Page Name} | DevLogix"
// string (per CLAUDE.md's title pattern) rather than a bare page name for a template to wrap —
// a template would double the " | DevLogix" suffix onto titles that already include it.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DevLogix | Software & AI Development Company",
  description:
    "DevLogix engineers scalable software, AI, and digital transformation solutions for the modern enterprise.",
  openGraph: {
    type: "website",
    siteName: "DevLogix",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1221",
};

// Baseline Organization/WebSite JSON-LD — standard technical SEO hygiene independent of the
// marketing team's schema brief (not yet in /Development Material/ as of this build; richer
// per-page schema like JobPosting/Article should wait for that brief rather than be guessed).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DevLogix",
  url: siteUrl,
  description:
    "DevLogix is a software and AI development company focused on building scalable, innovative, and business-driven digital solutions for the modern enterprise.",
  sameAs: [
    "https://linkedin.com",
    "https://facebook.com",
    "https://instagram.com",
    "https://twitter.com",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-brand-navy font-sans text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded focus:bg-brand-teal-fill focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
