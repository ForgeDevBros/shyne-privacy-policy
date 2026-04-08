import React, { useEffect, useRef, useState } from 'react';
import { LegalHeader } from '../components/legal/LegalHeader';
import { LegalHero } from '../components/legal/LegalHero';
import { LegalTableOfContents } from '../components/legal/LegalTableOfContents';
import { LegalSection } from '../components/legal/LegalSection';
import { LegalHighlight } from '../components/legal/LegalHighlight';
import { LegalDataTable } from '../components/legal/LegalDataTable';
import { LegalClause } from '../components/legal/LegalClause';
import { LegalContact } from '../components/legal/LegalContact';
import { apiService } from '../services/apiService';
import type { TermsOfCondition } from '../types/legal';

export const TermsOfConditionPage: React.FC = () => {
  const [terms, setTerms] = useState<TermsOfCondition | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.getTermsOfCondition();
        setTerms(data);
      } catch (err) {
        setError('Failed to load Terms & Conditions. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleScrollToSection = (num: string) => {
    const element = sectionRefs.current[num];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !terms) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <p className="text-lg text-text-secondary mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-primary text-white rounded-full shadow-md"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text">
      <LegalHeader title="Terms & Conditions" version={terms.version} />

      <main className="max-w-2xl mx-auto pb-20">
        <LegalHero
          eyebrow="SHYNE WOMEN'S WELLNESS"
          titlePrefix="Your trust is"
          emphasisWord="sacred"
          titleSuffix="to us."
          effectiveDate={terms.lastUpdated}
          governingLaw="Governed by Indian law (IT Act 2000, DPDP Act 2023)"
        />

        <LegalTableOfContents
          items={terms.tableOfContents}
          onItemPress={handleScrollToSection}
        />

        {terms.sections.map((section) => (
          <div
            key={section.num}
            ref={(el) => { sectionRefs.current[section.num] = el; }}
          >
            <LegalSection
              num={section.num}
              title={section.title}
              icon={section.icon}
              iconBackground={section.iconBackground}
            />

            {section.highlights?.map((highlight, index) => (
              <LegalHighlight key={`highlight-${index}`} highlight={highlight} />
            ))}

            {section.dataTable && (
              <LegalDataTable table={section.dataTable} />
            )}

            {section.clauses?.map((clause, index) => (
              <LegalClause key={`clause-${index}`} clause={clause} />
            ))}

            {section.contact && (
              <LegalContact contact={section.contact} />
            )}
          </div>
        ))}

        <div className="h-20" />
      </main>
    </div>
  );
};

export default TermsOfConditionPage;
