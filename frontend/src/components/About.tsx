import { useState } from 'react';
import { Server, Layout, Database, FileCheck, Award, GraduationCap, X, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';


interface Benefit {
  title: string;
  desc: string;
}


const PORTFOLIO_BENEFITS: Benefit[] = [
  {
    title: "Entrega de Ponta a Ponta",
    desc: "Domínio completo desde a modelagem do banco de dados até a experiência do usuário final."
  },
  {
    title: "Código Limpo & Testado",
    desc: "Foco em manutenibilidade, padrões de projeto e testes automatizados robustos."
  },
  {
    title: "Otimização de Performance",
    desc: "Redução de gargalos em consultas SQL e renderizações desnecessárias no React."
  },
  {
    title: "Mentalidade de Produto",
    desc: "Alinhamento técnico com os objetivos de negócio para gerar valor real para o cliente."
  }
];

export default function About() {
  const [showCvModal, setShowCvModal] = useState(false);

  const pillars = [
    {
      icon: Server,
      title: 'Backend com Java & Node.js',
      desc: 'Experiência robusta na construção de APIs seguras, aplicando Spring Security, arquitetura de microserviços, filas de processamento e concorrência avançada.'
    },
    {
      icon: Layout,
      title: 'Frontend com React',
      desc: 'Desenvolvimento de interfaces performáticas usando padrões modernos, hooks customizados, gerenciamento de estado complexo e otimização de renderização.'
    },
    {
      icon: Database,
      title: 'Domínio de SQL e Modelagem',
      desc: 'Criação de modelagens relacionais seguras com PostgreSQL e MySQL, otimização de queries lentas e controle rígido através de transações de dados.'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-[#020617] relative border-b border-slate-900/40">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] font-bold block mb-3">
            QUEM SOU EU
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-100 tracking-tight">
            Transitando Entre Sólidos Alicerces Corporativos e Interfaces de Próxima Geração
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Block: Narrative & Key Achievements */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-200">
              Desmistificando a barreira entre o back-end rígido e o front-end fluído.
            </h3>
            <p className="font-sans text-slate-400 leading-relaxed font-light">
              Como desenvolvedor Full-Stack, acredito que uma excelente aplicação nasce da harmonia entre uma API
              de alta disponibilidade e uma interface extremamente intuitiva. Meu dia a dia envolve arquitetar microsserviços
              em <strong className="text-slate-200 font-semibold">Java (Spring Boot)</strong> com alta robustez, cobertura de testes e modularidade, 
              bem como integrar sistemas assíncronos leves em <strong className="text-slate-200 font-semibold">Node.js</strong>.
            </p>
            <p className="font-sans text-slate-400 leading-relaxed font-light">
              No front-end, utilizo o <strong className="text-slate-200 font-semibold">React e TypeScript</strong> como meu ecossistema principal para criar displays interactivos, focando em renderização otimizada, modularidade e UI/UX refinado. Essa ponte me permite entregar valor ponta a ponta sem silos de conhecimento.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_BENEFITS.map((benefit: Benefit, idx: number) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-semibold text-slate-200 text-sm">{benefit.title}</h4>
                    <p className="font-sans text-slate-400 text-xs mt-0.5">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => setShowCvModal(true)}
                className="inline-flex items-center gap-2 bg-slate-900/60 hover:bg-slate-850/80 border border-slate-800 text-slate-100 px-6 py-3 rounded-xl font-sans text-sm font-semibold transition-all hover:border-emerald-500/50 cursor-pointer"
              >
                <FileCheck className="w-4 h-4 text-emerald-400" />
                Visualizar Resumo Profissional / CV
              </button>
            </div>
          </div>

          {/* Right Block: Core Pillars Graphic */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5.5 bg-[#0b1329]/60 backdrop-blur-sm border border-slate-800/80 hover:border-slate-700/80 rounded-2xl flex items-start gap-4 transition-all"
                  >
                    <div className="p-3 bg-[#020617] border border-slate-800/80 text-emerald-400 rounded-xl flex-shrink-0">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-sans font-bold text-slate-200 text-base">{pillar.title}</h4>
                      <p className="font-sans text-slate-400 text-sm mt-1 font-light leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CV Modal / Resume Preview Dialog */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0b1329] border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl relative text-left">
            
            {/* Header */}
            <div className="sticky top-0 bg-[#0b1329] border-b border-slate-800 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="font-sans font-bold text-slate-100 text-base">Currículo Consolidado - Guilherme Vasconcelos</h3>
              </div>
              <button
                onClick={() => setShowCvModal(false)}
                className="p-1 px-[10px] rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Fechar"
              >
                <X className="w-5 h-5 inline" />
              </button>
            </div>

            {/* CV Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Profile Card */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-slate-800/80">
                <div>
                  <h4 className="font-sans font-black text-2xl text-slate-100">{PERSONAL_INFO.name}</h4>
                  <p className="font-mono text-emerald-400 text-xs uppercase tracking-wider mt-1">{PERSONAL_INFO.role}</p>
                  <p className="font-sans text-slate-400 text-xs mt-1.5">{PERSONAL_INFO.location}</p>
                </div>
                <div className="text-xs font-mono text-slate-400 bg-slate-950 p-3 rounded-lg border border-slate-850 space-y-1">
                  <p><strong>E-mail:</strong> {PERSONAL_INFO.email}</p>
                  <p><strong>GitHub:</strong> github.com/GuiVasconcelosDev</p>
                  <p><strong>Disponível:</strong> Imediato</p>
                </div>
              </div>

              {/* Education & Achievements */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-200 font-bold border-b border-slate-800/50 pb-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Experiência Recente de Impacto</span>
                </div>
                <div className="space-y-4 font-sans text-sm">
                  <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-850">
                    <div className="flex justify-between items-start font-medium text-slate-200">
                      <span>Desenvolvedor Full-Stack Jr</span>
                      <span className="font-mono text-xs text-emerald-400">2026- Presente</span>
                    </div>
                    <p className="text-slate-400 text-xs mt-0.5">Empresa de Soluções Enterprise (São Paulo)</p>
                    <ul className="list-disc pl-5 text-slate-400 text-xs space-y-1.5 mt-2.5 font-light">
                      <li>Modernizei o backend monolítico legado em Java 8 para microsserviços reativos estruturados com <strong className="text-slate-300">Java 17 e Spring Boot 3.x</strong>.</li>
                      <li>Liderei a refatoração do frontend chave de visualização de faturamento utilizando <strong className="text-slate-300">React com TypeScript</strong> e renderização cliente protegida por hooks customizados.</li>
                      <li>Implementei fluxos asíncronos com Message Queues, reduzindo em <strong className="text-slate-300">45%</strong> a taxa de requisições concorrentes presas e timeouts.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-850">
                    <div className="flex justify-between items-start font-medium text-slate-200">
                      <span>Desenvolvedor Java/Node.js</span>
                      <span className="font-mono text-xs text-emerald-400">2021 - 2023</span>
                    </div>
                    <p className="text-slate-400 text-xs mt-0.5">Consultoria de Inovação Digital (Remoto)</p>
                    <ul className="list-disc pl-5 text-slate-400 text-xs space-y-1.5 mt-2.5 font-light">
                      <li>Escrevi APIs de alto volume de transações com Node.js e Express, otimizando consultas PostgreSQL, reduzindo tempos de resposta lentos de 2s para <strong className="text-slate-200">180ms</strong>.</li>
                      <li>Criação de dashboards gerenciais ricos em gráficos com React, Recharts e modelagem relacional estrita.</li>
                    </ul>https://github.com/GuiVasconcelosDev
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-200 font-bold border-b border-slate-800/50 pb-2">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>Educação e Certificações</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-slate-400">
                  <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-850">
                    <p className="font-bold text-slate-200">Tecnólogo em Análise e Desenvolvimento de Sistemas</p>
                    <p>Universidade Uninassau (2025 - 2027)</p>
                  </div>
                  <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-850 space-y-1">
                    <p className="font-bold text-slate-200">Certificações Principais:</p>
                    <p className="text-[11px] font-mono text-emerald-400">• Oracle Certified Professional: Java Programmer</p>
                    <p className="text-[11px] font-mono text-emerald-400">• AWS Certified Developer Associate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer containing quick action */}
            <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 text-right flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs text-slate-500">Este portfólio autogere de forma dinâmica este resumo corporativo.</span>
              <button
                onClick={() => {
                  window.print();
                }}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2 rounded-lg font-sans text-xs font-bold transition-all cursor-pointer"
              >
                Imprimir ou Salvar PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}