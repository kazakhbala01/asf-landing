import Image from "next/image";
import type { ReactNode } from "react";
import { waLink } from "@/lib/products";
import {
  type Article,
  type Block,
  formatDate,
  numberedSections,
  readingMinutes,
  tocItems,
} from "@/lib/articles";
import ArticleToc from "@/components/ArticleToc";

/** id разделов с префиксом: на главной уже есть секции #faq, #products и т. п. */
export const sectionId = (id: string) => `st-${id}`;

/**
 * Статья целиком: заголовок, оглавление, текст, призыв в конце.
 * Одна разметка для модального окна на главной и для страницы /stati/<slug>.
 */
export default function ArticleView({
  article,
  headingLevel = "h1",
  top,
}: {
  article: Article;
  /** в модальном окне на главной h1 уже занят первым экраном */
  headingLevel?: "h1" | "h2";
  /** слот над статьёй — хлебные крошки на отдельной странице */
  top?: ReactNode;
}) {
  const Title = headingLevel;
  const [lead, ...intro] = article.intro;
  const toc = tocItems(article).map((b) => ({ id: sectionId(b.id), label: b.toc, num: b.num }));
  const total = String(numberedSections(article).length).padStart(2, "0");

  return (
    <div className="mx-auto max-w-[72rem] px-4 pb-14 pt-7 sm:px-8 sm:pb-20 sm:pt-12 lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16">
      <aside className="hidden lg:block">
        <ArticleToc items={toc} variant="aside" />
      </aside>

      <article className="mx-auto max-w-[680px] lg:mx-0">
        {top}
        <header>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-bold tracking-caps uppercase text-muted">
            <span className="bg-amber px-2.5 py-1 text-ink">Статья</span>
            <span>{readingMinutes(article)} мин чтения</span>
            <span className="h-1 w-1 rounded-full bg-muted/50" />
            <time dateTime={article.published}>{formatDate(article.published)}</time>
          </div>
          <Title
            id="article-title"
            className="mt-5 text-[1.9rem] font-extrabold leading-[1.08] tracking-tight sm:text-[2.6rem] lg:text-[2.9rem]"
          >
            {article.title}
          </Title>
          <p className="mt-6 text-[17px] leading-relaxed text-ink sm:text-[20px] [&_strong]:font-bold">
            <Rich text={lead} />
          </p>
          <div className="mt-7 flex items-center gap-3.5 border-y border-line py-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink">
              <Image src="/logo.png" alt="" width={44} height={44} className="h-7 w-7" />
            </span>
            <p className="text-[13px] leading-snug text-muted">
              <span className="font-bold text-ink">Материал подготовлен ASF — Astana Soap Factory,</span>
              <br />
              казахстанским производителем профессиональной автохимии с производством в Астане
            </p>
          </div>
        </header>

        <div className="mt-2">
          {intro.map((t) => (
            <P key={t} text={t} />
          ))}
        </div>

        <div className="mt-8 lg:hidden">
          <ArticleToc items={toc} variant="inline" />
        </div>

        {article.blocks.map((b, i) => (
          <BlockView key={i} block={b} word={article.numbered.word} total={total} />
        ))}

        <Cta article={article} />
      </article>
    </div>
  );
}

/** **жирный** внутри строки */
function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return <>{parts.map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : p))}</>;
}

function P({ text }: { text: string }) {
  return (
    <p className="mt-4 text-[16px] leading-[1.75] text-ink/80 sm:text-[17px] [&_strong]:font-bold [&_strong]:text-ink">
      <Rich text={text} />
    </p>
  );
}

