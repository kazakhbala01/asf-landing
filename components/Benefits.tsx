import { waLink } from "@/lib/products";

const items = [
  {
    title: "Снизить себестоимость каждой мойки",
    text: "Оптимальный расход автохимии помогает оставлять больше денег с каждого обслуженного автомобиля.",
  },
  {
    title: "Обслуживать больше автомобилей за смену",
    text: "Эффективная химия сокращает время на повторное нанесение и перемыв автомобиля.",
  },
  {
    title: "Сократить перерасход химии сотрудниками",
    text: "Правильные дозировки и рекомендации помогают контролировать расход и уменьшать потери.",
  },
  {
    title: "Уменьшить количество перемывов и претензий",
    text: "Стабильный результат с первого раза — меньше бесплатной переделки работы и недовольных клиентов.",
  },
  {
    title: "Увеличить средний чек",
    text: "Добавьте в предложение воск, чернение шин, очистку двигателя и другие услуги, на которых автомойка может дополнительно зарабатывать.",
  },
  {
    title: "Повысить возвращаемость клиентов",
    text: "Когда автомобиль стабильно хорошо вымыт, клиенту проще выбрать вашу автомойку снова.",
  },
  {
    title: "Сделать качество менее зависимым от мойщика",
    text: "Помогаем подобрать продукт, концентрацию и технологию применения, чтобы получать более предсказуемый результат.",
  },
  {
    title: "Контролировать реальную стоимость химии на 1 автомобиль",
    text: "Вы будете понимать не только цену канистры, а сколько химия фактически стоит вам на одну мойку.",
  },
  {
    title: "Не переплачивать за бренд и посредников",
    text: "Профессиональная автохимия напрямую от производителя.",
  },
  {
    title: "Не замораживать деньги в неподходящей химии",
    text: "Сначала протестируйте продукт на своей автомойке и только после этого принимайте решение о закупке.",
  },
];

export default function Benefits() {
  return (
    <section className="border-b border-line bg-soft">
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
        <div className="reveal mb-8 sm:mb-10">
          <div className="mb-3 flex items-center gap-3 sm:mb-4">
            <span className="h-0.5 w-8 bg-amber" />
            <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
              Выгода для бизнеса
            </span>
          </div>
          <h2 className="text-[1.75rem] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            С ASF ВАША АВТОМОЙКА СМОЖЕТ ЗАРАБАТЫВАТЬ БОЛЬШЕ
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <li
              key={it.title}
              className="reveal flex flex-col gap-2 bg-paper p-5 sm:p-6 lg:p-7"
            >
              <span className="text-[12px] font-extrabold tabular-nums text-amber">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[15px] font-bold leading-snug sm:text-[16px]">
                {it.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted sm:text-[14px]">
                {it.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="reveal mt-8 flex flex-wrap items-center gap-4">
          <a
            href={waLink(
              "Здравствуйте! Хочу посчитать выгоду для своей автомойки — подскажите по автохимии ASF."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber px-7 py-4 text-[13px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-amber-dark"
          >
            Посчитать выгоду
          </a>
          <p className="text-[13px] text-muted sm:text-[14px]">
            Технолог поможет посчитать расход и стоимость химии на одну мойку.
          </p>
        </div>
      </div>
    </section>
  );
}
