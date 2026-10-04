import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, User, Cpu, FolderGit2, Briefcase, GraduationCap, Award, Mail } from 'lucide-react';

export default function Navbar({ personalData }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav-mint shadow-sm py-3' : 'bg-[#d2eedc] py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-extrabold text-xl text-[#0f172a] tracking-tight group-hover:text-[#e05638] transition-colors">
              {personalData?.name ? `${personalData.name}'s Portfolio` : "Nitin's Portfolio"}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-[#e05638] underline underline-offset-4 decoration-2'
                      : 'text-[#1e293b] hover:text-[#e05638]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button - Black Pill Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalData?.resumePath || '/resume.pdf'}
              download="Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0f172a] hover:bg-[#1e293b] rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <span>Download Resume</span>
              <FileText className="w-3.5 h-3.5 text-[#64ffda]" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0f172a] text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#d2eedc] border-t border-[#b8dec5] px-4 pt-3 pb-6 space-y-2 mt-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-[#0f172a] hover:text-[#e05638] hover:bg-[#c3e6cf] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#b8dec5]">
            <a
              href={personalData?.resumePath || '/resume.pdf'}
              download="Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 text-sm font-bold text-white bg-[#0f172a] rounded-full shadow-md flex items-center justify-center gap-2"
            >
              <span>Download Resume</span>
              <FileText className="w-4 h-4 text-[#64ffda]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
