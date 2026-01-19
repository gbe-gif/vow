import React from 'react';
import { User, Heart, Lock, MessageCircle } from 'lucide-react';

export const Character: React.FC = () => {
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
             <h2 className="text-3xl font-bold font-serif mb-1 text-white">고요한 언약의 집행자</h2>
             <p className="text-constellation-accent font-mono text-sm mb-6">Silent Vowkeeper</p>
             
             <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-bold text-white">외형</p>
                    <p className="text-sm">207cm의 거구. 차가운 인상의 미남.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-bold text-white">성격 (MBTI)</p>
                    <p className="text-sm font-mono text-constellation-accent">ISTJ</p>
                    <p className="text-xs text-gray-500 mt-1">철저하고 냉철한 관리자형</p>
                  </div>
                </div>
             </div>
          </div>

          <div className="p-4 rounded-lg bg-blue-900/10 border border-blue-500/20">
            <h3 className="text-constellation-accent font-bold mb-2 flex items-center gap-2">
              <MessageCircle size={16} />
              소통 방식
            </h3>
            <p className="text-sm text-gray-400">
              말의 힘이 너무 강해, 의도치 않은 현실 왜곡을 막기 위해 <strong>아스키 아트 그림</strong>으로만 소통합니다.
            </p>
          </div>
        </div>

        {/* Right: Detailed Keywords */}
        <div className="md:w-2/3">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 font-serif">
            <span className="w-8 h-[2px] bg-constellation-accent"></span>
            성격 키워드 해석
          </h3>

          <div className="grid gap-6">
            <div className="glass-panel p-6 rounded-xl hover:border-constellation-accent/50 transition-colors">
              <h4 className="text-xl font-bold text-white mb-2">침묵 속의 맹세</h4>
              <p className="text-gray-400">
                그는 당신과의 약속을 우주의 법칙보다 중요하게 여기며, 
                그 무게감을 침묵 속에서 묵묵히 지켜나갑니다.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl hover:border-constellation-accent/50 transition-colors">
              <h4 className="text-xl font-bold text-white mb-2">심해 같은 감정</h4>
              <p className="text-gray-400">
                겉으로는 드러나지 않지만, 내면 깊숙한 곳에는 캐시 메모리처럼 당신을 향한 방대한 감정 데이터가 쌓여 있습니다.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl hover:border-constellation-accent/50 transition-colors">
              <h4 className="text-xl font-bold text-white mb-2">차가운 겉모습, 뜨거운 속내</h4>
              <p className="text-gray-400">
                매우 금욕적이고 차가워 보이지만, 당신에 대해서만큼은 달콤하고 폭발적인 화산 같은 열정을 품고 있습니다.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl border-l-4 border-l-red-900/50 hover:border-l-red-500 transition-colors">
              <h4 className="text-xl font-bold text-red-100 mb-2 flex items-center gap-2">
                <Heart size={18} className="text-red-500" />
                Romance Style
              </h4>
              <p className="text-gray-400 mb-2 font-semibold">절제된 소유와 침묵의 지배</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                절제되어 있지만 압도적인 성향. 불필요한 말보다는 숨결과 맥박, 그리고 집요한 시선으로 당신을 확인하려 합니다.
                당신의 모든 모습이 자신의 시야에 들어와야만 안심하는 묵직한 닻(Anchor)과 같습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};