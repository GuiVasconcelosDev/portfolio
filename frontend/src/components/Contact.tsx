import React, { useState } from 'react';
import { Mail, Send, Check, Building2, Sparkles, MessageSquareDot } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import.meta.env.VITE_API_URL;

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Proposta de Vaga',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Recruiter Speed Tool States
  const [companyName, setCompanyName] = useState('');
  const [roleType, setRoleType] = useState('Remote');
  const [stackPreference, setStackPreference] = useState('Full-stack');
  const [minSalaryRange, setMinSalaryRange] = useState('R$ 10.000 - R$ 14.000');
  const [generatedMessage, setGeneratedMessage] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      return;
    }
    setIsSubmitting(true);
    
    const timestamp = new Date().toISOString();
    const payload = { ...formState, timestamp };

    // Grateful local backup as audit log
    const contacts = JSON.parse(localStorage.getItem('portfolio_contacts') || '[]');
    contacts.push(payload);
    localStorage.setItem('portfolio_contacts', JSON.stringify(contacts));

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contato`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState)
      });
      if (response.ok) {
        console.log('Mensagem de contato salva com sucesso no backend Spring Boot!');
      }
    } catch (err) {
      console.warn('Backend off-line ou inalcançável. Gravando em LocalStorage como fallback local.', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: 'Proposta de Vaga', message: '' });
    }
  };

  const handleGenerateProposal = async () => {
    const rawCompany = companyName.trim() || 'Nossa Empresa';
    const msg = `Olá Guilherme, sou Recrutador(a) na ${rawCompany}. Estou buscando um profissional ${stackPreference} com experiência em Java/Spring e React para atuação em modelo ${roleType}. A faixa salarial é de ${minSalaryRange}. Analisamos seu portfólio corporativo e gostamos muito da sua stack técnica!`;
    setGeneratedMessage(msg);

    // Persist recruiter proposal log in backend
    const bodyPayload = {
      companyName: rawCompany,
      roleType,
      stackPreference,
      minSalaryRange,
      fullProposalText: msg
    };

    // Keep safe fallback inside localStorage
    const savedProposals = JSON.parse(localStorage.getItem('portfolio_proposals') || '[]');
    savedProposals.push({ ...bodyPayload, timestamp: new Date().toISOString() });
    localStorage.setItem('portfolio_proposals', JSON.stringify(savedProposals));

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/propostas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyPayload)
      });
      if (response.ok) {
        console.log('Proposta expressa persistida no banco do backend Spring Boot!');
      }
    } catch (err) {
      console.warn('Backend off-line. Armazenado localmente em cache para dev.', err);
    }
  };

  const handleTriggerWhatsApp = () => {
    const textToSend = encodeURIComponent(generatedMessage || `Olá Guilherme, vi seu portfólio e gostaria de bater um papo no WhatsApp sobre novas oportunidades de projetos Full-Stack!`);
    window.open(`https://wa.me/5584986355327?text=${textToSend}`, '_blank');
  };

  const handleTriggerEmail = () => {
    const subjectLine = encodeURIComponent(`Oportunidade Full-Stack na empresa ${companyName || 'Corporativa'}`);
    const bodyLine = encodeURIComponent(generatedMessage || `Olá Guilherme, vi seu portfolio e gostaria de marcar uma conversa!`);
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subjectLine}&body=${bodyLine}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#020617] relative border-t border-slate-900/60">
      <div className="absolute inset-0 bg-radial-gradient-to-t from-emerald-950/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] font-bold block mb-3">
            CONTATO & ENGAJAMENTO
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-100 tracking-tight">
            Vamos Iniciar um Projeto Juntos?
          </h2>
          <p className="font-sans text-slate-400 mt-4 leading-relaxed font-light text-sm sm:text-base">
            Seja para uma vaga Full-Time, consultoria especializada em Java/React ou tirar dúvidas técnicas, estou de prontidão. Use o formulário ou a ferramenta de proposta expressa abaixo.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Outer Grid split: Form vs Recruiter express matches */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Direct Contact Cards & Standard Form */}
          <div className="lg:col-span-6 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-5 bg-[#0f172a]/60 hover:bg-[#0f172a]/80 border border-slate-800 hover:border-slate-700/80 rounded-2xl flex items-center gap-4 transition-all text-left block"
              >
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block font-bold">Email Direto</span>
                  <span className="font-sans font-semibold text-slate-200 text-sm">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="p-5 bg-[#0f172a]/60 hover:bg-[#0f172a]/80 border border-slate-800 hover:border-slate-700/80 rounded-2xl flex items-center gap-4 transition-all text-left block"
              >
                {/* SVG Nativo do LinkedIn substituindo o componente instável da biblioteca */}
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block font-bold">LinkedIn</span>
                  <span className="font-sans font-semibold text-slate-200 text-sm">Conectar Profissionalmente</span>
                </div>
              </a>
            </div>

            {/* Standard Form Case */}
            <div className="bg-[#0f172a]/70 border border-slate-800 rounded-2xl p-6 sm:p-8 text-left">
              <h3 className="font-sans font-extrabold text-slate-200 text-lg mb-6 flex items-center gap-2">
                <MessageSquareDot className="w-5 h-5 text-emerald-400" />
                Enviar Mensagem Curta
              </h3>

              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 p-6 rounded-xl space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center font-bold">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-base">Mensagem Enviada!</h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">
                    Obrigado por entrar em contato. Os dados foram persistidos e entrarei em contato o mais breve possível. Sinta-se à vontade para me acionar pelo WhatsApp para agilizar.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-emerald-400 text-xs font-semibold underline cursor-pointer bg-transparent border-none p-0"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1.5" htmlFor="form-name">
                        Seu Nome *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Ex: Mariana Costa"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/50 rounded-xl px-4 py-3 font-sans text-slate-200 text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1.5" htmlFor="form-email">
                        Seu E-mail *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="Ex: mariana@empresa.com"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/50 rounded-xl px-4 py-3 font-sans text-slate-200 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1.5" htmlFor="form-subject">
                      Assunto
                    </label>
                    <input
                      id="form-subject"
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Ex: Oportunidade de Projeto Java/React"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/50 rounded-xl px-4 py-3 font-sans text-slate-200 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1.5" htmlFor="form-message">
                      Mensagem / Detalhes *
                    </label>
                    <textarea
                      id="form-message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Descreva brevemente seu projeto ou perfil da vaga técnica..."
                      className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/50 rounded-xl px-4 py-3 font-sans text-slate-200 text-sm outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-3 rounded-xl font-sans text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer disabled:opacity-55"
                  >
                    {isSubmitting ? 'Enviando dados...' : 'Enviar Mensagem Detalhada'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Block: Pure conversion tool: Recruiter Proposal Speed Generator */}
          <div id="recruiter-console" className="lg:col-span-6">
            <div className="bg-[#0f172a]/70 border border-emerald-500/20 shadow-xl shadow-emerald-500/2 rounded-2xl p-6 sm:p-8 text-left space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
                <div className="p-2 bg-emerald-500/10 text// Mantemos apenas o PERSONAL_INFO que o TS já reconhece e valida com sucesso-emerald-400 rounded-lg">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-slate-100 text-base flex items-center gap-1.5">
                    Painel do Recrutador Sênior
                    <span className="bg-emerald-400/10 text-emerald-400 text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded border border-emerald-400/25">Express</span>
                  </h3>
                  <p className="font-sans text-[11px] text-slate-400 mt-0.5 font-light">
                    Evite copiar e colar! Modele a vaga e envie a proposta pré-formatada em apenas 2 cliques.
                  </p>
                </div>
              </div>

              {/* Input params */}
              <div className="space-y-4">
                <div>
                  <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-wider mb-1.5" htmlFor="rec-company">
                    NOME DA COMPANHIA / CONSULTORIA
                  </label>
                  <input
                    id="rec-company"
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Ex: Banco Itaú, Startup Digital, Talent Agency"
                    className="w-full bg-[#020617] border border-slate-800 focus:border-emerald-500/50 rounded-xl px-3.5 py-2.5 font-sans text-slate-200 text-xs sm:text-sm outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-wider mb-1.5" htmlFor="rec-model">
                      MODELO DE ATUAÇÃO
                    </label>
                    <select
                      id="rec-model"
                      value={roleType}
                      onChange={(e) => setRoleType(e.target.value)}
                      className="w-full bg-[#020617] border border-slate-800 focus:border-emerald-500/50 rounded-xl px-3.5 py-2.5 font-sans text-slate-300 text-xs sm:text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="Remoto Integral">100% Remoto</option>
                      <option value="Híbrido (SP)">Híbrido (São Paulo)</option>
                      <option value="Híbrido (Flexível)">Híbrido (Flexível)</option>
                      <option value="Presencial SP">Presencial (São Paulo)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-wider mb-1.5" htmlFor="rec-stack">
                      STACK TECNOLÓGICA EXIGIDA
                    </label>
                    <select
                      id="rec-stack"
                      value={stackPreference}
                      onChange={(e) => setStackPreference(e.target.value)}
                      className="w-full bg-[#020617] border border-slate-800 focus:border-emerald-500/50 rounded-xl px-3.5 py-2.5 font-sans text-slate-300 text-xs sm:text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="Backend Java/Spring Sênior">Backend Especialista (Java/Spring)</option>
                      <option value="Full-Stack Java + React">Full-Stack (Java + React/TS)</option>
                      <option value="Sênior Backend Node/TS">Backend JavaScript (Node/Express)</option>
                      <option value="Líder e Engenharia do Produto">Tech Lead / Squad Leader</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-wider mb-1.5" htmlFor="rec-salary">
                    FAIXA SALARIAL ESTIMADA (CLT / PJ)
                  </label>
                  <select
                    id="rec-salary"
                    value={minSalaryRange}
                    onChange={(e) => setMinSalaryRange(e.target.value)}
                    className="w-full bg-[#020617] border border-slate-800 focus:border-emerald-500/50 rounded-xl px-3.5 py-2.5 font-sans text-slate-300 text-xs sm:text-sm outline-none transition-all cursor-pointer"
                  >
                    <option value="R$ 10.000 - R$ 13.000 CLT ou Equivalente">R$ 10.000 a R$ 13.000 CLT</option>
                    <option value="R$ 14.000 - R$ 18.000 CLT ou Equivalente">R$ 14.000 a R$ 18.000 CLT</option>
                    <option value="R$ 80 - R$ 100 por hora PJ">R$ 80 a R$ 100/hora PJ</option>
                    <option value="R$ 110 - R$ 140 por hora PJ">R$ 110 a R$ 140/hora PJ</option>
                    <option value="A negociar de acordo com a senioridade">A combinar / Sob orçamento</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={handleGenerateProposal}
                  className="w-full bg-slate-950 hover:bg-slate-900 hover:border-emerald-500/50 text-slate-200 py-2.5 rounded-xl border border-slate-800 font-sans text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Gerar Convite Formatado para Guilherme
                </button>
              </div>

              {/* Output Preview */}
              {generatedMessage && (
                <div className="space-y-4">
                  <div className="bg-slate-950 border border-slate-900 rounded-xl p-4 text-left">
                    <span className="font-mono text-[9px] text-slate-500 block uppercase tracking-wider mb-2 font-bold">PREVISÃO DA MENSAGEM:</span>
                    <p className="font-sans text-xs text-slate-300 leading-relaxed font-light select-all">
                      {generatedMessage}
                    </p>
                  </div>

                  {/* Actions buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleTriggerWhatsApp}
                      className="cursor-pointer bg-emerald-500 hover:bg-emerald-450 text-slate-950 py-2.5 px-4 rounded-xl font-sans text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 border-none"
                    >
                      Disparar via WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={handleTriggerEmail}
                      className="cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-slate-950 py-2.5 px-4 rounded-xl font-sans text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 border-none"
                    >
                      Enviar Proposta E-mail
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}