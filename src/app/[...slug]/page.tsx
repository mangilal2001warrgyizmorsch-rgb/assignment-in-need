"use client";

import React from "react";
import { useParams } from "next/navigation";
import ServiceLanding from "../services/[...slug]/page";
import SubjectPage from "../subjects/[slug]/page";
import CityDetailPage from "@/components/city/CityDetailPage";

// Service parent slugs that should render the ServiceLanding page
const SERVICE_PARENT_SLUGS = [
  "assignment",
  "dissertation",
  "assignment-writing-uk",
  "dissertation-writing-services",
];

// List of city identifiers to trigger CityDetailPage rendering
const CITY_IDENTIFIERS = [
  "london", "birmingham", "manchester", "leeds", "glasgow", "edinburgh", "bristol", "liverpool",
  "sydney", "melbourne", "brisbane", "perth", "adelaide", "canberra",
  "toronto", "vancouver", "montreal", "ottawa",
  "dubai", "abu-dhabi", "sharjah",
  "kuala-lumpur", "penang"
];

const isCityRoute = (slug: string): boolean => {
  if (!slug) return false;
  const segments = slug.toLowerCase().split("/");
  const lastSegment = segments[segments.length - 1] || "";
  const baseKey = lastSegment.replace("-assignment-help", "").replace("-assignment-writing-help", "");
  return CITY_IDENTIFIERS.includes(baseKey) || segments.includes("cities");
};

export default function CatchAllPage() {
  const params = useParams();
  const slugArray = params?.slug;
  const fullSlug = Array.isArray(slugArray)
    ? slugArray.join("/")
    : (slugArray as string) || "";

  // Only service PARENT pages use ServiceLanding
  if (SERVICE_PARENT_SLUGS.includes(fullSlug)) {
    return <ServiceLanding />;
  }

  // Detect and route to CityDetailPage for city slugs
  if (isCityRoute(fullSlug)) {
    return <CityDetailPage slug={fullSlug} />;
  }

  // Everything else renders as SubjectPage
  // (subjects like /history-assignment-help AND service children like /economics)
  return <SubjectPage />;
}
