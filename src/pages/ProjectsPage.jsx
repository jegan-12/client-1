import React, { useRef } from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import InteractiveCanvas from '../components/InteractiveCanvas';
import DraggableStickers from '../components/DraggableStickers';

export default function ProjectsPage() {
  const projectsRef = useRef(null);

  const projects = [
    { id: '01', title: 'Tow-Way Connect', desc: 'Real-time multi-peer communication app built with WebRTC & Socket.io.', url: 'https://tow-way-connect.vercel.app/', gradient: 'from-[#85D600] to-emerald-500' },
    { id: '02', title: 'Raspberry Pi Controller', desc: 'Embedded hardware monitor and sensor dashboard.', url: 'https://respberrypi.netlify.app/', gradient: 'from-lime-600 to-green-600' },
    { id: '03', title: 'Nexus Studio', desc: 'Creative agency portfolio with smooth WebGL displacement effects.', url: 'https://nexusstudioo.netlify.app/', gradient: 'from-emerald-600 to-[#85D600]' },
    { id: '04', title: 'Middle Bridge Solution', desc: 'Enterprise SaaS platform dashboard for analytics & reporting.', url: 'https://middlebridgesolution.vercel.app/', gradient: 'from-[#85D600] to-lime-500' },
    { id: '05', title: 'Halva E-Commerce', desc: 'Headless storefront with ultra-fast static rendering & stripe checkout.', url: 'https://soft-halva-29b0d0.netlify.app/', gradient: 'from-green-500 to-lime-600' },
    { id: '06', title: 'Online Life Store', desc: 'Modern digital goods marketplace with real-time cart state.', url: 'https://online-life-ecommerce.vercel.app/', gradient: 'from-lime-500 to-emerald-500' },
    { id: '07', title: 'Golden Caramel', desc: 'Luxury culinary brand identity & interactive order experience.', url: 'https://golden-caramel-c8126d.netlify.app/', gradient: 'from-emerald-500 to-[#85D600]' },
    { id: '08', title: 'Flower Are My Friend', desc: 'Botanical showcase & plant care guide with canvas particle effects.', url: 'https://floweraremyfriend.netlify.app/', gradient: 'from-[#85D600] to-green-600' },
    { id: '09', title: 'Robotek ERP System', desc: 'Industrial inventory & robot fleet management software.', url: 'https://robotek-erp.netlify.app/', gradient: 'from-lime-600 to-[#85D600]' },
    { id: '10', title: 'Eternal Way (IO)', desc: 'Immersive story-driven 3D web experience built with Spline & Three.js.', url: 'https://eternalway.netlify.app/', gradient: 'from-[#85D600] to-emerald-600' },
  ];

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-[#E4E2E3] text-[#161616] pt-14 pb-20 px-4 md:px-10 flex flex-col items-center justify-start font-jakarta overflow-x-hidden">
      {/* Background Perspective Canvas */}
      <InteractiveCanvas />

      {/* Giant Top Background Animated Marquee Header */}
      <div className="w-full overflow-hidden pointer-events-none select-none py-6 md:py-10 z-0">
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-priestacy text-[5vw] md:text-[6vw] leading-normal text-[#161616] tracking-normal opacity-90 pr-12">
            Projects ✦ Selected Work ✦ Projects ✦ Selected Work ✦&nbsp;
          </span>
          <span className="font-priestacy text-[5vw] md:text-[6vw] leading-normal text-[#161616] tracking-normal opacity-90 pr-12">
            Projects ✦ Selected Work ✦ Projects ✦ Selected Work ✦&nbsp;
          </span>
        </div>
      </div>

      {/* Selected Projects Showcase */}
      <div ref={projectsRef} className="relative z-10 w-full max-w-6xl mx-auto space-y-8 mt-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-5xl font-black font-bricolage uppercase tracking-tight text-[#161616]">
            SELECTED <span className="text-[#85D600]">WORK</span>
          </h2>
          <p className="max-w-md mx-auto text-[#161616]/75 text-xs font-medium">
            Handcrafted web applications and high-performance production builds.
          </p>
        </div>

        {/* 10 Card Grid with Popcorn themed borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FAF7E8] backdrop-blur-md rounded-3xl overflow-hidden border border-[#161616] hover:border-[#85D600] transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Mesh Gradient Header */}
              <div className={`relative h-44 w-full bg-gradient-to-tr ${project.gradient} p-6 flex flex-col justify-between overflow-hidden border-b border-[#161616]`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-3xl font-black font-clash text-[#161616] drop-shadow-sm">
                    {project.id}
                  </span>
                  <div className="p-2.5 rounded-full bg-black/20 backdrop-blur-md text-white group-hover:scale-110 transition-transform border border-white/30">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
                <div className="relative z-10 flex items-center gap-2 text-[#161616]/90 text-xs font-mono font-bold">
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>Deployment Link</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-clash text-[#161616] group-hover:text-[#85D600] transition-colors mb-2 uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#161616]/80 leading-relaxed font-medium">
                    {project.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#161616]/15 flex items-center justify-between text-xs text-[#85D600] font-black font-clash tracking-wider">
                  <span>VIEW LIVE DEMO</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
