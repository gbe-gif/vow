import React, { useState } from 'react';
import { Globe, Coins, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const World: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('world');

  const tabs = [
    { id: 'world', label: t.world.tabs.world, icon: <Globe size={18} /> },
    { id: 'constellation', label: t.world.tabs.constellation, icon: <Star size={18} /> },
    { id: 'system', label: t.world.tabs.system, icon: <Coins size={18} /> },
  ];

  return (
    <section id="world" className="py-24 px-4 max-w-5xl mx-auto bg-black/20 rounded-3xl my-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 font-serif">{t.world.title}</h2>
        <p className="text-gray-400">{t.world.subtitle}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-constellation-accent text-black shadow-lg shadow-blue-500/25'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-[400px] glass-panel rounded-2xl p-8 md:p-12">
        {activeTab === 'world' && (
          <div className="space-y-8 animate-float-in">
            <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-4">{t.world.tabWorld.mainTitle}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-constellation-accent font-bold mb-2">{t.world.tabWorld.gateTitle}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {t.world.tabWorld.gateDesc}
                </p>
              </div>
              <div>
                <h4 className="text-constellation-accent font-bold mb-2">{t.world.tabWorld.guildTitle}</h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li><span className="text-white">{t.world.tabWorld.guildCorpLabel}</span> {t.world.tabWorld.guildCorpVal}</li>
                  <li><span className="text-white">{t.world.tabWorld.guildGovLabel}</span> {t.world.tabWorld.guildGovVal}</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'constellation' && (
          <div className="space-y-8 animate-float-in">
             <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-4">{t.world.tabConstellation.mainTitle}</h3>
             
             <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <h4 className="text-yellow-400 font-bold mb-2">{t.world.tabConstellation.boxTitle}</h4>
                <p className="text-sm text-gray-300 mb-2">{t.world.tabConstellation.boxSub}</p>
                <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                  {t.world.tabConstellation.constellations.map((item, idx) => (
                    <li key={idx}><strong className="text-white">{item.name}</strong> {item.desc}</li>
                  ))}
                </ul>
             </div>

             <div>
               <h4 className="text-constellation-accent font-bold mb-2">{t.world.tabConstellation.starnetTitle}</h4>
               <p className="text-sm text-gray-400 leading-relaxed">
                 {t.world.tabConstellation.starnetDesc}
               </p>
             </div>
          </div>
        )}

        {activeTab === 'system' && (
          <div className="space-y-8 animate-float-in">
             <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-4">{t.world.tabSystem.mainTitle}</h3>
             
             <div className="grid md:grid-cols-2 gap-8">
               <div>
                 <h4 className="text-constellation-accent font-bold mb-2">{t.world.tabSystem.creditTitle}</h4>
                 <p className="text-sm text-gray-400 mb-2 leading-relaxed">
                   {t.world.tabSystem.creditDesc}
                 </p>
                 <div className="bg-black/30 p-3 rounded text-xs text-gray-500 font-mono">
                   {t.world.tabSystem.creditLimitF}<br/>
                   {t.world.tabSystem.creditLimitS}
                 </div>
               </div>
               
               <div>
                 <h4 className="text-constellation-accent font-bold mb-2">{t.world.tabSystem.attunementTitle}</h4>
                 <p className="text-sm text-gray-400 mb-2">{t.world.tabSystem.attunementSub}</p>
                 <ul className="space-y-2 text-sm">
                   <li className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-500 rounded-full shrink-0"></span> {t.world.tabSystem.attunementLow}</li>
                   <li className="flex items-center gap-2"><span className="w-3 h-3 bg-orange-500 rounded-full shrink-0"></span> {t.world.tabSystem.attunementMid}</li>
                   <li className="flex items-center gap-2"><span className="w-3 h-3 bg-red-600 rounded-full shrink-0"></span> {t.world.tabSystem.attunementHigh}</li>
                 </ul>
               </div>
             </div>
          </div>
        )}
      </div>
    </section>
  );
};
