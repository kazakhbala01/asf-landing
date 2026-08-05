const steps = [
  {
    n: "01",
    title: "Оставляете заявку",
    text: "В WhatsApp, по телефону или через форму на сайте.",
  },
  {
    n: "02",
    title: "Получаете консультацию",
    text: "Технолог подберёт химию под ваше оборудование и воду.",
  },
  {
    n: "03",
    title: "Получаете образцы",
    text: "Бесплатно — под вашу воду и пенокомплект.",
  },
  {
    n: "04",
    title: "Проводите тест",
    text: "Проверяете качество и расход на своей мойке.",
  },
  {
    n: "05",
    title: "Заключаем договор",
    text: "Фиксируем цены и условия поставок.",
  },
  {
    n: "06",
    title: "Регулярные поставки",
    text: "Отгружаем со склада в Астане точно в срок.",
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
          КАК ПРОИСХОДИТ СОТРУДНИЧЕСТВО
        </h2>
        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
          {steps.map((s) => (
            <li key={s.n} className="reveal border-t-2 border-line pt-6">
              <span className="text-5xl font-extrabold tabular-nums text-amber">
                {s.n}
              </span>
              <h3 className="mt-4 text-[15px] font-bold tracking-caps uppercase">
                {s.title}
              </h3>
              <p className="mt-2 max-w-[300px] text-[14px] leading-relaxed text-muted">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
        <a
          href="#sample"
          className="mt-12 inline-block bg-amber px-7 py-4 text-[13px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-amber-dark"
        >
          Начать с бесплатного образца
        </a>
      </div>
    </section>
  );
}
