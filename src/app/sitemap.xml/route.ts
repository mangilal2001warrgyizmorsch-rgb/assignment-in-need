import { NextResponse } from "next/server";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <sitemap>
      <loc>https://assignmentinneed.co.uk/page-sitemap.xml</loc>
   </sitemap>
   <sitemap>
      <loc>https://assignmentinneed.co.uk/blog.sitemap.xml</loc>
   </sitemap>
   <sitemap>
      <loc>https://assignmentinneed.co.uk/samples-sitemap.xml</loc>
   </sitemap>
   <sitemap>
      <loc>https://assignmentinneed.co.uk/citypage-sitemap.xml</loc>
   </sitemap>
   <sitemap>
      <loc>https://assignmentinneed.co.uk/writer.sitemap.xml</loc>
   </sitemap>
   <sitemap>
      <loc>https://assignmentinneed.co.uk/other-sitemap.xml</loc>
   </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
