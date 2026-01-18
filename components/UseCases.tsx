import React from 'react';
import { Factory, ShoppingBag, Store, Building2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const UseCases: React.FC = () => {
  const cases = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: "제조업 (Smart Factory)",
      desc: "비전 AI를 활용한 실시간 불량 검출 및 설비 예지 보전 시스템 구축",
      result: "불량률 85% 감소"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "유통/물류",
      desc: "수요 예측 알고리즘을 통한 재고 최적화 및 물류 동선 자동화",
      result: "재고 비용 30% 절감"
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "소상공인/리테일",
      desc: "매장 방문 고객 데이터 분석을 통한 개인화 마케팅 추천 솔루션",
      result: "재방문율 2.5배 상승"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "공공/인프라",
      desc: "CCTV 영상 분석을 통한 교통 흐름 제어 및 시민 안전 모니터링",
      result: "사고 대응 속도 개선"
    }
  ];

  return (
    <section className="py-24 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            다양한 산업 현장에서<br />
            이미 증명하고 있습니다
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, index) => (
            <Card key={index} className="bg-dark-surface border-dark-border hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-dark-bg rounded-full flex items-center justify-center mb-6 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm mb-6 h-20">
                  {item.desc}
                </p>
                <div className="pt-4 border-t border-dark-border">
                  <p className="text-brand-400 font-bold text-sm">
                    Result: {item.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};