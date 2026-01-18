import React from 'react';
import { Database, BrainCircuit, Rocket } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-400 font-semibold tracking-wider text-sm uppercase">MYNDNOVA Solution</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">
            성과를 만드는 3단계 플랫폼
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            MYNDNOVA는 맞춤 개발부터 전문가 집단 검증, 현장 실증까지 원스톱으로 지원합니다.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-brand-900 to-slate-800 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="relative z-10 group">
              <div className="bg-dark-card border border-dark-border p-8 rounded-2xl h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:border-brand-500/50 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-900 to-slate-900 rounded-2xl flex items-center justify-center mb-6 border border-brand-500/30 group-hover:scale-110 transition-transform">
                  <Database className="w-8 h-8 text-brand-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  <span className="text-brand-500 text-sm block mb-1">Step 01</span>
                  AI Core Builder
                </h3>
                <h4 className="text-lg font-medium text-slate-300 mb-4">맞춤형 AI 엔진 개발</h4>
                <p className="text-slate-400 leading-relaxed">
                  기업의 고유한 데이터를 분석하고 문제를 정의하여, 해당 산업에 최적화된 맞춤형 알고리즘을 설계 및 개발합니다.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 group">
              <div className="bg-dark-card border border-dark-border p-8 rounded-2xl h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-900 to-slate-900 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30 group-hover:scale-110 transition-transform">
                  <BrainCircuit className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  <span className="text-purple-500 text-sm block mb-1">Step 02</span>
                  Collective Intelligence Lab
                </h3>
                <h4 className="text-lg font-medium text-slate-300 mb-4">전문가 집단 검증</h4>
                <p className="text-slate-400 leading-relaxed">
                  데이터 사이언티스트 및 산업 전문가 집단이 AI 모델의 정확도, 편향성, 산업 적합성을 공동으로 크로스 체크하여 고도화합니다.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 group">
              <div className="bg-dark-card border border-dark-border p-8 rounded-2xl h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:border-green-500/50 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                <div className="w-16 h-16 bg-gradient-to-br from-green-900 to-slate-900 rounded-2xl flex items-center justify-center mb-6 border border-green-500/30 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  <span className="text-green-500 text-sm block mb-1">Step 03</span>
                  Field Deployment Pack
                </h3>
                <h4 className="text-lg font-medium text-slate-300 mb-4">현장 실증 및 성과 증명</h4>
                <p className="text-slate-400 leading-relaxed">
                  실제 산업 현장에 시스템을 배포(Deployment)하고, 비용 절감 및 효율 개선 등 정량적인 사업 성과(KPI)를 최종 입증합니다.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};