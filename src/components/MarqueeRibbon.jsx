import React from 'react';

export default function MarqueeRibbon() {
  const items = [
    "DATA ENGINEER",
    "DATA ANALYST",
    "PYTHON & SQL DEV",
    "FLASK & REST API",
    "UI/UX INNOVATION"
  ];

  return (
    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 w-[115vw] max-w-[115%] bg-[#85D600] py-3 md:py-3.5 border-t border-b-2 border-[#161616] overflow-hidden z-40 select-none rotate-[-2.5deg] origin-center shadow-2xl">
      <div className="animate-marquee font-casko text-[#161616] text-sm md:text-base lg:text-lg font-black uppercase tracking-widest flex items-center gap-12 whitespace-nowrap">
        {[...Array(4)].map((_, idx) => (
          <span key={idx} className="flex items-center gap-9">
            {items.map((text, i) => (
              <React.Fragment key={i}>
                <span>{text}</span>
                <span className="text-[#161616]/60 font-normal">✦</span>
              </React.Fragment>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
