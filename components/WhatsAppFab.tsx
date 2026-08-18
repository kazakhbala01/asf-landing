import { waLink } from "@/lib/products";

/**
 * Плавающая кнопка WhatsApp — справа внизу на всех страницах.
 * z-40: ниже модальных окон (z-100) и шапки (z-50), выше контента секций.
 */
export default function WhatsAppFab() {
  return (
    <a
      href={waLink(
        "Здравствуйте! Пишу с сайта ASF — хочу узнать про автохимию."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className="group fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_6px_24px_rgba(0,0,0,0.28)] transition-transform hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 24 24" fill="#fff" className="h-7 w-7 sm:h-8 sm:w-8">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.2-.8l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.4z" />
      </svg>

      {/* подпись выезжает при наведении — только на десктопе */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-4 py-2 text-[12px] font-bold tracking-caps uppercase text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:block">
        Написать в WhatsApp
      </span>
    </a>
  );
}
