import Image from "next/image";

const specs = [
  { label: "Расположение", value: "г. Астана, Сокпакбаева 20/2" },
  { label: "Производственная мощность", value: "3 000+ кг в сутки" },
  { label: "Производим химию", value: "с 2020 года" },
  { label: "Продуктовая линейка", value: "14 позиций" },
  { label: "Форматы фасовки", value: "1 л / 5 кг / 20 кг" },
  { label: "Разведение концентратов", value: "до 1:200" },
  { label: "Отгрузка", value: "со склада производителя" },
];

export default function Capacity() {
  return (
    <section id="production" className="border-b border-line">
      <div className="mx-auto grid max-w-[85rem] grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-full">
          <Image
            src="/photos/production.jpg"
            alt="Производственный цех Astana Soap Factory — линия розлива автохимии"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="bg-cream px-4 py-10 sm:px-10 sm:py-12 lg:py-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-amber" />
            <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
              Собственная площадка
            </span>
          </div>
          <h2 className="text-[1.75rem] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            ПРОИЗВОДСТВО
          </h2>
          <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted sm:text-[16px]">
            Собственная площадка. Полный цикл — от разработки формулы до
            фасовки. Готовы производить под ваш объём.
          </p>
          <table className="mt-6 w-full text-[14px] sm:mt-8 sm:text-[15px]">
            <tbody>
              {specs.map((s) => (
                <tr key={s.label} className="border-t border-ink/10 last:border-b">
                  <td className="py-3 pr-4 text-muted sm:py-4">{s.label}</td>
                  <td className="py-3 text-right font-bold sm:py-4">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
