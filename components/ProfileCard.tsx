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
    <Card className="flex flex-col p-4">
      <div className="relative h-[240px] w-full overflow-hidden rounded-[var(--radius-inner)]">
        <Image
          src="/images/profile-hero-new.png"
          alt="Аня Егорова"
          fill
          className="object-cover object-[center_20%]"
          sizes="(min-width: 1200px) 620px, 100vw"
          priority
        />
      </div>

      <div className="px-7 pt-7 pb-10">
        <h1 className="mb-4 text-[22px] font-semibold leading-[120%] text-gradient">
          Привет, я — Аня Егорова!
        </h1>

        <p className="mb-4 text-[18px] font-medium leading-[120%] text-foreground">
          Product &amp; Communication Designer +2 года опыта.
          <br />
          Исследую, проектирую и запускаю цифровые продукты
          <br />
          для B2C и B2B.
        </p>

        <p className="mb-6 text-[16px] font- leading-[120%] text-muted">
          Бэкграунд в крупных брендинговых и коммуникационных проектах Ex-TWIGA
          CG / OGGI Event, проекты для Авито, Альфа-Банк, HeadHunter, VK,
          РЖД-Медицина.
        </p>

        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <Tag key={skill} label={skill} />
          ))}
        </div>
      </div>
    </Card>
  );
}