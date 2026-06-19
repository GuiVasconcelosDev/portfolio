import { motion } from 'motion/react';
import { Terminal, ArrowRight, Cpu, Flame, Database, ShieldCheck } from 'lucide-react'; // Removidos Github e Linkedin daqui
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  } as const;

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-16 flex items-center justify-center bg-[#020617] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#1e293b_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-20"></div>
      
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs text-slate-300 font-medium whitespace-nowrap">
              {PERSONAL_INFO.status}
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="font-mono text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">
              Olá, eu sou
            </h2>
            <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-slate-100 tracking-tight leading-[1.1]">
              <span className="text-white">{PERSONAL_INFO.name}</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-300 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed font-light"
          >
            {PERSONAL_INFO.specialty}. Transitando sem atrito entre sistemas eficientes de backend com <strong className="text-slate-200 font-medium">Java Spring Boot</strong> e interfaces ricas e modulares em <strong className="text-slate-200 font-medium">React & TypeScript</strong>.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mt-2 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3.5 rounded-xl font-sans text-sm font-bold transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-97 cursor-pointer w-full sm:w-auto"
            >
              Ver Projetos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white px-6 py-3.5 rounded-xl font-sans text-sm font-semibold transition-all active:scale-97 cursor-pointer w-full sm:w-auto"
            >
              Falar de Vaga
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mt-4 text-slate-500"
          >
            <span className="font-mono text-xs tracking-wider uppercase">Matches Rápidos:</span>
            <div className="flex gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 bg-slate-900 hover:bg-slate-800 hover:text-emerald-400 border border-slate-800/80 rounded-lg transition-all flex items-center justify-center"
                title="GitHub Profile"
              >
                
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 bg-slate-900 hover:bg-slate-800 hover:text-emerald-400 border border-slate-800/80 rounded-lg transition-all flex items-center justify-center"
                title="LinkedIn Profile"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 40 }}
          className="lg:col-span-5 relative"
        >

          <div className="relative bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6.5 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest flex items-center gap-1 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                system_specs.sh
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <Cpu className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-sans font-medium text-purple-200 text-xs">Desenvolvimento de APIs robustas</h4>
                  <p className="font-mono text-slate-400 text-[11px] mt-0.5">Java / Spring Boot / Spring Security + JWT</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-500 mt-0.5">
                  <Database className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-sans font-medium text-slate-200 text-xs">Modelagem de Banco de Dados</h4>
                  <p className="font-mono text-slate-400 text-[11px] mt-0.5">PostgreSQL / MySQL, Otimização de Índices e ACID</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5">
                  <Flame className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-sans font-medium text-slate-200 text-xs">Interfaces SPA / SSR Modernas</h4>
                  <p className="font-mono text-slate-400 text-[11px] mt-0.5">React v19, TypeScript, Tailwind CSS, Performance</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-sans font-medium text-slate-200 text-xs">Padrões de Qualidade & Testes</h4>
                  <p className="font-mono text-slate-400 text-[11px] mt-0.5">Testes Unitários / Integração (JUnit 5, Mockito, Jest)</p>
                </div>
              </div>
            </div>

            <div className="mt-5.5 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-4">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-left">
                <span className="font-mono text-[9px] text-slate-500 block uppercase tracking-wider">PREPARED EXP</span>
                <span className="font-sans font-bold text-lg text-slate-100">{PERSONAL_INFO.experienceYears}+ Anos</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-left">
                <span className="font-mono text-[9px] text-slate-500 block uppercase tracking-wider">PROJECT DEP</span>
                <span className="font-sans font-bold text-lg text-emerald-400">100% Produção</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}