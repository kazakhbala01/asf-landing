"use client";

import { useState } from "react";
import { waLink, contacts } from "@/lib/products";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Здравствуйте! Меня зовут ${name || "—"}. ${message || "Хочу получить консультацию по автохимии ASF."} Мой телефон: ${phone || "—"}.`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacts" className="border-b border-line">
      <div className="mx-auto max-w-[85rem] px-4 py-14 sm:px-6 lg:py-20">
        <div className="reveal mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-amber" />
            <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
              Контакты
            </span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            ОСТАВЬТЕ ЗАЯВКУ
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
          {/* форма: собирает данные и открывает WhatsApp с готовым сообщением */}
          <form onSubmit={submit} className="reveal flex flex-col gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-[12px] font-bold tracking-caps uppercase text-muted">
                Ваше имя
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Как к вам обращаться"
                className="border border-line bg-paper px-4 py-3.5 text-[15px] outline-none transition-colors focus:border-amber"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[12px] font-bold tracking-caps uppercase text-muted">
                Телефон
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 ___ ___ __ __"
                className="border border-line bg-paper px-4 py-3.5 text-[15px] outline-none transition-colors focus:border-amber"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[12px] font-bold tracking-caps uppercase text-muted">
                Что вас интересует
              </span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Например: нужна пена для мойки самообслуживания, вода жёсткая"
                rows={4}
                className="resize-none border border-line bg-paper px-4 py-3.5 text-[15px] outline-none transition-colors focus:border-amber"
              />
            </label>
            <button
              type="submit"
              className="mt-2 bg-amber px-8 py-4 text-[13px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-amber-dark"
            >
              Отправить в WhatsApp
            </button>
            <p className="text-[12px] leading-snug text-muted">
              Заявка откроется в WhatsApp с готовым сообщением — просто нажмите
              «Отправить». Это быстрее, чем ждать звонка.
            </p>
          </form>

          {/* контакты + карта */}
          <div className="reveal flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-[11px] font-bold tracking-caps uppercase text-muted">
                  Телефоны
                </p>
                {contacts.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="block text-[16px] font-bold tabular-nums transition-colors hover:text-amber-dark"
                  >
                    {p}
                  </a>
                ))}
              </div>
              <div>
                <p className="mb-2 text-[11px] font-bold tracking-caps uppercase text-muted">
                  Почта
                </p>
                {contacts.emails.map((e) => (
                  <a
                    key={e}
                    href={`mailto:${e}`}
                    className="block break-all text-[15px] font-semibold transition-colors hover:text-amber-dark"
                  >
                    {e}
                  </a>
                ))}
              </div>
              <div className="sm:col-span-2">
                <p className="mb-2 text-[11px] font-bold tracking-caps uppercase text-muted">
                  Адрес производства
                </p>
                <a
                  href={contacts.addressLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-semibold transition-colors hover:text-amber-dark"
                >
                  {contacts.address} — открыть в 2ГИС
                </a>
              </div>
            </div>
            <iframe
              title="Карта: Astana Soap Factory, Астана, Сокпакбаева 20/2"
              src="https://maps.google.com/maps?q=51.173911,71.382937&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border border-line grayscale transition-[filter] hover:grayscale-0 lg:h-full lg:min-h-[280px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
