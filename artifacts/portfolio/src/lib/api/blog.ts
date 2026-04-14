import { estimateReadTime, type BlogPost } from "@/data/blog";
import { getStrapiMediaUrl, strapiFetch } from "@/lib/api/strapi";

interface StrapiMediaNode {
  url?: string | null;
  attributes?: {
    url?: string | null;
  } | null;
}

interface StrapiMediaRelation {
  data?: StrapiMediaNode | StrapiMediaNode[] | null;
}

interface StrapiBlogPost {
  slug?: string;
  title?: string;
  excerpt?: string;
  content?: string;
  publishedAtDisplay?: string;
  featured?: boolean;
  coverImage?: StrapiMediaRelation | StrapiMediaNode[] | StrapiMediaNode | null;
}

interface StrapiCollectionResponse<T> {
  data?: T[];
  meta?: Record<string, unknown>;
}

function hasMediaData(
  value: StrapiBlogPost["coverImage"]
): value is StrapiMediaRelation {
  return !!value && !Array.isArray(value) && "data" in value;
}

function resolveCoverImage(coverImage?: StrapiBlogPost["coverImage"]) {
  let media: StrapiMediaNode | undefined;

  if (Array.isArray(coverImage)) {
    media = coverImage[0];
  } else if (hasMediaData(coverImage)) {
    media = Array.isArray(coverImage.data) ? coverImage.data[0] : coverImage.data || undefined;
  } else if (coverImage) {
    media = coverImage;
  }

  const url = media?.url ?? media?.attributes?.url;
  return url ? getStrapiMediaUrl(url) : undefined;
}

function mapBlogPost(item: StrapiBlogPost): BlogPost {
  const content = item.content || "";

  return {
    slug: item.slug || "",
    title: item.title || "Untitled article",
    excerpt: item.excerpt || "",
    content,
    date: item.publishedAtDisplay || "",
    readTime: estimateReadTime(content),
    coverImage: resolveCoverImage(item.coverImage),
    featured: Boolean(item.featured),
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await strapiFetch<StrapiCollectionResponse<StrapiBlogPost>>(
    "/api/blog-posts",
    {
      fields: ["title", "slug", "excerpt", "content", "publishedAtDisplay", "featured"],
      populate: {
        coverImage: {
          fields: ["url"],
        },
      },
      sort: ["publishedAtDisplay:desc", "title:asc"],
    }
  );

  return Array.isArray(response.data)
    ? response.data.map(mapBlogPost).filter((post) => post.slug)
    : [];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await strapiFetch<StrapiCollectionResponse<StrapiBlogPost>>(
    "/api/blog-posts",
    {
      fields: ["title", "slug", "excerpt", "content", "publishedAtDisplay", "featured"],
      populate: {
        coverImage: {
          fields: ["url"],
        },
      },
      filters: {
        slug: {
          $eq: slug,
        },
      },
      pagination: {
        page: 1,
        pageSize: 1,
      },
    }
  );

  const post = Array.isArray(response.data) ? response.data[0] : undefined;
  return post ? mapBlogPost(post) : null;
}
