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
      {/* фоновое фото с растворением в белый слева, сдвинуто вправо */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 -left-[14%] right-0">
          <Image
            src="/photos/hero-foam.jpg"
            alt="Автомобиль в густой активной пене ASF"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />
        </div>
        {/* лёгкое затемнение фото справа */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_42%,rgba(0,0,0,0.30)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f7f6f3_0%,#f7f6f3_29%,rgba(247,246,243,0.72)_45%,rgba(247,246,243,0.12)_61%,rgba(247,246,243,0)_100%)]" />
        {/* на мобильных забеливаем сильнее, чтобы текст читался */}
        <div className="absolute inset-0 bg-soft/75 sm:hidden" />
      </div>

      {/* высота: экран минус шапка и полоса преимуществ — полоса видна на первом экране */}
      <div className="relative mx-auto flex min-h-[480px] w-full max-w-[85rem] items-center px-4 py-14 sm:px-6 lg:min-h-[calc(100vh-200px)] lg:py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-[1.06] tracking-tight text-ink sm:text-5xl xl:text-[3.8rem]">
            УВЕЛИЧЬТЕ ПРИБЫЛЬ АВТОМОЙКИ
            <br />
            <span className="text-amber-dark">В 2–3 РАЗА</span>
          </h1>
          <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-ink/75">
            За счёт более быстрой мойки, меньшего расхода автохимии
            и возвращающихся клиентов. Производим профессиональные автошампуни,
            очистители двигателя и полироли с выгодной себестоимостью.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink("Здравствуйте! Пришлите, пожалуйста, оптовый прайс ASF.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber px-7 py-4 text-[13px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-amber-dark"
            >
              Получить прайс
            </a>
            <a
              href={waLink("Здравствуйте! Хочу получить бесплатный образец автохимии ASF.")}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink px-7 py-4 text-[13px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Бесплатный образец
            </a>
            <a
              href={contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-ink/30 bg-white/70 px-7 py-4 text-[13px] font-bold tracking-caps uppercase text-ink backdrop-blur-sm transition-colors hover:border-ink"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 text-[#1faa59]">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.2-.8l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.4z" />
              </svg>
              WhatsApp
            </a>
          </div>
          <ul className="mt-9 flex max-w-xl flex-wrap gap-x-6 gap-y-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-1.5 text-[13px] font-semibold text-ink/60">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3.5 w-3.5 text-amber-dark">
                  <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
