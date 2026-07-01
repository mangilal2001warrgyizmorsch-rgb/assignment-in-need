"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion";
import {
  ShieldCheck,
  Award,
  Users,
  HelpCircle,
  TrendingUp,
  HeartHandshake,
  Star
} from "lucide-react";
import { TESTIMONIALS, FAQS } from "@/lib/data";

export default function PricingPage() {
  const breadcrumbItems = [{ label: "Pricing" }];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="bg-white border-b border-primary-50 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              <Badge variant="soft-purple" className="w-fit text-xs px-3 py-1 font-bold">
                💬 Get Instant Quote
              </Badge>
              
              <Heading level={1} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-heading leading-tight">
                Get The Perfect Help{" "}
                <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 font-black block mt-2">
                  For Your Assignments
                </span>
              </Heading>

              <Text className="text-sm md:text-base text-text-body leading-relaxed max-w-xl">
                Fill out the quote form with your specific academic requirements and receive a personalized price estimate from our subject specialists instantly.
              </Text>

              {/* Trust badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mt-2">
                {[
                  "100% Original Work",
                  "On-Time Delivery",
                  "PhD Expert Writers",
                  "24/7 Support Desk",
                  "Money Back Guarantee",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-text-heading">
                    <ShieldCheck className="w-4 h-4 text-success shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Graduation Cap illustration block */}
              <div className="hidden sm:flex items-center gap-4 mt-4 p-4 rounded-2xl border border-primary-100/50 bg-primary-50/20 max-w-md">
                <div className="text-3xl animate-bounce">🎓</div>
                <div className="flex flex-col text-left">
                  <span className="font-heading font-extrabold text-xs text-text-heading">Distinction Grade Target</span>
                  <span className="text-[11px] text-text-muted mt-0.5">Writers follow UK university criteria to deliver high-scoring documents.</span>
                </div>
              </div>
            </div>

            {/* Hero Quote Form Right */}
            <div className="lg:col-span-5 w-full">
              <QuoteForm variant="extended" title="Get Your Personalized Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. What's Included */}
      <SectionContainer className="bg-surface-lavender">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <Badge variant="soft-purple" className="w-fit mx-auto text-xs px-3 py-1 font-bold">What&apos;s Included</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              Everything You Get With Assignment In Need
            </Heading>
            <Text className="text-text-muted text-sm">
              We pack every project with essential validation documents and format parameters.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "100% Original Content", desc: "Plagiarism-free content that is 100% original and authentic to your topic guidelines." },
              { title: "Expert Writers", desc: "Top 2% academic writers with advanced Ph.D degrees matching your exact module area." },
              { title: "On-Time Delivery", desc: "Timely delivery before your specified deadline to ensure safe portals submissions." },
              { title: "Unlimited Revisions", desc: "Continuous revisions loops within 14 days of draft delivery at zero extra cost." },
              { title: "24/7 Customer Support", desc: "Our support desk is active around the clock to handle priority change requests." },
              { title: "Money Back Guarantee", desc: "100% refund safeguard if the delivered document fails to meet original guidelines." },
            ].map((card, idx) => (
              <div key={idx} className="bg-white border border-primary-100 p-6 rounded-xl flex flex-col gap-3 text-left hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-text-heading">{card.title}</h4>
                  <p className="text-xs text-text-body leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 3. Why Students Choose (2-Column) */}
      <SectionContainer className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info Column */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            <Badge variant="soft-purple" className="w-fit text-xs px-3 py-1 font-bold">Why Choose Us</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading leading-tight">
              Why Students Choose Assignment In Need?
            </Heading>
            <Text className="text-text-body text-sm leading-relaxed">
              We are committed to helping students achieve academic excellence by providing reliable, high-quality, and affordable assignment help.
            </Text>
            <a href="/contact" className="text-sm font-bold text-primary-700 hover:underline mt-2">
              Contact Our Desk →
            </a>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Trusted by Thousands", desc: "Thousands of students across the UK and worldwide trust us for their academic needs.", icon: <Users className="w-4.5 h-4.5" /> },
              { title: "Quality You Can Rely On", desc: "We follow strict quality control to deliver the best results for your coursework.", icon: <Award className="w-4.5 h-4.5" /> },
              { title: "Affordable Pricing", desc: "Get premium quality help at prices that fit your student budget seamlessly.", icon: <TrendingUp className="w-4.5 h-4.5" /> },
              { title: "Confidential & Secure", desc: "Your privacy and information are 100% protected with strict security codes.", icon: <HeartHandshake className="w-4.5 h-4.5" /> },
            ].map((v, idx) => (
              <div key={idx} className="bg-primary-50/15 border border-primary-50 p-5 rounded-xl text-left flex gap-4 items-start hover:border-primary-200 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary-700 shrink-0">
                  {v.icon}
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <h4 className="font-heading font-bold text-sm text-text-heading">{v.title}</h4>
                  <p className="text-xs text-text-body leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 4. Testimonials (Student Stories) */}
      <SectionContainer className="bg-surface-lavender">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <Badge variant="soft-purple" className="w-fit mx-auto text-xs px-3 py-1 font-bold">Student Success</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              See What Our Students Have To Say
            </Heading>
            <div className="flex items-center justify-center gap-1.5 mt-1.5 text-xs text-text-heading font-extrabold">
              <span>4.8/5</span>
              <div className="flex text-warning">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-text-muted font-normal">Based on 2,500+ Reviews</span>
            </div>
          </div>

          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </div>
      </SectionContainer>

      {/* 5. FAQs */}
      <SectionContainer className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            <Badge variant="soft-purple" className="w-fit text-xs px-3 py-1 font-bold">Help Desk</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading leading-tight">
              Find Answers To Common Questions
            </Heading>
            <Text className="text-text-muted text-sm">
              If you have any doubts regarding our referencing guides, pricing schedules, or secure payment portals, explore options here.
            </Text>
            <Link href="/contact">
              <Button variant="outline" size="sm" className="mt-2 text-xs">
                Contact Us →
              </Button>
            </Link>
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

      {/* Bottom CTA strip */}
      <section className="bg-navy-900 py-10 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <h3 className="font-heading font-extrabold text-xl md:text-2xl text-white">
            Ready To Get Started?
          </h3>
          <a href="#quote-form" className="bg-accent-600 hover:bg-accent-500 text-white font-heading font-bold px-6 py-3 rounded-lg shadow-md transition-colors shrink-0 text-sm">
            Get Free Quote Now →
          </a>
        </div>
      </section>

      <StatsStrip variant="purple" showCta={false} />
    </div>
  );
}
