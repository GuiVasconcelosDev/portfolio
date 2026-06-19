import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { ExternalLink, Activity, Terminal } from 'lucide-react';

type TabId = 'all' | 'backend' | 'frontend' | 'fullstack' | 'database';

interface TabItem {
  id: TabId;
  label: string;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabId>('all');

  const tabs: TabItem[] = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Fullstack' },
    { id: 'database', label: 'SQL / Bancos' }
  ];

  const filteredProjects = PROJECTS.filter(
    (proj) => activeTab === 'all' || proj.category === activeTab
  );

  return (
    <section id="projects" className="py-24 bg-[#020617] border-t border-slate-900/60 relative">
      <div className="absolute inset-0 bg-radial-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] font-bold block mb-3">
            PORTFÓLIO DE PROJETOS
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-100 tracking-tight">
            Soluções Arquitetadas que Geram Resultados Reais
          </h2>
          <p className="font-sans text-slate-400 mt-4 leading-relaxed font-light text-sm sm:text-base">
            Cada card representa um desafio resolvido com código limpo, foco em performance e métricas de impacto. Filtre por categoria para inspecionar os repositórios oficiais e deploys rápidos.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Dynamic Project Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-14 bg-slate-950/60 p-1.5 rounded-2xl max-w-3xl mx-auto border border-slate-800/80">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[120px] px-4 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-slate-900 text-emerald-400 border border-slate-800 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                key={project.id}
                className="bg-[#0f172a]/80 backdrop-blur-sm border border-slate-800 hover:border-slate-700/80 rounded-2xl overflow-hidden flex flex-col justify-between transition-all hover:shadow-xl group relative"
              >
                {/* Visual Category Label */}
                <div className="absolute top-4 right-4 bg-slate-900/90 text-emerald-400 border border-slate-800 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-bold">
                  {project.category}
                </div>

                <div className="p-6.5 text-left space-y-4">
                  {/* Title & Accent */}
                  <div>
                    <h3 className="font-sans font-extrabold text-slate-100 text-lg group-hover:text-emerald-400 transition-colors pr-10">
                      {project.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-emerald-500 mt-2 rounded-full transition-all group-hover:w-16"></div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-slate-400 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                    {project.description}
                  </p>

                  {/* Architecture spec details */}
                  <div className="bg-[#020617]/50 p-3 rounded-xl border border-slate-850/80 space-y-1.5 text-[11px] font-mono leading-none">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="line-clamp-1">{project.keyArchitecture}</span>
                    </div>
                  </div>

                  {/* Tech badging */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md text-[10px] font-medium border border-slate-850"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer containing performance metrics and links */}
                <div className="px-6.5 pb-6 text-left space-y-4">
                  {/* High KPI Recruiter Highlight */}
                  {project.detailedMetrics && (
                    <div className="bg-emerald-500/5 text-emerald-300 border border-emerald-500/10 px-3.5 py-2.5 rounded-xl flex items-start gap-2 text-xs">
                      <Activity className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-normal font-sans font-medium text-[11px] sm:text-xs">
                        {project.detailedMetrics}
                      </span>
                    </div>
                  )}

                  {/* Project Links CTA */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 py-2.5 rounded-xl text-xs font-semibold transition-all active:scale-97 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      Repositório
                    </a>

                    {project.deployUrl ? (
                      <a
                        href={project.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-97 cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Acessar Demo
                      </a>
                    ) : (
                      <span className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-950/40 text-slate-600 border border-slate-900 py-2.5 rounded-xl text-xs font-mono cursor-not-allowed select-none">
                        Deploy Interno
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* High Conversion Recommendation Grid */}
        <div className="mt-24 border-t border-slate-800/60 pt-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-sans font-black text-2xl text-slate-100 tracking-tight">
              O Que Dizem Líderes Tecnológicos
            </h3>
            <p className="font-sans text-slate-400 text-xs sm:text-sm mt-2">
              Depoimentos reais sobre entregas corporativas, espírito de liderança e metodologias limpas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mari block */}
            <div className="bg-[#0f172a]/70 p-6.5 border border-slate-800 rounded-2xl flex flex-col justify-between text-left space-y-6">
              <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed italic font-light">
                "Dificilmente encontramos profissionais com a flexibilidade do Guilherme. Ele transita de forma impecável na criação de APIs resilientes e escaláveis em Java, ao mesmo tempo em que desenha componentes em React reutilizáveis com animações suaves e interações modernas. É focado em desempenho extrema."
              </p>
              <div className="flex items-center gap-3 border-t border-[#020617] pt-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-sans font-bold text-emerald-400 text-sm">
                  MC
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-100 text-sm">Mariana Costa</h4>
                  <p className="font-sans text-slate-500 text-xs">Head of Engineering @ TechNovation</p>
                </div>
              </div>
            </div>

            {/* Roberto block */}
            <div className="bg-[#0f172a]/70 p-6.5 border border-slate-800 rounded-2xl flex flex-col justify-between text-left space-y-6">
              <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed italic font-light">
                "Como recrutador técnico, o Guilherme me chamou a atenção não apenas pela sólida base teórica e de arquitetura limpa, mas pela sua clareza de comunicação e proatividade. Seus projetos têm documentações primorosas e suas interfaces são extremamente fluídas. Um profissional pronto."
              </p>
              <div className="flex items-center gap-3 border-t border-[#020617] pt-4">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center font-sans font-bold text-teal-400 text-sm">
                  RA
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-100 text-sm">Roberto Alencar</h4>
                  <p className="font-sans text-slate-500 text-xs">Principal Tech Recruiter @ TalentForce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}