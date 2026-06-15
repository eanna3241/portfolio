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

      <SocialLinks />
    </header>
  );
}