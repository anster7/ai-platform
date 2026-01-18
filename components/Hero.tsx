import React from 'react';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-black">
      {/* Spline Background */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-80">
        <iframe 
          src='https://my.spline.design/aigreymarketingbanner-m1Ph5Yv49CCnGyHR0TJ39Y4v/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full scale-105" // slight scale to cover edges if needed
          title="MYNDNOVA AI Animation"
        />
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-300 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-400 mr-2 animate-pulse"></span>
            Industrial AI Platform
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            AI를 성과로 만드는<br />
            <span className="gradient-text">산업 AI 플랫폼</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
            MYNDNOVA는 기술 도입을 넘어 실질적인 비즈니스 성과를 창출합니다. 
            검증된 집단지성 알고리즘으로 귀사의 산업 현장을 혁신하세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="glow" size="lg" className="group">
              무료 진단 신청하기
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="backdrop-blur-md border-slate-600">
              솔루션 소개서 다운로드
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-lg">98%</span>
              <span>모델 정확도</span>
            </div>
            <div className="bg-slate-700 w-px h-8"></div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-lg">3배</span>
              <span>도입 속도 향상</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};