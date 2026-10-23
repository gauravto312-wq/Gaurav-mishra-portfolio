import React from 'react';
import { 
  Code2, 
  Layers, 
  ShieldCheck, 
  Network, 
  Cpu, 
  Wrench,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const TechnicalSkills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 1:
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 3:
        return <Network className="w-5 h-5 text-emerald-400" />;
      case 4:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 5:
        return <Wrench className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-white/5 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">02. Capabilities</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Technical Skills</h2>
              <p className="text-sm text-slate-400 mt-1 max-w-xl">
                Verified through coursework, GRAstech training, and hands-on implementation in production-grade backend codebases.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Core Specialization: Java / Spring Boot</span>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="p-6 rounded-xl bg-[#0E131F] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 shrink-0">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight">{cat.title}</h3>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        skill.highlight
                          ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-800/40 font-medium'
                          : 'bg-white/5 text-slate-300 border border-white/10 hover:border-white/20'
                      }`}
                    >
                      {skill.highlight && <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />}
                      <span>{skill.name}</span>
                      {skill.note && (
                        <span className="text-[10px] text-slate-500 italic ml-0.5">({skill.note})</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified in source</span>
                <span className="text-emerald-500/70">● Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
