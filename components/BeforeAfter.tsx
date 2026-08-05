import BeforeAfterSlider from "./BeforeAfterSlider";

// TODO: сейчас демо-пары (обработанные версии одного фото).
// Заменить на реальные пары «грязный/чистый» от клиента: положить фото
// в public/photos/ и поправить пути ниже.
const pairs = [
  {
    before: "/photos/ba1-before.jpg",
    after: "/photos/ba1-after.jpg",
    title: "Кузов после зимней дороги",
    product: "ASF Pink Active Foam",
  },
  {
    before: "/photos/ba2-before.jpg",
    after: "/photos/ba2-after.jpg",
    title: "Диски и задняя часть кузова",
    product: "Active Foam Storm",
  },
];

export default function BeforeAfter() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[85rem] px-4 py-14 sm:px-6 lg:py-20">
        <div className="reveal mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-amber" />
            <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
              Результат
            </span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            ДО / ПОСЛЕ
          </h2>
          <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-muted">
            Потяните ползунок — результат нашей химии виден без слов.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
          {pairs.map((p) => (
            <figure key={p.title} className="reveal">
              <BeforeAfterSlider before={p.before} after={p.after} alt={p.title} />
              <figcaption className="pt-3 text-[14px] font-semibold">
                {p.title}
                <span className="ml-3 text-muted">— {p.product}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
