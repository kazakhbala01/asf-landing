"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Canister from "./Canister";
import { categories, groups, products, tiers, waLink, type Product } from "@/lib/products";

/** прямоугольник ценового уровня: Старт → Оптима → Премиум */
function TierBadge({ product, className = "" }: { product: Product; className?: string }) {
  const t = tiers[product.tier];
  const style =
    product.tier === "premium"
      ? "border-ink bg-ink text-white"
      : product.tier === "optima"
        ? "border-amber bg-amber/15 text-ink"
        : "border-line bg-paper text-muted";
  return (
    <span
      title={t.hint}
      className={`border px-2 py-[3px] text-[10px] font-bold tracking-caps uppercase ${style} ${className}`}
    >
      {t.label}
    </span>
  );
}

/** тёмный или белый текст в зависимости от светлоты акцента */
function onAccent(hex: string) {
  const v = parseInt(hex.slice(1), 16);
  const lum = 0.299 * ((v >> 16) & 255) + 0.587 * ((v >> 8) & 255) + 0.114 * (v & 255);
  return lum > 160 ? "#111111" : "#ffffff";
}

const catOf = (p: Product) => categories.find((c) => c.id === p.category)!;

/** фото продукта или SVG-канистра, если фото ещё нет */
function ProductShot({
  product,
  className,
  sizes = "320px",
}: {
  product: Product;
  className: string;
  sizes?: string;
}) {
  if (product.image) {
    return (
      <Image
        src={product.image}
        alt={product.name}
        width={1200}
        height={680}
        sizes={sizes}
        draggable={false}
        className={`object-contain ${className}`}
      />
    );
  }
  return (
    <Canister
      name={product.name.replace("ASF ", "")}
      accent={product.accent}
      sub={product.nameRu ?? "Professional"}
      className={className}
    />
  );
}

function PriceButton({ product, className = "" }: { product: Product; className?: string }) {
  return (
    <a
      href={waLink(`Здравствуйте! Интересует ${product.name} — подскажите цену.`)}
      target="_blank"
      rel="noopener noreferrer"
      className={`block bg-amber py-3 text-center text-[12px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-amber-dark lg:py-3.5 lg:text-[13px] ${className}`}
    >
      Получить цену
    </a>
  );
}

