export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "wordpress",
    title: "WordPress Website Development",
    description: "Purpose-built WordPress sites that are fast, secure, and easy for your team to manage. Tailored to your brand and optimised from day one.",
    icon: "LayoutTemplate"
  },
  {
    id: "custom-frontend",
    title: "Custom Frontend Development",
    description: "Hand-coded HTML, CSS, JavaScript and React for projects that need precision and performance beyond what page builders can deliver.",
    icon: "Code2"
  },
  {
    id: "landing-page",
    title: "Landing Page Development",
    description: "High-converting landing pages built for campaigns, product launches, and lead generation. Every element earns its place.",
    icon: "MonitorSmartphone"
  },
  {
    id: "redesign",
    title: "Website Redesigns",
    description: "Give your existing site a complete overhaul — better structure, faster load times, and a design that reflects where your business is now.",
    icon: "RefreshCcw"
  },
  {
    id: "seo-setup",
    title: "SEO-Friendly Website Setup",
    description: "Sites built with clean code, fast load times, semantic HTML, and technical SEO foundations that give you the best shot at ranking.",
    icon: "Search"
  },
  {
    id: "maintenance",
    title: "Website Support & Maintenance",
    description: "Ongoing care for your website: updates, performance checks, security patches, and content edits — so you're never left dealing with it alone.",
    icon: "ShieldCheck"
  }
];
