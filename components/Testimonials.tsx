// ВНИМАНИЕ: отзывы ниже — заглушки для макета.
// Перед публикацией заменить на реальные отзывы клиентов.
const testimonials = [
  {
    quote:
      "Перешли на пену ASF полгода назад — расход меньше, а пена держится дольше. Клиенты видят разницу.",
    name: "Автомойка, Астана",
    role: "бесконтактная мойка, 4 поста",
  },
  {
    quote:
      "Storm отлично работает с нашей жёсткой водой. До этого перепробовали три бренда — остановились на ASF.",
    name: "Автомойка, Караганда",
    role: "мойка самообслуживания",
  },
  {
    quote:
      "Берём оптом шампунь и чернитель шин. Отгружают быстро, качество из партии в партию стабильное.",
    name: "Детейлинг-студия, Астана",
    role: "детейлинг и химчистка салона",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[85rem] px-4 py-14 sm:px-6 lg:py-18">
        <h2 className="mb-12 text-4xl font-extrabold tracking-tight sm:text-5xl">
          С НАМИ РАБОТАЮТ
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.quote} className="flex flex-col border border-line p-8">
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
