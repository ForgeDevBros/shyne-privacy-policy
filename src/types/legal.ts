export interface TableOfContentItem {
  num: string;
  text: string;
}

export interface Chip {
  label: string;
  type: string; // 'legal' | 'new' | 'alert' | 'green'
}

export interface Clause {
  title: string;
  dotColor: string;
  body: string;
  chips?: Chip[];
}

export interface Highlight {
  type: string; // 'blush' | 'green' | 'lavender' | 'blush-strong'
  title: string;
  body: string;
}

export interface Row {
  [key: string]: string | boolean | undefined;
  isNew?: boolean;
}

export interface DataTable {
  headers: string[];
  rows: Row[];
}

export interface SDK {
  icon: string;
  name: string;
  purpose: string;
  tag: string;
}

export interface Right {
  icon: string;
  title: string;
  description: string;
  action?: string;
}

export interface Contact {
  name: string;
  tagline: string;
  general?: string;
  privacy: string;
  grievance: string;
  address: string;
  dpo?: string;
  responseTime?: string;
}

export interface TimelineItem {
  dotColor: string;
  title: string;
  description: string;
}

export interface Toggle {
  icon: string;
  name: string;
  description: string;
  defaultOn: boolean;
}

export interface Section {
  num: string;
  title: string;
  icon: string;
  iconBackground: string;
  clauses?: Clause[];
  highlights?: Highlight[];
  dataTable?: DataTable;
  rights?: Right[];
  contact?: Contact;
  sdks?: SDK[];
  timeline?: TimelineItem[];
  toggles?: Toggle[];
}

export interface TermsOfCondition {
  title: string;
  lastUpdated: string;
  version: string;
  tableOfContents: TableOfContentItem[];
  sections: Section[];
}

export interface PrivacyPolicy {
  title: string;
  version: string;
  effectiveDate: string;
  compliance: string[];
  appliesTo: string;
  hero: {
    eyebrow: string;
    title: string;
    meta: {
      effective: string;
      version: string;
      compliance: string;
      appliesTo: string;
    };
  };
  atAGlance: { icon: string; text: string }[];
  tableOfContents: TableOfContentItem[];
  sections: Section[];
}
