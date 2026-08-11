import Image from "next/image";
import { waLink } from "@/lib/products";

// Цифры предоставлены клиентом (нужна сверка перед публикацией — см. README).
const stats = [
  {
    value: "6 лет",
    label: "в производстве химической продукции · 2 года в профессиональной автохимии",
  },
  { value: "4,1 млрд ₸", label: "суммарно заработали наши клиенты" },
  { value: "1000+", label: "компаний по всему Казахстану работают с нами" },
  { value: "94%", label: "рекомендуют наши продукты друзьям и знакомым" },
  {
    value: "89%",
    label: "фиксируют рост прибыли в первые 3 месяца сотрудничества",
  },
];

export default function Intro() {
  return (
    <section className="relative z-10 -mt-20 border-b border-line bg-transparent sm:-mt-24 lg:mt-0 lg:bg-paper">
      <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-0 sm:px-6 sm:pb-14 lg:py-20 lg:pt-20">
        {/* призыв к действию */}
        <div className="reveal relative border border-line bg-soft p-5 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <span className="absolute -top-3 right-4 bg-amber px-3 py-1 text-[10px] font-bold tracking-caps uppercase text-ink sm:right-8">
            Бесплатно
          </span>
          <div>
            <h2 className="max-w-xl text-[1.4rem] font-extrabold leading-tight tracking-tight sm:text-[1.9rem] lg:text-[2.2rem]">
              Не рискуйте деньгами — протестируйте бесплатно!
            </h2>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted sm:text-[16px]">
              Получите бесплатный тестовый образец профессиональной автохимии ASF
              и сравните результат с тем, чем пользуетесь сейчас.
            </p>
          </div>
          <a
            href={waLink(
              "Здравствуйте! Хочу заказать бесплатный тестовый образец автохимии ASF."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block w-full shrink-0 bg-amber px-6 py-4 text-center text-[13px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-amber-dark sm:text-[14px] lg:mt-0 lg:w-auto lg:px-8 lg:py-5"
          >
            Заказать бесплатный тестовый образец
          </a>
        </div>

        {/* цифры + закрывающая фраза */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 lg:grid-cols-3 lg:gap-4">
          <figure className="reveal relative col-span-2 aspect-[16/9] overflow-hidden lg:col-span-1 lg:aspect-auto">
            <Image
              src="/photos/brand-stats.jpg"
              alt="ASF — Astana Soap Factory"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </figure>

          {stats.map((s, i) => (
            <div
              key={s.value}
              className={`reveal flex flex-col justify-between border border-line p-4 sm:p-6 ${
                i === stats.length - 1 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <p className="text-2xl font-extrabold leading-none tracking-tight sm:text-3xl lg:text-4xl">
                {s.value}
                <span className="text-amber">.</span>
              </p>
              <p className="mt-3 text-[13px] leading-snug text-muted sm:text-[14px]">
                {s.label}
              </p>
            </div>
          ))}

          <div className="reveal col-span-2 bg-ink p-5 text-white sm:p-8 lg:col-span-3">
            <p className="max-w-4xl text-[16px] font-bold leading-snug sm:text-[20px] lg:text-[24px]">
              ASF — это больше, чем автохимия. Это комплексное решение для
              повышения эффективности и прибыльности автомойки
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
