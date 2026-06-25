import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

const images = {
  hero: "/images/biocad-case-hero.png",
  stand: "/images/biocad-case-stand.png",
  symposium: "/images/biocad-case-symposium.png",
  merch: "/images/biocad-case-merch.png",
  veyer: "/images/biocad-case-veyer.png",
  badge: "/images/biocad-case-badge.png",
};

export default function BiocadGraphicCasePage() {
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

          <div className="-mx-7 overflow-x-auto px-7 md:hidden [&::-webkit-scrollbar]:hidden">
            <nav className="flex w-max gap-3 pb-1">
              <Link href="/mobile" className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground">Mobile</Link>
              <Link href="/web" className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground">Web</Link>
              <Link href="/presentation" className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground">Presentation</Link>
              <Link href="/graphic" className="flex h-12 shrink-0 items-center justify-center rounded-full px-7 text-[18px] font-medium text-white [background:var(--accent-gradient)]">Graphic</Link>
              <Link href="/concept" className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground">Concept</Link>
            </nav>
          </div>

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
                  BIOCAD — дизайн бренд-опыта для международного медицинского конгресса
                </h1>

                <section className="mb-6">
                  <h2 className="mb-3 text-[16px] font-semibold text-foreground">
                    О проекте
                  </h2>
                  <p className="text-[14px] leading-[130%] text-muted">
                    Концепция присутствия компании BIOCAD на международном онкологическом конгрессе «Белые ночи 2025». Проект объединял дизайн выставочного стенда, цифровые интерактивы, мерч и оформление двух тематических симпозиумов в единую коммуникационную систему.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-3 text-[16px] font-semibold text-foreground">
                    Роль
                  </h2>
                  <p className="text-[14px] leading-[130%] text-muted">
                    Communication Designer: разработка креативной концепции, визуальной айдентики, дизайн выставочного стенда, цифровых материалов, мерча и коммуникаций мероприятия.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-3 text-[16px] font-semibold text-foreground">
                    Контекст
                  </h2>
                  <p className="text-[14px] leading-[130%] text-muted">
                    Задачей было не просто оформить стенд BIOCAD, а создать современный интерактивный опыт, который поможет вовлечь участников конгресса, познакомить их с препаратами компании и усилить восприятие бренда как лидера биотехнологий.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-3 text-[16px] font-semibold text-foreground">
                    Решение
                  </h2>
                  <p className="text-[14px] leading-[130%] text-muted">
                    В основе проекта лежала концепция «Молекулы жизни» — путешествие по микромиру BIOCAD. Я участвовала в разработке визуальной системы проекта, которая объединила оформление стенда, цифровое приложение с маршрутами и игровыми механиками, интерактивные зоны, мерч, навигацию и материалы для двух тематических симпозиумов.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-[16px] font-semibold text-foreground">
                    Итог
                  </h2>
                  <p className="text-[14px] leading-[130%] text-muted">
                    Получилась масштабируемая визуальная экосистема, в которой бренд последовательно сопровождал участников на протяжении всего мероприятия — от первого приглашения и цифрового маршрута до интерактивов, симпозиумов и брендированных сувениров.
                  </p>
                </section>
              </div>
            </aside>

            <div className="h-[620px] overflow-y-auto overflow-x-hidden rounded-[42px] pr-2 md:h-[560px] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-tag-text">
              <div className="flex flex-col gap-5">
                <div className="group relative h-[560px] overflow-hidden rounded-[42px] bg-card">
                  <Image src={images.hero} alt="BIOCAD Молекулы жизни" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 980px, 100vw" priority />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-[2fr_1fr]">
                  <div className="group relative h-[320px] overflow-hidden rounded-[42px] bg-card">
                    <Image src={images.stand} alt="Стенд BIOCAD" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 640px, 100vw" />
                  </div>

                  <div className="group relative h-[320px] overflow-hidden rounded-[42px] bg-card">
                    <Image src={images.symposium} alt="Цифровой интерактив BIOCAD" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 320px, 100vw" />
                  </div>
                </div>

                <div className="group relative aspect-[16/8] overflow-hidden rounded-[42px] bg-card">
                  <Image src={images.merch} alt="Мерч BIOCAD" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 980px, 100vw" />
                </div>

                <div className="relative h-[400px] overflow-hidden rounded-[42px] bg-transparent md:h-[520px]">
                  <div className="absolute left-[0%] top-[10%] h-[70%] w-[68%] transition-transform duration-700 hover:scale-[1.03]">
                    <Image src={images.veyer} alt="Вееры BIOCAD" fill className="object-contain" sizes="(min-width: 768px) 560px, 100vw" />
                  </div>

                  <div className="absolute right-[-10%] top-[0%] h-[80%] w-[58%] transition-transform duration-700 hover:scale-[1.03]">
                    <Image src={images.badge} alt="Бейдж BIOCAD" fill className="object-contain" sizes="(min-width: 768px) 420px, 70vw" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}