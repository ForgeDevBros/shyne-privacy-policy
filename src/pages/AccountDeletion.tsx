import React from 'react';
import { LegalHeader } from '../components/legal/LegalHeader';

const GOOGLE_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSch1s-WqPc7Mw6RKBLRCFpXwmkOlrf5plav43sAoMhSTBF4og/viewform?embedded=true';

export const AccountDeletionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <LegalHeader title="Account Deletion" version="1.0" />

      <main className="max-w-lg mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-serif text-text mb-3">
            Delete your <span className="italic text-primary">account.</span>
          </h1>
          <p className="text-sm text-text-tertiary leading-relaxed">
            We're sorry to see you go. Follow the steps below to request permanent deletion of your <strong className="text-text-secondary">Shyne - Periods and Mood Tracker</strong> account and all associated data.
          </p>
        </div>

        {/* App & Developer Info */}
        <div className="bg-surface rounded-2xl p-5 border border-border-light shadow-sm mb-8">
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="font-bold uppercase tracking-wider text-text-tertiary mb-1">App Name</p>
              <p className="text-sm text-text-secondary font-medium">Shyne - Periods and Mood Tracker</p>
            </div>
            <div>
              <p className="font-bold uppercase tracking-wider text-text-tertiary mb-1">Developer</p>
              <p className="text-sm text-text-secondary font-medium">STRK Labs</p>
            </div>
            <div>
              <p className="font-bold uppercase tracking-wider text-text-tertiary mb-1">Company</p>
              <p className="text-sm text-text-secondary font-medium">STRK Labs</p>
            </div>
            <div>
              <p className="font-bold uppercase tracking-wider text-text-tertiary mb-1">Contact</p>
              <p className="text-sm text-text-secondary font-medium">strklabs@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-surface rounded-3xl p-8 border border-border-light shadow-sm mb-8">
          <h2 className="text-lg font-serif text-text-secondary mb-5">How it works</h2>
          <ol className="space-y-4 text-sm text-text-tertiary list-none pl-0">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">1</span>
              <span>Fill out the account deletion request form below with your registered name and email address.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">2</span>
              <span>Our privacy team at <strong className="text-text-secondary">strklabs@gmail.com</strong> will receive your request and verify your identity.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">3</span>
              <span>Once verified, your account and all personal data will be permanently deleted within <strong className="text-text-secondary">30 days</strong>.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">4</span>
              <span>You'll receive a confirmation email once the deletion is complete.</span>
            </li>
          </ol>
        </div>

        {/* Embedded Google Form */}
        <div className="bg-surface rounded-3xl border border-border-light shadow-sm mb-8 overflow-hidden">
          <div className="px-8 pt-8 pb-4">
            <h2 className="text-lg font-serif text-text-secondary mb-1">Request Account Deletion</h2>
            <p className="text-xs text-text-tertiary leading-relaxed">
              Please fill out the form below to submit your deletion request.
            </p>
          </div>
          <iframe
            src={GOOGLE_FORM_EMBED_URL}
            width="100%"
            height="600"
            className="border-0"
            title="Account Deletion Request Form"
          >
            Loading form…
          </iframe>
        </div>

        {/* Warning */}
        <div className="bg-rose-50 rounded-2xl p-4 border border-rose-100 flex items-start mb-8">
          <svg className="text-rose-600 mr-3 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" />
          </svg>
          <div>
            <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-1">Permanent Action</h4>
            <p className="text-[11px] text-rose-800 leading-relaxed">
              Account deletion is permanent and irreversible. You will lose access to all your wellness data, insights, and cycle history. This action cannot be undone.
            </p>
          </div>
        </div>

        {/* Data that will be deleted */}
        <div className="bg-surface rounded-2xl p-6 border border-border-light shadow-sm">
          <h3 className="text-sm font-serif text-text-secondary mb-3">Data that will be deleted</h3>
          <ul className="space-y-2 text-xs text-text-tertiary">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
              Your profile information and account credentials
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
              All wellness data, cycle history, and health insights
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
              App preferences and personalized settings
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
              Any stored communication or support history
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AccountDeletionPage;
