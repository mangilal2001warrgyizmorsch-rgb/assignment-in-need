import { NextResponse } from "next/server";
import { fetchServicePages, toSitemapXml } from "@/lib/sitemap-data";

export async function GET() {
  const dynamicServices = await fetchServicePages();
  const xml = toSitemapXml(dynamicServices);
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
