import Link from "next/link";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/Stagger";
import { experiences, getFeaturedExperiences } from "@/data/experiences";

const stats = [
  { label: "기록된 경험", value: experiences.length.toString() },
  { label: "기록 갈래", value: "3" },
  { label: "현재 초점", value: "Frontend" },
];

const categories = [
  {
    title: "Project Notes",
    description: "만든 결과보다, 그렇게 만들게 된 판단의 흔적을 남깁니다.",
  },
  {
    title: "Problem Logs",
    description: "버그와 성능 이슈를 좁혀간 과정을 다시 읽을 수 있게 정리합니다.",
  },
  {
    title: "Retrospectives",
    description: "협업과 학습 이후에 남은 기준, 다음에 다르게 할 일을 기록합니다.",
  },
];

export default function Home() {
  const featuredExperiences = getFeaturedExperiences();

  return (
    <PageTransition>
      <section className="archive-surface paper-grid overflow-hidden border-b border-zinc-200/80">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-24">
          <StaggerContainer className="max-w-3xl">
            <StaggerItem>
              <p className="inline-flex rounded-full bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800 ring-1 ring-emerald-100 shadow-sm">
                Developer Experience Archive
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-6 text-4xl font-semibold tracking-normal text-zinc-950 sm:text-5xl lg:text-6xl">
                완성된 화면보다 오래 남는 기록.
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
                프로젝트의 배경, 시행착오, 기술적 선택, 회고를 조용히 쌓아가는
                개인 개발자 아카이브입니다. 빠르게 지나간 문제 해결의 순간을
                다시 꺼내 볼 수 있는 노트처럼 구성했습니다.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/experiences"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(24,24,27,0.18)] transition-all hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-[0_16px_34px_rgba(24,24,27,0.22)]"
                >
                  경험 노트 열기
                </Link>
                <a
                  href="#featured"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white/75 px-6 text-sm font-semibold text-zinc-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white"
                >
                  대표 기록 보기
                </a>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer
            delay={0.18}
            className="grid content-start gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="rounded-3xl border border-white/80 bg-white/72 p-5 shadow-[0_18px_45px_rgba(24,24,27,0.08)] backdrop-blur">
                  <p className="text-3xl font-semibold text-zinc-950">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section
        id="featured"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-700">
              Featured Notes
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-normal text-zinc-950 sm:text-4xl">
              먼저 펼쳐볼 기록
            </h2>
          </div>
          <Link
            href="/experiences"
            className="inline-flex w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm ring-1 ring-zinc-200 transition-all hover:-translate-y-0.5 hover:text-zinc-950"
          >
            전체 노트 보기
          </Link>
        </FadeIn>

        <StaggerContainer className="mt-9 grid gap-6 md:grid-cols-2">
          {featuredExperiences.map((experience) => (
            <StaggerItem key={experience.slug}>
              <ExperienceCard experience={experience} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="border-y border-zinc-200/80 bg-white/70">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <StaggerItem key={category.title}>
                <div className="h-full rounded-3xl border border-zinc-200/80 bg-gradient-to-b from-white to-amber-50/40 p-6 shadow-sm">
                  <div className="mb-5 h-2 w-12 rounded-full bg-emerald-300" />
                  <h3 className="text-xl font-semibold text-zinc-950">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {category.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  );
}
