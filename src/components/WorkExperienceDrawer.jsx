import React from 'react';
import { X, Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WorkExperienceDrawer({ isOpen, onClose }) {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Vulture Management Wings Pvt. Ltd.',
      period: 'Jun 2026 - Jul 2026',
      description: 'Developed full-stack web backend services using Flask, designed RESTful APIs, connected SQL databases, and implemented core CRUD functionalities.',
      highlights: [
        'Built scalable RESTful APIs and backend modules with Flask & MySQL',
        'Implemented database schemas, queries, and CRUD operations',
        'Collaborated on team codebases using Git & GitHub best practices'
      ]
    },
    {
      role: 'Data Science Intern',
      company: 'Ekhai Private Limited',
      period: 'Aug 2025 - Sep 2025',
      description: 'Focused on business data analytics, interactive Power BI dashboard engineering, and Flask backend application development.',
      highlights: [
        'Designed interactive dashboards in Power BI for executive reporting',
        'Engineered Flask microservices connected to SQL databases',
        'Analyzed business datasets to extract key operational insights'
      ]
    },
    {
      role: 'Data Science Intern',
      company: 'OneYes InfoTech Solutions',
      period: 'Jun 2025 - Jul 2025',
      description: 'Worked on real-world datasets, performed data cleaning, SQL analysis, exploratory data analysis (EDA), and machine learning pipelines.',
      highlights: [
        'Cleaned and preprocessed structured datasets using Pandas & NumPy',
        'Wrote complex SQL queries to filter and extract database records',
        'Developed baseline ML models with Scikit-learn in Jupyter Notebook'
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Light Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-md z-[100]"
          />

          {/* Sliding Panel - White / Warm Light Pop-Art Theme */}
          <motion.div
            initial={{ translateX: '100%' }}
            animate={{ translateX: '0%' }}
            exit={{ translateX: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:max-w-md md:max-w-lg bg-[#FAF7E8] text-[#161616] p-4 sm:p-6 md:p-8 z-[101] overflow-y-auto shadow-2xl flex flex-col justify-between border-l border-[#161616]"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#161616]/15 pb-4 sm:pb-5 mb-6 sm:mb-8">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-[#85D600]/15 text-[#161616] border border-[#85D600]/40 shrink-0">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#85D600]" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black font-clash text-[#161616] uppercase tracking-wider">Work Experience</h2>
                    <p className="text-[11px] sm:text-xs text-[#161616]/70 font-medium">Career journey & track record</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-slate-100 text-[#161616] transition-colors border border-[#161616]/20 shadow-sm shrink-0"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Timeline List */}
              <div className="space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-[#85D600] before:via-[#85D600]/40 before:to-transparent">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 sm:pl-9 group">
                    {/* Node */}
                    <div className="absolute left-1.5 top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#FAF7E8] border-2 border-[#85D600] group-hover:scale-125 group-hover:bg-[#85D600] transition-all duration-300 shadow-sm" />
                    
                    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#161616]/15 hover:border-[#85D600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-sm sm:text-base font-bold text-[#161616] font-jakarta">{exp.role}</h3>
                        <span className="flex items-center gap-1 text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#85D600]/20 text-[#161616] font-bold font-mono border border-[#85D600]/40">
                          <Calendar className="w-3 h-3 text-[#85D600]" />
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#85D600] font-black uppercase font-clash tracking-wider mb-2.5">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                      </div>

                      <p className="text-xs text-[#161616]/80 leading-relaxed font-medium mb-3 sm:mb-4">{exp.description}</p>

                      <ul className="space-y-1.5 sm:space-y-2">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-[11px] text-[#161616]/75 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#85D600] flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 sm:pt-6 border-t border-[#161616]/15 mt-6 sm:mt-8">
              <button
                onClick={onClose}
                className="w-full py-3 sm:py-3.5 bg-[#85D600] border border-[#161616] text-[#161616] rounded-xl text-xs font-black font-clash tracking-widest uppercase hover:bg-[#78C800] transition-colors active:scale-[0.99] shadow-md flex items-center justify-center gap-2"
              >
                Close Timeline
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
