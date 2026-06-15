import Image from "next/image";
import { Card } from "./ui/Card";

type PortfolioCardProps = {
  title: string;
  image?: string;
  wide?: boolean;
  children?: React.ReactNode;
  imageClassName?: string;
  titleClassName?: string;
};

export function PortfolioCard({
  title,
  image,
  wide = false,
  children,
  imageClassName = "",
  titleClassName = "",
}: PortfolioCardProps) {
  return (
    <Card
      className={`
        relative overflow-hidden rounded-[50px] bg-white md:rounded-[60px]
        ${wide ? "h-[180px] md:col-span-2 md:h-[220px]" : "h-[180px]"}
      `}
    >
      <h3
        className={`
          absolute left-1/2 top-0 z-0 -translate-x-1/2
          text-[48px] font-semibold uppercase leading-none tracking-[-0.06em]
          text-[#E8E6E4] pointer-events-none select-none
          md:text-[48px]
          ${titleClassName}
        `}
      >
        {title}
      </h3>

      {children ? (
        <div className="relative z-10 h-full">{children}</div>
      ) : image ? (
        <div className="absolute inset-0 z-10 flex items-end justify-center">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className={`h-[150px] w-auto object-contain ${imageClassName}`}
          />
        </div>
      ) : null}
    </Card>
  );
}