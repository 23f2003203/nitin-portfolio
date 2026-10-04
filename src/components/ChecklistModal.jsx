import React from 'react';
import { X, CheckSquare, Sparkles, AlertCircle, FileText, User, Mail, FolderGit2, Briefcase, GraduationCap, Award, Code2, ArrowRight } from 'lucide-react';

export default function ChecklistModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-4xl bg-[#0f172a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Information I Need From You to Complete Your Portfolio
              </h3>
              <span className="text-xs font-mono text-amber-300">
                Data checklist to customize src/data/portfolioData.js
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar">
          
          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-200 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold mb-0.5">How to update your information:</strong>
              All content on this website is dynamically loaded from <code>src/data/portfolioData.js</code>. Simply paste your actual details into that file or share them in our chat to populate your portfolio!
            </div>
          </div>

          {/* REQUIRED INFORMATION SECTION */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-rose-500/30">
              <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-400 font-mono text-xs font-bold uppercase">
                REQUIRED INFORMATION
              </span>
              <span className="text-xs text-slate-400 font-mono">(Essential for baseline resume & portfolio)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-xs font-mono font-bold text-slate-200 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-cyan-400" /> Personal Details
                </h4>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Full name</li>
                  <li>Professional title (e.g. AI/ML Developer)</li>
                  <li>Location (City, Country)</li>
                  <li>Professional tagline & 2-3 line short bio</li>
                  <li>Profile photograph (or avatar image URL)</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-xs font-mono font-bold text-slate-200 mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-indigo-400" /> Contact Info
                </h4>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Professional email</li>
                  <li>LinkedIn profile URL</li>
                  <li>GitHub profile URL</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-xs font-mono font-bold text-slate-200 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" /> Resume File
                </h4>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Latest resume PDF (saved as <code>public/resume.pdf</code>)</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-xs font-mono font-bold text-slate-200 mb-2 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-purple-400" /> Education
                </h4>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Degree & Institution</li>
                  <li>Start year & Graduation year</li>
                  <li>Relevant CS/AI Coursework</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 md:col-span-2">
                <h4 className="text-xs font-mono font-bold text-slate-200 mb-2 flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-amber-400" /> Projects (For each project)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Project name & Category</li>
                    <li>1–2 line description</li>
                    <li>Problem statement & Solution</li>
                    <li>Key features list</li>
                  </ul>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Tech stack used (Python, PyTorch, React...)</li>
                    <li>GitHub Repository URL</li>
                    <li>Live demo URL (if available)</li>
                    <li>Architecture / Flow description</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* OPTIONAL INFORMATION SECTION */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-cyan-500/30">
              <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold uppercase">
                OPTIONAL INFORMATION
              </span>
              <span className="text-xs text-slate-400 font-mono">(Adds depth if available)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-xs font-mono font-bold text-slate-200 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-400" /> Work / Internship Experience
                </h4>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Company name & Position title</li>
                  <li>Start & End dates, Location</li>
                  <li>Responsibilities & Achievements</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-xs font-mono font-bold text-slate-200 mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" /> Certifications & Achievements
                </h4>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Certification Name, Issuer, Date & Credential ID</li>
                  <li>Hackathons, Competitions & Awards</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 md:col-span-2">
                <h4 className="text-xs font-mono font-bold text-slate-200 mb-2 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-emerald-400" /> Coding Profiles & Links
                </h4>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>LeetCode, GeeksforGeeks, HackerRank, Kaggle profile handles</li>
                  <li>Phone number, personal blog URL, open-source repos</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-900/95 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-xs font-semibold text-slate-950 transition-colors"
          >
            Got It! Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
