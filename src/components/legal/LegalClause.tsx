import React from 'react';
import type { Clause } from '../../types/legal';

interface LegalClauseProps {
  clause: Clause;
}

export const LegalClause: React.FC<LegalClauseProps> = ({ clause }) => {
  return (
    <div className="px-6 py-4 border-b border-border-light/50">
      <div className="flex flex-row items-center mb-2">
        <div 
          className="w-1.5 h-1.5 rounded-full mr-2.5 mt-0.5" 
          style={{ backgroundColor: clause.dotColor }}
        />
        <h3 className="text-sm font-bold text-text-secondary leading-tight">
          {clause.title}
        </h3>
      </div>
      
      <p className="text-sm leading-relaxed text-text-tertiary ml-4">
        {clause.body}
      </p>

      {clause.chips && clause.chips.length > 0 && (
        <div className="flex flex-row flex-wrap mt-3 ml-4 gap-2">
          {clause.chips.map((chip, idx) => (
            <div 
              key={idx}
              className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                chip.type === 'alert' ? 'bg-red-50 text-red-600 border border-red-100' :
                chip.type === 'new' ? 'bg-green-50 text-green-600 border border-green-100' :
                'bg-stone-100 text-stone-500 border border-stone-200'
              }`}
            >
              {chip.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
