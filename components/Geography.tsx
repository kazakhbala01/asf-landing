import { waLink } from "@/lib/products";

// TODO: примерный список — заменить на реальные города поставок от клиента.
const cities = [
  "Астана",
  "Алматы",
  "Караганда",
  "Шымкент",
  "Актобе",
  "Павлодар",
  "Костанай",
  "Атырау",
  "Кокшетау",
  "Усть-Каменогорск",
];

export default function Geography() {
  return (
    <section className="border-b border-line bg-ink text-white">
      <div className="mx-auto max-w-[85rem] px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="reveal">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-amber" />
              <span className="text-[11px] font-semibold tracking-caps uppercase text-white/60">
                География
              </span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              УЖЕ <span className="text-amber">15+ ГОРОДОВ</span> КАЗАХСТАНА
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-white/65">
              Отгружаем со склада в Астане в любой регион. Ваш город есть в
              списке? Присоединяйтесь к мойкам, которые уже работают на ASF.
            </p>
            <a
              href={waLink("Здравствуйте! Есть ли доставка в мой город? Хочу заказать автохимию ASF.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block bg-amber px-7 py-4 text-[13px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-amber-dark"
            >
              Узнать про свой город
            </a>
          </div>
          <div className="reveal flex flex-wrap gap-3">
            {cities.map((c) => (
              <span
                key={c}
                className="flex items-center gap-2 border border-white/20 px-4 py-2.5 text-[14px] font-semibold transition-colors hover:border-amber"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 text-amber">
                  <path d="M12 21s-6.5-5.7-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.3 12 21 12 21z" strokeLinejoin="round" />
                  <circle cx="12" cy="10.5" r="2" />
                </svg>
                {c}
              </span>
            ))}
            <span className="flex items-center border border-dashed border-white/25 px-4 py-2.5 text-[14px] font-semibold text-white/50">
              и другие города
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
