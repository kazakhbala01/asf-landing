// TODO: заменить заглушки на реальные пары фото «до/после» от клиента.
// Слоты уже свёрстаны — достаточно положить фото в public/photos/ и вставить <Image>.
const pairs = [
  {
    title: "Кузов после зимней дороги",
    product: "ASF Pink Active Foam",
  },
  {
    title: "Диски и резина",
    product: "Black Tire + Active Foam Storm",
  },
];

function Slot({ label, tag }: { label: string; tag: "ДО" | "ПОСЛЕ" }) {
  const isAfter = tag === "ПОСЛЕ";
  return (
    <div
      className={`photo-placeholder relative flex aspect-[4/3] items-center justify-center ${
        isAfter ? "bg-[#e8e5df]" : "bg-[#3a3a38]"
      }`}
    >
      <span
        className={`absolute left-4 top-4 px-2.5 py-1 text-[11px] font-bold tracking-caps ${
          isAfter ? "bg-amber text-ink" : "bg-ink text-white"
        }`}
      >
        {tag}
      </span>
      <span
        className={`flex flex-col items-center gap-2 text-center text-[11px] font-semibold tracking-caps uppercase ${
          isAfter ? "text-ink/35" : "text-white/40"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
          <path d="M4 8h3l2-3h6l2 3h3v12H4V8z" strokeLinejoin="round" />
          <circle cx="12" cy="13.5" r="3.5" />
        </svg>
        {label}
      </span>
    </div>
  );
}

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
            Результат нашей химии виден без слов. Реальные автомобили, вымытые
            продукцией ASF.
          </p>
        </div>

        <div className="space-y-10">
          {pairs.map((p) => (
            <div key={p.title} className="reveal">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Slot label={`Фото: ${p.title} — до`} tag="ДО" />
                <Slot label={`Фото: ${p.title} — после`} tag="ПОСЛЕ" />
              </div>
              <p className="mt-3 text-[14px] font-semibold">
                {p.title}
                <span className="ml-3 text-muted">— {p.product}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
