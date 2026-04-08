import React from 'react';
import type { SDK } from '../../types/legal';

interface LegalSDKListProps {
  sdks: SDK[];
}

export const LegalSDKList: React.FC<LegalSDKListProps> = ({ sdks }) => {
  return (
    <div className="mx-6 my-6 grid grid-cols-1 gap-4">
      {sdks.map((sdk, idx) => (
        <div key={idx} className="p-4 rounded-3xl bg-surface/50 border border-border-light flex flex-row items-center">
          <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center mr-4 shrink-0">
            <span className="text-2xl">{sdk.icon}</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-row items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-text-secondary">{sdk.name}</h4>
              <span className="px-2 py-0.5 rounded-full bg-stone-100 text-[8px] font-bold uppercase tracking-wider text-text-tertiary border border-stone-200">
                {sdk.tag}
              </span>
            </div>
            <p className="text-[10px] leading-relaxed text-text-tertiary">{sdk.purpose}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
