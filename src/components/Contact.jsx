import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Copy, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ contactData, personalData }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (contactData?.email) {
      navigator.clipboard.writeText(contactData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0a192f] relative border-t border-[#1d3356]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-[#e05638] font-bold text-sm uppercase tracking-wider font-mono mb-2">
            08. GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact & Opportunities
          </h2>
          <p className="text-[#8892b0] text-sm sm:text-base mt-2 max-w-xl">
            Open for AI/ML, Generative AI, and Full-Stack Software Engineering roles & internships.
          </p>
        </div>

        {/* Centered Contact Info Card */}
        <div className="glass-card-navy rounded-2xl p-6 sm:p-10 border-[#233554] max-w-4xl">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#64ffda]" />
            <span>Direct Communication Channels</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            
            {/* Email Card */}
            <div className="flex flex-col justify-between p-5 rounded-xl bg-[#112240] border border-[#233554]">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-[#64ffda]/10 text-[#64ffda]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-[#8892b0] hover:text-[#64ffda] bg-[#071322] rounded-lg transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-[#64ffda]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#8892b0] block mb-1">Email Address</span>
                <a href={`mailto:${contactData?.email}`} className="text-xs sm:text-sm font-semibold text-[#ccd6f6] hover:text-[#64ffda] transition-colors break-all">
                  {contactData?.email || 'nitinyadav174104@gmail.com'}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            {contactData?.phone && (
              <div className="flex flex-col justify-between p-5 rounded-xl bg-[#112240] border border-[#233554]">
                <div className="p-2.5 rounded-lg bg-[#e05638]/10 text-[#e05638] w-fit mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#8892b0] block mb-1">Phone Number</span>
                  <a href={`tel:${contactData.phone}`} className="text-xs sm:text-sm font-semibold text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
                    {contactData.phone}
                  </a>
                </div>
              </div>
            )}

            {/* Location Card */}
            <div className="flex flex-col justify-between p-5 rounded-xl bg-[#112240] border border-[#233554]">
              <div className="p-2.5 rounded-lg bg-[#64ffda]/10 text-[#64ffda] w-fit mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#8892b0] block mb-1">Location</span>
                <span className="text-xs sm:text-sm font-semibold text-[#ccd6f6]">
                  {contactData?.location || personalData?.location || 'New Delhi, India'}
                </span>
              </div>
            </div>

          </div>

          {/* Social Quick Buttons */}
          <div className="pt-6 border-t border-[#233554] flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-[#8892b0] mr-2">Professional Profiles:</span>
            {contactData?.github && (
              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#112240] text-xs font-semibold text-[#ccd6f6] hover:text-[#64ffda] border border-[#233554] transition-colors"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
            )}
            {contactData?.linkedin && (
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#112240] text-xs font-semibold text-[#ccd6f6] hover:text-[#64ffda] border border-[#233554] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
