"use client";

import React from 'react';
import Link from 'next/link';

export default function PopularServices() {
  return (
    <section className="py-12 md:py-16 bg-white font-sans w-full flex justify-center">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 w-full">
        {/* Section Heading */}
        <h2 className="text-center text-2xl md:text-[2.2rem] font-black text-gray-900 m-0 mb-8 md:mb-12">
          Our Most Popular Services
        </h2>

        {/* Layout Grid Wrapper with flex/stretch matching Laravel */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch w-full">
          
          {/* Left Column: Large Card (Main) */}
          <Link 
            href="/assignment-writing-uk" 
            className="group relative overflow-hidden rounded-[20px] p-6 bg-gradient-to-br from-white to-[#f3e8ff] w-full md:w-1/4 shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100/50 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between min-h-[380px] md:min-h-[464px] h-full"
          >
            <div className="flex flex-col justify-between h-full w-full relative z-[2] items-start text-left">
              <div>
                <h3 className="text-[1.2rem] font-bold text-gray-900 m-0 mb-2 leading-tight">
                  Assignment Help
                </h3>
                <p className="hidden md:block text-[0.82rem] text-gray-600 m-0 mt-2 leading-relaxed max-w-[90%]">
                  All types of assignments on any subject
                </p>
              </div>
              <div className="flex flex-col gap-0.5 items-start mt-auto">
                <span className="text-sm md:text-[0.95rem] font-bold text-gray-800">From £12</span>
                <span className="text-xs text-gray-400 font-medium">12,500+ Orders</span>
              </div>
            </div>
            <img 
              src="/new-home-page-images/Assignment-Help.webp" 
              alt="Assignment Help"
              className="absolute bottom-[-5%] right-[-5%] w-[110%] max-h-[75%] object-contain pointer-events-none transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Right Column: Two Rows of Grid Cards stretched equally */}
          <div className="flex flex-col gap-6 flex-1 w-full">
            
            {/* Top Row: 3 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full flex-1">
              
              {/* Card 2: Essay Writing */}
              <Link 
                href="/essay-writing-help-services" 
                className="group relative overflow-hidden rounded-[20px] p-6 bg-gradient-to-br from-white to-[#fff7ed] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100/50 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between h-full min-h-[180px] md:min-h-[220px]"
              >
                <div className="flex flex-col justify-between h-full w-full relative z-[2] items-start text-left">
                  <div>
                    <h3 className="text-[1.1rem] font-bold text-gray-900 m-0 mb-1 leading-tight">
                      Essay Writing
                    </h3>
                    <p className="hidden md:block text-[0.82rem] text-gray-600 m-0 mt-2 leading-relaxed max-w-[65%]">
                      Well-researched, plagiarism-free essays
                    </p>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start mt-auto">
                    <span className="text-sm md:text-[0.95rem] font-bold text-gray-800">From £12</span>
                    <span className="text-xs text-gray-400 font-medium">18,600+ Orders</span>
                  </div>
                </div>
                <img 
                  src="/new-home-page-images/Essay-Writing.webp" 
                  alt="Essay Writing"
                  className="absolute bottom-[-15px] right-[-15px] w-[65%] max-h-[85%] object-contain pointer-events-none transition-transform duration-300 group-hover:scale-105" 
                />
              </Link>

              {/* Card 3: Dissertation Help */}
              <Link 
                href="/dissertation-writing-help-services" 
                className="group relative overflow-hidden rounded-[20px] p-6 bg-gradient-to-br from-white to-[#e0e7ff] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100/50 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between h-full min-h-[180px] md:min-h-[220px]"
              >
                <div className="flex flex-col justify-between h-full w-full relative z-[2] items-start text-left">
                  <div>
                    <h3 className="text-[1.1rem] font-bold text-gray-900 m-0 mb-1 leading-tight">
                      Dissertation Help
                    </h3>
                    <p className="hidden md:block text-[0.82rem] text-gray-600 m-0 mt-2 leading-relaxed max-w-[65%]">
                      Expert assistance for Master's & PhD
                    </p>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start mt-auto">
                    <span className="text-sm md:text-[0.95rem] font-bold text-gray-800">From £25</span>
                    <span className="text-xs text-gray-400 font-medium">8,900+ Orders</span>
                  </div>
                </div>
                <img 
                  src="/new-home-page-images/Disseratation-Help.webp" 
                  alt="Dissertation Help"
                  className="absolute bottom-[-15px] right-[-15px] w-[65%] max-h-[85%] object-contain pointer-events-none transition-transform duration-300 group-hover:scale-105" 
                />
              </Link>

              {/* Card 4: Case Study Help */}
              <Link 
                href="/upload-your-assignment" 
                className="group relative overflow-hidden rounded-[20px] p-6 bg-gradient-to-br from-white to-[#fff1f2] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100/50 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between h-full min-h-[180px] md:min-h-[220px]"
              >
                <div className="flex flex-col justify-between h-full w-full relative z-[2] items-start text-left">
                  <div>
                    <h3 className="text-[1.1rem] font-bold text-gray-900 m-0 mb-1 leading-tight">
                      Case Study Help
                    </h3>
                    <p className="hidden md:block text-[0.82rem] text-gray-600 m-0 mt-2 leading-relaxed max-w-[65%]">
                      In-depth case analysis and solutions
                    </p>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start mt-auto">
                    <span className="text-sm md:text-[0.95rem] font-bold text-gray-800">From £15</span>
                    <span className="text-xs text-gray-400 font-medium">6,200+ Orders</span>
                  </div>
                </div>
                <img 
                  src="/new-home-page-images/Case-Study-Help.webp" 
                  alt="Case Study Help"
                  className="absolute bottom-[-15px] right-[-15px] w-[65%] max-h-[85%] object-contain pointer-events-none transition-transform duration-300 group-hover:scale-105" 
                />
              </Link>

            </div>

            {/* Bottom Row: 4 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full flex-1">
              
              {/* Card 5: Report Writing */}
              <Link 
                href="/upload-your-assignment" 
                className="group relative overflow-hidden rounded-[20px] p-6 bg-gradient-to-br from-white to-[#f0f9ff] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100/50 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between h-full min-h-[180px] md:min-h-[220px]"
              >
                <div className="flex flex-col justify-between h-full w-full relative z-[2] items-start text-left">
                  <div>
                    <h3 className="text-[1.1rem] font-bold text-gray-900 m-0 mb-1 leading-tight">
                      Report Writing
                    </h3>
                    <p className="hidden md:block text-[0.82rem] text-gray-600 m-0 mt-2 leading-relaxed max-w-[60%]">
                      Detailed and structured reports
                    </p>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start mt-auto">
                    <span className="text-sm md:text-[0.95rem] font-bold text-gray-800">From £15</span>
                    <span className="text-xs text-gray-400 font-medium">7,800+ Orders</span>
                  </div>
                </div>
                <img 
                  src="/new-home-page-images/Report-Writing.webp" 
                  alt="Report Writing"
                  className="absolute bottom-[-15px] right-[-15px] w-[65%] max-h-[85%] object-contain pointer-events-none transition-transform duration-300 group-hover:scale-105" 
                />
              </Link>

              {/* Card 6: Coursework Help */}
              <Link 
                href="/coursework-writing-help" 
                className="group relative overflow-hidden rounded-[20px] p-6 bg-gradient-to-br from-white to-[#f8fafc] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100/50 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between h-full min-h-[180px] md:min-h-[220px]"
              >
                <div className="flex flex-col justify-between h-full w-full relative z-[2] items-start text-left">
                  <div>
                    <h3 className="text-[1.1rem] font-bold text-gray-900 m-0 mb-1 leading-tight">
                      Coursework Help
                    </h3>
                    <p className="hidden md:block text-[0.82rem] text-gray-600 m-0 mt-2 leading-relaxed max-w-[60%]">
                      Error-free coursework done on time
                    </p>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start mt-auto">
                    <span className="text-sm md:text-[0.95rem] font-bold text-gray-800">From £12</span>
                    <span className="text-xs text-gray-400 font-medium">9,100+ Orders</span>
                  </div>
                </div>
                <img 
                  src="/new-home-page-images/Coursework-Help.webp" 
                  alt="Coursework Help"
                  className="absolute bottom-[-15px] right-[-15px] w-[65%] max-h-[85%] object-contain pointer-events-none transition-transform duration-300 group-hover:scale-105" 
                />
              </Link>

              {/* Card 7: Proofreading */}
              <Link 
                href="/upload-your-assignment" 
                className="group relative overflow-hidden rounded-[20px] p-6 bg-gradient-to-br from-white to-[#fdf4ff] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100/50 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between h-full min-h-[180px] md:min-h-[220px]"
              >
                <div className="flex flex-col justify-between h-full w-full relative z-[2] items-start text-left">
                  <div>
                    <h3 className="text-[1.1rem] font-bold text-gray-900 m-0 mb-1 leading-tight">
                      Proofreading
                    </h3>
                    <p className="hidden md:block text-[0.82rem] text-gray-600 m-0 mt-2 leading-relaxed max-w-[60%]">
                      Perfect grammar, zero errors
                    </p>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start mt-auto">
                    <span className="text-sm md:text-[0.95rem] font-bold text-gray-800">From £8</span>
                    <span className="text-xs text-gray-400 font-medium">11,200+ Orders</span>
                  </div>
                </div>
                <img 
                  src="/new-home-page-images/Proofreading.webp" 
                  alt="Proofreading"
                  className="absolute bottom-[-15px] right-[-15px] w-[65%] max-h-[85%] object-contain pointer-events-none transition-transform duration-300 group-hover:scale-105" 
                />
              </Link>

              {/* Card 8: Editing & Formatting */}
              <Link 
                href="/upload-your-assignment" 
                className="group relative overflow-hidden rounded-[20px] p-6 bg-gradient-to-br from-white to-[#f0fdf4] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100/50 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between h-full min-h-[180px] md:min-h-[220px]"
              >
                <div className="flex flex-col justify-between h-full w-full relative z-[2] items-start text-left">
                  <div>
                    <h3 className="text-[1.1rem] font-bold text-gray-900 m-0 mb-1 leading-tight">
                      Editing & Formatting
                    </h3>
                    <p className="hidden md:block text-[0.82rem] text-gray-600 m-0 mt-2 leading-relaxed max-w-[60%]">
                      References, citations and formatting
                    </p>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start mt-auto">
                    <span className="text-sm md:text-[0.95rem] font-bold text-gray-800">From £10</span>
                    <span className="text-xs text-gray-400 font-medium">5,600+ Orders</span>
                  </div>
                </div>
                <img 
                  src="/new-home-page-images/Editing.webp" 
                  alt="Editing & Formatting"
                  className="absolute bottom-[-15px] right-[-15px] w-[65%] max-h-[85%] object-contain pointer-events-none transition-transform duration-300 group-hover:scale-105" 
                />
              </Link>

            </div>
          </div>
        </div>

        {/* Mobile View All button */}
        <Link 
          href="/services" 
          className="flex md:hidden justify-center items-center w-full p-2.5 mt-6 bg-white border border-gray-200 rounded-lg text-indigo-600 font-semibold text-[0.8rem] transition-all duration-300 hover:bg-gray-50 hover:text-indigo-800"
        >
          View All Services &rarr;
        </Link>
      </div>
    </section>
  );
}
