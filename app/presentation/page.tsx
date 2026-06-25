import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

const slides = Array.from(
  { length: 12 },
  (_, index) => `/images/presentation_${String(index + 1).padStart(2, "0")}.png`
);

export default function PresentationPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="px-7 py-10 md:px-10 md:py-8">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 md:gap-5 2xl:gap-7">
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
              <Link href="/mobile" className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70">
                Mobile
              </Link>
              <Link href="/web" className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70">
                Web
              </Link>
              <Link href="/presentation" className="flex h-12 items-center justify-center rounded-full px-8 text-[18px] font-medium text-white [background:var(--accent-gradient)]">
                Presentation
              </Link>
              <Link href="/graphic" className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70">
                Graphic
              </Link>
              <Link href="/concept" className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70">
                Concept
              </Link>
            </nav>

            <SocialLinks />
          </header>

          <div className="-mx-7 overflow-x-auto px-7 md:hidden [&::-webkit-scrollbar]:hidden">
            <nav className="flex w-max gap-3 pb-1">
              <Link href="/mobile" className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground">
                Mobile
              </Link>
              <Link href="/web" className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground">
                Web
              </Link>
              <Link href="/presentation" className="flex h-12 shrink-0 items-center justify-center rounded-full px-7 text-[18px] font-medium text-white [background:var(--accent-gradient)]">
                Presentation
              </Link>
              <Link href="/graphic" className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground">
                Graphic
              </Link>
              <Link href="/concept" className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground">
                Concept
              </Link>
            </nav>
          </div>

          <section className="grid grid-cols-1 gap-8 md:mt-5 md:grid-cols-[360px_1fr] md:gap-5 2xl:grid-cols-[420px_1fr] 2xl:gap-7">
            <aside className="rounded-[50px] bg-card p-8 md:h-[560px] md:rounded-[var(--radius-card)] 2xl:h-[680px] 2xl:p-10">
              <div className="flex h-full flex-col justify-start">
                <p className="mb-10 max-w-[300px] text-[18px] leading-[130%] text-foreground">
                  Разрабатывала презентации для отчётов, спикеров, кейсов,
                  коммерческих предложений и мероприятий.
                  <br />
                  <br />
                  Работала как по готовым брендбукам, так и создавала
                  визуальную концепцию презентаций с нуля, обеспечивая понятную
                  подачу информации и высокий уровень визуального качества.
                </p>

                <div className="flex max-w-[260px] flex-wrap gap-2">
                  <span className="rounded-full bg-tag-bg px-4 py-2 text-[14px] text-tag-text">
                    отчетные презентации
                  </span>
                  <span className="rounded-full bg-tag-bg px-4 py-2 text-[14px] text-tag-text">
                    для выступлений
                  </span>
                  <span className="rounded-full bg-tag-bg px-4 py-2 text-[14px] text-tag-text">
                    кейс-презентации
                  </span>
                </div>
              </div>
            </aside>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-7">
              {slides.map((slide, index) => (
                <div
                  key={slide}
                  className="relative aspect-[16/9] overflow-hidden rounded-[20px] bg-card"
                >
                  <Image
                    src={slide}
                    alt={`Презентация ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 480px, 100vw"
                    priority={index < 2}
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