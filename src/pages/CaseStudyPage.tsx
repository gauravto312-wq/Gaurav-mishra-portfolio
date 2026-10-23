import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  AlertTriangle, 
  Database, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Play, 
  Tag, 
  ArrowRight
} from 'lucide-react';
import { NGO_CONNECT_CASE_STUDY, SAFEWALK_CASE_STUDY, CaseStudyData } from '../data/projectCaseStudies';
import { MermaidDiagram } from '../components/MermaidDiagram';
import { BackendStatusIndicator } from '../components/BackendStatusIndicator';

export const CaseStudyPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  let data: CaseStudyData | null = null;
  if (projectId === 'ngoconnect') {
    data = NGO_CONNECT_CASE_STUDY;
  } else if (projectId === 'safewalk') {
    data = SAFEWALK_CASE_STUDY;
  }

  if (!data) {
    return <Navigate to="/" replace />;
  }

  const isNgo = data.id === 'ngoconnect';
  const otherProjectSlug = isNgo ? 'safewalk' : 'ngoconnect';
  const otherProjectName = isNgo ? 'SafeWalk' : 'NGOConnect';

  return (
    <article className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Bar */}
        <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-emerald-400" />
            <span>Back to Projects Overview</span>
          </Link>
          <span className="text-xs font-mono text-slate-500">
            Case Study • {data.category}
          </span>
        </div>

        {/* Hero Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`text-xs font-mono px-2.5 py-0.5 rounded border ${
              isNgo 
                ? 'bg-emerald-950/50 text-emerald-300 border-emerald-800/50' 
                : 'bg-cyan-950/50 text-cyan-300 border-cyan-800/50'
            }`}>
              {data.badge}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-mono text-slate-400">
              {data.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            {data.title}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-300 mb-6 font-mono leading-relaxed">
            {data.subtitle}
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl border-l-2 border-emerald-500/50 pl-4 py-1 italic">
            "{data.headlineSummary}"
          </p>

          {/* Verified Links Toolbar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3">
            {data.verifiedLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs sm:text-sm font-medium transition-colors"
              >
                {link.type === 'github' && <Github className="w-4 h-4 text-slate-400" />}
                {link.type === 'live' && <ExternalLink className="w-4 h-4 text-emerald-400" />}
                {link.type === 'video' && <Play className="w-4 h-4 text-red-400" />}
                {link.type === 'release' && <Tag className="w-4 h-4 text-cyan-400" />}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </header>

        {/* Section 1: Problem Statement */}
        <section className="mb-14 border-b border-white/5 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400">01.</span>
            <span>Problem Statement & Context</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            {data.problemStatement.overview}
          </p>
          <div className="p-5 rounded-xl bg-[#0E131F] border border-white/10">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Core Technical Challenges
            </h3>
            <ul className="space-y-2">
              {data.problemStatement.keyChallenges.map((challenge, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2: Target Users & Requirements */}
        <section className="mb-14 border-b border-white/5 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400">02.</span>
            <span>Target Users & System Personas</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.targetUsers.map((user, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0E131F] border border-white/5">
                <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{user.role}</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {user.needs}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Implemented Features */}
        <section className="mb-14 border-b border-white/5 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400">03.</span>
            <span>Verified Implemented Features</span>
          </h2>
          <div className="space-y-6">
            {data.implementedFeatures.map((group, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#0E131F] border border-white/5">
                <h3 className="text-sm sm:text-base font-semibold text-white mb-3">
                  {group.category}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Verified Technology Stack */}
        <section className="mb-14 border-b border-white/5 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400">04.</span>
            <span>Technology Stack & Layer Responsibilities</span>
          </h2>
          <div className="space-y-3">
            {data.techStack.map((stack, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0E131F] border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="md:w-1/3">
                  <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
                    {stack.layer}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {stack.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:w-2/3 text-xs sm:text-sm text-slate-300 leading-relaxed border-t md:border-t-0 md:border-l border-white/5 pt-2 md:pt-0 md:pl-4">
                  {stack.purpose}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Architecture Diagram */}
        <section className="mb-14 border-b border-white/5 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400">05.</span>
            <span>System Architecture Diagram</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-4">
            Component topology, security filters, database layers, and asynchronous messaging pipelines verified in source code.
          </p>
          <MermaidDiagram
            chart={data.architectureDiagramMermaid}
            caption={`${data.title} Architecture Blueprint & Communication Topology`}
          />
        </section>

        {/* Section 6: Component Responsibilities */}
        <section className="mb-14 border-b border-white/5 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400">06.</span>
            <span>Component & Service Responsibilities</span>
          </h2>
          <div className="space-y-3">
            {data.componentResponsibilities.map((comp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0E131F] border border-white/5">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-sm font-bold text-white font-mono">{comp.name}</span>
                  <span className="text-xs text-slate-500 font-mono">({comp.role})</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Key Request & Data Flows */}
        <section className="mb-14 border-b border-white/5 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400">07.</span>
            <span>Important Request & Data Flows</span>
          </h2>
          <div className="space-y-6">
            {data.keyDataFlows.map((flow, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#0E131F] border border-white/10">
                <h3 className="text-sm sm:text-base font-semibold text-white mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>{flow.title}</span>
                </h3>
                <ol className="space-y-3">
                  {flow.steps.map((step, sIdx) => (
                    <li key={sIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-[11px] text-emerald-400 shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Database & Persistence Design */}
        <section className="mb-14 border-b border-white/5 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400">08.</span>
            <span>Database & Persistence Design</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            {data.databaseDesign.overview}
          </p>
          <div className="space-y-3">
            {data.databaseDesign.tables.map((tbl) => (
              <div key={tbl.name} className="p-4 rounded-xl bg-[#0E131F] border border-white/5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-sm font-bold font-mono text-white">{tbl.name}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    PK: {tbl.primaryKey}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mb-2 leading-relaxed">
                  {tbl.description}
                </p>
                {tbl.foreignKeys && (
                  <p className="text-xs font-mono text-slate-500 pt-1.5 border-t border-white/5">
                    Foreign Keys: {tbl.foreignKeys}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 9: Security Architecture */}
        <section className="mb-14 border-b border-white/5 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400">09.</span>
            <span>Security Architecture & Access Control</span>
          </h2>
          <div className="p-5 rounded-xl bg-[#0E131F] border border-white/10">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{data.securityArchitecture.title}</span>
            </h3>
            <ul className="space-y-3">
              {data.securityArchitecture.mechanisms.map((mech, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>{mech}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 10: Deployment Architecture */}
        <section className="mb-14 border-b border-white/5 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400">10.</span>
            <span>Deployment Architecture & Verified Status</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.deploymentTopology.map((dep, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0E131F] border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-white tracking-tight">{dep.service}</h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                      {dep.platform}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {dep.role}
                  </p>
                </div>
                {dep.isBackend ? (
                  <BackendStatusIndicator
                    hasHealthEndpoint={dep.hasHealthEndpoint}
                    healthEndpoint={dep.healthEndpoint}
                  />
                ) : (
                  dep.verifiedUrl && (
                    <div className="mt-4 pt-2 border-t border-white/5">
                      <a
                        href={dep.verifiedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-emerald-400 hover:underline inline-flex items-center gap-1"
                      >
                        <span>Verified Destination</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 11: Engineering Decisions & Trade-Offs */}
        <section className="mb-14 border-b border-white/5 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400">11.</span>
            <span>Engineering Decisions & Trade-Offs</span>
          </h2>
          <div className="space-y-4">
            {data.engineeringTradeOffs.map((to, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#0E131F] border border-white/5">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                  {to.decision}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 text-xs">
                  <div className="p-3 rounded bg-emerald-950/20 border border-emerald-800/30">
                    <span className="font-mono text-emerald-400 uppercase tracking-wider block mb-1">Chosen Solution</span>
                    <span className="text-slate-300">{to.chosenSolution}</span>
                  </div>
                  <div className="p-3 rounded bg-white/5 border border-white/10">
                    <span className="font-mono text-slate-400 uppercase tracking-wider block mb-1">Alternative Evaluated</span>
                    <span className="text-slate-300">{to.alternativeConsidered}</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong className="text-white">Architectural Reasoning:</strong> {to.reasoning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 12: Verified Limitations & Future Improvements */}
        <section className="mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400">12.</span>
            <span>Known Limitations & Future Roadmap</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Known Limitations */}
            <div className="p-5 rounded-xl bg-[#0E131F] border border-amber-500/20">
              <h3 className="text-sm font-semibold text-amber-400 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Audited Technical Limitations</span>
              </h3>
              <ul className="space-y-2">
                {data.knownLimitations.map((lim, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Improvements */}
            <div className="p-5 rounded-xl bg-[#0E131F] border border-emerald-500/20">
              <h3 className="text-sm font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Future Architectural Proposals</span>
              </h3>
              <ul className="space-y-2">
                {data.futureImprovements.map((imp, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <footer className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>

          <Link
            to={`/projects/${otherProjectSlug}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs sm:text-sm font-medium transition-colors"
          >
            <span>Next Case Study: {otherProjectName}</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </footer>

      </div>
    </article>
  );
};
