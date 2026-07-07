import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left - Name & Title */}
          <div className="text-center md:text-left">
            <div className="text-3xl font-black tracking-tight text-white mb-1">
              CARL DAVE PALMA
            </div>
            <p className="text-primary text-sm tracking-widest">
              JUNIOR WEB DEVELOPER
            </p>
          </div>

          {/* Social Links - Fixed */}
          <div className="flex justify-center gap-8 text-3xl">
            <a
              href="https://github.com/Ulquiorrraaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-primary transition-all hover:scale-110"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/carl-dave-palma-762ba0391"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-primary transition-all hover:scale-110"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=carldave0110@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-primary transition-all hover:scale-110"
            >
              <FiMail />
            </a>
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right text-zinc-500 text-sm">
            © {new Date().getFullYear()} Carl Dave Palma
            <br />
            All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
