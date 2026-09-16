export interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Industries",
    href: "/industries",
    dropdown: [
      { label: "Fintech", href: "/industries#fintech" },
      { label: "Healthcare", href: "/industries#healthcare" },
      { label: "E-Commerce", href: "/industries#ecommerce" },
      { label: "Logistics", href: "/industries#logistics" },
    ],
  },
  {
    label: "Insights",
    href: "/blog",
    dropdown: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Whitepapers / EBooks", href: "/whitepapers" },
    ],
  },
  { label: "Careers", href: "/careers" },
];