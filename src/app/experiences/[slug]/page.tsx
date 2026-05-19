import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/motion/FadeIn";
import { experiences, getExperienceBySlug } from "@/data/experiences";

type ExperienceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return experiences.map((experience) => ({
    slug: experience.slug,
  }));
}

export async function generateMetadata({
  params,
}: ExperienceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    return {
      title: "Experience not found | Jiyoung Archive",
    };
  }

  return {
    title: `${experience.title} | Jiyoung Archive`,
    description: experience.summary,
  };
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  return (
    <main>
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <FadeIn>
            <Link
              href="/experiences"
              className="text-sm font-semibold text-zinc-600 transition-colors hover:text-zinc-950"
            >
              ← 경험 목록
            </Link>
            <div className="mt-8 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
                  {experience.category}
                </span>
                <span className="text-sm font-medium text-zinc-500">
                  {experience.period}
                </span>
              </div>
              <h1 className="mt-5 text-3xl font-semibold tracking-normal text-zinc-950 sm:text-5xl">
                {experience.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                {experience.subtitle}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.72fr_0.28fr] lg:px-8">
        <article className="space-y-8">
          <DetailSection title="Context">{experience.context}</DetailSection>
          <DetailSection title="Challenge">{experience.challenge}</DetailSection>
          <DetailList title="Approach" items={experience.approach} />
          <DetailList title="Result" items={experience.result} />
          <DetailSection title="Reflection">
            {experience.reflection}
          </DetailSection>
        </article>

        <FadeIn
          as="aside"
          className="h-fit rounded-lg border border-zinc-200 bg-white p-5 lg:sticky lg:top-24"
        >
          <h2 className="text-sm font-semibold text-zinc-950">Overview</h2>
          <dl className="mt-5 space-y-4">
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
                Role
              </dt>
              <dd className="mt-1 text-sm font-medium text-zinc-900">
                {experience.role}
              </dd>
            </div>
            {experience.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
                  {metric.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-zinc-900">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </main>
  );
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: string;
}) {
  return (
    <FadeIn as="section" className="rounded-lg border border-zinc-200 bg-white p-6">
      <h2 className="text-xl font-semibold text-zinc-950">{title}</h2>
      <p className="mt-4 text-base leading-8 text-zinc-600">{children}</p>
    </FadeIn>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <FadeIn as="section" className="rounded-lg border border-zinc-200 bg-white p-6">
      <h2 className="text-xl font-semibold text-zinc-950">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-8 text-zinc-600">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
