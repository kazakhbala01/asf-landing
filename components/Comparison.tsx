import { waLink } from "@/lib/products";

const rows = [
  {
    label: "Моющая способность",
    asf: "Высокая — активная пена отрывает грязь",
    others: "Нестабильная от партии к партии",
  },
  {
    label: "Расход",
    asf: "Концентраты — разведение до 1:200",
    others: "Выше при том же результате",
  },
  {
    label: "Себестоимость мойки",
    asf: "Ниже за счёт концентрации",
    others: "Выше из-за большого расхода",
  },
  {
    label: "Количество пены",
    asf: "Плотная, устойчивая",
    others: "Быстро опадает",
  },
  {
    label: "Работа в жёсткой воде",
    asf: "Формулы адаптированы под воду РК",
    others: "Часто теряют эффективность",
  },
  {
    label: "Поддержка",
    asf: "Технолог настроит разведение под вас",
    others: "Продали и забыли",
  },
  {
    label: "Наличие",
    asf: "Склад в Астане — быстрая отгрузка",
    others: "Ожидание поставки",
  },
];

export default function Comparison() {
  return (
    <section className="border-b border-line bg-soft">
      <div className="mx-auto max-w-[85rem] px-4 py-14 sm:px-6 lg:py-20">
        <div className="reveal mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-amber" />
            <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
              Сравнение
            </span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            ПОЧЕМУ НАША ХИМИЯ ВЫГОДНЕЕ
          </h2>
        </div>

        <div className="reveal overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse bg-paper text-[15px]">
            <thead>
              <tr className="border-b-2 border-ink">
                <th className="w-[28%] px-5 py-4 text-left text-[12px] font-bold tracking-caps uppercase text-muted"></th>
                <th className="w-[38%] bg-amber px-5 py-4 text-left text-[14px] font-extrabold tracking-caps uppercase text-ink">
                  ASF
                </th>
                <th className="w-[34%] px-5 py-4 text-left text-[12px] font-bold tracking-caps uppercase text-muted">
                  Обычные производители
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-line">
                  <td className="px-5 py-4 font-bold">{r.label}</td>
                  <td className="bg-amber/10 px-5 py-4 font-semibold">
                    <span className="flex items-start gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="mt-0.5 h-4 w-4 shrink-0 text-amber-dark">
                        <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {r.asf}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-muted">{r.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="reveal mt-8 flex flex-wrap items-center gap-4">
          <a
            href={waLink("Здравствуйте! Хочу сравнить вашу химию с текущей — пришлите прайс и условия теста.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber px-7 py-4 text-[13px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-amber-dark"
          >
            Сравнить с вашей химией
          </a>
          <p className="text-[14px] text-muted">
            Дадим образцы — проверьте на своей мойке.
          </p>
        </div>
      </div>
    </section>
  );
}
