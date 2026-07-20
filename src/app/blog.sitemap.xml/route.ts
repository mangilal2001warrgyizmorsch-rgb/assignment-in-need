import { NextResponse } from "next/server";
import { fetchBlogs, toSitemapXml } from "@/lib/sitemap-data";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const baseUrl = `${url.protocol}//${url.host}`;

  const blogs = await fetchBlogs(baseUrl);

  const urls = blogs.map((blogUrl: string) => ({
    loc: blogUrl,
    priority: "0.9",
  }));

  const xml = toSitemapXml(urls);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
