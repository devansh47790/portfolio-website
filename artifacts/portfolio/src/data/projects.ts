export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "tradesperson-booking",
    title: "Tradesperson Booking System",
    description: "A mobile-first booking and quoting system for a Melbourne-based trades business.",
    tech: ["WordPress", "PHP", "WooCommerce"],
    image: "/images/project-1.png",
  },
  {
    id: "boutique-skincare",
    title: "Boutique Skincare Brand",
    description: "A headless e-commerce build prioritising speed and brand polish.",
    tech: ["React", "Shopify", "Tailwind CSS"],
    image: "/images/project-2.png",
  },
  {
    id: "law-firm",
    title: "Law Firm Redesign",
    description: "A full redesign for a Melbourne law firm, resulting in a 60% increase in organic traffic.",
    tech: ["WordPress", "Elementor", "SEO"],
    image: "/images/project-3.png",
  },
  {
    id: "saas-landing",
    title: "SaaS Landing Page",
    description: "A high-converting landing page for a B2B SaaS product.",
    tech: ["React", "TypeScript", "Framer Motion"],
    image: "/images/project-4.png",
  },
  {
    id: "restaurant-site",
    title: "Fine Dining Restaurant",
    description: "A brand-led restaurant site with online reservations and a custom menu editor.",
    tech: ["WordPress", "Custom Theme", "PHP"],
    image: "/images/project-5.png",
  },
  {
    id: "finance-dashboard",
    title: "Personal Finance Dashboard",
    description: "A client-facing financial dashboard with data visualisation and export functionality.",
    tech: ["React", "Recharts", "REST API"],
    image: "/images/project-6.png",
  }
];
