import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import StaggeredMenu from './ui/StaggeredMenu';

export default function GlassNavbar() {
  const location = useLocation();

  const desktopNavItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const mobileMenuItems = [
    {
      label: 'Home',
      ariaLabel: 'Go to home section',
      link: '#home',
      onClick: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      label: 'About',
      ariaLabel: 'Go to about section',
      link: '#about',
      onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      label: 'Projects',
      ariaLabel: 'Go to projects section',
      link: '#projects',
      onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      label: 'Contact',
      ariaLabel: 'Go to contact section',
      link: '#contact',
      onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  ];

  const mobileSocialItems = [
    { label: 'GitHub', link: 'https://share.google/mLA3Vwjr9ZcI7gpyL' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/sharukash' },
    { label: 'Email', link: 'mailto:sharukasht@gmail.com' },
    { label: 'Resume PDF ↗', link: '/sharukash_resume.pdf', highlight: true }
  ];

  return (
    <>
      {/* SVG Distortion Filter for Glassmorphism */}
      <svg style={{ display: 'none' }}>
        <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.001 0.005" numOctaves="1" seed="17" result="turbulence" />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="0.5" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lightingColor="white" result="specLight">
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
          <feDisplacementMap in="SourceGraphic" in2="softMap" scale="200" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* DESKTOP VIEW ONLY: Floating Glass Navbar */}
      <div className="hidden lg:block fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
        <div 
          className="relative flex font-semibold overflow-hidden text-[#161616] rounded-full p-1.5 transition-all duration-500 hover:p-2 border border-white/60 shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          style={{ transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 2.2)' }}
        >
          {/* Glass background layers */}
          <div 
            className="absolute inset-0 z-0 overflow-hidden rounded-full"
            style={{ backdropFilter: 'blur(10px)', filter: 'url(#glass-distortion)', isolation: 'isolate' }}
          />
          <div className="absolute inset-0 z-10 rounded-full bg-white/45" />
          <div className="absolute inset-0 z-20 rounded-full shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.7),inset_-1px_-1px_1px_1px_rgba(0,0,0,0.1)]" />

          {/* Nav items */}
          <div className="relative z-30 flex items-center gap-2 rounded-full p-1">
            {desktopNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-2 rounded-full transition-all duration-500 hover:scale-105 active:scale-95 group ${
                    isActive
                      ? 'bg-[#85D600] text-[#161616] shadow-[0_4px_12px_rgba(133,214,0,0.4)] font-bold'
                      : 'bg-white/20 text-[#161616]/80 hover:bg-[#85D600] hover:text-[#161616]'
                  }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 2.2)' }}
                >
                  <Icon className={`w-4 h-4 shrink-0 transition-transform duration-300 group-hover:rotate-12 ${isActive ? 'text-[#161616]' : 'text-[#85D600]'}`} />
                  <span className="ml-2 text-xs md:text-sm font-medium tracking-wide whitespace-nowrap">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* MOBILE VIEW ONLY: StaggeredMenu from React Bits (Scrolls with page, transparent 3-line icon) */}
      <div className="lg:hidden absolute top-0 left-0 w-full z-50 pointer-events-none">
        <StaggeredMenu
          position="right"
          items={mobileMenuItems}
          socialItems={mobileSocialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#609805ff"
          openMenuButtonColor="#FAF7E8"
          changeMenuColorOnOpen={true}
          colors={['#85D600', '#161616']}
          accentColor="#85D600"
          isFixed={false}
        />
      </div>
    </>
  );
}
