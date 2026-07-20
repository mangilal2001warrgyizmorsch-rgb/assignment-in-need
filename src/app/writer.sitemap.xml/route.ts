import { NextResponse } from "next/server";
import { fetchWriters, toSitemapXml } from "@/lib/sitemap-data";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const baseUrl = `${url.protocol}//${url.host}`;

  const writers = await fetchWriters(baseUrl);

  const urls = [
    { loc: `${baseUrl}/writers`, priority: "0.8" },
    ...writers.map((writerUrl: string) => ({
      loc: writerUrl,
      priority: "0.8",
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
