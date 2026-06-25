import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

const presentationCases = [
  {
    title: "для выступлений",
    href: "/presentation/public",
    image: "/images/presentation-public.png",
    position: "md:left-[4%] md:top-[12%]",
    labelPosition: "md:right-[-28%] md:top-[42%]",
    size: "md:w-[320px] md:h-[200px]",
  },
  {
    title: "кейс-презентации",
    href: "/presentation/cases",
    image: "/images/presentation-cases.png",
    position: "md:right-[8%] md:top-[4%]",
    labelPosition: "md:left-[-28%] md:top-[42%]",
    size: "md:w-[380px] md:h-[230px]",
  },
  {
    title: "отчетные-презентации",
    href: "/presentation/reports",
    image: "/images/presentation-reports.png",
    position: "md:left-[36%] md:top-[36%]",
    labelPosition: "md:right-[-36%] md:top-[46%]",
    size: "md:w-[260px] md:h-[280px]",
  },
];

export default function PresentationPage() {
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
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px] font-medium text-foreground transition hover:opacity-70"
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
                className="flex h-12 items-center justify-center rounded-full px-8 text-[18px] font-medium text-white [background:var(--accent-gradient)]"
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
                className="flex h-12 shrink-0 items-center justify-center rounded-full bg-card px-7 text-[18px] font-medium text-foreground"
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
                className="flex h-12 shrink-0 items-center justify-center rounded-full px-7 text-[18px] font-medium text-white [background:var(--accent-gradient)]"
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

          <section className="relative grid grid-cols-1 gap-10 md:mt-5 md:block md:min-h-[760px]">
            {presentationCases.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className={`project-card group relative block animate-card-reveal md:absolute ${item.position}`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div
                  className={`relative h-[210px] w-full overflow-hidden rounded-[24px] bg-card transition duration-300 group-hover:-translate-y-1 ${item.size}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 430px, 100vw"
                    priority={index === 0}
                  />
                </div>

                <div
                  className={`mt-3 w-fit rounded-full bg-card px-7 py-3 text-[18px] font-medium leading-none text-foreground md:absolute md:mt-0 ${item.labelPosition}`}
                >
                  {item.title}
                </div>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}