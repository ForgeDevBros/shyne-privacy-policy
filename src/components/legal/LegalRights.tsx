import React from 'react';
import type { Right } from '../../types/legal';

interface LegalRightsProps {
  rights: Right[];
}

export const LegalRights: React.FC<LegalRightsProps> = ({ rights }) => {
  return (
    <div className="mx-6 my-6 grid grid-cols-1 gap-4">
      {rights.map((right, idx) => (
        <div key={idx} className="p-5 rounded-3xl bg-surface border border-border-light shadow-sm flex flex-row items-start">
          <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
            <span className="text-xl">{right.icon}</span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-secondary mb-1">{right.title}</h4>
            <p className="text-xs leading-relaxed text-text-tertiary">{right.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
