import React, { useState } from 'react';
import { Globe, Coins, Star } from 'lucide-react';

const tabs = [
  { id: 'world', label: '인간계 & 헌터', icon: <Globe size={18} /> },
  { id: 'constellation', label: '성좌 & 신계', icon: <Star size={18} /> },
  { id: 'system', label: '시스템 & 재화', icon: <Coins size={18} /> },
];

export const World: React.FC = () => {
  const [activeTab, setActiveTab] = useState('world');

  return (
    <section id="world" className="py-24 px-4 max-w-5xl mx-auto bg-black/20 rounded-3xl my-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 font-serif">세계관 가이드</h2>
        <p className="text-gray-400">당신이 활동하게 될 우주의 규칙입니다.</p>
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
            <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-4">인간계와 헌터</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-constellation-accent font-bold mb-2">게이트 & 헌터</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  매분 매초 열리는 게이트에서 마물이 쏟아져 나옵니다. 성좌의 선택을 받아 이능을 얻은 '헌터'들이 이를 처리합니다.
                  헌터는 병기이자 연예인 취급을 받으며, S~F급으로 나뉩니다.
                </p>
              </div>
              <div>
                <h4 className="text-constellation-accent font-bold mb-2">길드 시스템</h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li><span className="text-white">대기업형:</span> 에덴(업적 1위), 모더니즘(비주얼), 하이퍼즈(자본)</li>
                  <li><span className="text-white">정부/군:</span> P.I.D, A.k, UT8(특수부대)</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'constellation' && (
          <div className="space-y-8 animate-float-in">
             <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-4">성좌 (The Constellations)</h3>
             
             <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <h4 className="text-yellow-400 font-bold mb-2">절대 성좌 3인</h4>
                <p className="text-sm text-gray-300 mb-2">세계관 최강자들로 서로 다른 우주에서 활동하며 만나지 못합니다.</p>
                <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                  <li><strong className="text-white">고요한 언약의 집행자 (주인공):</strong> 침묵의 절대자.</li>
                  <li><strong className="text-white">빛나는 만물의 승리자:</strong> 나르시스트 근육바보.</li>
                  <li><strong className="text-white">나태한 황금의 심판자:</strong> 자신의 계약자 바라기.</li>
                </ul>
             </div>

             <div>
               <h4 className="text-constellation-accent font-bold mb-2">성좌넷 (StarNet)</h4>
               <p className="text-sm text-gray-400">
                 성좌들이 필멸자를 관측하고 후원하는 스트리밍 플랫폼입니다. 
                 성좌들의 채팅은 당신에게 '상태창 메시지'로 전달됩니다.
               </p>
             </div>
          </div>
        )}

        {activeTab === 'system' && (
          <div className="space-y-8 animate-float-in">
             <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-4">시스템 & 재화</h3>
             
             <div className="grid md:grid-cols-2 gap-8">
               <div>
                 <h4 className="text-constellation-accent font-bold mb-2">크레딧 (Credit)</h4>
                 <p className="text-sm text-gray-400 mb-2">
                   성좌가 후원하는 재화로, '크레딧 몰'에서 스킬이나 아이템을 구매할 수 있습니다.
                   인간 화폐와는 호환되지 않습니다.
                 </p>
                 <div className="bg-black/30 p-3 rounded text-xs text-gray-500 font-mono">
                   F급 일일한도: 5 C<br/>
                   S급 일일한도: 200 C
                 </div>
               </div>
               
               <div>
                 <h4 className="text-constellation-accent font-bold mb-2">감응도 시스템</h4>
                 <p className="text-sm text-gray-400 mb-2">성좌와 필멸자의 연결 정도입니다.</p>
                 <ul className="space-y-2 text-sm">
                   <li className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-500 rounded-full"></span> <strong>저(Low):</strong> 강림 불가. 선물만 가능.</li>
                   <li className="flex items-center gap-2"><span className="w-3 h-3 bg-orange-500 rounded-full"></span> <strong>중(Mid):</strong> 10분 강림 가능.</li>
                   <li className="flex items-center gap-2"><span className="w-3 h-3 bg-red-600 rounded-full"></span> <strong>고(High):</strong> 상시 강림.</li>
                 </ul>
               </div>
             </div>
          </div>
        )}
      </div>
    </section>
  );
};