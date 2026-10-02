import React, { useState, useEffect } from 'react';
import { Hero } from './components/Sections/Hero';
import { Character } from './components/Sections/Character';
import { World } from './components/Sections/World';
import { System } from './components/Sections/System';
import { Prologue } from './components/Sections/Prologue';
import { Menu, X, ExternalLink, Sparkles } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Language } from './i18n/translations';

const MainContent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.character, id: 'character' },
    { label: t.nav.world, id: 'world' },
    { label: t.nav.system, id: 'system' },
    { label: t.nav.prologue, id: 'prologue' },
  ];

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'ko', label: 'KO' },
    { code: 'en', label: 'EN' },
    { code: 'ja', label: 'JP' },
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-slate-200 selection:bg-constellation-accent selection:text-black font-sans">
      
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050508]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-serif font-bold text-2xl tracking-tight text-white cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
            SILENT<span className="text-constellation-accent">.VOW</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm font-medium text-gray-400 hover:text-constellation-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-white/5 p-1 rounded-lg border border-white/10" role="group" aria-label="Language selection">
              {languages.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLanguage(code)}
                  className={`px-2.5 py-1 text-xs font-mono font-bold rounded transition-all ${
                    language === code
                      ? 'bg-constellation-accent text-black shadow-md shadow-blue-500/20'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  aria-pressed={language === code}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Right Controls: Language Switcher + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center bg-white/5 p-0.5 rounded-lg border border-white/10" role="group" aria-label="Language selection">
              {languages.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLanguage(code)}
                  className={`px-2 py-0.5 text-xs font-mono font-bold rounded transition-all ${
                    language === code
                      ? 'bg-constellation-accent text-black shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  aria-pressed={language === code}
                >
                  {label}
                </button>
              ))}
            </div>

            <button className="text-white p-1" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0a0a12] border-b border-white/10 p-4 md:hidden flex flex-col gap-4 shadow-2xl">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-300 hover:text-white py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Prologue />
        <Character />
        <World />
        <System />

        {/* Other Constellations CTA */}
        <section className="py-20 px-4 text-center border-t border-white/5 bg-gradient-to-b from-[#0f0f1a] to-[#050508] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.1),transparent_70%)] pointer-events-none"></div>
          <div className="max-w-3xl mx-auto relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-mono">
              <Sparkles size={14} className="animate-pulse" />
              <span>{t.otherConstellations.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white tracking-tight">
              {t.otherConstellations.title}
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
              {t.otherConstellations.description}
            </p>
            <div className="pt-2">
              <a
                href="https://ss-three-gray.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <span>{t.otherConstellations.button}</span>
                <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/5 px-4">
        <p>{t.footer.rights}</p>
        <p className="mt-2">{t.footer.promo}</p>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default App;
