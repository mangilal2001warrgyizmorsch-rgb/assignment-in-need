import { NextResponse } from "next/server";
import { fetchBlogs, toSitemapXml } from "@/lib/sitemap-data";

export async function GET() {
  const dynamicBlogs = await fetchBlogs();
  const xml = toSitemapXml(dynamicBlogs);
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
