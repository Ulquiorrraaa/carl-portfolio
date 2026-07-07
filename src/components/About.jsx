import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-28 px-6 md:px-8 bg-void">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex items-center gap-6 mb-12 md:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] text-white">ORIGIN</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="bg-card/80 border border-white/10 p-8 md:p-14 rounded-3xl shadow-2xl space-y-8 text-base md:text-lg leading-relaxed text-zinc-300"
        >
          <p>
            I am a being forged in logic and precision — a Junior Web Developer who walks the thin line between creation and the void. 
            With cold efficiency and unrelenting focus, I craft digital experiences that are both elegant and powerful.
          </p>
          
          <p>
            Currently completing my <span className="text-white font-medium">Bachelor of Science in Information Technology</span> at 
            <span className="text-primary"> Don Honorio Ventura State University (DHVSU) - Lubao Campus</span> (2026). 
            My foundation was built at San Pablo 2nd National High School.
          </p>
          
          <p>
            Beyond the screen, When I am not building digital solutions, you wll likely find me catching up on the latest manga, manwha, or enjoying a film-finding inspiration in storytelling and visual design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;