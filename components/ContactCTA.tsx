import React from 'react';
import { Button } from './ui/button';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-dark-surface to-black relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-dark-card/80 backdrop-blur-lg border border-brand-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                우리 기업의 AI 적용 가능성,<br />
                <span className="gradient-text">무료로 진단받으세요</span>
              </h2>
              <p className="text-slate-300 leading-relaxed">
                MYNDNOVA 전문 컨설턴트가 귀사의 데이터를 분석하고, 
                가장 효과적인 AI 도입 전략을 제안해 드립니다.
              </p>
              
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                  산업별 맞춤 적용 시나리오 제공
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                  예상 도입 비용 및 ROI 산출
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                  데이터 준비 가이드라인 제공
                </li>
              </ul>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-slate-300">기업명</label>
                  <input id="company" type="text" className="w-full bg-dark-bg border border-dark-border rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="기업명 입력" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">담당자명</label>
                  <input id="name" type="text" className="w-full bg-dark-bg border border-dark-border rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="이름 입력" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">이메일</label>
                <input id="email" type="email" className="w-full bg-dark-bg border border-dark-border rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="example@company.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-300">연락처</label>
                <input id="phone" type="tel" className="w-full bg-dark-bg border border-dark-border rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="010-0000-0000" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">문의 내용</label>
                <textarea id="message" rows={4} className="w-full bg-dark-bg border border-dark-border rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="해결하고 싶은 문제나 궁금한 점을 적어주세요." />
              </div>
              
              <Button size="lg" className="w-full bg-gradient-to-r from-brand-600 to-blue-700 hover:from-brand-500 hover:to-blue-600 text-white font-bold shadow-lg shadow-brand-900/40">
                진단 신청하기
              </Button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};