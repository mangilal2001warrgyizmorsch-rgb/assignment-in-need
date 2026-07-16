import { NextResponse } from "next/server";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>https://assignmentinneed.co.uk/uk/london</loc>
      <priority>0.9</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/uk/birmingham/assignment-help</loc>
      <priority>0.9</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/uk/assignment-help-liverpool</loc>
      <priority>0.9</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/uk/manchester/assignment-help</loc>
      <priority>0.9</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/uk/assignment-help-cardiff</loc>
      <priority>0.9</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/uk/assignment-help-leeds</loc>
      <priority>0.9</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/uk/assignment-help-bristol</loc>
      <priority>0.9</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/uk/assignment-help-oxford</loc>
      <priority>0.9</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/uk/assignment-help-nottingham</loc>
      <priority>0.9</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/uk/assignment-help-glasgow</loc>
      <priority>0.9</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/uk/assignment-help-edinburgh</loc>
      <priority>0.9</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/uk/assignment-help-cambridge</loc>
      <priority>0.9</priority>
   </url>
   <url>
      <loc>https://assignmentinneed.co.uk/uk/assignment-help-sheffield</loc>
      <priority>0.9</priority>
   </url>
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
