import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Mail } from 'lucide-react';

export default function GlassNavbar() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Contact', path: '/contact', icon: Mail },
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
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lightingColor="white" result="specLight">
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
          <feDisplacementMap in="SourceGraphic" in2="softMap" scale="200" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Floating Header */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
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
          <div className="relative z-30 flex items-center gap-1 sm:gap-2 rounded-full p-1">
            {navItems.map((item) => {
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
                  <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-12 ${isActive ? 'text-[#161616]' : 'text-[#85D600]'}`} />
                  <span className="ml-2 text-xs md:text-sm font-medium tracking-wide">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
