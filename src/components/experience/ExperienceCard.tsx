"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { Experience } from "@/data/experiences";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const rotate = experience.category === "Project" ? -0.45 : 0.45;

  return (
    <motion.article
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.02,
              rotate,
            }
      }
      transition={{ type: "spring", stiffness: 360, damping: 28 }}
      className="group relative h-full overflow-hidden rounded-2xl border border-zinc-200/80 soft-paper p-5 shadow-[0_16px_50px_rgba(24,24,27,0.07)] transition-colors hover:border-emerald-200 sm:p-6"
    >
      <div className="absolute left-7 top-0 h-2 w-20 rounded-b-full bg-amber-200/70 shadow-sm" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      <Link
        href={`/experiences/${experience.slug}`}
        className="relative flex h-full flex-col"
      >
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <motion.span
            initial={shouldReduceMotion ? false : { scale: 0.94, y: 2 }}
            whileInView={shouldReduceMotion ? undefined : { scale: 1, y: 0 }}
            whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.06 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
            className="rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200/80"
          >
            {experience.category}
          </motion.span>
          <span className="text-xs font-medium text-zinc-500">
            {experience.period}
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold leading-8 text-zinc-950 sm:text-2xl">
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
              className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-medium text-zinc-600 ring-1 ring-zinc-200/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-7 text-sm font-semibold text-zinc-950">
          <span className="inline-flex items-center gap-1 rounded-full bg-zinc-950 px-4 py-2 text-white shadow-sm transition-shadow group-hover:shadow-md">
            자세히 보기
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
