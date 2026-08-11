import Image from "next/image";
import { waLink, contacts } from "@/lib/products";

/** иконки для карточек выгод */
const icons = {
  time: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9.5V13l2.5 1.5M9 2h6" strokeLinecap="round" />
    </svg>
  ),
  drop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M12 3s6 6.4 6 10.6A6 6 0 0 1 6 13.6C6 9.4 12 3 12 3z" strokeLinejoin="round" />
      <path d="M9 14a3 3 0 0 0 2.2 3.1" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.4" />
      <path d="M3.5 20c.6-3 2.8-5 5.5-5s4.9 2 5.5 5M14.8 15.4c2.3.3 4 2 4.6 4.6" strokeLinecap="round" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M4 19h16M6 16V9m5 7V5m5 11v-5" strokeLinecap="round" />
    </svg>
  ),
  repeat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M3.5 12a8.5 8.5 0 0 1 14.4-6.1M20.5 12a8.5 8.5 0 0 1-14.4 6.1" strokeLinecap="round" />
      <path d="M18 2.5V6h-3.5M6 21.5V18h3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M20 12.5L12.5 20a2 2 0 0 1-2.8 0L4 14.3V4h10.3l5.7 5.7a2 2 0 0 1 0 2.8z" strokeLinejoin="round" />
      <circle cx="9" cy="9" r="1.4" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M3 21V9l6 4V9l6 4V5h6v16H3z" strokeLinejoin="round" />
    </svg>
  ),
  test: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M9 3h6M10 3v5.5L5.2 17.4A2.4 2.4 0 0 0 7.3 21h9.4a2.4 2.4 0 0 0 2.1-3.6L14 8.5V3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.6 15h8.8" strokeLinecap="round" />
    </svg>
  ),
};

