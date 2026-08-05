import Image from "next/image";
import Canister from "./Canister";
import { categories, products, waLink, type Product } from "@/lib/products";

/** тёмный или белый текст в зависимости от светлоты акцента */
function onAccent(hex: string) {
  const v = parseInt(hex.slice(1), 16);
  const lum = 0.299 * ((v >> 16) & 255) + 0.587 * ((v >> 8) & 255) + 0.114 * (v & 255);
  return lum > 160 ? "#111111" : "#ffffff";
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article
      id={product.id}
      style={{ borderTopColor: product.accent }}
      className="reveal flex scroll-mt-24 flex-col border border-t-[3px] border-line bg-paper transition-shadow hover:shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
    >
      <div
        className="flex items-center justify-center border-b border-line py-8"
        style={{ backgroundColor: `${product.accent}0a` }}
      >
        <Canister
          name={product.name.replace("ASF ", "")}
          accent={product.accent}
          sub={product.nameRu ?? "Professional"}
          className="h-52 w-40"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[17px] font-bold uppercase leading-tight tracking-wide">
            {product.name}
          </h3>
          {product.bestseller && (
            <span
              className="shrink-0 px-1.5 py-0.5 text-[9px] font-bold tracking-caps uppercase"
              style={{ backgroundColor: product.accent, color: onAccent(product.accent) }}
            >
              Хит
            </span>
          )}
        </div>
        {product.nameRu && (
          <p className="mt-0.5 text-[11px] font-semibold tracking-caps uppercase text-muted">
            {product.nameRu}
          </p>
        )}
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
          {product.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.volumes.map((v) => (
            <span
              key={v}
              className="border border-line px-3 py-1.5 text-[13px] font-semibold"
            >
              {v}
            </span>
          ))}
        </div>

        <table className="mt-4 w-full border-t border-line text-[13.5px]">
          <caption className="pb-1.5 pt-3 text-left text-[10px] font-bold tracking-caps uppercase text-muted">
            Нормы разведения
          </caption>
          <tbody>
            {product.dilutions.map((d) => (
              <tr key={d.method} className="border-b border-line last:border-0">
                <td className="py-1.5 pr-2 text-muted">{d.method}</td>
                <td className="py-1.5 text-right font-bold tabular-nums">{d.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <a
          href={waLink(`Здравствуйте! Интересует ${product.name} — подскажите цену.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block border border-ink py-3 text-center text-[12px] font-bold tracking-caps uppercase transition-colors hover:bg-ink hover:text-white"
        >
          Получить цену
        </a>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <section id="products" className="border-b border-line">
      <div className="mx-auto max-w-[85rem] px-4 py-14 sm:px-6 lg:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-amber" />
              <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
                Каталог
              </span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              НАША ПРОДУКЦИЯ
            </h2>
          </div>
          <p className="max-w-sm text-[16px] leading-relaxed text-muted">
            Концентрированные средства для бесконтактной мойки, ухода за
            салоном и внешним видом автомобиля. Фасовка от 1 л до 20 кг.
          </p>
        </div>

        <Image
          src="/photos/products.jpg"
          alt="Линейка продукции ASF Car Wash Chemicals"
          width={1536}
          height={1024}
          sizes="(min-width: 1280px) 1232px, 100vw"
          className="mb-12 h-auto w-full"
        />

        {categories.map((cat) => {
          const items = products.filter((p) => p.category === cat.id);
          return (
            <div key={cat.id} className="mb-12 last:mb-0">
              <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-line pb-3">
                <h3 className="flex items-center gap-2.5 text-[15px] font-bold tracking-caps uppercase">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: cat.accent }}
                  />
                  {cat.title}
                  <span className="font-semibold text-muted">({items.length})</span>
                </h3>
                <p className="text-[14px] text-muted">{cat.tagline}</p>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
