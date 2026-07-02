"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ExpertCard } from "@/components/ui/ExpertCard";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import {
  UploadCloud,
  UserCheck,
  Cpu,
  FileCheck2,
  CheckCircle2,
  ShieldCheck,
  BookOpen,
  Brain,
  Award,
  Users
} from "lucide-react";
import { WRITERS } from "@/lib/data";

export default function AboutPage() {
  const breadcrumbItems = [{ label: "About Us" }];

  const steps = [
    {
      number: 1,
      icon: <UploadCloud className="w-6 h-6" />,
      title: "Submit Requirements",
      description: "Share your assignment details with us.",
    },
    {
      number: 2,
      icon: <UserCheck className="w-6 h-6" />,
      title: "Choose Expert",
      description: "We match you with the best expert for your topic.",
    },
    {
      number: 3,
      icon: <Cpu className="w-6 h-6" />,
      title: "Track Progress",
      description: "Track progress and stay updated at every step.",
    },
    {
      number: 4,
      icon: <FileCheck2 className="w-6 h-6" />,
      title: "Receive Assignment",
      description: "Get your assignment on time, every time.",
    },
    {
      number: 5,
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Achieve Better Grades",
      description: "Submit with confidence and achieve success.",
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="bg-white border-b border-primary-50 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6">
            <div className="lg:col-span-8 flex flex-col gap-5 text-left">
              <Badge variant="soft-purple" className="w-fit text-xs px-3 py-1 font-bold">
                ABOUT ASSIGNMENT IN NEED
              </Badge>
              
              <Heading level={1} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-heading leading-tight">
                Empowering Students Through Expert{" "}
                <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 font-black block mt-2">
                  Academic Support & Guidance
                </span>
              </Heading>

              <Text className="text-sm md:text-base text-text-body leading-relaxed max-w-2xl">
                We are a dedicated UK academic support platform helping international students achieve top marks through customized model answers, peer-reviewed study research, and citation formatting guidance.
              </Text>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 max-w-md mt-2">
                <div className="flex flex-col bg-primary-50/40 p-3 rounded-xl border border-primary-100/50">
                  <span className="font-heading font-extrabold text-lg text-primary-700">25,000+</span>
                  <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider">Students Helped</span>
                </div>
                <div className="flex flex-col bg-primary-50/40 p-3 rounded-xl border border-primary-100/50">
                  <span className="font-heading font-extrabold text-lg text-primary-700">150+</span>
                  <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider">Scholarly Tutors</span>
                </div>
                <div className="flex flex-col bg-primary-50/40 p-3 rounded-xl border border-primary-100/50">
                  <span className="font-heading font-extrabold text-lg text-primary-700">98%</span>
                  <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider">Success Rate</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/writers">
                  <Button variant="primary" size="md">
                    Meet Our Experts
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="cta" size="md">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side Laptop Illustration */}
            <div className="hidden lg:col-span-4 lg:flex items-center justify-end">
              <div className="w-48 h-48 rounded-3xl bg-primary-50/40 border border-primary-100 flex items-center justify-center relative animate-pulse">
                <span className="text-6xl">💻</span>
                <div className="absolute -top-2 -right-2 bg-success text-white font-heading font-bold text-[10px] px-2.5 py-1 rounded-lg shadow">
                  Verified UK Platform
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <SectionContainer className="bg-surface-lavender">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo on Left */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <div className="w-full aspect-[4/3] rounded-2xl bg-primary-100/50 border border-primary-100 flex items-center justify-center text-5xl">
              👥
            </div>
          </div>

          {/* Text on Right */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-left">
            <Badge variant="soft-purple" className="w-fit text-xs px-3 py-1 font-bold">Who We Are</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              About Assignment In Need
            </Heading>
            <Text className="text-text-body text-sm leading-relaxed">
              Assignment In Need was founded with a simple goal – to provide students with accessible, reliable, and high-quality academic support. We understand the challenges students face, which is why we&apos;ve built a platform that connects you with the best academic experts who deliver top-notch assistance tailored to your needs.
            </Text>
            
            <ul className="flex flex-col gap-3 mt-2">
              <li className="flex items-center gap-2.5 text-xs font-semibold text-text-heading">
                <CheckCircle2 className="w-4.5 h-4.5 text-success shrink-0" />
                <span>Trusted by students across the UK and worldwide</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs font-semibold text-text-heading">
                <CheckCircle2 className="w-4.5 h-4.5 text-success shrink-0" />
                <span>A team of highly qualified academic experts</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs font-semibold text-text-heading">
                <CheckCircle2 className="w-4.5 h-4.5 text-success shrink-0" />
                <span>Commitment to quality, originality, and confidentiality</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* 3. Numbers Speak Inline Stats strip */}
      <SectionContainer className="bg-white py-0 md:py-0">
        <div className="bg-gradient-to-br from-primary-800 to-indigo-900 rounded-card p-8 text-white text-center shadow-lg relative overflow-hidden flex flex-col gap-4">
          <Heading level={3} className="text-lg text-white">Numbers Speak of Our Success Story</Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-2">
            {[
              { val: "182,532+", lbl: "Orders Delivered" },
              { val: "30,000+", lbl: "Happy Clients" },
              { val: "4.8/5", lbl: "Client Rating" },
              { val: "4,500+", lbl: "PHD Experts" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="font-heading font-black text-2xl text-accent-400">{stat.val}</span>
                <span className="text-[10px] text-primary-200/80 font-bold uppercase tracking-wider">{stat.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 4. How It Works Timeline */}
      <SectionContainer className="bg-white">
        <ProcessSteps
          steps={steps}
          title="How It Works"
          subtitle="Our structured delivery timeline ensures your document is prepared, reviewed, and formatted accurately."
        />
      </SectionContainer>

      {/* 5. Our Mission */}
      <SectionContainer className="bg-surface-lavender">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Left */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-left">
            <Badge variant="soft-purple" className="w-fit text-xs px-3 py-1 font-bold">Our Mission</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading leading-tight">
              We&apos;re On A Mission To Make A Difference
            </Heading>
            <Text className="text-text-body text-sm leading-relaxed">
              Our mission is to empower students by providing expert academic support that enhances learning, builds confidence, and helps them achieve their full potential. We believe every student deserves the right guidance to succeed.
            </Text>
          </div>

          {/* Right target illustration */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <div className="w-40 h-40 rounded-3xl bg-white border border-primary-100 flex items-center justify-center text-6xl shadow-card">
              🎯
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 6. More Than A Writing Platform */}
      <SectionContainer className="bg-white">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <Badge variant="soft-purple" className="w-fit mx-auto text-xs px-3 py-1 font-bold">Extra Assistance</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              More Than A Writing Platform
            </Heading>
            <Text className="text-text-muted text-sm">
              We provide additional services to ensure your academic journey is fully supported.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Academic Guidance", desc: "Get expert help for assignments, essays, dissertations, and more tailored to your needs.", icon: <Brain className="text-purple-700 w-5 h-5" /> },
              { title: "Referencing Assistance", desc: "Accurate referencing in APA, Harvard, MLA, OSCOLA and other major style parameters.", icon: <Award className="text-red-700 w-5 h-5" /> },
              { title: "Expert Consultation", desc: "Connect with subject specialists for clarification and in-depth understanding.", icon: <Users className="text-green-700 w-5 h-5" /> },
              { title: "Student Resources", desc: "Access free samples, formatting guides, and vocabulary tips to improve academic skills.", icon: <BookOpen className="text-blue-700 w-5 h-5" /> },
            ].map((item, idx) => (
              <div key={idx} className="bg-primary-50/10 border border-primary-150/40 p-5 rounded-xl text-left flex flex-col gap-3 group hover:border-primary-200 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <Heading level={4} className="text-sm sm:text-base">{item.title}</Heading>
                  <Text className="text-xs text-text-body leading-relaxed">{item.desc}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 7. Why Students Trust Us (6 badge grid) */}
      <SectionContainer className="bg-surface-lavender">
        <div className="flex flex-col gap-6">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2 mb-2">
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              Why Students Trust Us
            </Heading>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: "100% Original Work", icon: <ShieldCheck className="w-5 h-5 text-primary-500" /> },
              { label: "Unlimited Revisions", icon: <CheckCircle2 className="w-5 h-5 text-primary-500" /> },
              { label: "24/7 Support", icon: <Users className="w-5 h-5 text-primary-500" /> },
              { label: "Confidential Service", icon: <ShieldCheck className="w-5 h-5 text-primary-500" /> },
              { label: "Subject Experts", icon: <Award className="w-5 h-5 text-primary-500" /> },
              { label: "On-Time Delivery", icon: <CheckCircle2 className="w-5 h-5 text-primary-500" /> },
            ].map((b, idx) => (
              <div key={idx} className="bg-white border border-primary-100 p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2">
                <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                  {b.icon}
                </div>
                <span className="text-xs font-bold text-text-heading leading-tight">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 8. Meet Our Academic Experts (4 cards) */}
      <SectionContainer className="bg-white">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between border-b border-primary-50 pb-2">
            <div className="flex flex-col gap-1 text-left">
              <Badge variant="soft-purple" className="w-fit text-xs px-2.5 py-0.5 font-bold">Experts</Badge>
              <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
                Meet Our Academic Experts
              </Heading>
            </div>
            <Link href="/writers" className="text-sm font-bold text-primary-700 link-slide-hover">
              View All Experts →
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

      {/* Bottom CTA strip */}
      <section className="bg-navy-900 py-10 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <Heading level={3} className="text-xl md:text-2xl text-white">
            Need Expert Academic Support?
          </Heading>
          <Link href="/pricing" className="shrink-0">
            <Button variant="cta" size="md">
              Get Free Quote Now →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
