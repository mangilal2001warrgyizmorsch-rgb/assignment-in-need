import { NextResponse } from "next/server";
import { cityRoutes, toSitemapXml } from "@/lib/sitemap-data";

export async function GET() {
  const xml = toSitemapXml(cityRoutes);
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
