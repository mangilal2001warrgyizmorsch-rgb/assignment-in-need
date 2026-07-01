"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { StatBlock } from "@/components/ui/StatBlock";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ExpertCard } from "@/components/ui/ExpertCard";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion";
import { Input, TextArea } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { PromoBanner } from "@/components/ui/PromoBanner";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ShieldCheck, Award, Clock, Users, Phone, CheckCircle2 } from "lucide-react";

export default function Home() {
  // Quote form state
  const [subject, setSubject] = useState("marketing");
  const [deadline, setDeadline] = useState("48-hours");
  const [pages, setPages] = useState(2);
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic Price Calculation
  const calculatePrice = () => {
    let baseRatePerPage = 12.99;
    
    if (subject === "law" || subject === "engineering") {
      baseRatePerPage = 15.99;
    } else if (subject === "nursing" || subject === "finance") {
      baseRatePerPage = 14.50;
    }

    let deadlineMultiplier = 1.0;
    if (deadline === "24-hours") {
      deadlineMultiplier = 1.6;
    } else if (deadline === "48-hours") {
      deadlineMultiplier = 1.3;
    } else if (deadline === "3-days") {
      deadlineMultiplier = 1.15;
    }

    return (baseRatePerPage * pages * deadlineMultiplier).toFixed(2);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setEmail("");
    setRequirements("");
    setIsSubmitted(false);
  };

  const services = [
    {
      id: "marketing",
      title: "Business Marketing",
      desc: "Strategic marketing plans, brand analysis projects, market research summaries, and competitor matrix charts constructed with academic rigor.",
      tag: "Popular",
    },
    {
      id: "finance",
      title: "Finance & Accounting",
      desc: "Complex financial spreadsheets, spreadsheet modeling, balance sheets, corporate accounting papers, and cost-benefit audit reports.",
      tag: "PhD Writers",
    },
    {
      id: "law",
      title: "Business Law Cases",
      desc: "Detailed legal arguments, contract law interpretations, tort cases briefs, and corporate governance papers formatted with IRAC style guides.",
      tag: "Complex",
    },
    {
      id: "nursing",
      title: "Nursing & Healthcare",
      desc: "Evidence-based practice (EBP) papers, PICOT questions research, patient care plans, healthcare policy reports, and clinical journals analyses.",
      tag: "High Demand",
    },
    {
      id: "engineering",
      title: "Engineering Reports",
      desc: "Detailed technical reporting, software design specs, system engineering diagrams explanation, CAD models description, and lab manuals.",
      tag: "Specialist",
    },
    {
      id: "case-studies",
      title: "Case Study Analysis",
      desc: "Comprehensive business analysis, Harvard-style case analysis, problem statements, strategic recommendations, and SWOT models.",
      tag: "Best Seller",
    },
  ];

  const promoBadges = [
    { icon: <ShieldCheck />, label: "Turnitin Checked" },
    { icon: <Clock />, label: "48h Delivery" },
    { icon: <Award />, label: "GPA Booster" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <SectionContainer id="hero" background="lavender" className="relative overflow-hidden pt-12 md:pt-20">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-primary-100/30 blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-accent-500/5 blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            {/* Left Column: Copy */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <div className="flex">
                <Badge variant="soft-orange">⚡ 48-Hour Delivery Guarantee</Badge>
              </div>
              <Heading level={1} highlight="100% ORIGINAL" highlightVariant="gradient">
                Get 100% ORIGINAL Plagiarism-free Assignment In Need Help within 48 Hours.
              </Heading>
              <Text variant="body" className="text-lg">
                Struggling with unclear guidelines, essays, or complex case studies? Avail our expert PhD writers for your essay, term paper, or dissertation to lock in the top grade in your class. 100% satisfaction guaranteed with proper citation styles.
              </Text>

              {/* Guarantees Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                  <span className="text-sm font-semibold text-text-heading">100% Plagiarism-free</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                  <span className="text-sm font-semibold text-text-heading">Turnitin report included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                  <span className="text-sm font-semibold text-text-heading">Lock Top Grade</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  variant="primary"
                  size="lg"
                  icon={true}
                  onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore Subjects
                </Button>
                <a
                  href="tel:+442079460958"
                  className="inline-flex items-center justify-center border-2 border-primary-100 rounded-btn px-7 py-3 text-lg font-heading font-semibold text-primary-700 bg-white hover:bg-primary-50 transition-all gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call +44 20 7946 0958</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Pricing Calculator */}
            <div className="lg:col-span-5" id="quote-form">
              <Card className="p-6 md:p-8 bg-white border border-primary-100/50 shadow-xl">
                <CardHeader className="mb-2">
                  <Badge variant="soft-purple" className="self-start mb-1">Inquiry Form</Badge>
                  <Heading level={3} className="text-xl">Calculate Price Instantly</Heading>
                  <Text variant="small">Get matched with a PhD writer in minutes</Text>
                </CardHeader>
                <CardBody className="pt-2">
                  {isSubmitted ? (
                    <div className="text-center py-8 flex flex-col items-center justify-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center text-3xl font-bold mb-2">
                        ✓
                      </div>
                      <Heading level={3} className="text-lg">Request Successfully Sent!</Heading>
                      <Text variant="body" className="text-sm">
                        An academic coordinator is reviewing your guidelines. We will send your writer profile and pricing details to your email within 15 minutes.
                      </Text>
                      <Button variant="outline" size="md" fullWidth={true} className="mt-4" onClick={resetForm}>
                        Submit Another Inquiry
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                      <Select
                        label="Subject Area"
                        options={[
                          { label: "Business Marketing", value: "marketing" },
                          { label: "Finance & Accounting", value: "finance" },
                          { label: "Business Law Case Briefs", value: "law" },
                          { label: "Nursing & Healthcare", value: "nursing" },
                          { label: "Engineering Reports", value: "engineering" },
                          { label: "Case Study Analysis", value: "case-studies" },
                        ]}
                        value={subject}
                        onValueChange={(val) => setSubject(val)}
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <Select
                          label="Deadline"
                          options={[
                            { label: "24 Hours (Express)", value: "24-hours" },
                            { label: "48 Hours (Standard)", value: "48-hours" },
                            { label: "3 Days (Eco)", value: "3-days" },
                            { label: "7 Days (Eco)", value: "7-days" },
                          ]}
                          value={deadline}
                          onValueChange={(val) => setDeadline(val)}
                        />
                        <Input
                          label="Pages (250w/page)"
                          type="number"
                          min="1"
                          max="100"
                          value={pages}
                          onChange={(e) => setPages(parseInt(e.target.value) || 1)}
                        />
                      </div>

                      <Input
                        label="Student Email Address"
                        type="email"
                        placeholder="e.g. name@university.edu"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />

                      <TextArea
                        label="Assignment Details (Optional)"
                        placeholder="Specific guidelines, formatting requests, or instructions..."
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        rows={2}
                      />

                      {/* Estimated cost box */}
                      <div className="flex items-center justify-between p-4 bg-surface-lavender border border-dashed border-primary-100 rounded-btn">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-heading font-extrabold uppercase text-text-muted tracking-wider">Estimated Price</span>
                          <span className="text-[11px] font-semibold text-success flex items-center gap-1">Plagiarism Report Included</span>
                        </div>
                        <div className="text-2xl font-heading font-black text-primary-700">
                          ${calculatePrice()}
                        </div>
                      </div>

                      <Button type="submit" variant="cta" fullWidth={true} isLoading={isSubmitting}>
                        Secure Order Assistance
                      </Button>
                    </form>
                  )}
                </CardBody>
              </Card>
            </div>
          </div>
        </SectionContainer>

        {/* METRICS BANNER */}
        <div className="bg-primary-900 border-y border-primary-950 py-6">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatBlock variant="dark" icon={<Users />} number="25,000+" label="Assignments Delivered" />
            <StatBlock variant="dark" icon={<ShieldCheck />} number="100%" label="Plagiarism-free Turnitin" />
            <StatBlock variant="dark" icon={<Clock />} number="4.9 / 5.0" label="Average Star Rating" />
          </div>
        </div>

        {/* SERVICES SECTION */}
        <SectionContainer id="services" background="white">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <Badge variant="soft-purple" className="mb-3">Expert Writing Fields</Badge>
            <Heading level={2} className="mb-4">Professional Help for Complex Assignment Tasks</Heading>
            <Text variant="muted">
              Our specialists cover all fields with proper referencing styles. availing expert case study writers for essays, dissertation plans, and term papers.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((serv) => (
              <Card key={serv.id} className="p-6">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="soft-purple">{serv.tag}</Badge>
                    <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center text-lg font-bold">
                      📚
                    </div>
                  </div>
                  <Heading level={3} className="text-lg mt-4 leading-tight">{serv.title}</Heading>
                </CardHeader>
                <CardBody className="pt-2">
                  <Text variant="body" className="text-sm leading-relaxed">
                    {serv.desc}
                  </Text>
                </CardBody>
                <CardFooter className="pt-4 border-t border-slate-50 mt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 text-primary-700 hover:bg-transparent hover:text-primary-500 font-bold"
                    onClick={() => {
                      setSubject(serv.id);
                      document.querySelector("#quote-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Select subject & quote →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </SectionContainer>

        {/* GUARANTEES / WHY CHOOSE US */}
        <SectionContainer id="guarantees" background="lavender">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <Badge variant="soft-orange" className="mb-3">Guaranteed Satisfaction</Badge>
            <Heading level={2} className="mb-4">Why UK Students Trust Assignment In Need</Heading>
            <Text variant="muted">
              We secure top grades in class by offering plagiarism-free reports and express 48 hours deliverability.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hoverEffect={false} className="bg-white border border-primary-100/30 p-8 text-center items-center">
              <IconBadge color="green" size="lg" icon={<ShieldCheck />} />
              <Heading level={3} className="text-xl mt-4">100% Plagiarism-Free</Heading>
              <Text variant="body" className="mt-2 text-sm">
                Every single file is custom-written. We provide a turnitin-verified original report with every final draft to guarantee zero copying.
              </Text>
            </Card>

            <Card hoverEffect={false} className="bg-white border border-primary-100/30 p-8 text-center items-center">
              <IconBadge color="orange" size="lg" icon={<Clock />} />
              <Heading level={3} className="text-xl mt-4">Under 48 Hours Turnaround</Heading>
              <Text variant="body" className="mt-2 text-sm">
                Urgent homework? We specialise in express timeline support. We draft quality assignments in 48 hours or less, guaranteed.
              </Text>
            </Card>

            <Card hoverEffect={false} className="bg-white border border-primary-100/30 p-8 text-center items-center">
              <IconBadge color="purple" size="lg" icon={<Award />} />
              <Heading level={3} className="text-xl mt-4">Lock the Top Grade</Heading>
              <Text variant="body" className="mt-2 text-sm">
                Our UK dissertation and essay writers reference every paper correctly (Harvard, APA, MLA), meeting strict rubric requirements.
              </Text>
            </Card>
          </div>
        </SectionContainer>

        {/* PH.D. WRITERS GRID */}
        <SectionContainer background="white">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <Badge variant="soft-purple" className="mb-3">Our UK PhD Experts</Badge>
            <Heading level={2} className="mb-4">Match With Our Highest Rated Academic Writers</Heading>
            <Text variant="muted">
              Hire vetted UK professors and writers with stellar subject ratings.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ExpertCard
              name="Dr. Sarah Jenkins"
              role="PhD - Business Marketing"
              ordersCount="1,240"
              rating={5.0}
              avatar="SJ"
              onHire={() => document.querySelector("#quote-form")?.scrollIntoView({ behavior: "smooth" })}
            />
            <ExpertCard
              name="Dr. Stephen Finch"
              role="PhD - Business Law"
              ordersCount="910"
              rating={4.9}
              avatar="SF"
              onHire={() => document.querySelector("#quote-form")?.scrollIntoView({ behavior: "smooth" })}
            />
            <ExpertCard
              name="Dr. Evelyn Patel"
              role="PhD - Nursing & Medical"
              ordersCount="1,350"
              rating={4.9}
              avatar="EP"
              onHire={() => document.querySelector("#quote-form")?.scrollIntoView({ behavior: "smooth" })}
            />
            <ExpertCard
              name="Dr. Marcus Bell"
              role="PhD - Engineering Systems"
              ordersCount="680"
              rating={4.8}
              avatar="MB"
              onHire={() => document.querySelector("#quote-form")?.scrollIntoView({ behavior: "smooth" })}
            />
          </div>
        </SectionContainer>

        {/* TESTIMONIALS */}
        <SectionContainer id="testimonials" background="lavender">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <Badge variant="soft-purple" className="mb-3">Student Reviews</Badge>
            <Heading level={2} className="mb-4">Hear What Students Say About Our Support</Heading>
            <Text variant="muted">
              Over 15,000 students trust AIN to lock high scores in essays, exams, and term reports.
            </Text>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Alice W."
              institution="University of Edinburgh"
              quote="I was extremely stressed about my Business Marketing case study report. AIN delivered a thoroughly cited paper in 36 hours. Scored a solid A!"
              rating={5}
            />
            <TestimonialCard
              name="Michael T."
              institution="King's College London"
              quote="Incredible support for Nursing PICOT research. The evidence-based analysis was extremely precise, and referencing formatting was 100% correct."
              rating={5}
              featured={true}
            />
            <TestimonialCard
              name="Lewis H."
              institution="University of Leeds"
              quote="Engineering technical reports require deep details and layout structure. The PhD writer matched my lab guidelines perfectly. Absolute lifesavers!"
              rating={5}
            />
          </div>
        </SectionContainer>

        {/* FAQs SECTION */}
        <SectionContainer id="faqs" background="white">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="text-center mb-12">
              <Badge variant="soft-purple">Answers & Help</Badge>
              <Heading level={2} className="mt-2">Answers to Common Questions</Heading>
            </div>
            <Card hoverEffect={false} className="p-6 md:p-8 w-full border border-slate-100">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger>Is my assignment guaranteed to be original?</AccordionTrigger>
                  <AccordionContent>
                    Yes, 100%. All papers are created strictly from scratch according to your custom guidelines. We provide a turnitin-verified plagiarism report alongside the final document to assure complete originality.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                  <AccordionTrigger>How fast can you deliver my nursing care plan case study?</AccordionTrigger>
                  <AccordionContent>
                    Our express writing timeline can deliver complete custom assignments in under 24 hours. Normal standard turnaround is 48 hours. Our expert network is active 24/7 to handle urgent orders.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                  <AccordionTrigger>Can I get revisions if my professor requests edits?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer free revisions within 14 days of order delivery. If your professor needs formatting edits, citation changes, or expanded explanations, simply submit a request and your writer will edit it.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </SectionContainer>

        {/* PROMO BANNER SECTION */}
        <SectionContainer background="lavender">
          <PromoBanner
            title="Lock the Top Grade in Class With 30% OFF Your First Order!"
            description="Avail premium assignment help, essays, and term papers from expert UK PhD writers. Get free Turnitin reports and formatting styles."
            badgeItems={promoBadges}
            ctaLabel="Get Discount Price Now"
            onCtaClick={() => document.querySelector("#quote-form")?.scrollIntoView({ behavior: "smooth" })}
          />
        </SectionContainer>
      </main>

      <Footer />
    </div>
  );
}
