import Image from "next/image";
import { waLink, contacts } from "@/lib/products";

const icons = {
  time: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 sm:h-9 sm:w-9">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9.5V13l2.5 1.5M9 2h6" strokeLinecap="round" />
    </svg>
  ),
  drop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 sm:h-9 sm:w-9">
      <path d="M12 3s6 6.4 6 10.6A6 6 0 0 1 6 13.6C6 9.4 12 3 12 3z" strokeLinejoin="round" />
      <path d="M9 14a3 3 0 0 0 2.2 3.1" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 sm:h-9 sm:w-9">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.4" />
      <path d="M3.5 20c.6-3 2.8-5 5.5-5s4.9 2 5.5 5M14.8 15.4c2.3.3 4 2 4.6 4.6" strokeLinecap="round" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 sm:h-9 sm:w-9">
      <path d="M4 19h16M6 16V9m5 7V5m5 11v-5" strokeLinecap="round" />
    </svg>
  ),
  repeat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 sm:h-9 sm:w-9">
      <path d="M3.5 12a8.5 8.5 0 0 1 14.4-6.1M20.5 12a8.5 8.5 0 0 1-14.4 6.1" strokeLinecap="round" />
      <path d="M18 2.5V6h-3.5M6 21.5V18h3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 sm:h-9 sm:w-9">
      <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 sm:h-9 sm:w-9">
      <path d="M20 12.5L12.5 20a2 2 0 0 1-2.8 0L4 14.3V4h10.3l5.7 5.7a2 2 0 0 1 0 2.8z" strokeLinejoin="round" />
      <circle cx="9" cy="9" r="1.4" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 sm:h-9 sm:w-9">
      <path d="M3 21V9l6 4V9l6 4V5h6v16H3z" strokeLinejoin="round" />
    </svg>
  ),
  test: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 sm:h-9 sm:w-9">
      <path d="M9 3h6M10 3v5.5L5.2 17.4A2.4 2.4 0 0 0 7.3 21h9.4a2.4 2.4 0 0 0 2.1-3.6L14 8.5V3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.6 15h8.8" strokeLinecap="round" />
    </svg>
  ),
};

