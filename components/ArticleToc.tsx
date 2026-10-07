"use client";

import { useEffect, useRef, useState } from "react";

type Item = { id: string; label: string; num?: string };

/**
 * Оглавление статьи. aside — липкая колонка на компьютере с подсветкой
 * текущего раздела; inline — раскрывающийся список для телефона.
 * Работает и в модальном окне (прокручивается [data-article-scroll]),
 * и на отдельной странице (прокручивается окно).
 */
export default function ArticleToc({
  items,
  variant,
}: {
  items: Item[];
  variant: "aside" | "inline";
}) {
  const [active, setActive] = useState(items[0]?.id);
  const ref = useRef<HTMLElement>(null);
  const ids = items.map((i) => i.id).join(",");

  useEffect(() => {
    if (variant !== "aside") return;
    const scroller = ref.current?.closest<HTMLElement>("[data-article-scroll]");
    const list = ids.split(",");
    let frame = 0;

    // активен последний раздел, чей заголовок уже ушёл к верху окна
    const update = () => {
      frame = 0;
      const top = scroller ? scroller.getBoundingClientRect().top : 0;
      let current = list[0];
      for (const id of list) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - top < 160) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const target: HTMLElement | Window = scroller ?? window;
    update();
    target.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      target.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ids, variant]);

  if (variant === "inline") {
    return (
      <details className="group rounded-2xl border border-line bg-soft">
        <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-[12px] font-bold tracking-caps uppercase [&::-webkit-details-marker]:hidden">
          Содержание
          <span className="text-2xl font-light leading-none text-amber transition-transform duration-200 group-open:rotate-45">
            +
          </span>
        </summary>
        <ol className="border-t border-line px-5 py-2">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                // сворачиваем список до прокрутки, иначе страница «уедет» на его высоту
                onClick={(e) => e.currentTarget.closest("details")?.removeAttribute("open")}
                className="flex gap-2.5 py-2 text-[14.5px] leading-snug text-ink/80"
              >
                {i.num && <span className="font-bold tabular-nums text-amber-dark">{i.num}</span>}
                {i.label}
              </a>
            </li>
          ))}
        </ol>
      </details>
    );
  }

  return (
    <nav ref={ref} aria-label="Содержание" className="sticky top-[var(--toc-top,6rem)]">
      <p className="mb-4 flex items-center gap-2.5 text-[11px] font-bold tracking-caps uppercase text-muted">
        <span className="h-0.5 w-5 bg-amber" />
        Содержание
      </p>
      <ol className="border-l border-line">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              aria-current={active === i.id ? "true" : undefined}
              className={`-ml-px flex gap-2 border-l-2 py-1.5 pl-4 text-[13px] leading-snug transition-colors ${
                active === i.id
                  ? "border-amber font-bold text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {i.num && <span className="tabular-nums text-amber-dark">{i.num}</span>}
              {i.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
