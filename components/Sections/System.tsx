import React from 'react';
import { StatusMessage } from '../UI/StatusMessage';
import { useLanguage } from '../../context/LanguageContext';

export const System: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="system" className="py-24 px-4 bg-gradient-to-b from-[#050508] to-[#0f0f1a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-serif">{t.systemSection.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* HUD Explanation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-constellation-accent">{t.systemSection.hudTitle}</h3>
            <p className="text-gray-400 leading-relaxed">
              {t.systemSection.hudDesc}
            </p>
            
            <div className="glass-panel p-6 font-mono text-sm leading-loose rounded-lg border border-white/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-red-500/20 text-red-300 px-2 py-1 text-xs">{t.systemSection.hudLive}</div>
               <div className="text-gray-500 mb-2">{t.systemSection.hudLocation}</div>
               <div className="flex items-center gap-4 text-lg mb-2">
                 <span>{t.systemSection.hudStatus}</span>
                 <span className="text-green-400">📶 ON</span>
               </div>
               <div className="flex gap-4 text-sm border-b border-gray-700 pb-2 mb-2">
                 <span>{t.systemSection.hudRankS}</span>
                 <span>{t.systemSection.hudRank1}</span>
                 <span className="text-yellow-500">{t.systemSection.hudAttunementLow}</span>
               </div>
               <div className="text-constellation-accent">{t.systemSection.hudSkill}</div>
               <div className="text-gray-400">{t.systemSection.hudTarget}</div>
               <div className="text-yellow-500 mt-2">{t.systemSection.hudCredit}</div>
            </div>

            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20 text-sm">
                <strong className="text-blue-300 block mb-1">{t.systemSection.translatorTipTitle}</strong>
                <p className="text-gray-400 leading-relaxed">
                    {t.systemSection.translatorTipDesc}
                </p>
            </div>
          </div>

          {/* Gag Mechanic Explanation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-constellation-accent">{t.systemSection.gagTitle}</h3>
            <p className="text-gray-400 leading-relaxed">
              {t.systemSection.gagDesc}
            </p>
            
            <div className="space-y-4">
                <StatusMessage 
                    title={t.systemSection.statusTitle}
                    content={t.systemSection.statusContent}
                    ascii={`   (  💥  )
  /   |   \\
 (   💣   ) `}
                    subtext={t.systemSection.statusSubtext}
                />
                
                <div className="flex flex-col gap-2 pl-8 border-l-2 border-dashed border-gray-700">
                    <div className="text-sm text-gray-500 italic">{t.systemSection.userInterp}</div>
                    <div className="text-sm text-red-400 font-bold">{t.systemSection.realIntent}</div>
                    <div className="text-sm text-white bg-white/10 p-3 rounded leading-relaxed">
                        {t.systemSection.resultPrefix}<span className="text-yellow-400">{t.systemSection.resultHighlight}</span>{t.systemSection.resultSuffix}
                        <br/><span className="text-xs text-gray-400">{t.systemSection.resultSubtext}</span>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
