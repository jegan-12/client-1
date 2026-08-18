import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Briefcase, Download } from 'lucide-react';
import InteractiveCanvas from '../components/InteractiveCanvas';
import MarqueeRibbon from '../components/MarqueeRibbon';
import WorkExperienceDrawer from '../components/WorkExperienceDrawer';

export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [rotatedTextIndex, setRotatedTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const heroWords = ['DATA ENGINEER', 'DATA ANALYST', 'PYTHON & SQL DEV', 'FLASK & REST API'];

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
    <main className="relative w-full lg:min-h-screen bg-[#E4E2E3] font-jakarta lg:h-screen lg:min-h-[640px] lg:overflow-hidden lg:flex lg:items-center lg:justify-center overflow-y-auto overflow-x-hidden select-none">
      {/* Background Perspective Wireframe Grid Canvas */}
      <InteractiveCanvas />

      {/* Mobile Unique Animated Ambient Glowing Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none lg:hidden">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-cyan-300/35 via-[#85D600]/30 to-purple-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-72 -left-20 w-72 h-72 bg-gradient-to-tr from-lime-400/25 to-blue-400/25 rounded-full blur-3xl animate-bounce duration-[8000ms]" />
        <div className="absolute bottom-16 -right-20 w-80 h-80 bg-gradient-to-tl from-purple-300/30 to-[#85D600]/25 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Top Bar Header */}
      <div className="absolute top-2 sm:top-4 lg:top-1 left-3 sm:left-6 right-3 sm:right-8 z-40 flex justify-between items-center pointer-events-none pt-0">
        {/* Top Left Brand Logo */}
        <div className="pointer-events-auto origin-left pt-1 sm:pt-2 lg:pt-0">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <svg className="w-7 h-7 sm:w-9 sm:h-9 text-[#7ec013ff]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0L15.3 8.7L24 12L15.3 15.3L12 24L8.7 15.3L0 12L8.7 8.7Z"></path>
            </svg>
            <span className="text-[#7ec013ff] text-2xl sm:text-3xl font-bold tracking-wide whitespace-nowrap transform transition-all duration-300 cursor-default font-jakarta">
              portfolio
            </span>
          </Link>
        </div>

        {/* Top Right Desktop Info & Resume Button (Desktop Only) */}
        <div className="pointer-events-auto hidden lg:flex flex-col items-end text-right gap-3 max-w-[280px] pt-1">
          <div className="select-none origin-right">
            <div className="text-[#161616] hover:text-[#85D600] text-3xl font-medium tracking-wide whitespace-nowrap transform -rotate-12 transition-all duration-300 hover:scale-110 cursor-default font-caveat">
              Sharukash T
            </div>
          </div>
          <p className="text-[#161616]/85 text-xs font-jakarta leading-relaxed font-medium mt-1">
            Hi, I'm Sharukash T. Aspiring Data Engineer &amp; CS student passionate about data pipelines, Flask APIs, Power BI dashboards, and ML solutions.
          </p>
          <a
            href="/sharukash_resume.pdf"
            download="Sharukash_Resume.pdf"
            className="group relative flex items-center gap-2.5 px-4 py-2 border border-[#161616]/30 rounded-full text-[#161616] text-[10px] font-bold tracking-widest hover:border-[#85D600] hover:text-[#85D600] transition-all duration-300 active:scale-95 bg-white/10 backdrop-blur-sm shadow-sm mt-1"
          >
            <span>RESUME</span>
            <Download className="w-3.5 h-3.5 transform group-hover:translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Desktop Hero Center Layout (Desktop Only - with Text Animation & Desktop Cutout) */}
      <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10">
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10 mt-[-50px]">
          <h1 className="font-oswald font-black text-[9.5vw] sm:text-[8.5vw] uppercase leading-[0.8] text-[#161616] opacity-10 tracking-tighter">
            I'M BORN TO
          </h1>
          <h1 className="font-oswald font-black text-[6.5vw] sm:text-[6vw] md:text-[7.5vw] uppercase leading-[0.8] text-stroke-orange tracking-tighter mt-3 sm:mt-4 min-h-[1.1em] text-center w-full px-2 sm:px-4">
            <span>{displayText}</span>
            <span className="animate-pulse opacity-80 select-none text-[#85D600]">|</span>
          </h1>
        </div>

        {/* Desktop Avatar Image Cutout */}
        <img
          src="/avatar.png"
          alt="Main Cutout"
          className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 w-[88%] h-[72%] max-w-lg object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)] select-none pointer-events-none"
        />

        {/* Desktop Left Stats Panel */}
        <div className="absolute bottom-24 sm:bottom-28 left-6 sm:left-8 z-30 flex flex-col items-start text-left pointer-events-auto">
          <div className="flex flex-col gap-4 text-[#161616] font-jakarta w-48">
            <div className="pt-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#7ec013ff] font-oswald tracking-tight">3</h3>
              <p className="text-[#161616]/60 text-[10px] tracking-wider uppercase mt-0.5">Internships Done</p>
            </div>
            <div className="pt-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#7ec013ff] font-oswald tracking-tight">3+</h3>
              <p className="text-[#161616]/60 text-[10px] tracking-wider uppercase mt-0.5">Data Projects</p>
            </div>
            <div className="pt-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#7ec013ff] font-oswald tracking-tight">100%</h3>
              <p className="text-[#161616]/60 text-[10px] tracking-wider uppercase mt-0.5">Data Drive</p>
            </div>

            <button
              onClick={() => setDrawerOpen(true)}
              className="mt-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#85D600]/20 border border-[#85D600]/40 rounded-xl text-[#161616] font-bold text-[10px] tracking-wider hover:bg-[#85D600]/30 transition-colors"
            >
              <Briefcase className="w-3.5 h-3.5 text-[#85D600]" />
              <span>EXPERIENCE TIMELINE</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Layout (Phone View - Circular Avatar, Spacing & Compact Card) */}
      <div className="relative z-20 lg:hidden flex flex-col items-center justify-start w-full px-4 pt-16 sm:pt-20 pb-12 space-y-5">

        {/* Generous Spacing between Nav Bar Header and Avatar */}
        <div className="w-full flex justify-center mt-4 sm:mt-6 pt-2 pb-1">
          {/* Mobile Circular Avatar Frame (Boy in Circle) */}
          <div className="relative p-2 rounded-full bg-gradient-to-tr from-cyan-400 via-[#85D600] to-purple-600 shadow-[0_0_35px_rgba(133,214,0,0.45)]">
            <div className="p-1 rounded-full bg-[#E4E2E3]">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-white bg-slate-300 flex items-center justify-center">
                <img
                  src="/avatar.png"
                  alt="Sharukash T"
                  className="w-full h-full object-cover object-top scale-110 drop-shadow-md select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Compact Mobile Bio & Stats Card */}
        <div className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/70 shadow-xl pointer-events-auto flex flex-col items-center text-center">
          {/* Mobile Stats Row */}
          <div className="grid grid-cols-3 gap-1.5 w-full mb-2.5 pb-2.5 border-b border-[#161616]/10 text-center">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#7ec013ff] font-oswald tracking-tight">3</h3>
              <p className="text-[#161616]/70 text-[9px] tracking-wider uppercase">Internships</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#7ec013ff] font-oswald tracking-tight">3+</h3>
              <p className="text-[#161616]/70 text-[9px] tracking-wider uppercase">Data Projects</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#7ec013ff] font-oswald tracking-tight">100%</h3>
              <p className="text-[#161616]/70 text-[9px] tracking-wider uppercase">Data Drive</p>
            </div>
          </div>

          <p className="text-[#161616] text-[11px] sm:text-xs font-jakarta leading-relaxed mb-3.5 font-medium">
            Hi, I'm Sharukash T. Aspiring Data Engineer &amp; CS student passionate about data pipelines, Flask APIs, Power BI dashboards, and ML solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full justify-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-1.5 px-4 py-2 bg-[#85D600] text-[#161616] rounded-full text-[11px] font-black tracking-widest active:scale-95 transition-transform shadow-md">
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/90 text-[#161616] border border-[#85D600]/50 text-[11px] font-bold shadow-sm active:scale-95 transition-transform"
            >
              <Briefcase className="w-3.5 h-3.5 text-[#85D600]" />
              <span>TIMELINE</span>
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Ribbon (Desktop View Only) */}
      <div className="hidden lg:block">
        <MarqueeRibbon />
      </div>

      {/* Experience Drawer Modal */}
      <WorkExperienceDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </main>
  );
}
