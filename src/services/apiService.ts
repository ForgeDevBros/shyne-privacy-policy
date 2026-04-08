import type { PrivacyPolicy, TermsOfCondition } from '../types/legal';

const termsOfCondition: TermsOfCondition = {
  title: 'Terms & Conditions',
  lastUpdated: '2025-03-30',
  version: '1.0',
  tableOfContents: [
    { num: '01', text: 'Acceptance & Eligibility' },
    { num: '02', text: 'About Shyne & Our Services' },
    { num: '03', text: 'Health Data & Sensitive Information' },
    { num: '04', text: 'How We Use Your Data' },
    { num: '05', text: 'Data Sharing & Third Parties' },
    { num: '06', text: 'Your Rights & Controls' },
    { num: '07', text: 'Medical Disclaimer' },
    { num: '08', text: 'Subscriptions & Payments' },
    { num: '09', text: 'User Conduct' },
    { num: '10', text: 'Intellectual Property' },
    { num: '11', text: 'Limitation of Liability & Business Changes' },
    { num: '12', text: 'Governing Law & Disputes' },
    { num: '13', text: 'Changes to These Terms' },
    { num: '14', text: 'Contact Us' },
  ],
  sections: [
    {
      num: '01',
      title: 'Acceptance & Eligibility',
      icon: '✦',
      iconBackground: '#FDF6F0', // blush-like
      clauses: [
        {
          title: 'Agreement to Terms',
          dotColor: '#C4614A',
          body: 'By downloading, installing, or using Shyne, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree, please uninstall the app and do not use our services.',
        },
        {
          title: 'Age Requirement',
          dotColor: '#7A9E7E',
          chips: [{ label: 'Legal', type: 'legal' }],
          body: 'Shyne is intended for users who are 18 years of age or older. If you are between 13–17 years of age, you may use Shyne only with verifiable parental or guardian consent. We do not knowingly collect data from children under 13.',
        },
        {
          title: 'Account Registration',
          dotColor: '#C8BED8',
          body: 'You agree to provide accurate and complete information when creating your account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.',
        },
      ],
    },
    {
      num: '02',
      title: 'About Shyne & Our Services',
      icon: '○',
      iconBackground: '#F5F2F8', // lavender-light-like
      highlights: [
        {
          type: 'blush',
          title: 'What Shyne provides',
          body: "Shyne is a women's wellness app offering menstrual cycle tracking, mood and symptom logging, sleep and energy insights, phase-based wellness guidance, and personalised content. All features are for general wellness purposes only and do not constitute medical advice or diagnosis.",
        },
      ],
      clauses: [
        {
          title: 'Service Availability',
          dotColor: '#C4614A',
          body: 'We strive to keep Shyne available at all times, but we do not guarantee uninterrupted access. We may modify, suspend, or discontinue features with or without notice, and shall not be liable to you or any third party for doing so.',
        },
        {
          title: 'AI & Predictive Features',
          dotColor: '#7A9E7E',
          chips: [{ label: 'AI', type: 'new' }],
          body: 'Shyne uses algorithmic and AI-assisted predictions for cycle, ovulation, and mood insights. These predictions improve with more data logged but are estimates only — they are not guaranteed to be accurate and should never replace professional medical judgment.',
        },
      ],
    },
    {
      num: '03',
      title: 'Health Data & Sensitive Information',
      icon: '◎',
      iconBackground: '#F0F8FF', // green-light-like
      highlights: [
        {
          type: 'blush',
          title: '⚠ We handle your most intimate data',
          body: 'The information you log in Shyne — including menstrual cycle dates, symptoms, mood, sexual activity, sleep, and reproductive health details — is deeply personal. We treat it with the highest level of care and confidentiality under the DPDP Act 2023 and IT (SPDI) Rules 2011.',
        },
      ],
      dataTable: {
        headers: ['Data Type', 'Examples', 'Stored?'],
        rows: [
          { dataType: 'Cycle data', examples: 'Period dates, flow, ovulation', stored: '✓ Encrypted' },
          { dataType: 'Symptoms', examples: 'Cramps, mood, headaches, libido', stored: '✓ Encrypted' },
          { dataType: 'Lifestyle', examples: 'Sleep, energy, water, exercise', stored: '✓ Encrypted' },
          { dataType: 'Device data', examples: 'OS version, device ID, timezone', stored: '✓ Anonymised' },
          { dataType: 'Location', examples: 'Country/city (not GPS)', stored: '✓ Approximate' },
          { dataType: 'Third-party health', examples: 'Apple Health, Google Health', stored: '✓ With consent' },
        ],
      },
      clauses: [
        {
          title: 'Consent for Sensitive Data',
          dotColor: '#C4614A',
          body: 'In accordance with the DPDP Act 2023, we seek your explicit, informed, and specific consent before collecting any health-related personal data. You may withdraw consent at any time through Settings → Privacy. Withdrawal will not affect data already processed lawfully.',
        },
        {
          title: 'Data Encryption & Security',
          dotColor: '#C8BED8',
          body: 'All health data is encrypted at rest and in transit using AES-256 and TLS 1.3 standards. We conduct regular third-party security audits. In the event of a data breach affecting your data, we will notify you within 72 hours as required by law.',
        },
        {
          title: 'Data Retention',
          dotColor: '#7A9E7E',
          body: 'Your health data is retained for as long as your account is active, or for a period of 3 years after account deletion for legal compliance purposes. After that, all personally identifiable data is permanently deleted from our servers.',
        },
      ],
    },
    {
      num: '04',
      title: 'How We Use Your Data',
      icon: '◷',
      iconBackground: '#FDF6F0',
      dataTable: {
        headers: ['Purpose', 'Legal Basis'],
        rows: [
          { purpose: 'Provide cycle predictions & insights', legalBasis: 'Contract performance' },
          { purpose: 'Personalise content & recommendations', legalBasis: 'Consent' },
          { purpose: 'Improve app features & algorithms', legalBasis: 'Legitimate interest' },
          { purpose: 'Send notifications & reminders', legalBasis: 'Consent' },
          { purpose: 'Anonymous aggregate research', legalBasis: 'Consent (opt-in)' },
          { purpose: 'Customer support & safety', legalBasis: 'Legal obligation' },
          { purpose: 'Fraud prevention & security', legalBasis: 'Legitimate interest' },
        ],
      },
      highlights: [
        {
          type: 'green',
          title: 'What we will NEVER do',
          body: 'We will never sell your personal health data to advertisers, insurers, employers, or any third parties. We will never use your data to target you with health-condition-based ads. Your cycle data is not for sale — ever.',
        },
      ],
      clauses: [],
    },
    {
      num: '05',
      title: 'Data Sharing & Third Parties',
      icon: '◈',
      iconBackground: '#F5F2F8',
      clauses: [
        {
          title: 'Service Providers',
          dotColor: '#C4614A',
          chips: [{ label: 'Limited', type: 'alert' }],
          body: 'We work with vetted third-party service providers (e.g. cloud storage, analytics, push notifications) who process data on our behalf. These providers are contractually bound to handle your data only as instructed by Shyne and never for their own commercial purposes.',
        },
        {
          title: 'Third-Party Integrations',
          dotColor: '#7A9E7E',
          body: "When you choose to connect Shyne with Apple Health, Google Health Connect, or wearable devices, you grant us permission to read relevant data from those services. We access only the data categories you approve. Review those platforms' own privacy policies independently.",
        },
        {
          title: 'Legal Disclosure',
          dotColor: '#C8BED8',
          body: 'We may disclose your data if required by a valid court order or government authority under applicable Indian law. Where legally permissible, we will notify you before complying with any such request. We will not disclose more data than legally required.',
        },
        {
          title: 'Cross-Border Data Transfers',
          dotColor: '#C4614A',
          body: 'Some of our service providers may be located outside India. Any transfer of your data outside India complies with the DPDP Act 2023 and applicable cross-border transfer regulations. We ensure adequate data protection through standard contractual clauses.',
        },
        {
          title: 'Research Participation (Opt-in only)',
          dotColor: '#7A9E7E',
          body: "With your explicit, separately obtained consent, de-identified and aggregated data may be used to support women's health research. You may opt out of research use at any time in Settings → Privacy → Research Participation. Opting out does not affect app functionality.",
        },
      ],
    },
    {
      num: '06',
      title: 'Your Rights & Controls',
      icon: '✦',
      iconBackground: '#F0F8FF',
      rights: [
        { icon: '👁', title: 'Access', description: 'Request a copy of all data Shyne holds about you' },
        { icon: '✏️', title: 'Correct', description: 'Update or correct any inaccurate personal data' },
        { icon: '🗑', title: 'Delete', description: 'Request deletion of your account and all data' },
        { icon: '⬇️', title: 'Portability', description: 'Export your data in a machine-readable format' },
        { icon: '🚫', title: 'Restrict', description: 'Limit how we process your data in certain cases' },
        { icon: '🔕', title: 'Withdraw Consent', description: 'Revoke any previously given consent at any time' },
      ],
      highlights: [
        {
          type: 'lavender',
          title: 'How to exercise your rights',
          body: 'Go to Settings → Privacy → Your Data Rights, or email us at privacy@shyne.club. We will respond within 30 days. These rights are granted under the DPDP Act 2023 and the IT (SPDI) Rules 2011.',
        },
      ],
      clauses: [],
    },
    {
      num: '07',
      title: 'Medical Disclaimer',
      icon: '⚕',
      iconBackground: '#FDF6F0',
      highlights: [
        {
          type: 'blush',
          title: '⚠ Not a medical device',
          body: 'Shyne is a wellness app and is NOT a medical device. The information, predictions, content, and insights provided by Shyne are for general informational and wellness purposes only. They do not constitute, and must not be used as a substitute for, professional medical advice, diagnosis, or treatment.',
        },
      ],
      clauses: [
        {
          title: 'Consult a Professional',
          dotColor: '#C4614A',
          body: 'Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition, your menstrual health, reproductive health, mental health, or any symptoms you are experiencing. Never disregard professional medical advice because of something you read or saw in Shyne.',
        },
        {
          title: 'Not for Contraception',
          dotColor: '#9E8070',
          body: "Shyne's cycle and ovulation predictions are not intended to be used as, and should not be relied upon as, a method of contraception or family planning. Shyne does not guarantee the accuracy of fertile window predictions for pregnancy avoidance purposes.",
        },
        {
          title: 'Mental Health Content',
          dotColor: '#7A9E7E',
          body: 'Any mood-related content or suggestions in Shyne are for general wellness only. If you are experiencing a mental health crisis or emergency, please contact a licensed mental health professional or emergency services immediately.',
        },
      ],
    },
    {
      num: '08',
      title: 'Subscriptions & Payments',
      icon: '◉',
      iconBackground: '#F5F2F8',
      clauses: [
        {
          title: 'Free & Premium Plans',
          dotColor: '#C4614A',
          body: "Shyne offers a free tier with core tracking features. Shyne Premium unlocks advanced insights, AI-powered recommendations, and additional content. Pricing is displayed clearly before purchase and is subject to change with 30 days' notice to existing subscribers.",
        },
        {
          title: 'Billing & Auto-Renewal',
          dotColor: '#7A9E7E',
          body: 'Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current billing period. Your account will be charged for renewal within 24 hours prior to the period end. Payments are processed through the App Store or Google Play.',
        },
        {
          title: 'Cancellations & Refunds',
          dotColor: '#C8BED8',
          body: 'You may cancel your subscription at any time through your App Store or Google Play account settings. Refunds are subject to the refund policy of the respective platform. Shyne does not directly process refunds for in-app purchases.',
        },
        {
          title: 'Free Trial',
          dotColor: '#9E8070',
          body: 'Where a free trial is offered, it will automatically convert to a paid subscription at the end of the trial period unless cancelled before the trial ends. We will remind you via notification before the trial expires.',
        },
      ],
    },
    {
      num: '09',
      title: 'User Conduct',
      icon: '○',
      iconBackground: '#F0F8FF',
      clauses: [
        {
          title: 'Acceptable Use',
          dotColor: '#C4614A',
          body: "You agree to use Shyne only for lawful, personal, non-commercial purposes. You may not attempt to reverse-engineer, decompile, or extract the source code of the app, scrape data, or use automated tools to access Shyne's features.",
        },
        {
          title: 'Prohibited Activities',
          dotColor: '#9E8070',
          body: "You must not use Shyne to: (a) impersonate any person or entity; (b) transmit harmful, offensive, or illegal content; (c) attempt to gain unauthorised access to our systems; (d) interfere with other users' access to the service.",
        },
      ],
    },
    {
      num: '10',
      title: 'Intellectual Property',
      icon: '✦',
      iconBackground: '#FDF6F0',
      clauses: [
        {
          title: "Shyne's IP",
          dotColor: '#C4614A',
          body: 'All content, design, algorithms, trademarks, logos, and technology within Shyne are the exclusive property of Shyne Wellness Pvt. Ltd. and are protected by applicable copyright and intellectual property laws. You are granted a limited, non-exclusive, non-transferable licence to use the app for personal use only.',
        },
        {
          title: 'Your Content',
          dotColor: '#7A9E7E',
          body: 'Any data you log into Shyne remains yours. By using the app, you grant Shyne a limited licence to process your data solely for the purpose of providing our services to you, as described in these Terms. We do not claim ownership of your personal health data.',
        },
      ],
    },
    {
      num: '11',
      title: 'Limitation of Liability & Business Changes',
      icon: '◈',
      iconBackground: '#F5F2F8',
      highlights: [
        {
          type: 'lavender',
          title: 'Important legal limitation',
          body: "To the maximum extent permitted by Indian law, Shyne's total liability to you for any claims arising from your use of the app shall not exceed the amount you paid for the service in the 12 months preceding the claim. Shyne is not liable for indirect, incidental, or consequential damages.",
        },
      ],
      clauses: [
        {
          title: 'Accuracy of Predictions',
          dotColor: '#C4614A',
          body: 'Shyne does not warrant that cycle predictions, ovulation windows, or health insights will be accurate for every user. Biological cycles vary, and our algorithms are probabilistic estimates. You acknowledge that predictions may not reflect your actual physiological state.',
        },
        {
          title: 'Acquisition or Merger',
          dotColor: '#7A9E7E',
          chips: [{ label: 'New', type: 'new' }],
          body: "In the event of a merger, acquisition, or sale of Shyne's assets, your data may be transferred to the acquiring entity. Before any such transfer: (a) we will notify you at least 30 days in advance via in-app notification and email; (b) the acquiring entity must agree in writing to honour these Terms and our Privacy Policy; (c) if their privacy standards are materially lower than ours, you will be given the option to delete your account and all data before transfer occurs; (d) your reproductive health data will never be transferred to any entity whose primary business is data brokering, advertising, insurance, or employer health services.",
        },
        {
          title: 'Service Discontinuation',
          dotColor: '#C8BED8',
          chips: [{ label: 'New', type: 'new' }],
          body: 'If Shyne permanently ceases operations, we will: (a) provide at least 60 days\' notice before shutdown; (b) allow you to export a full copy of your data in JSON or CSV format during this period; (c) permanently and irreversibly delete all user health data from our servers within 90 days of discontinuation; (d) publish a public confirmation once all deletion is complete.',
        },
      ],
    },
    {
      num: '12',
      title: 'Governing Law & Disputes',
      icon: '◎',
      iconBackground: '#F0F8FF',
      clauses: [
        {
          title: 'Governing Law',
          dotColor: '#C4614A',
          body: 'These Terms are governed by and construed in accordance with the laws of India, including the Information Technology Act 2000, the Digital Personal Data Protection Act 2023, and the Consumer Protection Act 2019.',
        },
        {
          title: 'Dispute Resolution',
          dotColor: '#7A9E7E',
          body: 'Any disputes arising from these Terms shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.',
        },
        {
          title: 'Consumer Grievances',
          dotColor: '#C8BED8',
          chips: [{ label: 'India', type: 'legal' }],
          body: 'In compliance with the Consumer Protection (E-Commerce) Rules 2020, you may raise a grievance with our Grievance Officer at grievance@shyne.club. We shall acknowledge your complaint within 48 hours and resolve it within 30 days.',
        },
      ],
    },
    {
      num: '13',
      title: 'Changes to These Terms',
      icon: '◷',
      iconBackground: '#FDF6F0',
      clauses: [
        {
          title: 'Notification of Changes',
          dotColor: '#C4614A',
          body: 'We may update these Terms periodically. When we make material changes, we will notify you via in-app notification and email at least 14 days before the changes take effect. Your continued use of Shyne after that date constitutes acceptance of the updated Terms.',
        },
        {
          title: 'Version History',
          dotColor: '#7A9E7E',
          body: 'A version history of these Terms is available in Settings → Legal → Terms History. If you do not agree to updated Terms, you may delete your account before the effective date of the changes.',
        },
      ],
    },
    {
      num: '14',
      title: 'Contact Us',
      icon: '✉',
      iconBackground: '#F5F2F8',
      contact: {
        name: 'Shyne',
        tagline: "We're here to listen",
        general: 'hello@shyne.club',
        privacy: 'privacy@shyne.club',
        grievance: 'grievance@shyne.club',
        address: 'Shyne Wellness Pvt. Ltd., Bengaluru, KA 560001',
      },
      clauses: [],
    },
  ],
};

