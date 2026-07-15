"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { CustomDropdown } from "@/components/ui/CustomDropdown";
import { mapExpertToWriter } from "@/lib/api";

const COUNTRY_CODES = [
  { label: "UK (+44)", value: "+44" },
  { label: "US (+1)", value: "+1" },
  { label: "IN (+91)", value: "+91" },
  { label: "AU (+61)", value: "+61" },
  { label: "CA (+1)", value: "+1" },
  { label: "AE (+971)", value: "+971" },
  { label: "SA (+966)", value: "+966" },
  { label: "IE (+353)", value: "+353" },
  { label: "NZ (+64)", value: "+64" },
  { label: "SG (+65)", value: "+65" },
  { label: "MY (+60)", value: "+60" },
];

const PROJECT_TYPE_OPTIONS = [
  { label: "Assignment", value: "Assignment" },
  { label: "Dissertation", value: "Dissertation" },
  { label: "Thesis", value: "Thesis" },
  { label: "Research Project", value: "Research Project" },
];

const WORD_COUNT_OPTIONS = [
  { label: "250 Words / 1 Page", value: "250" },
  { label: "500 Words / 2 Pages", value: "500" },
  { label: "1000 Words / 4 Pages", value: "1000" },
  { label: "1500 Words / 6 Pages", value: "1500" },
  { label: "2000 Words / 8 Pages", value: "2000" },
  { label: "2500 Words / 10 Pages", value: "2500" },
  { label: "3000 Words / 12 Pages", value: "3000" },
  { label: "4000 Words / 16 Pages", value: "4000" },
  { label: "5000+ Words", value: "5000" },
];

const TIME_PERIOD_OPTIONS = [
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((d) => ({
    label: `${d} Day${d > 1 ? "s" : ""}`,
    value: String(d),
  })),
  { label: "16-20 Days", value: "16 to 20" },
  { label: "21+ Days", value: "21+" },
];

