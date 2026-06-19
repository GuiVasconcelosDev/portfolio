import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TECH_STACK } from '../data'; 
import type { Skill } from '../data'; 
import { Cpu, LayoutTemplate, Database, Wrench, CheckCircle2 } from 'lucide-react';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'backend' | 'frontend' | 'database' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'Tudo', icon: Cpu },
    { id: 'backend', label: 'Backend (Java/Node)', icon: Cpu },
    { id: 'frontend', label: 'Frontend (React/TS)', icon: LayoutTemplate },
    { id: 'database', label: 'Bancos de Dados', icon: Database },
    { id: 'tools', label: 'Ferramentas & DevOps', icon: Wrench },
  ];

  const filteredSkills = TECH_STACK.filter(
    (skill: Skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 bg-[#020617] relative border-t border-slate-900/60">
      <div className="absolute inset-0 bg-radial-gradient-to-b from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] font-bold block mb-3">
            TECH STACK
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-100 tracking-tight">
            Meu Arsenal de Tecnologias Prontas para Produção
          </h2>
          <p className="font-sans text-slate-400 mt-4 leading-relaxed font-light text-sm sm:text-base">
            Organizado por áreas de foco. Clique nas abas abaixo para filtrar e explorar as tecnologias, frameworks, bancos de dados e competências que aplico no dia a dia corporativo.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill: Skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                key={skill.name}
                className="group relative bg-[#0f172a]/80 backdrop-blur-sm border border-slate-800 hover:border-slate-750/80 p-5.5 rounded-2xl flex flex-col justify-between transition-all hover:translate-y-[-2px] shadow-sm hover:shadow-md"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-sans font-bold text-slate-200 text-base flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {skill.name}
                    </h3>
                  
                    <span className="font-mono text-[11px] font-bold text-slate-400 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-850">
                      {skill.proficiency}% 
                    </span>
                  </div>

                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full"
                    ></motion.div>
                  </div>
                </div>

                <div className="mt-5.5 pt-4 border-t border-slate-850/60 text-left flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-slate-400 leading-relaxed italic">
                    {skill.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Quick Tech Recruiter Note */}
        <div className="mt-16 bg-[#0f172a]/70 border border-slate-800 rounded-2xl p-6.5 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-left">
          <div className="p-3 bg-slate-950 text-emerald-400 rounded-xl border border-slate-850 flex-shrink-0">
            <Cpu className="w-7 h-7" />
          </div>
          <div>
            <h4 className="font-sans font-bold text-slate-200 text-sm sm:text-base">
              Por que essa Tech Stack híbrida (Java / Javascript) é valiosa?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-400 mt-1 font-light leading-relaxed">
              Diferente de profissionais extremamente especializados em apenas um lado da pilha que causam atrasos em integrações, eu domino o ecossistema completo. Posso perfeitamente validar e modelar tabelas SQL, provisionar a segurança OAuth do backend Spring Boot e, em seguida, mapear cada retorno de dados na inteligência gráfica de renderização do React.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}