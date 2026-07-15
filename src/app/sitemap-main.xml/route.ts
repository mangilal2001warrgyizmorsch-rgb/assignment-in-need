import { NextResponse } from "next/server";
import { staticRoutes, toSitemapXml } from "@/lib/sitemap-data";

export async function GET() {
  const xml = toSitemapXml(staticRoutes);
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
