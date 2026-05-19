"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  as?: "div" | "section" | "article" | "aside" | "li";
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function FadeIn({
  as = "div",
  children,
  className,
  delay = 0,
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
