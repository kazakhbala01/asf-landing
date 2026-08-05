const faq = [
  {
    q: "Как купить оптом?",
    a: "Позвоните или напишите в WhatsApp — подберём линейку под ваше оборудование, воду и объёмы, отправим оптовый прайс. Отгрузка со склада производителя в Астане.",
  },
  {
    q: "Правда ли, что образцы бесплатные?",
    a: "Да. Дадим бесплатные образцы под вашу воду и оборудование, поможем настроить нормы разведения — вы сначала пробуете, потом заказываете объём.",
  },
  {
    q: "Какая фасовка есть?",
    a: "1 л — попробовать, 5 кг и 20 кг — для моек и детейлинг-центров. Розничные объёмы удобнее заказать в нашем магазине на Kaspi.kz или TEEZ.kz.",
  },
  {
    q: "Как подобрать разведение под моё оборудование?",
    a: "В каждой карточке товара указаны нормы для пенокомплекта, пеногенератора и дозатрона. Если вода жёсткая или оборудование нестандартное — поможем настроить концентрацию под вас.",
  },
  {
    q: "Доставляете по Казахстану?",
    a: "Да, отгружаем со склада в Астане по всему Казахстану. Оптовым партнёрам — стабильные поставки по графику.",
  },
  {
    q: "Вы производитель или перепродавец?",
    a: "Производитель. Собственная площадка в Астане, мощность 3 000+ кг продукции в сутки, производим химию с 2020 года. Отвечаем за каждую партию.",
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
