import Link from "next/link";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { experiences, getFeaturedExperiences } from "@/data/experiences";

const stats = [
  { label: "Archived experiences", value: experiences.length.toString() },
  { label: "Core categories", value: "3" },
  { label: "Current focus", value: "Frontend" },
];

export default function Home() {
  const featuredExperiences = getFeaturedExperiences();

  return (
    <main>
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-24">
          <FadeIn className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Developer Experience Archive
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-normal text-zinc-950 sm:text-5xl lg:text-6xl">
              결과물 너머의 문제 해결 과정을 기록합니다.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              프로젝트의 배경, 기술적 의사결정, 시행착오, 회고를 한곳에
              정리하는 개인 개발자 아카이브입니다. 이력서에 다 담기 어려운
              맥락을 경험 단위로 보여줍니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/experiences"
                className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
              >
                경험 둘러보기
              </Link>
              <a
                href="#featured"
                className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-300 px-5 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-100"
              >
                대표 기록 보기
              </a>
            </div>
          </FadeIn>

          <FadeIn
            delay={0.08}
            className="grid content-start gap-3 sm:grid-cols-3 lg:grid-cols-1"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-zinc-200 bg-zinc-50 p-5"
              >
                <p className="text-2xl font-semibold text-zinc-950">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-700">
              Featured Experiences
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-950 sm:text-3xl">
              먼저 보여줄 기록
            </h2>
          </div>
          <Link
            href="/experiences"
            className="text-sm font-semibold text-zinc-700 transition-colors hover:text-zinc-950"
          >
            전체 보기
          </Link>
        </FadeIn>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {featuredExperiences.map((experience, index) => (
            <FadeIn key={experience.slug} delay={index * 0.06}>
              <ExperienceCard experience={experience} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <FadeIn className="grid gap-5 md:grid-cols-3">
            {["Project", "Problem Solving", "Retrospective"].map((category) => (
              <div
                key={category}
                className="rounded-lg border border-zinc-200 bg-white p-6"
              >
                <h3 className="text-base font-semibold text-zinc-950">
                  {category}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {category === "Project"
                    ? "무엇을 만들었는지보다 왜 그렇게 만들었는지를 정리합니다."
                    : category === "Problem Solving"
                      ? "버그, 성능, 구조 문제를 어떻게 좁혀갔는지 기록합니다."
                      : "협업과 학습 과정에서 남은 판단 기준을 회고합니다."}
                </p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
