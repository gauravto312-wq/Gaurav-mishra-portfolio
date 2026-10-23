import React from 'react';
import { GraduationCap, Award, Server, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-white/5 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">01. Overview</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main 100-130 Word Text */}
          <div className="lg:col-span-8 text-base sm:text-lg text-slate-300 leading-relaxed space-y-4">
            <p>
              {PERSONAL_INFO.about}
            </p>
          </div>

          {/* Quick Context Highlights */}
          <div className="lg:col-span-4 space-y-3">
            <div className="p-4 rounded-xl bg-[#0E131F] border border-white/5 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Academic Journey</h3>
                <p className="text-xs text-slate-400 mt-0.5">B.Tech CSE at BBD University, Lucknow (2023–2027)</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0E131F] border border-white/5 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Formal Training</h3>
                <p className="text-xs text-slate-400 mt-0.5">90-Hour Core & Advanced Java Training at GRAstech</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0E131F] border border-white/5 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Applied Systems</h3>
                <p className="text-xs text-slate-400 mt-0.5">Engineered NGOConnect & SafeWalk Backends</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0E131F] border border-white/5 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Backend Focus</h3>
                <p className="text-xs text-slate-400 mt-0.5">Spring Boot, Rest APIs, RBAC, JPA, Redis & Kafka</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
