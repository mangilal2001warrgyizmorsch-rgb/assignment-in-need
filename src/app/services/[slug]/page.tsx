"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { ExpertCard } from "@/components/ui/ExpertCard";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { SERVICES, WRITERS, TESTIMONIALS } from "@/lib/data";
import {
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
  Users,
  UploadCloud,
  FileCheck2
} from "lucide-react";

export default function ServiceLanding() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = SERVICES.find((s) => s.slug === slug) || SERVICES[0];

  const breadcrumbItems = [
    { label: "Services", href: "/" },
    { label: service.title },
  ];

  const [seoExpanded, setSeoExpanded] = useState(false);

  const steps = [
    {
      number: 1,
      icon: <UploadCloud className="w-6 h-6" />,
      title: "Submit Requirements",
      description: "Submit your assignment draft or guidelines.",
    },
    {
      number: 2,
      icon: <Users className="w-6 h-6" />,
      title: "Choose Writer",
      description: "Select from our qualified subject specialists.",
    },
    {
      number: 3,
      icon: <Clock className="w-6 h-6" />,
      title: "Track Progress",
      description: "Monitor milestones and chat directly.",
    },
    {
      number: 4,
      icon: <FileCheck2 className="w-6 h-6" />,
      title: "Receive Draft",
      description: "Get the first completed draft for feedback.",
    },
    {
      number: 5,
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Final Delivery",
      description: "Download polished final document before deadline.",
    },
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
              Premium Academic Assistance
            </div>

            <Heading level={1} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-heading leading-[1.1] md:leading-[1.05]">
              Professional {service.title}{" "}
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 font-black block mt-2">
                According to UK Standards
              </span>
            </Heading>

            <Text className="text-base text-text-body leading-relaxed max-w-xl">
              Get original model essays, complete dissertation proposals, or structural coursework help matching British higher education frameworks.
            </Text>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-primary-50/40 p-4 rounded-xl border border-primary-100/50">
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-primary-700">{service.orderCount}</span>
                <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider">Orders Filled</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-primary-700">150+</span>
                <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider">Academic Writers</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-primary-700">4.9/5</span>
                <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider">Client Reviews</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-primary-700">98%</span>
                <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider">On-Time Rate</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <a href="#quote-form">
                <Button variant="primary" size="lg">
                  Get Price Now
                </Button>
              </a>
              <a href="/samples">
                <Button variant="cta" size="lg">
                  View Samples
                </Button>
              </a>
            </div>
          </div>

          {/* Hero Form Right */}
          <div className="lg:col-span-5 w-full">
            <QuoteForm variant="compact" prefilledSubject={service.slug} title="Get Instant Quote" />
          </div>
        </div>
      </section>

      {/* 2. Meet Your Expert Writer */}
      <SectionContainer className="bg-surface-lavender">
        <div className="flex flex-col gap-8">
          <div className="flex items-end justify-between flex-wrap gap-4 border-b border-primary-100 pb-3">
            <div className="flex flex-col gap-1 text-left">
              <Badge variant="soft-purple" className="w-fit text-xs px-2.5 py-0.5 font-bold">Top Writers</Badge>
              <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
                Meet Your Expert Writer
              </Heading>
              <Text className="text-text-muted text-xs md:text-sm">
                Connect directly with writers holding terminal degrees in your specific discipline.
              </Text>
            </div>
            <Link href="/writers" className="text-sm font-bold text-primary-700 hover:text-primary-600 transition-colors">
              View All Writers →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WRITERS.slice(0, 4).map((writer) => (
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

      {/* 3. Why Choose Our Service */}
      <SectionContainer className="bg-white">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <Badge variant="soft-purple" className="w-fit mx-auto text-xs px-3 py-1 font-bold">Service Guarantees</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              Why Students Choose Our {service.shortTitle} Service?
            </Heading>
            <Text className="text-text-muted text-sm">
              We design custom academic support frameworks with rigorous quality control measures.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "100% Original Work", desc: "No copy-paste templates. We conduct deep primary and secondary source studies for each document." },
              { title: "AI-Free Writing Guarantee", desc: "Written by real human subject scholars. No generic generative content allowed." },
              { title: "UK Academic Standards", desc: "Formulated specifically according to FHEQ criteria across undergraduate and masters levels." },
              { title: "Unlimited Revisions", desc: "Request adjustments within 14 days of draft delivery at no extra cost." },
              { title: "On-Time Priority Delivery", desc: "Safe deadlines structures to ensure you never miss a university submission portal." },
              { title: "100% Confidential Service", desc: "Strict data privacy codes. Your instructions and file logs are fully secured." },
            ].map((item, idx) => (
              <div key={idx} className="bg-primary-50/10 border border-primary-100/40 p-5 rounded-xl text-left flex flex-col gap-3 group hover:border-primary-200 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary-700 shrink-0 group-hover:bg-primary-700 group-hover:text-white transition-colors duration-300">
                  <ShieldCheck className="w-4.5 h-4.5" />
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

      {/* 4. FREE With Every Order Banner */}
      <SectionContainer className="bg-white py-0 md:py-0">
        <div className="w-full rounded-card p-6 md:p-10 text-white bg-gradient-to-br from-primary-800 to-indigo-900 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="bg-accent-600 text-white font-heading font-extrabold text-[10px] px-3 py-1 rounded-pill w-fit uppercase">
              Free Add-ons Pack
            </span>
            <Heading level={2} className="text-white font-extrabold text-2xl md:text-3xl leading-tight">
              FREE With Every Order
            </Heading>
            <p className="text-primary-100 text-sm">
              Get an entire bundle of academic validation reports and formatting elements valued at £92 included absolutely free with your matched expert order.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 w-full lg:w-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2 flex-1">
              {[
                "Turnitin Report",
                "AI Verification Report",
                "Bibliography & References",
                "Title Page Design",
                "Proper Formatting",
                "Unlimited Revisions",
                "24/7 Priority Support",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/5 text-[10px] font-semibold text-white">
                  <Sparkles className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>

            {/* Gift Box graphic */}
            <div className="w-24 h-24 rounded-2xl bg-white/15 border border-white/10 backdrop-blur-sm flex items-center justify-center text-4xl shrink-0 relative animate-pulse shadow-inner">
              🎁
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 5. What Our Students Say (Carousel) */}
      <SectionContainer className="bg-surface-lavender">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <Badge variant="soft-purple" className="w-fit mx-auto text-xs px-3 py-1 font-bold">Testimonial Feed</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              What Our Students Say
            </Heading>
            <Text className="text-text-muted text-sm">
              Read real verified grades achievements reports for modules related to {service.shortTitle}.
            </Text>
          </div>

          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </div>
      </SectionContainer>

      {/* 6. Process Flow Steps */}
      <SectionContainer className="bg-white">
        <ProcessSteps
          steps={steps}
          title="Our Simple 5-Step Process"
          subtitle="Our streamlined writing process is designed to deliver customized solutions on time, every time."
        />
      </SectionContainer>

      {/* 7. Expert SEO Content */}
      <SectionContainer className="bg-surface-lavender">
        <div className="max-w-4xl mx-auto flex flex-col gap-4 text-left">
          <Heading level={3} className="text-xl md:text-2xl font-bold text-text-heading">
            Guaranteed Academic Support Under Strict Quality Frameworks
          </Heading>
          
          <div className={cn("flex flex-col gap-3 text-sm text-text-body leading-relaxed transition-all duration-300 overflow-hidden", !seoExpanded && "max-h-[140px] relative")}>
            <p>
              When ordering our professional academic services, you connect with native British tutors holding accredited graduate degrees from leading institutions. We parse complex assignment criteria, gather scholarly evidence from peer-reviewed databases, and design standard analytical structures.
            </p>
            <p>
              Whether it is a complex qualitative business case study, a quantitative engineering lab report, or a comprehensive option pricing model for finance coursework, we provide complete, step-by-step documentation. All works undergo secondary checks by our review editors to align grammar and verify citation lists.
            </p>
            <p>
              We guarantee 100% human-written content. Every file is analyzed with advanced checking tools to ensure zero trace of AI-generated content or recycled phrasing, keeping your academic record completely secure.
            </p>
            {!seoExpanded && (
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-surface-lavender to-transparent pointer-events-none" />
            )}
          </div>

          <button
            onClick={() => setSeoExpanded(!seoExpanded)}
            className="text-xs font-bold text-primary-700 hover:text-primary-600 transition-colors flex items-center gap-1 mt-1 underline"
          >
            {seoExpanded ? "Show Less ▲" : "Read More ▼"}
          </button>
        </div>
      </SectionContainer>

      {/* 8. Bottom Stats Strip */}
      <StatsStrip />
    </div>
  );
}
