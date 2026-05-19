export type ExperienceCategory =
  | "Project"
  | "Problem Solving"
  | "Retrospective";

export type Experience = {
  slug: string;
  title: string;
  subtitle: string;
  category: ExperienceCategory;
  period: string;
  role: string;
  summary: string;
  tags: string[];
  featured: boolean;
  metrics: {
    label: string;
    value: string;
  }[];
  context: string;
  challenge: string;
  approach: string[];
  result: string[];
  reflection: string;
};

export const experiences: Experience[] = [
  {
    slug: "archive-platform-redesign",
    title: "개발 경험 아카이브 설계",
    subtitle: "프로젝트 결과보다 문제 해결 흐름을 먼저 보여주는 개인 웹사이트",
    category: "Project",
    period: "2026.04 - 2026.05",
    role: "Frontend Developer",
    summary:
      "이력서에 담기 어려운 의사결정, 시행착오, 회고를 구조화해서 보여주는 개발자 경험 아카이브를 설계했습니다.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Information Architecture"],
    featured: true,
    metrics: [
      { label: "Pages", value: "3 core" },
      { label: "Content Model", value: "Typed data" },
      { label: "Motion", value: "Reduced safe" },
    ],
    context:
      "일반적인 포트폴리오 페이지는 완성된 결과와 기술 스택만 강조하기 쉬웠습니다. 이 사이트는 프로젝트의 배경, 문제 정의, 해결 과정, 회고를 같은 비중으로 다루는 아카이브를 목표로 했습니다.",
    challenge:
      "초기부터 블로그, CMS, Contact Form까지 모두 붙이면 구조가 무거워질 수 있었습니다. 먼저 라우팅, 카드 레이아웃, 상세 페이지의 정보 구조를 안정적으로 잡는 것이 중요했습니다.",
    approach: [
      "경험 데이터를 별도 TypeScript 파일로 분리해 UI와 콘텐츠의 경계를 만들었습니다.",
      "목록과 상세 페이지에서 같은 데이터를 재사용하도록 slug 기반 라우팅을 구성했습니다.",
      "애니메이션은 섹션 진입과 카드 hover에만 제한해 긴 글 읽기를 방해하지 않도록 했습니다.",
    ],
    result: [
      "Home, Experience List, Experience Detail의 기본 사용자 흐름을 완성했습니다.",
      "모바일, 태블릿, 데스크톱에서 카드 그리드와 상세 레이아웃이 자연스럽게 바뀌도록 구성했습니다.",
      "추후 MDX나 CMS로 전환해도 콘텐츠 모델을 유지할 수 있는 형태로 정리했습니다.",
    ],
    reflection:
      "개인 개발자 사이트는 화려한 첫 화면보다 꾸준히 기록을 쌓을 수 있는 구조가 더 중요합니다. 작은 정적 데이터 모델에서 시작하면, 글이 늘어난 뒤 필요한 기능을 근거 있게 추가할 수 있습니다.",
  },
  {
    slug: "api-latency-debugging",
    title: "API 응답 지연 분석",
    subtitle: "느린 화면 전환의 원인을 요청 흐름과 캐싱 경계에서 추적",
    category: "Problem Solving",
    period: "2026.02",
    role: "Frontend Engineer",
    summary:
      "사용자가 느끼는 화면 지연을 단순 렌더링 문제가 아니라 API 호출 순서와 캐시 정책 문제로 재정의해 개선 방향을 도출했습니다.",
    tags: ["Performance", "Caching", "Debugging", "UX"],
    featured: true,
    metrics: [
      { label: "Focus", value: "Latency" },
      { label: "Scope", value: "Client flow" },
      { label: "Output", value: "Action plan" },
    ],
    context:
      "특정 상세 화면에서 전환 직후 빈 상태가 오래 보이는 문제가 있었습니다. 초기 가설은 컴포넌트 렌더링 비용이었지만, 실제 체감 지연은 데이터 요청 순서에서 크게 발생했습니다.",
    challenge:
      "문제가 여러 레이어에 걸쳐 있어 하나의 수치만으로 병목을 단정하기 어려웠습니다. 사용자가 기다리는 구간과 시스템이 실제로 일하는 구간을 분리해서 봐야 했습니다.",
    approach: [
      "화면 진입부터 주요 데이터 표시까지의 이벤트를 단계별로 기록했습니다.",
      "중복 요청과 직렬 요청을 분리해 캐싱 가능한 데이터와 매번 새로 받아야 하는 데이터를 나눴습니다.",
      "로딩 UI는 단순 스피너 대신 이전 데이터와 skeleton을 조합하는 방향으로 정리했습니다.",
    ],
    result: [
      "렌더링 최적화보다 요청 구조 개선이 우선이라는 결론을 얻었습니다.",
      "캐시 키, 재검증 기준, fallback UI를 함께 다루는 개선안을 만들었습니다.",
      "성능 이슈를 사용자 흐름 기준으로 설명할 수 있게 되었습니다.",
    ],
    reflection:
      "성능 문제는 코드의 빠르기만으로 설명되지 않습니다. 사용자가 어느 순간에 막힌다고 느끼는지 먼저 정의해야, 측정과 개선도 흔들리지 않습니다.",
  },
  {
    slug: "first-team-retrospective",
    title: "첫 팀 프로젝트 회고",
    subtitle: "기능 구현보다 합의 비용과 인터페이스 설계가 중요했던 경험",
    category: "Retrospective",
    period: "2025.12",
    role: "Frontend Lead",
    summary:
      "팀 프로젝트에서 컴포넌트 역할, API 응답 형태, 일정 공유 방식이 결과물의 품질에 어떤 영향을 주는지 회고했습니다.",
    tags: ["Collaboration", "Frontend Architecture", "Retrospective"],
    featured: false,
    metrics: [
      { label: "Team", value: "4 people" },
      { label: "Duration", value: "6 weeks" },
      { label: "Learning", value: "Process" },
    ],
    context:
      "처음에는 각자 맡은 화면을 빠르게 구현하는 방식으로 진행했습니다. 하지만 화면 간 상태와 API 응답 형태가 맞물리면서 뒤늦게 조율해야 하는 일이 늘어났습니다.",
    challenge:
      "개발 속도를 높이려면 각자 독립적으로 일해야 했지만, 공통 인터페이스가 부족하면 통합 시점에 더 큰 비용이 발생했습니다.",
    approach: [
      "반복되는 UI 패턴을 공통 컴포넌트로 분리하고 props의 책임을 좁혔습니다.",
      "API 응답 예시를 먼저 공유해 화면 구현 전 데이터 형태를 맞췄습니다.",
      "회의록 대신 결정 사항과 미결정 사항을 짧게 남겨 다음 작업의 기준으로 삼았습니다.",
    ],
    result: [
      "후반부 통합 과정에서 발생하던 상태 불일치 문제를 줄였습니다.",
      "컴포넌트 재사용보다 인터페이스 합의가 먼저라는 점을 체감했습니다.",
      "다음 프로젝트에서는 작업 전 계약을 더 구체적으로 정의해야 한다는 기준을 얻었습니다.",
    ],
    reflection:
      "팀 프로젝트의 병목은 기술 난이도보다 합의되지 않은 경계에서 자주 생깁니다. 좋은 구조는 코드를 나누는 방식이 아니라 사람들이 덜 헷갈리게 일하는 방식까지 포함합니다.",
  },
];

export function getFeaturedExperiences() {
  return experiences.filter((experience) => experience.featured);
}

export function getExperienceBySlug(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}