const privacyPolicy: PrivacyPolicy = {
  title: 'Privacy Policy',
  version: '2.2',
  effectiveDate: '2025-01-01',
  compliance: ['DPDP Act 2023', 'IT (SPDI) Rules 2011'],
  appliesTo: 'Shyne iOS & Android apps',
  hero: {
    eyebrow: "Shyne Women's Wellness",
    title: 'Your data, your choice.',
    meta: {
      effective: 'January 1, 2025',
      version: '2.2',
      compliance: 'DPDP Act 2023 · IT (SPDI) Rules 2011',
      appliesTo: 'Shyne iOS & Android apps',
    },
  },
  atAGlance: [
    { icon: '🚫', text: 'We never sell your health data' },
    { icon: '🔒', text: 'AES-256 encryption, always' },
    { icon: '✋', text: 'You control & delete your data' },
    { icon: '', text: 'No ads targeted to your cycle' },
    { icon: '📍', text: 'No exact GPS location collected' },
    { icon: '👶', text: 'No data from under 13s' },
    { icon: '⚖', text: 'We fight all government data requests' },
    { icon: '🏛', text: '60-day notice if Shyne shuts down' },
  ],
  tableOfContents: [
    { num: '01', text: 'What Data We Collect' },
    { num: '02', text: 'How We Collect It' },
    { num: '03', text: 'Why We Use Your Data' },
    { num: '04', text: 'Third-Party SDKs & Services' },
    { num: '05', text: 'Law Enforcement Requests' },
    { num: '06', text: 'Cookies & Tracking' },
    { num: '07', text: 'Data Storage & Security' },
    { num: '08', text: 'Retention, Deletion & Shutdown' },
    { num: '09', text: 'Your Privacy Controls' },
    { num: '10', text: 'Your Legal Rights' },
    { num: '11', text: "Children's Privacy" },
    { num: '12', text: 'Cross-Border Transfers' },
    { num: '13', text: 'Policy Changes' },
    { num: '14', text: 'Contact & DPO' },
  ],
  sections: [
    {
      num: '01',
      title: 'What Data We Collect',
      icon: '○',
      iconBackground: '#FDF6F0',
      dataTable: {
        headers: ['Category', 'Specific Data', 'Required?'],
        rows: [
          { category: 'Cycle & Reproductive', data: 'Period dates, flow intensity, ovulation, spotting, cycle length', required: 'Core' },
          { category: 'Symptoms & Mood', data: 'Cramps, bloating, headaches, mood, energy, libido, discharge', required: 'Optional' },
          { category: 'Lifestyle', data: 'Sleep hours, water intake, exercise, caffeine, alcohol, diet', required: 'Optional' },
          { category: 'Account', data: 'Name, email, date of birth, password (hashed)', required: 'Core' },
          { category: 'Device & Tech', data: 'Device model, OS version, app version, timezone, language', required: 'Auto' },
          { category: 'Usage Analytics', data: 'Features used, session duration, crash logs (anonymised)', required: 'Auto' },
          { category: 'Location', data: 'Country & city only (from IP). No GPS coordinates.', required: 'Auto' },
          { category: 'Health Integrations', data: 'Apple Health / Google Health data (only with your explicit consent)', required: 'Optional' },
          { category: 'Inferred Health Data', data: 'Possible pregnancy, cycle irregularity, mood condition — derived algorithmically from logged patterns', required: 'Auto (opt-out)', isNew: true },
        ],
      },
      highlights: [
        {
          type: 'blush',
          title: '⚠ Sensitive health data',
          body: 'Menstrual, reproductive, and mood data is classified as sensitive personal data under the IT (SPDI) Rules 2011. We collect it only with your explicit consent and store it with the highest level of protection.',
        },
      ],
      clauses: [
        {
          title: 'About inferred & derived data',
          dotColor: '#C8BED8',
          body: "Shyne's algorithms may derive or infer health-related information from patterns in the data you provide — for example, inferring a possible pregnancy from significant changes in your logging behaviour, or suggesting a mood condition from repeated symptom patterns. All inferred data is treated with the same sensitivity as directly logged health data. It is never sold, shared for advertising, or used to train external models. You may disable inference-based personalisation at any time in Settings → Privacy → Personalisation.",
        },
      ],
    },
    {
      num: '02',
      title: 'How We Collect It',
      icon: '◎',
      iconBackground: '#F5F2F8',
      clauses: [
        {
          title: 'Directly from you',
          dotColor: '#C4614A',
          body: 'When you log symptoms, moods, cycle dates, or any health information in the app. You always choose what to log — nothing is inferred without your input.',
        },
        {
          title: 'Automatically from your device',
          dotColor: '#7A9E7E',
          body: 'Device identifiers, OS version, crash reports, and session data are collected automatically to help us maintain app performance. This data is anonymised before analysis.',
        },
        {
          title: 'From connected health platforms',
          dotColor: '#C8BED8',
          chips: [{ label: 'Consent only', type: 'green' }],
          body: 'If you choose to connect Apple Health or Google Health Connect, we import only the specific data categories you approve during that connection flow. You can disconnect at any time in Settings → Integrations.',
        },
      ],
    },
    {
      num: '03',
      title: 'Why We Use Your Data',
      icon: '✦',
      iconBackground: '#F0F8FF',
      dataTable: {
        headers: ['Purpose', 'Data Used', 'Basis'],
        rows: [
          { purpose: 'Cycle & ovulation predictions', dataUsed: 'Cycle dates, symptoms', basis: 'Contract' },
          { purpose: 'Personalised phase-based content', dataUsed: 'Cycle phase, mood, lifestyle', basis: 'Consent' },
          { purpose: 'Push notifications & reminders', dataUsed: 'Predicted dates, preferences', basis: 'Consent' },
          { purpose: 'App performance & bug fixes', dataUsed: 'Device data, crash logs', basis: 'Legit. interest' },
          { purpose: 'Fraud prevention & security', dataUsed: 'Account & device data', basis: 'Legit. interest' },
          { purpose: "Women's health research", dataUsed: 'De-identified, aggregated', basis: 'Consent (opt-in)' },
          { purpose: 'Legal compliance', dataUsed: 'Account data', basis: 'Legal obligation' },
        ],
      },
      highlights: [
        {
          type: 'green',
          title: 'We will never',
          body: 'Sell your data to advertisers · Share your health data with insurers or employers · Use your cycle data to target you with ads · Share identifiable data with third parties for their own marketing',
        },
      ],
      clauses: [],
    },
    {
      num: '04',
      title: 'Third-Party SDKs & Services',
      icon: '◈',
      iconBackground: '#FDF6F0',
      highlights: [
        {
          type: 'blush',
          title: 'Why this section matters',
          body: "SDKs embedded in apps are how sensitive health data has been leaked in the past (see Flo's FTC case). We are explicit about every SDK we use and contractually prohibit them from using your health data for their own purposes.",
        },
      ],
      sdks: [
        { icon: '🔥', name: 'Firebase (Google)', purpose: 'Crash reporting & push notifications', tag: 'No health data · DPA' },
        { icon: '📊', name: 'Mixpanel', purpose: 'Anonymised feature usage analytics', tag: 'Anonymised only · DPA' },
        { icon: '☁️', name: 'AWS (Amazon)', purpose: 'Encrypted cloud data storage', tag: 'Encrypted at rest · DPA' },
        { icon: '💳', name: 'Razorpay', purpose: 'Subscription payment processing', tag: 'No health data · DPA' },
        { icon: '📧', name: 'SendGrid', purpose: 'Transactional emails only', tag: 'Email only · DPA' },
      ],
      clauses: [
        {
          title: 'Our Data Processing Agreements (DPAs)',
          dotColor: '#C4614A',
          body: "Every third-party SDK and service provider is bound by a Data Processing Agreement that explicitly prohibits them from: (a) accessing any health data fields — including cycle dates, symptoms, mood logs, or inferred health data — for any purpose; (b) using Shyne user data for their own advertising, retargeting, or commercial profiling; (c) sharing Shyne user data with any fourth party without Shyne's prior written consent; (d) retaining Shyne user data beyond the period required to perform the contracted service; (e) using Shyne data to train their own AI or ML models. These prohibitions override any conflicting default terms in the SDK provider's standard agreements. We audit DPA compliance annually and publish results in our transparency report.",
        },
      ],
    },
    {
      num: '05',
      title: 'Law Enforcement & Government Requests',
      icon: '⚖',
      iconBackground: '#FDF6F0', // blush-strong like
      highlights: [
        {
          type: 'blush',
          title: 'Our position — your health data will not be used against you',
          body: 'Shyne will never voluntarily share your personal or health data with any government authority, law enforcement agency, or regulatory body. We will only disclose data when compelled by a valid, legally binding court order under applicable Indian law — and even then, we will fight it.',
        },
      ],
      clauses: [
        {
          title: 'How we handle legal requests',
          dotColor: '#C4614A',
          body: 'When we receive a government or law enforcement data request, we will: (a) carefully review every request and challenge it legally if we believe it is overbroad, unlawful, or not supported by proper legal process; (b) disclose only the minimum data strictly required by the scope of the order — nothing more; (c) notify you as soon as legally permissible that such a request was received and what data was disclosed; (d) publish an annual transparency report stating the number and type of data requests received.',
        },
        {
          title: 'We will never proactively cooperate',
          dotColor: '#7A9E7E',
          body: 'Shyne does not participate in voluntary data-sharing programmes with any government, law enforcement, or intelligence body. We do not provide data in advance of a formal legal order, regardless of the nature of an inquiry. Your reproductive health data will never be proactively disclosed.',
        },
        {
          title: 'Architectural separation as a safeguard',
          dotColor: '#C8BED8',
          body: 'Shyne stores your personal identifiers (name, email, phone) separately from your health tracking data at the database level. In the event a valid legal order is received, this separation significantly limits what can be linked to your identity. Users who activate Privacy Mode benefit from the highest level of this protection — even Shyne cannot connect their health records to their identity.',
        },
        {
          title: 'Insurers & employers — never',
          dotColor: '#9E8070',
          body: 'Shyne will never share your health data with insurance companies, employers, HR platforms, or any entity whose business involves underwriting risk or employment decisions — regardless of whether a request is framed as voluntary or compelled.',
        },
      ],
    },
    {
      num: '06',
      title: 'Cookies & Tracking',
      icon: '◷',
      iconBackground: '#F5F2F8',
      dataTable: {
        headers: ['Type', 'Purpose', 'Can opt out?'],
        rows: [
          { type: 'Essential', purpose: 'App login, session security', canOptOut: 'No (required)' },
          { type: 'Functional', purpose: 'Preferences, language, theme', canOptOut: 'No (required)' },
          { type: 'Analytics', purpose: 'Anonymised feature usage', canOptOut: '✓ Yes' },
          { type: 'Research', purpose: 'Aggregate health research', canOptOut: '✓ Yes' },
          { type: 'Marketing', purpose: 'Not used inside the app', canOptOut: 'N/A' },
        ],
      },
      clauses: [
        {
          title: 'No ad tracking',
          dotColor: '#7A9E7E',
          body: 'Shyne does not use advertising trackers, ad networks, or any tracking SDKs for commercial retargeting. We do not share device identifiers with any advertising platform.',
        },
      ],
    },
    {
      num: '07',
      title: 'Data Storage & Security',
      icon: '🔒',
      iconBackground: '#F0F8FF',
      clauses: [
        {
          title: 'Encryption',
          dotColor: '#C4614A',
          body: 'All health data is encrypted at rest using AES-256 and in transit using TLS 1.3. Encryption keys are managed separately from data and rotated quarterly.',
        },
        {
          title: 'Storage Location',
          dotColor: '#7A9E7E',
          body: 'Your data is primarily stored on AWS servers. Servers processing Indian user data are located in the AWS Mumbai (ap-south-1) region in compliance with data localisation guidelines.',
        },
        {
          title: 'Access Controls',
          dotColor: '#C8BED8',
          body: 'Only authorised Shyne engineers with a legitimate operational need can access user data, and only in anonymised form. All access is logged, audited, and reviewed monthly.',
        },
        {
          title: 'Breach Notification',
          dotColor: '#9E8070',
          chips: [{ label: 'Legal', type: 'alert' }],
          body: 'In the event of a data breach affecting your personal data, we will notify you and the relevant authority within 72 hours of becoming aware, as required under applicable Indian law. We will clearly communicate what was affected and what steps we are taking.',
        },
      ],
    },
    {
      num: '08',
      title: 'Retention, Deletion & Shutdown',
      icon: '◉',
      iconBackground: '#FDF6F0',
      timeline: [
        {
          dotColor: '#C4614A',
          title: 'While your account is active',
          description: 'All health data is retained to power your cycle history, predictions, and insights.',
        },
        {
          dotColor: '#C4614A',
          title: 'Account deletion requested',
          description: 'Personal health data is deleted within 30 days. A 30-day grace period allows you to recover your account if deleted accidentally.',
        },
        {
          dotColor: '#C8BED8',
          title: 'Post-deletion (up to 3 years)',
          description: 'Anonymised, non-identifiable aggregate data may be retained for legal compliance and research. This cannot be linked back to you.',
        },
        {
          dotColor: '#7A9E7E',
          title: 'After 3 years',
          description: 'All data — including anonymised records — is permanently and irreversibly deleted from all servers and backups.',
        },
      ],
      clauses: [
        {
          title: 'Acquisition or merger',
          dotColor: '#C4614A',
          chips: [{ label: 'New', type: 'alert' }],
          body: "In the event of a merger, acquisition, or sale of Shyne's assets, your data may be transferred to the acquiring entity. Before any such transfer: (a) we will notify you at least 30 days in advance via in-app notification and email; (b) the acquiring entity must agree in writing to honour these Terms and our Privacy Policy; (c) if the acquiring entity's privacy standards are materially lower than ours, you will be given the option to delete your account and all data before transfer occurs; (d) your reproductive health data will never be transferred to any entity whose primary business is data brokering, advertising, insurance, or employer health services.",
        },
        {
          title: 'Service shutdown',
          dotColor: '#7A9E7E',
          chips: [{ label: 'New', type: 'alert' }],
          body: "If Shyne permanently ceases operations, we will: (a) provide at least 60 days' notice before shutdown; (b) allow you to export a full copy of your data in JSON or CSV format during this period; (c) permanently and irreversibly delete all user health data from our servers within 90 days of discontinuation; (d) publish a public confirmation once all deletion is complete.",
        },
      ],
    },
    {
      num: '09',
      title: 'Your Privacy Controls',
      icon: '✦',
      iconBackground: '#F5F2F8',
      highlights: [
        {
          type: 'lavender',
          title: 'Manage in Settings → Privacy',
          body: "All of these controls are available directly inside the app. You don't need to contact us to change them.",
        },
      ],
      toggles: [
        { icon: '📊', name: 'Analytics sharing', description: 'Help us improve Shyne with anonymised usage data', defaultOn: true },
        { icon: '🔬', name: 'Research participation', description: "Contribute de-identified data to women's health research", defaultOn: false },
        { icon: '🔔', name: 'Personalised notifications', description: 'Phase-based tips and cycle reminders', defaultOn: true },
        { icon: '🍏', name: 'Apple Health sync', description: 'Import sleep, steps, and fitness data', defaultOn: false },
      ],
      clauses: [],
    },
    {
      num: '10',
      title: 'Your Legal Rights',
      icon: '○',
      iconBackground: '#F0F8FF',
      rights: [
        { icon: '👁', title: 'Access', description: 'Get a full copy of your data', action: 'Settings → Your Data' },
        { icon: '✏️', title: 'Correct', description: 'Fix inaccurate account info', action: 'Settings → Profile' },
        { icon: '🗑', title: 'Delete', description: 'Erase your account & all data', action: 'Settings → Delete Account' },
        { icon: '⬇️', title: 'Portability', description: 'Export data as JSON or CSV', action: 'Settings → Export Data' },
        { icon: '🚫', title: 'Object', description: 'Stop certain processing types', action: 'Email privacy@' },
        { icon: '↩️', title: 'Withdraw Consent', description: 'Revoke any consent anytime', action: 'Settings → Privacy' },
      ],
      clauses: [
        {
          title: 'Response time',
          dotColor: '#C4614A',
          body: 'We acknowledge all data rights requests within 48 hours and fulfil them within 30 days, as required under the DPDP Act 2023. For complex requests, we may extend this by 30 additional days with prior notice.',
        },
      ],
    },
    {
      num: '11',
      title: "Children's Privacy",
      icon: '👶',
      iconBackground: '#FDF6F0',
      clauses: [
        {
          title: 'Under 13',
          dotColor: '#C4614A',
          body: 'Shyne does not knowingly collect any personal data from children under the age of 13. If we become aware that a user is under 13, we will immediately delete their account and all associated data without notice.',
        },
        {
          title: 'Ages 13–17',
          dotColor: '#7A9E7E',
          chips: [{ label: 'Parental consent', type: 'alert' }],
          body: "Users between 13 and 17 may use Shyne only with verified parental or guardian consent. Parents may request access to, or deletion of, their minor child's data by contacting privacy@shyne.club with proof of guardianship.",
        },
      ],
    },
    {
      num: '12',
      title: 'Cross-Border Data Transfers',
      icon: '🌐',
      iconBackground: '#F5F2F8',
      clauses: [
        {
          title: 'Primary storage: India',
          dotColor: '#C4614A',
          body: 'Your health data is primarily stored within India (AWS Mumbai). Some service providers such as analytics and email tools may process limited, non-health data outside India.',
        },
        {
          title: 'Safeguards for overseas transfers',
          dotColor: '#C8BED8',
          body: 'Any transfer of personal data outside India complies with the DPDP Act 2023. We use Standard Contractual Clauses (SCCs) with all overseas processors to ensure equivalent data protection standards apply.',
        },
      ],
    },
    {
      num: '13',
      title: 'Policy Changes',
      icon: '◷',
      iconBackground: '#F0F8FF',
      clauses: [
        {
          title: 'How we notify you',
          dotColor: '#C4614A',
          body: 'When we make material changes to this Privacy Policy, we will notify you via in-app banner and email at least 14 days before changes take effect. Minor clarifications may be updated without prior notice, with the updated date reflected at the top.',
        },
        {
          title: 'Version archive',
          dotColor: '#7A9E7E',
          body: 'All previous versions of this Privacy Policy are archived and accessible at Settings → Legal → Privacy Policy History. You may review any prior version at any time.',
        },
      ],
    },
    {
      num: '14',
      title: 'Contact & DPO',
      icon: '✉',
      iconBackground: '#FDF6F0',
      contact: {
        name: 'Shyne',
        tagline: 'Data Protection contacts',
        dpo: 'dpo@shyne.club',
        privacy: 'privacy@shyne.club',
        grievance: 'grievance@shyne.club',
        responseTime: 'Within 30 days of any request',
        address: 'Shyne Wellness Pvt. Ltd., Bengaluru, KA 560001, India',
      },
      clauses: [],
    },
  ],
};

export const apiService = {
  async getPrivacyPolicy(): Promise<PrivacyPolicy> {
    return Promise.resolve(privacyPolicy);
  },

  async getTermsOfCondition(): Promise<TermsOfCondition> {
    return Promise.resolve(termsOfCondition);
  }
};