function Card({ product, onDetails }: { product: Product; onDetails: () => void }) {
  const cat = catOf(product);
  return (
    <article className="reveal group flex flex-row border border-line bg-paper transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] sm:flex-col">
      {/* цветная метка линейки */}
      <span
        className="w-1 shrink-0 sm:h-1 sm:w-auto"
        style={{ backgroundColor: product.accent }}
      />
      <button
        type="button"
        onClick={onDetails}
        aria-label={`Открыть каталог: ${product.name}`}
        className="flex w-[132px] shrink-0 items-center justify-center border-r border-line bg-white p-2 transition-opacity hover:opacity-80 sm:w-auto sm:border-b sm:border-r-0 sm:p-5"
      >
        <ProductShot
          product={product}
          sizes="(min-width: 1024px) 380px, 200px"
          className="h-28 w-full sm:h-44 lg:h-56"
        />
      </button>
      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
          <span
            className="h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: product.accent }}
          />
          <span className="text-[10px] font-bold tracking-caps uppercase text-muted lg:text-[11px]">
            {cat.title}
          </span>
          <span className="ml-auto flex items-center gap-1.5">
            <TierBadge product={product} />
            {product.bestseller && (
              <span
                className="px-1.5 py-[3px] text-[9px] font-bold tracking-caps uppercase lg:text-[10px]"
                style={{ backgroundColor: product.accent, color: onAccent(product.accent) }}
              >
                Хит
              </span>
            )}
          </span>
        </div>
        <button
          type="button"
          onClick={onDetails}
          className="mt-2 text-left text-[15px] font-bold uppercase leading-tight tracking-wide transition-colors hover:text-amber-dark sm:text-[16px] lg:text-[18px]"
        >
          {product.name}
        </button>
        <p className="mt-1.5 flex-1 text-[13px] leading-snug text-muted sm:text-[14px] lg:mt-2 lg:text-[15px]">
          {product.short}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5 lg:mt-4">
          {product.volumes.map((v) => (
            <span
              key={v}
              className="border border-line px-2 py-1 text-[11px] font-semibold lg:px-2.5 lg:text-[12px]"
            >
              {v}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 lg:mt-5">
          <PriceButton product={product} className="flex-1 whitespace-nowrap px-3" />
          <button
            type="button"
            onClick={onDetails}
            className="shrink-0 text-left text-[12px] font-semibold tracking-caps uppercase text-muted transition-colors hover:text-ink sm:text-center lg:text-[13px]"
          >
            Детали →
          </button>
        </div>
      </div>
    </article>
  );
}

function Modal({
  groupId,
  focusId,
  onClose,
}: {
  groupId: "foam" | "care";
  focusId?: string;
  onClose: () => void;
}) {
  const group = groups.find((g) => g.id === groupId)!;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // прокручиваем к товару, по которому кликнули
  useEffect(() => {
    if (!focusId) return;
    const t = setTimeout(() => {
      document
        .getElementById(`catalog-item-${focusId}`)
        ?.scrollIntoView({ block: "center" });
    }, 60);
    return () => clearTimeout(t);
  }, [focusId]);

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-label={group.title}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[92vh] w-full max-w-5xl flex-col bg-paper sm:max-h-[88vh]"
      >
        <header className="flex items-start justify-between gap-4 border-b border-line px-4 py-4 sm:px-7 sm:py-5">
          <div>
            <p className="text-[10px] font-bold tracking-caps uppercase text-muted">
              Каталог
            </p>
            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
              {group.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-line transition-colors hover:bg-ink hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <div className="overflow-y-auto px-4 py-5 sm:px-7 sm:py-6">
          {group.categories.map((catId) => {
            const cat = categories.find((c) => c.id === catId)!;
            const items = products.filter((p) => p.category === catId);
            return (
              <div key={catId} className="mb-8 last:mb-0">
                <div className="mb-4 border-b border-line pb-3">
                  <h3 className="flex items-center gap-2 text-[13px] font-bold tracking-caps uppercase sm:text-[14px]">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: cat.accent }}
                    />
                    {cat.title}
                    <span className="font-semibold text-muted">
                      ({items.length})
                    </span>
                  </h3>
                  <p className="mt-1.5 max-w-3xl text-[12.5px] leading-snug text-muted sm:text-[13.5px]">
                    {cat.tagline}
                  </p>
                </div>

                <div className="space-y-5">
                  {items.map((p) => (
                    <div
                      key={p.id}
                      id={`catalog-item-${p.id}`}
                      className={`grid grid-cols-[76px_1fr] gap-4 border-b border-line pb-5 last:border-0 last:pb-0 sm:grid-cols-[150px_1fr_210px] sm:gap-6 ${
                        p.id === focusId
                          ? "rounded-sm ring-2 ring-amber ring-offset-8 ring-offset-paper"
                          : ""
                      }`}
                    >
                      <div className="flex items-start justify-center bg-white py-1">
                        <ProductShot
                          product={p}
                          sizes="150px"
                          className="h-20 w-full sm:h-28"
                        />
                      </div>
                      <div>
                        <div className="mb-1.5 flex flex-wrap items-center gap-2">
                          <TierBadge product={p} />
                          {p.bestseller && (
                            <span
                              className="px-1.5 py-0.5 text-[9px] font-bold tracking-caps uppercase"
                              style={{ backgroundColor: p.accent, color: onAccent(p.accent) }}
                            >
                              Хит
                            </span>
                          )}
                        </div>
                        <h4 className="text-[14px] font-bold uppercase leading-tight tracking-wide sm:text-[15px]">
                          {p.name}
                        </h4>
                        {p.nameRu && (
                          <p className="text-[11px] font-semibold tracking-caps uppercase text-muted">
                            {p.nameRu}
                          </p>
                        )}
                        <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-[14px]">
                          {p.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {p.volumes.map((v) => (
                            <span
                              key={v}
                              className="border border-line px-2 py-1 text-[11px] font-semibold"
                            >
                              {v}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 sm:hidden">
                          <PriceButton product={p} />
                        </div>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        {p.dilutions.length > 0 ? (
                          <table className="w-full text-[12.5px]">
                            <caption className="pb-1 text-left text-[10px] font-bold tracking-caps uppercase text-muted">
                              Нормы разведения
                            </caption>
                            <tbody>
                              {p.dilutions.map((d) => (
                                <tr key={d.method} className="border-b border-line last:border-0">
                                  <td className="py-1.5 pr-2 text-muted">{d.method}</td>
                                  <td className="py-1.5 text-right font-bold tabular-nums">
                                    {d.value}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : (
                          <p className="text-[12.5px] leading-snug text-muted">
                            <span className="block pb-1 text-[10px] font-bold tracking-caps uppercase">
                              Нормы разведения
                            </span>
                            Подберём под ваше оборудование и воду — напишите нам.
                          </p>
                        )}
                        <div className="mt-3 hidden sm:block">
                          <PriceButton product={p} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Catalog() {
  // открытая витрина + товар, на котором нужно показать каталог
  const [open, setOpen] = useState<{
    group: "foam" | "care";
    focus?: string;
  } | null>(null);

  return (
    <section id="products" className="border-b border-line">
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
        <div className="reveal mb-8 grid gap-6 lg:mb-14 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-12">
          <div>
            <div className="mb-3 flex items-center gap-3 sm:mb-4">
              <span className="h-0.5 w-8 bg-amber" />
              <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
                Каталог
              </span>
            </div>
            <h2 className="text-[1.75rem] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              НАША ПРОДУКЦИЯ
            </h2>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted sm:mt-4 sm:text-[16px] lg:text-[17px]">
              Концентраты для бесконтактной мойки, ухода за салоном и внешним
              видом авто. Фасовка от 0,5 л до 20 кг.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { v: String(products.length), l: "продуктов" },
                { v: "5", l: "линеек" },
                { v: "1:200", l: "разведение" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-2xl font-extrabold tracking-tight lg:text-3xl">
                    {s.v}
                    <span className="text-amber">.</span>
                  </p>
                  <p className="text-[12px] text-muted">{s.l}</p>
                </div>
              ))}
            </div>

            {/* легенда ценовых уровней */}
            <div className="mt-6 border-t border-line pt-4">
              <p className="mb-2.5 text-[10px] font-bold tracking-caps uppercase text-muted">
                Ценовые уровни
              </p>
              <ul className="flex flex-col gap-2">
                {(["start", "optima", "premium"] as const).map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span
                      className={`w-[84px] shrink-0 border px-2 py-[3px] text-center text-[10px] font-bold tracking-caps uppercase ${
                        t === "premium"
                          ? "border-ink bg-ink text-white"
                          : t === "optima"
                            ? "border-amber bg-amber/15 text-ink"
                            : "border-line bg-paper text-muted"
                      }`}
                    >
                      {tiers[t].label}
                    </span>
                    <span className="text-[12px] text-muted">{tiers[t].hint}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* фото линейки: рамка + подпись поверх, чтобы не выглядело вырезкой */}
          <figure className="relative">
            <Image
              src="/photos/products-wide.jpg"
              alt="Линейка продукции ASF Car Wash Chemicals"
              width={1536}
              height={690}
              sizes="(min-width: 1024px) 700px, 100vw"
              className="h-auto w-full"
            />
            <span className="absolute -bottom-px left-0 flex items-center gap-2 bg-ink px-3 py-2 text-[10px] font-bold tracking-caps uppercase text-white sm:px-4 sm:text-[11px]">
              <span className="h-1.5 w-1.5 bg-amber" />
              Собственное производство · Астана
            </span>
            <span className="absolute -right-0 -top-0 hidden h-16 w-16 border-r-2 border-t-2 border-amber lg:block" />
          </figure>
        </div>

        {groups.map((group) => {
          const featured = group.featured
            .map((id) => products.find((p) => p.id === id)!)
            .filter(Boolean);
          const total = products.filter((p) => group.categories.includes(p.category)).length;

          return (
            <div key={group.id} className="mb-10 last:mb-0 lg:mb-16">
              <div className="reveal mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-line pb-3 lg:mb-7">
                <div>
                  <h3 className="text-[17px] font-extrabold tracking-caps uppercase sm:text-[19px] lg:text-[22px]">
                    {group.title}
                    <span className="ml-2 text-[13px] font-semibold text-muted lg:text-[14px]">
                      {total} позиций
                    </span>
                  </h3>
                  <p className="mt-1 text-[13px] text-muted sm:text-[14px] lg:text-[15px]">
                    {group.tagline}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen({ group: group.id })}
                  className="flex items-center gap-2 border border-ink px-5 py-3 text-[12px] font-bold tracking-caps uppercase transition-colors hover:bg-ink hover:text-white lg:px-7 lg:py-4 lg:text-[13px]"
                >
                  Весь каталог
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                    <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5 lg:gap-6">
                {featured.map((p) => (
                  <Card
                    key={p.id}
                    product={p}
                    onDetails={() => setOpen({ group: group.id, focus: p.id })}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {open && (
        <Modal
          groupId={open.group}
          focusId={open.focus}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}
