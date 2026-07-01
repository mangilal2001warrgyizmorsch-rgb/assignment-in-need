import React from "react";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Brand Info & Socials */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 select-none">
              <div className="w-9 h-9 rounded-lg bg-gradient-logo flex items-center justify-center font-heading font-extrabold text-white text-lg shadow-md shadow-primary-500/10">
                A
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                Assignment<span className="text-accent-500 font-black ml-1">In Need</span>
              </span>
            </Link>
            <p className="text-sm text-primary-100/70 leading-relaxed">
              Helping students in the UK achieve academic success with expert support, custom-written, and plagiarism-free assignment writing assistance.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-navy-800 hover:bg-primary-600 text-primary-100 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3 0-5 2-5 5v2z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-navy-800 hover:bg-primary-600 text-primary-100 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-navy-800 hover:bg-primary-600 text-primary-100 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-navy-800 hover:bg-primary-600 text-primary-100 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-base text-white">Services</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-primary-100/70">
              <li>
                <Link href="/services/essay-writing" className="hover:text-accent-500 transition-colors">
                  Essay Writing
                </Link>
              </li>
              <li>
                <Link href="/services/dissertation-help" className="hover:text-accent-500 transition-colors">
                  Dissertation Help
                </Link>
              </li>
              <li>
                <Link href="/services/assignment-writing" className="hover:text-accent-500 transition-colors">
                  Assignment Help
                </Link>
              </li>
              <li>
                <Link href="/services/case-study-help" className="hover:text-accent-500 transition-colors">
                  Case Study Help
                </Link>
              </li>
              <li>
                <Link href="/services/report-writing" className="hover:text-accent-500 transition-colors">
                  Report Writing
                </Link>
              </li>
              <li>
                <Link href="/services/coursework-help" className="hover:text-accent-500 transition-colors">
                  Coursework Help
                </Link>
              </li>
              <li>
                <Link href="/services/proofreading-editing" className="hover:text-accent-500 transition-colors">
                  Proofreading & Editing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Subjects Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-base text-white">Subjects</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-primary-100/70">
              <li>
                <Link href="/subjects/accounting" className="hover:text-accent-500 transition-colors">
                  Accounting
                </Link>
              </li>
              <li>
                <Link href="/subjects/nursing" className="hover:text-accent-500 transition-colors">
                  Nursing
                </Link>
              </li>
              <li>
                <Link href="/subjects/law" className="hover:text-accent-500 transition-colors">
                  Law
                </Link>
              </li>
              <li>
                <Link href="/subjects/business" className="hover:text-accent-500 transition-colors">
                  Business Management
                </Link>
              </li>
              <li>
                <Link href="/subjects/engineering" className="hover:text-accent-500 transition-colors">
                  Engineering
                </Link>
              </li>
              <li>
                <Link href="/subjects/computer-science" className="hover:text-accent-500 transition-colors">
                  Computer Science
                </Link>
              </li>
              <li>
                <Link href="/subjects/psychology" className="hover:text-accent-500 transition-colors">
                  Psychology
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-base text-white">Resources</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-primary-100/70">
              <li>
                <Link href="/samples" className="hover:text-accent-500 transition-colors">
                  Referencing Guides
                </Link>
              </li>
              <li>
                <Link href="/samples" className="hover:text-accent-500 transition-colors">
                  Writing Tips
                </Link>
              </li>
              <li>
                <Link href="/samples" className="hover:text-accent-500 transition-colors">
                  Samples
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent-500 transition-colors">
                  Student Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Company & Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-base text-white">Contact Us</h4>
            <ul className="flex flex-col gap-3.5 text-sm text-primary-100/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span>77 Great Portland Street, London, W1W 6PQ, UK</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-accent-500 shrink-0" />
                <a href="mailto:support@assignmentinneed.com" className="hover:text-accent-500 transition-colors truncate">
                  support@assignmentinneed.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneCall className="w-5 h-5 text-accent-500 shrink-0" />
                <a href="tel:+447300640066" className="hover:text-accent-500 transition-colors">
                  +44 7300 640066
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-accent-500 shrink-0" />
                <a href="https://wa.me/447300640066" className="hover:text-accent-500 transition-colors font-bold text-success">
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-navy-800 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-100/40">
          <p>© {currentYear} Assignment In Need. All rights reserved. Registered in England & Wales.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-accent-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-accent-500 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/about" className="hover:text-accent-500 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
Footer.displayName = "Footer";
