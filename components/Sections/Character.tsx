import React from 'react';
import { User, Heart, Lock, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Character: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="character" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Left: Visuals & Basic Info */}
        <div className="md:w-1/3 space-y-8">
           <div className="glass-panel p-2 rounded-2xl relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-constellation-accent to-transparent z-10"></div>
             <img 
              src="https://i.postimg.cc/Y95WSnRs/r.png" 
              alt="Character Illustration" 
              className="w-full h-auto aspect-square object-cover rounded-xl shadow-lg shadow-black/50"
             />
           </div>
           
           <div className="glass-panel p-6 rounded-2xl">
             <h2 className="text-3xl font-bold font-serif mb-1 text-white">{t.character.name}</h2>
             <p className="text-constellation-accent font-mono text-sm mb-6">{t.character.subName}</p>
             
             <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 mt-1 text-gray-500 shrink-0" />
                  <div>
                    <p className="font-bold text-white">{t.character.appearanceLabel}</p>
                    <p className="text-sm">{t.character.appearanceValue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 mt-1 text-gray-500 shrink-0" />
                  <div>
                    <p className="font-bold text-white">{t.character.personalityLabel}</p>
                    <p className="text-sm font-mono text-constellation-accent">{t.character.personalityMbti}</p>
                    <p className="text-xs text-gray-500 mt-1">{t.character.personalitySub}</p>
                  </div>
                </div>
             </div>
          </div>

          <div className="p-4 rounded-lg bg-blue-900/10 border border-blue-500/20">
            <h3 className="text-constellation-accent font-bold mb-2 flex items-center gap-2">
              <MessageCircle size={16} />
              {t.character.commTitle}
            </h3>
            <p 
              className="text-sm text-gray-400 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.character.commDescHtml }}
            />
          </div>
        </div>

        {/* Right: Detailed Keywords */}
        <div className="md:w-2/3">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 font-serif">
            <span className="w-8 h-[2px] bg-constellation-accent"></span>
            {t.character.keywordSectionTitle}
          </h3>

          <div className="grid gap-6">
            {t.character.traits.map((trait, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl hover:border-constellation-accent/50 transition-colors">
                <h4 className="text-xl font-bold text-white mb-2">{trait.title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {trait.desc}
                </p>
              </div>
            ))}

            <div className="glass-panel p-6 rounded-xl border-l-4 border-l-red-900/50 hover:border-l-red-500 transition-colors">
              <h4 className="text-xl font-bold text-red-100 mb-2 flex items-center gap-2">
                <Heart size={18} className="text-red-500 shrink-0" />
                {t.character.romanceTitle}
              </h4>
              <p className="text-gray-400 mb-2 font-semibold">{t.character.romanceSub}</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t.character.romanceDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
