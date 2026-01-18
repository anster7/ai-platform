import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Product } from './components/Product';
import { Why } from './components/Why';
import { UseCases } from './components/UseCases';
import { ContactCTA } from './components/ContactCTA';
import { Button } from './components/ui/button';
import { BrainCircuit, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BrainCircuit className="w-8 h-8 text-brand-400" />
          <span className="text-2xl font-bold text-white tracking-tight">MYNDNOVA</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">솔루션</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">상품 소개</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">성공 사례</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">회사 소개</a>
          <Button variant="default" size="sm">문의하기</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-surface border-b border-dark-border p-4 flex flex-col gap-4 shadow-xl">
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white">솔루션</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white">상품 소개</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white">성공 사례</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white">회사 소개</a>
          <Button variant="default" className="w-full">문의하기</Button>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-6 h-6 text-slate-600" />
            <span className="text-xl font-bold text-slate-500">MYNDNOVA</span>
          </div>
          <div className="flex gap-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">고객센터</a>
          </div>
          <div className="text-slate-600 text-sm">
            © 2024 MYNDNOVA Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-500/30">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Product />
        <Why />
        <UseCases />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}