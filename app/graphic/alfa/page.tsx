import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

const images = {
  hero: "/images/alfa-case-hero.png",
  back01: "/images/alfa-case-back-01.png",
  back02: "/images/alfa-case-back-02.png",
  poster: "/images/alfa-case-poster.png",
  hostess: "/images/alfa-case-hostes.png",
  braslet: "/images/alfa-case-braslet.png",
};

export default function AlfaGraphicCasePage() {
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
                  Альфа-Банк — иммерсивный бренд-опыт для VIP-клиентов
                </h1>

                {[
                  ["О проекте", "ALFA SUPERNOVA — концепция ежегодного новогоднего мероприятия для VIP-клиентов Альфа-Банка. Проект превращает традиционный корпоративный вечер в иммерсивное музыкальное шоу, где гости становятся участниками рождения новой поп-звезды и путешествуют через разные музыкальные эпохи."],
                  ["Роль", "Communication Designer: разработка креативной концепции, визуальной айдентики, оформления пространства, цифровых коммуникаций, презентационных материалов и пользовательского сценария мероприятия."],
                  ["Контекст", "Перед командой стояла задача создать событие, которое укрепит отношения с VIP-клиентами и подарит уникальный опыт, отражающий позиционирование Альфа-Банка как бренда, который создает тренды и задает направление будущего."],
                  ["Концепция", "В основе проекта — идея ALFA SUPERNOVA. Гости становятся свидетелями рождения новой музыкальной звезды, созданной специально для одного вечера. Пространство трансформируется между тремя музыкальными эпохами — Disco, House и Future Wave, а каждая смена сопровождается новой сценографией, мультимедийными эффектами и интерактивными механиками."],
                  ["Решение", "Я участвовала в разработке единой визуальной системы мероприятия, объединяющей key visual и айдентику проекта, оформление пространства и сценографии, цифровую коммуникацию до мероприятия, интерактивные зоны и мультимедийные инсталляции, геймификацию через чат-бот и QR-механики, брендированные материалы и мерч."],
                  ["Итог", "Получилась масштабируемая концепция бренд-опыта, где визуальный язык, сторителлинг и цифровые технологии работают как единая система. Вместо классического новогоднего мероприятия гости становились частью интерактивного шоу, усиливающего эмоциональную связь с брендом."],
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
                  <Image src={images.hero} alt="Alfa Supernova key visual" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 980px, 100vw" priority />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-[2fr_1fr]">
                  <div className="group relative h-[320px] overflow-hidden rounded-[42px] bg-card">
                    <Image src={images.back01} alt="Alfa Supernova сцена" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 640px, 100vw" />
                  </div>

                  <div className="group relative h-[320px] overflow-hidden rounded-[42px] bg-card">
                    <Image src={images.back02} alt="Alfa Supernova образ" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 320px, 100vw" />
                  </div>
                </div>

                <div className="group relative aspect-[16/8] overflow-hidden rounded-[42px] bg-card">
                  <Image src={images.poster} alt="Постеры Alfa Supernova" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 980px, 100vw" />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-[2fr_1fr]">
                  <div className="group relative h-[320px] overflow-hidden rounded-[42px] bg-card">
                    <Image src={images.hostess} alt="Форма Alfa Supernova" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 640px, 100vw" />
                  </div>

                  <div className="group relative h-[320px] overflow-hidden rounded-[42px] bg-card">
                    <Image src={images.braslet} alt="Браслет Alfa Supernova" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 320px, 100vw" />
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