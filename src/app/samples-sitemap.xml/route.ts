import { NextResponse } from "next/server";
import { fetchSamples, fetchSampleCategories, toSitemapXml } from "@/lib/sitemap-data";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const baseUrl = `${url.protocol}//${url.host}`;

  const sampleCategories = await fetchSampleCategories(baseUrl);
  const samples = await fetchSamples(baseUrl);

  const urls = [
    { loc: `${baseUrl}/free-samples`, priority: "0.9" },
    ...sampleCategories.map((catUrl: string) => ({
      loc: catUrl,
      priority: "0.9",
    })),
    ...samples.map((sampleUrl: string) => ({
      loc: sampleUrl,
      priority: "0.9",
    })),
  ];

  // De-duplicate
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
