import Image from "next/image";

const numbers = [
  { value: "2020", label: "основано производство химии" },
  { value: "2024", label: "запуск направления автохимии ASF" },
  { value: "3000+", label: "кг продукции в сутки" },
  { value: "12", label: "продуктов собственной разработки" },
];

export default function AboutCompany() {
  return (
    <section id="about" className="border-b border-line bg-soft">
      <div className="mx-auto max-w-[85rem] px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="reveal">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-amber" />
              <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
                О компании
              </span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              ASTANA SOAP FACTORY
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted">
              Компанию основал Руслан — пилот гражданской авиации, командир
              Airbus A320 с опытом работы в Air Astana. В 2020 году он
              запустил производство бытовой химии — всё начиналось с
              хозяйственного мыла, — а в 2024-м открыл новое направление:
              профессиональную автохимию ASF.
            </p>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted">
              Сегодня Astana Soap Factory — казахстанский производственный
              бренд: собственная площадка в Астане, полная линейка для моек и
              детейлинга. Формулы рассчитаны на реальные условия Казахстана —
              жёсткую воду, зимние реагенты и интенсивную ежедневную загрузку.
              Работаем и с сетями автомоек, и с розничными покупателями.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {numbers.map((n) => (
                <div key={n.label}>
                  <p className="text-4xl font-extrabold tracking-tight">
                    {n.value}
                    <span className="text-amber">.</span>
                  </p>
                  <p className="mt-2 text-[13.5px] leading-snug text-muted">
                    {n.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <figure className="reveal w-full max-w-[320px] self-start border border-line bg-paper p-3 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
              <Image
                src="/photos/founder.jpg"
                alt="Руслан — основатель Astana Soap Factory"
                width={477}
                height={647}
                sizes="320px"
                className="h-auto w-full"
              />
              <figcaption className="px-1 pb-1 pt-3 text-center text-[12px] font-semibold tracking-caps uppercase text-muted">
                Руслан — основатель ASF
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
