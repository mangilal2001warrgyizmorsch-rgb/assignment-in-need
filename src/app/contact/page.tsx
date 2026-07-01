"use client";

import React, { useState } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Input, TextArea } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Card } from "@/components/ui/Card";
import {
  Mail,
  MapPin,
  ShieldCheck,
  MessageCircle,
  PhoneCall,
  CheckCircle2
} from "lucide-react";

export default function ContactPage() {
  const breadcrumbItems = [{ label: "Contact Us" }];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const SUBJECTS = [
    { label: "Select a subject", value: "" },
    { label: "Accounting", value: "accounting" },
    { label: "Business Management", value: "business" },
    { label: "Law", value: "law" },
    { label: "Nursing", value: "nursing" },
    { label: "Engineering", value: "engineering" },
    { label: "Other", value: "other" },
  ];

  const INQUIRY_TYPES = [
    { label: "Select inquiry type", value: "" },
    { label: "General Enquiry", value: "general" },
    { label: "Assignment Pricing", value: "pricing" },
    { label: "Writer Matching", value: "matching" },
    { label: "Revision Request", value: "revision" },
    { label: "Refund / Guarantee Check", value: "refund" },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Full Name is required";
    if (!email) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!subject) newErrors.subject = "Subject selection is required";
    if (!inquiryType) newErrors.inquiryType = "Inquiry type is required";
    if (!message) newErrors.message = "Message details are required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="bg-white border-b border-primary-50 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-left">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="flex flex-col gap-4 mt-6 max-w-xl">
            <Badge variant="soft-purple" className="w-fit text-xs px-3 py-1 font-bold">
              💬 Get In Touch
            </Badge>
            
            <Heading level={1} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-heading leading-tight">
              We&apos;re Here to Help You{" "}
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 font-black block mt-2">
                Anytime, Anywhere!
              </span>
            </Heading>

            <Text className="text-sm md:text-base text-text-body leading-relaxed">
              Have a question or need assistance with your assignment? Fill out the form, and our support team will get back to you as soon as possible.
            </Text>
          </div>
        </div>
      </section>

      {/* 2. Main Columns grid */}
      <SectionContainer className="bg-white pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact cards & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-extrabold text-lg text-text-heading border-b border-primary-50 pb-2">
                In Case of Enquiry, Reach Us On
              </h3>
              
              {/* WhatsApp card */}
              <div className="bg-primary-50/15 border border-primary-100 p-4 rounded-xl flex gap-4 items-start group hover:border-success/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-success/10 text-success flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 fill-success/10" />
                </div>
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-text-heading">WhatsApp Support</h4>
                  <p className="text-xs text-text-body leading-relaxed">Chat with us on WhatsApp for instant assistance 24/7.</p>
                  <a
                    href="https://wa.me/447300640066"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-success hover:bg-success/90 text-white font-heading font-bold text-[10px] px-3.5 py-1.5 rounded-lg w-fit transition-colors shadow-sm"
                  >
                    Chat Now 💬
                  </a>
                </div>
              </div>

              {/* Phone card */}
              <div className="bg-primary-50/15 border border-primary-100 p-4 rounded-xl flex gap-4 items-start group hover:border-primary-200 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-text-heading">Phone Support</h4>
                  <p className="text-xs text-text-body leading-relaxed">Speak to our experts anytime. We&apos;re here to help!</p>
                  <a
                    href="tel:+447300640066"
                    className="inline-flex items-center justify-center border border-primary-700 text-primary-700 hover:bg-primary-50 font-heading font-bold text-[10px] px-3.5 py-1.5 rounded-lg w-fit transition-all shadow-sm"
                  >
                    +44 7300 640066
                  </a>
                </div>
              </div>

              {/* Email card */}
              <div className="bg-primary-50/15 border border-primary-100 p-4 rounded-xl flex gap-4 items-start group hover:border-accent-200 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-orange-50 text-accent-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-text-heading">Email Support</h4>
                  <p className="text-xs text-text-body leading-relaxed">Drop us an email and we&apos;ll get back to you soon.</p>
                  <a
                    href="mailto:support@assignmentinneed.com"
                    className="inline-flex items-center justify-center border border-accent-600 text-accent-600 hover:bg-orange-50 font-heading font-bold text-[10px] px-3.5 py-1.5 rounded-lg w-fit transition-all shadow-sm truncate max-w-full"
                  >
                    support@assignmentinneed.com
                  </a>
                </div>
              </div>
            </div>

            {/* Socials Connection */}
            <div className="flex flex-col gap-3">
              <h3 className="font-heading font-extrabold text-sm text-text-heading border-b border-primary-50 pb-2">
                Connect With Us
              </h3>
              <div className="flex items-center gap-4 mt-1">
                {[
                  { name: "Facebook", bg: "bg-[#1877F2] text-white", icon: "F" },
                  { name: "Twitter", bg: "bg-black text-white", icon: "X" },
                  { name: "LinkedIn", bg: "bg-[#0A66C2] text-white", icon: "in" },
                  { name: "Instagram", bg: "bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white", icon: "IG" }
                ].map((s) => (
                  <a
                    key={s.name}
                    href="#"
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-extrabold text-base tracking-tight hover:scale-105 active:scale-95 transition-all shadow ${s.bg}`}
                    aria-label={`Visit our ${s.name}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form card */}
          <div className="lg:col-span-7 w-full text-left">
            {isSubmitted ? (
              <div className="bg-white rounded-card shadow-card border border-primary-100/50 p-6 md:p-8 text-center flex flex-col items-center justify-center gap-4 min-h-[450px]">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center text-success mb-2 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-text-heading">Enquiry Sent!</h3>
                <p className="text-text-body text-sm max-w-sm">
                  Thank you, <span className="font-semibold text-primary-700">{name}</span>. Your request has been logged successfully. Our student helpline desk will call or email you shortly.
                </p>
                <Button
                  variant="cta"
                  size="sm"
                  className="mt-4"
                  onClick={() => {
                    setIsSubmitted(false);
                    setName("");
                    setEmail("");
                    setPhone("");
                    setSubject("");
                    setInquiryType("");
                    setMessage("");
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Card className="p-6 md:p-8 flex flex-col gap-6 shadow-md">
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-text-heading leading-tight">
                    Send Us an Enquiry
                  </h3>
                  <div className="w-12 h-1 bg-gradient-logo rounded-full mt-2" />
                </div>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name *"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                      }}
                      error={errors.name}
                    />
                    <Input
                      type="email"
                      label="Email Address *"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                      }}
                      error={errors.email}
                    />
                  </div>

                  <Input
                    type="tel"
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      label="Subject *"
                      placeholder="Select a subject"
                      options={SUBJECTS}
                      value={subject}
                      onValueChange={(val) => {
                        setSubject(val);
                        if (errors.subject) setErrors((prev) => ({ ...prev, subject: "" }));
                      }}
                      error={errors.subject}
                    />
                    <Select
                      label="Inquiry Type *"
                      placeholder="Select inquiry type"
                      options={INQUIRY_TYPES}
                      value={inquiryType}
                      onValueChange={(val) => {
                        setInquiryType(val);
                        if (errors.inquiryType) setErrors((prev) => ({ ...prev, inquiryType: "" }));
                      }}
                      error={errors.inquiryType}
                    />
                  </div>

                  <TextArea
                    label="Message *"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                    }}
                    error={errors.message}
                    rows={4}
                  />

                  {/* NOTE: Purple primary button for message submission, NOT orange */}
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    fullWidth
                    isLoading={isSubmitting}
                    className="mt-2 text-white"
                  >
                    Send Message
                  </Button>

                  <span className="flex items-center gap-1.5 justify-center text-xs font-semibold text-text-muted mt-2">
                    <ShieldCheck className="w-4 h-4 text-success" />
                    Your information is 100% secure and confidential.
                  </span>
                </form>
              </Card>
            )}
          </div>
        </div>
      </SectionContainer>

      {/* 3. Our Location */}
      <SectionContainer className="bg-surface-lavender">
        <div className="flex flex-col gap-6 text-left">
          <div className="flex flex-col gap-1">
            <Badge variant="soft-purple" className="w-fit text-xs px-2.5 py-0.5 font-bold">Find Us</Badge>
            <Heading level={2} className="text-2xl md:text-3xl font-bold text-text-heading">
              Our Location
            </Heading>
          </div>

          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-primary-100 bg-primary-50/50 shadow-sm flex items-center justify-center">
            {/* Embedded static mock map visual representation */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <span className="text-4xl animate-bounce">📍</span>
              <p className="font-heading font-extrabold text-sm text-text-heading mt-2">Great Portland Street, London</p>
              <p className="text-xs text-text-muted">Interactive map loading mock...</p>
            </div>
            
            {/* Address Overlay Card */}
            <div className="absolute bottom-4 left-4 max-w-sm bg-white p-4 rounded-xl border border-primary-100 shadow-md flex gap-3 items-start z-10">
              <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1.5 text-left">
                <span className="font-heading font-extrabold text-xs text-text-heading">Assignment In Need</span>
                <span className="text-[11px] text-text-body leading-relaxed">77 Great Portland Street, London, W1W 6PQ, UK</span>
                <a
                  href="https://google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-primary-700 hover:text-primary-600 transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
