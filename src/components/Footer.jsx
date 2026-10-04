import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer({ personalData, contactData }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071322] border-t border-[#1d3356] text-[#8892b0] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#112240]">
          
          {/* Left Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2 mb-2">
              <span className="font-bold text-lg text-white font-mono">
                {personalData?.name || 'Nitin Yadav'}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/30 font-mono">
                AI / ML Developer
              </span>
            </a>
            <p className="text-xs text-[#8892b0] max-w-md">
              Designed for recruiters, hiring managers, and AI software engineering teams.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
            <a href="#about" className="hover:text-[#64ffda] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#64ffda] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#64ffda] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#64ffda] transition-colors">Experience</a>
            <a href="#education" className="hover:text-[#64ffda] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#64ffda] transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            {contactData?.github && (
              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#112240] text-[#ccd6f6] hover:text-[#64ffda] border border-[#233554] transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {contactData?.linkedin && (
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#112240] text-[#ccd6f6] hover:text-[#64ffda] border border-[#233554] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
            {contactData?.email && (
              <a
                href={`mailto:${contactData.email}`}
                className="p-2.5 rounded-full bg-[#112240] text-[#ccd6f6] hover:text-[#64ffda] border border-[#233554] transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/30 hover:bg-[#64ffda]/20 transition-all"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#8892b0] gap-2">
          <span>
            © {currentYear} {personalData?.name || 'Nitin Yadav'}. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Built with React, Vite & Tailwind CSS
          </span>
        </div>

      </div>
    </footer>
  );
}
