import Image from "next/image";
import { Card } from "./ui/Card";
import { Tag } from "./ui/Tag";

const skills = [
  "UX Research",
  "Product Design",
  "UI Design",
  "Design Systems",
  "Usability Testing",
  "AI",
  "Branding",
  "Presentations",
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
        <h1 className="mb-4 text-[22px] font-semibold leading-[110%] text-gradient">
          Привет, я — Аня Егорова!
        </h1>

        <p className="mb-5 text-[18px] font-medium leading-[125%] text-foreground">
          Product & Communication Designer.
          <br />
          Исследую поведение пользователей, проектирую цифровые продукты и создаю понятный пользовательский опыт.
        </p>

        <p className="mb-6 text-[16px] leading-[135%] text-muted">
          Более 2 лет в продуктовым дизайне и 3+ года
          в коммуникационном дизайне. Работала над
          проектами для VK, hh.ru, Авито, Альфа-Банк,
          РЖД-Медицина и других крупных брендов.
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