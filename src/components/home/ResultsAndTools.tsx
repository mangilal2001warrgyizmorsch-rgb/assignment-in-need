import React from "react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

const RESULTS_DATA = [
  {
    before: "68%",
    after: "82%",
    subject: "Business Management",
    university: "University of Manchester",
    user: "James T.",
    img: "/assets/media/layout/testimonial/testimonial4.webp",
  },
  {
    before: "64%",
    after: "78%",
    subject: "Nursing Case Study",
    university: "King's College London",
    user: "Olivia D.",
    img: "/assets/media/layout/testimonial/testimonial5.webp",
  },
  {
    before: "59%",
    after: "74%",
    subject: "Law Essay",
    university: "University of Birmingham",
    user: "William K.",
    img: "/assets/media/layout/testimonial/testimonial6.webp",
  },
  {
    before: "61%",
    after: "83%",
    subject: "Computer Science Dissertation",
    university: "University of Edinburgh",
    user: "Sophia L.",
    img: "/assets/media/layout/testimonial/testimonial1.webp",
  },

];

const TOOLS_DATA = [
  {
    title: "Grade Calculator",
    desc: "Calculate your target grade",
    color: "#4b5563",
    bg: "bg-gray-50",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <circle cx="10" cy="13" r="2" />
        <line x1="11.41" y1="14.41" x2="13.5" y2="16.5" />
      </svg>
    ),
  },
  {
    title: "Reference Generator",
    desc: "APA, Harvard, MLA & more",
    color: "#f97316",
    bg: "bg-orange-50",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
  },
  {
    title: "Plagiarism Checker",
    desc: "Check originality of your work",
    color: "#22c55e",
    bg: "bg-green-50",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Word Counter",
    desc: "Count words instantly",
    color: "#6366f1",
    bg: "bg-indigo-50",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function ResultsAndTools() {
  return (
    <section className="py-16 px-8 max-md:py-10 max-md:px-4 bg-white font-sans flex flex-col items-center gap-16">
      {/* 1. Real Results Section */}
      <div className="max-w-[1200px] w-full flex flex-col gap-8">
        <div className="rounded-[20px] p-[2rem] flex flex-col gap-10 max-md:p-0 max-md:bg-transparent max-md:border-none max-md:shadow-none max-md:gap-6 bg-[#fcfdff] border border-blue-50/50 shadow-[0_12px_40px_rgba(0,0,0,0.02)] w-full">
          <AnimateIn variant="fadeUp" className="flex flex-col text-center items-center">
            <h2 className="text-3xl max-md:text-2xl font-extrabold text-gray-900 m-0 mb-3 tracking-tight">
              Real Results.
              <span className="bg-gradient-to-r from-purple-800 to-orange-600 bg-clip-text text-transparent overflow-hidden text-ellipsis"> Real Success.</span>
            </h2>
            <p className="text-[1.02rem] max-md:text-[0.95rem] text-gray-500 m-0 leading-normal max-w-2xl">
              See how we help students improve their grades across various subjects and top UK universities.
            </p>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {RESULTS_DATA.map((result, index) => (
              <StaggerItem key={index} className="h-full">
                <div className="group bg-white rounded-2xl p-[1.5rem_1.2rem] w-full shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-gray-100/80 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 h-full">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div className="flex flex-col items-center">
                      <span className="text-[1.55rem] font-extrabold text-[#f97316]">
                        {result.before}
                      </span>
                      <span className="text-[0.65rem] font-semibold text-gray-400 uppercase tracking-wider">
                        Before
                      </span>
                    </div>
                    <div className="text-gray-300 text-[1.1rem] font-bold select-none">➔</div>
                    <div className="flex flex-col items-center">
                      <span className="text-[1.55rem] font-extrabold text-[#10b981]">
                        {result.after}
                      </span>
                      <span className="text-[0.65rem] font-semibold text-gray-400 uppercase tracking-wider">
                        After
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-0.5">
                    <strong className="text-[0.85rem] font-bold text-gray-800 line-clamp-1 group-hover:text-[#3f159a] transition-colors duration-200">
                      {result.subject}
                    </strong>
                    <span className="text-[0.72rem] text-gray-500 font-medium">
                      {result.university}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2.5 mt-auto pt-3 border-t border-gray-50">
                    <img
                      src={result.img}
                      alt={result.user}
                      className="w-7 h-7 rounded-full bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-[0.78rem] font-semibold text-gray-700">
                      {result.user}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* 2. Academic Tools Section */}
      <div className="max-w-[1200px] w-full flex flex-col gap-8">
        <div className="rounded-[20px] p-[2rem] flex flex-col gap-10 max-md:p-0 max-md:bg-transparent max-md:border-none max-md:shadow-none max-md:gap-6 bg-[#faf8ff] border border-purple-50 shadow-[0_12px_40px_rgba(0,0,0,0.02)] w-full">
          <AnimateIn variant="fadeUp" className="flex flex-col text-center items-center">
            <h2 className="text-3xl max-md:text-2xl font-extrabold text-gray-900 m-0 mb-3 tracking-tight">
              Academic
              <span className="bg-gradient-to-r from-purple-800 to-orange-600 bg-clip-text text-transparent overflow-hidden text-ellipsis"> Tools & Resources</span>
            </h2>
            <p className="text-[1.02rem] max-md:text-[0.95rem] text-gray-500 m-0 leading-normal max-w-2xl">
              Free tools designed to support your academic journey.
            </p>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {TOOLS_DATA.map((tool, index) => (
              <StaggerItem key={index} className="h-full">
                <a
                  href="#"
                  className="group bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-4 w-full shadow-[0_4px_20px_rgba(0,0,0,0.015)] border border-gray-100 hover:border-purple-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_25px_rgba(109,40,217,0.06)] h-full"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: tool.color, backgroundColor: `${tool.color}12` }}
                  >
                    {tool.svg}
                  </div>
                  <div className="flex flex-col gap-1">
                    <strong className="text-[0.95rem] font-bold text-gray-900 group-hover:text-[#3f159a] transition-colors duration-200">
                      {tool.title}
                    </strong>
                    <span className="text-[0.78rem] text-gray-500 font-medium">
                      {tool.desc}
                    </span>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
