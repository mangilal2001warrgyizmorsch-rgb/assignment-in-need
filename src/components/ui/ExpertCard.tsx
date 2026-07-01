/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Star, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import { Button } from "./Button";
import { Badge } from "./Badge";

export interface ExpertCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  rating?: number;
  ordersCount: number | string;
  avatar: string;
  onHire?: () => void;
}

export const ExpertCard: React.FC<ExpertCardProps> = ({
  className,
  name,
  role,
  rating = 4.9,
  ordersCount,
  avatar,
  onHire,
  ...props
}) => {
  return (
    <Card hoverEffect={true} className={cn("text-center items-center p-5 gap-3", className)} {...props}>
      <CardHeader className="items-center flex flex-col gap-2">
        <div className="relative w-20 h-20 rounded-full bg-primary-50 border-2 border-primary-100/50 flex items-center justify-center overflow-hidden">
          {avatar.length <= 3 ? (
            <span className="font-heading font-extrabold text-xl text-primary-700 uppercase">{avatar}</span>
          ) : (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          )}
          <div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow-sm border border-primary-100">
            <ShieldCheck className="w-4 h-4 text-success fill-success/10" />
          </div>
        </div>

        <div className="flex flex-col items-center mt-2 gap-1">
          <h3 className="font-heading font-bold text-lg text-text-heading leading-tight">{name}</h3>
          <Badge variant="soft-purple" className="text-[10px] py-0.5 px-2">{role}</Badge>
        </div>
      </CardHeader>
      
      <CardBody className="flex flex-col items-center justify-center gap-1 py-1">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-warning text-warning" />
          <span className="font-heading font-bold text-sm text-text-heading">{rating.toFixed(1)}</span>
          <span className="text-xs text-text-muted">(Star Rating)</span>
        </div>
        <span className="text-sm font-semibold text-text-body">
          {ordersCount} Orders Completed
        </span>
      </CardBody>
      
      <CardFooter className="w-full mt-1">
        <Button variant="outline" size="sm" fullWidth={true} onClick={onHire}>
          Hire This Expert
        </Button>
      </CardFooter>
    </Card>
  );
};
ExpertCard.displayName = "ExpertCard";
