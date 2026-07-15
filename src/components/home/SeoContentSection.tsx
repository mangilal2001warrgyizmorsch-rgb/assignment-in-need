"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert } from "lucide-react";

interface SeoBlock {
  id: string;
  number: string;
  shortHeading: string;
  rightTitle: string;
  content: React.ReactNode;
}

export default function SeoContentSection() {
  const [activeSection, setActiveSection] = useState(0);

  // Set up intersection observer to track active section index on scroll
  useEffect(() => {
    const sections = document.querySelectorAll(".seo-content-block");
    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -45% 0px", // Focal middle area
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
          setActiveSection(index);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleHeadingClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const seoBlocks: SeoBlock[] = [
    {
      id: "trust-and-quality",
      number: "01",
      shortHeading: "Assignment Help UK You Can Actually Trust",
      rightTitle: "Assignment Help UK You Can Actually Trust",
      content: (
        <div className="space-y-5 text-slate-600 leading-relaxed text-[16px] lg:text-[17px]">
          <p className="text-lg lg:text-[19px] text-slate-900 font-extrabold leading-snug">
            Human-written coursework, essays, and reports tailored to UK university standards.
          </p>
          <p>
            Struggling with a deadline, a confusing brief, or a subject you just can't get your head around? 
            <strong className="text-gray-900 font-bold"> AssignmentInNeed (AIN)</strong> offers assignment help UK students rely on when things get tight. Whether you need an assignment helper for a single tricky chapter or full help with assignments online from start to finish, our UK-based writers work directly with your module requirements—no generic templates, no copy-paste answers.
          </p>
          <p>
            We built AIN around one idea: help with assignments should mean real subject knowledge, real referencing accuracy, and real deadlines met—not a rushed, AI-generated draft with your name on it.
          </p>
        </div>
      ),
    },
    {
      id: "why-choose-ain",
      number: "02",
      shortHeading: "Why Students Choose AIN for Assignment Help Online",
      rightTitle: "Why Students Choose AIN for Assignment Help Online",
      content: (
        <div className="space-y-5 text-slate-600 leading-relaxed text-[16px] lg:text-[17px]">
          <p>
            Outperforming expectations with robust quality standards and native academics. Here is why AIN stands out:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {[
              {
                title: "Subject-matched writers",
                desc: "Matched directly to your course level and subject area.",
              },
              {
                title: "100% human-written work",
                desc: "Verified against AI-detection filters before dispatch.",
              },
              {
                title: "Referencing done right",
                desc: "Correct formatting for Harvard, APA, OSCOLA, or MLA.",
              },
              {
                title: "UK academic standards",
                desc: "Customized to align perfectly with UK university criteria.",
              },
              {
                title: "On-time, every time",
                desc: "Rigid deadline compliance holds primary precedence.",
              },
              {
                title: "Direct communication",
                desc: "Collaborate directly with your writer during production.",
              },
            ].map((item, idx) => (
              <li key={idx} className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3f159a] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-extrabold text-[14px] text-gray-900 leading-snug">{item.title}</span>
                  <span className="text-[12px] text-slate-500 leading-snug">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: "our-match-process",
      number: "03",
      shortHeading: "Assignment Writing Help, Structured Around You",
      rightTitle: "Assignment Writing Help, Structured Around You",
      content: (
        <div className="space-y-5 text-slate-600 leading-relaxed text-[16px] lg:text-[17px]">
          <p>
            Whether you're looking for assignment services for a single essay or ongoing assignment assistance online across a full term, our process stays the same:
          </p>
          <ol className="grid grid-cols-1 gap-3 pt-2">
            {[
              "Tell us what you need: Share your brief, word count, and deadline.",
              "We match you with a writer: Based on subject, level, and referencing style.",
              "You review and request changes: Nothing goes final until you're satisfied.",
              "You submit with confidence: Properly referenced, plagiarism-checked, and human-written.",
            ].map((step, idx) => (
              <li key={idx} className="flex gap-4 items-center text-[15px] font-semibold text-slate-800 bg-slate-50/50 rounded-xl py-3 px-4 border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-[#3f159a] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <div className="bg-amber-50/70 border border-amber-200/50 rounded-2xl p-5 mt-6 flex gap-4 items-start">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1 text-[13px]">
              <span className="font-bold text-amber-800 uppercase tracking-wide">An Honest Note on Academic Integrity</span>
              <span className="text-amber-700 leading-relaxed">
                Assignment help exists to support your understanding—model answers, structural guidance, and properly researched drafts you can learn from and build on. Use of AIN materials must follow your university's academic integrity policies.
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "all-subjects-coverage",
      number: "04",
      shortHeading: "Best Assignment Help Across Every Subject",
      rightTitle: "Best Assignment Help Across Every Subject",
      content: (
        <div className="space-y-5 text-slate-600 leading-relaxed text-[16px] lg:text-[17px]">
          <p>
            From business and law to nursing, computer science, and the humanities, our assignment help services cover undergraduate and postgraduate work across UK universities. If you need help on assignments in a subject that isn't listed here, ask—we'll tell you honestly if we have the right expertise before you commit, not after.
          </p>
          <p>
            We don't stretch writers across subjects they're unfamiliar with. If a topic falls outside what we can genuinely support well, we'll tell you upfront rather than delivering weak work. That's a deliberate trade-off—we'd rather turn down a request than damage the trust that makes people come back for assignment help online again.
          </p>
          <p className="font-bold text-slate-900 border-l-4 border-[#3f159a] pl-4 py-1.5 mt-6">
            Need help with an assignment today? Get in touch and tell us your deadline, subject, and requirements—we'll match you with the right assignment helper.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white border-t border-slate-100 flex justify-center">
      <div className="max-w-[1250px] w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative">
          
          {/* Left Column: Sticky Timeline Index (Desktop Only) */}
          <div className="hidden lg:block lg:w-[35%] sticky top-32 self-start py-4">
            
            <div className="relative pl-6 border-l border-slate-200 flex flex-col gap-6">
              
              {/* Fluid Slider Track active indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-200">
                <div className="relative w-full h-full">
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute left-[-1.5px] w-[4px] bg-[#3f159a] rounded-full"
                    style={{ height: "48px" }}
                    animate={{ 
                      top: `${activeSection * 72 + 10}px` 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>
              </div>

              {seoBlocks.map((block, idx) => {
                const isActive = activeSection === idx;
                return (
                  <button
                    key={block.id}
                    onClick={() => handleHeadingClick(block.id)}
                    className="text-left w-full focus:outline-none flex flex-col gap-1 transition-all duration-300 py-1"
                  >
                    <span 
                      className={`text-xs font-black uppercase tracking-wider transition-colors duration-300 ${
                        isActive ? "text-[#3f159a]" : "text-slate-400"
                      }`}
                    >
                      {block.number}
                    </span>
                    <span
                      className={`text-[16px] lg:text-[17px] font-extrabold leading-snug transition-all duration-300 origin-left ${
                        isActive 
                          ? "text-gray-900 scale-100" 
                          : "text-slate-400 hover:text-slate-600 scale-[0.98]"
                      }`}
                    >
                      {block.shortHeading}
                    </span>
                  </button>
                );
              })}
            </div>
            
          </div>

          {/* Right Column: Seamless Content Stream */}
          <div className="w-full lg:w-[65%] flex flex-col">
            {seoBlocks.map((block, index) => (
              <div
                key={block.id}
                id={block.id}
                data-index={index}
                className="seo-content-block py-10 lg:py-16 first:pt-0 last:pb-0 border-b border-slate-100 last:border-none flex flex-col gap-5 scroll-mt-24 min-h-[60vh] lg:min-h-[75vh] justify-center"
              >
                {/* Mobile Heading Row */}
                <div className="flex lg:hidden items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-black text-[#3f159a] bg-purple-50/70 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {block.number} / {block.shortHeading}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight m-0">
                    {block.rightTitle}
                  </h2>
                </div>

                <div className="mt-2 text-slate-600">
                  {block.content}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
