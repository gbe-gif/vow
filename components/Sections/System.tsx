import React from 'react';
import { StatusMessage } from '../UI/StatusMessage';

export const System: React.FC = () => {
  return (
    <section id="system" className="py-24 px-4 bg-gradient-to-b from-[#050508] to-[#0f0f1a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-serif">게임 플레이 가이드</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* HUD Explanation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-constellation-accent">HUD (Head-Up Display)</h3>
            <p className="text-gray-400">
              당신의 시야 상단에 항상 떠있는 정보창입니다. 턴, 시간, 성좌의 감정상태, 감응도를 확인할 수 있습니다.
            </p>
            
            <div className="glass-panel p-6 font-mono text-sm leading-loose rounded-lg border border-white/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-red-500/20 text-red-300 px-2 py-1 text-xs">LIVE</div>
               <div className="text-gray-500 mb-2">❴T12 | 26.01.21/18:45 | 던전 입구 | 🟢❵</div>
               <div className="flex items-center gap-4 text-lg mb-2">
                 <span>⭐「🤤」</span>
                 <span className="text-green-400">📶 ON</span>
               </div>
               <div className="flex gap-4 text-sm border-b border-gray-700 pb-2 mb-2">
                 <span>S급</span>
                 <span>1위</span>
                 <span className="text-yellow-500">🟨(저)</span>
               </div>
               <div className="text-constellation-accent">⦉중력 조작 [S]⦊</div>
               <div className="text-gray-400">⦃현재: 마트 털이범 제압⦄</div>
               <div className="text-yellow-500 mt-2">💰 1,500 크레딧</div>
            </div>

            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20 text-sm">
                <strong className="text-blue-300 block mb-1">💡 팁: 그림 번역기</strong>
                <p className="text-gray-400">
                    성좌의 그림을 이해할 수 없다면 500 크레딧으로 번역기를 구매하세요.
                    (❎ OFF -> 📶 ON)
                </p>
            </div>
          </div>

          {/* Gag Mechanic Explanation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-constellation-accent">개그 & 오해 시스템</h3>
            <p className="text-gray-400">
              성좌는 말을 할 수 없어 그림으로 능력을 설명합니다. 하지만 당신의 해석이 틀린다면...?
            </p>
            
            <div className="space-y-4">
                <StatusMessage 
                    title="상태창"
                    content="『고요한 언약의 집행자』님이 능력 사용법을 그립니다."
                    ascii={`   (  💥  )
  /   |   \\
 (   💣   ) `}
                    subtext="무언가 터지는 것 같습니다?"
                />
                
                <div className="flex flex-col gap-2 pl-8 border-l-2 border-dashed border-gray-700">
                    <div className="text-sm text-gray-500 italic">유저의 해석: "폭탄을 던지라는 건가?"</div>
                    <div className="text-sm text-red-400 font-bold">🚨 실제 의도: "마력 폭발로 보호막 생성"</div>
                    <div className="text-sm text-white bg-white/10 p-3 rounded">
                        결과: 보호막 대신 주변 1km의 유리가 전부 깨지는 <span className="text-yellow-400">음파 폭탄</span>이 나갑니다!
                        <br/><span className="text-xs text-gray-400">(하지만 적의 고막도 터져서 제압 성공..?)</span>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};