import React from 'react';
import { Code2, ExternalLink, Terminal, Globe, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function CodingProfiles({ profilesData }) {
  if (!profilesData) return null;

  const profileItems = [
    { key: 'github', label: 'GitHub', icon: GithubIcon, url: profilesData.github, color: 'hover:border-[#64ffda] hover:text-[#64ffda]' },
    { key: 'linkedin', label: 'LinkedIn', icon: LinkedinIcon, url: profilesData.linkedin, color: 'hover:border-[#64ffda] hover:text-[#64ffda]' },
    { key: 'leetcode', label: 'LeetCode', icon: LeetCodeIcon, url: profilesData.leetcode, color: 'hover:border-amber-400 hover:text-amber-400' },
    { key: 'gfg', label: 'GeeksforGeeks', icon: Terminal, url: profilesData.gfg, color: 'hover:border-emerald-400 hover:text-emerald-400' },
    { key: 'hackerrank', label: 'HackerRank', icon: Award, url: profilesData.hackerrank, color: 'hover:border-emerald-400 hover:text-emerald-400' },
    { key: 'kaggle', label: 'Kaggle', icon: Globe, url: profilesData.kaggle, color: 'hover:border-cyan-400 hover:text-cyan-400' },
  ].filter(item => item.url && item.url.trim() !== '');

  if (profileItems.length === 0) return null;

  return (
    <section id="profiles" className="py-16 bg-[#0a192f] relative border-t border-[#1d3356]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-[#e05638] font-bold text-xs uppercase tracking-wider font-mono mb-1 block">
              CODING PLATFORMS
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Developer Profiles & Competitions
            </h3>
          </div>
          <span className="text-xs font-mono text-[#8892b0]">
            {profileItems.length} Verified Profiles
          </span>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {profileItems.map((profile) => {
            const Icon = profile.icon;
            return (
              <a
                key={profile.key}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card-navy p-4 rounded-xl border border-[#233554] flex flex-col items-center justify-center text-center group transition-all duration-200 ${profile.color}`}
              >
                <div className="p-2.5 rounded-lg bg-[#112240] border border-[#233554] group-hover:scale-110 transition-transform mb-2">
                  <Icon className="w-5 h-5 text-[#ccd6f6] group-hover:text-[#64ffda]" />
                </div>
                <span className="text-xs font-semibold text-[#ccd6f6] group-hover:text-white mb-1">
                  {profile.label}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#8892b0] group-hover:text-[#64ffda]">
                  <span>Visit Profile</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
