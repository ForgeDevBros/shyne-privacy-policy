import React from 'react';

interface LegalSectionProps {
  num: string;
  title: string;
  icon: string;
  iconBackground: string;
}

export const LegalSection: React.FC<LegalSectionProps> = ({ num, title, icon, iconBackground }) => {
  return (
    <div className="flex flex-row items-center px-6 py-6 border-b border-border-light bg-surface/30">
      <div 
        className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4 shadow-sm"
        style={{ backgroundColor: iconBackground }}
      >
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="flex-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-0.5">
          Section {num}
        </p>
        <h2 className="text-lg font-serif text-text-secondary leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
};
