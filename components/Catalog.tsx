"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Canister from "./Canister";
import { categories, groups, products, waLink, type Product } from "@/lib/products";

/** тёмный или белый текст в зависимости от светлоты акцента */
function onAccent(hex: string) {
  const v = parseInt(hex.slice(1), 16);
  const lum = 0.299 * ((v >> 16) & 255) + 0.587 * ((v >> 8) & 255) + 0.114 * (v & 255);
  return lum > 160 ? "#111111" : "#ffffff";
}

const catOf = (p: Product) => categories.find((c) => c.id === p.category)!;

function PriceButton({ product, className = "" }: { product: Product; className?: string }) {
  return (
    <a
      href={waLink(`Здравствуйте! Интересует ${product.name} — подскажите цену.`)}
      target="_blank"
      rel="noopener noreferrer"
      className={`block bg-amber py-3 text-center text-[12px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-amber-dark ${className}`}
    >
      Получить цену
    </a>
  );
}

function Card({ product, onDetails }: { product: Product; onDetails: () => void }) {
  const cat = catOf(product);
  return (
    <article className="reveal flex flex-row border border-line bg-paper sm:flex-col">
      <div
        className="flex w-[104px] shrink-0 items-center justify-center border-r border-line py-4 sm:w-auto sm:border-r-0 sm:border-b sm:py-7"
        style={{ backgroundColor: `${product.accent}0d` }}
      >
        <Canister
          name={product.name.replace("ASF ", "")}
          accent={product.accent}
          sub={product.nameRu ?? "Professional"}
          className="h-24 w-[68px] sm:h-40 sm:w-32"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: product.accent }}
          />
          <span className="text-[10px] font-bold tracking-caps uppercase text-muted">
            {cat.title}
          </span>
          {product.bestseller && (
            <span
              className="ml-auto px-1.5 py-0.5 text-[9px] font-bold tracking-caps uppercase"
              style={{ backgroundColor: product.accent, color: onAccent(product.accent) }}
            >
              Хит
            </span>
          )}
        </div>
        <h3 className="mt-2 text-[15px] font-bold uppercase leading-tight tracking-wide sm:text-[16px]">
          {product.name}
        </h3>
        <p className="mt-1.5 flex-1 text-[13px] leading-snug text-muted sm:text-[14px]">
          {product.short}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.volumes.map((v) => (
            <span key={v} className="border border-line px-2 py-1 text-[11px] font-semibold">
              {v}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <PriceButton product={product} className="flex-1 whitespace-nowrap px-3" />
          <button
            type="button"
            onClick={onDetails}
            className="shrink-0 text-left text-[12px] font-semibold tracking-caps uppercase text-muted transition-colors hover:text-ink sm:text-center"
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
  onClose,
}: {
  groupId: "foam" | "care";
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

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-label={group.title}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[92vh] w-full max-w-4xl flex-col bg-paper sm:max-h-[88vh]"
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
                <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-line pb-2">
                  <h3 className="flex items-center gap-2 text-[13px] font-bold tracking-caps uppercase">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: cat.accent }}
                    />
                    {cat.title}
                  </h3>
                  <p className="text-[12px] text-muted">{cat.tagline}</p>
                </div>

                <div className="space-y-5">
                  {items.map((p) => (
                    <div
                      key={p.id}
                      className="grid grid-cols-[64px_1fr] gap-4 border-b border-line pb-5 last:border-0 last:pb-0 sm:grid-cols-[88px_1fr_200px] sm:gap-6"
                    >
                      <div
                        className="flex items-start justify-center py-2"
                        style={{ backgroundColor: `${p.accent}0d` }}
                      >
                        <Canister
                          name={p.name.replace("ASF ", "")}
                          accent={p.accent}
                          sub={p.nameRu ?? "Professional"}
                          className="h-20 w-14 sm:h-28 sm:w-20"
                        />
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold uppercase leading-tight tracking-wide">
                          {p.name}
                        </h4>
                        {p.nameRu && (
                          <p className="text-[11px] font-semibold tracking-caps uppercase text-muted">
                            {p.nameRu}
                          </p>
                        )}
                        <p className="mt-2 text-[13px] leading-relaxed text-muted">
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
  const [open, setOpen] = useState<"foam" | "care" | null>(null);

  return (
    <section id="products" className="border-b border-line">
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
        <div className="reveal mb-8 grid gap-6 lg:mb-12 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-10">
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
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted sm:mt-4 sm:text-[16px]">
              Концентраты для бесконтактной мойки, ухода за салоном и внешним
              видом авто. Фасовка от 0,5 л до 20 кг.
            </p>
          </div>
          <Image
            src="/photos/products-wide.jpg"
            alt="Линейка продукции ASF Car Wash Chemicals"
            width={1536}
            height={690}
            sizes="(min-width: 1024px) 660px, 100vw"
            className="h-auto w-full"
          />
        </div>

        {groups.map((group) => {
          const featured = group.featured
            .map((id) => products.find((p) => p.id === id)!)
            .filter(Boolean);
          const total = products.filter((p) => group.categories.includes(p.category)).length;

          return (
            <div key={group.id} className="mb-10 last:mb-0 lg:mb-14">
              <div className="reveal mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-line pb-3">
                <div>
                  <h3 className="text-[17px] font-extrabold tracking-caps uppercase sm:text-[19px]">
                    {group.title}
                    <span className="ml-2 text-[13px] font-semibold text-muted">
                      {total} позиций
                    </span>
                  </h3>
                  <p className="mt-1 text-[13px] text-muted sm:text-[14px]">
                    {group.tagline}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(group.id)}
                  className="flex items-center gap-2 border border-ink px-5 py-3 text-[12px] font-bold tracking-caps uppercase transition-colors hover:bg-ink hover:text-white"
                >
                  Весь каталог
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                    <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5">
                {featured.map((p) => (
                  <Card key={p.id} product={p} onDetails={() => setOpen(group.id)} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {open && <Modal groupId={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
