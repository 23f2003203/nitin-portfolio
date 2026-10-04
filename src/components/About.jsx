import React from 'react';
import { User, MapPin, Target, GraduationCap, Cpu, Sparkles, Compass, CheckCircle2 } from 'lucide-react';

export default function About({ aboutData, personalData }) {
  return (
    <section id="about" className="py-20 bg-[#0a192f] relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-[#e05638] font-bold text-sm uppercase tracking-wider font-mono mb-2">
            01. ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background & Technical Specialization
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main About Story */}
          <div className="lg:col-span-7 glass-card-navy rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#64ffda]" />
                <span className="text-white">Hello!</span>
              </h3>
              
              <p className="text-[#8892b0] leading-relaxed text-sm sm:text-base mb-6">
                {aboutData?.intro}
              </p>

              {/* Technical Interests */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#e05638] mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#64ffda]" />
                  <span>Technical Focus & Expertise</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(aboutData?.technicalInterests || []).map((interest, idx) => (
                    <span
                      key={idx}
                      className="tech-badge-mint"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda]" />
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Specialization Badges */}
            <div className="pt-6 border-t border-[#233554] flex flex-wrap gap-4 text-xs font-mono text-[#8892b0]">
              <span className="flex items-center gap-1.5 text-[#64ffda]">
                <CheckCircle2 className="w-4 h-4" /> AI/ML Specialist
              </span>
              <span className="flex items-center gap-1.5 text-[#64ffda]">
                <CheckCircle2 className="w-4 h-4" /> Generative AI & RAG
              </span>
              <span className="flex items-center gap-1.5 text-[#64ffda]">
                <CheckCircle2 className="w-4 h-4" /> Full-Stack Engineering
              </span>
            </div>
          </div>

          {/* Right Quick Info Card */}
          <div className="lg:col-span-5 glass-card-navy rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-[#233554]">
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 border-b border-[#233554] pb-4">
                <Compass className="w-5 h-5 text-[#e05638]" />
                <span>Quick Information</span>
              </h3>

              <div className="space-y-4">
                
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#112240] border border-[#233554]">
                  <div className="p-2 rounded-lg bg-[#64ffda]/10 text-[#64ffda] shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8892b0] block mb-0.5">Education</span>
                    <span className="text-sm font-semibold text-[#ccd6f6]">
                      {aboutData?.currentEducation}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#112240] border border-[#233554]">
                  <div className="p-2 rounded-lg bg-[#e05638]/10 text-[#e05638] shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8892b0] block mb-0.5">Focus Area</span>
                    <span className="text-sm font-semibold text-[#ccd6f6]">
                      {personalData?.focusArea}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#112240] border border-[#233554]">
                  <div className="p-2 rounded-lg bg-[#64ffda]/10 text-[#64ffda] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8892b0] block mb-0.5">Location</span>
                    <span className="text-sm font-semibold text-[#ccd6f6]">
                      {personalData?.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#112240] border border-[#233554]">
                  <div className="p-2 rounded-lg bg-[#e05638]/10 text-[#e05638] shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8892b0] block mb-0.5">Current Goal</span>
                    <span className="text-sm font-semibold text-[#ccd6f6]">
                      {personalData?.currentGoal}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
