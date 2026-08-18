import React, { useState, useRef } from 'react';
import { 
  ExternalLink, 
  Database, 
  BarChart3, 
  Activity, 
  Layers, 
  CheckCircle2, 
  X, 
  Sparkles 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveCanvas from '../components/InteractiveCanvas';
import CircularGallery from '../components/ui/CircularGallery';

export default function ProjectsPage() {
  const projectsRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: '01',
      title: 'Smart Hospital Waste Management System',
      category: 'DATA & FLASK',
      type: 'Data Engineering & Backend System',
      desc: 'An automated tracking system to monitor, categorize, and streamline hospital waste collection and disposal with Flask REST API endpoints & SQL storage.',
      bullets: [
        'Built a system to track and manage hospital waste collection and disposal efficiently.',
        'Used Flask & SQL to record waste data, expose REST-style endpoints, and generate status reports.',
        'Engineered relational database schema for real-time disposal status updates.'
      ],
      tags: ['Python', 'Flask', 'SQL', 'REST API', 'Data Pipeline'],
      gradient: 'from-[#85D600] to-emerald-600',
      icon: Database,
      isLive: false,
      url: null,
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=80',
      architecture: [
        'Flask REST Backend Service for endpoint management',
        'Relational SQL Database for structured waste logging',
        'Status Reporting Module for automated disposal reports'
      ]
    },
    {
      id: '02',
      title: 'Dynamic Pricing Dashboard',
      category: 'POWER BI & ANALYTICS',
      type: 'Interactive Business Analytics',
      desc: 'A data analysis dashboard analyzing market pricing trends and visualizing dynamic price fluctuations based on consumer demand metrics.',
      bullets: [
        'Created an interactive dashboard to analyze pricing trends and visualize demand-driven price changes.',
        'Leveraged Python & Pandas for automated data cleaning, aggregation, and preprocessing.',
        'Designed interactive Power BI visualizations to communicate actionable insights to stakeholders.'
      ],
      tags: ['Python', 'Pandas', 'Power BI', 'EDA', 'Demand Analysis'],
      gradient: 'from-emerald-600 to-lime-500',
      icon: BarChart3,
      isLive: false,
      url: null,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      architecture: [
        'Pandas Data Cleaning & Feature Aggregation pipeline',
        'Demand Sensitivity & Dynamic Price Index Modeling',
        'Interactive Power BI KPI Dashboard with Slicers'
      ]
    },
    {
      id: '03',
      title: 'Medicine Prediction Dashboard',
      category: 'POWER BI & ANALYTICS',
      type: 'Predictive Modeling & Demand Forecasting',
      desc: 'Healthcare analytics dashboard analyzing historical medicine usage patterns to support accurate inventory demand forecasting.',
      bullets: [
        'Developed a dashboard analyzing medicine usage data to support predictive inventory demand.',
        'Applied data analysis techniques in Python & Pandas to uncover usage trends and supply bottlenecks.',
        'Rendered interactive Power BI dashboards highlighting critical inventory insights.'
      ],
      tags: ['Python', 'Pandas', 'Power BI', 'Predictive Modeling', 'Healthcare'],
      gradient: 'from-lime-500 to-[#85D600]',
      icon: Activity,
      isLive: false,
      url: null,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      architecture: [
        'Historical Medicine Usage Time-Series Preprocessing',
        'Pandas Trend & Seasonal Demand Analysis',
        'Power BI Forecasting Dashboard for Inventory Management'
      ]
    }
  ];

  const galleryItems = [
    { image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&auto=format&fit=crop&q=80', text: 'Hospital Waste System' },
    { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80', text: 'Dynamic Pricing Dashboard' },
    { image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80', text: 'Medicine Prediction BI' }
  ];

  const filterCategories = [
    { label: 'ALL PROJECTS', value: 'ALL' },
    { label: 'DATA & FLASK', value: 'DATA & FLASK' },
    { label: 'POWER BI & ANALYTICS', value: 'POWER BI & ANALYTICS' }
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="relative lg:min-h-screen bg-[#E4E2E3] text-[#161616] pt-2 lg:pt-24 pb-4 lg:pb-16 px-4 md:px-10 flex flex-col items-center justify-start font-jakarta overflow-x-hidden overflow-y-auto">
      {/* Background Perspective Canvas */}
      <InteractiveCanvas />

      {/* Giant Top Background Animated Marquee Header */}
      <div className="w-full overflow-hidden pointer-events-none select-none py-4 sm:py-6 md:py-10 z-0">
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-priestacy text-[7vw] sm:text-[5vw] md:text-[6vw] leading-normal text-[#161616] tracking-normal opacity-90 pr-8 sm:pr-12">
            Projects ✦ Data Engineering ✦ Analytics ✦ Selected Work ✦&nbsp;
          </span>
          <span className="font-priestacy text-[7vw] sm:text-[5vw] md:text-[6vw] leading-normal text-[#161616] tracking-normal opacity-90 pr-8 sm:pr-12">
            Projects ✦ Data Engineering ✦ Analytics ✦ Selected Work ✦&nbsp;
          </span>
        </div>
      </div>

      {/* Hero Header Section */}
      <div ref={projectsRef} className="relative z-10 w-full max-w-6xl mx-auto space-y-6 sm:space-y-8 mt-1 sm:mt-2">
        <div className="text-center space-y-2.5 sm:space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#85D600] border border-[#161616] text-[#161616] px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full font-clash font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DATA ENGINEER PORTFOLIO</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black font-bricolage uppercase tracking-tight text-[#161616]">
            PROJECTS &amp; <span className="text-[#85D600]">SOLUTIONS</span>
          </h1>
          <p className="text-xs md:text-sm text-[#161616]/80 font-medium leading-relaxed max-w-xl mx-auto">
            Data engineering pipelines, Flask REST APIs, predictive analytics, and interactive Power BI dashboards handcrafted for real-world impact.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1 sm:pt-2">
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border text-[10px] sm:text-xs font-black font-clash uppercase tracking-wider transition-all duration-300 shadow-sm ${
                activeFilter === cat.value
                  ? 'bg-[#161616] text-[#85D600] border-[#161616] scale-105'
                  : 'bg-[#FAF7E8] text-[#161616] border-[#161616]/30 hover:border-[#161616] hover:bg-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Compact 3-Column Bento Cards Grid */}
        <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const IconComp = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-[#FAF7E8] backdrop-blur-md rounded-2xl overflow-hidden border-2 border-[#161616] hover:border-[#85D600] transition-all duration-500 hover:-translate-y-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-xl flex flex-col justify-between"
                >
                  {/* Header Image & Gradient */}
                  <div className={`relative h-40 sm:h-44 w-full bg-[#161616] p-4 md:p-5 flex flex-col justify-between overflow-hidden border-b-2 border-[#161616]`}>
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient}`} />
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-0" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-2xl font-black font-clash text-white drop-shadow-md">
                        {project.id}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="bg-[#161616] text-white text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-white/20">
                          {project.category}
                        </span>
                        {project.isLive && (
                          <div className="p-1.5 rounded-full bg-black/20 backdrop-blur-md text-white group-hover:scale-110 transition-transform border border-white/30">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="relative z-10 flex items-center gap-1.5 text-[#161616] text-[11px] font-mono font-bold uppercase tracking-wider bg-white/50 backdrop-blur-md px-2.5 py-1 rounded-lg border border-black/10 w-fit">
                      <IconComp className="w-3.5 h-3.5 text-[#161616]" />
                      <span className="truncate max-w-[200px]">{project.type}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold font-clash text-[#161616] group-hover:text-[#85D600] transition-colors uppercase tracking-wide leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-xs text-[#161616]/80 leading-relaxed font-medium line-clamp-2">
                        {project.desc}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="space-y-1.5 pt-0.5">
                        {project.bullets.slice(0, 2).map((b, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[11px] text-[#161616]/90 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#85D600] shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.slice(0, 4).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-lg bg-white border border-[#161616]/20 text-[10px] font-bold text-[#161616] shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions Footer */}
                    <div className="pt-3 border-t border-[#161616]/15 flex items-center justify-between">
                      {project.isLive ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-black font-clash text-[#85D600] uppercase tracking-wider hover:underline"
                        >
                        </a>
                      ) : (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex items-center gap-1.5 text-xs font-black font-clash text-[#161616] uppercase tracking-wider hover:text-[#85D600] transition-colors"
                        >
                          <span>VIEW DETAILS</span>
                          <span className="text-base leading-none">→</span>
                        </button>
                      )}

                      {!project.isLive && (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-3 py-1.5 rounded-lg bg-[#161616] text-[#FAF7E8] text-[10px] font-black font-clash uppercase tracking-wider hover:bg-[#85D600] hover:text-[#161616] transition-colors"
                        >
                          DETAILS
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* 3D WebGL Circular Gallery Component (Desktop View Only) */}
        <div className="relative z-20 w-full my-6 sm:my-10 hidden md:block">
          <div className="h-[380px] md:h-[450px] relative w-full overflow-hidden rounded-2xl">
            <CircularGallery
              bend={3}
              textColor="#161616"
              borderRadius={0.08}
              scrollEase={0.04}
              scrollSpeed={2}
              items={galleryItems}
            />
          </div>
        </div>

        {/* Flat 2D Image Showcase Gallery (Phone View Only - No 3D) */}
        <div className="relative z-20 w-full my-4 md:hidden">
          <div className="text-center mb-3">
            <span className="text-[10px] font-black font-clash text-[#161616]/70 uppercase tracking-widest bg-white/60 px-3 py-1 rounded-full border border-[#161616]/10">
              ✦ FEATURED SHOWCASE ✦
            </span>
          </div>
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-none px-1">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx}
                className="snap-center shrink-0 w-[240px] bg-[#FAF7E8] border-2 border-[#161616] rounded-2xl overflow-hidden shadow-md flex flex-col justify-between"
              >
                <div className="h-32 w-full overflow-hidden relative bg-[#161616]">
                  <img 
                    src={item.image} 
                    alt={item.text} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-[#161616] text-[#85D600] text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border border-[#85D600]/40">
                    0{idx + 1}
                  </div>
                </div>
                <div className="p-3 bg-[#FAF7E8]">
                  <h4 className="text-xs font-black font-clash text-[#161616] uppercase tracking-wide truncate">
                    {item.text}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competencies Summary Ribbon */}
        <div className="mt-6 sm:mt-8 bg-[#161616] text-white p-6 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] border-2 border-[#161616] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center sm:text-left z-10">
            <span className="text-[#85D600] font-clash text-[10px] sm:text-xs font-black uppercase tracking-widest block">
              ✦ CORE COMPETENCIES
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide">
              NEED CUSTOM DATA PIPELINES OR POWER BI DASHBOARDS?
            </h3>
            <p className="text-xs md:text-sm text-slate-300 font-medium max-w-xl">
              Experienced in Python ETL, Flask REST API development, SQL data processing, and stakeholder analytics visualization.
            </p>
          </div>
          <a
            href="/contact"
            className="z-10 px-6 sm:px-8 py-3 sm:py-4 bg-[#85D600] border border-[#161616] text-[#161616] rounded-2xl font-clash font-black text-xs uppercase tracking-widest hover:bg-white transition-colors shadow-lg shrink-0 text-center w-full sm:w-auto"
          >
            LET'S DISCUSS A PROJECT →
          </a>
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#FAF7E8] border-2 border-[#161616] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl space-y-5 sm:space-y-6 max-h-[85vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-[#161616]/20 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black font-clash text-[#85D600]">
                    {selectedProject.id}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#161616]/60 uppercase tracking-widest block">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black font-clash text-[#161616] uppercase">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white border border-[#161616]/20 hover:bg-[#161616] hover:text-white transition-colors shrink-0"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-4 text-xs md:text-sm text-[#161616]/90 font-medium">
                <div>
                  <h4 className="font-clash font-black uppercase text-[#161616] tracking-wider mb-2">
                    PROJECT OVERVIEW
                  </h4>
                  <p className="leading-relaxed text-[#161616]/80">
                    {selectedProject.desc}
                  </p>
                </div>

                <div>
                  <h4 className="font-clash font-black uppercase text-[#161616] tracking-wider mb-2">
                    SYSTEM ARCHITECTURE &amp; HIGHLIGHTS
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.architecture.map((arch, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#85D600] shrink-0 mt-0.5" />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-clash font-black uppercase text-[#161616] tracking-wider mb-2">
                    TECHNOLOGY STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white border border-[#161616]/20 rounded-xl text-xs font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-[#161616]/20 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#161616] text-[#FAF7E8] rounded-xl text-xs font-black font-clash uppercase tracking-wider hover:bg-[#85D600] hover:text-[#161616] transition-colors"
                >
                  CLOSE DETAILS
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
