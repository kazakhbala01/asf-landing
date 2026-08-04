const steps = [
  {
    n: "01",
    title: "Разработка",
    text: "Разрабатываем и тестируем формулы под реальные условия моек.",
  },
  {
    n: "02",
    title: "Производство",
    text: "Выпускаем продукт на собственной площадке в Астане.",
  },
  {
    n: "03",
    title: "Контроль качества",
    text: "Проверяем каждую партию на стабильность рецептуры.",
  },
  {
    n: "04",
    title: "Фасовка",
    text: "1 л, 5 кг и 20 кг — под задачи вашего бизнеса.",
  },
  {
    n: "05",
    title: "Доставка",
    text: "Надёжная логистика — отгрузки по всему Казахстану.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="border-b border-line">
      <div className="mx-auto max-w-[85rem] px-4 py-14 sm:px-6 lg:py-18">
        <h2 className="mb-12 text-4xl font-extrabold tracking-tight sm:text-5xl">
          КАК МЫ РАБОТАЕМ
        </h2>
        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-extrabold tabular-nums text-amber">
                  {s.n}
                </span>
                {i < steps.length - 1 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="hidden h-4 w-4 text-line lg:block"
                  >
                    <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <h3 className="mt-4 text-[15px] font-bold tracking-caps uppercase">
                {s.title}
              </h3>
              <p className="mt-2 max-w-[240px] text-[14px] leading-relaxed text-muted">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
