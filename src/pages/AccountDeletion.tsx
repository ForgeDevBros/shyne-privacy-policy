import React from 'react';
import { LegalHeader } from '../components/legal/LegalHeader';

export const AccountDeletionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <LegalHeader title="Account Deletion" version="1.0" />
      
      <main className="max-w-md mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-serif text-text mb-3">Close your <span className="italic text-primary">account.</span></h1>
          <p className="text-sm text-text-tertiary leading-relaxed">
            We're sorry to see you go. To delete your account and all associated data, please send an email request to our privacy team.
          </p>
        </div>

        <div className="bg-surface rounded-3xl p-8 border border-border-light shadow-sm mb-8 text-center">
          <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          
          <h3 className="text-lg font-serif text-text-secondary mb-2">Email us to proceed</h3>
          <p className="text-xs text-text-tertiary mb-6 leading-relaxed">
            Please include your registered account email address in the message.
          </p>

          <a 
            href="mailto:forgedevbros@gmail.com?subject=Account Deletion Request" 
            className="inline-block px-8 py-4 bg-primary text-white rounded-2xl font-serif text-lg shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all active:scale-[0.98] no-underline"
          >
            Email Privacy Team
          </a>
          
          <div className="mt-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-text-tertiary mb-1">Direct Email</p>
            <span className="text-sm text-text-secondary font-medium">forgedevbros@gmail.com</span>
          </div>
        </div>

        <div className="bg-rose-50 rounded-2xl p-4 border border-rose-100 flex items-start">
          <svg className="text-rose-600 mr-3 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>
          </svg>
          <div>
            <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-1">Permanent Action</h4>
            <p className="text-[11px] text-rose-800 leading-relaxed">
              Account deletion is permanent. You will lose access to all your wellness data, insights, and cycle history.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountDeletionPage;
