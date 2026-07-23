"use client";

import React, { use } from "react";
import CityDetailPage from "@/components/city/CityDetailPage";

interface CityRoutePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CityRoutePage({ params }: CityRoutePageProps) {
  const resolvedParams = use(params);
  return (
    <CityDetailPage
      key={resolvedParams.slug}
      slug={resolvedParams.slug}
    />
  );
}
