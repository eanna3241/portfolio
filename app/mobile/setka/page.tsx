import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

const screens = [
  "/images/setka-search.png",
  "/images/setka-results.png",
  "/images/setka-profile.png",
  "/images/setka-match.png",
  "/images/setka-map.png",
  "/images/setka-experience.png",
  "/images/setka-interes.png",
  "/images/setka-tov.png",
  "/images/setka-message.png",
  "/images/setka-dialog.png",
];

export default function SetkaCasePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="px-7 py-10 md:px-10 md:py-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:gap-5">
          <header className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-4 transition-opacity hover:opacity-70"
            >
              <div className="relative h-20 w-20 overflow-hidden md:h-16 md:w-16">
                <Image
                  src="/images/profile-avatar.png"
                  alt="Аня Егорова"
                  fill
                  className="object-contain"
                  sizes="80px"
                  priority
                />
              </div>

              <p className="hidden text-[18px] leading-[100%] tracking-tight text-foreground md:block">
                Аня Егорова
              </p>
            </Link>

            <nav className="hidden items-center gap-3 md:flex">
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

          <div className="-mx-7 overflow-x-auto px-7 md:hidden [&::-webkit-scrollbar]:hidden">
            <nav className="flex w-max gap-3 pb-1">
              <Link
                href="/mobile"
                className="flex h-12 shrink-0 items-center justify-center rounded-full px-7 text-[18px] font-medium text-white [background:var(--accent-gradient)]"
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
            className="flex h-11 w-11 items-center justify-center rounded-full bg-card text-muted transition-all duration-300 hover:scale-105 hover:text-white hover:[background:var(--accent-gradient)]"
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

          <section className="grid grid-cols-1 gap-8 md:grid-cols-[360px_1fr] md:gap-5">
            <aside className="relative h-[620px] overflow-hidden rounded-[50px] bg-card p-8 md:h-[560px] md:rounded-[var(--radius-card)]">
              <div className="h-full overflow-y-auto pr-4 md:pr-5 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-tag-text">
                <h1 className="mb-6 text-[22px] font-semibold leading-[110%] text-foreground">
                  Сетка — как превратить холодный нетворкинг в осознанное
                  знакомство
                </h1>

                <section className="mb-6">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground">
                    О проекте
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    Сетка — карьерная социальная сеть от hh.ru для
                    профессионального нетворкинга. В рамках дипломного проекта
                    я исследовала сценарий поиска контактов и первого
                    взаимодействия между пользователями.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground">
                    Роль
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    Product Designer: исследование, UX, UI, прототипирование,
                    тестирование и продуктовая логика сценария.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground">
                    Контекст
                  </h2>
                  <p className="mb-3 text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    Исследования рынка показывают, что многие карьерные
                    возможности появляются благодаря профессиональным связям, а
                    не через классические отклики на вакансии.
                  </p>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    Однако цифровой нетворкинг до сих пор остаётся сложным
                    сценарием: пользователи видят десятки подходящих контактов,
                    но не понимают, почему этот человек им подходит, стоит ли
                    начинать диалог и как написать первое сообщение.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground">
                    Проблема
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    Карьерные платформы помогают находить людей, но не помогают
                    принять решение о контакте. Профили выглядят одинаково,
                    рекомендации непрозрачны, а первое сообщение воспринимается
                    как холодное обращение к незнакомцу.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground">
                    Возможность
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    Вместо того чтобы показывать больше контактов, я
                    сфокусировалась на качестве выбора: как помочь пользователю
                    понять, почему именно этот человек может быть полезным
                    контактом.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground">
                    Исследование
                  </h2>
                  <p className="mb-3 text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    Я провела глубинные интервью с соискателями и
                    работодателями, изучила сценарии профессионального
                    нетворкинга и проанализировала карьерные платформы.
                  </p>

                  <ul className="list-disc space-y-2 pl-5 text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    <li>пользователям не хватает контекста о человеке;</li>
                    <li>рекомендации без объяснений вызывают недоверие;</li>
                    <li>важно понимать стиль общения и ценности контакта;</li>
                    <li>страх первого сообщения остаётся главным барьером.</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground">
                    Решение
                  </h2>
                  <p className="mb-3 text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    Я спроектировала сценарий с AI Match, объяснением причин
                    совпадения, культурным кодом профиля и подсказками для
                    первого сообщения.
                  </p>

                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    Пользователь видит конкретные точки пересечения:
                    профессиональный опыт, интересы, общие связи и стиль
                    общения.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground">
                    Ожидаемый эффект
                  </h2>
                  <ul className="list-disc space-y-2 pl-5 text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    <li>Conversion to First Message;</li>
                    <li>Reply Rate;</li>
                    <li>Successful Conversation Rate;</li>
                    <li>Retention.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground">
                    Итог
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted">
                    Вместо ещё одного инструмента поиска я спроектировала
                    систему, которая помогает превращать холодные контакты в
                    осознанные профессиональные знакомства.
                  </p>
                </section>
              </div>
            </aside>

            <div className="-mx-7 overflow-x-auto px-7 pb-4 md:mx-0 md:flex md:h-[560px] md:gap-5 md:overflow-x-auto md:overflow-y-hidden md:rounded-[var(--radius-card)] md:px-0 md:pb-4 md:snap-x md:snap-mandatory [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-tag-text">
              <div className="flex w-max gap-5 md:h-full">
                {screens.map((screen, index) => (
                  <div
                    key={screen}
                    className="relative h-[560px] w-[280px] shrink-0 overflow-hidden rounded-[36px] md:h-full md:min-w-[250px] md:w-[250px] md:snap-start"
                  >
                    <Image
                      src={screen}
                      alt={`Экран Сетки ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="280px"
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