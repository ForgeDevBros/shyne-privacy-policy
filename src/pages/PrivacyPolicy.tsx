import React, { useEffect, useRef, useState } from 'react';
import { LegalHeader } from '../components/legal/LegalHeader';
import { LegalHero } from '../components/legal/LegalHero';
import { LegalTableOfContents } from '../components/legal/LegalTableOfContents';
import { LegalSection } from '../components/legal/LegalSection';
import { LegalHighlight } from '../components/legal/LegalHighlight';
import { LegalTimeline } from '../components/legal/LegalTimeline';
import { LegalSDKList } from '../components/legal/LegalSDKList';
import { LegalToggles } from '../components/legal/LegalToggles';
import { LegalRights } from '../components/legal/LegalRights';
import { LegalDataTable } from '../components/legal/LegalDataTable';
import { LegalClause } from '../components/legal/LegalClause';
import { LegalContact } from '../components/legal/LegalContact';
import { apiService } from '../services/apiService';
import type { PrivacyPolicy } from '../types/legal';

export const PrivacyPolicyPage: React.FC = () => {
  const [privacy, setPrivacy] = useState<PrivacyPolicy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.getPrivacyPolicy();
        setPrivacy(data);
      } catch (err) {
        setError('Failed to load Privacy Policy. Please try again later.');
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

  if (error || !privacy) {
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
      <LegalHeader title="Privacy Policy" version={privacy.version} />

      <main className="max-w-2xl mx-auto pb-20">
        <LegalHero 
          eyebrow={privacy.hero.eyebrow}
          titlePrefix="Your data, your"
          emphasisWord="choice"
          titleSuffix="."
          effectiveDate={privacy.effectiveDate}
          governingLaw={privacy.hero.meta.compliance}
        />

        {/* At a glance section */}
        <div className="flex flex-wrap px-4 mb-6">
          {privacy.atAGlance.map((item, index) => (
            <div key={index} className="w-1/2 p-2">
              <div className="bg-surface rounded-2xl p-4 border border-border-light flex flex-row items-center shadow-sm">
                <span className="text-lg mr-2">{item.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-tight flex-1 text-text-secondary">{item.text}</span>
              </div>
            </div>
          ))}
        </div>

        <LegalTableOfContents 
          items={privacy.tableOfContents} 
          onItemPress={handleScrollToSection}
        />

        {privacy.sections.map((section) => (
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

            {section.timeline && (
              <LegalTimeline items={section.timeline} />
            )}

            {section.sdks && (
              <LegalSDKList sdks={section.sdks} />
            )}

            {section.toggles && (
              <LegalToggles toggles={section.toggles} />
            )}

            {section.rights && (
              <LegalRights rights={section.rights} />
            )}

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

export default PrivacyPolicyPage;
