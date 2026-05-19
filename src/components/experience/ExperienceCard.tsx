"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { Experience } from "@/data/experiences";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.01,
            }
      }
      transition={{ type: "spring", stiffness: 360, damping: 28 }}
      className="group h-full rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-zinc-300 sm:p-6"
    >
      <Link
        href={`/experiences/${experience.slug}`}
        className="flex h-full flex-col"
      >
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
            {experience.category}
          </span>
          <span className="text-xs font-medium text-zinc-500">
            {experience.period}
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold leading-7 text-zinc-950 sm:text-xl">
            {experience.title}
          </h3>
          <p className="text-sm leading-6 text-zinc-600">
            {experience.subtitle}
          </p>
        </div>

        <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-700">
          {experience.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-7 text-sm font-semibold text-zinc-950">
          <span className="border-b border-transparent transition-colors group-hover:border-zinc-950">
            자세히 보기
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
