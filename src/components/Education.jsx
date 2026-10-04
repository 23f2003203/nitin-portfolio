import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Star } from 'lucide-react';

export default function Education({ educationData }) {
  return (
    <section id="education" className="py-20 bg-[#0a192f] relative border-t border-[#1d3356]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-[#e05638] font-bold text-sm uppercase tracking-wider font-mono mb-2">
            05. ACADEMIC EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Coursework
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {(educationData || []).map((edu, idx) => (
            <div
              key={edu.id || idx}
              className="glass-card-navy glass-card-navy-hover rounded-2xl p-6 sm:p-8 border-[#233554]"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#233554]">
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/20 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <div className="text-base font-semibold text-[#64ffda] mt-1">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8892b0]">
                  <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#112240] border border-[#233554] text-[#ccd6f6]">
                    <Calendar className="w-3.5 h-3.5 text-[#e05638]" />
                    {edu.startYear} – {edu.graduationYear}
                  </span>
                  
                  {edu.location && (
                    <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#112240] border border-[#233554] text-[#ccd6f6]">
                      <MapPin className="w-3.5 h-3.5 text-[#64ffda]" />
                      {edu.location}
                    </span>
                  )}

                  {edu.gpa && (
                    <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/30 font-semibold">
                      <Star className="w-3.5 h-3.5 text-[#64ffda]" />
                      {edu.gpa}
                    </span>
                  )}
                </div>

              </div>

              {/* Relevant Coursework */}
              {edu.coursework && edu.coursework.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#e05638] mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#64ffda]" />
                    <span>Relevant Computer Science & Data Science Coursework</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#112240] text-[#ccd6f6] border border-[#233554] hover:border-[#64ffda] transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
