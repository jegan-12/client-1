import React from 'react';
import { motion } from 'framer-motion';

export default function DraggableStickers({ actionButtonText = "SEND MESSAGE ✦", onActionClick }) {
  const pillStickers = [
    {
      id: 'instagram',
      label: 'INSTAGRAM ↗',
      url: 'https://instagram.com',
      initial: { x: -260, y: -210, rotate: -7 }
    },
    {
      id: 'whatsapp',
      label: 'WHATSAPP ↗',
      url: 'https://api.whatsapp.com/send/?phone=7982402954&text=Hi+Nandkishore',
      initial: { x: -140, y: -120, rotate: 6 }
    },
    {
      id: 'google-skills',
      label: 'GOOGLE SKILLS ↗',
      url: 'https://skillshop.exceedlms.com/',
      initial: { x: -20, y: 140, rotate: 3 }
    },
    {
      id: 'x-twitter',
      label: 'X (TWITTER) ↗',
      url: 'https://twitter.com',
      initial: { x: 190, y: -150, rotate: -4 }
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN ↗',
      url: 'https://linkedin.com',
      initial: { x: -300, y: 150, rotate: -10 }
    },
    {
      id: 'github',
      label: 'GITHUB ↗',
      url: 'https://github.com',
      initial: { x: 30, y: -80, rotate: -19 }
    },
    {
      id: 'telegram',
      label: 'TELEGRAM ↗',
      url: 'https://t.me',
      initial: { x: 310, y: 120, rotate: -6 }
    }
  ];

  const roundStickers = [
    {
      id: 'round-peace',
      icon: '✌️',
      initial: { x: -320, y: -20, rotate: -12 }
    },
    {
      id: 'round-butterfly',
      icon: '🦋',
      initial: { x: -180, y: 100, rotate: 15 }
    },
    {
      id: 'round-heart',
      icon: '💔',
      initial: { x: 210, y: 60, rotate: -10 }
    }
  ];

  return (
    <div className="relative w-full max-w-6xl h-[460px] md:h-[500px] flex items-center justify-center select-none overflow-hidden mt-0 mb-4">
      {/* Round Rotating Badge Stickers */}
      {roundStickers.map((st) => (
        <motion.div
          key={st.id}
          drag
          dragConstraints={{ left: -450, right: 450, top: -200, bottom: 200 }}
          dragElastic={0.25}
          whileDrag={{ scale: 1.15, cursor: 'grabbing', zIndex: 60 }}
          initial={st.initial}
          className="absolute z-20 cursor-grab w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#FAF7E8] border border-[#161616] shadow-[0_8px_25px_rgba(0,0,0,0.12)] flex items-center justify-center relative group"
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
          <span className="text-2xl md:text-3xl select-none z-10">{st.icon}</span>
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
          dragConstraints={{ left: -450, right: 450, top: -200, bottom: 200 }}
          dragElastic={0.25}
          whileDrag={{ scale: 1.1, cursor: 'grabbing', zIndex: 60 }}
          whileHover={{ scale: 1.05 }}
          initial={st.initial}
          className="absolute z-30 cursor-grab px-6 py-3 md:px-7 md:py-3.5 rounded-full bg-[#FAF7E8] border border-[#161616] text-[#161616] font-oswald font-black text-xs md:text-sm tracking-wider uppercase flex items-center gap-2 shadow-[0_6px_20px_rgba(0,0,0,0.09)] transition-colors hover:bg-white"
        >
          <span>{st.label}</span>
        </motion.a>
      ))}

      {/* Red Highlight Action Button Sticker */}
      <motion.button
        onClick={onActionClick}
        drag
        dragConstraints={{ left: -450, right: 450, top: -200, bottom: 200 }}
        dragElastic={0.25}
        whileDrag={{ scale: 1.1, cursor: 'grabbing', zIndex: 60 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: 140, y: 160, rotate: -4 }}
        className="absolute z-40 cursor-grab px-7 py-3.5 md:px-8 md:py-4 rounded-full bg-[#85D600] border border-[#161616] text-[#161616] font-oswald font-black text-xs md:text-sm tracking-wider uppercase flex items-center gap-2 shadow-[0_8px_25px_rgba(133,214,0,0.4)] hover:bg-[#78C800] transition-colors"
      >
        <span>{actionButtonText}</span>
      </motion.button>
    </div>
  );
}
