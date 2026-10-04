import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

export default function Certifications({ certificationsData }) {
  if (!certificationsData || certificationsData.length === 0) return null;

  return (
    <section id="certifications" className="py-20 bg-[#0a192f] relative border-t border-[#1d3356]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-[#e05638] font-bold text-sm uppercase tracking-wider font-mono mb-2">
            06. CERTIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Certifications
          </h2>
          <p className="text-[#8892b0] text-sm sm:text-base mt-2 max-w-xl">
            Professional credentials in Machine Learning, Deep Learning, and Cloud AI architectures.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id || cert.name}
              className="glass-card-navy glass-card-navy-hover rounded-2xl p-6 flex flex-col justify-between border-[#233554]"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/20">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-[#8892b0] bg-[#112240] px-2.5 py-1 rounded-full border border-[#233554]">
                    <Calendar className="w-3 h-3 text-[#e05638]" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1 leading-snug">
                  {cert.name}
                </h3>

                <div className="text-xs font-semibold text-[#64ffda] mb-3">
                  {cert.issuer}
                </div>

                {cert.credentialId && (
                  <div className="text-[11px] font-mono text-[#8892b0] mb-4 bg-[#071322] p-2 rounded-lg border border-[#233554] truncate">
                    ID: <span className="text-[#ccd6f6]">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              {cert.url && (
                <div className="pt-4 border-t border-[#233554]">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full text-xs font-bold text-[#0a192f] bg-[#64ffda] hover:bg-[#52e0be] transition-colors shadow-sm"
                  >
                    <span>View Certificate</span>
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
