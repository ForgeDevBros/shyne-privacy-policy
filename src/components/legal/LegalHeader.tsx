import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LegalHeaderProps {
  title: string;
  version: string;
  year?: string;
}

export const LegalHeader: React.FC<LegalHeaderProps> = ({ title, version, year = '2026' }) => {
  const navigate = useNavigate();

  return (
    <header className="flex flex-row items-center justify-between px-6 py-4 sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <button
        onClick={() => navigate(-1)}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-900/10 hover:bg-stone-900/20 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>

      <span className="text-lg font-serif text-text-secondary">
        {title}
      </span>

      <span className="text-xs uppercase tracking-widest text-text-tertiary">
        V{version} · {year}
      </span>
    </header>
  );
};
