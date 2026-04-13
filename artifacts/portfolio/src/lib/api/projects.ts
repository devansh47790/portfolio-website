// src/lib/api/projects.ts

export interface Project {
  id: number;
  documentId: string;
  title: string;
  excerpt: string;
  tags: string[];
  image: string;
  projectUrl?: string; // use the real field name
   featured: boolean;
}

const STRAPI_URL = "http://localhost:1337";

interface StrapiImage {
  url: string;
  alternativeText?: string | null;
}

interface StrapiProject {
  id: number;
  documentId: string;
  title: string;
  excerpt: string;
  tags: string[];
  projectUrl?: string;
  image?: StrapiImage | null;
    featured?: boolean;
}

interface StrapiProjectsResponse {
  data: StrapiProject[];
  meta: Record<string, unknown>;
}

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${STRAPI_URL}/api/projects?populate=image`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.status} ${res.statusText}`);
  }

  const data: StrapiProjectsResponse = await res.json();

  return data.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    excerpt: item.excerpt,
    tags: Array.isArray(item.tags) ? item.tags : [],
    projectUrl: item.projectUrl, // fixed
    image: item.image?.url
      ? `${STRAPI_URL}${item.image.url}`
      : "/images/fallback-project.png",
  }));
}


export async function getFeaturedProjects(): Promise<Project[]> {
  const res = await fetch(
    `${STRAPI_URL}/api/projects?filters[featured][$eq]=true&populate=image&sort[0]=title:asc`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch featured projects: ${res.status} ${res.statusText}`);
  }

  const data: StrapiProjectsResponse = await res.json();

  return data.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    excerpt: item.excerpt,
    tags: Array.isArray(item.tags) ? item.tags : [],
    projectUrl: item.projectUrl,
    featured: Boolean(item.featured),
    image: item.image?.url
      ? `${STRAPI_URL}${item.image.url}`
      : "/images/fallback-project.png",
  }));
}