import React from "react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--card)",
        color: "var(--foreground)",
        borderTop: "1px solid var(--border)",
        padding: "5rem 0 3rem 0",
        marginTop: "auto",
      }}
    >
      <div className="container">
        <div className="grid-4" style={{ marginBottom: "4rem" }}>
          {/* Brand Info */}
          <div className="flex-column" style={{ gap: "1.25rem" }}>
            <Link
              href="/"
              style={{
                fontSize: "1.3rem",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              <span style={{ color: "var(--primary)" }}>Assignment</span>
              <span
                style={{
                  background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                In Need
              </span>
            </Link>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>
              Providing premium, 100% original, and plagiarism-free academic writing services for students worldwide.
              Get custom essays, papers, and case studies written by experts in 48 hours or less.
            </p>
          </div>

          {/* Academic Services */}
          <div className="flex-column" style={{ gap: "1.25rem" }}>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>Subjects Covered</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", padding: 0 }}>
              <li>
                <Link href="#services" style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                  Business Marketing
                </Link>
              </li>
              <li>
                <Link href="#services" style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                  Finance & Accounting
                </Link>
              </li>
              <li>
                <Link href="#services" style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                  Business Law
                </Link>
              </li>
              <li>
                <Link href="#services" style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                  Nursing & Healthcare
                </Link>
              </li>
              <li>
                <Link href="#services" style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                  Engineering Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex-column" style={{ gap: "1.25rem" }}>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", padding: 0 }}>
              <li>
                <Link href="#hero" style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#guarantees" style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                  Guarantees
                </Link>
              </li>
              <li>
                <Link href="#testimonials" style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#quote-form" style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust indicators */}
          <div className="flex-column" style={{ gap: "1.25rem" }}>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>Our Guarantee</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", padding: 0 }}>
              <li style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                100% Plagiarism-Free
              </li>
              <li style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                48 Hour Express Delivery
              </li>
              <li style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Lock the Top Grade
              </li>
              <li style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                100% Satisfaction
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.85rem", color: "var(--muted)", margin: 0 }}>
            © {currentYear} Assignment In Need Help. All rights reserved. Double-guaranteed plagiarism-free.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/" style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
              Privacy Policy
            </Link>
            <Link href="/" style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
              Terms of Service
            </Link>
            <Link href="/" style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
              Referencing Styles
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
