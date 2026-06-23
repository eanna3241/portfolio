import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        bg-card
        rounded-[50px]
        md:rounded-[60px]
        2xl:rounded-[70px]
        3xl:rounded-[80px]
        ${className}
      `}
    >
      {children}
    </div>
  );
}