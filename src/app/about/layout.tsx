import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Assignment in Need | UK Academic Support",
  description:
    "Learn how Assignment in Need supports UK students with structured, compliant academic assistance built around university standards and academic integrity.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
