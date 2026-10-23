import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { CERTIFICATION_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 border-b border-white/5 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">07. Credentials</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Certifications</h2>
          <p className="text-sm text-slate-400 mt-1">
            Verified course certifications completed during academic study.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CERTIFICATION_DATA.map((cert) => (
            <div
              key={cert.title}
              className="p-5 rounded-xl bg-[#0E131F] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400 mt-1">
                    Issuer: {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{cert.issueDate}</span>
                </span>
                <span className="text-[11px] text-slate-500">Resume Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
