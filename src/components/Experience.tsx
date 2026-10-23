import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-white/5 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">05. Professional Training</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Experience & Training</h2>
          <p className="text-sm text-slate-400 mt-1">
            Formal technical training and hands-on laboratory exercises.
          </p>
        </div>

        {/* Experience Item */}
        <div className="space-y-6">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.organization}
              className="p-6 sm:p-8 rounded-xl bg-[#0E131F] border border-white/10 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400">
                      <Briefcase className="w-4 h-4" />
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-emerald-400 font-mono mt-1">
                    {exp.organization} <span className="text-slate-500 font-normal">| {exp.type}</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5 mt-4 pt-4 border-t border-white/5">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
