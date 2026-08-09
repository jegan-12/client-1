import React from 'react';

export default function MarqueeRibbon() {
  const items = [
    "CREATIVE CODE",
    "FULLSTACK DEVELOPER",
    "WEB DESIGNER",
    "ANIMATION SPECIALIST",
    "UI/UX INNOVATION"
  ];

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[112vw] max-w-[112%] bg-[#85D600] py-3.5 border-t border-b border-[#161616]/20 overflow-hidden z-40 select-none rotate-[-2deg] origin-center shadow-lg">
      <div className="animate-marquee font-casko text-[#161616] text-base md:text-lg font-black uppercase tracking-widest flex items-center gap-12 whitespace-nowrap">
        {[...Array(4)].map((_, idx) => (
          <span key={idx} className="flex items-center gap-9">
            {items.map((text, i) => (
              <React.Fragment key={i}>
                <span>{text}</span>
                <span className="text-[#161616]/50 font-normal">✦</span>
              </React.Fragment>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
