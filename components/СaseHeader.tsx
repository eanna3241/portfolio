import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

type CaseHeaderProps = {
  active: "mobile" | "web" | "presentation" | "graphic" | "concept";
};

export function CaseHeader({ active }: CaseHeaderProps) {
  const navItems = [
    { key: "mobile", label: "Mobile", href: "/mobile" },
    { key: "web", label: "Web", href: "/web" },
    { key: "presentation", label: "Presentation", href: "/presentation" },
    { key: "graphic", label: "Graphic", href: "/graphic" },
    { key: "concept", label: "Concept", href: "/concept" },
  ];

  return (
    <>
      <header className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-4 transition-opacity hover:opacity-70"
        >
          <div className="relative h-20 w-20 overflow-hidden md:h-16 md:w-16">
            <Image
              src="/images/profile-avatar.png"
              alt="Аня Егорова"
              fill
              className="object-contain"
              sizes="80px"
              priority
            />
          </div>

          <p className="hidden text-[18px] leading-[100%] tracking-tight text-foreground md:block">
            Аня Егорова
          </p>
        </Link>

        <nav className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={
                item.key === active
                  ? "flex h-12 items-center justify-center rounded-full px-8 text-[18px] font-medium text-white [background:var(--accent-gradient)]"
                  : "flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <SocialLinks />
      </header>

      <div className="-mx-7 overflow-x-auto px-7 md:hidden [&::-webkit-scrollbar]:hidden">
        <nav className="flex w-max gap-3 pb-1">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={
                item.key === active
                  ? "flex h-12 shrink-0 items-center justify-center rounded-full px-7 text-[16px] font-medium text-white [background:var(--accent-gradient)]"
                  : "flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}