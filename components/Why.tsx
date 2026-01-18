import React from 'react';
import { Users, ShieldCheck, BarChart3, Factory } from 'lucide-react';

export const Why: React.FC = () => {
  return (
    <section className="py-24 bg-dark-surface border-y border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-500 font-bold uppercase tracking-widest text-sm mb-2 block">Why MYNDNOVA</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              집단지성으로 검증하고<br />
              데이터로 실증합니다
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 bg-brand-900/30 p-3 rounded-lg h-fit">
                  <Users className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">집단지성 네트워크 (Collective Intelligence)</h3>
                  <p className="text-slate-400">단일 개발자가 아닌, 50명 이상의 산업별 AI 전문가 그룹이 모델을 교차 검증하여 편향을 제거하고 신뢰도를 높입니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 bg-brand-900/30 p-3 rounded-lg h-fit">
                  <ShieldCheck className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">3단계 안전 검증 (Triple Verification)</h3>
                  <p className="text-slate-400">데이터 정합성 검사, 알고리즘 성능 평가, 현장 시뮬레이션을 통과한 모델만 배포됩니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 bg-brand-900/30 p-3 rounded-lg h-fit">
                  <BarChart3 className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">정량적 성과 보장 (KPI Driven)</h3>
                  <p className="text-slate-400">단순 기술 도입이 아닌, 생산성 향상, 불량률 감소 등 계약된 KPI 달성을 목표로 프로젝트를 수행합니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-purple-600 rounded-xl opacity-20 blur-xl"></div>
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 relative overflow-hidden">
               {/* Decorative background grid */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
               
               <div className="grid grid-cols-2 gap-6 relative z-10">
                 <div className="text-center p-6 bg-dark-bg/50 rounded-lg border border-dark-border">
                    <div className="text-4xl font-bold text-white mb-2">200+</div>
                    <div className="text-sm text-slate-400">완료 프로젝트</div>
                 </div>
                 <div className="text-center p-6 bg-dark-bg/50 rounded-lg border border-dark-border">
                    <div className="text-4xl font-bold text-brand-400 mb-2">98.5%</div>
                    <div className="text-sm text-slate-400">평균 검증 정확도</div>
                 </div>
                 <div className="text-center p-6 bg-dark-bg/50 rounded-lg border border-dark-border">
                    <div className="text-4xl font-bold text-white mb-2">40%</div>
                    <div className="text-sm text-slate-400">운영 비용 절감</div>
                 </div>
                 <div className="text-center p-6 bg-dark-bg/50 rounded-lg border border-dark-border">
                    <div className="text-4xl font-bold text-white mb-2">15개</div>
                    <div className="text-sm text-slate-400">적용 산업 분야</div>
                 </div>
               </div>
               
               <div className="mt-8 pt-8 border-t border-dark-border flex items-center justify-between">
                 <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-dark-card flex items-center justify-center text-xs font-bold">
                       AI
                     </div>
                   ))}
                 </div>
                 <div className="text-right">
                   <p className="text-sm text-slate-400">파트너 전문가 그룹</p>
                   <p className="font-bold text-white">Top 1% Engineers</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};