import React from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Container Card */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0E131F] border border-white/10 text-center relative overflow-hidden">
          
          <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 mb-6">
            <MessageSquare className="w-6 h-6" />
          </div>

          <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">08. Next Steps</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Get in Touch
          </h2>

          <p className="text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            I am always interested in discussing Java backend development, distributed architecture, and software engineering opportunities. Whether you have questions about my projects or wish to discuss an entry-level or internship opportunity, feel free to reach out.
          </p>

          {/* Primary Email CTA */}
          <div className="mb-8">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-base transition-all shadow-lg hover:shadow-emerald-500/20"
            >
              <Mail className="w-5 h-5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-sm font-mono">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <span className="text-slate-700 hidden sm:inline">•</span>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
