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

const DEFAULT_BLANK_AVATAR = "/assets/media/avatars/blank.png";

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
  const [imgSrc, setImgSrc] = React.useState<string>(() => {
    if (
      avatar &&
      avatar.length > 3 &&
      (avatar.startsWith("/") || avatar.startsWith("http")) &&
      !avatar.includes("blank.png") &&
      !avatar.includes("ui-avatars.com")
    ) {
      return avatar;
    }
    return DEFAULT_BLANK_AVATAR;
  });

  React.useEffect(() => {
    if (
      avatar &&
      avatar.length > 3 &&
      (avatar.startsWith("/") || avatar.startsWith("http")) &&
      !avatar.includes("blank.png") &&
      !avatar.includes("ui-avatars.com")
    ) {
      setImgSrc(avatar);
    } else {
      setImgSrc(DEFAULT_BLANK_AVATAR);
    }
  }, [avatar]);

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

  // Premium home page expert card design for all variants
  const formattedRating = typeof rating === "number" ? rating.toFixed(1) : parseFloat(String(rating) || "4.9").toFixed(1);
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
        <img
          src={imgSrc}
          alt={name}
          width={280}
          height={220}
          onError={() => setImgSrc(DEFAULT_BLANK_AVATAR)}
          className="h-full w-full object-cover object-top"
        />
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
