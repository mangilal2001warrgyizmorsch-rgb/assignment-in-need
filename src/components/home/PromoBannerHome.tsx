import React from "react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

export default function PromoBannerHome() {
  return (
    <section className="py-6 px-4 md:py-8 md:px-6 bg-white font-sans flex justify-center overflow-hidden">
      <AnimateIn variant="scaleUp" className="max-w-[1200px] w-full">
        {/* Outer Banner Card with precise gradient matching the reference image */}
        <div className="bg-gradient-to-r from-[#0b053f] via-[#1b0b5d] to-[#401269] rounded-2xl p-5 md:p-6 lg:p-7 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left shadow-lg relative overflow-hidden gap-6 lg:gap-4 border border-purple-500/10">
          
          {/* Subtle warm glow overlay on the right side */}
          <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-[radial-gradient(circle_at_right_bottom,rgba(251,113,133,0.12)_0%,transparent_75%)] pointer-events-none z-[1]" />

          {/* Left Block: Discount Callout */}
          <div className="flex flex-col gap-0.5 z-[2] shrink-0 min-w-[210px] items-center lg:items-start text-center lg:text-left">
            <span className="text-[10px] md:text-xs font-black tracking-widest text-[#dcd6fc]">
              GET UP TO
            </span>
            <div className="text-3xl md:text-[2.6rem] font-black text-white m-0 leading-none tracking-tight">
              <span className="text-[#ff7a00]">40%</span> OFF
            </div>
            <span className="text-[10px] md:text-xs font-black tracking-widest text-[#dcd6fc] mt-0.5">
              ON YOUR FIRST ORDER
            </span>
            
            {/* Promo Code Badge */}
            <div className="bg-white text-[#4a17a3] text-[10px] font-extrabold py-1 px-4 rounded-full mt-2 mb-1.5 w-max border border-purple-100 select-all">
              Use Code: <strong className="text-[#4a17a3]">AIN40</strong>
            </div>
            
            <p className="text-[9px] md:text-[10px] text-white/50 m-0 font-medium tracking-wide">
              Hurry! Offer valid for limited time only.
            </p>
          </div>

          {/* Vertical Separator line visible only on desktop */}
          <div className="w-[1px] bg-white/10 hidden lg:block self-stretch mx-4 z-[2]" />

          {/* Right Block: Reusable Cards Slider/Grid */}
          <div className="flex flex-col gap-3.5 z-[2] flex-1 w-full min-w-0">
            {/* sparkles icon + title */}
            <div className="flex items-center gap-1.5 justify-center lg:justify-start">
              <span className="text-amber-400 text-xs select-none">✨</span>
              <p className="text-xs md:text-sm font-extrabold m-0 text-white tracking-wider uppercase">
                All These, Absolutely FREE!
              </p>
            </div>

            {/* Grid layout on mobile, horizontal row layout on desktop */}
            <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 lg:flex lg:flex-row gap-2 md:gap-2.5 w-full justify-between">
              {[
                {
                  title: "Plagiarism Report",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5 text-[#4a17a3]">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <polygon points="9.5 12 9.5 16 13.5 14" />
                      <circle cx="16" cy="18" r="2.5" />
                      <line x1="18" y1="20" x2="20" y2="22" />
                    </svg>
                  )
                },
                {
                  title: "Rewriting & Paraphrasing",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5 text-[#4a17a3]">
                      <circle cx="12" cy="8" r="3.5" />
                      <circle cx="12" cy="16" r="3.5" />
                      <circle cx="8" cy="12" r="3.5" />
                      <circle cx="16" cy="12" r="3.5" />
                      <path d="M12 10.5v3" />
                      <path d="M10.5 12h3" />
                    </svg>
                  )
                },
                {
                  title: "Title Page",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5 text-[#4a17a3]">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M9 12h6" />
                      <path d="M12 12v5" />
                    </svg>
                  )
                },
                {
                  title: "Bibliography",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5 text-[#4a17a3]">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      <line x1="6" y1="8" x2="8" y2="8" />
                      <line x1="6" y1="12" x2="8" y2="12" />
                      <line x1="16" y1="8" x2="18" y2="8" />
                      <line x1="16" y1="12" x2="18" y2="12" />
                    </svg>
                  )
                },
                {
                  title: "Formatting",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5 text-[#4a17a3]">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <line x1="7" y1="8" x2="17" y2="8" />
                      <line x1="7" y1="12" x2="13" y2="12" />
                      <line x1="7" y1="16" x2="15" y2="16" />
                    </svg>
                  )
                },
                {
                  title: "Unlimited Revisions",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5 text-[#4a17a3]">
                      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38L21.5 8" />
                    </svg>
                  )
                },
                {
                  title: "24/7 Support",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5 text-[#4a17a3]">
                      <path d="M3 12c0-5 4-9 9-9s9 4 9 9" />
                      <rect x="2" y="10" width="2" height="4" rx="1" />
                      <rect x="20" y="10" width="2" height="4" rx="1" />
                      <path d="M20 12v1a3 3 0 0 1-3 3h-2" />
                      <circle cx="12" cy="11" r="3" />
                      <path d="M9 17a3 3 0 0 0 6 0" />
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <StaggerItem key={idx} className="flex-1 min-w-[95px] lg:min-w-[105px]">
                  <div 
                    className="bg-white rounded-xl p-2.5 flex flex-col items-center justify-center gap-1.5 w-full h-[105px] lg:h-[112px] text-center shadow-md transition-transform duration-200 hover:-translate-y-1 select-none border border-purple-50/10"
                  >
                    <div className="w-[32px] h-[32px] flex items-center justify-center shrink-0">
                      {item.svg}
                    </div>
                    <span className="text-[9px] md:text-[15px] font-bold text-gray-800 leading-tight whitespace-normal">
                      {item.title}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </AnimateIn>
    </section>
  );
}
