import Image from "next/image";
import { waLink, contacts } from "@/lib/products";

const benefits = [
  "Производство в Казахстане",
  "Собственные рецептуры",
  "Оптовые цены",
  "Быстрая доставка",
  "Поддержка технолога",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-soft">
      {/*
        Десктоп: фото стоит справа целиком (без обрезки), его левый край
        растворяется маской в фон — машина полностью вне зоны fade.
        Мобильный: фото отдельным блоком под текстом.
      */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[66%] items-center lg:flex">
        <Image
          src="/photos/hero-foam.jpg"
          alt="Автомобиль в густой активной пене ASF"
          width={1408}
          height={768}
          priority
          sizes="66vw"
          className="h-auto w-full [-webkit-mask-composite:source-in] [mask-composite:intersect] [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.35)_6%,#000_13%),linear-gradient(180deg,transparent_0%,#000_7%,#000_92%,transparent_100%)]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[85rem] px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14 lg:flex lg:min-h-[calc(100vh-200px)] lg:items-center lg:py-16">
        <div className="lg:max-w-[33%]">
          <h1 className="text-[1.9rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-[2.7rem] lg:text-[2.3rem] xl:text-[2.8rem]">
            УВЕЛИЧЬТЕ ПРИБЫЛЬ ВАШЕЙ АВТОМОЙКИ
            <br />
            <span className="text-amber-dark">В 2–3 РАЗА</span>
          </h1>
          <p className="mt-3 max-w-md text-[16px] font-semibold leading-snug text-ink/70 sm:mt-4 sm:text-[19px] lg:text-[18px] xl:text-[20px]">
            и выведите бизнес на новый уровень
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3">
            <a
              href={waLink("Здравствуйте! Пришлите, пожалуйста, оптовый прайс ASF.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber px-4 py-3.5 text-[11px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-amber-dark sm:px-7 sm:py-4 sm:text-[13px]"
            >
              Получить прайс
            </a>
            <a
              href={waLink("Здравствуйте! Хочу получить бесплатный образец автохимии ASF.")}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink px-4 py-3.5 text-[11px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-ink hover:text-white sm:px-7 sm:py-4 sm:text-[13px]"
            >
              Бесплатный образец
            </a>
            <a
              href={contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в WhatsApp"
              className="flex items-center gap-2 border border-ink/25 bg-white/70 px-4 py-3.5 text-[11px] font-bold tracking-caps uppercase text-ink transition-colors hover:border-ink sm:px-7 sm:py-4 sm:text-[13px]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#1faa59]">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.2-.8l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.4z" />
              </svg>
              WhatsApp
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 sm:mt-9 sm:gap-x-6 sm:gap-y-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-1.5 text-[12px] font-semibold text-ink/60 sm:text-[13px]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3.5 w-3.5 text-amber-dark">
                  <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </li>
            ))}
          </ul>

          {/* мобильный вариант фото: под текстом, целиком — перед машины виден,
              верхний край растворяется в фон */}
          <Image
            src="/photos/hero-foam.jpg"
            alt="Автомобиль в густой активной пене ASF"
            width={1408}
            height={768}
            priority
            sizes="100vw"
            className="mt-7 h-auto w-full [mask-image:linear-gradient(180deg,transparent_0%,#000_14%)] lg:hidden"
          />
        </div>
      </div>
    </section>
  );
}
