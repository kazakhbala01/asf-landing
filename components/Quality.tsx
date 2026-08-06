const points = [
  {
    title: "Контроль каждой партии",
    icon: (
      // планшет с чек-листом
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 sm:h-12 sm:w-12">
        <path d="M9 4h6M9 4a2 2 0 0 0-2 2H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1a2 2 0 0 0-2-2M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 13l2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Стабильная рецептура",
    icon: (
      // лабораторная колба
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 sm:h-12 sm:w-12">
        <path d="M9.5 3h5M10.5 3v5.8L5 17.6A2.6 2.6 0 0 0 7.3 21.5h9.4a2.6 2.6 0 0 0 2.3-3.9L13.5 8.8V3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.6 15h8.8" strokeLinecap="round" />
        <circle cx="11" cy="18" r="0.4" fill="currentColor" />
        <circle cx="13.6" cy="17.2" r="0.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Безопасно для ЛКП",
    icon: (
      // кузов авто с бликом
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 sm:h-12 sm:w-12">
        <path d="M4 16v-3.2c0-.5.1-.9.4-1.3l1.8-3A2.5 2.5 0 0 1 8.3 7.3h7.4c.9 0 1.7.4 2.1 1.2l1.8 3c.3.4.4.8.4 1.3V16" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 16h18" strokeLinecap="round" />
        <circle cx="7.5" cy="16.5" r="1.8" />
        <circle cx="16.5" cy="16.5" r="1.8" />
        <path d="M14.5 3.5c1.5.6 2.7 1 4 1" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Формулы для жёсткой воды",
    icon: (
      // капля воды
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 sm:h-12 sm:w-12">
        <path d="M12 3s6.5 7 6.5 11.5a6.5 6.5 0 0 1-13 0C5.5 10 12 3 12 3z" strokeLinejoin="round" />
        <path d="M9 14.5a3.2 3.2 0 0 0 2.4 3.4" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: "Антикоррозийные добавки",
    icon: (
      // щит с галочкой
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 sm:h-12 sm:w-12">
        <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Документы по запросу",
    icon: (
      // документ с печатью
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 sm:h-12 sm:w-12">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" strokeLinejoin="round" />
        <path d="M14 3v5h5" strokeLinejoin="round" />
        <path d="M8.5 12h7M8.5 15.5h4.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Quality() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 sm:py-14 lg:py-18">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-amber" />
              <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
                Гарантии
              </span>
            </div>
            <h2 className="text-[1.75rem] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              КАЧЕСТВО, КОТОРОМУ ДОВЕРЯЮТ
            </h2>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted sm:text-[16px]">
              Мы отвечаем за каждую канистру, потому что производим сами — от
              формулы до отгрузки.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10">
            {points.map((p) => (
              <li key={p.title} className="reveal flex flex-col items-center gap-3 text-center sm:gap-4">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-amber/10 text-amber-dark ring-1 ring-amber/25 transition-colors hover:bg-amber/20 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
                  {p.icon}
                </span>
                <span className="max-w-[150px] text-[13px] font-bold leading-snug sm:max-w-[180px] sm:text-[15px]">
                  {p.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
