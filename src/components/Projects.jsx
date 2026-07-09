import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import tmuImg from '../assets/Screenshot_7-7-2026_232623_tmu.onrender.com.jpeg';

const projects = [
  {
    title: "Guagua Ticket Trends",
    description: "A comprehensive Violation Data Analysis System. Features include secure user authentication, an analytics dashboard with dynamic Chart.js reporting, and heatmap visualization using Leaflet for robust ticket management.",
    tech: ["Laravel","Blade Template","Tailwind CSS", "MySQL", "Chart.js", "Leaflet"],
    image: tmuImg,
    github: "https://github.com/Ulquiorrraaa/TMU",
    live: "https://tmu.onrender.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-8 bg-void border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs font-mono tracking-[0.3em] mb-16 text-zinc-400 uppercase flex items-center gap-6">
          <span className="w-16 h-[1px] bg-primary opacity-70"></span> Classified Archives
        </h2>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 overflow-hidden border border-zinc-700 relative group cursor-pointer shadow-2xl shadow-black/40 rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-8">
                <h3 className="text-3xl font-black text-white font-display uppercase tracking-tighter">{project.title}</h3>
                
                <div className="bg-card p-8 border border-zinc-700 text-sm text-zinc-300 leading-loose tracking-wide shadow-lg">
                  {project.description}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-4 py-2 text-[10px] tracking-widest font-bold bg-background text-primary border border-primary/30 uppercase shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-8 pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-xs tracking-widest uppercase font-bold text-zinc-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    <FiGithub size={18} /> Source
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-xs tracking-widest uppercase font-bold text-zinc-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    <FiExternalLink size={18} /> Execute
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;