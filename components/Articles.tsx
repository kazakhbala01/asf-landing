"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import {
  type Article,
  articles,
  numberedSections,
  readingMinutes,
} from "@/lib/articles";
import ArticleView, { sectionId } from "@/components/ArticleView";

export default function Articles() {
  const [open, setOpen] = useState<{ slug: string; focus?: string } | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const current = open && articles.find((a) => a.slug === open.slug);

  // карточка — настоящая ссылка на /stati/<slug> (её видит Google и открывает
  // ctrl/cmd+клик в новой вкладке); обычный клик открывает статью поверх страницы
  const onOpen = (e: MouseEvent<HTMLAnchorElement>, slug: string, focus?: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    setOpen({ slug, focus });
  };

  return (
    <section id="articles" className="border-b border-line">
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
        <div className="reveal mb-8 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-amber" />
              <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
                Полезно для автомоек
              </span>
            </div>
            <h2 className="text-[1.75rem] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              РАЗБИРАЕМ ПРОБЛЕМЫ МОЙКИ
            </h2>
          </div>
          <p className="max-w-md text-[14px] leading-relaxed text-muted sm:text-[16px]">
            Практические материалы от ASF: что проверить, прежде чем менять химию
            или увеличивать расход.
          </p>
        </div>

        <div className="space-y-5">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} onOpen={onOpen} />
          ))}
        </div>
      </div>

      {current && <ArticleModal article={current} focusId={open?.focus} onClose={close} />}
    </section>
  );
}

function ArticleCard({
  article: a,
  onOpen,
}: {
  article: Article;
  onOpen: (e: MouseEvent<HTMLAnchorElement>, slug: string, focus?: string) => void;
}) {
  const sections = numberedSections(a);
  const href = `/stati/${a.slug}`;

  return (
    <article className="reveal overflow-hidden rounded-2xl bg-ink text-white lg:grid lg:grid-cols-[1.2fr_1fr]">
      <a
        href={href}
        onClick={(e) => onOpen(e, a.slug)}
        className="group flex flex-col justify-between gap-10 p-6 sm:p-10 lg:p-12"
      >
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-bold tracking-caps uppercase text-white/50">
            <span className="bg-amber px-2.5 py-1 text-ink">Статья</span>
            <span>{readingMinutes(a)} мин чтения</span>
          </div>
          <h3 className="mt-6 max-w-xl text-[1.75rem] font-extrabold leading-[1.08] tracking-tight sm:text-[2.5rem] lg:text-[2.75rem]">
            {a.title}
          </h3>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/65 sm:text-[17px]">
            {a.description}
          </p>
        </div>
        <span className="inline-flex items-center gap-3 self-start bg-amber px-7 py-4 text-[13px] font-bold tracking-caps uppercase text-ink transition-colors group-hover:bg-white">
          Читать статью
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>

      <div className="border-t border-white/10 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
        <div className="flex items-end gap-4">
          <span className="text-[5.5rem] font-extrabold leading-[0.78] tracking-tighter text-amber sm:text-[7rem]">
            {sections.length}
          </span>
          <p className="max-w-[12rem] pb-1 text-[12px] font-bold leading-snug tracking-caps uppercase text-white/55">
            {a.numbered.label}
          </p>
        </div>
        {/* каждая причина открывает статью сразу на своём разделе */}
        <ol className="mt-7 grid grid-cols-2 gap-x-5 border-t border-white/10">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`${href}#${sectionId(s.id)}`}
                onClick={(e) => onOpen(e, a.slug, sectionId(s.id))}
                className="flex h-full items-baseline gap-2.5 border-b border-white/10 py-3 text-[13px] font-semibold leading-snug text-white/80 transition-colors hover:text-amber sm:text-[14.5px]"
              >
                <span className="text-[11px] font-bold tabular-nums text-amber sm:text-[12px]">{s.num}</span>
                {s.toc}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}

function ArticleModal({
  article,
  focusId,
  onClose,
}: {
  article: Article;
  focusId?: string;
  onClose: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    // фокус в окно статьи: пробел и стрелки сразу листают текст
    scrollRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus({ preventScroll: true });
    };
  }, [onClose]);

  // открыли с карточки по конкретной причине — сразу к ней
  useEffect(() => {
    if (!focusId) return;
    const t = setTimeout(() => document.getElementById(focusId)?.scrollIntoView({ block: "start" }), 60);
    return () => clearTimeout(t);
  }, [focusId]);

  // полоса прочитанного: меняем стиль напрямую, без перерисовки всей статьи
  const onScroll = () => {
    const el = scrollRef.current;
    const bar = barRef.current;
    if (!el || !bar) return;
    const max = el.scrollHeight - el.clientHeight;
    bar.style.transform = `scaleX(${max > 0 ? el.scrollTop / max : 0})`;
  };

  // якоря внутри статьи листают окно статьи и не дописывают #… в адрес главной
  const onAnchorClick = (e: MouseEvent<HTMLDivElement>) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link) return;
    e.preventDefault();
    document
      .getElementById(link.getAttribute("href")!.slice(1))
      ?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
  };

  const share = async () => {
    const url = `${window.location.origin}/stati/${article.slug}`;
    try {
      // на телефоне — системное меню «Поделиться» (WhatsApp, Telegram…), на компьютере — копируем ссылку
      if (navigator.share && window.matchMedia("(pointer: coarse)").matches) {
        await navigator.share({ title: article.title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // пользователь закрыл меню «Поделиться» — ничего делать не нужно
    }
  };

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-title"
      className="fixed inset-0 z-[100] flex justify-center bg-black/70 sm:items-center sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full max-w-6xl flex-col overflow-hidden bg-paper sm:h-[92vh] sm:rounded-2xl"
      >
        <header className="relative flex shrink-0 items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <p className="text-[10px] font-bold tracking-caps uppercase text-muted">
              Статья · {readingMinutes(article)} мин чтения
            </p>
            <p className="truncate text-[14px] font-extrabold tracking-tight sm:text-[15px]">
              {article.title}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={share}
              aria-label="Поделиться статьёй"
              className="flex h-10 items-center gap-2 border border-line px-3 text-[11px] font-bold tracking-caps uppercase transition-colors hover:border-ink"
            >
              {copied ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4 text-amber-dark">
                  <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              <span className="hidden sm:inline">{copied ? "Ссылка скопирована" : "Поделиться"}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Закрыть"
              className="flex h-10 w-10 items-center justify-center border border-line transition-colors hover:bg-ink hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <span
            ref={barRef}
            aria-hidden
            style={{ transform: "scaleX(0)" }}
            className="absolute -bottom-px left-0 h-[3px] w-full origin-left bg-amber"
          />
        </header>

        <div
          ref={scrollRef}
          tabIndex={-1}
          data-article-scroll
          onScroll={onScroll}
          onClick={onAnchorClick}
          className="flex-1 overflow-y-auto overscroll-contain outline-none [--article-offset:1.5rem] [--toc-top:2rem]"
        >
          <ArticleView article={article} headingLevel="h2" />
        </div>
      </div>
    </div>
  );
}
