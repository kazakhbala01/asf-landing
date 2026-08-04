import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-soft">
      {/* фоновое фото с растворением в белый слева, сдвинуто вправо */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 -right-[7%] left-[7%]">
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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f7f6f3_0%,#f7f6f3_34%,rgba(247,246,243,0.78)_52%,rgba(247,246,243,0.18)_72%,rgba(247,246,243,0)_100%)]" />
        {/* на мобильных забеливаем сильнее, чтобы текст читался */}
        <div className="absolute inset-0 bg-soft/75 sm:hidden" />
      </div>

      {/* высота: экран минус шапка и полоса преимуществ — полоса видна на первом экране, а белая секция ниже не выглядывает */}
      <div className="relative mx-auto flex min-h-[480px] w-full max-w-[85rem] items-center px-4 py-14 sm:px-6 lg:min-h-[calc(100vh-200px)] lg:py-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tight text-ink sm:text-6xl xl:text-[4.5rem]">
            МОЩНАЯ
            <br />
            ХИМИЯ
            <br />
            <span className="text-amber-dark">ДЛЯ КАЖДОГО АВТО</span>
          </h1>
          <p className="mt-6 max-w-md text-[18px] leading-relaxed text-ink/70">
            Высокоэффективные формулы. Глубокая очистка. Безопасно для ЛКП.
            Для автомоек, детейлинг-центров и тех, кто моет сам.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="flex items-center gap-2 bg-amber px-8 py-4 text-[13px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-amber-dark"
            >
              Смотреть продукцию
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#wholesale"
              className="border border-ink px-8 py-4 text-[13px] font-bold tracking-caps uppercase text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Для автомоек
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
