import { NextResponse } from "next/server";
import { subjectRoutes, fetchSubjectPages, toSitemapXml } from "@/lib/sitemap-data";

export async function GET() {
  const dynamicSubjects = await fetchSubjectPages();
  const xml = toSitemapXml([...subjectRoutes, ...dynamicSubjects]);
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
