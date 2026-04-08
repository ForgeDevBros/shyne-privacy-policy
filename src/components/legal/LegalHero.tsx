import React from 'react';

interface LegalHeroProps {
  eyebrow: string;
  titlePrefix: string;
  emphasisWord: string;
  titleSuffix: string;
  effectiveDate: string;
  updatedDate?: string;
  governingLaw?: string;
}

export const LegalHero: React.FC<LegalHeroProps> = ({
  eyebrow,
  titlePrefix,
  emphasisWord,
  titleSuffix,
  effectiveDate,
  updatedDate,
  governingLaw,
}) => {
  return (
    <div className="relative px-6 pt-10 pb-12 overflow-hidden min-h-[200px]">
      {/* Background Blobs for Premium Look */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: -100,
          right: -50,
          width: 300,
          height: 300,
          backgroundColor: 'var(--color-pale-lavender)',
          opacity: 0.15,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: -50,
          left: -50,
          width: 200,
          height: 200,
          backgroundColor: 'var(--color-soft-mint)',
          opacity: 0.1,
        }}
      />

      <p className="text-xs uppercase tracking-widest mb-4 opacity-60 text-text-secondary">
        {eyebrow}
      </p>

      <h1 className="text-4xl leading-tight text-text font-serif">
        {titlePrefix}{' '}
        <span className="italic text-primary">
          {emphasisWord}
        </span>
        {' '}{titleSuffix}
      </h1>

      <div className="mt-6">
        <p className="text-sm leading-relaxed text-text-tertiary">
          Effective: {effectiveDate} {updatedDate && `· Last updated: ${updatedDate}`}
        </p>
        {governingLaw && (
          <p className="text-sm leading-relaxed mt-1 text-text-tertiary">
            {governingLaw}
          </p>
        )}
      </div>
    </div>
  );
};
