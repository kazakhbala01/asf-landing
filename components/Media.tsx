import Image from "next/image";
import MediaCard from "./MediaCard";

// Реальные видео и креативы компании (из папки creative, WhatsApp-исходники).
const items: (
  | { type: "video"; src: string; label: string }
  | { type: "image"; src: string; label: string }
)[] = [
  { type: "video", src: "/media/video-1.mp4", label: "Работа пены" },
  { type: "image", src: "/media/creative-1.jpg", label: "Тестируем каждую партию" },
  { type: "video", src: "/media/video-2.mp4", label: "Мойка авто" },
  { type: "image", src: "/media/creative-2.jpg", label: "Polyrole Shine: до/после" },
  { type: "video", src: "/media/video-3.mp4", label: "Производство" },
  { type: "image", src: "/media/creative-3.jpg", label: "Black Tire" },
  { type: "video", src: "/media/video-4.mp4", label: "Разлив продукции" },
  { type: "image", src: "/media/creative-4.jpg", label: "Бесплатные образцы" },
  { type: "video", src: "/media/video-5.mp4", label: "Продукция ASF" },
  { type: "video", src: "/media/video-6.mp4", label: "ASF в работе" },
];

export default function Media() {
  return (
    <section id="media" className="border-b border-line bg-soft">
      <div className="mx-auto max-w-[85rem] px-4 py-14 sm:px-6 lg:py-20">
        <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-amber" />
              <span className="text-[11px] font-semibold tracking-caps uppercase text-muted">
                Медиа
              </span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              ASF В ДЕЛЕ
            </h2>
          </div>
          <p className="text-[14px] font-semibold tracking-caps uppercase text-muted">
            Листайте →
          </p>
        </div>
      </div>

      {/* лента на всю ширину: скролл со снапом, без скриптов */}
      <div className="reveal overflow-x-auto pb-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex h-[440px] snap-x snap-mandatory gap-3 px-4 sm:px-6 lg:h-[500px] lg:px-[max(1rem,calc((100vw-85rem)/2+1.5rem))]">
          {items.map((item) =>
            item.type === "video" ? (
              <MediaCard key={item.src} src={item.src} label={item.label} />
            ) : (
              <figure
                key={item.src}
                className="relative aspect-[9/16] h-full shrink-0 snap-start overflow-hidden bg-ink"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </figure>
            )
          )}
        </div>
      </div>
    </section>
  );
}
