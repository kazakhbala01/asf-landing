import BeforeAfterSlider from "./BeforeAfterSlider";
import { waLink } from "@/lib/products";

export default function BeforeAfter() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
        <div className="reveal mb-6 flex flex-wrap items-end justify-between gap-4 sm:mb-8">
          <div>
            <div className="mb-3 flex items-center gap-3 sm:mb-4">
              <span className="h-0.5 w-8 bg-amber" />
              <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
                Результат
              </span>
            </div>
            <h2 className="text-[1.75rem] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              АКТИВНАЯ ПЕНА В РАБОТЕ
            </h2>
            <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-muted sm:mt-4 sm:text-[16px] lg:text-[17px]">
              Потяните ползунок: плотная пена ASF снимает грязь без контакта —
              и кузов остаётся идеально чистым.
            </p>
          </div>
          <a
            href={waLink("Здравствуйте! Хочу такой же результат — подскажите, какая пена подойдёт для моей мойки.")}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-ink px-5 py-3 text-[12px] font-bold tracking-caps uppercase transition-colors hover:bg-ink hover:text-white lg:px-7 lg:py-4 lg:text-[13px]"
          >
            Хочу такой результат
          </a>
        </div>

        <figure className="reveal">
          <BeforeAfterSlider
            before="/photos/ba1-before.jpg"
            after="/photos/ba1-after.jpg"
            alt="Audi Q7: активная пена ASF и результат мойки"
            beforeLabel="В ПЕНЕ"
            afterLabel="ПОСЛЕ МОЙКИ"
          />
          <figcaption className="pt-3 text-[13px] font-semibold sm:text-[14px]">
            Audi Q7 · бесконтактная мойка
            <span className="ml-3 text-muted">— ASF Pink Active Foam</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
