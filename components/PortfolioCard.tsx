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
  const isWideCard = wide;

  return (
    <Card
      className={`
        relative overflow-hidden rounded-[60px] bg-white
        ${wide ? "col-span-2 h-[220px]" : "h-[180px]"}
      `}
    >
      <h3
        className={`
          absolute z-0 text-[48px] font-semibold uppercase leading-none
          tracking-[-0.06em] text-[#E8E6E4]
          pointer-events-none select-none
          ${
            isWideCard
              ? "left-10 top-1/2 -translate-y-1/2"
              : "left-1/2 top-0 -translate-x-1/2"
          }
          ${titleClassName}
        `}
      >
        {title}
      </h3>

      {children ? (
        <div className="relative z-10 h-full">
          {children}
        </div>
      ) : image ? (
        <div className="absolute inset-0 z-10 flex items-end justify-center overflow-hidden">
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