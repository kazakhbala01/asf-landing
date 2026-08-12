import Image from "next/image";

const numbers = [
  { value: "6 лет", label: "в производстве химической продукции" },
  { value: "2 года", label: "в профессиональной автохимии" },
  { value: "3000+", label: "кг продукции в сутки" },
  { value: "16+", label: "продуктов собственной разработки" },
];

export default function AboutCompany() {
  return (
    <section id="about" className="border-b border-line bg-soft">
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="reveal">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-amber" />
              <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
                О компании
              </span>
            </div>
            <h2 className="text-[1.75rem] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              ASTANA SOAP FACTORY
            </h2>

            <p className="mt-6 max-w-xl text-[14px] leading-relaxed text-muted sm:text-[16px]">
              Astana Soap Factory — казахстанский производитель химической
              продукции с собственным производством в Астане. Компания работает
              в сфере производства химии с 2020 года. Мы начинали с бытовой
              химии, а в 2024 году открыли направление профессиональной
              автохимии ASF для автомоек и детейлинг-центров.
            </p>
            <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-muted sm:text-[16px]">
              Сегодня за нами — 6 лет опыта в производстве химической продукции
              и 2 года в профессиональной автохимии.
            </p>
            {/* мобильный вариант: карточка с фото сверху и подписью под ним */}
            <figure className="mt-6 border border-line bg-paper p-3 lg:hidden">
              <Image
                src="/photos/founder.jpg"
                alt="Руслан — основатель Astana Soap Factory"
                width={477}
                height={647}
                sizes="100vw"
                className="h-auto w-full"
              />
              <figcaption className="px-1 pb-1 pt-3">
                <p className="text-[14px] leading-relaxed text-muted">
                  <span className="font-bold text-ink">
                    Руслан — основатель ASF.
                  </span>{" "}
                  Пилот гражданской авиации, командир Airbus A320 с опытом
                  работы в Air Astana. В основу компании заложил принципы,
                  которым следует в авиации: точность, ответственность,
                  контроль качества и стабильность результата.
                </p>
              </figcaption>
            </figure>

            <p className="mt-4 hidden max-w-xl text-[14px] leading-relaxed text-muted sm:text-[16px] lg:block">
              <span className="font-bold text-ink">Руслан — основатель ASF.</span>{" "}
              Пилот гражданской авиации, командир Airbus A320 с опытом работы
              в Air Astana. В основу компании заложил принципы, которым следует
              в авиации: точность, ответственность, контроль качества
              и стабильность результата.
            </p>
            <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-muted sm:text-[16px]">
              Сегодня ASF — это собственное производство, профессиональная
              линейка автохимии и технологическая поддержка автомоек. Наша
              задача — не просто продать автохимию, а помочь автомойке снизить
              расход, добиться стабильного качества мойки и увеличить
              прибыльность бизнеса.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-6 sm:mt-10 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-8">
              {numbers.map((n) => (
                <div key={n.label}>
                  <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {n.value}
                    <span className="text-amber">.</span>
                  </p>
                  <p className="mt-2 text-[13.5px] leading-snug text-muted">
                    {n.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden justify-center lg:flex lg:justify-end">
            <figure className="reveal w-full max-w-[320px] self-start border border-line bg-paper p-3 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
              <Image
                src="/photos/founder.jpg"
                alt="Руслан — основатель Astana Soap Factory"
                width={477}
                height={647}
                sizes="320px"
                className="h-auto w-full"
              />
              <figcaption className="px-1 pb-1 pt-3 text-center text-[12px] font-semibold tracking-caps uppercase text-muted">
                Руслан — основатель ASF
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
