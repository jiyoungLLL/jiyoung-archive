import type { Metadata } from "next";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/Stagger";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Experiences | Jiyoung Archive",
  description: "프로젝트, 문제 해결, 회고 기록 목록",
};

const categories = ["Project", "Problem Solving", "Retrospective"];

export default function ExperiencesPage() {
  return (
    <PageTransition>
      <section className="archive-surface paper-grid border-b border-zinc-200/80">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <StaggerContainer className="max-w-3xl">
            <StaggerItem>
              <p className="inline-flex rounded-full bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800 ring-1 ring-emerald-100 shadow-sm">
                Experiences
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-6 text-4xl font-semibold tracking-normal text-zinc-950 sm:text-5xl">
                경험을 노트처럼 넘겨보기
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">
                프로젝트, 문제 해결 과정, 회고를 하나의 기록 카드로 모았습니다.
                각 카드는 맥락과 판단의 흐름을 따라 상세 페이지로 이어집니다.
              </p>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="mt-9 grid gap-3 sm:grid-cols-3">
            {categories.map((category) => (
              <StaggerItem key={category}>
                <div className="rounded-3xl border border-white/80 bg-white/72 p-5 shadow-[0_14px_38px_rgba(24,24,27,0.07)] backdrop-blur">
                  <p className="text-sm font-medium text-zinc-600">
                    {category}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-zinc-950">
                    {
                      experiences.filter(
                        (experience) => experience.category === category,
                      ).length
                    }
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <FadeIn className="mb-8 flex flex-col gap-2">
          <p className="text-sm font-semibold text-emerald-700">
            Archive Cards
          </p>
          <h2 className="text-3xl font-semibold tracking-normal text-zinc-950">
            최근에 정리한 경험들
          </h2>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((experience) => (
            <StaggerItem key={experience.slug}>
              <ExperienceCard experience={experience} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </PageTransition>
  );
}
