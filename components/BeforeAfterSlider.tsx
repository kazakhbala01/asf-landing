"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  before: string;
  after: string;
  alt: string;
};

/**
 * Слайдер «до/после»: ползунок-шторка. Управляется мышью, пальцем и
 * клавиатурой (прозрачный range поверх всей области).
 */
export default function BeforeAfterSlider({ before, after, alt }: Props) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[16/9] select-none overflow-hidden">
      {/* ПОСЛЕ — нижний слой */}
      <Image
        src={after}
        alt={`${alt} — после мойки химией ASF`}
        fill
        sizes="(min-width: 1024px) 1232px, 100vw"
        className="object-cover"
      />
      {/* ДО — верхний слой, обрезается шторкой */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`${alt} — до мойки`}
          fill
          sizes="(min-width: 1024px) 1232px, 100vw"
          className="object-cover"
        />
      </div>

      {/* плашки */}
      <span className="pointer-events-none absolute left-4 top-4 bg-ink px-2.5 py-1 text-[11px] font-bold tracking-caps text-white">
        ДО
      </span>
      <span className="pointer-events-none absolute right-4 top-4 bg-amber px-2.5 py-1 text-[11px] font-bold tracking-caps text-ink">
        ПОСЛЕ
      </span>

      {/* шторка */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-[3px] -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.45)]"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" className="h-5 w-5">
            <path d="M9 6l-5 6 5 6M15 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      {/* управление: прозрачный range на всю область */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Сравнить до и после"
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />
    </div>
  );
}
