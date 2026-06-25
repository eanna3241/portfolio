import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

const images = {
  hero: "/images/samolet-case-hero.png",
  merch01: "/images/samolet-case-merch-01.png",
  merch02: "/images/samolet-case-merch-02.png",
  hostess: "/images/samolet-case-hostes.png",
  cup: "/images/samolet-cup-02.png",
  badge: "/images/samolet-case-badge.png",
};

export default function SamoletGraphicCasePage() {
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
                  Самолет Partners Day — создание бренд-опыта для партнерского мероприятия
                </h1>

                {[
                  ["О проекте", "Partners Day — ежегодное мероприятие девелопера «Самолет», посвященное подведению итогов года, награждению лучших партнеров и укреплению отношений с агентами рынка недвижимости."],
                  ["Роль", "Communication Designer: разработка креативной концепции, визуальной айдентики, оформления пространства, цифровых и печатных материалов, мерча и коммуникационных носителей."],
                  ["Контекст", "Задачей было создать мероприятие, которое не только подведет итоги года, но и усилит восприятие бренда «Самолет» как надежного партнера. Важно было превратить традиционную церемонию награждения в запоминающийся бренд-опыт, мотивирующий партнеров на дальнейшее сотрудничество."],
                  ["Концепция", "В основе проекта лежит метафора шахматной партии. Продажа недвижимости требует стратегического мышления, умения просчитывать ходы и принимать решения. Эта идея стала основой визуального языка проекта и объединила все элементы мероприятия под слоганом «Ваш ход, гроссмейстеры»."],
                  ["Решение", "Я участвовала в разработке единой визуальной системы мероприятия: key visual и айдентики, оформления сцены и пространства, приглашений и цифровых коммуникаций, welcome-kit, наградной продукции, навигации, фотозоны и брендированных материалов."],
                  ["Итог", "Получилась масштабируемая визуальная система, которая превратила деловое мероприятие в цельный бренд-опыт и поддержала эмоциональную связь партнеров с компанией."],
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
                  <Image src={images.hero} alt="Samolet Partners Day key visual" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 980px, 100vw" priority />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-[2fr_1fr]">
                  <div className="group relative h-[320px] overflow-hidden rounded-[42px] bg-card">
                    <Image src={images.merch01} alt="Мерч Samolet Partners Day" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 640px, 100vw" />
                  </div>

                  <div className="group relative h-[320px] overflow-hidden rounded-[42px] bg-card">
                    <Image src={images.merch02} alt="Брендированные материалы Samolet Partners Day" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 320px, 100vw" />
                  </div>
                </div>

                <div className="relative h-[460px] overflow-hidden rounded-[42px] bg-transparent md:h-[520px]">
                  <div className="absolute left-[2%] top-[0%] h-[110%] w-[42%] transition-transform duration-700 hover:scale-[1.03]">
                    <Image src={images.hostess} alt="Форма Samolet Partners Day" fill className="object-contain" sizes="(min-width: 768px) 420px, 100vw" />
                  </div>

                  <div className="absolute left-[35%] top-[12%] h-[74%] w-[34%] transition-transform duration-700 hover:scale-[1.04]">
                    <Image src={images.cup} alt="Стаканы Samolet Partners Day" fill className="object-contain" sizes="(min-width: 768px) 360px, 60vw" />
                  </div>

                  <div className="absolute right-[2%] top-[-6%] h-[116%] w-[36%] transition-transform duration-700 hover:scale-[1.03]">
                    <Image src={images.badge} alt="Бейдж Samolet Partners Day" fill className="object-contain" sizes="(min-width: 768px) 420px, 70vw" />
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