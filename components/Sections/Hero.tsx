import React from 'react';
import { ArrowDown } from 'lucide-react';
import { StatusMessage } from '../UI/StatusMessage';
import { useLanguage } from '../../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToStart = () => {
    const element = document.getElementById('prologue');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10 overflow-hidden text-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050508] to-[#050508] -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="mb-6 animate-float">
        <span className="px-3 py-1 rounded-full border border-constellation-accent/30 bg-blue-900/20 text-constellation-accent text-xs font-mono">
          {t.hero.badge}
        </span>
      </div>

      <h1 className="font-serif text-5xl md:text-8xl font-black mb-6 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400 drop-shadow-2xl">
        {t.hero.titleMain}<br />
        <span className="text-constellation-accent drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]">{t.hero.titleAccent}</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 font-light font-sans whitespace-pre-line leading-relaxed">
        {t.hero.description}
      </p>

      <StatusMessage 
        title={t.hero.statusTitle}
        content={<>{t.hero.statusContent}</>}
        subtext={t.hero.statusSubtext}
        className="animate-pulse-slow"
      />

      <button 
        onClick={scrollToStart}
        className="mt-12 group flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-white transition-colors"
      >
        {t.hero.scrollDown}
        <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
      </button>
    </section>
  );
};
