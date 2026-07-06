import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";

export default function BlogDetailLoading() {
  return (
    <div className="bg-white">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8">
          
          {/* Main Content Area */}
          <main className="lg:col-span-8 flex flex-col gap-6 animate-pulse">
            {/* Title Skeleton */}
            <div className="w-4/5 h-10 bg-slate-200 rounded-md" />
            
            {/* Meta Info Skeleton */}
            <div className="w-1/3 h-5 bg-slate-200 rounded" />
            
            {/* Hero Image Box Skeleton */}
            <div className="w-full h-64 sm:h-[380px] bg-slate-200 rounded-2xl" />
            
            {/* Article Content Line Skeletons */}
            <div className="flex flex-col gap-4 mt-4">
              <div className="w-full h-4 bg-slate-200 rounded" />
              <div className="w-full h-4 bg-slate-200 rounded" />
              <div className="w-11/12 h-4 bg-slate-200 rounded" />
              <div className="w-5/6 h-4 bg-slate-200 rounded" />
              
              <div className="w-full h-4 bg-slate-200 rounded mt-4" />
              <div className="w-full h-4 bg-slate-200 rounded" />
              <div className="w-3/4 h-4 bg-slate-200 rounded" />
              
              <div className="w-full h-4 bg-slate-200 rounded mt-4" />
              <div className="w-full h-4 bg-slate-200 rounded" />
              <div className="w-5/6 h-4 bg-slate-200 rounded" />
              <div className="w-11/12 h-4 bg-slate-200 rounded" />
            </div>
          </main>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 flex flex-col gap-6 animate-pulse">
            {/* WhatsApp Promo Card Skeleton */}
            <div className="w-full h-[280px] bg-slate-200 rounded-2xl" />
            
            {/* Subjects List Block Skeleton */}
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100 flex flex-col gap-4">
              <div className="w-1/2 h-6 bg-slate-200 rounded" />
              <div className="flex flex-col gap-2.5">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-full h-11 bg-slate-200 rounded-xl" />
                ))}
              </div>
            </div>
          </aside>

        </div>
      </SectionContainer>
    </div>
  );
}
