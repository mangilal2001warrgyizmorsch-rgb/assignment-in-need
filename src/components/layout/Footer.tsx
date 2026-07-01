import React from "react";
import Link from "next/link";
import { Mail, MapPin, ShieldAlert } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Brand Info */}
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
              Providing premium, 100% original, and plagiarism-free academic writing services for students worldwide. Get custom essays and papers in 48 hours or less.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-navy-800 hover:bg-primary-600 text-primary-100 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3 0-5 2-5 5v2z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-navy-800 hover:bg-primary-600 text-primary-100 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
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
                href="#"
                className="w-8 h-8 rounded-full bg-navy-800 hover:bg-primary-600 text-primary-100 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Subjects */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-base text-white">Subject Areas</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-primary-100/70">
              <li>
                <Link href="#services" className="hover:text-accent-500 transition-colors">
                  Business Marketing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent-500 transition-colors">
                  Finance & Accounting
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent-500 transition-colors">
                  Business Law Essays
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent-500 transition-colors">
                  Nursing Research
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent-500 transition-colors">
                  Engineering Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Features */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-base text-white">Our Guarantees</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-primary-100/70">
              <li className="flex items-center gap-2">⭐ 100% Plagiarism-Free</li>
              <li className="flex items-center gap-2">🕒 Under 48h Delivery</li>
              <li className="flex items-center gap-2">🎓 PhD Expert Writers</li>
              <li className="flex items-center gap-2">🔒 Locked Top Grades</li>
              <li className="flex items-center gap-2">💯 100% Satisfaction</li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-base text-white">Resources</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-primary-100/70">
              <li>
                <Link href="#" className="hover:text-accent-500 transition-colors">
                  Reference Formatting
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent-500 transition-colors">
                  Free Essay Samples
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent-500 transition-colors">
                  APA / Harvard Style
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-accent-500 transition-colors">
                  Find FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent-500 transition-colors">
                  Academic Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-base text-white">Contact Info</h4>
            <ul className="flex flex-col gap-3 text-sm text-primary-100/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span>24 Old Queen Street, Westminster, London, SW1H 9HP, UK</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-accent-500 shrink-0" />
                <a href="mailto:support@assignmentinneed.co.uk" className="hover:text-accent-500 transition-colors">
                  support@ain.co.uk
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldAlert className="w-5 h-5 text-accent-500 shrink-0" />
                <span>24/7 Priority Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-navy-800 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-100/40">
          <p>© {currentYear} Assignment In Need Help. All rights reserved. Registered in England & Wales.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-accent-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-accent-500 transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
Footer.displayName = "Footer";
