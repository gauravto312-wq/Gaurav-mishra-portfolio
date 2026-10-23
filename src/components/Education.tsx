import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-white/5 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">06. Background</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Education</h2>
          <p className="text-sm text-slate-400 mt-1">
            Academic qualifications and computer science foundation.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#0E131F] border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-emerald-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 sm:text-right pl-11 sm:pl-0">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                  </span>
                </div>
              </div>

              {edu.details && (
                <p className="text-xs sm:text-sm text-slate-400 pl-11 mt-2 leading-relaxed">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
