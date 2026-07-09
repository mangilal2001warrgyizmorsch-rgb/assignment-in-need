import { NextResponse } from "next/server";

const SERVICE_PAGES_API_URL = "https://admin.assignnmentinneed.com/api/service-pages";

export async function GET() {
  try {
    const response = await fetch(SERVICE_PAGES_API_URL, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    const text = await response.text();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: `Service API responded with ${response.status}` },
        { status: response.status },
      );
    }

    try {
      return NextResponse.json(JSON.parse(text));
    } catch {
      return NextResponse.json({ success: false, message: "Service API returned invalid JSON" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ success: false, message: "Unable to fetch service pages" }, { status: 502 });
  }
}
