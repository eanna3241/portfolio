import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

export default function GraphicPage() {
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
                />
              </div>

              <p className="text-[18px] text-foreground">
                Аня Егорова
              </p>
            </Link>

            <nav className="flex items-center gap-3">
              <Link
                href="/mobile"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px]"
              >
                Mobile
              </Link>

              <Link
                href="/web"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px]"
              >
                Web
              </Link>

              <Link
                href="/presentation"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px]"
              >
                Presentation
              </Link>

              <Link
                href="/graphic"
                className="flex h-12 items-center justify-center rounded-full px-8 text-[18px] font-medium text-white [background:var(--accent-gradient)]"
              >
                Graphic
              </Link>

              <Link
                href="/concept"
                className="flex h-12 items-center justify-center rounded-full bg-card px-8 text-[18px]"
              >
                Concept
              </Link>
            </nav>

            <SocialLinks />
          </header>

          <div className="flex h-[580px] items-center justify-center rounded-[60px] bg-card">
            <div className="max-w-[560px] text-center">
              <p className="mb-4 text-[28px] font-medium text-foreground">
                Раздел находится в разработке
              </p>

              <p className="text-[18px] leading-[140%] text-muted">
                Сейчас я собираю лучшие графические проекты,
                <br />
                айдентику и event-кейсы для портфолио
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}