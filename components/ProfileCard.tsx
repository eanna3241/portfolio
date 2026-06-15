import Image from "next/image";
import { Card } from "./ui/Card";
import { Tag } from "./ui/Tag";

const skills = [
  "Research",
  "UX/UI",
  "Design System",
  "AI",
  "Presentations",
  "Google Workspace",
  "Branding",
  "Adobe Creative Cloud",
];

export function ProfileCard() {
  return (
    <Card className="flex flex-col p-3 md:p-4">
      <div className="relative h-[260px] w-full overflow-hidden rounded-[42px] md:h-[240px] md:rounded-[var(--radius-inner)]">
        <Image
          src="/images/profile-hero-new.png"
          alt="Аня Егорова"
          fill
          className="object-cover object-[center_20%]"
          sizes="(min-width: 1200px) 620px, 100vw"
          priority
        />
      </div>

      <div className="px-5 pt-6 pb-8 md:px-7 md:pt-7 md:pb-10">
        <h1 className="mb-4 text-[22px] font-semibold leading-[110%] text-gradient md:text-[22px] md:leading-[120%]">
          Привет, я — Аня Егорова!
        </h1>

        <p className="mb-5 text-[18px] font-medium leading-[120%] text-foreground md:mb-4 md:text-[18px]">
          Product &amp; Communication Designer +2 года опыта.
          <br />
          Исследую, проектирую и запускаю цифровые продукты
          <br />
          для B2C и B2B.
        </p>

        <p className="mb-6 text-[16px] leading-[125%] text-muted md:text-[16px] md:leading-[120%]">
          Бэкграунд в крупных брендинговых и коммуникационных проектах Ex-TWIGA
          CG / OGGI Event, проекты для Авито, Альфа-Банк, HeadHunter, VK,
          РЖД-Медицина.
        </p>

        <div className="flex flex-wrap gap-2 md:gap-1.5">
          {skills.map((skill) => (
            <Tag key={skill} label={skill} />
          ))}
        </div>
      </div>
    </Card>
  );
}