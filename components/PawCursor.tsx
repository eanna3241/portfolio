"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function PawCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    function handleMouseOver(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest("a, button, .project-card, [role='button']")
      );

      setIsHovering(isInteractive);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out md:block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${
          isHovering ? 1.12 : 1
        })`,
      }}
    >
      <Image
        src={isHovering ? "/cursor/paw-gradient.png" : "/cursor/paw-black.png"}
        alt=""
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}