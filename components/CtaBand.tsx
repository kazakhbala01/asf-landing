import { waLink, contacts } from "@/lib/products";

export default function CtaBand() {
  return (
    <section id="sample" className="bg-amber">
      <div className="mx-auto flex max-w-[85rem] flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-20">
        <div className="reveal">
          <h2 className="text-[1.75rem] font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Попробуйте нашу автохимию бесплатно
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink/80 sm:text-[17px]">
            Предоставим образцы под вашу воду и оборудование, чтобы вы лично
            убедились в качестве — ещё до первого заказа.
          </p>
        </div>
        <div className="flex flex-col items-start gap-5">
          <a
            href={waLink("Здравствуйте! Хочу получить бесплатный образец автохимии ASF.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink px-10 py-5 text-[15px] font-bold tracking-caps uppercase text-white transition-colors hover:bg-black"
          >
            Получить образец
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
