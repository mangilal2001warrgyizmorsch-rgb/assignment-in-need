/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Star, ShieldCheck, Award, Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { Heading } from "./Heading";

export interface ExpertCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  rating?: number;
  ordersCount: number | string;
  avatar: string;
  experience?: string;
  qualifications?: string;
  expertise?: string[];
  variant?: "default" | "directory" | "subject";
  onHire?: () => void;
}

export const ExpertCard: React.FC<ExpertCardProps> = ({
  className,
  name,
  role,
  rating = 4.9,
  ordersCount,
  avatar,
  experience,
  qualifications,
  expertise,
  variant = "default",
  onHire,
  ...props
}) => {
  const isDirectoryVariant = variant === "directory";

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onHire) {
      onHire();
      return;
    }
    // Default fallback: scroll to quote-form if present, otherwise navigate to /order
    const quoteForm = document.getElementById("quote-form");
    if (quoteForm) {
      quoteForm.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/order";
    }
  };

  if (isDirectoryVariant) {
    // Directory listing layout matching screenshots (circular photo, expertise tags, qualifications, info tags, outline button)
    return (
      <Card hoverEffect={true} className={cn("p-5 gap-4 bg-white border border-primary-100/50 flex flex-col justify-between text-left", className)} {...props}>
        <CardHeader className="p-0 flex items-start gap-4">
          <div className="relative w-16 h-16 rounded-full bg-primary-50 border-2 border-primary-100 flex items-center justify-center shrink-0 overflow-hidden">
            {avatar.length <= 3 ? (
              <span className="font-heading font-extrabold text-base text-primary-700 uppercase">{avatar}</span>
            ) : (
              <img src={avatar} alt={name} width={64} height={64} className="w-full h-full object-cover" />
            )}
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow-sm border border-primary-100">
              <ShieldCheck className="w-3.5 h-3.5 text-success fill-success/10" />
            </div>
          </div>

          <div className="flex flex-col gap-1 min-w-0">
            <Heading level={3} className="text-base md:text-lg leading-tight truncate">{name}</Heading>
            <Badge variant="soft-purple" className="text-[10px] py-0.5 px-2 w-fit">{role}</Badge>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="flex items-center gap-0.5 text-warning shrink-0">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-bold text-text-heading text-xs ml-0.5">{rating.toFixed(1)}</span>
              </div>
              <span className="text-[10px] text-text-muted font-bold">•</span>
              <span className="text-xs text-text-muted shrink-0">{ordersCount} Orders completed</span>
            </div>
          </div>
        </CardHeader>

        <CardBody className="p-0 flex flex-col gap-3 border-t border-dashed border-primary-50 pt-4">
          {expertise && expertise.length > 0 && (
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-text-muted font-extrabold uppercase tracking-wider">Expertise</span>
              <p className="text-xs text-text-body leading-relaxed line-clamp-2">
                {expertise.join(", ")}
              </p>
            </div>
          )}
          {qualifications && (
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-text-muted font-extrabold uppercase tracking-wider">Qualifications</span>
              <p className="text-xs text-text-heading font-bold flex items-center gap-1.5">
                <Award className="w-4 h-4 text-primary-500 shrink-0" />
                <span>{qualifications}</span>
              </p>
            </div>
          )}
        </CardBody>

        <CardFooter className="p-0 w-full mt-2">
          <Button variant="orangeOpen" size="sm" fullWidth={true} onClick={onHire}>
            Hire Now
          </Button>
        </CardFooter>
      </Card>
    );
  }

  // Premium expert card design with grey top header and clean layout for subject and default variants
  const formattedRating = typeof rating === "number" ? rating.toFixed(1) : parseFloat(String(rating)).toFixed(1);
  const expText = experience ? (experience.includes("Exp.") ? experience : `${experience} Exp.`) : "8+ Years Exp.";

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-slate-100 flex flex-col shadow-[0_8px_25px_rgba(0,0,0,0.03)] duration-300 flex-none w-full snap-center relative overflow-hidden text-left hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {/* Top Image Container with off-white/light-grey background */}
      <div className="w-full h-[220px] bg-[#f0f0f0] flex items-center justify-center relative overflow-hidden">
        {avatar.length <= 3 ? (
          <div className="w-full h-full flex items-center justify-center font-heading font-extrabold text-2xl text-primary-700 uppercase bg-primary-50">
            {avatar}
          </div>
        ) : (
          <img
            src={avatar}
            alt={name}
            width={280}
            height={220}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/assets/media/avatars/blank.png";
            }}
            className="h-full w-full object-cover object-top"
          />
        )}
      </div>

      {/* Body Content */}
      <div className="p-4 flex flex-col gap-1.5 flex-1 justify-between">
        <div>
          <h3 className="font-extrabold text-[15px] text-gray-900 m-0 leading-snug truncate">
            {name}
          </h3>
          <p className="text-[12px] text-slate-700 font-semibold m-0 mt-0.5 leading-snug truncate">
            {role}
          </p>
          {qualifications && (
            <p className="text-[11px] text-gray-500 font-medium m-0 mt-0.5 leading-snug truncate">
              {qualifications}
            </p>
          )}
          <p className="text-[11px] text-gray-500 font-semibold m-0 mt-0.5 leading-snug">
            {expText}
          </p>

          {/* Rating & Orders Row */}
          <div className="flex items-center gap-1.5 mt-2">
            <svg
              className="w-[13px] h-[13px] text-amber-500 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z" />
            </svg>
            <span className="text-[12px] font-bold text-amber-600">
              {formattedRating}
            </span>
            <span className="text-[11px] text-gray-400 font-medium ml-1">
              ({ordersCount} Orders)
            </span>
          </div>
        </div>

        <div className="w-full mt-3.5">
          <Button
            variant="blueClose"
            fullWidth
            size="sm"
            className="text-[12px] font-extrabold uppercase tracking-widest text-center"
            onClick={handleButtonClick}
          >
            {`Hire ${name.split(" ")[0]}`}
          </Button>
        </div>
      </div>
    </div>
  );
};
ExpertCard.displayName = "ExpertCard";
