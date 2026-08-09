import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function CurtainTransition({ children }) {
  const location = useLocation();
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 900);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const columns = [0, 1, 2, 3, 4, 5];

  return (
    <div className="relative min-h-screen">
      {/* Curtain Layer */}
      <AnimatePresence mode="wait">
        {animating && (
          <div className="fixed inset-0 z-[9999] pointer-events-none flex">
            {columns.map((col) => (
              <motion.div
                key={col}
                className="w-[16.667%] h-[100vh] relative flex-shrink-0"
                initial={{ translateY: '-100%' }}
                animate={{ translateY: ['-100%', '0%', '100%'] }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: col * 0.06,
                }}
              >
                <div className="absolute inset-0 w-full h-full bg-[#0F172A] border-r border-[#8B5CF6]/10 shadow-2xl">
                  {/* Top SVG Curve */}
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute bottom-full left-0 w-full h-[15vh] fill-[#0F172A] pointer-events-none">
                    <path d="M 0 100 C 30 0, 70 0, 100 100 Z" />
                  </svg>
                  {/* Bottom SVG Curve */}
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-full left-0 w-full h-[15vh] fill-[#0F172A] pointer-events-none">
                    <path d="M 0 0 C 30 100, 70 100, 100 0 Z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
