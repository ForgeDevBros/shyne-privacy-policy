import React from 'react';
import type { Highlight } from '../../types/legal';

interface LegalHighlightProps {
  highlight: Highlight;
}

export const LegalHighlight: React.FC<LegalHighlightProps> = ({ highlight }) => {
  const getColors = () => {
    switch (highlight.type) {
      case 'blush': return 'bg-rose-50 border-rose-100 text-rose-900';
      case 'green': return 'bg-emerald-50 border-emerald-100 text-emerald-900';
      case 'lavender': return 'bg-indigo-50 border-indigo-100 text-indigo-900';
      case 'blush-strong': return 'bg-rose-100 border-rose-200 text-rose-950';
      default: return 'bg-stone-50 border-stone-100 text-stone-900';
    }
  };

  return (
    <div className={`mx-6 my-4 p-5 rounded-3xl border ${getColors()}`}>
      <div className="flex flex-row items-center mb-2">
        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
        </svg>
        <h4 className="text-xs font-bold uppercase tracking-widest">
          {highlight.title}
        </h4>
      </div>
      <p className="text-sm leading-relaxed opacity-80">
        {highlight.body}
      </p>
    </div>
  );
};
