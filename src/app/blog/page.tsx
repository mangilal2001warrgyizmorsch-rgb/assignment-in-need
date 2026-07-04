"use client";

import React from "react";
import Image from "next/image";
import { BlogSection } from "@/components/ui/BlogSection";
import { BLOG_POSTS } from "@/lib/data";
import { SectionContainer } from "@/components/ui/SectionContainer";

export default function BlogPage() {
  return (
    <div className="bg-white">
      <section className="relative">
        <div className="w-full h-48 md:h-60 lg:h-72 relative">
          <Image src="/assets/bg/blog-bg.png" alt="Blogs" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">BLOGS : ASSIGNMENT IN NEED</h1>
          </div>
        </div>
      </section>

      <SectionContainer className="-mt-24 auto-container1">
        <BlogSection posts={BLOG_POSTS} />
        <div className="text-center mt-8">
          <a className="show-more-btn" href="#">Show More</a>
        </div>
      </SectionContainer>
    </div>
  );
}
