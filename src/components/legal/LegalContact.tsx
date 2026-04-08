import React from 'react';
import type { Contact } from '../../types/legal';

interface LegalContactProps {
  contact: Contact;
}

export const LegalContact: React.FC<LegalContactProps> = ({ contact }) => {
  return (
    <div className="mx-6 my-6 p-6 rounded-3xl bg-surface shadow-sm border border-border-light">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-serif text-text mb-1">{contact.name}</h3>
        <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary">{contact.tagline}</p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Privacy & Legal</h4>
          <p className="text-sm font-medium text-text-secondary mb-0.5">{contact.privacy}</p>
          <p className="text-xs text-text-tertiary">Privacy Queries & DPO</p>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Grievance Officer</h4>
          <p className="text-sm font-medium text-text-secondary mb-0.5">{contact.grievance}</p>
          <p className="text-xs text-text-tertiary">Compliance & Disputes</p>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Registered Address</h4>
          <p className="text-sm leading-relaxed text-text-secondary">{contact.address}</p>
        </div>

        {contact.responseTime && (
          <div className="pt-4 border-t border-stone-50 text-center">
            <p className="text-[10px] italic text-text-tertiary">
              Estimated response time: {contact.responseTime}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
