"use client";

import { useState } from "react";
import Image from "next/image";
import { contacts } from "@/lib/products";

const nav = [
  { href: "#products", label: "Продукция" },
  { href: "#how-we-work", label: "Как мы работаем" },
  { href: "#production", label: "Производство" },
  { href: "#about", label: "О компании" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#141416]/95 text-white backdrop-blur-sm">
      <div className="mx-auto flex h-12 max-w-[85rem] items-center justify-between px-4 sm:h-14 sm:px-6 lg:h-16">
        <a href="#" className="flex items-center gap-2.5 sm:gap-3">
          <Image
            src="/logo.png"
            alt="ASF — Astana Soap Factory"
            width={44}
            height={44}
            priority
            className="h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11"
          />
          <span className="text-[11px] font-extrabold uppercase leading-[1.15] tracking-caps sm:text-[13px]">
            Astana
            <br />
            Soap
            <br />
            Factory
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[13px] font-semibold tracking-caps text-white uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-amber after:transition-[width] after:duration-200 hover:text-amber hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border border-white/30 px-4 py-[11px] text-[12px] font-bold tracking-caps uppercase text-white transition-colors hover:border-amber hover:text-amber md:flex"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.2-.8l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.4z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="#products"
            className="hidden bg-amber px-6 py-3 text-[12px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-amber-dark sm:flex sm:items-center sm:gap-2"
          >
            Каталог
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
              <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <button
            aria-label="Меню"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-white ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#141416] lg:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 px-6 py-4 text-sm font-medium tracking-caps uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
