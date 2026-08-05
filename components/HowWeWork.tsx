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
        <div className="mb-4 flex items-center gap-3">
          <span className="h-0.5 w-8 bg-amber" />
          <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
            Процесс
          </span>
        </div>
        <h2 className="mb-12 text-4xl font-extrabold tracking-tight sm:text-5xl">
          КАК МЫ РАБОТАЕМ
        </h2>
        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((s) => (
            <li key={s.n} className="border-t-2 border-line pt-6">
              <span className="text-5xl font-extrabold tabular-nums text-amber">
                {s.n}
              </span>
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
