"use client";

import { useRef } from "react";
import Image from "next/image";
import MediaCard from "./MediaCard";

// Реальные видео и креативы компании (из папки creative, WhatsApp-исходники).
const items: (
  | { type: "video"; src: string; label: string }
  | { type: "image"; src: string; label: string }
)[] = [
  { type: "video", src: "/media/video-1.mp4", label: "Работа пены" },
  { type: "image", src: "/media/creative-1.jpg", label: "Тестируем каждую партию" },
  { type: "video", src: "/media/video-2.mp4", label: "Мойка авто" },
  { type: "image", src: "/media/creative-2.jpg", label: "Polyrole Shine: до/после" },
  { type: "video", src: "/media/video-3.mp4", label: "Производство" },
  { type: "image", src: "/media/creative-3.jpg", label: "Black Tire" },
  { type: "video", src: "/media/video-4.mp4", label: "Разлив продукции" },
  { type: "image", src: "/media/creative-4.jpg", label: "Бесплатные образцы" },
  { type: "video", src: "/media/video-5.mp4", label: "Продукция ASF" },
  { type: "video", src: "/media/video-6.mp4", label: "ASF в работе" },
];

export default function Media() {
  const strip = useRef<HTMLDivElement>(null);
  // перетаскивание мышью: после реального drag гасим клик, чтобы видео не запускалось
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0, moved: false });

  const scrollByCards = (dir: 1 | -1) => {
    strip.current?.scrollBy({ left: dir * strip.current.clientWidth * 0.7, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !strip.current) return;
    drag.current = {
      down: true,
      startX: e.clientX,
      scrollLeft: strip.current.scrollLeft,
      moved: false,
    };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.down || !strip.current) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 6) drag.current.moved = true;
    strip.current.scrollLeft = drag.current.scrollLeft - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
  };
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section id="media" className="border-b border-line bg-soft">
      <div className="mx-auto max-w-[85rem] px-4 pt-14 sm:px-6 lg:pt-20">
        <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-amber" />
              <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
                Медиа
              </span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              ASF В ДЕЛЕ
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              aria-label="Назад"
              className="flex h-12 w-12 items-center justify-center border border-ink/25 transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              aria-label="Вперёд"
              className="flex h-12 w-12 items-center justify-center bg-amber text-ink transition-colors hover:bg-amber-dark"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* лента: стрелки, колесо, тач-свайп и перетаскивание мышью */}
      <div
        ref={strip}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className="cursor-grab select-none overflow-x-auto pb-14 active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex h-[440px] gap-3 px-4 sm:px-6 lg:h-[500px] lg:px-[max(1rem,calc((100vw-85rem)/2+1.5rem))]">
          {items.map((item) =>
            item.type === "video" ? (
              <MediaCard key={item.src} src={item.src} label={item.label} />
            ) : (
              <figure
                key={item.src}
                className="relative aspect-[9/16] h-full shrink-0 overflow-hidden bg-ink"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="300px"
                  draggable={false}
                  className="object-cover"
                />
              </figure>
            )
          )}
        </div>
      </div>
    </section>
  );
}
