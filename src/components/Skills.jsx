import React, { useState } from 'react';
import { Cpu, Code, Brain, Sparkles, Globe, Database, Wrench, Search } from 'lucide-react';

export default function Skills({ skillsData }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Sparkles },
    { id: 'genAi', name: 'Generative AI', icon: Sparkles },
    { id: 'aiMl', name: 'AI / Machine Learning', icon: Brain },
    { id: 'programming', name: 'Programming', icon: Code },
    { id: 'webDev', name: 'Web Development', icon: Globe },
    { id: 'databases', name: 'Databases', icon: Database },
    { id: 'tools', name: 'Tools & DevOps', icon: Wrench },
  ];

  const skillGroups = [
    {
      id: 'genAi',
      title: 'Generative AI & LLMs',
      description: 'Engineering Large Language Models, RAG pipelines, Gemini API, and vector databases.',
      icon: Sparkles,
      color: 'from-[#e05638]/20 to-[#64ffda]/20 text-[#64ffda] border-[#64ffda]/30',
      items: skillsData?.genAi || []
    },
    {
      id: 'aiMl',
      title: 'AI / Machine Learning',
      description: 'Deep Learning, NLP models, Feature Engineering, EDA, and Scikit-learn algorithms.',
      icon: Brain,
      color: 'from-[#64ffda]/20 to-[#e05638]/20 text-[#64ffda] border-[#64ffda]/30',
      items: skillsData?.aiMl || []
    },
    {
      id: 'programming',
      title: 'Programming Languages',
      description: 'Core languages for AI development, competitive algorithms, and software design.',
      icon: Code,
      color: 'from-[#64ffda]/20 to-[#e05638]/20 text-[#64ffda] border-[#64ffda]/30',
      items: skillsData?.programming || []
    },
    {
      id: 'webDev',
      title: 'Web Development',
      description: 'Modern front-end user interfaces, RESTful microservices, and web frameworks.',
      icon: Globe,
      color: 'from-[#e05638]/20 to-[#64ffda]/20 text-[#64ffda] border-[#64ffda]/30',
      items: skillsData?.webDev || []
    },
    {
      id: 'databases',
      title: 'Databases & Storage',
      description: 'Relational, NoSQL, and vector database management.',
      icon: Database,
      color: 'from-[#64ffda]/20 to-[#e05638]/20 text-[#64ffda] border-[#64ffda]/30',
      items: skillsData?.databases || []
    },
    {
      id: 'tools',
      title: 'Tools & Ecosystem',
      description: 'Version control, developer tools, containerization, and API testing.',
      icon: Wrench,
      color: 'from-[#e05638]/20 to-[#64ffda]/20 text-[#64ffda] border-[#64ffda]/30',
      items: skillsData?.tools || []
    }
  ];

  const filteredGroups = skillGroups
    .filter(group => activeCategory === 'all' || group.id === activeCategory)
    .map(group => {
      if (!searchQuery) return group;
      const matchingItems = group.items.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...group, items: matchingItems };
    })
    .filter(group => group.items.length > 0);

  return (
    <section id="skills" className="py-20 bg-[#0a192f] relative border-t border-[#1d3356]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <span className="text-[#e05638] font-bold text-sm uppercase tracking-wider font-mono mb-2">
            02. TECHNICAL SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack & Capabilities
          </h2>
          <p className="text-[#8892b0] text-sm sm:text-base mt-2 max-w-xl">
            Grouped by specialized domain. Clean badges highlighting practical tools and frameworks.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#64ffda] text-[#0a192f] shadow-sm font-bold'
                      : 'bg-[#112240] text-[#8892b0] hover:text-white hover:bg-[#1d3356] border border-[#233554]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-[#8892b0] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Gemini)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#112240] border border-[#233554] rounded-full text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda]"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.length > 0 ? (
            filteredGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.id}
                  className="glass-card-navy glass-card-navy-hover rounded-2xl p-6 flex flex-col justify-between border-[#233554]"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/20">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">{group.title}</h3>
                        <span className="text-[11px] text-[#8892b0] font-mono">
                          {group.items.length} technologies
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-[#8892b0] mb-5 leading-relaxed">
                      {group.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="tech-badge-mint cursor-default"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda]" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12 glass-card-navy rounded-2xl">
              <p className="text-[#8892b0] text-sm font-mono">No skills matching "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs text-[#64ffda] underline font-mono"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
