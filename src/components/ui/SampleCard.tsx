"use client";

import React from "react";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { Heading } from "./Heading";
import { cn } from "@/lib/utils";

interface SampleCardProps {
  title: string;
  subject: string;
  image: string;
  href: string;
  className?: string;
}

export const SampleCard: React.FC<SampleCardProps> = ({
  title,
  subject,
  image,
  href,
  className,
}) => {
  return (
    <Card
      hoverEffect={true}
      className={cn(
        "p-0 overflow-hidden border border-primary-100/50 flex flex-col group/card h-full bg-white",
        className
      )}
    >
      <div className="relative h-48 bg-primary-50 overflow-hidden border-b border-primary-50 shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          width={300}
          height={192}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
        />
        
        {/* PDF indicator badge */}
        <div className="absolute top-3 right-3 bg-red-600 text-white font-heading font-extrabold text-[10px] px-2 py-0.5 rounded flex items-center gap-1 shadow-sm uppercase">
          <FileText className="w-3 h-3 fill-white/10" />
          PDF
        </div>

        {/* Subject pill */}
        <div className="absolute bottom-3 left-3">
          <Badge variant="soft-purple" className="shadow-sm">
            {subject}
          </Badge>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-4 justify-between">
        <Heading level={4} className="text-sm md:text-base leading-snug line-clamp-2 group-hover/card:text-primary-700 transition-colors">
          {title}
        </Heading>
        
        <Link href={href} className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 group-hover/card:text-accent-600 mt-auto w-fit group/link link-slide-hover">
          View Free Sample
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
};
SampleCard.displayName = "SampleCard";
