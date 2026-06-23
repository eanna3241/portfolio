import Image from "next/image";
import Link from "next/link";
import { CaseHeader } from "@/components/CaseHeader";

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
      <div className="px-7 py-10 md:min-w-[1200px] md:px-10 md:py-8 2xl:px-14 2xl:py-10">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 md:gap-5 2xl:gap-7">
          <CaseHeader active="mobile" />

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

          <section className="grid grid-cols-1 gap-8 md:grid-cols-[360px_1fr] md:gap-5 2xl:grid-cols-[420px_1fr] 2xl:gap-7">
            <aside className="relative h-[620px] overflow-hidden rounded-[50px] bg-card p-8 md:h-[560px] md:rounded-[var(--radius-card)] 2xl:h-[680px] 2xl:p-10">
              <div className="h-full overflow-y-auto pr-4 md:pr-5 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-tag-text">
                <h1 className="mb-6 text-[22px] font-semibold leading-[110%] text-foreground 2xl:text-[26px]">
                  Сетка — как превратить холодный нетворкинг в осознанное
                  знакомство
                </h1>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    О проекте
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted 2xl:text-[17px]">
                    Сетка — карьерная социальная сеть от hh.ru для
                    профессионального нетворкинга. В рамках дипломного проекта
                    я исследовала сценарий поиска контактов и первого
                    взаимодействия между пользователями.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Роль
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted 2xl:text-[17px]">
                    Product Designer: исследование, UX, UI, прототипирование,
                    тестирование и продуктовая логика сценария.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Контекст
                  </h2>
                  <p className="mb-3 text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted 2xl:text-[17px]">
                    Исследования рынка показывают, что многие карьерные
                    возможности появляются благодаря профессиональным связям, а
                    не через классические отклики на вакансии.
                  </p>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted 2xl:text-[17px]">
                    Однако цифровой нетворкинг до сих пор остаётся сложным
                    сценарием: пользователи видят десятки подходящих контактов,
                    но не понимают, почему этот человек им подходит, стоит ли
                    начинать диалог и как написать первое сообщение.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Проблема
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted 2xl:text-[17px]">
                    Карьерные платформы помогают находить людей, но не помогают
                    принять решение о контакте. Профили выглядят одинаково,
                    рекомендации непрозрачны, а первое сообщение воспринимается
                    как холодное обращение к незнакомцу.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Возможность
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted 2xl:text-[17px]">
                    Вместо того чтобы показывать больше контактов, я
                    сфокусировалась на качестве выбора: как помочь пользователю
                    понять, почему именно этот человек может быть полезным
                    контактом.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Исследование
                  </h2>
                  <p className="mb-3 text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted 2xl:text-[17px]">
                    Я провела глубинные интервью с соискателями и
                    работодателями, изучила сценарии профессионального
                    нетворкинга и проанализировала карьерные платформы.
                  </p>

                  <ul className="list-disc space-y-2 pl-5 text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted 2xl:text-[17px]">
                    <li>пользователям не хватает контекста о человеке;</li>
                    <li>рекомендации без объяснений вызывают недоверие;</li>
                    <li>важно понимать стиль общения и ценности контакта;</li>
                    <li>страх первого сообщения остаётся главным барьером.</li>
                  </ul>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Решение
                  </h2>
                  <p className="mb-3 text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted 2xl:text-[17px]">
                    Я спроектировала сценарий с AI Match, объяснением причин
                    совпадения, культурным кодом профиля и подсказками для
                    первого сообщения.
                  </p>

                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted 2xl:text-[17px]">
                    Пользователь видит конкретные точки пересечения:
                    профессиональный опыт, интересы, общие связи и стиль
                    общения.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Ожидаемый эффект
                  </h2>
                  <ul className="list-disc space-y-2 pl-5 text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted 2xl:text-[17px]">
                    <li>Conversion to First Message;</li>
                    <li>Reply Rate;</li>
                    <li>Successful Conversation Rate;</li>
                    <li>Retention.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[16px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Итог
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[14px] md:text-muted 2xl:text-[17px]">
                    Вместо ещё одного инструмента поиска я спроектировала
                    систему, которая помогает превращать холодные контакты в
                    осознанные профессиональные знакомства.
                  </p>
                </section>
              </div>
            </aside>

            <div className="-mx-7 overflow-x-auto px-7 pb-4 md:mx-0 md:flex md:h-[560px] md:gap-5 md:overflow-x-auto md:overflow-y-hidden md:rounded-[var(--radius-card)] md:px-0 md:pb-4 md:snap-x md:snap-mandatory 2xl:h-[680px] 2xl:gap-7 [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-tag-text">
              <div className="flex w-max gap-5 md:h-full 2xl:gap-7">
                {screens.map((screen, index) => (
                  <div
                    key={screen}
                    className="relative h-[560px] w-[280px] shrink-0 overflow-hidden rounded-[36px] md:h-full md:min-w-[250px] md:w-[250px] md:snap-start 2xl:min-w-[300px] 2xl:w-[300px] 2xl:rounded-[44px]"
                  >
                    <Image
                      src={screen}
                      alt={`Экран Сетки ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1536px) 300px, 280px"
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