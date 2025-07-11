import type { Interval } from "date-fns";

// type ResumeSection = object;

interface NameSection {
  firstName: string;
  lastName: string;
}

type PictureSection = string;

interface ContactSection {
  email: string;
  phone: string;
  location: string;
  website?: string;
}

interface SummarySection {
  main: string;
  bullets?: string[];
}

interface ProfessionalProfiles {
  lkdIn: string;
  github?: string;
  // twitter?: string;
  // ig?: string;
}

interface Education {
  institution: string;
  type: string;
  location: string;
  interval: Interval;
  website?: URL;
  summary?: SummarySection;
}

interface Experience {
  company: string;
  sector: string;
  position: string;
  location: string;
  interval: Interval;
  website?: URL;
  summary?: SummarySection;
}

interface Resume {
  name: NameSection;
  picture: PictureSection;
  contact: ContactSection;
  summary?: SummarySection;
  professionalProfiles?: ProfessionalProfiles;
  education?: Education[];
  experience?: Experience[];
}

export type {
  NameSection,
  PictureSection,
  ContactSection,
  SummarySection,
  ProfessionalProfiles,
  Education,
  Experience,
  Resume,
};