import {
  Star,
  ShieldCheck,
  Award,
  Clock,
  Users,
  ChevronRight,
  ArrowRight,
  FileText,
  CheckCircle2,
  FileSignature,
  FileCheck2,
  RefreshCw,
  BookOpen,
  Headset,
  AlignLeft,
  Network,
  PaintRoller,
  MapPin,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const CITIES_LIST = [
  { name: "London", slug: "london", country: "United Kingdom" },
  { name: "Birmingham", slug: "birmingham", country: "United Kingdom" },
  { name: "Manchester", slug: "manchester", country: "United Kingdom" },
  { name: "Leeds", slug: "leeds", country: "United Kingdom" },
  { name: "Glasgow", slug: "glasgow", country: "United Kingdom" },
  { name: "Edinburgh", slug: "edinburgh", country: "United Kingdom" },
  { name: "Bristol", slug: "bristol", country: "United Kingdom" },
  { name: "Liverpool", slug: "liverpool", country: "United Kingdom" },
  { name: "Sydney", slug: "sydney", country: "Australia" },
  { name: "Melbourne", slug: "melbourne", country: "Australia" },
  { name: "Brisbane", slug: "brisbane", country: "Australia" },
  { name: "Perth", slug: "perth", country: "Australia" },
  { name: "Adelaide", slug: "adelaide", country: "Australia" },
  { name: "Canberra", slug: "canberra", country: "Australia" },
  { name: "Toronto", slug: "toronto", country: "Canada" },
  { name: "Vancouver", slug: "vancouver", country: "Canada" },
  { name: "Montreal", slug: "montreal", country: "Canada" },
  { name: "Ottawa", slug: "ottawa", country: "Canada" },
  { name: "Dubai", slug: "dubai", country: "United Arab Emirates" },
  { name: "Abu Dhabi", slug: "abu-dhabi", country: "United Arab Emirates" },
  { name: "Sharjah", slug: "sharjah", country: "United Arab Emirates" },
  { name: "Kuala Lumpur", slug: "kuala-lumpur", country: "Malaysia" },
  { name: "Penang", slug: "penang", country: "Malaysia" },
];

export interface CityDetailPageProps {
  slug: string;
}

export default function CityDetailPage({ slug }: CityDetailPageProps) {
  const citySlug = slug.toLowerCase().replace("-assignment-help", "").split("/").pop() || "";
  const matchedCity = CITIES_LIST.find((c) => c.slug === citySlug) || {
    name: citySlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    country: "United Kingdom",
  };

  const cityName = matchedCity.name;
  const countryName = matchedCity.country;

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryCode, setCountryCode] = useState("+44");
  const [projectType, setProjectType] = useState("");
  const [wordCount, setWordCount] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic experts
  const [expertsList, setExpertsList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/experts");
        if (res.ok) {
          const result = await res.json();
          if (result.success && Array.isArray(result.data)) {
            const mapped = result.data.map((item: any) => {
              const parsed = mapExpertToWriter(item);
              return {
                id: parsed.id,
                name: parsed.name,
                role: `${cityName} Expert`,
                qual: parsed.qualifications,
                exp: parsed.experience.includes("Years")
                  ? parsed.experience
                  : `${parsed.experience} Experience`,
                rating: parsed.rating,
                orders: parsed.ordersCompleted,
                img: parsed.avatar,
                expertise: parsed.expertise,
              };
            });
            mapped.sort((a: any, b: any) => {
              if (b.rating !== a.rating) return b.rating - a.rating;
              const aOrders = parseInt(a.orders) || 0;
              const bOrders = parseInt(b.orders) || 0;
              return bOrders - aOrders;
            });
            setExpertsList(mapped.slice(0, 5));
          }
        }
      } catch (err) {
        console.warn("Failed to fetch experts for city page:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchExperts();
  }, [slug, cityName]);

  const getCountryIso = (code: string) => {
    const mapping: Record<string, string> = {
      "+44": "GB", "+1": "US", "+91": "IN", "+61": "AU",
      "+971": "AE", "+966": "SA", "+353": "IE", "+64": "NZ",
      "+65": "SG", "+60": "MY",
    };
    return mapping[code] || "GB";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const countryIso = getCountryIso(countryCode);
      const response = await fetch("/api/web-submit-quote", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, phone: mobile, countryCode, countryIso,
          service: projectType || "Assignment",
          subject: `${cityName} Assignment Help`,
          deadline: timePeriod ? timePeriod.replace(/[^0-9]/g, "") || timePeriod : "5",
          wordCount: wordCount ? wordCount.replace(/[^0-9]/g, "") || wordCount : "1500",
          description: `Quote request from ${cityName} city page`,
          source_page: typeof window !== "undefined" ? window.location.href : `https://assignmentinneed.com/${slug}`,
        }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        toast.success(data.message || "Quote submitted successfully!");
        setOrderId(data.order_id || "");
        setIsSuccess(true);
      } else {
        toast.error(data.message || "Failed to submit quote. Please check your details.");
      }
    } catch (err: any) {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const expertsToRender = expertsList.length > 0
    ? expertsList
    : [
        { name: "Emma Taylor", role: `${cityName} Expert`, qual: "Master's Qualified", exp: "8+ Years", rating: 4.9, orders: "1200+", img: "https://ui-avatars.com/api/?name=Emma+Taylor&background=f3e8ff&color=6b21a8" },
        { name: "Daniel Harris", role: `${cityName} Expert`, qual: "Ph.D. Qualified", exp: "10+ Years", rating: 4.9, orders: "1900+", img: "https://ui-avatars.com/api/?name=Daniel+Harris&background=ede9fe&color=4c1d95" },
        { name: "Sophia Martinez", role: `${cityName} Expert`, qual: "Ph.D. Qualified", exp: "7+ Years", rating: 4.8, orders: "980+", img: "https://ui-avatars.com/api/?name=Sophia+Martinez&background=fae8ff&color=86198f" },
        { name: "James Anderson", role: `${cityName} Expert`, qual: "Master's Qualified", exp: "12+ Years", rating: 4.9, orders: "1500+", img: "https://ui-avatars.com/api/?name=James+Anderson&background=e0f2fe&color=0369a1" },
        { name: "Olivia Bennett", role: `${cityName} Expert`, qual: "Master's Qualified", exp: "6+ Years", rating: 4.8, orders: "860+", img: "https://ui-avatars.com/api/?name=Olivia+Bennett&background=f0fdf4&color=166534" },
      ];

  // Dynamic choice features
  const choiceFeatures = [
    { icon: <Users className="w-5 h-5" />, title: `Qualified\n${cityName} Experts`, desc: `Professional ${cityName.toLowerCase()} specialists\nand academic writers.` },
    { icon: <FileCheck2 className="w-5 h-5" />, title: "100% Original\n& Plagiarism Free", desc: "Every assignment is\nunique and verified." },
    { icon: <Clock className="w-5 h-5" />, title: "On-Time\nDelivery", desc: "We value your time and\nalways meet deadlines." },
    { icon: <Headset className="w-5 h-5" />, title: "24/7\nSupport", desc: "Our support team is\navailable anytime." },
    { icon: <Award className="w-5 h-5" />, title: `${countryName}-Based\nProfessionals`, desc: `Writers familiar with ${countryName}\nacademic standards.` },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Affordable\nPricing", desc: "Premium quality help\nwithin your budget." },
  ];

  // Dynamic promo banner inclusions
  const promoInclusions = [
    { icon: <FileCheck2 className="w-6 h-6" />, label: "Plagiarism\nReport", visibility: "flex" },
    { icon: <Network className="w-6 h-6" />, label: "AI Report", visibility: "flex" },
    { icon: <FileText className="w-6 h-6" />, label: "Title\nPage", visibility: "flex" },
    { icon: <BookOpen className="w-6 h-6" />, label: "Bibliography", visibility: "hidden sm:flex" },
    { icon: <RefreshCw className="w-6 h-6" />, label: "Unlimited\nRevisions", visibility: "hidden lg:flex" },
    { icon: <PaintRoller className="w-6 h-6" />, label: "Formatting", visibility: "hidden lg:flex" },
    { icon: <Headset className="w-6 h-6" />, label: "24/7\nSupport", visibility: "hidden lg:flex" },
  ];

  // Benefits
  const benefits = [
    { icon: <Award className="w-6 h-6 text-[#3f159a]" />, title: "Quality Assistance", desc: `With experienced ${cityName.toLowerCase()} professionals, our team is equipped with the latest tools and technologies that enable us to offer quality assignment help for students.` },
    { icon: <Users className="w-6 h-6 text-[#3f159a]" />, title: "Customized Solutions", desc: `When you seek our online ${cityName.toLowerCase()} assignment help, you get personalized and tailor-made support that fulfills all your needs and demands.` },
    { icon: <CheckCircle2 className="w-6 h-6 text-[#3f159a]" />, title: "Accuracy and Precision", desc: `Our experts aim to deliver accurate and error-free solutions. We have a committed team that adheres to ${countryName.toLowerCase()} academic standards and provides precise work.` },
    { icon: <ShieldCheck className="w-6 h-6 text-[#3f159a]" />, title: "100% Confidentiality", desc: "We maintain a policy where your personal information remains 100% secure. Your confidentiality and privacy are our top priorities." },
  ];

  return (
    <div className="font-sans text-[#111827] bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="relative pt-6 pb-0 px-4 md:px-6 lg:px-8 overflow-hidden border-b border-gray-100"
        style={{ background: "linear-gradient(115deg, #ffffff 48%, #faf8ff)" }}
      >
        <div className="relative z-10 max-w-[1250px] mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-[#3f159a] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-[#3f159a] transition-colors">Cities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-550">{cityName} Assignment Help</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative min-h-0">
            {/* Left Content Column */}
            <AnimateIn
              variant="fadeUp"
              className="lg:col-span-7 flex flex-col justify-start items-start text-left z-20 pb-4 lg:pb-0 order-1 relative pt-2"
            >
              {/* Star Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center bg-[#1a6c38] text-white text-[9px] px-1.5 py-0.5 rounded font-black tracking-tight select-none">
                  ★★★★★
                </div>
                <span className="text-[11px] font-bold text-[#0f1b3d]">
                  Rated 4.9/5 by 25,000+ {countryName === "United Kingdom" ? "UK" : countryName} Students
                </span>
              </div>

              {/* Title */}
              <h1 className="text-[26px] sm:text-[34px] md:text-[40px] lg:text-[42px] w-full max-w-[500px] font-[900] leading-[1.08] text-[#0f1b3d] tracking-tight mb-3 font-heading">
                Expert {cityName} Assignment Help
                <br />
                <span className="text-[#ea580c] block mt-1.5">You Can Rely On</span>
              </h1>

              {/* Description */}
              <p className="text-gray-600 w-full max-w-[450px] text-sm md:text-[15px] font-semibold leading-relaxed mb-6">
                Get accurate, well-researched and plagiarism-free {cityName.toLowerCase()} assignments helped by qualified experts to achieve top grades.
              </p>

              {/* 4 Stats Row */}
              <div className="grid grid-cols-4 md:flex md:flex-wrap items-center gap-x-2 gap-y-4 mb-8 max-w-[500px] w-full border-t border-b border-gray-100 py-3 md:border-none md:py-0">
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2.5 text-center md:text-left border-r border-gray-150 md:border-none last:border-r-0 pr-1 md:pr-0">
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 hidden md:flex">
                    <CheckCircle2 className="w-4 h-4 text-[#0f1b3d]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] sm:text-[13px] font-[950] text-[#0f1b3d] leading-none mb-1">15,000+</span>
                    <span className="text-[7px] sm:text-[9px] text-gray-400 font-bold uppercase tracking-tight leading-tight md:leading-none">Assignments Delivered</span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2.5 text-center md:text-left border-r border-gray-150 md:border-none last:border-r-0 pr-1 md:pr-0">
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 hidden md:flex">
                    <Users className="w-4 h-4 text-[#0f1b3d]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] sm:text-[13px] font-[950] text-[#0f1b3d] leading-none mb-1">120+</span>
                    <span className="text-[7px] sm:text-[9px] text-gray-400 font-bold uppercase tracking-tight leading-tight md:leading-none">Subject Experts</span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2.5 text-center md:text-left border-r border-gray-150 md:border-none last:border-r-0 pr-1 md:pr-0">
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 hidden md:flex">
                    <Star className="w-4 h-4 text-[#eab308] fill-[#eab308]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] sm:text-[13px] font-[950] text-[#0f1b3d] leading-none mb-1">4.8/5</span>
                    <span className="text-[7px] sm:text-[9px] text-gray-400 font-bold uppercase tracking-tight leading-tight md:leading-none">Student Rating</span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2.5 text-center md:text-left border-r border-gray-150 md:border-none last:border-r-0 pr-1 pr-0">
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 hidden md:flex">
                    <Clock className="w-4 h-4 text-[#0f1b3d]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] sm:text-[13px] font-[950] text-[#0f1b3d] leading-none mb-1">98%</span>
                    <span className="text-[7px] sm:text-[9px] text-gray-400 font-bold uppercase tracking-tight leading-tight md:leading-none">On-Time Delivery</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Link
                  href="#quote-form"
                  className="btn-shutter-blue-open text-white font-extrabold py-3.5 px-6 rounded-lg text-[11px] tracking-wider transition uppercase shadow-md flex items-center justify-center gap-2 w-full sm:w-auto text-center shrink-0 cursor-pointer border-none"
                >
                  Talk To An Expert <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/samples"
                  className="btn-shutter-blue-close font-extrabold py-3.5 px-6 rounded-lg text-[11px] tracking-wider transition uppercase shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto text-center shrink-0 cursor-pointer"
                >
                  View Samples <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimateIn>

            {/* Student Image - centered at the background */}
            <div
              className="absolute left-[54%] top-[20px] -translate-x-1/2 w-[420px] h-[450px] select-none pointer-events-none hidden lg:block z-0"
              style={{
                WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)",
                maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)",
              }}
            >
              <Image
                src="/new-subject-sectionimg/herosubject.png"
                alt={`${cityName} student`}
                fill
                className="object-contain object-top"
                priority
              />
            </div>

            {/* Floating Headset Live Support Badge */}
            <div className="absolute top-[300px] left-[44%] translate-x-[80px] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-3.5 flex items-center gap-2.5 border border-gray-100 pointer-events-auto z-30 hidden lg:flex">
              <div className="w-8 h-8 rounded-full bg-[#fff2ea] flex items-center justify-center shrink-0">
                <Headset className="w-4 h-4 text-[#ea580c]" />
              </div>
              <div className="flex flex-col text-left pr-1">
                <span className="font-extrabold text-[#0f1b3d] text-[11px] leading-tight">24/7</span>
                <span className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Live Support</span>
              </div>
            </div>

            {/* Spacer Column */}
            <div className="lg:col-span-1 hidden lg:block order-2" />

            {/* Right Form Card Column */}
            <AnimateIn
              variant="fadeUp"
              delay={0.2}
              id="quote-form"
              className="lg:col-span-4 flex justify-center lg:justify-center items-start z-20 pt-0 order-3"
            >
              {isSuccess ? (
                <div className="w-[390px] max-w-full p-8 rounded-2xl border border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white relative flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-extrabold text-gray-900 leading-snug">Quote Request Received!</h3>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-[280px]">
                      Thank you, <span className="font-bold text-[#3f159a]">{name}</span>. Your quote request for {cityName} has been submitted successfully. Our team will contact you shortly.
                    </p>
                  </div>
                  {orderId && (
                    <div className="bg-emerald-50 text-emerald-800 border border-emerald-100 px-4 py-2 rounded-xl text-xs font-black select-all tracking-wider">
                      Order ID: <span className="font-extrabold text-emerald-600 font-mono">{orderId}</span>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => { setIsSuccess(false); setOrderId(""); setName(""); setEmail(""); setMobile(""); setProjectType(""); setWordCount(""); setTimePeriod(""); }}
                    className="w-full mt-2 py-2 btn-shutter-blue-open text-xs font-bold rounded-lg cursor-pointer"
                  >
                    Submit Another Quote
                  </button>
                </div>
              ) : (
                <div className="w-[390px] max-w-full p-[0.8rem_1rem] rounded-2xl border border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white relative">
                  {/* Offer ribbon banner */}
                  <div className="absolute top-[-26px] right-0 z-[5] pointer-events-none h-[48px] w-[300px]">
                    <Image src="/images/offer-3.png" alt="Enjoy Upto 40% Off" fill className="object-contain rounded-tr-[10px]" />
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-2 pt-4">
                    <span className="text-[1.2rem] select-none" style={{ filter: "grayscale(100%) opacity(0.6)" }}>✨</span>
                    <h3 className="text-[0.95rem] font-bold text-gray-900 m-0 mx-2 capitalize leading-snug whitespace-nowrap">Get Instant Quote</h3>
                    <span className="text-[1.2rem] select-none" style={{ filter: "grayscale(100%) opacity(0.6)" }}>✨</span>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-[0.15rem]" id="placeOrder">
                    {/* Name Row */}
                    <div className="flex items-center justify-between mb-1.5 gap-[15px]">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="w-6 h-6 rounded-lg flex items-center justify-center bg-purple-100 text-[#7c3aed]">
                          <Users className="w-3 h-3 text-[#7c3aed]" />
                        </span>
                        <label className="text-[0.78rem] font-bold text-gray-800 m-0 whitespace-nowrap">Name</label>
                      </div>
                      <div className="hero-select-box flex-1 max-w-[170px] bg-white border border-gray-200 rounded-lg py-1 px-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                        <input type="text" required placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border-none bg-transparent text-[0.7rem] text-slate-800 outline-none font-medium py-1 box-border placeholder:text-gray-400 focus:outline-none focus:border-none focus:shadow-none" />
                      </div>
                    </div>

                    {/* Email Row */}
                    <div className="flex items-center justify-between mb-1.5 gap-[15px]">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="w-6 h-6 rounded-lg flex items-center justify-center bg-blue-100 text-blue-500">
                          <FileText className="w-3 h-3 text-blue-500" />
                        </span>
                        <label className="text-[0.78rem] font-bold text-gray-800 m-0 whitespace-nowrap">Email</label>
                      </div>
                      <div className="hero-select-box flex-1 max-w-[170px] bg-white border border-gray-200 rounded-lg py-1 px-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                        <input type="email" required placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-none bg-transparent text-[0.7rem] text-slate-800 outline-none font-medium py-1 box-border placeholder:text-gray-400 focus:outline-none focus:border-none focus:shadow-none" />
                      </div>
                    </div>

                    {/* Mobile Row */}
                    <div className="flex items-center justify-between mb-1.5 gap-[15px]">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="w-6 h-6 rounded-lg flex items-center justify-center bg-red-100 text-red-500">
                          <Headset className="w-3 h-3 text-red-555" />
                        </span>
                        <label className="text-[0.78rem] font-bold text-gray-800 m-0 whitespace-nowrap">Mobile No</label>
                      </div>
                      <div className="flex-grow flex-1 max-w-[170px] flex gap-1">
                        <div className="w-[65px] bg-white border border-gray-200 rounded-lg py-1 px-1 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                          <CustomDropdown options={COUNTRY_CODES} value={countryCode} onChange={setCountryCode} align="left" />
                        </div>
                        <div className="flex-grow bg-white border border-gray-200 rounded-lg py-1 px-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                          <input type="tel" required placeholder="Enter Mobile" value={mobile} onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ""))} className="w-full border-none bg-transparent text-[0.7rem] text-slate-800 outline-none font-medium py-1 box-border placeholder:text-gray-400 focus:outline-none focus:border-none focus:shadow-none" />
                        </div>
                      </div>
                    </div>

                    {/* Project Type Row */}
                    <div className="flex items-center justify-between mb-1.5 gap-[15px]">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="w-6 h-6 rounded-lg flex items-center justify-center bg-purple-100 text-purple-600">
                          <FileSignature className="w-3 h-3 text-purple-600" />
                        </span>
                        <label className="text-[0.78rem] font-bold text-gray-800 m-0 whitespace-nowrap">Project Type</label>
                      </div>
                      <div className="hero-select-box flex-1 max-w-[170px] bg-white border border-gray-200 rounded-lg py-1 px-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                        <CustomDropdown options={PROJECT_TYPE_OPTIONS} value={projectType} onChange={setProjectType} placeholder="Select Project Type" />
                      </div>
                    </div>

                    {/* Word Count Row */}
                    <div className="flex items-center justify-between mb-1.5 gap-[15px]">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="w-6 h-6 rounded-lg flex items-center justify-center bg-pink-100 text-pink-500">
                          <AlignLeft className="w-3 h-3 text-pink-500" />
                        </span>
                        <label className="text-[0.78rem] font-bold text-gray-800 m-0 whitespace-nowrap">Word Count</label>
                      </div>
                      <div className="hero-select-box flex-1 max-w-[170px] bg-white border border-gray-200 rounded-lg py-1 px-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                        <CustomDropdown options={WORD_COUNT_OPTIONS} value={wordCount} onChange={setWordCount} placeholder="Select Word Count" />
                      </div>
                    </div>

                    {/* Time Period Row */}
                    <div className="flex items-center justify-between mb-1.5 gap-[15px]">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="w-6 h-6 rounded-lg flex items-center justify-center bg-yellow-100 text-yellow-600">
                          <Clock className="w-3 h-3 text-yellow-600" />
                        </span>
                        <label className="text-[0.78rem] font-bold text-gray-800 m-0 whitespace-nowrap">Time Period</label>
                      </div>
                      <div className="hero-select-box flex-1 max-w-[170px] bg-white border border-gray-200 rounded-lg py-1 px-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                        <CustomDropdown options={TIME_PERIOD_OPTIONS} value={timePeriod} onChange={setTimePeriod} placeholder="Select Deadline" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-shutter-orange-open border-none py-[9px] px-3 rounded-lg text-[0.78rem] font-semibold cursor-pointer w-full mt-3 shadow-[0_4px_14px_rgba(249,115,22,0.3)] whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
                    >
                      {isSubmitting ? "Submitting..." : "Get Price Now →"}
                    </button>

                    <div className="flex justify-between mt-2.5 text-[0.65rem] text-gray-500 border-t border-gray-100 pt-2.5">
                      <span className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" className="w-3 h-3"><polyline points="20 6 9 17 4 12" /></svg>
                        It&apos;s free
                      </span>
                      <span className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" className="w-3 h-3"><polyline points="20 6 9 17 4 12" /></svg>
                        No obligation
                      </span>
                      <span className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" className="w-3 h-3"><polyline points="20 6 9 17 4 12" /></svg>
                        Quick response
                      </span>
                    </div>
                  </form>
                </div>
              )}
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* EXPERTS SECTION */}
      <section className="py-8 md:py-10 bg-[#faf9fe] border-b border-gray-50">
        <div className="max-w-[1250px] mx-auto px-4">
          <div className="flex flex-col gap-4 mb-8">
            <div className="text-center w-full">
              <h2 className="text-[22px] sm:text-[28px] font-[900] text-[#0f1b3d] mb-1.5 tracking-tight font-heading leading-snug">
                Our {cityName} Assignment Experts
              </h2>
              <p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider leading-relaxed">
                Learn from the best. Our experts are here to help you achieve top grades.
              </p>
            </div>
            <div className="flex justify-end w-full">
              <Link href="/writers" className="text-[11px] font-extrabold text-[#3f159a] flex items-center hover:underline uppercase tracking-widest gap-0.5 shrink-0">
                View All Experts <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div
              className="flex overflow-x-auto pb-4 lg:pb-0 -mx-4 px-4 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:mx-0 lg:px-0 gap-4 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {expertsToRender.map((expert, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl border border-gray-100 flex flex-col items-center p-5 text-center shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_15px_40px_rgba(63,21,154,0.06)] hover:-translate-y-1.5 duration-300 flex-none w-[265px] sm:w-[45%] lg:w-auto snap-center relative overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-t-3xl" />
                  <div className="relative w-20 h-20 rounded-full flex items-center justify-center shrink-0 mb-4 ring-4 ring-white shadow-md overflow-hidden mt-3 bg-gray-150">
                    <img
                      src={expert.img || "/assets/media/avatars/blank.png"}
                      alt={expert.name}
                      onError={(e) => { (e.target as HTMLImageElement).src = "/assets/media/avatars/blank.png"; }}
                      className="w-full h-full object-cover object-center bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col items-center flex-1 min-w-0 w-full text-center">
                    <h3 className="font-extrabold text-[#0f1b3d] text-[14px] mb-1 tracking-tight truncate w-full">{expert.name}</h3>
                    <span className="text-[9px] font-extrabold text-indigo-600 bg-indigo-50/70 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">{expert.role}</span>
                    <div className="space-y-0.5 mb-3 text-center">
                      <p className="text-[10px] font-extrabold text-[#3f159a]">{expert.qual}</p>
                      <p className="text-[9px] text-gray-500 font-bold">{expert.exp} Experience</p>
                    </div>
                    <div className="flex items-center gap-1.5 justify-center mb-3">
                      <div className="flex text-yellow-400 text-[10px]">★★★★★</div>
                      <span className="text-[#0f1b3d] text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-700">{expert.rating || 4.8}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1 w-full pt-3 border-t border-gray-100 mt-auto text-left">
                      <div>
                        <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wide m-0">Orders</p>
                        <p className="text-[10px] font-black text-slate-800 m-0">{expert.orders}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wide m-0">Success Rate</p>
                        <p className="text-[10px] font-black text-emerald-600 m-0">99%</p>
                      </div>
                    </div>
                    <Link href="#quote-form" className="btn-shutter-blue-close block w-full py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-widest text-center transition-colors duration-250 cursor-pointer mt-3">
                      Hire Expert
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex md:hidden justify-center gap-2 mt-6">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3f159a]" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY STUDENTS CHOOSE SECTION */}
      <section className="py-8 md:py-10 bg-white border-b border-gray-50">
        <div className="max-w-[1250px] mx-auto px-4">
          <h2 className="text-[22px] md:text-[26px] font-[900] text-[#0f1b3d] text-center mb-10 tracking-tight font-heading">
            Why Students Choose Our {cityName} Assignment Help?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {choiceFeatures.map((feature, idx) => (
              <div key={idx} className="bg-[#faf9fe] rounded-2xl p-5 border border-gray-100/50 hover:shadow-lg hover:-translate-y-1 duration-300 text-left flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#3f159a] shadow-sm shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-[13px] font-[900] text-[#0f1b3d] whitespace-pre-line leading-tight tracking-tight">{feature.title}</h3>
                <p className="text-[11px] text-gray-500 whitespace-pre-line leading-relaxed m-0">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="bg-gradient-to-r from-[#3f159a] to-[#6c2bd9] py-8 px-4">
        <div className="max-w-[1250px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h2 className="text-[22px] md:text-[26px] text-purple-200 font-[900] tracking-tight font-heading mb-1">
                All Services Include
              </h2>
              <p className="text-purple-200 text-xs font-medium">
                Premium quality inclusions with every order — no hidden charges.
              </p>
            </div>
            <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
              {promoInclusions.map((item, idx) => (
                <div key={idx} className={`${item.visibility} flex-col items-center gap-1.5 text-center text-white`}>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-bold whitespace-pre-line leading-tight uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-10 md:py-14 bg-white border-b border-gray-50">
        <div className="max-w-[1250px] mx-auto px-4">
          <h2 className="text-[22px] md:text-[26px] font-[900] text-[#0f1b3d] text-center mb-10 tracking-tight font-heading">
            Benefits of Our {cityName} Assignment Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-[#faf9fe] hover:shadow-lg hover:-translate-y-0.5 duration-300">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                  {benefit.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[14px] font-[900] text-[#0f1b3d] tracking-tight">{benefit.title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed m-0">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#0f1b3d] py-12 md:py-16 px-4 text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[22px] md:text-[28px] font-[900] text-white tracking-tight font-heading mb-3">
            Guaranteed Academic Excellence in {cityName}
          </h2>
          <p className="text-blue-100/70 text-sm md:text-[15px] max-w-xl mx-auto mb-8">
            Consult with our local specialists to structure your coursework, case studies, or complete dissertation proposal models to meet university standards.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="#quote-form"
              className="btn-shutter-orange-open text-white font-extrabold py-3.5 px-8 rounded-lg text-[11px] tracking-wider uppercase shadow-lg flex items-center justify-center gap-2 cursor-pointer border-none"
            >
              Get Instant Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://wa.me/447466847847"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-heading font-semibold rounded-lg transition-all duration-200 px-7 py-3.5 text-[11px] bg-green-600 hover:bg-green-700 text-white gap-2 shadow-md hover:shadow-lg active:scale-95 uppercase tracking-wider font-extrabold"
            >
              Whatsapp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
