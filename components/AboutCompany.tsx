import Image from "next/image";

const numbers = [
  { value: "2020", label: "основано производство химии" },
  { value: "2024", label: "запуск направления автохимии ASF" },
  { value: "3000+", label: "кг продукции в сутки" },
  { value: "14", label: "продуктов собственной разработки" },
];

export default function AboutCompany() {
  return (
    <section id="about" className="border-b border-line bg-soft">
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="reveal">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-amber" />
              <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
                О компании
              </span>
            </div>
            <h2 className="text-[1.75rem] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              ASTANA SOAP FACTORY
            </h2>

            {/* мобильный вариант: компактная карточка основателя сразу под заголовком */}
            <div className="mt-5 flex items-center gap-4 border border-line bg-paper p-3 lg:hidden">
              <Image
                src="/photos/founder.jpg"
                alt="Руслан — основатель Astana Soap Factory"
                width={477}
                height={647}
                sizes="120px"
                className="h-[124px] w-[92px] shrink-0 object-cover object-top"
              />
              <div>
                <p className="text-[13px] font-bold tracking-caps uppercase">
                  Руслан
                </p>
                <p className="text-[11px] font-semibold tracking-caps uppercase text-muted">
                  основатель ASF
                </p>
                <p className="mt-2 text-[13px] leading-snug text-muted">
                  Пилот гражданской авиации, командир Airbus A320. Основал
                  производство в 2020 году.
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-[14px] leading-relaxed text-muted sm:text-[16px]">
              Компанию основал Руслан — пилот гражданской авиации, командир
              Airbus A320 с опытом работы в Air Astana. В 2020 году он
              запустил производство бытовой химии — всё начиналось с
              хозяйственного мыла, — а в 2024-м открыл новое направление:
              профессиональную автохимию ASF.
            </p>
            <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-muted sm:text-[16px]">
              Сегодня Astana Soap Factory — казахстанский производственный
              бренд: собственная площадка в Астане, полная линейка для моек и
              детейлинга. Формулы рассчитаны на реальные условия Казахстана —
              жёсткую воду, зимние реагенты и интенсивную ежедневную загрузку.
              Работаем и с сетями автомоек, и с розничными покупателями.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-6 sm:mt-10 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-8">
              {numbers.map((n) => (
                <div key={n.label}>
                  <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
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

          <div className="hidden justify-center lg:flex lg:justify-end">
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
