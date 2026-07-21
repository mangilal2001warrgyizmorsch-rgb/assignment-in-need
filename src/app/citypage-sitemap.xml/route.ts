import { NextResponse } from "next/server";
import { getCityRoutes, toSitemapXml, getSitemapBaseUrl } from "@/lib/sitemap-data";

export async function GET() {
  const baseUrl = getSitemapBaseUrl();

  const cityRoutes = getCityRoutes(baseUrl);

  const urls = cityRoutes.map((cityUrl: string) => ({
    loc: cityUrl,
    priority: "0.9",
  }));

  const xml = toSitemapXml(urls);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
