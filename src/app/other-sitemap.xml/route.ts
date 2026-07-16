import { NextResponse } from "next/server";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>


      <loc>https://assignmentinneed.co.uk/contact-us</loc>
      <priority>0.3</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/CancellationPolicy</loc>
      <priority>0.3</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/RefundPolicy</loc>
      <priority>0.3</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/GuaranteedPolicy</loc>
      <priority>0.3</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/PrivacyPolicy</loc>
      <priority>0.3</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/Terms-Conditions</loc>
      <priority>0.3</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/pricing</loc>
      <priority>0.3</priority>
   </url>
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
