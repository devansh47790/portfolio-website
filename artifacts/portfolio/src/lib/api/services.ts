import {
  getServiceIcon,
  normalizeServiceFeatures,
  type Service,
} from "@/data/services";
import { strapiFetch } from "@/lib/api/strapi";

interface StrapiService {
  title?: string;
  slug?: string;
  description?: string;
  features?: unknown;
  featured?: boolean;
}

interface StrapiCollectionResponse<T> {
  data?: T[];
  meta?: Record<string, unknown>;
}

function mapService(item: StrapiService): Service {
  const slug = item.slug || "";

  return {
    id: slug || item.title || crypto.randomUUID(),
    title: item.title || "Untitled service",
    slug,
    description: item.description || "",
    features: normalizeServiceFeatures(item.features),
    featured: Boolean(item.featured),
    icon: getServiceIcon(slug),
  };
}

export async function getServices(): Promise<Service[]> {
  const response = await strapiFetch<StrapiCollectionResponse<StrapiService>>(
    "/api/services",
    {
      fields: ["title", "slug", "description", "features", "featured"],
      sort: ["title:asc"],
    }
  );

  return Array.isArray(response.data)
    ? response.data.map(mapService).filter((service) => service.slug)
    : [];
}

export async function getFeaturedServices(): Promise<Service[]> {
  const response = await strapiFetch<StrapiCollectionResponse<StrapiService>>(
    "/api/services",
    {
      fields: ["title", "slug", "description", "features", "featured"],
      filters: {
        featured: {
          $eq: true,
        },
      },
      sort: ["title:asc"],
    }
  );

  return Array.isArray(response.data)
    ? response.data.map(mapService).filter((service) => service.slug)
    : [];
}
