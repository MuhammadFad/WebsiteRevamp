export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Our Team", href: "/about#team" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Fintech", href: "/industries#fintech" },
      { label: "Healthcare", href: "/industries#healthcare" },
      { label: "E-Commerce", href: "/industries#ecommerce" },
      { label: "Logistics", href: "/industries#logistics" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Whitepapers", href: "/whitepapers" },
      { label: "Documentation", href: "/docs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Security", href: "/security" },
    ],
  },
];