"use client";

import React, { useRef } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { SubjectCard } from "@/components/ui/SubjectCard";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { SUBJECTS, TESTIMONIALS } from "@/lib/data";

const CATEGORIES = [
  { name: "Accounting", count: "1,250", badge: "A", color: "bg-purple-100 text-purple-700" },
  { name: "Business Management", count: "980", badge: "B", color: "bg-indigo-100 text-indigo-700" },
  { name: "Law", count: "750", badge: "L", color: "bg-blue-100 text-blue-700" },
  { name: "Nursing", count: "620", badge: "N", color: "bg-teal-100 text-teal-700" },
  { name: "Marketing", count: "540", badge: "M", color: "bg-pink-100 text-pink-700" },
  { name: "Psychology", count: "420", badge: "P", color: "bg-rose-100 text-rose-700" },
  { name: "Engineering", count: "380", badge: "E", color: "bg-amber-100 text-amber-700" },
  { name: "Computer Science", count: "340", badge: "C", color: "bg-green-100 text-green-700" },
];

export default function SamplesPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const breadcrumbItems = [{ label: "Samples" }];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="bg-white border-b border-primary-50 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-8 flex flex-col gap-5 text-left">
              <Badge variant="soft-purple" className="w-fit text-xs px-3 py-1 font-bold">
                ✅ 100% Free Samples
              </Badge>
              
              <Heading level={1} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-heading leading-tight">
                Free Assignment{" "}
                <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 font-black block mt-2">
                  Samples & Papers
                </span>
              </Heading>

              <Text className="text-sm md:text-base text-text-body leading-relaxed max-w-2xl">
                Explore our catalog of high-scoring, distinction level academic sample essays, report outlines, and quantitative case studies absolutely free.
              </Text>

              {/* 6 Feature bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
                {[
                  "100% Free Access to Database",
                  "Subject-Wise Structured Outlines",
                  "Distinction-Level Quality Papers",
                  "10,000+ Free Samples Catalog",
                  "UK Referencing Conventions (OSCOLA, Harvard)",
                  "Updated Weekly with New Materials",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-text-heading">
                    <ShieldCheck className="w-4 h-4 text-success shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <a href="#browse-samples">
                  <Button variant="primary" size="md">
                    Browse Samples
                  </Button>
                </a>
                <a href="/pricing">
                  <Button variant="outline" size="md">
                    Get Expert Help
                  </Button>
                </a>
              </div>
            </div>

            {/* Right side illustration representation */}
            <div className="hidden lg:col-span-4 lg:flex items-center justify-end">
              <div className="w-44 h-44 rounded-3xl bg-primary-50/40 border border-primary-100 flex items-center justify-center relative animate-pulse">
                <span className="text-6xl">📚</span>
                <div className="absolute -bottom-2 -left-2 bg-primary-700 text-white font-heading font-bold text-[10px] px-2.5 py-1 rounded-lg shadow">
                  Free Library Access
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Popular Categories Scroll */}
      <section className="bg-surface-lavender py-8 border-b border-primary-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-4 text-left">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-extrabold text-sm sm:text-base text-text-heading uppercase tracking-wider">
              Popular Categories
            </h3>
            
            {/* Scroll Controls */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => scroll("left")}
                className="w-7 h-7 rounded-full bg-white border border-primary-100 flex items-center justify-center text-text-muted hover:text-primary-700 transition-colors"
                aria-label="Scroll categories left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-7 h-7 rounded-full bg-white border border-primary-100 flex items-center justify-center text-text-muted hover:text-primary-700 transition-colors"
                aria-label="Scroll categories right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth w-full py-2"
            style={{ scrollbarWidth: "none" }}
          >
            {CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white border border-primary-100/50 p-3 rounded-xl flex items-center gap-3 shrink-0 shadow-sm min-w-[200px]"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-extrabold text-xs ${cat.color}`}>
                  {cat.badge}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-text-heading truncate">{cat.name}</span>
                  <span className="text-[10px] text-text-muted font-medium mt-0.5">{cat.count} Samples</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Browse Samples By Subject (4x2 SubjectCard grid) */}
      <SectionContainer className="bg-white" id="browse-samples">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <Badge variant="soft-purple" className="w-fit mx-auto text-xs px-3 py-1 font-bold">Samples Repository</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              Browse Samples By Subject
            </Heading>
            <Text className="text-text-muted text-sm">
              Filter models by discipline to inspect citation structures, literature reviews, and calculations.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUBJECTS.map((sub) => (
              <SubjectCard
                key={sub.slug}
                name={sub.name}
                iconName={sub.iconName}
                sampleCount={sub.sampleCount}
                letterBadge={sub.letterBadge}
                letterColorClass={sub.letterColorClass}
                slug={sub.slug}
              />
            ))}
          </div>
          
          <a href="#browse-samples" className="text-sm font-bold text-primary-700 hover:text-primary-600 transition-colors text-center mt-2">
            View All Subjects →
          </a>
        </div>
      </SectionContainer>

      {/* 4. Why Students Use Our Samples */}
      <SectionContainer className="bg-surface-lavender">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <Badge variant="soft-purple" className="w-fit mx-auto text-xs px-3 py-1 font-bold">Benefits Pack</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              Why Students Use Our Samples
            </Heading>
            <Text className="text-text-muted text-sm">
              Our model answers serve as excellent study tools to improve your own assignment writing skills.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Understand Structure", desc: "Learn the proper structure and flow of essays, reports, and dissertations." },
              { title: "Learn Referencing", desc: "See exactly how referencing lists are constructed using standard UK styles." },
              { title: "Improve Writing Style", desc: "Enhance your academic tone, formatting headings, and argument structures." },
              { title: "Save Research Time", desc: "Get a headstart on your literature review by browsing peer-reviewed databases." },
              { title: "Better Understanding", desc: "Improve your comprehension of complex subject topics and frameworks." },
              { title: "100% Free Access", desc: "Download and read samples instantly without registrations or subscriptions." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-primary-100 p-6 rounded-xl flex flex-col gap-3 text-left hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-text-heading">{item.title}</h4>
                  <p className="text-xs text-text-body leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 5. Student Success Stories (testimonials) */}
      <SectionContainer className="bg-white">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <Badge variant="soft-purple" className="w-fit mx-auto text-xs px-3 py-1 font-bold">Student Success</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              Student Success Stories
            </Heading>
            <Text className="text-text-muted text-sm">
              Read stories from students who used our guides to secure top marks.
            </Text>
          </div>

          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </div>
      </SectionContainer>

      {/* StatsStrip at bottom */}
      <StatsStrip variant="purple" showCta={true} />
    </div>
  );
}
