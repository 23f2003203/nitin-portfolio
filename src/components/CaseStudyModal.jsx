import React from 'react';
import { X, Sparkles, CheckCircle2, AlertTriangle, Cpu, Layers, ArrowRight, Activity, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  const caseStudy = project.caseStudy || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0a192f] border border-[#233554] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col text-white">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-[#0d1b2a] border-b border-[#233554] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#64ffda]/10 border border-[#64ffda]/30 text-[#64ffda] text-xs font-mono font-medium">
              {project.category || 'Case Study'}
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#8892b0] hover:text-white rounded-lg bg-[#112240] hover:bg-[#1d3356] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar">
          
          {/* Overview & Motivation */}
          <div className="glass-card-navy rounded-xl p-6 border-[#233554]">
            <h4 className="text-sm font-mono uppercase tracking-wider text-[#e05638] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#64ffda]" />
              <span>Project Overview & Motivation</span>
            </h4>
            <p className="text-[#ccd6f6] text-sm sm:text-base leading-relaxed mb-4">
              {caseStudy.overview || project.description}
            </p>
            {caseStudy.motivation && (
              <p className="text-[#8892b0] text-xs sm:text-sm leading-relaxed italic border-l-2 border-[#64ffda] pl-3">
                "{caseStudy.motivation}"
              </p>
            )}
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-rose-500/10 border border-rose-500/20">
              <h4 className="text-sm font-bold text-rose-300 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>Problem Statement</span>
              </h4>
              <p className="text-[#ccd6f6] text-xs sm:text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#64ffda]/10 border border-[#64ffda]/20">
              <h4 className="text-sm font-bold text-[#64ffda] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#64ffda]" />
                <span>Engineered Solution</span>
              </h4>
              <p className="text-[#ccd6f6] text-xs sm:text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture / Data Flow Section */}
          <div className="glass-card-navy rounded-xl p-6 border-[#233554]">
            <h4 className="text-sm font-mono uppercase tracking-wider text-[#e05638] mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#64ffda]" />
              <span>System Architecture & Data Flow</span>
            </h4>
            <div className="p-4 rounded-xl bg-[#071322] border border-[#233554] font-mono text-xs sm:text-sm text-[#64ffda] overflow-x-auto">
              <div className="flex items-center gap-2 min-w-[600px] justify-between py-2">
                <div className="px-3 py-2 rounded-lg bg-[#112240] border border-[#64ffda]/30 text-center">
                  <span className="text-[#8892b0] block text-[10px]">CLIENT</span>
                  User Interface
                </div>
                <ArrowRight className="w-4 h-4 text-[#8892b0] shrink-0" />
                <div className="px-3 py-2 rounded-lg bg-[#112240] border border-[#e05638]/30 text-center">
                  <span className="text-[#8892b0] block text-[10px]">API GATEWAY</span>
                  FastAPI / Flask
                </div>
                <ArrowRight className="w-4 h-4 text-[#8892b0] shrink-0" />
                <div className="px-3 py-2 rounded-lg bg-[#112240] border border-[#64ffda]/30 text-center">
                  <span className="text-[#8892b0] block text-[10px]">AI ENGINE</span>
                  Gemini API / RAG
                </div>
                <ArrowRight className="w-4 h-4 text-[#8892b0] shrink-0" />
                <div className="px-3 py-2 rounded-lg bg-[#112240] border border-[#64ffda]/30 text-center">
                  <span className="text-[#8892b0] block text-[10px]">STORAGE</span>
                  Vector DB / SQLite / Redis
                </div>
              </div>
            </div>
            {caseStudy.architectureFlow && (
              <p className="text-xs text-[#8892b0] mt-3 font-mono">
                Flow: {caseStudy.architectureFlow}
              </p>
            )}
          </div>

          {/* Key Features & Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Features */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-[#ccd6f6] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#64ffda]" />
                <span>Key Features</span>
              </h4>
              <ul className="space-y-2">
                {(project.features || []).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#ccd6f6]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda] mt-1.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-[#ccd6f6] mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#e05638]" />
                <span>Technologies Used</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {(project.techStack || []).map((tech, idx) => (
                  <span key={idx} className="tech-badge-mint">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Technical Challenges & Solutions */}
          {caseStudy.challenges && caseStudy.challenges.length > 0 && (
            <div className="glass-card-navy rounded-xl p-6 border-[#233554]">
              <h4 className="text-sm font-mono uppercase tracking-wider text-[#e05638] mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#64ffda]" />
                <span>Engineering Challenges & Solutions</span>
              </h4>
              <div className="space-y-4">
                {caseStudy.challenges.map((challenge, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-[#112240] border border-[#233554]">
                    <p className="text-xs sm:text-sm text-amber-300 font-semibold mb-1">
                      Challenge: {challenge}
                    </p>
                    {caseStudy.howSolved && caseStudy.howSolved[idx] && (
                      <p className="text-xs sm:text-sm text-[#ccd6f6]">
                        <strong className="text-[#64ffda] font-mono">Solution:</strong> {caseStudy.howSolved[idx]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results & Outcomes */}
          {caseStudy.results && (
            <div className="p-5 rounded-xl bg-[#112240] border border-[#64ffda]/30 flex items-center gap-4">
              <Activity className="w-8 h-8 text-[#64ffda] shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white">Results & Performance Metrics</h4>
                <p className="text-xs sm:text-sm text-[#64ffda] mt-0.5">{caseStudy.results}</p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Links */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between p-6 bg-[#0d1b2a] border-t border-[#233554] backdrop-blur-md">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#112240] hover:bg-[#1d3356] border border-[#233554] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-[#8892b0] hover:text-white"
          >
            Close Esc
          </button>
        </div>

      </div>
    </div>
  );
}
