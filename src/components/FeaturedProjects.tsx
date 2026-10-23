import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Github, 
  ExternalLink, 
  ShieldAlert, 
  Layers, 
  Play
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 border-b border-white/5 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">03. Engineered Systems</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Featured Projects</h2>
              <p className="text-sm text-slate-400 mt-1 max-w-xl">
                Real-world distributed systems, real-time telemetry architectures, and production-deployed full-stack solutions.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
              2 Audited Implementations
            </span>
          </div>
        </div>

        {/* Project Cards (Editorial Layout) */}
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project, index) => {
            const isNgo = project.id === 'ngoconnect';

            return (
              <article
                key={project.id}
                className="rounded-2xl bg-[#0E131F] border border-white/10 hover:border-white/20 transition-all p-6 sm:p-8 relative overflow-hidden group shadow-lg"
              >
                {/* Subtle side accent line */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-1 ${
                    isNgo ? 'bg-emerald-500' : 'bg-cyan-500'
                  }`} 
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Column: Problem & Overview */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Category & Badge */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">
                          0{index + 1}. {project.category}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className={`text-xs font-mono px-2 py-0.5 rounded border ${
                          isNgo 
                            ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/40' 
                            : 'bg-cyan-950/40 text-cyan-400 border-cyan-800/40'
                        }`}>
                          {project.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                        <Link 
                          to={project.links.caseStudy}
                          className="hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
                        >
                          <span>{project.name}</span>
                          <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                      </h3>

                      {/* Problem Statement Box */}
                      <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-5 text-sm">
                        <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                          <span>The Engineering Problem</span>
                        </p>
                        <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                          {project.problemStatement}
                        </p>
                      </div>

                      {/* Solution Overview */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {project.solutionOverview}
                      </p>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-3">
                      <Link
                        to={project.links.caseStudy}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-xs sm:text-sm transition-all"
                      >
                        <span>View Deep Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      {project.links.liveDemo && (
                        <a
                          href={project.links.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs sm:text-sm transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Live Web App</span>
                        </a>
                      )}

                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs sm:text-sm transition-colors"
                        >
                          <Github className="w-3.5 h-3.5 text-slate-400" />
                          <span>GitHub Repo</span>
                        </a>
                      )}

                      {project.links.backendGithub && (
                        <a
                          href={project.links.backendGithub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs sm:text-sm transition-colors"
                        >
                          <Github className="w-3.5 h-3.5 text-slate-400" />
                          <span>Backend Repo</span>
                        </a>
                      )}

                      {project.links.androidGithub && (
                        <a
                          href={project.links.androidGithub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs sm:text-sm transition-colors"
                        >
                          <Github className="w-3.5 h-3.5 text-slate-400" />
                          <span>Android Repo</span>
                        </a>
                      )}

                      {project.links.videoDemo && (
                        <a
                          href={project.links.videoDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs sm:text-sm transition-colors"
                        >
                          <Play className="w-3.5 h-3.5 text-red-400" />
                          <span>Video Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Engineering Highlights & Tech Stack */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    
                    {/* Verified Engineering Highlights */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Verified Architectural Highlights</span>
                      </h4>
                      <ul className="space-y-3">
                        {project.engineeringHighlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Tags */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
                        Technologies Deployed
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techTags.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
