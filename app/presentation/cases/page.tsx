import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

const slides = Array.from({ length: 16 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return `/images/presentation-cases-${number}.png`;
});

export default function PresentationCasesPage() {
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
              <Link href="/presentation" className="flex h-12 items-center justify-center rounded-full px-8 text-[18px] font-medium text-white [background:var(--accent-gradient)]">Presentation</Link>
              <Link href="/graphic" className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70">Graphic</Link>
              <Link href="/concept" className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70">Concept</Link>
            </nav>

            <SocialLinks />
          </header>

          <Link
            href="/presentation"
            aria-label="Вернуться ко всем presentation-кейсам"
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
                  Визуальный сторителлинг для защиты проектов
                </h1>

                <section className="mb-6">
                  <h2 className="mb-3 text-[18px] font-semibold leading-[120%] text-foreground">
                    Часть под NDA
                  </h2>
                </section>

                {[
                  ["О проекте", "Разработка презентаций для защиты креативных концепций, тендеров и клиентских предложений. Среди проектов — TWIGA, внутренние проекты и личные концепты."],
                  ["Роль", "Presentation Designer: структура презентации, визуальная концепция, оформление кейсов и сторителлинг."],
                  ["Контекст", "Кейс-презентации должны не просто показать результат, а убедительно рассказать историю проекта, объяснить идею и подчеркнуть ценность решения для клиента."],
                  ["Решение", "Проектировала структуру повествования, оформляла кейсы, визуализировала процессы и результаты, адаптировала материалы под формат защиты и презентации перед заказчиками."],
                  ["Итог", "Создала презентации, которые помогают ясно презентовать идеи, усиливают восприятие проектов и делают защиту концепций более убедительной."],
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
              <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_1fr]">
                {slides.map((slide, index) => (
                  <div
                    key={slide}
                    className="group relative h-[250px] overflow-hidden rounded-[24px] bg-card"
                  >
                    <Image
                      src={slide}
                      alt={`Кейс-презентация ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 480px, 100vw"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}