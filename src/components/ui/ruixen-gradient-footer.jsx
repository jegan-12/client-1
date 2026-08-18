import React, {
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

const VBW = 1271;
const VBH = 599;

// Vibrant Green stops without dark tones, floor (0) → top (1): Lime #85D600 → bright lime → neon light green → mint → transparent light green.
const RUIXEN_STOPS = [
  { offset: 0, color: "#78C800" },
  { offset: 0.20, color: "#85D600" },
  { offset: 0.45, color: "#A3F210" },
  { offset: 0.70, color: "#C6FF47" },
  { offset: 0.88, color: "#E0FF94" },
  { offset: 1, color: "#EAFFA800" },
];

// Height curve: a gentle power falloff
function bellHeights(n, peak, valley) {
  const out = [];
  const mid = (n - 1) / 2;
  for (let i = 0; i < n; i++) {
    const t = mid === 0 ? 0 : Math.abs(i - mid) / mid;
    const eased = 1 - Math.pow(t, 1.24);
    out.push(peak * VBH * (valley + (1 - valley) * eased));
  }
  return out;
}

const clamp01 = (v) => Math.max(0, Math.min(1, v));

export function RuixenGradientFooter({
  children,
  gradientHeight = "50vh",
  minReveal = 0.08,
  bars = 11,
  blur = 12,
  peak = 0.95,
  valley = 0.45,
  stops = RUIXEN_STOPS,
  className = "",
  style = {},
}) {
  const uid = useId().replace(/:/g, "");
  const footerRef = useRef(null);
  const bandRef = useRef(null);
  const [progress, setProgress] = useState(minReveal);

  useEffect(() => {
    const footerEl = footerRef.current;
    const bandEl = bandRef.current;
    if (!footerEl || !bandEl) return;
    const doc = footerEl.ownerDocument;
    const win = doc.defaultView ?? window;

    const measure = () => {
      const rect = footerEl.getBoundingClientRect();
      // Distance scrolled past the point where the bottom of the card becomes visible
      const distanceVisible = win.innerHeight - rect.top + 100;
      // Start effect earlier and reach full height smoothly
      const revealDistance = win.innerHeight * 0.7;
      const t = clamp01(distanceVisible / revealDistance);
      const easedT = Math.pow(t, 0.75); // Faster initial rise & richer peak
      setProgress(minReveal + (1 - minReveal) * easedT);
    };

    measure();
    win.addEventListener("scroll", measure, { passive: true });
    win.addEventListener("resize", measure, { passive: true });
    return () => {
      win.removeEventListener("scroll", measure);
      win.removeEventListener("resize", measure);
    };
  }, [minReveal]);

  const colW = VBW / bars;

  return (
    <footer
      ref={footerRef}
      className={`relative w-full z-10 ${className}`}
      style={style}
    >
      <div className="relative z-20">
        {children}
      </div>

      {/* Pinned Gradient Band — positioned at z-0 behind cards */}
      <div
        ref={bandRef}
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          height: gradientHeight,
          pointerEvents: "none",
          transformOrigin: "bottom",
          transform: `scaleY(${progress})`,
          willChange: "transform",
          zIndex: 1,
        }}
      >
        <svg
          style={{ height: "100%", width: "100%", display: "block" }}
          viewBox={`0 0 ${VBW} ${VBH}`}
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`grad-${uid}`} x1="0" y1="1" x2="0" y2="0">
              {stops.map((s, i) => (
                <stop key={i} offset={s.offset} stopColor={s.color} />
              ))}
            </linearGradient>
            <filter
              id={`blur-${uid}`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation={blur} />
            </filter>
          </defs>
          {bellHeights(bars, peak, valley).map((barH, i) => (
            <g key={i} filter={`url(#blur-${uid})`}>
              <rect
                x={i * colW}
                y={VBH - barH}
                width={colW * 1.05}
                height={barH}
                fill={`url(#grad-${uid})`}
              />
            </g>
          ))}
        </svg>
      </div>
    </footer>
  );
}

export default RuixenGradientFooter;
