import React from 'react';
import { StatusMessage } from '../UI/StatusMessage';

export const Prologue: React.FC = () => {
  return (
    <section id="prologue" className="py-24 px-4 bg-black relative">
       <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
              <span className="text-constellation-accent font-mono tracking-widest text-sm">PROLOGUE</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white font-serif">마트 시식 코너의 각성</h2>
              <div className="h-1 w-20 bg-constellation-accent mx-auto"></div>
          </div>

          <div className="space-y-6">
              <div className="text-center pb-8">
                 <p className="font-serif text-lg text-gray-400 italic">
                   보이지 않는 거대한 존재가 누추한 인계의 틈새를 비집고 들어왔습니다.<br/>
                   그때, 당신의 눈앞에만 푸른 창이 벼락처럼 떠올랐습니다.
                 </p>
              </div>

              <StatusMessage 
                content="『고요한 언약의 집행자』님이 당신의 영혼을 발견하고 숨을 멈춥니다."
                subtext="주변 공기가 진동합니다!"
              />

              <p className="font-serif text-gray-300 italic px-4 text-center leading-loose py-4">
                  "백 년의 순환 끝에 다시 마주한 찬란한 영혼.<br/>
                   터져 나오려는 환희의 비명을 억지로 삼킨 절대자는,<br/>
                   그 벅찬 감정을 우주적 언어 대신 떨리는 손끝으로 캔버스 위에 쏟아냈습니다."
              </p>

              <StatusMessage 
                content="『고요한 언약의 집행자』님이 그림으로 뜻을 전하십니다!"
                ascii={`  /)/)
 ( . .)  ✨
(  >❤️< )
 o((")(")`}
                subtext="(❎ 번역불가)"
              />
              
               <StatusMessage 
                content="『고요한 언약의 집행자』님께서 [계약의 선물]을 보냈습니다!"
                subtext="당신이 [S급 헌터]로 각성했습니다!"
                className="border-l-yellow-500"
              />
          </div>
          
          <div className="text-center pt-12">
            <p className="text-2xl font-bold text-white mb-6 font-serif">지금, 당신만의 헌터물이 시작됩니다.</p>
          </div>
       </div>
    </section>
  );
};