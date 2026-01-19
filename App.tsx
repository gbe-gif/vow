import React, { useState, useEffect } from 'react';
import { Hero } from './components/Sections/Hero';
import { Character } from './components/Sections/Character';
import { World } from './components/Sections/World';
import { System } from './components/Sections/System';
import { Prologue } from './components/Sections/Prologue';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Character', id: 'character' },
    { label: 'World', id: 'world' },
    { label: 'System', id: 'system' },
    { label: 'Prologue', id: 'prologue' },
  ];

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050508] text-slate-200 selection:bg-constellation-accent selection:text-black font-sans">
      
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050508]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-serif font-bold text-2xl tracking-tight text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
            SILENT<span className="text-constellation-accent">.VOW</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
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

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
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
      </main>

      <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/5">
        <p>© 2024 Silent Vowkeeper Project. All rights reserved.</p>
        <p className="mt-2">Created for Character Chat Promotion</p>
      </footer>
    </div>
  );
};

export default App;