import Image from "next/image";
import Link from "next/link";
import { CaseHeader } from "@/components/CaseHeader";

const screens = ["/images/travel-main registered.png"];

export default function TravelCasePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="px-7 py-10 md:min-w-[1200px] md:px-10 md:py-8 2xl:px-14 2xl:py-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:gap-5 2xl:gap-7">
          <CaseHeader active="web" />

          <Link
            href="/"
            aria-label="Вернуться ко всем кейсам"
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
                  Travel Service — как упростить планирование путешествий
                  с&nbsp;помощью ИИ
                </h1>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    О проекте
                  </h2>
                  <p className="mb-3 text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Travel Service — концепт сервиса для планирования
                    путешествий, который помогает пользователям собирать
                    маршрут, находить интересные места и организовывать поездку
                    в одном пространстве.
                  </p>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Проект исследует, как искусственный интеллект может
                    сократить время на подготовку путешествия и сделать процесс
                    планирования менее сложным.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Роль
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Product Designer: исследование, UX, UI, прототипирование и
                    тестирование.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Контекст
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Планирование путешествия требует поиска информации в
                    десятках разных сервисов: пользователи изучают маршруты,
                    сохраняют локации, сравнивают варианты проживания и
                    собирают программу поездки вручную.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Проблема
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Существующие travel-сервисы решают отдельные задачи, но не
                    помогают собрать поездку целиком. Пользователям приходится
                    постоянно переключаться между разными инструментами.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Возможность
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Вместо создания ещё одного сервиса с подборкой направлений я
                    исследовала, как ИИ может стать персональным помощником при
                    планировании путешествий.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Исследование
                  </h2>
                  <p className="mb-3 text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Я провела глубинные интервью с путешественниками и изучила
                    их сценарии подготовки к поездкам.
                  </p>

                  <ul className="list-disc space-y-2 pl-5 text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    <li>
                      пользователи тратят много времени на поиск информации;
                    </li>
                    <li>маршрут часто собирается из нескольких сервисов;</li>
                    <li>сложно оценить реалистичность плана поездки;</li>
                    <li>важны персонализированные рекомендации.</li>
                  </ul>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Решение
                  </h2>
                  <p className="mb-3 text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Я спроектировала сервис, который помогает пользователю
                    создавать маршрут через диалог с ИИ.
                  </p>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    На основе предпочтений, бюджета и продолжительности поездки
                    система формирует персональный маршрут, предлагает места для
                    посещения и помогает организовать путешествие в одном
                    интерфейсе.
                  </p>
                </section>

                <section className="mb-6 2xl:mb-8">
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Ожидаемый эффект
                  </h2>
                  <ul className="list-disc space-y-2 pl-5 text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    <li>Сокращение времени на планирование поездки;</li>
                    <li>Повышение вовлечённости пользователей;</li>
                    <li>Рост количества сохранённых маршрутов;</li>
                    <li>Улучшение опыта за счёт персонализации.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-3 inline-flex rounded-full bg-tag-bg px-4 py-2 text-[15px] font-normal text-tag-text md:mb-2 md:block md:bg-transparent md:px-0 md:py-0 md:text-[18px] md:font-semibold md:text-foreground 2xl:text-[20px]">
                    Итог
                  </h2>
                  <p className="text-[16px] leading-[130%] text-foreground md:text-[15px] md:text-muted 2xl:text-[17px]">
                    Вместо ещё одного travel-сервиса с подборками направлений я
                    спроектировала инструмент, который помогает пользователям
                    быстрее превращать идею путешествия в готовый
                    персонализированный маршрут.
                  </p>
                </section>
              </div>
            </aside>

            <div className="h-[620px] overflow-y-auto overflow-x-hidden rounded-[50px] p-0 md:h-[560px] md:rounded-[var(--radius-card)] md:p-1 2xl:h-[680px] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-tag-text">
              {screens.map((screen, index) => (
                <div
                  key={screen}
                  className="relative mx-auto w-full max-w-[900px] 2xl:max-w-[1080px]"
                >
                  <Image
                    src={screen}
                    alt={`Лендинг Travel Service ${index + 1}`}
                    width={1400}
                    height={4200}
                    className="h-auto w-full rounded-[36px] object-contain 2xl:rounded-[44px]"
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