import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-zinc-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold text-zinc-950">
          Jiyoung Archive
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
