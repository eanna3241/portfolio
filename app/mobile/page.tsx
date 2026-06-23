import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { CaseHeader } from "@/components/CaseHeader";

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
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 md:gap-5 2xl:gap-7">
          <CaseHeader active="mobile" />

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