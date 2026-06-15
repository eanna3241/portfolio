import Image from "next/image";

const socialLinks = [
  {
    href: "https://t.me/av_egorova",
    defaultIcon: "/icons/telegram.svg",
    hoverIcon: "/icons/telegram-hover.svg",
    alt: "Telegram",
  },
  {
    href: "mailto:eanna3241@gmail.com",
    defaultIcon: "/icons/mail.svg",
    hoverIcon: "/icons/mail-hover.svg",
    alt: "Email",
  },
  {
    href: "https://www.linkedin.com/in/anna-egorova-8162aa33a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    defaultIcon: "/icons/linkedin.svg",
    hoverIcon: "/icons/linkedin-hover.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://drive.google.com/drive/folders/1BGiLHS6uAlGXZYoMb_Z-p9SY1YSJf1Ur?usp=share_link",
    defaultIcon: "/icons/resume.svg",
    hoverIcon: "/icons/resume-hover.svg",
    alt: "Resume",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.alt}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block h-10 w-10"
        >
          {/* Обычная иконка */}
          <Image
            src={link.defaultIcon}
            alt={link.alt}
            fill
            className="transition-opacity duration-300 group-hover:opacity-0"
          />

          {/* Hover иконка */}
          <Image
            src={link.hoverIcon}
            alt={link.alt}
            fill
            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </a>
      ))}
    </div>
  );
}