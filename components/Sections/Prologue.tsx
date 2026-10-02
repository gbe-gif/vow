import React from 'react';
import { StatusMessage } from '../UI/StatusMessage';
import { useLanguage } from '../../context/LanguageContext';

export const Prologue: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="prologue" className="py-24 px-4 bg-black relative">
       <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
              <span className="text-constellation-accent font-mono tracking-widest text-sm">{t.prologue.tag}</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white font-serif">{t.prologue.title}</h2>
              <div className="h-1 w-20 bg-constellation-accent mx-auto"></div>
          </div>

          <div className="space-y-6">
              <div className="text-center pb-8">
                 <p className="font-serif text-lg text-gray-400 italic whitespace-pre-line leading-relaxed">
                   {t.prologue.intro}
                 </p>
              </div>

              <StatusMessage 
                title={t.hero.statusTitle}
                content={t.prologue.status1Content}
                subtext={t.prologue.status1Subtext}
              />

              <p className="font-serif text-gray-300 italic px-4 text-center leading-loose py-4 whitespace-pre-line">
                  {t.prologue.quote}
              </p>

              <StatusMessage 
                title={t.hero.statusTitle}
                content={t.prologue.status2Content}
                ascii={`  /)/)
 ( . .)  ✨
(  >❤️< )
 o((")(")`}
                subtext={t.prologue.status2Subtext}
              />
              
               <StatusMessage 
                title={t.hero.statusTitle}
                content={t.prologue.status3Content}
                subtext={t.prologue.status3Subtext}
                className="border-l-yellow-500"
              />
          </div>
          
          <div className="text-center pt-12">
            <p className="text-2xl font-bold text-white mb-6 font-serif">{t.prologue.ending}</p>
          </div>
       </div>
    </section>
  );
};
