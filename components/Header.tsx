"use client";

import { useState } from "react";
import Image from "next/image";

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
      <div className="mx-auto flex h-16 max-w-[85rem] items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ASF — Astana Soap Factory"
            width={44}
            height={44}
            priority
            className="h-11 w-11"
          />
          <span className="text-[13px] font-extrabold uppercase leading-[1.2] tracking-caps">
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
