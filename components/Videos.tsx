// TODO: заменить заглушки на реальные ролики (mp4 в public/videos/ или ссылки
// на Instagram/YouTube). Плитки уже свёрстаны — вставить <video> или превью со ссылкой.
const videos = [
  { title: "Работа активной пены", note: "как пена отрывает грязь" },
  { title: "Производство и разлив", note: "цех ASF изнутри" },
  { title: "Отзывы клиентов", note: "мойки о нашей химии" },
];

export default function Videos() {
  return (
    <section className="border-b border-line bg-soft">
      <div className="mx-auto max-w-[85rem] px-4 py-14 sm:px-6 lg:py-20">
        <div className="reveal mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-amber" />
            <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
              Видео
            </span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            ПОСМОТРИТЕ, КАК ЭТО РАБОТАЕТ
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {videos.map((v) => (
            <figure key={v.title} className="reveal">
              <div className="photo-placeholder relative flex aspect-video items-center justify-center bg-[#26262a]">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber transition-transform hover:scale-105">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7 text-ink">
                    <path d="M8 5.5v13l11-6.5-11-6.5z" />
                  </svg>
                </span>
                <span className="absolute bottom-3 left-4 text-[10px] font-semibold tracking-caps uppercase text-white/40">
                  Видео скоро
                </span>
              </div>
              <figcaption className="pt-3">
                <p className="text-[15px] font-bold">{v.title}</p>
                <p className="text-[13px] text-muted">{v.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
