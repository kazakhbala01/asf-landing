import { contacts } from "@/lib/products";

export default function CtaBand() {
  return (
    <section id="contacts" className="bg-amber">
      <div className="mx-auto flex max-w-[85rem] flex-col items-start justify-between gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:py-16">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Начнём работать вместе
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-ink/80">
            Позвоните или напишите — подберём химию под ваше оборудование,
            воду и объёмы. Ответим на вопросы по опту и доставке.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href={`tel:${contacts.phones[0].replace(/\s/g, "")}`}
            className="text-3xl font-extrabold tabular-nums text-ink transition-opacity hover:opacity-70"
          >
            {contacts.phones[0]}
          </a>
          <a
            href={`mailto:${contacts.emails[0]}`}
            className="bg-ink px-8 py-4 text-[13px] font-bold tracking-caps uppercase text-white transition-colors hover:bg-black"
          >
            Написать нам
          </a>
        </div>
      </div>
    </section>
  );
}
