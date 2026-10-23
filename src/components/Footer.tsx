import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-8 bg-[#0A0D14] text-xs text-slate-500 font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript & Tailwind CSS.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
          <span className="text-slate-700">•</span>
          <a href="#projects" className="hover:text-slate-300 transition-colors">Projects</a>
          <span className="text-slate-700">•</span>
          <a href="#thinking" className="hover:text-slate-300 transition-colors">My Thinking</a>
          <span className="text-slate-700">•</span>
          <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
