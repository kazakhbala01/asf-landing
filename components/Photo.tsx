type PhotoProps = {
  /** подпись-название кадра, который сюда встанет */
  label: string;
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Заглушка под фотографию. Когда появятся реальные снимки — заменить на
 * <Image> из next/image с тем же className (пропорции сохранятся).
 */
export default function Photo({ label, tone = "light", className = "" }: PhotoProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={`photo-placeholder relative flex items-center justify-center overflow-hidden ${
        isDark ? "bg-[#1d1d1d]" : "bg-[#eceae5]"
      } ${className}`}
      role="img"
      aria-label={label}
    >
      <div
        className={`flex flex-col items-center gap-2 px-4 text-center ${
          isDark ? "text-white/35" : "text-ink/30"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
          <path d="M4 8h3l2-3h6l2 3h3v12H4V8z" strokeLinejoin="round" />
          <circle cx="12" cy="13.5" r="3.5" />
        </svg>
        <span className="text-[10px] font-semibold tracking-caps uppercase">{label}</span>
      </div>
    </div>
  );
}
