import { NextResponse } from "next/server";
import { toSitemapXml, getSitemapBaseUrl } from "@/lib/sitemap-data";

export async function GET() {
  const baseUrl = getSitemapBaseUrl();

  const pages = [
    "contact-us",
   //  "CancellationPolicy",
   //  "RefundPolicy",
   //  "GuaranteedPolicy",
    "PrivacyPolicy",
    "Terms-Conditions",
    "pricing",
  ];

  const urls = pages.map((page: string) => ({
    loc: `${baseUrl}/${page}`,
    priority: "0.3",
  }));

  const xml = toSitemapXml(urls);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
