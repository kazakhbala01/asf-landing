"use client";

import Image from "next/image";

export type MediaItem =
  | { type: "video"; src: string; label: string }
  | { type: "image"; src: string; label: string };

/** Карточка 9:16 в ленте: превью + клик открывает просмотр во весь экран */
export default function MediaCard({
  item,
  onOpen,
}: {
  item: MediaItem;
  onOpen: (item: MediaItem) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      aria-label={`Открыть: ${item.label}`}
      className="group relative aspect-[9/16] h-full shrink-0 overflow-hidden bg-ink text-left"
    >
      {item.type === "video" ? (
        <>
          <video
            src={item.src}
            preload="metadata"
            muted
            playsInline
            tabIndex={-1}
            className="pointer-events-none h-full w-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/5">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-transform group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6 text-ink">
                <path d="M8 5.5v13l11-6.5-11-6.5z" />
              </svg>
            </span>
          </span>
        </>
      ) : (
        <>
          <Image
            src={item.src}
            alt={item.label}
            fill
            sizes="300px"
            draggable={false}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 opacity-0 transition-opacity group-hover:opacity-100">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="h-4.5 w-4.5">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.5-4.5M11 8v6M8 11h6" strokeLinecap="round" />
            </svg>
          </span>
        </>
      )}
      <span className="pointer-events-none absolute bottom-3 left-3 right-3 text-[12px] font-bold tracking-caps uppercase text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]">
        {item.label}
      </span>
    </button>
  );
}
