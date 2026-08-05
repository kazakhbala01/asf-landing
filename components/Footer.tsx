import Image from "next/image";
import { categories, products, contacts } from "@/lib/products";

const companyLinks = [
  { href: "#how-we-work", label: "Как мы работаем" },
  { href: "#wholesale", label: "Оптовым партнёрам" },
  { href: "#production", label: "Производство" },
  { href: "#about", label: "О компании" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[85rem] px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="ASF — Astana Soap Factory"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <span className="text-[13px] font-extrabold uppercase leading-[1.2] tracking-caps">
                Astana
                <br />
                Soap
                <br />
                Factory
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-white/60">
              Профессиональная автохимия для моек и тех, кто ухаживает за авто
              сам. Производим в Астане, отгружаем по Казахстану.
            </p>
            <a
              href={contacts.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-white/80 transition-colors hover:text-amber"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <p className="mb-3 text-[10px] font-bold tracking-caps uppercase text-white/50">
                Продукция
              </p>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <a
                      href={`#${products.find((p) => p.category === cat.id)?.id}`}
                      className="text-[14px] text-white/80 transition-colors hover:text-amber"
                    >
                      {cat.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#products" className="text-[14px] text-white/80 transition-colors hover:text-amber">
                    Вся продукция
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-3 text-[10px] font-bold tracking-caps uppercase text-white/50">
                Компания
              </p>
              <ul className="space-y-2">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-[14px] text-white/80 transition-colors hover:text-amber">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-[10px] font-bold tracking-caps uppercase text-white/50">
                Где купить
              </p>
              <ul className="space-y-2">
                {contacts.marketplaces.map((m) => (
                  <li key={m.href}>
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] text-white/80 transition-colors hover:text-amber"
                    >
                      {m.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={contacts.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-white/80 transition-colors hover:text-amber"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href={contacts.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-white/80 transition-colors hover:text-amber"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-3 text-[10px] font-bold tracking-caps uppercase text-white/50">
                Контакты
              </p>
              <ul className="space-y-2">
                {contacts.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-[14px] tabular-nums text-white/80 transition-colors hover:text-amber"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
                {contacts.emails.map((email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="break-all text-[14px] text-white/80 transition-colors hover:text-amber"
                    >
                      {email}
                    </a>
                  </li>
                ))}
                <li className="pt-1">
                  <a
                    href={contacts.addressLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] leading-snug text-white/60 transition-colors hover:text-amber"
                  >
                    {contacts.address} · 2ГИС
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-6 text-[12px] text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Astana Soap Factory. Все права защищены.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <a href="/privacy" className="transition-colors hover:text-amber">
              Политика конфиденциальности
            </a>
            {/* TODO: сертификаты и реквизиты — добавить страницы, когда клиент пришлёт документы */}
            <a
              href={contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-amber"
            >
              Сертификаты и реквизиты — по запросу
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
