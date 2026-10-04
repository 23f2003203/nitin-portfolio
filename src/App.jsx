import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import ChecklistModal from './components/ChecklistModal';
import Footer from './components/Footer';

export default function App() {
  const [checklistOpen, setChecklistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-200 font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        personalData={portfolioData.personal}
        onOpenChecklist={() => setChecklistOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        
        {/* Hero Section */}
        <Hero
          personalData={portfolioData.personal}
          contactData={portfolioData.contact}
          codingProfiles={portfolioData.codingProfiles}
        />

        {/* About Me Section */}
        <About
          aboutData={portfolioData.about}
          personalData={portfolioData.personal}
        />

        {/* Skills Section */}
        <Skills
          skillsData={portfolioData.skills}
        />

        {/* Featured Projects Section */}
        <Projects
          projectsData={portfolioData.projects}
        />

        {/* Experience Section */}
        <Experience
          experienceData={portfolioData.experience}
        />

        {/* Education Section */}
        <Education
          educationData={portfolioData.education}
        />

        {/* Certifications Section */}
        <Certifications
          certificationsData={portfolioData.certifications}
        />

        {/* Achievements Section (Hidden if empty) */}
        <Achievements
          achievementsData={portfolioData.achievements}
        />

        {/* Coding Profiles Section */}
        <CodingProfiles
          profilesData={portfolioData.codingProfiles}
        />

        {/* Contact Section */}
        <Contact
          contactData={portfolioData.contact}
          personalData={portfolioData.personal}
        />

      </main>

      {/* Footer */}
      <Footer
        personalData={portfolioData.personal}
        contactData={portfolioData.contact}
      />

      {/* Information Checklist Modal */}
      <ChecklistModal
        isOpen={checklistOpen}
        onClose={() => setChecklistOpen(false)}
      />

    </div>
  );
}
