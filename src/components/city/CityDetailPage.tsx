"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { mapExpertToWriter } from "@/lib/api";


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
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ExpertCard } from "@/components/ui/ExpertCard";
import { QuoteForm } from "@/components/ui/QuoteForm";

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

  // Dynamic experts & page data
  const [expertsList, setExpertsList] = useState<any[]>([]);
  const [pageData, setPageData] = useState<any>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCityPageData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/city-pages/${citySlug}`);
        if (res.ok) {
          const result = await res.json();
          if (result.success && result.data) {
            if (result.data.page) {
              setPageData(result.data.page);
            }
            if (Array.isArray(result.data.experts) && result.data.experts.length > 0) {
              const mapped = result.data.experts.map((item: any) => {
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
              setExpertsList(mapped);
              return;
            }
          }
        }

        // Fallback: fetch general experts if no city experts returned
        const expRes = await fetch("/api/experts");
        if (expRes.ok) {
          const result = await expRes.json();
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
        console.warn("Failed to fetch data for city page:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCityPageData();
  }, [slug, citySlug, cityName]);

  useEffect(() => {
    if (pageData?.meta_title) {
      document.title = pageData.meta_title;
    } else {
      document.title = `${cityName} Assignment Help UK | Top Experts in ${cityName}`;
    }

    const descText =
      pageData?.meta_description ||
      `Need assignment help in ${cityName}? Get top-rated academic writing support from expert writers in ${cityName}, ${countryName}. 100% plagiarism free & on-time.`;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", descText);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", descText);
      document.head.appendChild(metaDesc);
    }

    let robotsTag = document.querySelector('meta[name="robots"]');
    if (robotsTag) {
      robotsTag.setAttribute("content", "index, follow, max-image-preview:large");
    } else {
      robotsTag = document.createElement("meta");
      robotsTag.setAttribute("name", "robots");
      robotsTag.setAttribute("content", "index, follow, max-image-preview:large");
      document.head.appendChild(robotsTag);
    }
  }, [cityName, countryName, pageData]);



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
                {pageData?.hero_heading ? (
                  pageData.hero_heading
                ) : (
                  <>
                    Expert {cityName} Assignment Help
                    <br />
                    <span className="text-[#ea580c] block mt-1.5">You Can Rely On</span>
                  </>
                )}
              </h1>

              {/* Description */}
              <p className="text-gray-600 w-full max-w-[450px] text-sm md:text-[15px] font-semibold leading-relaxed mb-6 line-clamp-4">
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
              <QuoteForm prefilledSubject={`${cityName} Assignment Help`} />
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
                <ExpertCard
                  key={expert.id || i}
                  name={expert.name}
                  role={expert.role}
                  rating={expert.rating}
                  ordersCount={expert.orders}
                  avatar={expert.img || "/assets/media/avatars/blank.png"}
                  experience={expert.exp}
                  qualifications={expert.qual}
                  variant="subject"
                  className="w-[265px] sm:w-[45%] lg:w-auto shrink-0"
                />
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
                <p className="text-[15px] text-gray-500 whitespace-pre-line leading-relaxed m-0">{feature.desc}</p>
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
                  <p className="text-[15px] text-gray-500 leading-relaxed m-0">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      {Array.isArray(pageData?.faqs) && pageData.faqs.length > 0 && (
        <section className="py-10 md:py-14 bg-[#faf9fe] border-b border-gray-50">
          <div className="max-w-[900px] mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-[22px] md:text-[28px] font-[900] text-[#0f1b3d] tracking-tight font-heading mb-2">
                Frequently Asked Questions ({cityName})
              </h2>
              <p className="text-xs text-gray-500 font-medium">
                Everything you need to know about our assignment services in {cityName}.
              </p>
            </div>
            <div className="space-y-3">
              {pageData.faqs.map((faq: any, idx: number) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-150 rounded-xl overflow-hidden shadow-sm transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-[#0f1b3d] text-sm md:text-base hover:bg-gray-50/50 transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2.5">
                        <HelpCircle className="w-4 h-4 text-[#3f159a] shrink-0" />
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#3f159a]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/30">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

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
