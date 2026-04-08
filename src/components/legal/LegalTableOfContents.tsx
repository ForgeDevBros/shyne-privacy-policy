import React from 'react';
import type { TableOfContentItem } from '../../types/legal';

interface LegalTableOfContentsProps {
  items: TableOfContentItem[];
  onItemPress: (num: string) => void;
}

export const LegalTableOfContents: React.FC<LegalTableOfContentsProps> = ({ items, onItemPress }) => {
  return (
    <div className="px-6 py-8">
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-text-tertiary mb-6 opacity-60">
        Table of Contents
      </h3>
      <div className="space-y-4">
        {items.map((item) => (
          <button
            key={item.num}
            onClick={() => onItemPress(item.num)}
            className="w-full flex flex-row items-center text-left group"
          >
            <span className="w-8 text-[10px] font-bold text-primary opacity-50 font-serif">
              {item.num.padStart(2, '0')}
            </span>
            <span className="flex-1 text-sm font-serif text-text-secondary group-hover:text-primary transition-colors">
              {item.text}
            </span>
            <svg 
              className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" 
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
};
