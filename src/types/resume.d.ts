import type { Interval } from "date-fns";

// type ResumeSection = object;

interface BasicSection {
  firstName: string;
  lastName: string;
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
  basic: BasicSection;
  summary?: SummarySection;
  professionalProfiles?: ProfessionalProfiles;
  education?: Education[];
  experience?: Experience[];
}
