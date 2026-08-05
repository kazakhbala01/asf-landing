const faq = [
  {
    q: "Подходит ли химия для пенокомплекта?",
    a: "Да. В каждой карточке товара указана норма разведения для пенокомплекта — обычно от 1:5 до 1:20 в зависимости от продукта. Пена получается плотная и устойчивая.",
  },
  {
    q: "Подходит ли для дозатрона?",
    a: "Да, у всех автошампуней указана рабочая концентрация для дозатрона (обычно 1–2%). AutoGleam Dozatron разработан специально для систем дозирования.",
  },
  {
    q: "Какая концентрация у продуктов?",
    a: "Все автошампуни — концентраты. Максимальное разведение до 1:200 (Active Foam Strong через пеногенератор). Чем выше концентрация, тем ниже себестоимость одной мойки.",
  },
  {
    q: "Есть ли сертификаты?",
    a: "Документы и декларации на продукцию предоставляем по запросу — напишите в WhatsApp, вышлем комплект для вашей бухгалтерии.",
  },
  {
    q: "Как осуществляется доставка?",
    a: "Отгружаем со склада производителя в Астане по всему Казахстану. Оптовым партнёрам — регулярные поставки по графику.",
  },
  {
    q: "Есть ли оптовые цены?",
    a: "Да, работаем с автомойками, детейлинг-центрами и дилерами по оптовому прайсу. Запросите его в WhatsApp — вышлем сразу.",
  },
  {
    q: "Можно ли стать дилером?",
    a: "Да, мы развиваем дилерскую сеть по Казахстану. Напишите в WhatsApp «Хочу стать дилером» — обсудим условия для вашего региона.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="border-b border-line bg-soft">
      <div className="mx-auto max-w-[85rem] px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="reveal">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-amber" />
              <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
                Вопросы и ответы
              </span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              ЧАСТЫЕ ВОПРОСЫ
            </h2>
            <p className="mt-4 max-w-xs text-[16px] leading-relaxed text-muted">
              Не нашли ответ — напишите нам в WhatsApp, отвечаем быстро.
            </p>
          </div>

          <div className="reveal">
            {faq.map((item) => (
              <details key={item.q} className="group border-b border-line py-5 first:pt-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-bold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="shrink-0 text-3xl font-light leading-none text-amber transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