export default function Benefits() {
  return (
    <section className="border-b border-line bg-soft">
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
        <div className="reveal mb-6 sm:mb-8">
          <div className="mb-3 flex items-center gap-3 sm:mb-4">
            <span className="h-0.5 w-8 bg-amber" />
            <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
              Выгода для бизнеса
            </span>
          </div>
          <h2 className="text-[1.75rem] font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            С ASF ВАША АВТОМОЙКА
            <br className="hidden sm:block" /> СМОЖЕТ ЗАРАБАТЫВАТЬ БОЛЬШЕ
          </h2>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted sm:mt-4 sm:text-[16px]">
            Профессиональная химия и технологическая поддержка, которые влияют
            на расход, скорость работы и прибыль вашей мойки.
          </p>
        </div>

        {/* бенто-сетка: две крупные карточки с фото + компактные плитки */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {/* 01 — с фото канистры */}
          <article className="reveal relative col-span-1 flex flex-col overflow-hidden border border-line bg-paper sm:col-span-2 lg:col-span-2">
            <div className="relative z-10 max-w-[62%] p-5 sm:max-w-[58%] sm:p-7">
              <span className="text-[13px] font-extrabold tabular-nums text-amber">01</span>
              <h3 className="mt-1.5 text-[16px] font-bold leading-snug sm:text-[19px]">
                Снизить себестоимость каждой мойки
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-[14px]">
                Оптимальный расход автохимии помогает оставлять больше денег
                с каждого обслуженного автомобиля.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 border border-amber bg-amber/15 px-3 py-1.5 text-[12px] font-bold tracking-caps uppercase sm:text-[13px]">
                Расход под контролем
              </span>
            </div>
            <Image
              src="/photos/benefit-foam.jpg"
              alt="ASF Active Foam Pink в пене"
              width={1183}
              height={912}
              sizes="(min-width: 1024px) 520px, 60vw"
              className="pointer-events-none absolute bottom-0 right-0 h-full w-[46%] object-cover object-left [mask-image:linear-gradient(90deg,transparent_0%,#000_22%)] sm:w-[44%]"
            />
          </article>

          {/* 02 */}
          <article className="reveal flex flex-col border border-line bg-paper p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="text-[13px] font-extrabold tabular-nums text-amber">02</span>
              <span className="text-ink/35">{icons.time}</span>
            </div>
            <h3 className="mt-1.5 text-[15px] font-bold leading-snug sm:text-[16px]">
              Обслуживать больше автомобилей за смену
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-[14px]">
              Эффективная химия сокращает время на повторное нанесение и перемыв
              автомобиля.
            </p>
          </article>

          {/* 03 */}
          <article className="reveal flex flex-col border border-line bg-paper p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="text-[13px] font-extrabold tabular-nums text-amber">03</span>
              <span className="text-ink/35">{icons.drop}</span>
            </div>
            <h3 className="mt-1.5 text-[15px] font-bold leading-snug sm:text-[16px]">
              Сократить перерасход химии сотрудниками
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-[14px]">
              Правильные дозировки и рекомендации помогают контролировать расход
              и уменьшать потери.
            </p>
          </article>

          {/* 04 — тёмная с фото машины */}
          <article className="reveal relative col-span-1 flex min-h-[210px] flex-col justify-end overflow-hidden bg-ink text-white sm:col-span-2 sm:min-h-[240px] lg:col-span-2">
            <Image
              src="/photos/benefit-car.jpg"
              alt="Кузов автомобиля в активной пене"
              fill
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-cover object-center opacity-60"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,18,18,0.94)_0%,rgba(18,18,18,0.75)_45%,rgba(18,18,18,0.25)_100%)]" />
            <div className="relative z-10 max-w-[80%] p-5 sm:max-w-[62%] sm:p-7">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-extrabold tabular-nums text-amber">04</span>
                <span className="text-white/45">{icons.people}</span>
              </div>
              <h3 className="mt-1.5 text-[16px] font-bold leading-snug sm:text-[19px]">
                Уменьшить количество перемывов и претензий
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/70 sm:text-[14px]">
                Стабильный результат с первого раза — меньше бесплатной
                переделки работы и недовольных клиентов.
              </p>
            </div>
          </article>

          {/* 05 */}
          <article className="reveal flex flex-col border border-line bg-paper p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="text-[13px] font-extrabold tabular-nums text-amber">05</span>
              <span className="text-ink/35">{icons.chart}</span>
            </div>
            <h3 className="mt-1.5 text-[15px] font-bold leading-snug sm:text-[16px]">
              Увеличить средний чек
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-[14px]">
              Добавьте в предложение воск, чернение шин, очистку двигателя
              и другие услуги, на которых автомойка может дополнительно
              зарабатывать.
            </p>
          </article>

          {/* 06 */}
          <article className="reveal flex flex-col border border-line bg-paper p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="text-[13px] font-extrabold tabular-nums text-amber">06</span>
              <span className="text-ink/35">{icons.repeat}</span>
            </div>
            <h3 className="mt-1.5 text-[15px] font-bold leading-snug sm:text-[16px]">
              Повысить возвращаемость клиентов
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-[14px]">
              Когда автомобиль стабильно хорошо вымыт, клиенту проще выбрать
              вашу автомойку снова.
            </p>
          </article>

          {/* 07 */}
          <article className="reveal flex flex-col border border-line bg-paper p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="text-[13px] font-extrabold tabular-nums text-amber">07</span>
              <span className="text-ink/35">{icons.shield}</span>
            </div>
            <h3 className="mt-1.5 text-[15px] font-bold leading-snug sm:text-[16px]">
              Сделать качество менее зависимым от мойщика
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-[14px]">
              Помогаем подобрать продукт, концентрацию и технологию применения,
              чтобы получать более предсказуемый результат.
            </p>
          </article>

          {/* 08 */}
          <article className="reveal flex flex-col border border-line bg-paper p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="text-[13px] font-extrabold tabular-nums text-amber">08</span>
              <span className="text-ink/35">{icons.tag}</span>
            </div>
            <h3 className="mt-1.5 text-[15px] font-bold leading-snug sm:text-[16px]">
              Контролировать реальную стоимость химии на 1 автомобиль
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-[14px]">
              Вы будете понимать не только цену канистры, а сколько химия
              фактически стоит вам на одну мойку.
            </p>
          </article>

          {/* 09 */}
          <article className="reveal flex flex-col border border-line bg-paper p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="text-[13px] font-extrabold tabular-nums text-amber">09</span>
              <span className="text-ink/35">{icons.factory}</span>
            </div>
            <h3 className="mt-1.5 text-[15px] font-bold leading-snug sm:text-[16px]">
              Не переплачивать за бренд и посредников
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-[14px]">
              Профессиональная автохимия напрямую от производителя.
            </p>
          </article>

          {/* 10 */}
          <article className="reveal flex flex-col border border-line bg-cream p-5 sm:col-span-2 sm:p-6 lg:col-span-1">
            <div className="flex items-start justify-between gap-3">
              <span className="text-[13px] font-extrabold tabular-nums text-amber">10</span>
              <span className="text-ink/35">{icons.test}</span>
            </div>
            <h3 className="mt-1.5 text-[15px] font-bold leading-snug sm:text-[16px]">
              Не замораживать деньги в неподходящей химии
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-[14px]">
              Сначала протестируйте продукт на своей автомойке и только после
              этого принимайте решение о закупке.
            </p>
          </article>
        </div>

        {/* CTA-плитки как в референсе */}
        <div className="mt-3 grid grid-cols-1 gap-3 lg:mt-4 lg:grid-cols-2 lg:gap-4">
          <a
            href={waLink(
              "Здравствуйте! Помогите посчитать расход и стоимость химии на одну мойку для моей автомойки."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group flex items-center justify-between gap-4 bg-amber p-5 transition-colors hover:bg-amber-dark sm:p-6"
          >
            <div>
              <p className="text-[16px] font-extrabold leading-snug text-ink sm:text-[19px]">
                Сколько вы можете зарабатывать больше с ASF?
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink/75 sm:text-[14px]">
                Рассчитаем расход химии и стоимость одной мойки на ваших
                условиях.
              </p>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform group-hover:translate-x-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          <a
            href={contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group flex items-center justify-between gap-4 border border-line bg-paper p-5 transition-colors hover:border-ink sm:p-6"
          >
            <div>
              <p className="text-[16px] font-extrabold leading-snug sm:text-[19px]">
                Нужна консультация?
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted sm:text-[14px]">
                Технолог поможет посчитать выгоду именно для вашей автомойки.
              </p>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-transform group-hover:translate-x-1">
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
