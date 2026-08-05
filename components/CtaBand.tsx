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
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <a
            href={`tel:${contacts.phones[0].replace(/\s/g, "")}`}
            className="text-3xl font-extrabold tabular-nums text-ink transition-opacity hover:opacity-70"
          >
            {contacts.phones[0]}
          </a>
          <a
            href={contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-ink px-8 py-4 text-[13px] font-bold tracking-caps uppercase text-white transition-colors hover:bg-black"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.2-.8l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.4z" />
            </svg>
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
