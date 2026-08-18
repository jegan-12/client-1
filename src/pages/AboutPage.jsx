import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import InteractiveCanvas from '../components/InteractiveCanvas';

export default function AboutPage() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const TOTAL_FRAMES = 45;
  const imagesRef = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentFrameDisplay, setCurrentFrameDisplay] = useState(1);

  // Track page scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Map scroll progress (0.0 -> 1.0) to frame index (1 -> 45)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

  // Preload and decode all 45 transparent PNG frames
  useEffect(() => {
    let loadedCount = 0;
    const imgs = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const frameStr = String(i).padStart(3, '0');
      const img = new Image();
      img.src = `/frames/ezgif-frame-${frameStr}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, []);

  // Draw current frame on Canvas
  const renderFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesRef.current.length) return;
    const ctx = canvas.getContext('2d');
    const img = imagesRef.current[index - 1];
    if (!img || !img.complete) return;

    // Set high DPI scaling
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, rect.width, rect.height);
    
    // Scale character to fit 100% inside card so head, torso, hands, and feet/shoes are fully visible
    const paddingTop = 8;
    const paddingBottom = 8;
    const paddingX = 8;
    const availWidth = rect.width - (paddingX * 2);
    const availHeight = rect.height - paddingTop - paddingBottom;
    const ratio = Math.min(availWidth / img.width, availHeight / img.height);

    const drawWidth = img.width * ratio;
    const drawHeight = img.height * ratio;
    const centerShiftX = (rect.width - drawWidth) / 2;
    // Align feet 8px above bottom of card so shoes are completely visible
    const centerShiftY = rect.height - drawHeight - paddingBottom;

    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShiftX, centerShiftY, drawWidth, drawHeight
    );
  };

  // Trigger render on scroll update or window resize
  useEffect(() => {
    const handleScrollUpdate = (latest) => {
      const frameNum = Math.min(TOTAL_FRAMES, Math.max(1, Math.round(latest)));
      setCurrentFrameDisplay(frameNum);
      requestAnimationFrame(() => renderFrame(frameNum));
    };

    const unsubscribe = frameIndex.on('change', handleScrollUpdate);
    handleScrollUpdate(frameIndex.get());

    const handleResize = () => {
      renderFrame(Math.min(TOTAL_FRAMES, Math.max(1, Math.round(frameIndex.get()))));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [frameIndex, imagesLoaded]);

  const skills = [
    'Python', 'SQL', 'Flask', 'REST APIs', 'Power BI',
    'Pandas', 'NumPy', 'MySQL', 'Scikit-learn', 'Git & GitHub',
    'AWS Fundamentals', 'Generative AI'
  ];

  return (
    <main ref={containerRef} className="relative lg:min-h-screen bg-[#E4E2E3] text-[#161616] pt-2 lg:pt-32 pb-4 lg:pb-16 px-4 md:px-10 flex flex-col items-center justify-start font-jakarta overflow-x-hidden overflow-y-auto">
      {/* Background Perspective Canvas */}
      <InteractiveCanvas />

      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-4">
        {/* Mobile Section Title Header (Mobile Only) */}
        <div className="lg:hidden flex items-center justify-center pt-2 pb-1">
          <span className="bg-[#85D600] text-[#161616] font-black font-oswald text-xs sm:text-sm px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
            ✦ ABOUT ME ✦
          </span>
        </div>

        {/* Unified 12-Column Bento Grid */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Bio Card (Top Left) */}
          <div className="lg:col-span-7 bg-[#161616] text-white p-6 sm:p-8 md:p-10 rounded-[28px] sm:rounded-[32px] border-2 border-[#161616] shadow-xl flex flex-col justify-between relative overflow-hidden min-h-[340px] sm:min-h-[380px] md:min-h-[420px]">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-oswald uppercase tracking-wide text-white leading-tight">
                DATA ENGINEERING &amp; ANALYTICAL SOLUTIONS
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-medium mt-4 sm:mt-6 max-w-xl">
                Hello! I'm Sharukash T, an aspiring Data Engineer and final-year B.E. Computer Science student at NPR College of Engineering and Technology, Tamil Nadu, India. I am passionate about transforming raw information into valuable business insights, building scalable Flask REST APIs, engineering efficient data pipelines, and designing interactive Power BI dashboards.
              </p>
            </div>

            <div className="mt-5 flex justify-end">
              <span className="font-priestacy text-3xl sm:text-4xl text-slate-200 tracking-wide select-none">
                Sharukash T
              </span>
            </div>
          </div>

          {/* Right Column: Full-Height 9:16 Scroll Frame Card (Spans Both Rows!) */}
          <div className="lg:col-span-5 lg:row-span-2 bg-[#FAF7E8] p-5 sm:p-6 md:p-8 rounded-[28px] sm:rounded-[32px] border-2 border-[#161616] shadow-xl relative flex flex-col items-center justify-between overflow-hidden min-h-[450px] sm:min-h-[550px] md:min-h-[640px] lg:min-h-0">
            
            {/* Header Badge & Frame Indicator */}
            <div className="w-full flex justify-between items-center z-20 mb-2 sm:mb-3">
              <span className="bg-[#8B5CF6] text-white font-black font-casko text-[10px] sm:text-[11px] px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                DATA ENGINEER
              </span>
            </div>

            {/* Avatar Canvas Area */}
            <div className="relative z-10 w-full flex-1 min-h-[360px] sm:min-h-[440px] md:min-h-[520px] flex items-center justify-center overflow-hidden pt-2">
              <canvas
                ref={canvasRef}
                className="w-full h-full object-contain filter drop-shadow-[0_0_16px_rgba(255,255,255,1)] drop-shadow-[4px_4px_0px_#161616]"
              />
            </div>
          </div>

          {/* Bottom Row Left Card 1: Conversations with analytical thinking */}
          <div className="lg:col-span-3 md:col-span-6 bg-[#FAF7E8] text-[#161616] p-5 sm:p-6 md:p-8 rounded-[28px] sm:rounded-[32px] border-2 border-[#161616] shadow-lg flex flex-col justify-between min-h-[200px] sm:min-h-[220px]">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif italic text-[#161616] mb-1.5">
                Conversations with analytical thinking.
              </h3>
              <p className="text-xs sm:text-sm text-[#161616]/80 leading-relaxed font-medium">
                Completed 3 professional internships in Data Science &amp; Full Stack Flask Development. Proven track record in data preprocessing, exploratory analysis (EDA), predictive modeling, and database management.
              </p>
            </div>
          </div>

          {/* Bottom Row Left Card 2: Tech Stack & Competencies */}
          <div className="lg:col-span-4 md:col-span-6 bg-[#FAF7E8] text-[#161616] p-5 sm:p-6 md:p-8 rounded-[28px] sm:rounded-[32px] border-2 border-[#161616] shadow-lg flex flex-col justify-between min-h-[200px] sm:min-h-[220px]">
            <div>
              <div className="flex items-center gap-2 text-[#161616] font-clash text-xs sm:text-sm font-black uppercase tracking-wider mb-3">
                <Terminal className="w-4 h-4 text-[#85D600]" />
                <span>Tech Stack &amp; Skills</span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 sm:px-3 py-1 rounded-xl bg-white border border-[#161616]/20 text-[10px] sm:text-[11px] font-bold text-[#161616] shadow-sm hover:border-[#85D600] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <Link
                to="/contact"
                className="flex items-center gap-1.5 text-xs font-black font-clash text-[#85D600] uppercase tracking-wider hover:underline"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
