import React from 'react';
import { motion } from 'framer-motion';

export default function DraggableStickers({
  actionButtonText = "SEND MESSAGE ✦",
  actionButtonInitial = { x: -380, y: -130, rotate: -8 },
  onActionClick
}) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const scalePos = (val) => isMobile ? Math.round(val * 0.35) : val;

  const pillStickers = [
    {
      id: 'powerbi',
      label: 'POWER BI ↗',
      url: 'https://www.linkedin.com/in/sharukash',
      initial: { x: scalePos(-410), y: scalePos(20), rotate: 14 }
    },
    {
      id: 'google-skills',
      label: 'DATA SCIENCE ↗',
      url: 'https://www.linkedin.com/in/sharukash',
      initial: { x: scalePos(-360), y: scalePos(140), rotate: -12 }
    },
    {
      id: 'github',
      label: 'GITHUB ↗',
      url: 'https://share.google/mLA3Vwjr9ZcI7gpyL',
      initial: { x: scalePos(-140), y: scalePos(110), rotate: 8 }
    },
    {
      id: 'flask-api',
      label: 'FLASK & REST API ↗',
      url: 'https://share.google/mLA3Vwjr9ZcI7gpyL',
      initial: { x: scalePos(90), y: scalePos(-60), rotate: -14 }
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN ↗',
      url: 'https://www.linkedin.com/in/sharukash',
      initial: { x: scalePos(120), y: scalePos(120), rotate: 16 }
    },
    {
      id: 'python-sql',
      label: 'PYTHON & SQL ↗',
      url: 'https://share.google/mLA3Vwjr9ZcI7gpyL',
      initial: { x: scalePos(370), y: scalePos(-130), rotate: 10 }
    }
  ];

  const roundStickers = [
    {
      id: 'round-peace',
      icon: '✌️',
      initial: { x: scalePos(-140), y: scalePos(-40), rotate: -10 }
    },
    {
      id: 'round-heart',
      icon: '💔',
      initial: { x: scalePos(-60), y: scalePos(-120), rotate: 15 }
    },
    {
      id: 'round-butterfly',
      icon: '🦋',
      initial: { x: scalePos(350), y: scalePos(30), rotate: -16 }
    }
  ];

  const scaledActionInitial = {
    x: scalePos(actionButtonInitial.x),
    y: scalePos(actionButtonInitial.y),
    rotate: actionButtonInitial.rotate || -8
  };

  const dragBoundX = isMobile ? 140 : 550;
  const dragBoundY = isMobile ? 120 : 200;

  return (
    <div className="relative w-full max-w-6xl h-[360px] sm:h-[440px] md:h-[520px] flex items-center justify-center select-none overflow-hidden mt-0 mb-4">
      {/* Round Rotating Badge Stickers */}
      {roundStickers.map((st) => (
        <motion.div
          key={st.id}
          drag
          dragConstraints={{ left: -dragBoundX, right: dragBoundX, top: -dragBoundY, bottom: dragBoundY }}
          dragElastic={0.25}
          whileDrag={{ scale: 1.15, cursor: 'grabbing', zIndex: 60 }}
          initial={st.initial}
          className="absolute z-20 cursor-grab w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#FAF7E8] border border-[#161616] shadow-[0_8px_25px_rgba(0,0,0,0.12)] flex items-center justify-center relative group"
        >
          {/* Rotating Text Path */}
          <svg className="absolute inset-0 w-full h-full animate-[spin_14s_linear_infinite] pointer-events-none" viewBox="0 0 100 100">
            <path id={`circlePath-${st.id}`} d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
            <text className="text-[7.2px] font-black font-oswald uppercase fill-[#161616] tracking-[2.2px]">
              <textPath href={`#circlePath-${st.id}`}>
                ✦ DRAG ME ✦ DRAG ME ✦ DRAG ME ✦ DRAG ME
              </textPath>
            </text>
          </svg>
          {/* Center Emoji/Icon */}
          <span className="text-xl sm:text-2xl md:text-3xl select-none z-10">{st.icon}</span>
        </motion.div>
      ))}

      {/* Popcorn Cream Pill Stickers */}
      {pillStickers.map((st) => (
        <motion.a
          key={st.id}
          href={st.url}
          target="_blank"
          rel="noopener noreferrer"
          drag
          dragConstraints={{ left: -dragBoundX, right: dragBoundX, top: -dragBoundY, bottom: dragBoundY }}
          dragElastic={0.25}
          whileDrag={{ scale: 1.1, cursor: 'grabbing', zIndex: 60 }}
          whileHover={{ scale: 1.05 }}
          initial={st.initial}
          className="absolute z-30 cursor-grab px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-full bg-[#FAF7E8] border border-[#161616] text-[#161616] font-oswald font-black text-[10px] sm:text-xs md:text-sm tracking-wider uppercase flex items-center gap-1.5 sm:gap-2 shadow-[0_6px_20px_rgba(0,0,0,0.09)] transition-colors hover:bg-white"
        >
          <span>{st.label}</span>
        </motion.a>
      ))}

      {/* Green Highlight Action Button Sticker */}
      <motion.button
        onClick={onActionClick}
        drag
        dragConstraints={{ left: -dragBoundX, right: dragBoundX, top: -dragBoundY, bottom: dragBoundY }}
        dragElastic={0.25}
        whileDrag={{ scale: 1.1, cursor: 'grabbing', zIndex: 60 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        initial={scaledActionInitial}
        className="absolute z-40 cursor-grab px-5 py-2.5 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-full bg-[#85D600] border border-[#161616] text-[#161616] font-oswald font-black text-[10px] sm:text-xs md:text-sm tracking-wider uppercase flex items-center gap-1.5 sm:gap-2 shadow-[0_8px_25px_rgba(133,214,0,0.4)] hover:bg-[#78C800] transition-colors"
      >
        <span>{actionButtonText}</span>
      </motion.button>
    </div>
  );
}
