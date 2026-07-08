import React, { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiFacebook, FiCheck } from "react-icons/fi";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("carldave0110@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email");
    }
  };

  return (
    <footer className="bg-card border-t border-white/10 py-12 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Left */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-black tracking-[-0.02em] text-white">
              CARL DAVE PALMA
            </div>
            <p className="text-primary text-xs tracking-[2px] mt-1.5">
              JUNIOR WEB DEVELOPER
            </p>
          </div>

          {/* Center - Socials */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-7 text-3xl">
              <a
                href="https://github.com/Ulquiorrraaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary transition-all hover:scale-125"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/carl-dave-palma-762ba0391"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary transition-all hover:scale-125"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://www.instagram.com/criticarll/"   // ← Replace with your IG username
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary transition-all hover:scale-125"
              >
                <FiInstagram />
              </a>
              <a
                href="https://www.facebook.com/carl.dave.861668"   // ← Replace with your FB username or page
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary transition-all hover:scale-125"
              >
                <FiFacebook />
              </a>
              <button
                onClick={copyEmail}
                className="text-zinc-400 hover:text-primary transition-all hover:scale-125 relative"
                title="Copy Email"
              >
                {copied ? <FiCheck className="text-green-400" /> : <FiMail />}
              </button>
            </div>

            {/* Copy Feedback */}
            {copied && (
              <p className="text-green-400 text-sm font-medium flex items-center gap-1.5">
                <FiCheck size={16} /> Email copied successfully!
              </p>
            )}

            <p className="text-zinc-500 text-sm text-center tracking-wide">
              Feel free to reach out anytime
            </p>
          </div>

          {/* Right */}
          <div className="text-center md:text-right text-zinc-500 text-xs">
            © {new Date().getFullYear()} Carl Dave Palma<br />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;