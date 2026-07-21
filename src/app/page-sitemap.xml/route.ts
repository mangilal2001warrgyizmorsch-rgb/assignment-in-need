import { NextResponse } from "next/server";
import { staticRoutes, fetchServicePages, fetchSubjectPages, toSitemapXml, getSitemapBaseUrl } from "@/lib/sitemap-data";

export async function GET() {
  const baseUrl = getSitemapBaseUrl();

  const servicePages = await fetchServicePages(baseUrl);
  const subjectPages = await fetchSubjectPages(baseUrl);

  const urls = [
    { loc: `${baseUrl}/`, priority: "1.0" },
    ...staticRoutes.filter((route: string) => route !== "").map((route: string) => ({
      loc: `${baseUrl}${route}`,
      priority: "0.9"
    })),
    ...servicePages.map((page: string) => ({ loc: page, priority: "0.9" })),
    ...subjectPages.map((page: string) => ({ loc: page, priority: "0.9" }))
  ];

  // De-duplicate URLs by loc (case-insensitive)
  const uniqueUrls: typeof urls = [];
  const seen = new Set<string>();
  for (const item of urls) {
    const key = item.loc.toLowerCase().trim();
    if (!seen.has(key)) {
      seen.add(key);
      uniqueUrls.push(item);
    }
  }

  const xml = toSitemapXml(uniqueUrls);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
