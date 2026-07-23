"use client";

import { usePathname } from "next/navigation";

export function CanonicalHeader() {
  const pathname = usePathname();

  // Strip trailing slashes to keep canonical URLs clean and consistent
  const cleanPath =
    pathname === "/"
      ? ""
      : pathname.endsWith("/")
        ? pathname.slice(0, -1)
        : pathname;
  const canonicalUrl = `https://www.assignmentinneed.co.uk${cleanPath}`;

  return <link rel="canonical" href={canonicalUrl} />;
}
