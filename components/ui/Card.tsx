import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-[var(--radius-card)] bg-card ${className}`.trim()}
    >
      {children}
    </div>
  );
}
