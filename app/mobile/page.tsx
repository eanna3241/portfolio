import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { SocialLinks } from "@/components/SocialLinks";

type MobileCase = {
  title: ReactNode;
  href: string;
  logo: string;
  image: string;
  tags: string[];
};

const mobileCases: MobileCase[] = [
  {
    title: (
      <>
        Редизайн поиска контактов
        <br />
        для карьерного нетворкинга
      </>
    ),
    href: "/mobile/setka",
    logo: "/images/setka-logo.png",
    image: "/images/setka-phone.png",
    tags: [
      "UX Research",
      "JTBD",
      "User Flow",
      "Информационная архитектура",
      "Wireframes",
      "UI Design",
      "Usability",
      "Motion",
    ],
  },
  {
    title: (
      <>
        Проектирование музыкального сервиса —
        <br />
        как воспоминания и личный дневник
      </>
    ),
    href: "/mobile/capsule",
    logo: "/images/capsule-logo-new.png",
    image: "/images/capsule-phone-new.png",
    tags: [
      "UX Research",
      "Персоны",
      "User Flow",
      "Wireframes",
      "UI Design",
      "Usability",
      "Motion",
    ],
  },
];

export default function MobilePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="min-w-[1200px] bg-background px-10 py-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5">
          <header className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-4 transition-opacity hover:opacity-70"
            >
              <div className="relative h-16 w-16 overflow-hidden">
                <Image
                  src="/images/profile-avatar.png"
                  alt="Аня Егорова"
                  fill
                  className="object-contain"
                  sizes="80px"
                  priority
                />
              </div>

              <p className="text-[18px] leading-[100%] tracking-tight text-foreground">
                Аня Егорова
              </p>
            </Link>

            <nav className="flex items-center gap-3">
              <Link
                href="/mobile"
                className="flex h-12 items-center justify-center rounded-full px-8 text-[18px] font-medium text-white [background:var(--accent-gradient)]"
              >
                Mobile
              </Link>

              <Link
                href="/web"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70"
              >
                Web
              </Link>

              <Link
                href="/presentation"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70"
              >
                Presentation
              </Link>

              <Link
                href="/graphic"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70"
              >
                Graphic
              </Link>

              <Link
                href="/concept"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70"
              >
                Concept
              </Link>
            </nav>

            <SocialLinks />
          </header>

          <section className="mt-5 grid grid-cols-2 gap-6">
            {mobileCases.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative h-[580px] overflow-hidden rounded-[var(--radius-card)] bg-card p-10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-6">
                  <Image
                    src={item.logo}
                    alt=""
                    width={74}
                    height={74}
                    className="shrink-0 rounded-full"
                  />

                  <h2 className="max-w-[580px] text-[22px] font-medium leading-[1.15] tracking-[-0.03em] text-foreground">
                    {item.title}
                  </h2>
                </div>

                <div className="mt-12 flex max-w-[340px] flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-tag-bg px-4 py-2 text-[14px] text-tag-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-10 left-10 flex h-12 items-center rounded-full bg-foreground px-8 text-[18px] font-medium text-card transition-all duration-300 hover:text-white hover:[background:var(--accent-gradient)]">
                  Подробнее
                </div>

                <Image
                  src={item.image}
                  alt=""
                  width={460}
                  height={900}
                  className="absolute bottom-[-130px] right-10 h-[520px] w-auto object-contain transition-transform duration-500 group-hover:-translate-y-3"
                />
              </Link>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}