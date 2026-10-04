import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Cpu } from 'lucide-react';

export default function Experience({ experienceData }) {
  return (
    <section id="experience" className="py-20 bg-[#0a192f] relative border-t border-[#1d3356]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-[#e05638] font-bold text-sm uppercase tracking-wider font-mono mb-2">
            04. EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work & Internship History
          </h2>
          <p className="text-[#8892b0] text-sm sm:text-base mt-2 max-w-xl">
            Practical industry experience building AI models, feature pipelines, and software features.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#233554] ml-4 sm:ml-6 space-y-12">
          
          {(experienceData || []).map((exp, idx) => (
            <div key={exp.id || idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Bullet Marker */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0a192f] border-2 border-[#64ffda] flex items-center justify-center text-[#64ffda] shadow-md group-hover:scale-110 transition-transform">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Experience Card */}
              <div className="glass-card-navy glass-card-navy-hover rounded-2xl p-6 sm:p-8 border-[#233554]">
                
                {/* Header: Role, Company & Period */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#233554]">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#64ffda] mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8892b0]">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#112240] border border-[#233554] text-[#ccd6f6]">
                      <Calendar className="w-3.5 h-3.5 text-[#e05638]" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#112240] border border-[#233554] text-[#ccd6f6]">
                      <MapPin className="w-3.5 h-3.5 text-[#64ffda]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                {exp.description && (
                  <p className="text-sm text-[#8892b0] mb-5 leading-relaxed">
                    {exp.description}
                  </p>
                )}

                {/* Key Responsibilities */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="mb-5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#e05638] mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#64ffda]" />
                      <span>Key Responsibilities & Deliverables</span>
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#ccd6f6]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda] mt-2 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>Key Achievements</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="text-xs text-amber-200/90 flex items-center gap-2">
                          <span className="text-amber-400">★</span> {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies Used */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="pt-4 border-t border-[#233554] flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono text-[#8892b0] mr-2 flex items-center gap-1">
                      <Cpu className="w-3.5 h-3.5 text-[#64ffda]" /> Stack:
                    </span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-badge-mint">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
