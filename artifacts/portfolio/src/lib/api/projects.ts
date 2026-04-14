import { getStrapiMediaUrl } from "@/lib/api/strapi";

export interface Project {
  id: number;
  documentId: string;
  title: string;
  excerpt: string;
  tags: string[];
  image: string;
  projectUrl?: string;
  featured: boolean;
}

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
const FALLBACK_PROJECT_IMAGE = "/images/fallback-project.png";

interface StrapiImageNode {
  url?: string | null;
  alternativeText?: string | null;
  attributes?: {
    url?: string | null;
    alternativeText?: string | null;
  } | null;
}

interface StrapiImageRelation extends StrapiImageNode {
  data?: StrapiImageNode | null;
}

interface StrapiProject {
  id: number;
  documentId?: string;
  title?: string;
  excerpt?: string;
  tags?: unknown;
  projectUrl?: string;
  image?: StrapiImageRelation | null;
  featured?: boolean;
}

interface StrapiProjectsResponse {
  data?: StrapiProject[];
  meta?: Record<string, unknown>;
}

function resolveImageUrl(image?: StrapiImageRelation | null) {
  const rawUrl =
    image?.url ??
    image?.attributes?.url ??
    image?.data?.url ??
    image?.data?.attributes?.url;

  return rawUrl ? getStrapiMediaUrl(rawUrl) : FALLBACK_PROJECT_IMAGE;
}

function mapProject(item: StrapiProject): Project {
  return {
    id: item.id,
    documentId: item.documentId || String(item.id),
    title: item.title || "Untitled project",
    excerpt: item.excerpt || "",
    tags: Array.isArray(item.tags)
      ? item.tags.filter((tag): tag is string => typeof tag === "string")
      : [],
    image: resolveImageUrl(item.image),
    projectUrl: item.projectUrl,
    featured: Boolean(item.featured),
  };
}

async function fetchProjects(path: string, cache?: RequestCache): Promise<Project[]> {
  const res = await fetch(`${STRAPI_URL}${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache,
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.status} ${res.statusText}`);
  }

  const data: StrapiProjectsResponse = await res.json();
  return Array.isArray(data.data) ? data.data.map(mapProject) : [];
}

export async function getProjects(): Promise<Project[]> {
  return fetchProjects("/api/projects?populate=image");
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return fetchProjects(
    "/api/projects?filters[featured][$eq]=true&populate=image&sort[0]=title:asc",
    "no-store"
  );
}
