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
  "/images/capsule-add step 5.png",
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
      <div className="min-w-[1200px] bg-background px-10 py-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5">
          <header className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-4 transition-opacity hover:opacity-70"
            >
              <div className="relative h-16 w-16 overflow-hidden">
                <Image
                  src="/images/profile-avatar.png"
                  alt="Аня Егорова"
                  fill
                  className="object-contain"
                  sizes="80px"
                  priority
                />
              </div>

              <p className="text-[18px] leading-[100%] tracking-tight text-foreground">
                Аня Егорова
              </p>
            </Link>

            <nav className="flex items-center gap-3">
              <Link
                href="/mobile"
                className="flex h-12 items-center justify-center rounded-full px-8 text-[18px] font-medium text-white [background:var(--accent-gradient)]"
              >
                Mobile
              </Link>

              <Link
                href="/web"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70"
              >
                Web
              </Link>

              <Link
                href="/presentation"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70"
              >
                Presentation
              </Link>

              <Link
                href="/graphic"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70"
              >
                Graphic
              </Link>

              <Link
                href="/concept"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70"
              >
                Concept
              </Link>
            </nav>

            <SocialLinks />
          </header>

          <Link
            href="/mobile"
            aria-label="Вернуться ко всем mobile-кейсам"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-card
              text-muted
              transition-all
              duration-300
              hover:scale-105
              hover:text-white
              hover:[background:var(--accent-gradient)]
            "
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

          <section className="grid grid-cols-[360px_1fr] gap-5">
            <aside className="relative h-[560px] overflow-hidden rounded-[var(--radius-card)] bg-card p-8">
              <div
                className="
                  h-full
                  overflow-y-auto
                  pr-5
                  [&::-webkit-scrollbar]:w-[6px]
                  [&::-webkit-scrollbar-track]:bg-transparent
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-tag-text
                "
              >
                <h1 className="mb-6 text-[22px] font-semibold leading-[110%] text-foreground">
                  Capsule — как сохранить воспоминания через музыку
                </h1>

                <section className="mb-6">
                  <h2 className="mb-2 text-[18px] font-semibold text-foreground">
                    О проекте
                  </h2>
                  <p className="mb-3 text-[15px] leading-[130%] text-muted">
                    Capsule — концепт музыкального сервиса, который помогает
                    пользователям сохранять важные моменты жизни через музыку и
                    возвращаться к ним спустя время.
                  </p>
                  <p className="text-[15px] leading-[130%] text-muted">
                    Проект исследует, как музыка может стать не только способом
                    прослушивания контента, но и инструментом для фиксации
                    эмоций, событий и личных воспоминаний.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-2 text-[18px] font-semibold text-foreground">
                    Роль
                  </h2>
                  <p className="text-[15px] leading-[130%] text-muted">
                    Product Designer: исследование, UX, UI, прототипирование,
                    тестирование и проектирование дизайн-системы.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-2 text-[18px] font-semibold text-foreground">
                    Контекст
                  </h2>
                  <p className="mb-3 text-[15px] leading-[130%] text-muted">
                    Для многих людей музыка тесно связана с воспоминаниями.
                    Определённые треки способны мгновенно возвращать в
                    конкретный период жизни, напоминать о людях, событиях и
                    переживаниях.
                  </p>
                  <p className="text-[15px] leading-[130%] text-muted">
                    Однако современные стриминговые сервисы фокусируются на
                    потреблении контента и рекомендациях, практически не работая
                    с эмоциональной ценностью музыки.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-2 text-[18px] font-semibold text-foreground">
                    Проблема
                  </h2>
                  <p className="text-[15px] leading-[130%] text-muted">
                    Пользователи сохраняют тысячи треков и плейлистов, но со
                    временем теряют контекст, почему эта музыка была важна.
                    Воспоминания остаются в голове, но не связываются с
                    музыкальным опытом внутри сервиса.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-2 text-[18px] font-semibold text-foreground">
                    Возможность
                  </h2>
                  <p className="text-[15px] leading-[130%] text-muted">
                    Вместо создания ещё одного способа слушать музыку я
                    исследовала, как превратить музыкальный сервис в личный
                    архив воспоминаний. Как помочь пользователю сохранять
                    важные моменты жизни через музыку и возвращаться к ним
                    спустя годы?
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-2 text-[18px] font-semibold text-foreground">
                    Исследование
                  </h2>
                  <p className="mb-3 text-[15px] leading-[130%] text-muted">
                    Я провела глубинные интервью и изучила сценарии потребления
                    музыки.
                  </p>

                  <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[130%] text-muted">
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

                <section className="mb-6">
                  <h2 className="mb-2 text-[18px] font-semibold text-foreground">
                    Решение
                  </h2>
                  <p className="mb-3 text-[15px] leading-[130%] text-muted">
                    Я спроектировала сервис музыкальных капсул времени.
                    Пользователь может сохранять треки вместе с эмоциями,
                    заметками, фотографиями и контекстом события, формируя
                    персональную музыкальную капсулу.
                  </p>

                  <p className="text-[15px] leading-[130%] text-muted">
                    Через выбранный промежуток времени капсула открывается
                    заново, позволяя пережить воспоминание через музыку и личные
                    артефакты момента.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-2 text-[18px] font-semibold text-foreground">
                    Ожидаемый эффект
                  </h2>
                  <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[130%] text-muted">
                    <li>Рост эмоциональной привязанности к сервису;</li>
                    <li>Повышение вовлечённости и частоты возвращения;</li>
                    <li>Формирование долгосрочной ценности продукта;</li>
                    <li>Усиление персонализации пользовательского опыта.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-2 text-[18px] font-semibold text-foreground">
                    Итог
                  </h2>
                  <p className="text-[15px] leading-[130%] text-muted">
                    Вместо ещё одного музыкального сервиса я спроектировала
                    инструмент, который помогает сохранять важные моменты жизни
                    и возвращаться к ним через музыку, эмоции и воспоминания.
                  </p>
                </section>
              </div>
            </aside>

            <div
              className="
                flex
                h-[560px]
                gap-5
                overflow-x-auto
                overflow-y-hidden
                rounded-[var(--radius-card)]
                pb-4
                snap-x
                snap-mandatory
                [&::-webkit-scrollbar]:h-[6px]
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-tag-text
              "
            >
              {screens.map((screen, index) => (
                <div
                  key={screen}
                  className="relative h-full min-w-[250px] snap-start overflow-hidden rounded-[36px]"
                >
                  <Image
                    src={screen}
                    alt={`Экран Capsule ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="250px"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}