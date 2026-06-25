"use client";

import Image from "next/image";
import { useRef } from "react";

export function AnimatedAvatar() {
  const avatarRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const el = avatarRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 18;
    const rotateX = -((y - centerY) / centerY) * 18;

    el.style.transform = `
      perspective(700px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(12px)
    `;
  }

  function handleMouseLeave() {
    const el = avatarRef.current;
    if (!el) return;

    el.style.transform = `
      perspective(700px)
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0)
    `;
  }

  return (
    <div
      className="relative h-20 w-20 md:h-16 md:w-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "700px" }}
    >
      <div
        ref={avatarRef}
        className="relative h-full w-full transition-transform duration-200 ease-out"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          willChange: "transform",
        }}
      >
        <Image
          src="/images/profile-avatar.png"
          alt="Аня Егорова"
          fill
          className="object-contain select-none"
          draggable={false}
          sizes="80px"
          priority
        />
      </div>
    </div>
  );
}