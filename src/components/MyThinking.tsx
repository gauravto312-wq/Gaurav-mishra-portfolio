import React from 'react';
import { MY_THINKING_POINTS } from '../data/portfolioData';

export const MyThinking: React.FC = () => {
  return (
    <section id="thinking" className="py-20 border-b border-white/5 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">04. Engineering Mindset</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">My Thinking</h2>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            A personal view on engineering responsibility, architectural decisions, and how I approach building software systems.
          </p>
        </div>

        {/* Thought Threads (Clean Editorial Layout) */}
        <div className="space-y-12">
          {MY_THINKING_POINTS.map((point, index) => (
            <article
              key={point.title}
              className="relative pl-6 sm:pl-8 border-l border-white/10 group hover:border-emerald-500/50 transition-colors"
            >
              {/* Timeline marker */}
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#0E131F] border border-slate-600 group-hover:border-emerald-400 group-hover:bg-emerald-500 transition-all" />

              {/* Header */}
              <div className="mb-2">
                <span className="text-xs font-mono text-emerald-400/80 mr-2">
                  0{index + 1}.
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight inline">
                  {point.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {point.subtitle}
                </p>
              </div>

              {/* Core Personal Statement */}
              <blockquote className="text-slate-200 font-medium text-sm sm:text-base leading-relaxed mt-3 pl-3 border-l-2 border-emerald-500/40 italic">
                "{point.statement}"
              </blockquote>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
