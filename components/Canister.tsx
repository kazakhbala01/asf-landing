type CanisterProps = {
  /** product name printed on the label */
  name: string;
  /** accent color of the cap / label bar */
  accent?: string;
  /** label line under the name */
  sub?: string;
  className?: string;
};

/**
 * Placeholder product render (SVG jerry can). Will be replaced by real
 * product photos — keep the same aspect ratio (3:4) when swapping.
 */
export default function Canister({
  name,
  accent = "#f59000",
  sub = "PROFESSIONAL",
  className,
}: CanisterProps) {
  const lines = name.toUpperCase().split(" ");
  // на светлых акцентах (жёлтый бренда) подпись читаемее тёмной
  const rgb = parseInt(accent.slice(1), 16);
  const luma =
    0.299 * ((rgb >> 16) & 255) + 0.587 * ((rgb >> 8) & 255) + 0.114 * (rgb & 255);
  const subFill = luma > 160 ? "#181818" : "#ffffff";
  return (
    <svg
      viewBox="0 0 150 200"
      className={className}
      role="img"
      aria-label={name}
    >
      {/* cap */}
      <rect x="98" y="8" width="26" height="16" rx="2" fill={accent} />
      <rect x="101" y="4" width="20" height="6" rx="1" fill={accent} opacity="0.75" />
      {/* handle cutout area */}
      <path
        d="M38 26 h50 a6 6 0 0 1 6 6 v10 h18 a10 10 0 0 1 10 10 v128 a12 12 0 0 1 -12 12 H30 a12 12 0 0 1 -12 -12 V52 a10 10 0 0 1 10 -10 h4 v-10 a6 6 0 0 1 6 -6 z"
        fill="#fdfdfd"
        stroke="#d4d4d4"
        strokeWidth="2"
      />
      {/* handle hole */}
      <path
        d="M44 34 h38 a4 4 0 0 1 4 4 v14 H40 v-14 a4 4 0 0 1 4 -4 z"
        fill="#efefef"
        stroke="#d4d4d4"
        strokeWidth="2"
      />
      {/* body ridges */}
      <line x1="26" y1="66" x2="122" y2="66" stroke="#e8e8e8" strokeWidth="2" />
      <line x1="26" y1="172" x2="122" y2="172" stroke="#e8e8e8" strokeWidth="2" />
      {/* label */}
      <rect x="32" y="78" width="84" height="82" rx="3" fill="#ffffff" stroke="#e2e2e2" strokeWidth="1.5" />
      <rect x="32" y="78" width="84" height="14" rx="3" fill="#111111" />
      <text
        x="74"
        y="88.5"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="1.5"
        fill="#ffffff"
      >
        ASF
      </text>
      {lines.slice(0, 3).map((line, i) => (
        <text
          key={i}
          x="74"
          y={108 + i * 13}
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize={line.length > 9 ? 9 : 11}
          fontWeight="700"
          letterSpacing="0.5"
          fill="#181818"
        >
          {line}
        </text>
      ))}
      <rect x="40" y="146" width="68" height="7" rx="1" fill={accent} />
      <text
        x="74"
        y="151.5"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="5"
        fontWeight="700"
        letterSpacing="1.2"
        fill={subFill}
      >
        {sub.toUpperCase()}
      </text>
    </svg>
  );
}
