import Image from "next/image";
import Link from "next/link";
import { PortfolioCard } from "./PortfolioCard";

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* MOBILE */}
      <Link
        href="/mobile"
        className="transition duration-300 hover:-translate-y-1"
      >
        <PortfolioCard
          title="MOBILE"
          image="/images/mobile.png"
          imageClassName="!h-[230px] translate-y-24"
        />
      </Link>

      {/* WEB */}
      <Link
        href="/web"
        className="transition duration-300 hover:-translate-y-1"
      >
        <PortfolioCard
          title="WEB"
          image="/images/web.png"
          imageClassName="!h-[135px] translate-y-4"
        />
      </Link>

      {/* PRESENTATION */}
      <Link
        href="/presentation"
        className="transition duration-300 hover:-translate-y-1"
      >
        <PortfolioCard
          title="PRESENTATION"
          image="/images/presentation-new.png"
          imageClassName="!h-[135px] translate-y-4"
        />
      </Link>

      {/* GRAPHIC EVENT */}
      <Link
        href="/graphic"
        className="transition duration-300 hover:-translate-y-1"
      >
        <PortfolioCard
          title="GRAPHIC EVENT"
          image="/images/graphic-new.png"
          titleClassName="!text-[48px] !whitespace-nowrap"
          imageClassName="!h-[420px] translate-y-20"
        />
      </Link>

      {/* CONCEPT */}
      <Link
        href="/concept"
        className="col-span-2 transition duration-300 hover:-translate-y-1"
      >
        <PortfolioCard
          title="CONCEPT"
          wide
          titleClassName="!left-10 !top-1/2 !translate-x-0 !-translate-y-1/2 !text-left"
        >
          <div className="absolute right-10 bottom-4 flex items-end">
            <Image
              src="/images/shot-01-new.png"
              alt="Shot 1"
              width={700}
              height={450}
              className="z-20 h-[210px] w-auto translate-x-4 -rotate-[6deg] object-contain"
            />

            <Image
              src="/images/shot-02-new.png"
              alt="Shot 2"
              width={650}
              height={420}
              className="z-10 -ml-20 h-[195px] w-auto translate-y-6 object-contain"
            />
          </div>
        </PortfolioCard>
      </Link>
    </div>
  );
}