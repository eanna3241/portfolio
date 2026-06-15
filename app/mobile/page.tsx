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
      <div className="px-7 py-10 md:px-10 md:py-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:gap-5">
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

          <nav className="flex gap-3 overflow-x-auto pb-1 md:hidden">
            <Link
              href="/mobile"
              className="flex h-12 shrink-0 items-center justify-center rounded-full px-7 text-[18px] font-medium text-white [background:var(--accent-gradient)]"
            >
              Mobile
            </Link>

            <Link
              href="/web"
              className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground"
            >
              Web
            </Link>

            <Link
              href="/presentation"
              className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground"
            >
              Presentation
            </Link>
          </nav>

          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {mobileCases.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative h-[720px] overflow-hidden rounded-[50px] bg-card p-8 transition-all duration-300 hover:-translate-y-1 md:h-[580px] md:rounded-[var(--radius-card)] md:p-10"
              >
                <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-6">
                  <Image
                    src={item.logo}
                    alt=""
                    width={74}
                    height={74}
                    className="h-[56px] w-[56px] shrink-0 rounded-full md:h-[74px] md:w-[74px]"
                  />

                  <h2 className="max-w-[580px] text-[22px] font-medium leading-[1.15] tracking-[-0.03em] text-foreground">
                    {item.title}
                  </h2>
                </div>

                <div className="mt-7 flex max-w-[340px] flex-wrap gap-2 md:mt-12">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-tag-bg px-4 py-2 text-[14px] text-tag-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute left-8 top-[300px] flex h-12 items-center rounded-full bg-foreground px-8 text-[18px] font-medium text-card transition-all duration-300 hover:text-white hover:[background:var(--accent-gradient)] md:bottom-10 md:left-10 md:top-auto">
                  Подробнее
                </div>

                <Image
                  src={item.image}
                  alt=""
                  width={460}
                  height={900}
                  className="absolute bottom-[-120px] left-1/2 h-[470px] w-auto -translate-x-1/2 object-contain transition-transform duration-500 group-hover:-translate-y-3 md:bottom-[-130px] md:left-auto md:right-10 md:h-[520px] md:translate-x-0"
                />
              </Link>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}