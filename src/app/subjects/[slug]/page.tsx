"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { PromoBanner } from "@/components/ui/PromoBanner";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { ExpertCard } from "@/components/ui/ExpertCard";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { SUBJECTS, WRITERS, TESTIMONIALS } from "@/lib/data";
import {
  Award,
  ShieldCheck,
  Clock,
  Users,
  FolderHeart
} from "lucide-react";

export default function SubjectLanding() {
  const params = useParams();
  const slug = params?.slug as string;
  const subject = SUBJECTS.find((s) => s.slug === slug) || SUBJECTS[0];

  const breadcrumbItems = [
    { label: "Subjects", href: "/samples" },
    { label: `${subject.name} Assignment Help` },
  ];

  // Filter writers who are experts in this subject
  const subjectExperts = WRITERS.filter((w) =>
    w.expertise.some((exp) => exp.toLowerCase().includes(subject.slug.toLowerCase()))
  );

  const finalExperts = subjectExperts.length > 0 ? subjectExperts : WRITERS.slice(0, 5);

  const promoFreeItems = [
    { icon: <ShieldCheck />, label: "Plagiarism Report" },
    { icon: <ShieldCheck />, label: "AI Originality Check" },
    { icon: <Award />, label: "Title Page" },
    { icon: <Award />, label: "Bibliography" },
    { icon: <Clock />, label: "Formatting" },
    { icon: <Clock />, label: "Unlimited Revisions" },
    { icon: <Users />, label: "24/7 Support" },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="bg-white border-b border-primary-50 py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <Breadcrumb items={breadcrumbItems} className="py-0" />
            
            <div className="inline-flex w-fit bg-accent-50 text-accent-700 font-heading font-extrabold text-xs px-3.5 py-1.5 rounded-pill border border-accent-100 flex items-center gap-1.5 shadow-sm mt-2">
              <span className="text-sm">⭐</span>
              Rated 4.9/5 by 25,000+ UK Students
            </div>

            <Heading level={1} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-heading leading-[1.1] md:leading-[1.05]">
              Expert {subject.name} Assignment Help{" "}
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 font-black block mt-2">
                You Can Rely On
              </span>
            </Heading>

            <Text className="text-base text-text-body leading-relaxed max-w-xl">
              Get accurate, well-researched, and plagiarism-free academic reports in {subject.name} compiled by experienced UK accounting and business professionals.
            </Text>

            {/* Metrics strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-primary-50/40 p-4 rounded-xl border border-primary-100/50">
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-primary-700">25,000+</span>
                <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider">Assignments</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-primary-700">150+</span>
                <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider">PhD Tutors</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-primary-700">4.9/5</span>
                <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider">Client Rating</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-primary-700">98%</span>
                <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider">On-Time</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <a href="#quote-form">
                <Button variant="primary" size="lg">
                  Talk To An Expert
                </Button>
              </a>
              <a href="/samples">
                <Button variant="outline" size="lg">
                  View Samples
                </Button>
              </a>
            </div>
          </div>

          {/* Hero Form Right */}
          <div className="lg:col-span-5 w-full">
            <QuoteForm variant="compact" prefilledSubject={subject.slug} title="Get Instant Quote" />
          </div>
        </div>
      </section>

      {/* 2. Why Students Choose Our Subject Assignment Help */}
      <SectionContainer className="bg-surface-lavender">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <Badge variant="soft-purple" className="w-fit mx-auto text-xs px-3 py-1 font-bold">Why Choose AIN</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              Why Choose Our {subject.name} Assignment Help?
            </Heading>
            <Text className="text-text-muted text-sm">
              We design custom academic support plans mapping precisely to UK curriculum specifications.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Qualified Accounting Experts", desc: "Writers hold accredited Ph.D degrees in public corporate accounting practices." },
              { title: "100% Original & Plagiarism Free", desc: "Every model answer is built from scratch and Turnitin verified." },
              { title: "On-Time Priority Delivery", desc: "We support urgent execution deadlines with guaranteed submission safeguards." },
              { title: "24/7 Priority Support", desc: "Communicate directly with our customer desk at any time of day." },
              { title: "UK-Based Chartered Tutors", desc: "Writers are fully accustomed to British academic referencing conventions." },
              { title: "Affordable Pricing Matrices", desc: "Get high distinction level support at highly competitive rates." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-primary-50 shadow-sm flex items-start gap-4 text-left group hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center shrink-0 group-hover:bg-primary-700 group-hover:text-white transition-colors duration-300">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-text-heading">
                    {item.title}
                  </h4>
                  <p className="text-xs text-text-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 3. Our Subject Assignment Experts */}
      <SectionContainer className="bg-white">
        <div className="flex flex-col gap-8">
          <div className="flex items-end justify-between flex-wrap gap-4 border-b border-primary-100 pb-3">
            <div className="flex flex-col gap-1 text-left">
              <Badge variant="soft-purple" className="w-fit text-xs px-2.5 py-0.5 font-bold">Top Tutors</Badge>
              <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
                Our {subject.name} Assignment Experts
              </Heading>
              <Text className="text-text-muted text-xs md:text-sm">
                Learn from the best. Our experts are here to help you achieve top grades.
              </Text>
            </div>
            <Link href="/writers" className="text-sm font-bold text-primary-700 hover:text-primary-600 transition-colors">
              View All Experts →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {finalExperts.slice(0, 4).map((writer) => (
              <ExpertCard
                key={writer.id}
                variant="subject"
                name={writer.name}
                role={writer.role}
                rating={writer.rating}
                ordersCount={writer.ordersCompleted}
                avatar={writer.avatar}
                experience={writer.experience}
                qualifications={writer.qualifications}
                onHire={() => {
                  window.location.href = `/writers/${writer.id}`;
                }}
              />
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 4. Promo Banner */}
      <SectionContainer className="bg-white py-0 md:py-0">
        <PromoBanner
          layoutVariant="gift"
          backgroundVariant="promo"
          title="GET UP TO 30% OFF ON YOUR FIRST ORDER"
          description="Access distinction level support today. Mention coupon code AIN30 during chat activation."
          couponCode="AIN30"
          badgeItems={promoFreeItems}
        />
      </SectionContainer>

      {/* 5. What Our Students Say */}
      <SectionContainer className="bg-surface-lavender">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <Badge variant="soft-purple" className="w-fit mx-auto text-xs px-3 py-1 font-bold">Client Reviews</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              What Our Students Say
            </Heading>
            <Text className="text-text-muted text-sm">
              Read real verified grades achievements reports for modules related to {subject.name}.
            </Text>
          </div>

          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </div>
      </SectionContainer>

      {/* 6. Why Choose Subject Assignment Help from Us? */}
      <SectionContainer className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            <Badge variant="soft-purple" className="w-fit text-xs px-3 py-1 font-bold">Academic Values</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading leading-tight">
              Why Choose {subject.name} Assignment Help From Us?
            </Heading>
            <Text className="text-text-body text-sm leading-relaxed">
              We focus on absolute mathematical accuracy, compliance with Harvard and OSCOLA formatting frameworks, and timely report layouts.
            </Text>
            
            {/* Visual target placeholder */}
            <div className="mt-4 p-4 rounded-2xl border border-primary-50 bg-primary-50/20 flex gap-4 items-start">
              <FolderHeart className="w-8 h-8 text-primary-500 shrink-0 mt-1 animate-pulse" />
              <div className="flex flex-col gap-1">
                <span className="font-heading font-extrabold text-sm text-text-heading">{subject.name} Concept Clarity</span>
                <span className="text-xs text-text-muted leading-relaxed">Our reports clarify methodologies and double-entry conventions, serving as long-term study assistants.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Quality Assistance", desc: "Detailed outlines, peer-reviewed sources, and fully documented citations with zero placeholders." },
              { title: "Customized Solutions", desc: "We structure the document specifically according to your custom module criteria." },
              { title: "Accuracy and Precision", desc: "Rigorous diagnostic accounting and econometric formulas verified twice." },
              { title: "100% Confidentiality", desc: "No personal information or files are ever stored on public portals." },
            ].map((b, idx) => (
              <div key={idx} className="bg-primary-50/15 border border-primary-50 p-5 rounded-xl text-left flex flex-col gap-3 group hover:border-primary-200 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary-700 shrink-0 group-hover:bg-primary-700 group-hover:text-white transition-colors duration-300">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-text-heading">{b.title}</h4>
                  <p className="text-xs text-text-body leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 7. Bottom CTA Strip */}
      <section className="bg-navy-900 py-10 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-left">
          <div className="flex flex-col gap-1.5 max-w-xl">
            <h3 className="font-heading font-extrabold text-xl md:text-2xl text-white">
              Struggling With Your {subject.name} Coursework?
            </h3>
            <p className="text-xs md:text-sm text-primary-200/80">
              Get direct tutoring support from qualified chartered specialists to unlock your target distinction grade.
            </p>
          </div>
          <a href="/pricing" className="bg-accent-600 hover:bg-accent-500 text-white font-heading font-bold px-6 py-3 rounded-lg shadow-md transition-colors shrink-0 text-sm">
            Get Free Quote Now →
          </a>
        </div>
      </section>

      <StatsStrip variant="purple" showCta={false} />
    </div>
  );
}
