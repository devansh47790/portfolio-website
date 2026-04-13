import qs from "qs";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

export async function strapiFetch<T>(
  path: string,
  query?: Record<string, unknown>
): Promise<T> {
  const queryString = query
    ? `?${qs.stringify(query, { encodeValuesOnly: true })}`
    : "";

  const response = await fetch(`${STRAPI_URL}${path}${queryString}`);

  if (!response.ok) {
    throw new Error(`Strapi request failed: ${response.status}`);
  }

  return response.json();
}

export function getStrapiMediaUrl(url?: string) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}