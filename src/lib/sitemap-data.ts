const BASE_URL = "https://assignmentinneed.co.uk";
const BACKEND_URL =
  process.env.BACKEND_INTERNAL_URL ||
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://ain.warrgyizmorsch.com";

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
].map((route) => `${BASE_URL}${route}`);

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

export const cityRoutes = citySlugs.map((slug) => `${BASE_URL}/${slug}-assignment-help`);

export const subjectSlugs = [
  "math",
  "english",
  "economics",
  "chemistry",
  "history",
  "law",
  "linguistic",
  "nursing",
  "physics",
  "sociology",
  "philosophy",
  "statistics",
  "accounting",
  "programming",
  "marketing",
  "computer-science",
  "engineering",
  "finance",
  "management",
  "business",
  "geography",
  "psychology",
  "biology",
  "entrepreneurship",
  "artificial-intelligence",
  "machine-learning",
  "cybersecurity",
  "humanities",
];

export const subjectRoutes = subjectSlugs.map((slug) => `${BASE_URL}/${slug}-assignment-help`);

export async function fetchBlogs() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/blogs?limit=250`, {
      next: { revalidate: 86400 },
    });
    if (res.ok) {
      const payload = await res.json();
      const list = payload?.data?.data || [];
      return list.map((blog: any) => `${BASE_URL}/blog/${blog.slug}`);
    }
  } catch (e) {
    console.error("Sitemap: Failed to fetch blogs", e);
  }
  return [];
}

export async function fetchServicePages() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/service-pages`, {
      next: { revalidate: 86400 },
    });
    if (res.ok) {
      const payload = await res.json();
      const list = Array.isArray(payload?.data) ? payload.data : [];

      const routes: string[] = [];
      list.forEach((service: any) => {
        const parentSlug =
          service.slug
            ?.trim()
            .replace(/^\/+/, "")
            .replace(/^service\//, "") || "";
        if (parentSlug) {
          routes.push(`${BASE_URL}/${parentSlug}`);
        }

        if (Array.isArray(service.children)) {
          service.children.forEach((child: any) => {
            const childSlug =
              child.slug
                ?.trim()
                .replace(/^\/+/, "")
                .replace(
                  /^service\/assignment\/|^service\/dissertation\/|^service\//,
                  "",
                ) || "";
            if (childSlug) {
              routes.push(`${BASE_URL}/${childSlug}`);
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

export async function fetchSubjectPages() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/subject-pages`, {
      next: { revalidate: 86400 },
    });
    if (res.ok) {
      const payload = await res.json();
      const list = Array.isArray(payload?.data) ? payload.data : [];
      return list.map((subject: any) => {
        const slug = subject.slug?.trim().replace(/^\/+/, "") || "";
        return `${BASE_URL}/${slug}`;
      });
    }
  } catch (e) {
    console.error("Sitemap: Failed to fetch subject pages", e);
  }
  return [];
}

export function toSitemapXml(urls: string[]) {
  // De-duplicate URLs
  const uniqueUrls = Array.from(new Set(urls.map((u) => u.toLowerCase())));
  
  // Format dates as YYYY-MM-DD
  const dateStr = new Date().toISOString().split("T")[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}
