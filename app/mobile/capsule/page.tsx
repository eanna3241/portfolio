import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

const screens = [
  "/images/capsule-main.png",
  "/images/capsule-play.png",
  "/images/capsule-add step 1.png",
  "/images/capsule-add step 2.png",
  "/images/capsule-add step 3.png",
  "/images/capsule-add step 4.png",
  "/images/capsule-add step 6.png",
  "/images/capsule-add step 7.png",
  "/images/capsule-done.png",
  "/images/capsule-moment.png",
  "/images/capsule-calendar.png",
  "/images/capsule-playlist.png",
];

export default function CapsuleCasePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="px-7 py-10 md:min-w-[1200px] md:px-10 md:py-8 2xl:px-14 2xl:py-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:gap-5 2xl:max-w-[1600px] 2xl:gap-7">
          <header className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-4 transition-opacity hover:opacity-70"
            >
              <div className="relative h-20 w-20 overflow-hidden md:h-16 md:w-16 2xl:h-20 2xl:w-20">
                <Image
                  src="/images/profile-avatar.png"
                  alt="Аня Егорова"
                  fill
                  className="object-contain"
                  sizes="80px"
                  priority
                />
              </div>

              <p className="hidden text-[18px] leading-[100%] tracking-tight text-foreground md:block 2xl:text-[20px]">
                Аня Егорова
              </p>
            </Link>

            <nav className="hidden items-center gap-3 md:flex 2xl:gap-4">
              <Link
                href="/mobile"
                className="flex h-12 items-center justify-center rounded-full px-8 text-[18px] font-medium text-white [background:var(--accent-gradient)] 2xl:h-14 2xl:px-10 2xl:text-[20px]"
              >
                Mobile
              </Link>

              <Link
                href="/web"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70 2xl:h-14 2xl:px-10 2xl:text-[20px]"
              >
                Web
              </Link>

              <Link
                href="/presentation"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70 2xl:h-14 2xl:px-10 2xl:text-[20px]"
              >
                Presentation
              </Link>

              <Link
                href="/graphic"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70 2xl:h-14 2xl:px-10 2xl:text-[20px]"
              >
                Graphic
              </Link>

              <Link
                href="/concept"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70 2xl:h-14 2xl:px-10 2xl:text-[20px]"
              >
                Concept
              </Link>
            </nav>

            <SocialLinks />
          </header>

          <div className="-mx-7 overflow-x-auto px-7 md:hidden [&::-webkit-scrollbar]:hidden">
            <nav className="flex w-max gap-3 pb-1">
              <Link
                href="/mobile"
                className="flex h-12 shrink-0 items-center justify-center rounded-full px-7 text-[16px] font-medium text-white [background:var(--accent-gradient)]"
              >
                Mobile
              </Link>

              <Link
                href="/web"
                className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground"
              >
                Web
              </Link>

              <Link
                href="/presentation"
                className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground"
              >
                Presentation
              </Link>

              <Link
                href="/graphic"
                className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground"
              >
                Graphic
              </Link>

              <Link
                href="/concept"
                className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground"
              >
                Concept
              </Link>
            </nav>
          </div>

          <Link
            href="/mobile"
            aria-label="Вернуться ко всем mobile-кейсам"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-card text-muted transition-all duration-300 hover:scale-105 hover:text-white hover:[background:var(--accent-gradient)] 2xl:h-13 2xl:w-13"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18L9 12L15 6" />
            </svg>
          </Link>

          <section className="grid grid-cols-1 gap-8 md:grid-cols-[360px_1fr] md:gap-5 2xl:grid-cols-[420px_1fr] 2xl:gap-7">
            <aside className="relative h-[620px] overflow-hidden rounded-[50px] bg-card p-8 md:h-[560px] md:rounded-[var(--radius-card)] 2xl:h-[680px] 2xl:p-10">
              <div className="h-full overflow-y-auto pr-4 md:pr-5 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-tag-text">
                <h1 className="mb-6 text-[22px] font-semibold leading-[110%] text-foreground 2xl:text-[26px]">
                  Capsule — как сохранить воспоминания через музыку
                </h1>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    О проекте
                  </h2>
                  <p className="mb-3 text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Capsule — концепт музыкального сервиса, который помогает
                    пользователям сохранять важные моменты жизни через музыку и
                    возвращаться к ним спустя время.
                  </p>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Проект исследует, как музыка может стать не только способом
                    прослушивания контента, но и инструментом для фиксации
                    эмоций, событий и личных воспоминаний.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Роль
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Product Designer: исследование, UX, UI, прототипирование,
                    тестирование и проектирование дизайн-системы.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Контекст
                  </h2>
                  <p className="mb-3 text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Для многих людей музыка тесно связана с воспоминаниями.
                    Определённые треки способны мгновенно возвращать в
                    конкретный период жизни, напоминать о людях, событиях и
                    переживаниях.
                  </p>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Однако современные стриминговые сервисы фокусируются на
                    потреблении контента и рекомендациях, практически не работая
                    с эмоциональной ценностью музыки.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Проблема
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Пользователи сохраняют тысячи треков и плейлистов, но со
                    временем теряют контекст, почему эта музыка была важна.
                    Воспоминания остаются в голове, но не связываются с
                    музыкальным опытом внутри сервиса.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Возможность
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Вместо создания ещё одного способа слушать музыку я
                    исследовала, как превратить музыкальный сервис в личный
                    архив воспоминаний. Как помочь пользователю сохранять
                    важные моменты жизни через музыку и возвращаться к ним
                    спустя годы?
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Исследование
                  </h2>
                  <p className="mb-3 text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Я провела глубинные интервью и изучила сценарии потребления
                    музыки.
                  </p>

                  <ul className="list-disc space-y-2 pl-5 text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    <li>
                      музыка часто ассоциируется с конкретными жизненными
                      событиями;
                    </li>
                    <li>
                      пользователи создают плейлисты как способ сохранить
                      воспоминания;
                    </li>
                    <li>со временем контекст создания плейлистов теряется;</li>
                    <li>
                      людям важно возвращаться к значимым моментам прошлого.
                    </li>
                  </ul>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Решение
                  </h2>
                  <p className="mb-3 text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Я спроектировала сервис музыкальных капсул времени.
                    Пользователь может сохранять треки вместе с эмоциями,
                    заметками, фотографиями и контекстом события, формируя
                    персональную музыкальную капсулу.
                  </p>

                  <p className="text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Через выбранный промежуток времени капсула открывается
                    заново, позволяя пережить воспоминание через музыку и личные
                    артефакты момента.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Ожидаемый эффект
                  </h2>
                  <ul className="list-disc space-y-2 pl-5 text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    <li>Рост эмоциональной привязанности к сервису;</li>
                    <li>Повышение вовлечённости и частоты возвращения;</li>
                    <li>Формирование долгосрочной ценности продукта;</li>
                    <li>Усиление персонализации пользовательского опыта.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Итог
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Вместо ещё одного музыкального сервиса я спроектировала
                    инструмент, который помогает сохранять важные моменты жизни
                    и возвращаться к ним через музыку, эмоции и воспоминания.
                  </p>
                </section>
              </div>
            </aside>

            <div className="-mx-7 overflow-x-auto px-7 pb-4 md:mx-0 md:flex md:h-[560px] md:gap-5 md:overflow-x-auto md:overflow-y-hidden md:rounded-[var(--radius-card)] md:px-0 md:pb-4 md:snap-x md:snap-mandatory 2xl:h-[680px] 2xl:gap-7 [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-tag-text">
              <div className="flex w-max gap-5 md:h-full 2xl:gap-7">
                {screens.map((screen, index) => (
                  <div
                    key={screen}
                    className="relative h-[560px] w-[280px] shrink-0 overflow-hidden rounded-[36px] md:h-full md:w-[250px] md:min-w-[250px] md:snap-start 2xl:w-[310px] 2xl:min-w-[310px] 2xl:rounded-[44px]"
                  >
                    <Image
                      src={screen}
                      alt={`Экран Capsule ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1536px) 310px, 280px"
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