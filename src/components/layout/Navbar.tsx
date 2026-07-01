"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Our Services", href: "#services" },
    { label: "Guarantees", href: "#guarantees" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className={`${styles.header} glassmorphism`}>
      <div className="container flex-between">
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span style={{ color: "var(--primary)" }}>Assignment</span>
          <span className={styles.logoText}>In Need</span>
        </Link>

        {/* Desktop Nav links */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => {
                const target = document.querySelector(link.href);
                if (target) {
                  e.preventDefault();
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className={styles.desktopActions}>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              const target = document.querySelector("#quote-form");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Order Homework
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={styles.mobileToggle}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={styles.navLink}
            style={{ fontSize: "1.2rem", padding: "0.5rem 0" }}
            onClick={(e) => {
              setIsOpen(false);
              const target = document.querySelector(link.href);
              if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {link.label}
          </Link>
        ))}
        <Button
          variant="primary"
          size="md"
          style={{ width: "100%", marginTop: "1rem" }}
          onClick={() => {
            setIsOpen(false);
            const target = document.querySelector("#quote-form");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Order Homework
        </Button>
      </div>
    </header>
  );
};
