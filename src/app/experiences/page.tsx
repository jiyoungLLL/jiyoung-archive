import type { Metadata } from "next";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Experiences | Jiyoung Archive",
  description: "프로젝트, 문제 해결, 회고 기록 목록",
};

export default function ExperiencesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
      <FadeIn className="max-w-3xl">
        <p className="text-sm font-semibold text-emerald-700">Experiences</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950 sm:text-4xl">
          경험 목록
        </h1>
        <p className="mt-4 text-base leading-8 text-zinc-600">
          프로젝트, 문제 해결 과정, 회고를 하나의 경험 단위로 모았습니다.
          각 기록은 맥락, 문제, 접근 방식, 결과와 배운 점을 중심으로
          구성됩니다.
        </p>
      </FadeIn>

      <FadeIn className="mt-8 grid gap-3 sm:grid-cols-3">
        {["Project", "Problem Solving", "Retrospective"].map((category) => (
          <div
            key={category}
            className="rounded-lg border border-zinc-200 bg-white p-4"
          >
            <p className="text-sm font-medium text-zinc-600">{category}</p>
            <p className="mt-2 text-2xl font-semibold text-zinc-950">
              {
                experiences.filter(
                  (experience) => experience.category === category,
                ).length
              }
            </p>
          </div>
        ))}
      </FadeIn>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {experiences.map((experience, index) => (
          <FadeIn key={experience.slug} delay={index * 0.05}>
            <ExperienceCard experience={experience} />
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
