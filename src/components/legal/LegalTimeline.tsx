import React from 'react';
import type { TimelineItem } from '../../types/legal';

interface LegalTimelineProps {
  items: TimelineItem[];
}

export const LegalTimeline: React.FC<LegalTimelineProps> = ({ items }) => {
  return (
    <div className="mx-6 my-6 space-y-0 relative">
      <div className="absolute left-1.75 top-2 bottom-2 w-px bg-border-light" />
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-row items-start mb-8 last:mb-0 relative">
          <div
            className="w-3.5 h-3.5 rounded-full border-2 border-background z-10 mt-1"
            style={{ backgroundColor: item.dotColor }}
          />
          <div className="ml-5">
            <h4 className="text-sm font-bold text-text-secondary mb-1 leading-tight">
              {item.title}
            </h4>
            <p className="text-xs leading-relaxed text-text-tertiary">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
