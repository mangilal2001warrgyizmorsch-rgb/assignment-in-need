"use client";

import React from "react";
import Link from "next/link";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { UniversityLogos } from "@/components/ui/UniversityLogos";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SubjectCard } from "@/components/ui/SubjectCard";
import { ResultCard } from "@/components/ui/ResultCard";
import { ToolCard } from "@/components/ui/ToolCard";
import { SampleCard } from "@/components/ui/SampleCard";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { ExpertCarousel } from "@/components/ui/ExpertCarousel";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { PromoBanner } from "@/components/ui/PromoBanner";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion";
import {
  UploadCloud,
  UserCheck,
  Cpu,
  FileCheck2,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  FileText,
  HelpCircle
} from "lucide-react";
import { WRITERS, SERVICES, SUBJECTS, SAMPLES, TESTIMONIALS, FAQS } from "@/lib/data";

export default function Home() {
  const steps = [
    {
      number: 1,
      icon: <UploadCloud className="w-6 h-6" />,
      title: "Submit Requirements",
      description: "Share your assignment details and specifications with us.",
    },
    {
      number: 2,
      icon: <UserCheck className="w-6 h-6" />,
      title: "Get Matched",
      description: "We assign the absolute best expert writer in your field.",
    },
    {
      number: 3,
      icon: <Cpu className="w-6 h-6" />,
      title: "Work In Progress",
      description: "Expert researches, designs, and drafts your document.",
    },
    {
      number: 4,
      icon: <FileCheck2 className="w-6 h-6" />,
      title: "Review & Feedback",
      description: "Receive first draft, request adjustments if required.",
    },
    {
      number: 5,
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Final Delivery",
      description: "Get the polished assignment delivered to your inbox.",
    },
  ];

  // Map free promo items
  const freeBadges = [
    { icon: <ShieldCheck />, label: "Plagiarism Report" },
    { icon: <Sparkles />, label: "Rewriting & Paraphrasing" },
    { icon: <FileText />, label: "Title Page" },
    { icon: <FileText />, label: "Bibliography" },
    { icon: <Sparkles />, label: "Formatting" },
    { icon: <CheckCircle2 />, label: "Unlimited Revisions" },
    { icon: <CheckCircle2 />, label: "24/7 Priority Support" },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white py-12 md:py-20 lg:py-24 border-b border-primary-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex w-fit bg-accent-50 text-accent-700 font-heading font-extrabold text-xs px-3.5 py-1.5 rounded-pill border border-accent-100 flex items-center gap-1.5 shadow-sm">
              <span className="text-sm">⭐</span>
              Rated 4.9/5 by 25,000+ UK Students
            </div>
            
            <Heading level={1} className="text-4xl md:text-5xl lg:text-6xl text-text-heading font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]">
              Get Expert Academic Support{" "}
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 font-black">
                To Score Higher Grades
              </span>
            </Heading>
            
            <Text className="text-base md:text-lg text-text-body leading-relaxed max-w-xl">
              Connect with top-rated UK academic writers. We deliver custom-formatted, 100% original, and plagiarism-free assignments matching your university criteria.
            </Text>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2 bg-primary-50/40 p-4 rounded-2xl border border-primary-100/50">
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-primary-700">25,000+</span>
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-wide">Delivered</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-primary-700">150+</span>
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-wide">PhD Experts</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-primary-700">4.9/5</span>
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-wide">Rating</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-primary-700">98%</span>
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-wide">On-Time</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <a href="#quote-form">
                <Button variant="primary" size="lg" className="shadow-lg">
                  Get Free Quote Now
                </Button>
              </a>
              <a href="#experts">
                <Button variant="outline" size="lg">
                  View Our Experts
                </Button>
              </a>
            </div>
          </div>

          {/* Hero Form Right */}
          <div className="lg:col-span-5 w-full">
            <QuoteForm variant="compact" title="Get Instant Quote" />
          </div>
        </div>
      </section>

      {/* 2. University Logos */}
      <UniversityLogos />

      {/* 3. Our Most Popular Services */}
      <SectionContainer className="bg-surface-lavender">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <Badge variant="soft-purple" className="w-fit mx-auto text-xs px-3 py-1 font-bold">Top Services</Badge>
            <Heading level={2} className="text-3xl font-extrabold text-text-heading">
              Our Most Popular Services
            </Heading>
            <Text className="text-text-muted text-sm md:text-base">
              Explore professional writing solutions curated for undergraduate, graduate, and doctoral course parameters.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 8).map((serv) => (
              <ServiceCard
                key={serv.slug}
                title={serv.title}
                description={serv.description}
                price={serv.price}
                orderCount={serv.orderCount}
                image={serv.image}
                slug={serv.slug}
              />
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 4. Explore Subjects */}
      <SectionContainer className="bg-white">
        <div className="flex flex-col gap-8">
          <div className="flex items-end justify-between flex-wrap gap-4 border-b border-primary-50 pb-4">
            <div className="flex flex-col gap-1 text-left">
              <Badge variant="soft-purple" className="w-fit text-xs px-2.5 py-0.5 font-bold">Academic Fields</Badge>
              <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
                Explore Subjects
              </Heading>
              <Text className="text-text-muted text-xs md:text-sm">
                Expert support available in 150+ academic fields and research modules.
              </Text>
            </div>
            <a href="/samples" className="text-sm font-bold text-primary-700 hover:text-primary-600 transition-colors">
              View All Subjects →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUBJECTS.map((sub) => (
              <SubjectCard
                key={sub.slug}
                name={sub.name}
                iconName={sub.iconName}
                orderCount={sub.orderCount}
                letterBadge={sub.letterBadge}
                letterColorClass={sub.letterColorClass}
                slug={sub.slug}
              />
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 5. Why Choose AIN & Experts Carousel */}
      <SectionContainer className="bg-surface-lavender" id="experts">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Why Choose */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <Badge variant="soft-purple" className="w-fit text-xs px-3 py-1 font-bold">Why Assignment In Need</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading leading-tight">
              Why Students Trust Us With Their Grades
            </Heading>
            <Text className="text-text-muted text-sm">
              We focus on absolute quality, integrity, and strict adherence to marking instructions.
            </Text>

            <ul className="flex flex-col gap-3.5 mt-2">
              {[
                "UK-Based Native Subject Scholars",
                "100% Original Content (Zero AI, Turnitin Verified)",
                "Precise Citations (APA, Harvard, MLA, OSCOLA)",
                "Continuous Revisions & Draft Feedback Loops",
                "On-Time Priority Delivery Guaranteed",
                "100% Secure & Under strict confidentiality guidelines",
              ].map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm font-medium text-text-body">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Trustpilot Placeholder */}
            <div className="mt-4 p-4 rounded-xl border border-success/20 bg-success/5 flex items-center gap-3">
              <span className="text-2xl">🟢</span>
              <div>
                <p className="text-sm font-extrabold text-text-heading">Trustpilot Verified</p>
                <p className="text-xs text-text-muted font-semibold">Rated 4.9/5 stars based on 25,000+ UK reviews</p>
              </div>
            </div>
          </div>

          {/* Right Column: Experts */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="flex items-center justify-between border-b border-primary-100 pb-3">
              <div>
                <Heading level={3} className="text-lg md:text-xl font-bold text-text-heading">
                  Meet Our Academic Experts
                </Heading>
                <p className="text-xs text-text-muted mt-0.5">PhD & Master&apos;s qualified UK academic writing experts.</p>
              </div>
              <Link href="/writers" className="text-xs font-bold text-primary-700 hover:text-primary-600 transition-colors">
                View All Experts →
              </Link>
            </div>

            <ExpertCarousel experts={WRITERS} />
          </div>
        </div>
      </SectionContainer>

      {/* 6. How It Works */}
      <SectionContainer className="bg-white">
        <ProcessSteps
          steps={steps}
          title="How It Works — Simple & Transparent"
          subtitle="Follow our straightforward project timeline steps from submission to top grades."
        />
      </SectionContainer>

      {/* 7. Real Results. Real Success. */}
      <SectionContainer className="bg-surface-lavender">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <Badge variant="soft-purple" className="w-fit mx-auto text-xs px-3 py-1 font-bold">Grade Improvements</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              Real Results. Real Success.
            </Heading>
            <Text className="text-text-muted text-sm">
              See the direct before-and-after academic grade enhancements achieved by our student clients.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResultCard
              beforeScore={68}
              afterScore={82}
              title="FTSE 100 Strategic Corporate Governance Report"
              studentName="James T."
              institution="University of Manchester"
            />
            <ResultCard
              beforeScore={64}
              afterScore={78}
              title="PICOT Framework Evaluation transitional nursing protocols"
              studentName="Olivia D."
              institution="King's College London"
            />
            <ResultCard
              beforeScore={59}
              afterScore={74}
              title="Constitutional Reform Statutory Law Essay"
              studentName="William K."
              institution="University of Birmingham"
            />
          </div>
          
          <a href="/about" className="text-sm font-bold text-primary-700 hover:text-primary-600 transition-colors text-center mt-2">
            View More Success Stories →
          </a>
        </div>
      </SectionContainer>

      {/* 8. Academic Tools & Resources */}
      <SectionContainer className="bg-white">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <Badge variant="soft-purple" className="w-fit mx-auto text-xs px-3 py-1 font-bold">Free Tools</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              Academic Tools & Resources
            </Heading>
            <Text className="text-text-muted text-sm">
              Free-to-use digital assistants designed to support citation layouts, document planning, and vocabulary checks.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ToolCard
              iconName="Calculator"
              title="Grade Calculator"
              description="Calculate weights of current modules to plan targets for distinction levels."
            />
            <ToolCard
              iconName="FileText"
              title="Reference Generator"
              description="Instantly format entries for Harvard, APA, MLA, or OSCOLA legal citations."
            />
            <ToolCard
              iconName="ShieldCheck"
              title="Plagiarism Checker"
              description="Ensure unique language patterns prior to submitting to university portals."
            />
            <ToolCard
              iconName="Binary"
              title="Word Counter"
              description="Convert page layouts to word count matrices and target guidelines."
            />
          </div>
          
          <a href="/samples" className="text-sm font-bold text-primary-700 hover:text-primary-600 transition-colors text-center mt-2">
            Explore All Tools →
          </a>
        </div>
      </SectionContainer>

      {/* 9. Promo Banner */}
      <SectionContainer className="bg-white py-0 md:py-0">
        <PromoBanner
          layoutVariant="gift"
          backgroundVariant="promo"
          title="GET UP TO 30% OFF ON YOUR FIRST ORDER"
          description="Use code AIN30 during checkout or mention it to your expert writer to activate your discount package today."
          couponCode="AIN30"
          badgeItems={freeBadges}
        />
      </SectionContainer>

      {/* 10. Samples Carousel */}
      <SectionContainer className="bg-surface-lavender">
        <div className="flex flex-col gap-8">
          <div className="flex items-end justify-between flex-wrap gap-4 border-b border-primary-100 pb-3">
            <div className="flex flex-col gap-1 text-left">
              <Badge variant="soft-purple" className="w-fit text-xs px-2.5 py-0.5 font-bold">Research Papers</Badge>
              <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
                Assignment Samples
              </Heading>
              <Text className="text-text-muted text-xs md:text-sm">
                Inspect past high-scoring model answers compiled by our Ph.D specialists.
              </Text>
            </div>
            <a href="/samples" className="text-sm font-bold text-primary-700 hover:text-primary-600 transition-colors">
              View All Samples →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLES.slice(0, 3).map((sample, idx) => (
              <SampleCard
                key={idx}
                title={sample.title}
                subject={sample.subject}
                image={sample.image}
                href={sample.href}
              />
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 11. What Students Say */}
      <SectionContainer className="bg-white">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <Badge variant="soft-purple" className="w-fit mx-auto text-xs px-3 py-1 font-bold">Student Stories</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              What Students Say About Us
            </Heading>
            <Text className="text-text-muted text-sm">
              Read real verified logs from international scholars whom we have helped hit target grades.
            </Text>
          </div>

          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </div>
      </SectionContainer>

      {/* 12. FAQ Section */}
      <SectionContainer className="bg-surface-lavender">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            <Badge variant="soft-purple" className="w-fit text-xs px-3 py-1 font-bold">Help Desk</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading leading-tight">
              Frequently Asked Questions
            </Heading>
            <Text className="text-text-muted text-sm">
              If you have any doubts regarding our referencing guides, revisions, or secure payment portals, explore options here.
            </Text>
            <a href="/contact" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-700 hover:underline mt-2">
              Still have questions? Contact Us
            </a>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full flex flex-col gap-3">
              {FAQS.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-xl border border-primary-100/50 overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-5 py-4 hover:bg-primary-50/20 font-heading font-bold text-sm sm:text-base text-text-heading text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary-500 shrink-0" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 pt-1 text-sm leading-relaxed text-text-body">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </SectionContainer>

      {/* 13. Bottom Stats Strip */}
      <StatsStrip />
    </div>
  );
}