/** компактная плитка выгоды */
function Tile({
  n,
  icon,
  title,
  text,
  className = "",
  tone = "light",
}: {
  n: string;
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
  tone?: "light" | "cream";
}) {
  return (
    <article
      className={`reveal flex flex-col rounded-2xl border border-line p-4 sm:p-5 lg:p-6 ${
        tone === "cream" ? "bg-cream" : "bg-paper"
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-[22px] font-extrabold leading-none tabular-nums text-amber sm:text-[26px]">
          {n}
        </span>
        <span className="text-ink/30">{icon}</span>
      </div>
      <h3 className="mt-2 text-[15px] font-bold leading-[1.25] sm:text-[17px] lg:text-[18px]">
        {title}
      </h3>
      <p className="mt-1.5 text-[13px] leading-snug text-muted sm:text-[14px] lg:text-[15px]">
        {text}
      </p>
    </article>
  );
}

export default function Benefits() {
  return (
    <section className="border-b border-line bg-soft">
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 sm:py-14 lg:py-18">
        <div className="reveal mb-5 sm:mb-7">
          <div className="mb-2.5 flex items-center gap-3 sm:mb-3">
            <span className="h-0.5 w-8 bg-amber" />
            <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
              Выгода для бизнеса
            </span>
          </div>
          <h2 className="text-[1.85rem] font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
            С ASF ВАША АВТОМОЙКА
            <br className="hidden sm:block" /> СМОЖЕТ ЗАРАБАТЫВАТЬ БОЛЬШЕ
          </h2>
          <p className="mt-2.5 max-w-xl text-[14px] leading-snug text-muted sm:mt-3 sm:text-[16px]">
            Профессиональная химия и технологическая поддержка, которые влияют
            на расход, скорость работы и прибыль вашей мойки.
          </p>
        </div>

        {/* бенто: 2 колонки на мобильном, 3 на десктопе; крупные карточки шире */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3 lg:gap-4">
          {/* 01 — фото заполняет карточку справа, слева растворяется маской,
              поэтому края фото не видны */}
          <article className="reveal relative col-span-2 overflow-hidden rounded-2xl border border-line bg-paper lg:col-span-2">
            <div className="relative z-10 flex max-w-[60%] flex-col p-4 sm:max-w-[58%] sm:p-6 lg:p-7">
              <span className="text-[24px] font-extrabold leading-none tabular-nums text-amber sm:text-[28px]">
                01
              </span>
              <h3 className="mt-2 text-[17px] font-bold leading-[1.2] sm:text-[20px] lg:text-[23px]">
                Снизить себестоимость каждой мойки
              </h3>
              <p className="mt-2 text-[13.5px] leading-snug text-muted sm:text-[15px]">
                Оптимальный расход автохимии помогает оставлять больше денег
                с каждого обслуженного автомобиля.
              </p>
              <span className="mt-3 inline-flex w-fit items-center rounded-lg border border-amber bg-amber/15 px-2.5 py-1.5 text-[11px] font-bold tracking-caps uppercase sm:text-[12px]">
                Расход под контролем
              </span>
            </div>
            <Image
              src="/photos/benefit-foam.jpg"
              alt="ASF Active Foam Pink в пене"
              fill
              sizes="(min-width: 1024px) 380px, 45vw"
              className="!left-auto right-0 !h-full !w-[44%] object-cover object-center [mask-image:linear-gradient(90deg,transparent_0%,#000_30%)] sm:!w-[42%]"
            />
          </article>

          <Tile
            n="02"
            icon={icons.time}
            title="Обслуживать больше автомобилей за смену"
            text="Эффективная химия сокращает время на повторное нанесение и перемыв автомобиля."
          />
          <Tile
            n="03"
            icon={icons.drop}
            title="Сократить перерасход химии сотрудниками"
            text="Правильные дозировки и рекомендации помогают контролировать расход и уменьшать потери."
          />

          {/* 04 — тёмная карточка: текст слева, фото целиком справа */}
          <article className="reveal col-span-2 flex flex-col overflow-hidden rounded-2xl bg-ink text-white sm:flex-row sm:items-center lg:col-span-2">
            <div className="flex flex-1 flex-col p-4 sm:p-6 lg:p-7">
              <div className="flex items-center gap-3">
                <span className="text-[24px] font-extrabold leading-none tabular-nums text-amber sm:text-[28px]">
                  04
                </span>
                <span className="text-white/40">{icons.people}</span>
              </div>
              <h3 className="mt-2 text-[17px] font-bold leading-[1.2] sm:text-[20px] lg:text-[23px]">
                Уменьшить количество перемывов и претензий
              </h3>
              <p className="mt-2 text-[13.5px] leading-snug text-white/70 sm:text-[15px]">
                Стабильный результат с первого раза — меньше бесплатной
                переделки работы и недовольных клиентов.
              </p>
            </div>
            <Image
              src="/photos/benefit-car.jpg"
              alt="Кузов автомобиля в активной пене"
              width={1400}
              height={933}
              sizes="(min-width: 1024px) 420px, 100vw"
              className="h-auto w-full shrink-0 sm:w-[44%] [mask-image:linear-gradient(180deg,transparent_0%,#000_18%)] sm:[mask-image:linear-gradient(90deg,transparent_0%,#000_20%)]"
            />
          </article>

          <Tile
            n="05"
            icon={icons.chart}
            title="Увеличить средний чек"
            text="Добавьте воск, чернение шин, очистку двигателя и другие услуги, на которых мойка дополнительно зарабатывает."
            className="col-span-2 lg:col-span-1"
          />
          <Tile
            n="06"
            icon={icons.repeat}
            title="Повысить возвращаемость клиентов"
            text="Когда автомобиль стабильно хорошо вымыт, клиенту проще выбрать вашу автомойку снова."
          />
          <Tile
            n="07"
            icon={icons.shield}
            title="Качество меньше зависит от мойщика"
            text="Помогаем подобрать продукт, концентрацию и технологию применения для предсказуемого результата."
          />
          <Tile
            n="08"
            icon={icons.tag}
            title="Знать реальную стоимость химии на 1 авто"
            text="Вы понимаете не только цену канистры, а сколько химия фактически стоит вам на одну мойку."
            className="col-span-2 lg:col-span-1"
          />
          <Tile
            n="09"
            icon={icons.factory}
            title="Не переплачивать за бренд и посредников"
            text="Профессиональная автохимия напрямую от производителя."
          />
          <Tile
            n="10"
            icon={icons.test}
            title="Не замораживать деньги в химии"
            text="Сначала протестируйте продукт на своей мойке и только потом принимайте решение о закупке."
            tone="cream"
          />
        </div>

        {/* CTA-плитки */}
        <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:gap-3 lg:mt-4 lg:grid-cols-2 lg:gap-4">
          <a
            href={waLink(
              "Здравствуйте! Помогите посчитать расход и стоимость химии на одну мойку для моей автомойки."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group flex items-center justify-between gap-4 rounded-2xl bg-amber p-4 transition-colors hover:bg-amber-dark sm:p-6"
          >
            <div>
              <p className="text-[16px] font-extrabold leading-[1.2] text-ink sm:text-[20px]">
                Сколько вы можете зарабатывать больше с ASF?
              </p>
              <p className="mt-1.5 text-[13px] leading-snug text-ink/75 sm:text-[14px]">
                Рассчитаем расход химии и стоимость одной мойки на ваших
                условиях.
              </p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform group-hover:translate-x-1 sm:h-12 sm:w-12">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          <a
            href={contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-4 transition-colors hover:border-ink sm:p-6"
          >
            <div>
              <p className="text-[16px] font-extrabold leading-[1.2] sm:text-[20px]">
                Нужна консультация?
              </p>
              <p className="mt-1.5 text-[13px] leading-snug text-muted sm:text-[14px]">
                Технолог поможет посчитать выгоду именно для вашей автомойки.
              </p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-transform group-hover:translate-x-1 sm:h-12 sm:w-12">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
