const BACKEND_URL =
  process.env.BACKEND_INTERNAL_URL ||
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://ain.warrgyizmorsch.com";

export function getSitemapBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL.replace(/\/+$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`.replace(/\/+$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/+$/, "");
  }
  return "https://assignmentinneed.co.uk";
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")           // Replace spaces with -
    .replace(/[^\w\-]+/g, "")       // Remove all non-word chars
    .replace(/\-\-+/g, "-")         // Replace multiple - with single -
    .replace(/^-+/, "")             // Trim - from start of text
    .replace(/-+$/, "");            // Trim - from end of text
}

export const staticRoutes = [
  "",
  "/about",
  "/blog",
  "/cities",
  "/contact",
  "/login",
  "/order",
  "/pricing",
  "/privacy-policy",
  "/review",
  "/samples",
  "/signup",
  "/subjects",
  "/terms-conditions",
  "/writers",
];

export const citySlugs = [
  "london",
  "birmingham",
  "manchester",
  "leeds",
  "glasgow",
  "edinburgh",
  "bristol",
  "liverpool",
  "sydney",
  "melbourne",
  "brisbane",
  "perth",
  "adelaide",
  "canberra",
  "toronto",
  "vancouver",
  "montreal",
  "ottawa",
  "dubai",
  "abu-dhabi",
  "sharjah",
  "kuala-lumpur",
  "penang",
];

export function getCityRoutes(baseUrl: string): string[] {
  // Map standard UK and global city paths to the /cities/[slug] format
  return citySlugs.map((slug) => `${baseUrl}/cities/${slug}`);
}

export async function fetchBlogs(baseUrl: string): Promise<string[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/blogs?limit=2000`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const payload = await res.json();
      const list = payload?.data?.data || [];
      return list.map((blog: any) => `${baseUrl}/blog/${blog.slug}`);
    }
  } catch (e) {
    console.error("Sitemap: Failed to fetch blogs", e);
  }
  return [];
}

export async function fetchServicePages(baseUrl: string): Promise<string[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/service-pages`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const payload = await res.json();
      const list = Array.isArray(payload?.data) ? payload.data : [];

      const routes: string[] = [];
      list.forEach((service: any) => {
        let parentSlug = service.slug?.trim().replace(/^\/+/, "") || "";
        if (parentSlug) {
          routes.push(`${baseUrl}/${parentSlug}`);
        }

        if (Array.isArray(service.children)) {
          service.children.forEach((child: any) => {
            let childSlug = child.slug?.trim().replace(/^\/+/, "") || "";
            if (childSlug) {
              if (childSlug.startsWith("service/assignment/")) {
                const lastSeg = childSlug.split("/").pop() || childSlug;
                routes.push(`${baseUrl}/subject/${lastSeg}`);
              } else {
                routes.push(`${baseUrl}/${childSlug}`);
              }
            }
          });
        }
      });
      return routes;
    }
  } catch (e) {
    console.error("Sitemap: Failed to fetch service pages", e);
  }
  return [];
}

export async function fetchSubjectPages(baseUrl: string): Promise<string[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/subject-pages`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const payload = await res.json();
      const list = Array.isArray(payload?.data) ? payload.data : [];
      return list.map((subject: any) => {
        const slug = subject.slug?.trim().replace(/^\/+/, "") || "";
        return `${baseUrl}/${slug}`;
      });
    }
  } catch (e) {
    console.error("Sitemap: Failed to fetch subject pages", e);
  }
  return [];
}

export async function fetchSamples(baseUrl: string): Promise<string[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/samples?limit=2000`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const payload = await res.json();
      const list = payload?.data?.data || [];
      return list.map((sample: any) => {
        const cat = slugify(sample.category_name || "general");
        return `${baseUrl}/free-samples/${cat}/${sample.slug}`;
      });
    }
  } catch (e) {
    console.error("Sitemap: Failed to fetch samples", e);
  }
  return [];
}

export async function fetchSampleCategories(baseUrl: string): Promise<string[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/sample-categories`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const payload = await res.json();
      const list = Array.isArray(payload?.data) ? payload.data : [];
      return list.map((cat: any) => `${baseUrl}/free-samples/${slugify(cat.name)}`);
    }
  } catch (e) {
    console.error("Sitemap: Failed to fetch sample categories", e);
  }
  return [];
}

export async function fetchWriters(baseUrl: string): Promise<string[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/experts`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const payload = await res.json();
      const list = Array.isArray(payload?.data) ? payload.data : [];
      return list.map((writer: any) => `${baseUrl}/writers/${writer.slug}`);
    }
  } catch (e) {
    console.error("Sitemap: Failed to fetch writers", e);
  }
  return [];
}

export function toSitemapXml(
  urls: { loc: string; priority: string; lastmod?: string; changefreq?: string }[]
) {
  const today = new Date().toISOString().split("T")[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `   <url>
      <loc>${item.loc}</loc>
      <lastmod>${item.lastmod || today}</lastmod>
      <changefreq>${item.changefreq || "daily"}</changefreq>
      <priority>${item.priority}</priority>
   </url>`
  )
  .join("\n")}
</urlset>`;
}
