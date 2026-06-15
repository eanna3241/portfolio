import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

export function Header() {
  return (
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

      <SocialLinks />
    </header>
  );
}