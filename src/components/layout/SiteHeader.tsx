import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/70 bg-zinc-50/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-full bg-white/80 px-3 py-1.5 text-sm font-semibold text-zinc-950 shadow-sm ring-1 ring-zinc-200/70 transition-transform hover:-translate-y-0.5"
        >
          Jiyoung Archive
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-zinc-600 transition-all hover:-translate-y-0.5 hover:bg-white/80 hover:text-zinc-950 hover:shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
