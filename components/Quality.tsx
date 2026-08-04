const points = [
  "Контроль каждой партии",
  "Стабильная рецептура",
  "Безопасно для ЛКП",
  "Формулы для жёсткой воды",
  "Антикоррозийные добавки",
  "Документы по запросу",
];

export default function Quality() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[85rem] px-4 py-14 sm:px-6 lg:py-18">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              КАЧЕСТВО, КОТОРОМУ ДОВЕРЯЮТ
            </h2>
            <p className="mt-4 max-w-xs text-[16px] leading-relaxed text-muted">
              Мы отвечаем за каждую канистру, потому что производим сами — от
              формулы до отгрузки.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {points.map((p) => (
              <li key={p} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-28 w-28 items-center justify-center rounded-full border border-ink/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-amber">
                    <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="max-w-[160px] text-[13.5px] font-semibold leading-snug">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
