import Image from "next/image";

export default function Wholesale() {
  return (
    <section id="wholesale" className="bg-ink text-white">
      <div className="mx-auto grid max-w-[85rem] grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-14 lg:py-0">
        <div className="lg:py-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-amber" />
            <span className="text-[11px] font-semibold tracking-caps uppercase text-white/60">
              Оптовым партнёрам
            </span>
          </div>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Сильнее вместе.
            <br />
            Растём вместе.
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/65">
            Конкурентные цены, стабильные поставки и поддержка, которая
            помогает вашей мойке зарабатывать больше. Подберём химию под ваше
            оборудование и воду, поможем настроить нормы разведения.
          </p>
          <a
            href="#contacts"
            className="mt-8 inline-flex items-center gap-2 bg-amber px-8 py-4 text-[13px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-amber-dark"
          >
            Стать партнёром
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
