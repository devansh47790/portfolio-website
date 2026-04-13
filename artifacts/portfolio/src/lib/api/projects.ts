// src/lib/api/projects.ts

export interface Project {
  id: number;
  documentId: string;
  title: string;
  excerpt: string;
  tags: string[];
  image: string;
  projectUrl?: string; // use the real field name
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