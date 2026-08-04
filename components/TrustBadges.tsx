const badges = [
  {
    title: "Собственное производство",
    text: "Полный цикл — от формулы до фасовки",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-9 w-9">
        <path d="M3 21V9l6 4V9l6 4V5h6v16H3z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Надёжные поставки",
    text: "Стабильные отгрузки точно в срок",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-9 w-9">
        <path d="M2 7h12v10H2V7zm12 3h4l3 3v4h-7" strokeLinejoin="round" />
        <circle cx="6" cy="17" r="1.6" />
        <circle cx="17" cy="17" r="1.6" />
      </svg>
    ),
  },
  {
    title: "Продвинутые формулы",
    text: "Высокая концентрация — лучший результат",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-9 w-9">
        <path d="M9 3h6M10 3v5.5L4.8 18a2.5 2.5 0 0 0 2.2 3.7h10a2.5 2.5 0 0 0 2.2-3.7L14 8.5V3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 15h9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Партнёрский подход",
    text: "Растём вместе с вашим бизнесом",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-9 w-9">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2.4" />
        <path d="M3.5 20c.6-3 2.8-5 5.5-5s4.9 2 5.5 5M14.8 15.4c2.3.3 4 2 4.6 4.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-[85rem] grid-cols-1 divide-white/15 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:px-6">
        {badges.map((b) => (
          <div key={b.title} className="flex items-start gap-4 px-4 py-9 sm:px-8 lg:justify-center">
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
