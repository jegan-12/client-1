import React, { useState, useRef } from 'react';
import { Send, Mail, MapPin, Clock } from 'lucide-react';
import InteractiveCanvas from '../components/InteractiveCanvas';
import DraggableStickers from '../components/DraggableStickers';

export default function ContactPage() {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name:'', email:'', message:'' });
      setSubmitted(false);
    }, 3000);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-[#E4E2E3] text-[#161616] pt-14 pb-10 px-4 md:px-15 flex flex-col items-center justify-start font-jakarta overflow-x-hidden">
      {/* Background Perspective Canvas */}
      <InteractiveCanvas />

      {/* Giant Top Background Animated Marquee Header */}
      <div className="w-full overflow-hidden pointer-events-none select-none pt-8 md:pt-14 pb-4 md:pb-6 z-10">
        <div className="animate-marquee whitespace-nowrap">
          <span className="font- text-[7vw] md:text-[8vw] leading-none text-[#161616] tracking-tight uppercase opacity-95 pr-12">
            Contact ✦ Connect ✦ Contact ✦ Connect ✦ Contact ✦ Connect ✦&nbsp;
          </span>
          <span className="font- text-[7vw] md:text-[8vw] leading-none text-[#161616] tracking-tight uppercase opacity-95 pr-12">
            Contact ✦ Connect ✦ Contact ✦ Connect ✦ Contact ✦ Connect ✦&nbsp;
          </span>
        </div>
      </div>

      {/* Subtitle Banner Line matching screenshot */}
      <div className="relative z-10 w-full max-w-6xl mx-auto border-t border-b border-[#161616]/30 py-4 my-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
        <div className="font-oswald font-bold text-[11px] md:text-xs tracking-wider uppercase text-[#161616]/80">
          I'M HERE TO HELP YOU TURN YOUR BRIEF INTO SOMETHING BRILLIANT.
        </div>
        <div className="font-oswald font-bold text-[11px] md:text-xs tracking-wider uppercase text-[#161616]/80">
          JUST DROP ME A LINE OR INTERACT WITH THE STICKERS.
        </div>
        <div className="font-oswald font-bold text-[11px] md:text-xs tracking-wider uppercase text-[#161616]/80">
          © 2026 NAND KISHORE SONI. ALL RIGHTS RESERVED
        </div>
      </div>

      {/* Interactive Popcorn Draggable Stickers Section */}
      <div className="relative z-30 w-full max-w-6xl mt-0 mb-5">
        <DraggableStickers actionButtonText="SEND MESSAGE ✦" onActionClick={scrollToForm} />
      </div>

      {/* Contact Form & Info Grid */}
      <div ref={formRef} className="relative z-10 w-full max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FAF7E8] backdrop-blur-md p-8 md:p-10 rounded-3xl border border-[#161616] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        {/* Left Column */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-black font-clash text-[#161616] uppercase tracking-wider">Contact Information</h3>
          <p className="text-xs text-[#161616]/80 leading-relaxed font-medium">
            Whether you need a fullstack web application, custom UI design system, or performance optimization, feel free to reach out.
          </p>

          <div className="space-y-5 pt-2">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-[#85D600]/20 border border-[#85D600]/40 text-[#85D600]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#161616]/60 uppercase font-black tracking-wider block font-clash">Direct Email</span>
                <span className="text-sm font-bold text-[#161616]">nandkishorsoni098765@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-[#85D600]/20 border border-[#85D600]/40 text-[#85D600]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#161616]/60 uppercase font-black tracking-wider block font-clash">Location</span>
                <span className="text-sm font-bold text-[#161616]">India (Available Worldwide Remote)</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-[#85D600]/20 border border-[#85D600]/40 text-[#85D600]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#161616]/60 uppercase font-black tracking-wider block font-clash">Response Time</span>
                <span className="text-sm font-bold text-[#161616]">Within 24 Hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Message Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-2xl font-black font-clash text-[#161616] uppercase tracking-wider">Send a Message</h3>
          
          <div>
            <label className="text-[11px] font-black font-clash text-[#161616]/80 uppercase tracking-wider mb-1 block">Your Name</label>
            <input
              type="text"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#161616]/20 text-[#161616] text-xs placeholder-slate-400 focus:outline-none focus:border-[#85D600] transition-colors shadow-sm"
            />
          </div>

          <div>
            <label className="text-[11px] font-black font-clash text-[#161616]/80 uppercase tracking-wider mb-1 block">Your Email</label>
            <input
              type="email"
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#161616]/20 text-[#161616] text-xs placeholder-slate-400 focus:outline-none focus:border-[#85D600] transition-colors shadow-sm"
            />
          </div>

          <div>
            <label className="text-[11px] font-black font-clash text-[#161616]/80 uppercase tracking-wider mb-1 block">Message</label>
            <textarea
              rows={4}
              required
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#161616]/20 text-[#161616] text-xs placeholder-slate-400 focus:outline-none focus:border-[#85D600] transition-colors resize-none shadow-sm"
            />
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full py-3.5 bg-[#85D600] border border-[#161616] text-[#161616] rounded-xl text-xs font-black font-clash tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#78C800] transition-colors active:scale-[0.99] shadow-md"
          >
            {submitted ? (
              <span>Message Sent Successfully! ✓</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
