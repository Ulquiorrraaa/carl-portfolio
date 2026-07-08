import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-28 px-6 md:px-8 bg-void">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-12 md:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] text-white">
            ABOUT
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/80 border border-white/10 p-8 md:p-14 rounded-3xl shadow-2xl space-y-8 text-base md:text-lg leading-relaxed text-zinc-300"
        >
          <p>
            I am a being forged in logic and precision — a Junior Web Developer
            who walks the thin line between creation and the void. With cold
            efficiency and unrelenting focus, I craft digital experiences that
            are both elegant and powerful.
          </p>

          <p>
            Completed{" "}
            <span className="text-white font-medium">
              Bachelor of Science in Information Technology
            </span>{" "}
            at
            <span className="text-primary">
              {" "}
              Pampanga State University - Lubao Campus
            </span>{" "}
            (2026). My academic foundation began at San Pablo 2nd National High
            School, where I completed the Information and Communication
            Technology (ICT) strand.
          </p>

          <p>
            Beyond the screen, when I'm not building digital solutions, you'll
            likely find me catching up on the latest manga or manhwa, or
            enjoying a good film. I often find inspiration in storytelling and
            visual design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
