import Image from "next/image";
import Link from "next/link";
import { PortfolioCard } from "./PortfolioCard";

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Link href="/mobile" className="transition duration-300 hover:-translate-y-1">
        <PortfolioCard
          title="MOBILE"
          image="/images/mobile.png"
          imageClassName="!h-[230px] translate-y-24 md:!h-[230px]"
        />
      </Link>

      <Link href="/web" className="transition duration-300 hover:-translate-y-1">
        <PortfolioCard
          title="WEB"
          image="/images/web.png"
          imageClassName="!h-[135px] translate-y-4"
        />
      </Link>

      <Link href="/presentation" className="transition duration-300 hover:-translate-y-1">
        <PortfolioCard
          title="PRESENTATION"
          image="/images/presentation-new.png"
          imageClassName="!h-[135px] translate-y-4"
        />
      </Link>

      <Link href="/graphic" className="transition duration-300 hover:-translate-y-1">
        <PortfolioCard
          title="GRAPHIC EVENT"
          image="/images/graphic-new.png"
          titleClassName="!whitespace-nowrap"
          imageClassName="!h-[300px] translate-y-16 md:!h-[420px] md:translate-y-20"
        />
      </Link>

      <Link
        href="/concept"
        className="transition duration-300 hover:-translate-y-1 md:col-span-2"
      >
        <PortfolioCard
          title="CONCEPT"
          wide
          titleClassName="!left-1/2 !top-0 !-translate-x-1/2 !translate-y-0 md:!left-10 md:!top-1/2 md:!translate-x-0 md:!-translate-y-1/2 md:!text-left"
        >
          <div className="absolute right-4 bottom-5 flex items-end md:right-10 md:bottom-4">
            <Image
              src="/images/shot-01-new.png"
              alt="Shot 1"
              width={700}
              height={450}
              className="z-20 h-[150px] w-auto translate-x-4 -rotate-[6deg] object-contain md:h-[210px]"
            />

            <Image
              src="/images/shot-02-new.png"
              alt="Shot 2"
              width={650}
              height={420}
              className="z-10 -ml-16 h-[145px] w-auto translate-y-4 object-contain md:-ml-20 md:h-[195px] md:translate-y-6"
            />
          </div>
        </PortfolioCard>
      </Link>
    </div>
  );
}