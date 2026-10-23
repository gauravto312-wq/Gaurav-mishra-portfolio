import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/gaurav-mishra.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-white/5 overflow-hidden">
      {/* Subtle background glow - very restrained */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-14">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono mb-6">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PERSONAL_INFO.location}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Undergrad CS Eng 2027</span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-emerald-400 mb-6 font-mono">
              {PERSONAL_INFO.headline}
            </h2>

            {/* Supporting Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              "{PERSONAL_INFO.shortStatement}"
            </p>

            {/* Actions: View Projects & Socials */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-sm transition-all shadow-sm hover:shadow-emerald-500/20"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Email</span>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Tech Foundation Tags */}
            <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Core Focus:</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-800/40 font-medium">Java 17+</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-800/40 font-medium">Spring Boot</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Spring Security</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Spring Data JPA</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">REST APIs</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">MySQL</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Redis</span>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="relative shrink-0">
            <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl relative group bg-[#111622]">
              <img
                src={profilePhoto}
                alt="Gaurav Mishra - Java Backend Developer"
                className="w-full h-full object-cover object-center filter grayscale-[15%] hover:grayscale-0 transition-all duration-300"
                loading="eager"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
            {/* Subtle backend icon badge */}
            <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-[#0A0D14] border border-emerald-500/30 rounded-lg shadow-md font-mono text-xs text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Java Backend</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
