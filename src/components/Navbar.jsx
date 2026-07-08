import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', to: 'home' },
    { name: 'ABOUT', to: 'about' },
    { name: 'SKILLS', to: 'skills' },
    { name: 'EXP', to: 'experience' },
    { name: 'PROJECTS', to: 'projects' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-void/90 backdrop-blur-md border-b border-white/10 py-3 md:py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2.5"
        >
          <div className="w-5 h-5 rounded-full border-2 border-primary/70 flex items-center justify-center">
            <span className="text-[8px] font-bold text-primary">04</span>
          </div>
          <div className="text-xl font-black tracking-[-0.05em] text-white">
            CARL<span className="text-primary">DAVE</span>
          </div>
        </motion.div>

        <div className="hidden md:flex gap-6 text-sm tracking-widest font-medium">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.to} 
              smooth={true} 
              duration={800} 
              spy={true} 
              activeClass="text-primary reiatsu-glow" 
              className="text-zinc-400 hover:text-white transition-all duration-300 relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all"></span>
            </Link>
          ))}
        </div>

        <div 
          className="md:hidden text-2xl text-zinc-300 cursor-pointer hover:text-primary transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu - Hollow Style */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-card/95 border-b border-white/10 py-5 flex flex-col items-center gap-5 text-base shadow-xl"
        >
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.to} 
              smooth={true} 
              duration={600} 
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;