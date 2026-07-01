/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  institution: string;
  quote: string;
  rating?: number;
  avatar?: string;
  featured?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  className,
  name,
  institution,
  quote,
  rating = 5,
  avatar,
  featured = false,
  ...props
}) => {
  return (
    <Card
      hoverEffect={true}
      className={cn(
        featured ? "bg-primary-700 text-white border-primary-600 shadow-xl shadow-primary-700/20" : "bg-white text-text-body",
        className
      )}
      {...props}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <Quote
            className={cn(
              "w-8 h-8 rotate-180",
              featured ? "text-primary-300/40" : "text-primary-100"
            )}
          />
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-4 h-4 fill-current",
                  i < rating ? "text-warning" : "text-primary-100"
                )}
              />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardBody className="pt-2">
        <p className={cn("italic text-base", featured ? "text-white" : "text-text-body")}>
          {"\""}{quote}{"\""}
        </p>
      </CardBody>
      <CardFooter className={cn(
        "gap-3 pt-4 border-t border-dashed",
        featured ? "border-white/10" : "border-primary-100"
      )}>
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm uppercase",
          featured ? "bg-white text-primary-700" : "bg-primary-50 text-primary-700"
        )}>
          {avatar ? (
            avatar.length <= 3 ? (
              avatar
            ) : (
              <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
            )
          ) : (
            name.charAt(0)
          )}
        </div>
        <div className="flex flex-col">
          <span className={cn("font-heading font-bold text-sm", featured ? "text-white" : "text-text-heading")}>
            {name}
          </span>
          <span className={cn("text-xs", featured ? "text-primary-200" : "text-text-muted")}>
            {institution}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};
TestimonialCard.displayName = "TestimonialCard";
