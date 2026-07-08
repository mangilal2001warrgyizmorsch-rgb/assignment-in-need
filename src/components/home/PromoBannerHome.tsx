"use client";

import React from "react";

export default function PromoBannerHome() {
  return (
    <section className="py-6 px-4 md:py-8 md:px-6 bg-white font-sans flex justify-center overflow-hidden">
      <div className="max-w-[1200px] w-full">
        {/* Outer Banner Card with precise gradient matching the reference image */}
        <div className="bg-gradient-to-r from-[#0b053f] via-[#1b0b5d] to-[#401269] rounded-2xl p-5 md:p-6 lg:p-7 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left shadow-lg relative overflow-hidden gap-6 lg:gap-4 border border-purple-500/10">
          
          {/* Subtle warm glow overlay on the right side */}
          <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-[radial-gradient(circle_at_right_bottom,rgba(251,113,133,0.12)_0%,transparent_75%)] pointer-events-none z-[1]" />

          {/* Left Block: Discount Callout */}
          <div className="flex flex-col gap-0.5 z-[2] shrink-0 min-w-[210px] items-center lg:items-start text-center lg:text-left">
            <span className="text-[10px] md:text-xs font-black tracking-widest text-[#dcd6fc]">
              GET UP TO
            </span>
            <h2 className="text-3xl md:text-[2.6rem] font-black text-white m-0 leading-none tracking-tight">
              <span className="text-[#ff7a00]">30%</span> OFF
            </h2>
            <span className="text-[10px] md:text-xs font-black tracking-widest text-[#dcd6fc] mt-0.5">
              ON YOUR FIRST ORDER
            </span>
            
            {/* Promo Code Badge */}
            <div className="bg-white text-[#4a17a3] text-[10px] font-extrabold py-1 px-4 rounded-full mt-2 mb-1.5 w-max border border-purple-100 select-all">
              Use Code: <strong className="text-[#4a17a3]">AIN30</strong>
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
              <h3 className="text-xs md:text-sm font-extrabold m-0 text-white tracking-wider uppercase">
                All These, Absolutely FREE!
              </h3>
            </div>

            {/* Grid layout on mobile, horizontal row layout on desktop */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:flex lg:flex-row gap-2 md:gap-2.5 w-full justify-between">
              {[
                {
                  title: "Plagiarism Report",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5.5 h-5.5 text-[#4a17a3]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6m-6 3h6" />
                    </svg>
                  )
                },
                {
                  title: "Rewriting & Paraphrasing",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5.5 h-5.5 text-[#4a17a3]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M3 12c0 1.232.046 2.453.138 3.662a4.006 4.006 0 00-3.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M3 12l-3 3m3-3l3 3" />
                    </svg>
                  )
                },
                {
                  title: "Title Page",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5.5 h-5.5 text-[#4a17a3]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v3.75" />
                    </svg>
                  )
                },
                {
                  title: "Bibliography",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5.5 h-5.5 text-[#4a17a3]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  )
                },
                {
                  title: "Formatting",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5.5 h-5.5 text-[#4a17a3]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                  )
                },
                {
                  title: "Unlimited Revisions",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5.5 h-5.5 text-[#4a17a3]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  )
                },
                {
                  title: "24/7 Support",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5.5 h-5.5 text-[#4a17a3]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096M9 21h7.5M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.773l-1.591 1.591M3 12h2.25m-.386-6.364l1.591 1.591M12 18.75a6.75 6.75 0 110-13.5 6.75 6.75 0 010 13.5z" />
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl p-2.5 flex flex-col items-center justify-center gap-1.5 flex-1 min-w-[95px] h-[105px] lg:min-w-[105px] lg:h-[112px] text-center shadow-md transition-transform duration-200 hover:-translate-y-1 select-none border border-purple-50/10"
                >
                  <div className="w-[32px] h-[32px] flex items-center justify-center shrink-0">
                    {item.svg}
                  </div>
                  <span className="text-[9px] lg:text-[10px] font-bold text-gray-800 leading-tight whitespace-normal">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
