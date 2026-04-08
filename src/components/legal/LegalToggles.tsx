import React, { useState } from 'react';
import type { Toggle } from '../../types/legal';

interface LegalTogglesProps {
  toggles: Toggle[];
}

export const LegalToggles: React.FC<LegalTogglesProps> = ({ toggles }) => {
  const [states, setStates] = useState(toggles.map(t => t.defaultOn));

  const handleToggle = (idx: number) => {
    const newStates = [...states];
    newStates[idx] = !newStates[idx];
    setStates(newStates);
  };

  return (
    <div className="mx-6 my-6 space-y-4">
      {toggles.map((toggle, idx) => (
        <div key={idx} className="p-5 rounded-3xl bg-surface border border-border-light shadow-sm flex flex-row items-center">
          <div className="w-10 h-10 rounded-2xl bg-stone-100 flex items-center justify-center mr-4 shrink-0">
            <span className="text-xl">{toggle.icon}</span>
          </div>
          <div className="flex-1 mr-4">
            <h4 className="text-sm font-bold text-text-secondary leading-tight">{toggle.name}</h4>
            <p className="text-[10px] leading-relaxed text-text-tertiary mt-0.5">{toggle.description}</p>
          </div>
          <button 
            onClick={() => handleToggle(idx)}
            className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-1 ${states[idx] ? 'bg-primary' : 'bg-stone-200'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${states[idx] ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>
      ))}
    </div>
  );
};
