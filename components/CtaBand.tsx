import { waLink, contacts } from "@/lib/products";

export default function CtaBand() {
  return (
    <section id="sample" className="bg-amber">
      <div className="mx-auto flex max-w-[85rem] flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-20">
        <div className="reveal">
          <h2 className="text-[1.75rem] font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Не рискуйте деньгами — протестируйте бесплатно!
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/80 sm:text-[17px]">
            Получите бесплатный тестовый образец профессиональной автохимии ASF
            и сравните результат с тем, чем пользуетесь сейчас.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-4 lg:w-auto lg:shrink-0 lg:gap-5">
          <a
            href={waLink(
              "Здравствуйте! Хочу заказать бесплатный тестовый образец автохимии ASF."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-ink px-7 py-4 text-center text-[13px] font-bold tracking-caps uppercase text-white transition-colors hover:bg-black sm:px-10 sm:py-5 sm:text-[14px] lg:w-auto"
          >
            Заказать бесплатный тестовый образец
          </a>
          <a
            href={`tel:${contacts.phones[0].replace(/\s/g, "")}`}
            className="text-2xl font-extrabold tabular-nums text-ink transition-opacity hover:opacity-70"
          >
            {contacts.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
}
