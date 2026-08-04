import Photo from "./Photo";

const numbers = [
  { value: "12", label: "продуктов собственной разработки" },
  { value: "3", label: "категории: мойка, салон, уход" },
  { value: "1:200", label: "максимальное разведение концентрата" },
  { value: "100%", label: "производство в Казахстане" },
];

export default function AboutCompany() {
  return (
    <section id="about" className="border-b border-line bg-soft">
      <div className="mx-auto max-w-[85rem] px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <p className="mb-4 text-[11px] font-bold tracking-caps uppercase text-amber">
              О компании
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              ASTANA SOAP FACTORY
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted">
              Мы — казахстанский производитель профессиональной автохимии.
              Начали с активной пены для бесконтактной мойки и выросли в
              завод с полной линейкой: автошампуни, полироли для салона,
              чернитель шин и очиститель двигателя.
            </p>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted">
              Наши формулы рассчитаны на реальные условия Казахстана: жёсткую
              воду, зимние реагенты и интенсивную ежедневную загрузку моек.
              Работаем и с сетями автомоек, и с розничными покупателями,
              которые хотят профессиональный результат у себя в гараже.
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

          <div className="flex flex-col gap-3">
            <Photo label="Фото: основатель / команда" className="aspect-[4/3] w-full" />
            <div className="grid grid-cols-2 gap-3">
              <Photo label="Фото: цех" className="aspect-[4/3]" />
              <Photo label="Фото: продукция на складе" className="aspect-[4/3]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
