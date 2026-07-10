import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_INTERNAL_URL || process.env.NEXT_PUBLIC_BACKEND_URL || "https://ain.warrgyizmorsch.com";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const response = await fetch(`${BACKEND_URL}/api/web-place-order`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    if (!response.ok) {
      try {
        const parsed = JSON.parse(text);
        return NextResponse.json(parsed, { status: response.status });
      } catch {
        return NextResponse.json(
          { success: false, message: `Place order API responded with status ${response.status}` },
          { status: response.status }
        );
      }
    }

    try {
      const parsed = JSON.parse(text);
      return NextResponse.json(parsed);
    } catch {
      return NextResponse.json(
        { success: false, message: "Place order API returned invalid JSON response" },
        { status: 502 }
      );
    }
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: "Unable to connect to place-order backend services", error: err.message },
      { status: 500 }
    );
  }
}
