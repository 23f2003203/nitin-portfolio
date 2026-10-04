import React from 'react';
import { Mail, FileText, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function Hero({ personalData, contactData, codingProfiles }) {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#d2eedc] overflow-hidden">
      
      {/* Left Fixed/Sticky Vertical Social Bar */}
      <div className="hidden md:flex flex-col items-center gap-5 fixed left-6 top-1/2 -translate-y-1/2 z-40">
        
        {contactData?.github && (
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/70 hover:bg-[#0f172a] text-[#0f172a] hover:text-white shadow-sm border border-[#b8dec5] hover:border-[#0f172a] transition-all hover:scale-110"
            title="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
        )}

        {contactData?.linkedin && (
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/70 hover:bg-[#0f172a] text-[#0f172a] hover:text-white shadow-sm border border-[#b8dec5] hover:border-[#0f172a] transition-all hover:scale-110"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        )}

        {codingProfiles?.leetcode && (
          <a
            href={codingProfiles.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/70 hover:bg-[#0f172a] text-[#0f172a] hover:text-white shadow-sm border border-[#b8dec5] hover:border-[#0f172a] transition-all hover:scale-110"
            title="LeetCode Profile"
          >
            <LeetCodeIcon className="w-5 h-5" />
          </a>
        )}

        {contactData?.email && (
          <a
            href={`mailto:${contactData.email}`}
            className="p-2.5 rounded-full bg-white/70 hover:bg-[#0f172a] text-[#0f172a] hover:text-white shadow-sm border border-[#b8dec5] hover:border-[#0f172a] transition-all hover:scale-110"
            title="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        )}

        <div className="w-[2px] h-20 bg-[#a2d0b0] mt-2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full md:pl-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Coral Greeting */}
            <span className="text-base sm:text-lg font-bold text-[#e05638] tracking-wide mb-3 font-mono">
              Hi, my name is
            </span>

            {/* Huge Name & Tagline Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight mb-5 leading-[1.1]">
              {personalData?.name || 'Nitin Yadav'}.{' '}
              <span className="text-[#1e293b] font-bold">
                I build intelligent applications.
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-[#2b3e34] font-medium leading-relaxed mb-8 max-w-2xl">
              I'm a Computer Science undergraduate at DSEU and BS in Data Science student at IIT Madras specializing in building AI-powered, data-driven applications using Gemini, RAG, FastAPI, Python, and modern web frameworks.
            </p>

            {/* Resume Label & Black Pill Buttons */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-xs font-bold text-[#0f172a] tracking-wider uppercase font-mono">
                Here's My Resume & Projects
              </span>
              
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={personalData?.resumePath || '/resume.pdf'}
                  download="Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-[#0f172a] hover:bg-[#1e293b] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5"
                >
                  <span>Download Resume</span>
                  <FileText className="w-4 h-4 text-[#64ffda]" />
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm text-[#0f172a] bg-white/80 hover:bg-white border border-[#b8dec5] hover:border-[#0f172a] shadow-md transition-all hover:-translate-y-0.5"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 text-[#e05638]" />
                </a>
              </div>
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#b8dec5] w-full md:hidden">
              <span className="text-xs font-bold text-[#2b3e34] font-mono">Socials:</span>
              {contactData?.github && (
                <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white text-[#0f172a] border border-[#b8dec5]">
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {contactData?.linkedin && (
                <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white text-[#0f172a] border border-[#b8dec5]">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {codingProfiles?.leetcode && (
                <a href={codingProfiles.leetcode} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white text-[#0f172a] border border-[#b8dec5]">
                  <LeetCodeIcon className="w-4 h-4" />
                </a>
              )}
            </div>

          </div>

          {/* Right Circular Profile Photo Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Soft decorative blur ring */}
              <div className="absolute -inset-4 rounded-full bg-[#a2d0b0] blur-xl opacity-60 animate-pulse-slow" />

              {/* Circular Cropped Photo Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-slate-200">
                <img
                  src={personalData?.avatarUrl || "/mp.jpg"}
                  alt={personalData?.name || "Nitin Yadav"}
                  className="w-full h-full object-cover object-center"
                />
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
