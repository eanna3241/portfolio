import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

const images = {
  hero: "/images/avito-case-hero.png",
  program: "/images/avito-case-program.png",
  stage: "/images/avito-case-stage.png",
  posters: "/images/avito-case-posters-02.png",
  laptop: "/images/avito-case-laptop.png",
  wristband: "/images/avito-case-merch-01.png",
  badge: "/images/avito-case-merch-02.png",
};

export default function AvitoGraphicCasePage() {
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
                  Avito Open Event — айдентика спецпроекта для бренда работодателя
                </h1>

                <section className="mb-6">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground">
                    О проекте
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    Avito Open Event — концепция имиджевого мероприятия для продвижения HR-бренда Авито среди IT-специалистов.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground">
                    Роль
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    Graphic Designer: разработка key visual, айдентики мероприятия, рекламных материалов, полиграфии, цифровых носителей и визуального сопровождения пространства.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground">
                    Контекст
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    Задачей было создать запоминающийся опыт для IT-аудитории и усилить восприятие Авито как современного работодателя через нестандартный формат мероприятия.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground">
                    Решение
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    Я участвовала в создании единой визуальной системы проекта: разработала key visual, адаптировала айдентику для рекламной кампании, цифровых и печатных носителей, навигации, оформления площадки и брендированных материалов.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground">
                    Итог
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    Создана масштабируемая айдентика, которая объединила коммуникацию мероприятия и легко адаптировалась для онлайн- и офлайн-носителей — от анонсов и лендинга до сценографии и брендированных материалов.
                  </p>
                </section>
              </div>
            </aside>

            <div className="h-[620px] overflow-y-auto overflow-x-hidden rounded-[42px] pr-2 md:h-[560px] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-tag-text">
              <div className="flex flex-col gap-5">
                <div className="group relative h-[560px] overflow-hidden rounded-[42px] bg-card">
                  <Image src={images.hero} alt="Avito Open Event key visual" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 980px, 100vw" priority />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-[2fr_1fr]">
                  <div className="group relative h-[320px] overflow-hidden rounded-[42px] bg-card">
                    <Image src={images.program} alt="Печатная программа мероприятия" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 640px, 100vw" />
                  </div>

                  <div className="group relative h-[320px] overflow-hidden rounded-[42px] bg-card">
                    <Image src={images.stage} alt="Сценография мероприятия" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 320px, 100vw" />
                  </div>
                </div>

                <div className="group relative aspect-[16/8] overflow-hidden rounded-[42px] bg-card">
                  <Image src={images.posters} alt="Плакаты Avito Open Event" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 980px, 100vw" />
                </div>

                <div className="relative h-[460px] overflow-hidden rounded-[42px] bg-transparent md:h-[520px]">
                  <div className="absolute left-[0%] top-[-10%] h-[120%] w-[68%] transition-transform duration-700 hover:scale-[1.03]">
                    <Image src={images.laptop} alt="Лендинг Avito Open Event" fill className="object-contain" sizes="(min-width: 768px) 560px, 100vw" />
                  </div>

                  <div className="absolute left-[32%] top-[-16%] h-[70%] w-[48%] transition-transform duration-700 hover:scale-[1.04]">
                    <Image src={images.wristband} alt="Браслеты Avito Open Event" fill className="object-contain" sizes="(min-width: 768px) 320px, 60vw" />
                  </div>

                  <div className="absolute right-[-4%] top-[-20%] h-[122%] w-[58%] transition-transform duration-700 hover:scale-[1.03]">
                    <Image src={images.badge} alt="Бейджи Avito Open Event" fill className="object-contain" sizes="(min-width: 768px) 420px, 70vw" />
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