function Dot({ className = "bg-amber" }: { className?: string }) {
  return <span className={`mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full ${className}`} />;
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 h-5 w-5 shrink-0 text-amber-dark">
      <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BlockView({ block: b, word, total }: { block: Block; word: string; total: string }) {
  switch (b.type) {
    case "p":
      return <P text={b.text} />;

    case "h2":
      return (
        <h2
          id={sectionId(b.id)}
          className="mt-14 scroll-mt-[var(--article-offset,6rem)] border-t border-line pt-10 text-[1.5rem] font-extrabold leading-[1.15] tracking-tight sm:mt-16 sm:text-[2rem]"
        >
          {b.num && (
            <span className="mb-3 block text-[12px] font-bold tracking-caps uppercase text-amber-dark">
              {word} {b.num} / {total}
            </span>
          )}
          {b.text}
        </h2>
      );

    case "h3":
      return (
        <h3 className="mt-10 text-[1.2rem] font-extrabold leading-snug tracking-tight sm:text-[1.4rem]">
          {b.text}
        </h3>
      );

    case "ul":
      return (
        <ul className="mt-4 space-y-2.5">
          {b.items.map((it) => (
            <li key={it} className="flex gap-3 text-[16px] leading-relaxed text-ink/80 sm:text-[17px]">
              <Dot />
              <span>
                <Rich text={it} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "links":
      return (
        <ol className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {b.items.map((it, i) => (
            <li key={it.target}>
              <a
                href={`#${sectionId(it.target)}`}
                className="group flex h-full items-start gap-3 rounded-xl border border-line bg-soft px-4 py-3.5 transition-colors hover:border-ink"
              >
                <span className="pt-px text-[13px] font-extrabold tabular-nums text-amber-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14.5px] font-semibold leading-snug text-ink first-letter:uppercase">
                  {it.text}
                </span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-y-0.5">
                  <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          ))}
        </ol>
      );

    case "callout": {
      const tone = {
        ink: { box: "bg-ink text-white", title: "text-amber", text: "text-[18px] font-bold leading-snug sm:text-[20px]" },
        amber: { box: "bg-amber-soft", title: "text-amber-dark", text: "text-[16px] leading-relaxed text-ink/85 sm:text-[17px] [&_strong]:text-ink" },
        check: { box: "border border-line bg-soft", title: "text-ink", text: "text-[16px] leading-relaxed text-ink/80 sm:text-[17px]" },
      }[b.tone];
      return (
        <aside className={`mt-8 rounded-2xl p-6 sm:p-8 ${tone.box}`}>
          <p className={`text-[12px] font-bold tracking-caps uppercase ${tone.title}`}>{b.title}</p>
          {b.text?.map((t) => (
            <p key={t} className={`mt-3 [&_strong]:font-bold ${tone.text}`}>
              <Rich text={t} />
            </p>
          ))}
          {b.items && (
            <ul className="mt-4 grid gap-3">
              {b.items.map((it) => (
                <li key={it} className="flex gap-3 text-[15.5px] leading-snug text-ink sm:text-[16.5px]">
                  <Check />
                  <span className="first-letter:uppercase">{it}</span>
                </li>
              ))}
            </ul>
          )}
        </aside>
      );
    }

    case "figures":
      return (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {b.items.map((f) => (
            <div key={f.value} className="rounded-2xl border border-line p-5">
              <p className="whitespace-nowrap text-[2rem] font-extrabold leading-none tracking-tight tabular-nums sm:text-[1.55rem]">
                {f.value}
              </p>
              <p className="mt-3 text-[11px] font-bold tracking-caps uppercase text-amber-dark">{f.label}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{f.text}</p>
            </div>
          ))}
        </div>
      );

    case "compare":
      return (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {b.columns.map((col, i) => (
            <div
              key={col.title}
              className={`rounded-2xl p-6 ${i === 0 ? "border border-line bg-soft" : "bg-ink text-white"}`}
            >
              <p className={`text-[12px] font-bold tracking-caps uppercase ${i === 0 ? "text-muted" : "text-amber"}`}>
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((it) => (
                  <li
                    key={it}
                    className={`flex gap-3 text-[15.5px] leading-snug ${i === 0 ? "text-ink" : "text-white/90"}`}
                  >
                    <Dot className={i === 0 ? "bg-ink/30" : "bg-amber"} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case "steps":
      return (
        <ol className="mt-8">
          {b.items.map((s, i) => {
            const last = i === b.items.length - 1;
            return (
              <li key={s.title} className="relative flex gap-5 pb-9 last:pb-0">
                {!last && <span className="absolute bottom-0 left-[19px] top-11 w-px bg-line" />}
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[15px] font-extrabold ${
                    last ? "bg-ink text-amber" : "bg-amber text-ink"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-[11px] font-bold tracking-caps uppercase text-muted">Шаг {i + 1}</p>
                  <h3 className="mt-1 text-[17px] font-extrabold leading-snug sm:text-[19px]">{s.title}</h3>
                  {s.text.map((t) => (
                    <p key={t} className="mt-2 text-[15.5px] leading-relaxed text-ink/80 sm:text-[16.5px]">
                      {t}
                    </p>
                  ))}
                  {s.items && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <span
                          key={it}
                          className="rounded-full border border-line px-3 py-1 text-[13.5px] font-semibold text-ink/80"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      );

    case "faq":
      return (
        <div className="mt-6 border-t border-line">
          {b.items.map((f) => (
            <details key={f.q} className="group border-b border-line py-4 sm:py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[16px] font-bold leading-snug sm:text-[17px] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="shrink-0 text-3xl font-light leading-none text-amber transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              {f.a.map((a) => (
                <p key={a} className="mt-3 text-[15px] leading-relaxed text-muted sm:text-[16px]">
                  {a}
                </p>
              ))}
            </details>
          ))}
        </div>
      );
  }
}

function Cta({ article }: { article: Article }) {
  const { cta } = article;
  return (
    <section className="mt-16 rounded-2xl bg-ink p-6 text-white sm:p-10">
      <p className="flex items-center gap-3 text-[11px] font-bold tracking-caps uppercase text-amber">
        <span className="h-0.5 w-8 bg-amber" />
        Подбор под вашу мойку
      </p>
      <h2 className="mt-4 text-[1.6rem] font-extrabold leading-tight tracking-tight sm:text-[2.1rem]">
        {cta.title}
      </h2>
      {cta.text.map((t) => (
        <p key={t} className="mt-4 text-[15px] leading-relaxed text-white/65 sm:text-[16.5px]">
          {t}
        </p>
      ))}
      <p className="mt-6 border-l-2 border-amber pl-4 text-[16px] font-semibold leading-relaxed sm:text-[18px]">
        {cta.offer}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={waLink(cta.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-amber px-7 py-4 text-[13px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-white"
        >
          Подобрать автошампунь
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href={waLink(
            `Здравствуйте! Я по статье «${article.title}». Хочу получить бесплатный образец для теста на своём оборудовании.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border border-white/30 px-7 py-4 text-[13px] font-bold tracking-caps uppercase text-white transition-colors hover:border-amber hover:text-amber"
        >
          Бесплатный образец
        </a>
      </div>
    </section>
  );
}
