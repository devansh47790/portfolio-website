export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  featured: boolean;
  icon: string;
}

const FEATURE_DEFAULTS = [
  "Performance Optimised",
  "SEO Fundamentals Included",
  "Responsive Across All Devices",
];

const ICON_BY_SLUG: Record<string, string> = {
  wordpress: "LayoutTemplate",
  "custom-frontend": "Code2",
  "landing-page": "MonitorSmartphone",
  redesign: "RefreshCcw",
  "seo-setup": "Search",
  maintenance: "ShieldCheck",
};

export function normalizeServiceFeatures(features: unknown) {
  if (Array.isArray(features)) {
    const values = features.filter((feature): feature is string => typeof feature === "string");
    return values.length > 0 ? values : FEATURE_DEFAULTS;
  }

  return FEATURE_DEFAULTS;
}

export function getServiceIcon(slug: string) {
  return ICON_BY_SLUG[slug] || "Code2";
}
