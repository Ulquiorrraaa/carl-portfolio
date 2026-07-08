import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-28 px-6 md:px-8 bg-void">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-12 md:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white font-display">HISTORY</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>

        <div className="relative pl-8 md:pl-10 border-l border-white/10 space-y-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 md:-left-5 top-2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <FiBriefcase className="text-primary text-lg" />
            </div>
            
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-white/5 hover:reiatsu-glow transition-all">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-500 mb-3">
                <FiCalendar /> FEB 2026 — MAY 2026
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">IT Intern (OJT)</h3>
              <h4 className="text-primary mb-6">Infopiphany IT Solution</h4>
              
              <ul className="space-y-3 text-zinc-400 text-sm md:text-base">
                <li className="flex gap-3"><span className="text-primary mt-1">◉</span>Performed rigorous QA Testing and ensured flawless deployments</li>
                <li className="flex gap-3"><span className="text-primary mt-1">◉</span>Conducted hardware diagnostics and system optimization</li>
                <li className="flex gap-3"><span className="text-primary mt-1">◉</span>Developed Excel automation frameworks for operational efficiency</li>
                <li className="flex gap-3"><span className="text-primary mt-1">◉</span>Assisted in full-stack web application deployment and maintenance</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;