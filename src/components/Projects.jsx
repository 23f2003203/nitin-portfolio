import React, { useState } from 'react';
import { FolderGit2, FileText, Sparkles, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import CaseStudyModal from './CaseStudyModal';

export default function Projects({ projectsData }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState(null);

  const categories = ['All', 'Generative AI', 'AI & Machine Learning', 'Full-Stack Development'];

  const filteredProjects = projectsData.filter(project => {
    if (selectedCategory === 'All') return true;
    return project.category?.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <section id="projects" className="py-20 bg-[#0a192f] relative border-t border-[#1d3356]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[#e05638] font-bold text-sm uppercase tracking-wider font-mono mb-2 block">
              03. FEATURED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              AI, RAG & Full-Stack Applications
            </h2>
            <p className="text-[#8892b0] text-sm sm:text-base mt-2 max-w-xl">
              Production-ready software applications showcasing Machine Learning, Generative AI, Gemini APIs, and backend engineering.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#64ffda] text-[#0a192f] shadow-sm font-bold'
                    : 'bg-[#112240] text-[#8892b0] hover:text-white border border-[#233554]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id || project.name}
              className="glass-card-navy glass-card-navy-hover rounded-2xl border-[#233554] overflow-hidden flex flex-col justify-between group"
            >
              <div>
                
                {/* Visual Header */}
                <div className="relative h-48 sm:h-56 bg-[#0d1b2a] p-6 flex flex-col justify-between overflow-hidden border-b border-[#233554]">
                  
                  {/* Top Header Tags */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#64ffda]/10 text-[#64ffda] text-[11px] font-mono font-medium border border-[#64ffda]/30">
                      {project.category || 'Featured Project'}
                    </span>
                    {project.isFeatured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#e05638] bg-[#e05638]/10 px-2.5 py-1 rounded-full border border-[#e05638]/30">
                        <Sparkles className="w-3 h-3 text-[#e05638]" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Center Visual Mock Graphic */}
                  <div className="relative z-10 my-auto text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-[#112240] border border-[#233554] flex items-center justify-center text-[#64ffda] shadow-md group-hover:scale-110 transition-transform">
                      <FolderGit2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-[#64ffda] transition-colors">
                      {project.name}
                    </h4>
                  </div>

                  {/* Tech Stack Ribbon */}
                  <div className="relative z-10 flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-2">
                    {(project.techStack || []).slice(0, 4).map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono bg-[#0a192f] text-[#8892b0] px-2 py-0.5 rounded border border-[#233554]">
                        {tech}
                      </span>
                    ))}
                    {(project.techStack || []).length > 4 && (
                      <span className="text-[10px] font-mono text-[#8892b0]">+{(project.techStack || []).length - 4}</span>
                    )}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  
                  {/* Short Description */}
                  <p className="text-sm text-[#8892b0] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Problem Solved Excerpt */}
                  {project.problem && (
                    <div className="p-3 rounded-xl bg-[#0d1b2a] border border-[#233554] mb-4 text-xs text-[#8892b0]">
                      <strong className="text-[#e05638] font-medium block mb-1 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" /> Problem Solved:
                      </strong>
                      {project.problem}
                    </div>
                  )}

                  {/* Key Features List */}
                  {project.features && (
                    <div className="space-y-1.5 mb-6">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#ccd6f6]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#64ffda] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-[#233554] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#112240] hover:bg-[#1d3356] text-white hover:text-[#64ffda] border border-[#233554] transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Case Study Button */}
                <button
                  onClick={() => setActiveCaseStudyProject(project)}
                  className="px-4 py-2 rounded-full text-xs font-bold text-[#0a192f] bg-[#64ffda] hover:bg-[#52e0be] transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Modal Handler */}
        {activeCaseStudyProject && (
          <CaseStudyModal
            project={activeCaseStudyProject}
            onClose={() => setActiveCaseStudyProject(null)}
          />
        )}

      </div>
    </section>
  );
}
