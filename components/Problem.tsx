import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { AlertCircle, Target, Layers, HelpCircle, XCircle } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: <HelpCircle className="h-10 w-10 text-red-500" />,
      title: "불명확한 적용 포인트",
      description: "어떤 문제에 AI를 적용해야 할지, 도입 효과는 있을지 시작부터 막막합니다."
    },
    {
      icon: <Layers className="h-10 w-10 text-red-500" />,
      title: "분리된 프로세스",
      description: "데이터 수집, 모델 개발, 현장 적용이 단절되어 실제 운영 환경에서 작동하지 않습니다."
    },
    {
      icon: <XCircle className="h-10 w-10 text-red-500" />,
      title: "검증 구조의 부재",
      description: "개발된 모델을 신뢰할 수 있는지, 실제 KPI로 이어지는지 증명하기 어렵습니다."
    }
  ];

  return (
    <section className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI 도입 실패, <br className="hidden md:block"/>
            기술이 아닌 <span className="text-red-500">'구조'</span>의 문제입니다.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            많은 기업들이 성능 중심의 개발에만 집중하다 실질적인 사업 효과 검증에 실패합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, index) => (
            <Card key={index} className="bg-dark-surface border-red-900/20 hover:border-red-500/50 transition-colors duration-300">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="mb-4 p-3 bg-red-500/10 rounded-full">
                  {prob.icon}
                </div>
                <CardTitle className="text-xl text-slate-100">{prob.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-400 leading-relaxed">
                  {prob.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};