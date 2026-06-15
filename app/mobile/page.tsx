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
      <div className="bg-background px-7 py-10 md:min-w-[1200px] md:px-10 md:py-8">
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
                  priority
                />
              </div>

              <p className="hidden text-[18px] text-foreground md:block">
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
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px]"
              >
                Web
              </Link>

              <Link
                href="/presentation"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px]"
              >
                Presentation
              </Link>

              <Link
                href="/graphic"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px]"
              >
                Graphic
              </Link>

              <Link
                href="/concept"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px]"
              >
                Concept
              </Link>
            </nav>

            <SocialLinks />
          </header>

          {/* MOBILE TABS */}
          <div className="-mx-7 overflow-x-auto px-7 md:hidden [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-3 pb-1">
              <Link
                href="/mobile"
                className="flex h-12 shrink-0 items-center justify-center rounded-full px-7 text-[18px] font-medium text-white [background:var(--accent-gradient)]"
              >
                Mobile
              </Link>

              <Link
                href="/web"
                className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px]"
              >
                Web
              </Link>

              <Link
                href="/presentation"
                className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px]"
              >
                Presentation
              </Link>

              <Link
                href="/graphic"
                className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px]"
              >
                Graphic
              </Link>

              <Link
                href="/concept"
                className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px]"
              >
                Concept
              </Link>
            </div>
          </div>

          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
            {mobileCases.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  group
                  relative
                  h-[880px]
                  overflow-hidden
                  rounded-[50px]
                  bg-card
                  p-8
                  md:h-[580px]
                  md:rounded-[60px]
                  md:p-10
                "
              >
                <div className="flex flex-col gap-5">
                  <Image
                    src={item.logo}
                    alt=""
                    width={64}
                    height={64}
                    className="rounded-full"
                  />

                  <h2 className="max-w-[520px] text-[28px] font-medium leading-[110%] tracking-[-0.03em] md:text-[22px]">
                    {item.title}
                  </h2>
                </div>

                <div className="mt-10 flex max-w-[360px] flex-wrap gap-2 md:mt-12">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-tag-bg px-4 py-2 text-[14px] text-tag-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex h-12 w-fit items-center rounded-full bg-black px-8 text-[18px] font-medium text-white md:absolute md:bottom-10 md:left-10 md:mt-0">
                  Подробнее
                </div>

                <Image
                  src={item.image}
                  alt=""
                  width={500}
                  height={1000}
                  className="
                    absolute
                    bottom-[-220px]
                    left-1/2
                    h-[520px]
                    w-auto
                    -translate-x-1/2
                    object-contain

                    md:bottom-[-130px]
                    md:left-auto
                    md:right-10
                    md:h-[520px]
                    md:translate-x-0
                  "
                />
              </Link>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}