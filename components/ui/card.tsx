import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`rounded-xl border border-dark-border bg-dark-card text-slate-200 shadow-sm ${className}`}>
    {children}
  </div>
);

export const CardHeader: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
);

export const CardTitle: React.FC<CardProps> = ({ className = '', children }) => (
  <h3 className={`font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </div>
);

export const CardDescription: React.FC<CardProps> = ({ className = '', children }) => (
  <p className={`text-sm text-slate-400 ${className}`}>
    {children}
  </p>
);

export const CardContent: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

export const CardFooter: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`}>
    {children}
  </div>
);