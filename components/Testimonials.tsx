// Реальные отзывы покупателей из официального магазина ASF на Kaspi.kz
const testimonials = [
  {
    quote:
      "Приобрёл чернитель шин по совету друга — он пользуется этим продуктом регулярно. Попробовал. Блеск. Спасибо за оперативную доставку!",
    name: "Павел",
    role: "Black Tire · отзыв с Kaspi.kz",
  },
  {
    quote:
      "Полироль хорошего качества. Покупали для ухода за панелями автомобиля. Очень довольны. Доставка даже раньше времени, упаковка очень хорошая.",
    name: "Ирина",
    role: "Polyrole Shine · отзыв с Kaspi.kz",
  },
  {
    quote:
      "Достойное качество: даже при слабом пеногенераторе грязь сразу стекает, честно не ожидал. Расход небольшой — за свои деньги топчик.",
    name: "Покупатель",
    role: "активная пена · отзыв с Kaspi.kz",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[85rem] px-4 py-14 sm:px-6 lg:py-18">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-0.5 w-8 bg-amber" />
          <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
            Отзывы
          </span>
        </div>
        <h2 className="mb-12 text-4xl font-extrabold tracking-tight sm:text-5xl">
          С НАМИ РАБОТАЮТ
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.quote} className="flex flex-col border border-t-2 border-line border-t-amber p-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-amber">
                <path d="M10 7H6a3 3 0 0 0-3 3v7h7v-7H7c0-1.7 1.3-3 3-3V7zm11 0h-4a3 3 0 0 0-3 3v7h7v-7h-3c0-1.7 1.3-3 3-3V7z" />
              </svg>
              <blockquote className="mt-5 flex-1 text-[16px] leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="text-[15px] font-bold">{t.name}</p>
                <p className="text-[13.5px] text-muted">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
