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
      <div className="px-7 py-10 md:min-w-[1200px] md:px-10 md:py-8 2xl:px-14 2xl:py-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:gap-5 2xl:max-w-[1600px] 2xl:gap-7">
          <header className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-4 transition-opacity hover:opacity-70"
            >
              <div className="relative h-20 w-20 overflow-hidden md:h-16 md:w-16 2xl:h-20 2xl:w-20">
                <Image
                  src="/images/profile-avatar.png"
                  alt="Аня Егорова"
                  fill
                  className="object-contain"
                  sizes="80px"
                  priority
                />
              </div>

              <p className="hidden text-[18px] leading-[100%] tracking-tight text-foreground md:block 2xl:text-[20px]">
                Аня Егорова
              </p>
            </Link>

            <nav className="hidden items-center gap-3 md:flex 2xl:gap-4">
              <Link
                href="/mobile"
                className="flex h-12 items-center justify-center rounded-full px-8 text-[18px] font-medium text-white [background:var(--accent-gradient)] 2xl:h-14 2xl:px-10 2xl:text-[20px]"
              >
                Mobile
              </Link>

              <Link
                href="/web"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70 2xl:h-14 2xl:px-10 2xl:text-[20px]"
              >
                Web
              </Link>

              <Link
                href="/presentation"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70 2xl:h-14 2xl:px-10 2xl:text-[20px]"
              >
                Presentation
              </Link>

              <Link
                href="/graphic"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70 2xl:h-14 2xl:px-10 2xl:text-[20px]"
              >
                Graphic
              </Link>

              <Link
                href="/concept"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70 2xl:h-14 2xl:px-10 2xl:text-[20px]"
              >
                Concept
              </Link>
            </nav>

            <SocialLinks />
          </header>

          <div className="-mx-7 overflow-x-auto px-7 md:hidden [&::-webkit-scrollbar]:hidden">
            <nav className="flex w-max gap-3 pb-1">
              <Link
                href="/mobile"
                className="flex h-12 shrink-0 items-center justify-center rounded-full px-7 text-[16px] font-medium text-white [background:var(--accent-gradient)]"
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

              <Link
                href="/graphic"
                className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground"
              >
                Graphic
              </Link>

              <Link
                href="/concept"
                className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground"
              >
                Concept
              </Link>
            </nav>
          </div>

          <section className="grid grid-cols-1 gap-8 md:mt-5 md:grid-cols-2 md:gap-6 2xl:gap-8">
            {mobileCases.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative h-[820px] overflow-hidden rounded-[60px] bg-card p-8 transition-all duration-300 hover:-translate-y-1 md:h-[580px] md:rounded-[var(--radius-card)] md:p-10 2xl:h-[700px] 2xl:p-12"
              >
                <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-6 2xl:gap-8">
                  <Image
                    src={item.logo}
                    alt=""
                    width={74}
                    height={74}
                    className="h-[64px] w-[64px] shrink-0 rounded-full md:h-[74px] md:w-[74px] 2xl:h-[88px] 2xl:w-[88px]"
                  />

                  <h2 className="max-w-[580px] text-[22px] font-medium leading-[1.12] tracking-[-0.03em] text-foreground md:text-[22px] md:leading-[1.15] 2xl:max-w-[720px] 2xl:text-[28px]">
                    {item.title}
                  </h2>
                </div>

                <div className="mt-9 flex max-w-[360px] flex-wrap gap-2 md:mt-12 md:max-w-[340px] 2xl:max-w-[460px] 2xl:gap-2.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-tag-bg px-4 py-2 text-[14px] text-tag-text 2xl:px-5 2xl:py-2.5 2xl:text-[15px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex h-12 w-fit items-center rounded-full bg-foreground px-8 text-[18px] font-medium text-card transition-all duration-300 hover:text-white hover:[background:var(--accent-gradient)] md:absolute md:bottom-10 md:left-10 md:mt-0 2xl:bottom-12 2xl:left-12 2xl:h-14 2xl:px-10 2xl:text-[20px]">
                  Подробнее
                </div>

                <Image
                  src={item.image}
                  alt=""
                  width={400}
                  height={840}
                  className="absolute bottom-[-210px] left-1/2 h-[500px] w-auto -translate-x-1/2 object-contain transition-transform duration-500 group-hover:-translate-y-3 md:bottom-[-130px] md:left-auto md:right-10 md:h-[520px] md:translate-x-0 2xl:bottom-[-150px] 2xl:right-14 2xl:h-[650px]"
                />
              </Link>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}