import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#161616]/15 bg-[#E4E2E3] py-8 px-4 flex flex-col items-center justify-center text-center space-y-4 select-none z-20 relative font-jakarta">
      {/* Clickable Social Icon Buttons */}
      <div className="flex items-center justify-center gap-3">
        <a
          href="https://share.google/mLA3Vwjr9ZcI7gpyL"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile"
          className="p-3 rounded-full bg-white border border-[#161616]/20 text-[#161616] hover:bg-[#85D600] hover:border-[#161616] active:scale-95 transition-all shadow-md"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/sharukash"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
          className="p-3 rounded-full bg-white border border-[#161616]/20 text-[#161616] hover:bg-[#85D600] hover:border-[#161616] active:scale-95 transition-all shadow-md"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="mailto:sharukasht@gmail.com"
          title="Send Direct Email"
          className="p-3 rounded-full bg-white border border-[#161616]/20 text-[#161616] hover:bg-[#85D600] hover:border-[#161616] active:scale-95 transition-all shadow-md"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>

      {/* Brand & Copyright Info */}
      <div className="space-y-1">
        <p className="font-clash font-black text-xs text-[#161616] uppercase tracking-wider">
          Sharukash T ✦ Data Engineer &amp; Analyst
        </p>
        <p className="font-mono text-[10px] text-[#161616]/60 tracking-wider">
          © 2026 SHARUKASH T. ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
