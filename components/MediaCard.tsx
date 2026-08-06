"use client";

import { useRef, useState } from "react";

/** Видео-карточка 9:16: клик — play/pause, поверх — кнопка воспроизведения */
export default function MediaCard({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? `Пауза: ${label}` : `Смотреть: ${label}`}
      className="group relative aspect-[9/16] h-full shrink-0 overflow-hidden bg-ink text-left"
    >
      <video
        ref={ref}
        src={src}
        preload="metadata"
        muted
        loop
        playsInline
        onEnded={() => setPlaying(false)}
        className="h-full w-full object-cover"
      />
      {!playing && (
        <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/10">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6 text-ink">
              <path d="M8 5.5v13l11-6.5-11-6.5z" />
            </svg>
          </span>
        </span>
      )}
      <span className="pointer-events-none absolute bottom-3 left-3 right-3 text-[12px] font-bold tracking-caps uppercase text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]">
        {label}
      </span>
    </button>
  );
}
