import React from 'react';
import { Trophy, ExternalLink } from 'lucide-react';

export default function Achievements({ achievementsData }) {
  if (!achievementsData || achievementsData.length === 0) return null;

  return (
    <section id="achievements" className="py-20 bg-[#0a192f] relative border-t border-[#1d3356]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-[#e05638] font-bold text-sm uppercase tracking-wider font-mono mb-2">
            07. HONORS & ACHIEVEMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Awards, Hackathons & Honors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((ach) => (
            <div
              key={ach.id || ach.title}
              className="glass-card-navy glass-card-navy-hover rounded-2xl p-6 border-[#233554] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#e05638]/10 text-[#e05638] border border-[#e05638]/20">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {ach.title}
                      </h3>
                      <div className="text-xs font-mono text-[#64ffda]">
                        {ach.organization}
                      </div>
                    </div>
                  </div>

                  {ach.date && (
                    <span className="text-[11px] font-mono text-[#8892b0] bg-[#112240] px-2.5 py-1 rounded-full border border-[#233554] shrink-0">
                      {ach.date}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#8892b0] leading-relaxed mb-4">
                  {ach.description}
                </p>
              </div>

              {ach.link && (
                <div className="pt-3 border-t border-[#233554]">
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e05638] hover:text-[#f87171] transition-colors"
                  >
                    <span>View Achievement Proof</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
