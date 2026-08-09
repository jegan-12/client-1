import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Briefcase } from 'lucide-react';
import InteractiveCanvas from '../components/InteractiveCanvas';
import MarqueeRibbon from '../components/MarqueeRibbon';
import WorkExperienceDrawer from '../components/WorkExperienceDrawer';

export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [rotatedTextIndex, setRotatedTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const heroWords = ['FULLSTACK DEVELOPER', 'WEB DESIGNER', 'UI/UX INNOVATOR', 'CREATIVE ENGINEER'];

  useEffect(() => {
    const currentWord = heroWords[rotatedTextIndex];
    let timer;

    if (isDeleting) {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRotatedTextIndex((prev) => (prev + 1) % heroWords.length);
      }
    } else {
      if (displayText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, rotatedTextIndex]);

  return (
    <main className="relative w-full h-screen bg-[#E4E2E3] overflow-hidden flex items-center justify-center select-none font-jakarta">
      {/* Background Perspective Wireframe Grid Canvas */}
      <InteractiveCanvas />

      {/* Top Bar Header */}
      <div className="absolute top-6 left-8 right-8 z-40 flex justify-between items-start pointer-events-none">
        {/* Top Left Brand Logo */}
        <div className="pointer-events-auto origin-left pt-2">
          <Link to="/" className="flex items-center gap-3 group">
            <svg className="w-9 h-9 text-[#75a12eff]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0L15.3 8.7L24 12L15.3 15.3L12 24L8.7 15.3L0 12L8.7 8.7Z"></path>
            </svg>
            <span className="text-[#75a12eff] text-3xl font-bold tracking-wide whitespace-nowrap transform transition-all duration-300 cursor-default font-jakarta">
              portfolio
            </span>
          </Link>
        </div>

        {/* Top Right Desktop Info */}
        <div className="pointer-events-auto hidden lg:flex flex-col items-end text-right gap-3 max-w-[280px] pt-1">
          <div className="select-none origin-right">
            <div className="text-[#161616] hover:text-[#85D600] text-3xl font-medium tracking-wide whitespace-nowrap transform -rotate-12 transition-all duration-300 hover:scale-110 cursor-default font-caveat">
              Sharukash
            </div>
          </div>
          <p className="text-[#161616]/85 text-xs font-jakarta leading-relaxed font-medium mt-1">
            Hi, I'm Sharukash. I bridge the gap between engineering and art to design immersive, high-performance web experiences.
          </p>
          <Link
            to="/contact"
            className="group relative flex items-center gap-2.5 px-4 py-2 border border-[#161616]/30 rounded-full text-[#161616] text-[10px] font-bold tracking-widest hover:border-[#85D600] hover:text-[#85D600] transition-all duration-300 active:scale-95 bg-white/10 backdrop-blur-sm shadow-sm mt-1"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Center Hero Layout */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10 mt-[-40px]">
          <h1 className="font-oswald font-black text-[9vw] uppercase leading-[0.8] text-[#161616] opacity-10 tracking-tighter">
            I'M BORN TO
          </h1>
          <h1 className="font-oswald font-black text-[6.5vw] md:text-[8vw] uppercase leading-[0.8] text-stroke-orange tracking-tighter mt-4 min-h-[1.1em] text-center w-full px-4">
            <span>{displayText}</span>
            <span className="animate-pulse opacity-80 select-none text-[#85D600]">|</span>
          </h1>
        </div>

        {/* Original Avatar Image Cutout without background removal modifications */}
        <img
          src="/avatar.png"
          alt="Main Cutout"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 w-[95%] h-[82%] max-w-xl object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)] select-none pointer-events-none hidden lg:block"
        />
        <img
          src="/avatar.png"
          alt="Main Cutout Mobile"
          className="absolute bottom-40 left-1/2 -translate-x-1/2 z-20 w-[85%] h-[58%] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] select-none pointer-events-none lg:hidden"
        />

        {/* Desktop Left Stats Panel */}
        <div className="absolute bottom-24 left-8 z-30 hidden lg:flex flex-col items-start text-left pointer-events-auto">
          <div className="flex flex-col gap-5 text-[#161616] font-jakarta w-48">
            <div className="border-t border-[#161616]/10 pt-3">
              <h3 className="text-3xl font-extrabold text-[#85D600] font-oswald tracking-tight">3+</h3>
              <p className="text-[#161616]/60 text-[10px] tracking-wider uppercase mt-0.5">Years Experience</p>
            </div>
            <div className="border-t border-[#161616]/10 pt-3">
              <h3 className="text-3xl font-extrabold text-[#85D600] font-oswald tracking-tight">30+</h3>
              <p className="text-[#161616]/60 text-[10px] tracking-wider uppercase mt-0.5">Projects Done</p>
            </div>
            <div className="border-t border-[#161616]/10 pt-3">
              <h3 className="text-3xl font-extrabold text-[#85D600] font-oswald tracking-tight">100%</h3>
              <p className="text-[#161616]/60 text-[10px] tracking-wider uppercase mt-0.5">Creative Drive</p>
            </div>

            <button
              onClick={() => setDrawerOpen(true)}
              className="mt-2 flex items-center justify-center gap-2 px-3 py-2 bg-[#85D600]/20 border border-[#85D600]/40 rounded-xl text-[#161616] font-bold text-[10px] tracking-wider hover:bg-[#85D600]/30 transition-colors"
            >
              <Briefcase className="w-3.5 h-3.5 text-[#85D600]" />
              <span>EXPERIENCE TIMELINE</span>
            </button>
          </div>
        </div>

        {/* Mobile Bio Card */}
        <div className="absolute bottom-20 left-6 right-6 z-30 flex flex-col items-center justify-center text-center lg:hidden bg-white/45 backdrop-blur-md p-5 rounded-2xl border border-white/30 pointer-events-auto max-w-md mx-auto">
          <p className="text-[#161616] text-xs font-jakarta leading-relaxed mb-4">
            Hi, I'm Nand Kishore Soni. I bridge the gap between engineering and art to design immersive, high-performance web experiences.
          </p>
          <div className="flex items-center gap-4 w-full justify-center">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#85D600] text-[#161616] rounded-full text-xs font-black tracking-widest active:scale-95 transition-transform shadow-md"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-2.5 rounded-full bg-white/60 text-[#85D600] border border-[#85D600]/40"
            >
              <Briefcase className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Ribbon */}
      <MarqueeRibbon />

      {/* Experience Drawer Modal */}
      <WorkExperienceDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </main>
  );
}
