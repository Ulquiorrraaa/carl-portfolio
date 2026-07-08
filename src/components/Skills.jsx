import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaPhp, FaGithub, FaDesktop,
  FaFileExcel, FaFileWord, FaFilePowerpoint, FaPalette,
  FaNodeJs, FaVuejs 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTailwindcss, SiMysql, SiFigma, 
  SiMongodb, SiExpress 
} from 'react-icons/si';

const skillCategories = [
  {
    title: "WEB DEVELOPMENT",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Responsive", icon: <FaDesktop /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ]
  },
  {
    title: "DATA & TOOLS",
    skills: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Excel", icon: <FaFileExcel /> },
      { name: "Word", icon: <FaFileWord /> },
      { name: "PowerPoint", icon: <FaFilePowerpoint /> },
      { name: "Canva", icon: <FaPalette /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-8 bg-void border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center gap-6 mb-20">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
          <h2 className="text-5xl font-black tracking-[-0.04em] text-white">SKILLS</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.1 }}
              className="bg-card border border-white/10 p-10 rounded-3xl"
            >
              <h3 className="text-primary text-sm tracking-[0.25em] font-bold mb-10 uppercase">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="group flex flex-col items-center justify-center p-8 bg-void border border-white/10 hover:border-primary/60 rounded-2xl transition-all duration-500 hover:scale-105"
                  >
                    <div className="text-4xl mb-5 text-primary/70 group-hover:text-primary transition-all duration-500 drop-shadow-[0_0_12px_rgb(34,255,170)]">
                      {skill.icon}
                    </div>
                    <span className="text-sm tracking-widest uppercase font-medium text-zinc-400 group-hover:text-white transition-colors duration-500 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;