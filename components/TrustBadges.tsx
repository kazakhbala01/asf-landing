const badges = [
  {
    title: "Стабильное качество",
    text: "Контроль каждой партии — одна формула всегда",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 sm:h-9 sm:w-9">
        <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Профессиональные рецептуры",
    text: "Собственные формулы под реальные условия моек",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 sm:h-9 sm:w-9">
        <path d="M9 3h6M10 3v5.5L4.8 18a2.5 2.5 0 0 0 2.2 3.7h10a2.5 2.5 0 0 0 2.2-3.7L14 8.5V3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 15h9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Сильная моющая способность",
    text: "Активная пена отрывает грязь без ручной мойки",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 sm:h-9 sm:w-9">
        <path d="M12 3s6.5 7 6.5 11.5a6.5 6.5 0 0 1-13 0C5.5 10 12 3 12 3z" strokeLinejoin="round" />
        <path d="M9 14.5a3.2 3.2 0 0 0 2.4 3.4" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: "Безопасность для оборудования",
    text: "Не вредит пенокомплектам, дозатронам и ЛКП",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 sm:h-9 sm:w-9">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1h.2a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Экономичный расход",
    text: "Концентраты до 1:200 — ниже себестоимость мойки",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 sm:h-9 sm:w-9">
        <path d="M12 21a9 9 0 1 1 9-9" strokeLinecap="round" />
        <path d="M12 12l4.5-4.5" strokeLinecap="round" />
        <path d="M18.5 15.5l2.5 1-2 2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Работаем по всему Казахстану",
    text: "Отгрузка со склада в Астане в любой регион",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 sm:h-9 sm:w-9">
        <path d="M12 21s-6.5-5.7-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.3 12 21 12 21z" strokeLinejoin="round" />
        <circle cx="12" cy="10.5" r="2.3" />
      </svg>
    ),
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-[85rem] grid-cols-1 divide-white/15 sm:grid-cols-2 sm:divide-x lg:grid-cols-3 lg:px-6">
        {badges.map((b) => (
          <div key={b.title} className="reveal flex items-start gap-3.5 px-4 py-6 sm:gap-4 sm:px-8 sm:py-8">
            <span className="mt-0.5 shrink-0 text-amber">{b.icon}</span>
            <div>
              <p className="text-[14px] font-bold tracking-caps uppercase leading-snug">
                {b.title}
              </p>
              <p className="mt-1.5 text-[13px] leading-snug text-white/60">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
