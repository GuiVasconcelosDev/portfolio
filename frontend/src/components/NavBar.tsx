import { useState, useEffect } from 'react';
import { Terminal, Code2, Briefcase, Mail, FileText, Menu, X, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Sobre Mim', href: '#sobre', icon: FileText },
    { label: 'Tecnologias', href: '#skills', icon: Code2 },
    { label: 'Projetos', href: '#projects', icon: Briefcase },
    { label: 'Contato', href: '#contact', icon: Mail },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020617]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo/Name */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <span className="font-sans font-bold text-slate-100 tracking-tight block leading-none">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-[10px] text-emerald-400 font-medium tracking-widest uppercase">
              Full-Stack Eng
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1 bg-[#020617]/60 p-1 rounded-full border border-slate-800/50">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full font-sans text-sm text-slate-300 hover:text-white transition-all hover:bg-slate-800/50 group"
                  >
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#recruiter-console"
            className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 px-5.5 py-2 rounded-full font-sans text-sm font-semibold shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/25 active:scale-97 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Vaga Aberta?
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#recruiter-console"
            className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold hover:bg-emerald-500/20 transition-all cursor-pointer"
          >
            Vaga Aberta?
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-lg transition-all focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#020617] border-b border-slate-800/80 shadow-xl px-6 py-6 flex flex-col gap-5 transition-all animate-fade-in">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl font-sans text-base text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
                  >
                    <Icon className="w-5 h-5 text-emerald-400" />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#recruiter-console"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 py-3.5 rounded-xl font-sans text-base font-semibold text-center transition-all cursor-pointer"
          >
            <Sparkles className="w-5 h-5" />
            Área do Recrutador (Contatos rápidos)
          </a>
        </div>
      )}
    </nav>
  );
}
