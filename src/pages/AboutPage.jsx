import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, ArrowUpRight, Sparkles } from 'lucide-react';
import InteractiveCanvas from '../components/InteractiveCanvas';

export default function AboutPage() {
  const skills = [
    'Python', 'SQL', 'Flask', 'REST APIs', 'Power BI',
    'Pandas', 'NumPy', 'MySQL', 'Scikit-learn', 'Git & GitHub',
    'AWS Fundamentals', 'Generative AI'
  ];

  return (
    <main className="relative min-h-screen bg-[#E4E2E3] text-[#161616] pt-24 pb-16 px-4 md:px-10 flex flex-col items-center justify-start font-jakarta overflow-x-hidden">
      {/* Background Perspective Canvas */}
      <InteractiveCanvas />

      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-6">
        
        {/* Top Bento Row: 2 Main Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Dark Box */}
          <div className="lg:col-span-7 bg-[#161616] text-white p-8 md:p-10 rounded-[32px] border-2 border-[#161616] shadow-xl flex flex-col justify-between relative overflow-hidden min-h-[420px]">
            <div>
              <h1 className="text-3xl md:text-5xl font-black font-hochland uppercase tracking-wide text-white leading-tight">
                DATA ENGINEERING &amp; ANALYTICAL SOLUTIONS
              </h1>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium mt-6 max-w-xl">
                Hello! I'm Sharukash T, an aspiring Data Engineer and final-year B.E. Computer Science student at NPR College of Engineering and Technology, Tamil Nadu, India. I am passionate about transforming raw information into valuable business insights, building scalable Flask REST APIs, engineering efficient data pipelines, and designing interactive Power BI dashboards.
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <span className="font-caveat text-4xl text-slate-200 tracking-wide select-none">
                Sharukash T
              </span>
            </div>
          </div>

          {/* Right Column: Portrait Sticker Box */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-[32px] border-2 border-[#161616] shadow-xl relative flex flex-col items-center justify-between overflow-hidden min-h-[420px]">
            {/* Top Right Purple Badge */}
            <div className="w-full flex justify-end z-20">
              <span className="bg-[#8B5CF6] text-white font-black font-clash text-[11px] px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                DATA ENGINEER
              </span>
            </div>

            {/* Avatar Cutout with Sticker Border */}
            <div className="relative z-10 mt-4 flex items-end justify-center w-full h-full max-h-[360px]">
              <img
                src="/avatar.png"
                alt="Sharukash T"
                className="max-h-[340px] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,1)] filter drop-shadow-[3px_3px_0px_#161616]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bento Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Connect & Inspire (Lime Green Box) */}
          <div className="md:col-span-4 bg-[#85D600] text-[#161616] p-8 rounded-[32px] border-2 border-[#161616] shadow-lg flex flex-col justify-between min-h-[220px]">
            <div>
              <h2 className="text-3xl md:text-4xl font-black font-hochland uppercase tracking-wide leading-none text-[#161616] mb-4">
                DATA PIPELINES &amp; INSIGHTS.
              </h2>
              <p className="text-xs font-bold font-oswald tracking-widest text-[#161616]/80 uppercase">
                TRANSFORMING RAW DATA TO DECISIONS
              </p>
            </div>
            <div className="flex justify-end pt-4">
              <Sparkles className="w-6 h-6 text-[#161616]/80" />
            </div>
          </div>

          {/* Card 2: Conversations with data thinking (Cream/Light Box) */}
          <div className="md:col-span-4 bg-[#FAF7E8] text-[#161616] p-8 rounded-[32px] border-2 border-[#161616] shadow-lg flex flex-col justify-between min-h-[220px]">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif italic text-[#161616] mb-3">
                Conversations with analytical thinking.
              </h3>
              <p className="text-xs md:text-sm text-[#161616]/80 leading-relaxed font-medium">
                Completed 3 professional internships in Data Science &amp; Full Stack Flask Development. Proven track record in data preprocessing, exploratory analysis (EDA), predictive modeling, and database management.
              </p>
            </div>
          </div>

          {/* Card 3: Tech Stack & Competencies */}
          <div className="md:col-span-4 bg-[#FAF7E8] text-[#161616] p-8 rounded-[32px] border-2 border-[#161616] shadow-lg flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center gap-2 text-[#161616] font-clash text-sm font-black uppercase tracking-wider mb-3">
                <Terminal className="w-4 h-4 text-[#85D600]" />
                <span>Tech Stack &amp; Skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-xl bg-white border border-[#161616]/20 text-[11px] font-bold text-[#161616] shadow-sm hover:border-[#85D600] transition-colors"
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
                <span>GET IN 