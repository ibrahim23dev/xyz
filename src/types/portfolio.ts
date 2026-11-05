/**
 * Type definitions for the portfolio content.
 * Every item that is not yet verified should carry `verified: false`
 * so the UI can label it as editable sample content.
 */

export type Verifiable = {
  /** Set to true only after the information has been confirmed by the owner. */
  verified: boolean;
};

export type Degree = Verifiable & {
  degree: string;
  institution: string;
  specialization?: string;
  status: "Currently pursuing" | "Completed";
  session?: string;
  graduationYear?: string;
  cgpa?: string;
  department?: string;
  coursework?: string[];
  achievements?: string[];
};

export type ResearchInterest = {
  title: string;
  description: string;
};

export type Publication = Verifiable & {
  title: string;
  abstract: string;
  date: string;
  venue: string;
  doi?: string;
  url?: string;
  category:
    | "Published Research Papers"
    | "Conference Papers"
    | "Academic Articles"
    | "Ongoing Research"
    | "Research Proposals"
    | "Legal Case Studies";
  pdf?: string;
};

export type ParticipationType =
  | "Participant"
  | "Presenter"
  | "Volunteer"
  | "Organizer"
  | "Speaker"
  | "Award Recipient";

export type AcademicEvent = Verifiable & {
  title: string;
  organizer: string;
  date: string;
  venue: string;
  participation: ParticipationType;
  description: string;
  image?: string;
};

export type Certificate = Verifiable & {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  image?: string;
  category: string;
};

export type Skill = {
  name: string;
  /** Proficiency is editable and stays blank until confirmed. */
  level?: "Basic" | "Intermediate" | "Advanced" | "Fluent" | "Native";
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export type Experience = Verifiable & {
  position: string;
  organization: string;
  duration: string;
  responsibilities: string[];
  contributions?: string[];
  relatedSkills?: string[];
};

export type Profile = {
  name: string;
  designation: string;
  specialization: string;
  university: string;
  previousDegree: string;
  headline: string;
  intro: string;
  about: string[];
  philosophy: string;
  aspirations: string;
  portrait?: string;
  cvPath: string;
  email?: string;
  socials: {
    linkedin?: string;
    researchGate?: string;
    googleScholar?: string;
    facebook?: string;
  };
};
