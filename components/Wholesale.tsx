import Image from "next/image";
import { waLink } from "@/lib/products";

export default function Wholesale() {
  return (
    <section id="wholesale" className="bg-ink text-white">
      <div className="mx-auto grid max-w-[85rem] grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-14 lg:py-0">
        <div className="reveal lg:py-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-amber" />
            <span className="text-[11px] font-semibold tracking-caps uppercase text-white/60">
              Оптовым партнёрам
            </span>
          </div>
          <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Зарабатывайте на продаже автохимии{" "}
            <span className="text-amber">ASF</span> в своём регионе
          </h2>
          <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-white/65 sm:mt-6 sm:text-[16px]">
            Предлагаем оптовым партнёрам выгодные условия сотрудничества,
            стабильные поставки и поддержку в развитии продаж.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {[
              "Выгодные оптовые цены и маржа для партнёра",
              "Специальные условия при увеличении объёма закупок",
              "Бесплатные образцы для ваших клиентов",
              "Рекламные материалы и поддержка продаж",
              "Стабильное производство и поставки",
              "Доставка по всему Казахстану",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] font-semibold leading-snug sm:text-[15px]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 h-5 w-5 shrink-0 text-amber">
                  <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={waLink(
              "Здравствуйте! Хочу стать оптовым партнёром ASF — расскажите про условия."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-amber px-7 py-4 text-[12px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-amber-dark sm:px-8 sm:text-[13px]"
          >
            Стать оптовым партнёром
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
              <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <Image
          src="/photos/logistics.jpg"
          alt="Отгрузка продукции ASF со склада — фура и погрузчик"
          width={1536}
          height={1024}
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="h-auto w-full self-center"
        />
      </div>
    </section>
  );
}
