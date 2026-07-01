"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

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
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-100/50 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-logo flex items-center justify-center font-heading font-extrabold text-white text-xl shadow-md shadow-primary-500/10">
            A
          </div>
          <span className="font-heading font-extrabold text-lg md:text-xl text-text-heading flex items-center">
            Assignment<span className="gradient-text font-black ml-1">In Need</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-text-muted hover:text-primary-700 transition-colors duration-150"
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
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+442079460958"
            className="flex items-center gap-2 text-sm font-bold text-text-heading hover:text-primary-700 transition-colors duration-150"
          >
            <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-700 flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <span className="hidden lg:inline text-sm">+44 20 7946 0958</span>
          </a>
          <Button
            variant="cta"
            size="sm"
            onClick={() => {
              const target = document.querySelector("#quote-form");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get Free Quote
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-text-heading hover:text-primary-700 transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-white border-b border-primary-100/50 flex flex-col p-6 gap-4 shadow-lg animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-semibold text-text-body hover:text-primary-700 py-1 transition-colors duration-150"
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
          <hr className="border-primary-100/50 my-1" />
          <a
            href="tel:+442079460958"
            className="flex items-center gap-3 text-base font-bold text-text-heading py-1"
          >
            <div className="w-9 h-9 rounded-full bg-primary-50 text-primary-700 flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <span>+44 20 7946 0958</span>
          </a>
          <Button
            variant="cta"
            size="md"
            style={{ width: "100%" }}
            onClick={() => {
              setIsOpen(false);
              const target = document.querySelector("#quote-form");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get Free Quote
          </Button>
        </div>
      )}
    </header>
  );
};
Navbar.displayName = "Navbar";
