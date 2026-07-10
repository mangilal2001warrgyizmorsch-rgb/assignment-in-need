"use client";

import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                 */
/* ------------------------------------------------------------------ */

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

/* ------------------------------------------------------------------ */
/*  AnimateIn — scroll-triggered reveal wrapper                        */
/* ------------------------------------------------------------------ */

interface AnimateInProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
  id?: string;
  style?: React.CSSProperties;
}

export function AnimateIn({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.5,
  once = true,
  className,
  id,
  style,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      id={id}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  StaggerContainer + StaggerItem — staggered grid/list reveals       */
/* ------------------------------------------------------------------ */

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  stagger?: number;
  id?: string;
  style?: React.CSSProperties;
}

export function StaggerContainer({
  children,
  className,
  once = true,
  stagger = 0.08,
  id,
  style,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-40px 0px" });

  const containerVars: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVars}
      className={className}
      id={id}
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export function StaggerItem({ children, className, id, style }: StaggerItemProps) {
  return (
    <motion.div variants={staggerItemVariants} className={className} id={id} style={style}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  HoverLift — card hover micro-interaction wrapper                   */
/* ------------------------------------------------------------------ */

interface HoverLiftProps {
  children: React.ReactNode;
  className?: string;
  y?: number;
}

export function HoverLift({ children, className, y = -4 }: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y, transition: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
