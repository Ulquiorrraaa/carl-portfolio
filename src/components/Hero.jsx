import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import profilePic from '../assets/g.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-8 relative overflow-hidden bg-void">
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#22ffaa08_0%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.1 }}
          className="space-y-8 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-3 border border-primary/30 px-5 py-2 rounded-full mx-auto md:mx-0">
            <span className="text-xs tracking-[4px] font-mono text-primary">ESPADA No. 04</span>
            <div className="w-px h-3 bg-primary/50"></div>
            <span className="text-xs uppercase tracking-widest text-zinc-500">Junior Web Developer</span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-black tracking-[-0.06em] leading-none text-white">
            CARL DAVE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white">PALMA</span>
          </h1>

          <div className="max-w-md mx-auto md:mx-0">
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
              I am the one who walks the boundary between creation and nothingness. 
              Crafting digital realms with cold precision and relentless elegance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <motion.a 
              href="/CDP-NE.pdf" 
              target="_blank"
              download="Carl-Dave-Palma-Resume.pdf"
              whileHover={{ scale: 1.03 }}
              className="group flex items-center justify-center gap-4 bg-transparent border border-primary hover:bg-primary/10 text-white px-8 py-5 rounded-xl transition-all duration-500 reiatsu-glow"
            >
              <FiDownload className="group-hover:rotate-12 transition" />
              <span className="uppercase tracking-widest text-sm font-semibold">Download Resume</span>
            </motion.a>
            
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.03 }}
              className="group flex items-center justify-center gap-3 border border-white/20 hover:border-white/40 px-8 py-5 rounded-xl text-zinc-400 hover:text-white transition-all"
            >
              View Creations <FiArrowRight className="group-hover:translate-x-1 transition" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
            <div className="absolute inset-0 rounded-full border border-white/10"></div>
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-card to-void"></div>
            
            <img 
              src={profilePic} 
              alt="Carl Dave Palma" 
              className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] object-cover rounded-full shadow-2xl border border-white/10" 
            />
            
            <div className="absolute -top-6 -right-6 text-[10px] tracking-widest text-primary/60 border border-primary/30 px-4 py-1 rounded-full">
              ESPADA 04
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;