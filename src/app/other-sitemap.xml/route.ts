import { NextResponse } from "next/server";
import { toSitemapXml } from "@/lib/sitemap-data";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const baseUrl = `${url.protocol}//${url.host}`;

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
