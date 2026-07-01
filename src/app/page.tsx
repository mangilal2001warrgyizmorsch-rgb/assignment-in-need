"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input, TextArea, Select } from "@/components/ui/Input";

export default function Home() {
  // Quote form state
  const [subject, setSubject] = useState("business-marketing");
  const [deadline, setDeadline] = useState("48-hours");
  const [pages, setPages] = useState(2);
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic Price Calculation
  const calculatePrice = () => {
    let baseRatePerPage = 12.99;
    
    // Subject weight
    if (subject === "business-law" || subject === "engineering") {
      baseRatePerPage = 15.99;
    } else if (subject === "nursing" || subject === "finance") {
      baseRatePerPage = 14.50;
    }

    // Deadline multiplier
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
      id: "business-marketing",
      title: "Business Marketing Assignments",
      desc: "Strategic marketing plans, brand analysis projects, market research summaries, and competitor matrix charts constructed with academic rigor.",
      tag: "Popular",
      badgeVariant: "primary" as const
    },
    {
      id: "finance",
      title: "Finance & Accounting Papers",
      desc: "Complex financial spreadsheets, spreadsheet modeling, balance sheets, corporate accounting papers, and cost-benefit audit reports.",
      tag: "PhD Writers",
      badgeVariant: "secondary" as const
    },
    {
      id: "business-law",
      title: "Business Law Case Briefs",
      desc: "Detailed legal arguments, contract law interpretations, tort cases briefs, and corporate governance papers formatted with IRAC style guides.",
      tag: "Complex",
      badgeVariant: "warning" as const
    },
    {
      id: "nursing",
      title: "Nursing & Evidence-Based Research",
      desc: "Evidence-based practice (EBP) papers, PICOT questions research, patient care plans, healthcare policy reports, and clinical journals analyses.",
      tag: "High Demand",
      badgeVariant: "accent" as const
    },
    {
      id: "engineering",
      title: "Engineering Technical Reports",
      desc: "Detailed technical reporting, software design specs, system engineering diagrams explanation, CAD models description, and lab manuals.",
      tag: "Specialist",
      badgeVariant: "outline" as const
    },
    {
      id: "case-studies",
      title: "In-Depth Case Study Writing",
      desc: "Comprehensive business analysis, Harvard-style case analysis, problem statements, strategic recommendations, and SWOT models.",
      tag: "Best Seller",
      badgeVariant: "accent" as const
    }
  ];

  return (
    <>
      <Navbar />
      
      <main style={{ flex: 1 }}>
        {/* HERO SECTION */}
        <section id="hero" className="section" style={{ background: "linear-gradient(180deg, rgba(37, 99, 235, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%)", padding: "5rem 0" }}>
          <div className="container grid-2" style={{ alignItems: "center" }}>
            {/* Hero Copy */}
            <div className="flex-column" style={{ gap: "1.5rem" }}>
              <div style={{ display: "flex" }}>
                <Badge variant="accent">⚡ 48-Hour Delivery Guarantee</Badge>
              </div>
              <h1 style={{ letterSpacing: "-0.03em", lineHeight: "1.15" }}>
                Get 100% <span style={{ color: "var(--accent)" }}>ORIGINAL</span> Plagiarism-Free Homework Help
              </h1>
              <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "var(--muted)", margin: 0 }}>
                Struggling with complex case studies, marketing projects, or nursing reports? Secure the top grade in your class with our premium writing support. Guaranteed plagiarism-free reports with proper Harvard, APA, or MLA referencing.
              </p>
              
              {/* Core Indicators */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginTop: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>100% Original Reports</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>48h or Less Turnaround</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Top Grade Locked</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <Button variant="primary" size="lg" onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}>
                  Explore Services
                </Button>
                <Button variant="outline" size="lg" onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}>
                  View Component System
                </Button>
              </div>
            </div>

            {/* Interactive Calculator Form */}
            <div id="quote-form">
              <Card style={{ padding: "2.5rem" }}>
                <CardHeader>
                  <CardTitle style={{ fontSize: "1.5rem" }}>Calculate Instantly</CardTitle>
                  <CardDescription>Get expert help in 48 hours or less</CardDescription>
                </CardHeader>
                <CardContent style={{ marginTop: "1rem" }}>
                  {isSubmitted ? (
                    <div style={{ textAlign: "center", padding: "2rem 0" }} className="flex-column flex-center">
                      <div style={{ width: "4rem", height: "4rem", borderRadius: "50%", background: "var(--accent-soft)", color: "var(--accent)", fontSize: "2rem", marginBottom: "1.5rem" }} className="flex-center">
                        ✓
                      </div>
                      <h3 style={{ marginBottom: "0.5rem" }}>Inquiry Submitted!</h3>
                      <p style={{ fontSize: "0.95rem", color: "var(--muted)", marginBottom: "1.5rem" }}>
                        Our expert writer team is checking your details. We will email you the assignment timeline within 15 minutes.
                      </p>
                      <Button variant="outline" size="md" style={{ width: "100%" }} onClick={resetForm}>
                        Submit New Request
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                      <Select
                        label="Subject Area"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        options={[
                          { label: "Business Marketing", value: "business-marketing" },
                          { label: "Finance & Accounting", value: "finance" },
                          { label: "Business Law", value: "business-law" },
                          { label: "Nursing & Healthcare", value: "nursing" },
                          { label: "Engineering Topics", value: "engineering" },
                          { label: "Case Study Writing", value: "case-studies" },
                        ]}
                      />

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        <Select
                          label="Delivery Deadline"
                          value={deadline}
                          onChange={(e) => setDeadline(e.target.value)}
                          options={[
                            { label: "24 Hours (Express)", value: "24-hours" },
                            { label: "48 Hours (Standard)", value: "48-hours" },
                            { label: "3 Days (Relaxed)", value: "3-days" },
                            { label: "7 Days (Eco)", value: "7-days" },
                          ]}
                        />
                        <Input
                          label="Pages (250 words/page)"
                          type="number"
                          min="1"
                          max="100"
                          value={pages}
                          onChange={(e) => setPages(parseInt(e.target.value) || 1)}
                        />
                      </div>

                      <Input
                        label="Your Student Email"
                        type="email"
                        placeholder="e.g. name@university.edu"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />

                      <TextArea
                        label="Specific Requirements / Topic Name"
                        placeholder="Outline the case study details, referencing style (APA, Harvard), and instructions..."
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        rows={3}
                      />

                      {/* Pricing preview widget */}
                      <div
                        style={{
                          background: "var(--background)",
                          borderRadius: "var(--radius-md)",
                          padding: "1rem",
                          border: "1px dashed var(--border)",
                        }}
                        className="flex-between"
                      >
                        <div className="flex-column">
                          <span style={{ fontSize: "0.8rem", color: "var(--muted)", textTransform: "uppercase", fontWeight: 700 }}>Estimated Cost</span>
                          <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 600 }}>Plagiarism Report Included</span>
                        </div>
                        <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--foreground)" }}>
                          ${calculatePrice()}
                        </span>
                      </div>

                      <Button type="submit" variant="accent" style={{ width: "100%" }} isLoading={isSubmitting}>
                        Secure Order Assistance
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="section">
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem auto" }} className="flex-column">
              <Badge variant="primary" style={{ margin: "0 auto 1rem auto" }}>Our Specialties</Badge>
              <h2 style={{ marginBottom: "1rem" }}>Academic Help Covering All Subject Fields</h2>
              <p>
                From critical case studies analysis to structured research reports, our academic writers lock top grades in every major subject.
              </p>
            </div>

            <div className="grid-3">
              {services.map((service) => (
                <Card key={service.id}>
                  <CardHeader>
                    <div className="flex-between">
                      <Badge variant={service.badgeVariant}>{service.tag}</Badge>
                      <span style={{ color: "var(--primary)", fontSize: "1.25rem" }}>🎓</span>
                    </div>
                    <CardTitle style={{ marginTop: "1rem" }}>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{service.desc}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      size="sm"
                      style={{ paddingLeft: 0, color: "var(--primary)" }}
                      onClick={() => {
                        setSubject(service.id);
                        document.querySelector("#quote-form")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Order this subject →
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* GUARANTEES / WHY CHOOSE US */}
        <section id="guarantees" className="section" style={{ background: "var(--muted-soft)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem auto" }} className="flex-column">
              <Badge variant="accent" style={{ margin: "0 auto 1rem auto" }}>Unmatched Guarantees</Badge>
              <h2>The Double-Protection Assignment Standard</h2>
              <p>
                We do not just write papers. We ensure every word meets global citation and academic standards.
              </p>
            </div>

            <div className="grid-3">
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "center", alignItems: "center", padding: "1.5rem" }}>
                <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "50%", background: "var(--accent-soft)", color: "var(--accent)" }} className="flex-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3>100% Plagiarism-Free</h3>
                <p style={{ fontSize: "0.95rem" }}>
                  Every assignment comes with a complimentary Turnitin original content report. Rest assured, your paper is engineered strictly from scratch.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "center", alignItems: "center", padding: "1.5rem" }}>
                <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "50%", background: "var(--primary-soft)", color: "var(--primary)" }} className="flex-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3>Under 48 Hours Delivery</h3>
                <p style={{ fontSize: "0.95rem" }}>
                  Tight schedule? We excel in express turnarounds. Get high-quality essays, term papers, and case analysis in less than 48 hours.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "center", alignItems: "center", padding: "1.5rem" }}>
                <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "50%", background: "var(--secondary-soft)", color: "var(--secondary)" }} className="flex-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3>Lock the Top Grade</h3>
                <p style={{ fontSize: "0.95rem" }}>
                  Our professional paper writers understand structural referencing styles (APA, MLA, Harvard, Chicago) to maximize your grading scores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="section">
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem auto" }} className="flex-column">
              <Badge variant="primary" style={{ margin: "0 auto 1rem auto" }}>Student Success</Badge>
              <h2>Trusted By 15,000+ Students Worldwide</h2>
              <p>Here is how university undergraduates and postgraduates rate our case studies writing and assignment help.</p>
            </div>

            <div className="grid-3">
              <Card>
                <div style={{ color: "var(--warning)", fontSize: "1.1rem" }}>★★★★★</div>
                <p style={{ fontSize: "0.95rem", fontStyle: "italic", margin: "0.5rem 0" }}>
                  {"\"I was struggling with a complex Business Law tort law paper that was due in 36 hours. AIN team delivered a fully cited paper with an original report in 24 hours. Got an A!\""}
                </p>
                <div className="flex-between" style={{ marginTop: "1rem" }}>
                  <strong>Sophia M.</strong>
                  <Badge variant="accent">Grade A+ Locked</Badge>
                </div>
              </Card>

              <Card>
                <div style={{ color: "var(--warning)", fontSize: "1.1rem" }}>★★★★★</div>
                <p style={{ fontSize: "0.95rem", fontStyle: "italic", margin: "0.5rem 0" }}>
                  {"\"Their Nursing PICOT report was incredible. Extremely detailed, proper citation, and referencing style were flawless. Checked with Turnitin and it was 100% plagiarism-free.\""}
                </p>
                <div className="flex-between" style={{ marginTop: "1rem" }}>
                  <strong>James K.</strong>
                  <Badge variant="accent">98% Score</Badge>
                </div>
              </Card>

              <Card>
                <div style={{ color: "var(--warning)", fontSize: "1.1rem" }}>★★★★★</div>
                <p style={{ fontSize: "0.95rem", fontStyle: "italic", margin: "0.5rem 0" }}>
                  {"\"Engineering assignments are notoriously difficult to get right. AIN matched me with a Ph.D. engineer who structured the entire technical design analysis perfectly. Lifesavers!\""}
                </p>
                <div className="flex-between" style={{ marginTop: "1rem" }}>
                  <strong>Liam T.</strong>
                  <Badge variant="accent">Class Top Score</Badge>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* DESIGN SYSTEM SHOWCASE (FOR DEVELOPER REFERENCE) */}
        <section id="demo" className="section" style={{ borderTop: "1px solid var(--border)", background: "linear-gradient(180deg, var(--background) 0%, rgba(124, 58, 237, 0.03) 100%)" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem auto" }} className="flex-column">
              <Badge variant="secondary" style={{ margin: "0 auto 1rem auto" }}>Framework Setup Reference</Badge>
              <h2>Design System Component Showroom</h2>
              <p>
                This showroom illustrates how the reusable UI elements, font tokens, and utility styles from `globals.css` can be composed.
              </p>
            </div>

            <div className="flex-column" style={{ gap: "3rem" }}>
              {/* Typography Showcase */}
              <Card hoverEffect={false}>
                <CardHeader>
                  <CardTitle>1. Typographic Headings & Font Tokens</CardTitle>
                  <CardDescription>Our fluid typographic scale using the geometric Outfit font</CardDescription>
                </CardHeader>
                <CardContent style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)", textTransform: "uppercase" }}>Heading 1 (Hero Title)</span>
                    <h1>We Lock The Top Grade</h1>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)", textTransform: "uppercase" }}>Heading 2 (Section Title)</span>
                    <h2>Assignment in Need Help Specialists</h2>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)", textTransform: "uppercase" }}>Heading 3 (Card Title)</span>
                    <h3>Case Study Writing Specialists</h3>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)", textTransform: "uppercase" }}>Gradient Text Utility (`.text-gradient`)</span>
                    <h2 className="text-gradient" style={{ margin: 0 }}>Vibrant Primary & Secondary Gradient</h2>
                  </div>
                </CardContent>
              </Card>

              {/* Button Variant Showcase */}
              <Card hoverEffect={false}>
                <CardHeader>
                  <CardTitle>2. Reusable Buttons</CardTitle>
                  <CardDescription>Configured variants and hover transitions using utility classes</CardDescription>
                </CardHeader>
                <CardContent className="flex-column" style={{ gap: "1.5rem" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="accent">Accent (Success) Button</Button>
                    <Button variant="outline">Outline Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
                    <Button variant="primary" size="sm">Small</Button>
                    <Button variant="primary" size="md">Medium</Button>
                    <Button variant="primary" size="lg">Large</Button>
                    <Button variant="primary" isLoading={true}>Loading State</Button>
                    <Button variant="secondary" leftIcon={<span>📂</span>}>With Left Icon</Button>
                    <Button variant="outline" rightIcon={<span>→</span>}>With Right Icon</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Badge Variant Showcase */}
              <Card hoverEffect={false}>
                <CardHeader>
                  <CardTitle>3. Reusable Status Badges</CardTitle>
                  <CardDescription>Soft background tint badges using custom properties</CardDescription>
                </CardHeader>
                <CardContent style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <Badge variant="primary">Primary Badge</Badge>
                  <Badge variant="secondary">Secondary Badge</Badge>
                  <Badge variant="accent">Accent Badge</Badge>
                  <Badge variant="warning">Warning Badge</Badge>
                  <Badge variant="outline">Outline Badge</Badge>
                </CardContent>
              </Card>

              {/* Form Input Elements Showcase */}
              <Card hoverEffect={false}>
                <CardHeader>
                  <CardTitle>4. Reusable Input Fields</CardTitle>
                  <CardDescription>Interactive fields featuring focus rings and dynamic label configurations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid-3">
                    <Input label="Demo Text Input" placeholder="Type here..." helperText="This is standard helper description." />
                    <Input label="Input with Error State" placeholder="Incorrect value..." error="This field is required." />
                    <Select
                      label="Select Dropdown"
                      options={[
                        { label: "Undergraduate (Level 1-3)", value: "ug" },
                        { label: "Postgraduate (Master)", value: "pg" },
                        { label: "Doctorate (Ph.D.)", value: "phd" },
                      ]}
                    />
                  </div>
                  <div style={{ marginTop: "1.5rem" }}>
                    <TextArea label="TextArea Box" placeholder="Write full specifications..." rows={3} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
