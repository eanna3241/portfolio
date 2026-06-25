import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

const images = {
  kv01: "/images/vk-kv-01.png",
  kv02: "/images/vk-kv-02.png",
  kv03: "/images/vk-kv-03.png",
  kv04: "/images/vk-kv-04.png",
};

export default function VkGraphicCasePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="px-7 py-10 md:px-10 md:py-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:gap-5">
          <header className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4 transition-opacity hover:opacity-70">
              <div className="relative h-20 w-20 overflow-hidden md:h-16 md:w-16">
                <Image src="/images/profile-avatar.png" alt="Аня Егорова" fill className="object-contain" sizes="80px" priority />
              </div>
              <p className="hidden text-[18px] leading-[100%] tracking-tight text-foreground md:block">
                Аня Егорова
              </p>
            </Link>

            <nav className="hidden items-center gap-3 md:flex">
              <Link href="/mobile" className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70">Mobile</Link>
              <Link href="/web" className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70">Web</Link>
              <Link href="/presentation" className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70">Presentation</Link>
              <Link href="/graphic" className="flex h-12 items-center justify-center rounded-full px-8 text-[18px] font-medium text-white [background:var(--accent-gradient)]">Graphic</Link>
              <Link href="/concept" className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70">Concept</Link>
            </nav>

            <SocialLinks />
          </header>

          <Link
            href="/graphic"
            aria-label="Вернуться ко всем graphic-кейсам"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-card text-muted transition-all duration-300 hover:scale-105 hover:text-white hover:[background:var(--accent-gradient)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18L9 12L15 6" />
            </svg>
          </Link>

          <section className="grid grid-cols-1 gap-8 md:grid-cols-[360px_1fr] md:gap-5">
            <aside className="relative h-[620px] overflow-hidden rounded-[50px] bg-card p-8 md:h-[560px] md:rounded-[var(--radius-card)]">
              <div className="h-full overflow-y-auto pr-4 md:pr-5 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-tag-text">
                <h1 className="mb-6 text-[22px] font-semibold leading-[110%] text-foreground">
                  VK — коммуникационный дизайн проектов
                </h1>

                {[
                  ["О проекте", "В рамках сотрудничества с VK я разрабатывала визуальные материалы для внутренних продуктов, технологических мероприятий и международных инициатив. Большая часть проектов находится под NDA, поэтому в кейсе представлены отдельные фрагменты работ."],
                  ["Роль", "Communication Designer: разработка key visual, лендингов, презентаций, баннеров, иллюстраций и цифровых коммуникаций."],
                  ["Контекст", "Проекты охватывали разные направления — от внутренних платформ и IT-конференций до международных соревнований и образовательных инициатив. Задачей было создавать визуальные решения, которые быстро объясняют идею проекта и сохраняют единый стиль коммуникации VK."],
                  ["Решение", "В рамках проектов я разрабатывала лендинги и промостраницы, key visual для мероприятий и запусков, баннеры для внутренних платформ и цифровых сервисов, презентации для спикеров и команд, графику и иллюстрации для digital-коммуникаций, а также адаптацию визуальных концепций под разные форматы и носители."],
                  ["Итог", "За время сотрудничества я создала десятки визуальных материалов для проектов. Несмотря на ограничения NDA, этот опыт позволил мне выстроить системный подход к созданию цифровых коммуникаций, работе с бренд-гайдами и быстрому масштабированию дизайна для разных каналов."],
                ].map(([title, text]) => (
                  <section key={title} className="mb-6 last:mb-0">
                    <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground">
                      {title}
                    </h2>
                    <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                      {text}
                    </p>
                  </section>
                ))}
              </div>
            </aside>

            <div className="h-[620px] overflow-y-auto overflow-x-hidden rounded-[42px] pr-2 md:h-[560px] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-tag-text">
              <div className="flex flex-col gap-5">
                <div className="group relative h-[560px] overflow-hidden rounded-[42px] bg-card">
                  <Image src={images.kv01} alt="VK RecSys Challenge 2025" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 980px, 100vw" priority />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-[2fr_1fr]">
                  <div className="group relative h-[320px] overflow-hidden rounded-[42px] bg-card">
                    <Image src={images.kv02} alt="VK проект 02" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03] blur-[6px]" sizes="(min-width: 768px) 640px, 100vw" />
                  </div>

                  <div className="group relative h-[320px] overflow-hidden rounded-[42px] bg-card">
                    <Image src={images.kv03} alt="VK проект 03" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03] blur-[6px]" sizes="(min-width: 768px) 320px, 100vw" />
                  </div>
                </div>

                <div className="group relative h-[420px] overflow-hidden rounded-[42px] bg-card md:h-[430px]">
                  <Image src={images.kv04} alt="VK иллюстрация проекта" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 980px, 100vw" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}