import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

export const Product: React.FC = () => {
  const products = [
    {
      type: "PROJECT",
      title: "Enterprise Custom",
      desc: "복잡한 산업 문제 해결을 위한 맞춤형 구축",
      price: "견적 문의",
      features: [
        "전용 AI 알고리즘 설계",
        "온프레미스/클라우드 구축 지원",
        "데이터 보안 인프라 설계",
        "전문가 집단 3단계 검증 리포트",
        "연간 유지보수 및 재학습 지원"
      ],
      cta: "상담 신청",
      highlight: false
    },
    {
      type: "SUBSCRIPTION",
      title: "Business Starter",
      desc: "검증된 AI 모델을 API로 즉시 도입",
      price: "월 구독형",
      features: [
        "표준 산업 AI 모델 API 제공",
        "클라우드 대시보드 제공",
        "실시간 성능 모니터링",
        "기본 기술 지원 (이메일/채팅)",
        "월간 사용량 리포트"
      ],
      cta: "무료 체험 시작",
      highlight: true
    },
    {
      type: "HYBRID",
      title: "Scale-Up Pack",
      desc: "구축형 성능과 구독형의 편리함을 동시에",
      price: "하이브리드형",
      features: [
        "Core 모델 커스터마이징",
        "전용 클라우드 인스턴스",
        "Field Deployment 컨설팅",
        "전담 엔지니어 배정",
        "성과 지표(KPI) 관리 도구"
      ],
      cta: "도입 문의",
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            검증된 AI, 최적의 방식으로 도입하세요
          </h2>
          <p className="text-slate-400">
            기업의 규모와 니즈에 맞춘 유연한 패키지를 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((prod, index) => (
            <Card key={index} className={`flex flex-col relative ${prod.highlight ? 'border-brand-500 shadow-[0_0_30px_rgba(14,165,233,0.1)] bg-slate-900/50' : 'bg-dark-card'}`}>
              {prod.highlight && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Popular</span>
                </div>
              )}
              <CardHeader>
                <div className="text-sm font-medium text-brand-400 mb-2">{prod.type}</div>
                <CardTitle className="text-2xl text-white">{prod.title}</CardTitle>
                <CardDescription className="text-slate-400 mt-2">{prod.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-3xl font-bold text-white mb-6">{prod.price}</div>
                <ul className="space-y-4">
                  {prod.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-500 mr-2 shrink-0" />
                      <span className="text-slate-300 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={prod.highlight ? 'default' : 'outline'} className="w-full">
                  {prod.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};