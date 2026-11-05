/**
 * CENTRAL PORTFOLIO DATA
 * ----------------------
 * Update all personal content here. Components read from this file only.
 *
 * - `verified: false` marks sample content. The site labels it "Editable sample"
 *   until you set it to `true` after confirming the information.
 * - Leave optional fields out (or as empty strings) rather than inventing values.
 */
import type {
  AcademicEvent,
  Certificate,
  Degree,
  Experience,
  Profile,
  Publication,
  ResearchInterest,
  SkillGroup,
} from "@/types/portfolio";

export const profile: Profile = {
  name: "Mehejabin Jui",
  designation: "Master of Laws (LL.M.) Student",
  specialization: "Al-Fiqh & Law",
  university: "Islamic University, Bangladesh",
  previousDegree: "Bachelor of Laws (LL.B.), Islamic University, Bangladesh",
  headline: "Exploring Law, Justice & Islamic Jurisprudence.",
  intro:
    "I am Mehejabin Jui, an LL.M. student at Islamic University, Bangladesh, with an academic background in Law. My interests include Al-Fiqh, Islamic jurisprudence, comparative legal studies, and contemporary legal research. I am passionate about exploring the relationship between Islamic legal principles and modern legal systems.",
  about: [
    "My academic path began with the Bachelor of Laws (LL.B.) at Islamic University, Bangladesh, where I developed a foundation in legal reasoning, statutory interpretation, and the principles that govern justice in practice.",
    "I am now pursuing the Master of Laws (LL.M.) with a specialization in Al-Fiqh & Law. This pairs classical Islamic juristic thought with modern legal frameworks, and it is the lens through which I approach contemporary legal questions.",
    "I am an aspiring legal researcher and a student of Islamic jurisprudence. I have not yet been admitted to practice, and I see my current work as preparation for a career in legal research and, in time, legal practice.",
  ],
  philosophy:
    "I believe rigorous scholarship should serve people. Sound legal analysis rests on careful reading of primary sources, honest engagement with opposing views, and attention to how rules affect real lives.",
  aspirations:
    "I hope to contribute to legal research on the intersection of Islamic jurisprudence and modern legal systems, with particular attention to family law, women's rights, and comparative legal analysis.",
  cvPath: "/cv/Mehejabin-Jui-CV.pdf",
  email: "",
  socials: {
    linkedin: "",
    researchGate: "",
    googleScholar: "",
    facebook: "",
  },
};

export const degrees: Degree[] = [
  {
    verified: false,
    degree: "Master of Laws (LL.M.)",
    institution: "Islamic University, Bangladesh",
    specialization: "Al-Fiqh & Law",
    status: "Currently pursuing",
    session: "",
    department: "",
    coursework: [],
    achievements: [],
  },
  {
    verified: false,
    degree: "Bachelor of Laws (LL.B.)",
    institution: "Islamic University, Bangladesh",
    status: "Completed",
    session: "",
    graduationYear: "",
    cgpa: "",
    department: "",
    coursework: [],
    achievements: [],
  },
];

export const researchInterests: ResearchInterest[] = [
  { title: "Islamic Jurisprudence (Al-Fiqh)", description: "Classical juristic methodology and its application to contemporary questions." },
  { title: "Islamic Family Law", description: "Marriage, divorce, custody, and inheritance within Islamic and modern frameworks." },
  { title: "Comparative Legal Studies", description: "Comparing legal traditions to identify shared principles and points of divergence." },
  { title: "Islamic Constitutional Principles", description: "Governance, public law, and the relationship between authority and justice." },
  { title: "Human Rights and Islamic Law", description: "Examining rights-based discourse alongside Shariah principles." },
  { title: "Women's Rights in Islamic Jurisprudence", description: "Textual, historical, and reform-oriented perspectives on women's legal status." },
  { title: "Contemporary Legal Issues", description: "Current questions where law, technology, and society intersect." },
  { title: "Legal Philosophy", description: "The theoretical foundations of law, authority, and legitimacy." },
  { title: "Shariah and Modern Legal Systems", description: "How classical principles interact with codified national law." },
  { title: "Islamic Finance and Legal Frameworks", description: "Legal structures governing Shariah-compliant financial transactions." },
];

/** Leave empty until verified publications exist. The UI shows an empty state. */
export const publications: Publication[] = [];

export const events: AcademicEvent[] = [
  {
    verified: false,
    title: "[Sample] Seminar on Islamic Family Law",
    organizer: "[Organizer name]",
    date: "[Date]",
    venue: "[Venue]",
    participation: "Participant",
    description: "Editable sample. Replace with a real event you attended, or remove this entry.",
  },
];

export const certificates: Certificate[] = [
  {
    verified: false,
    title: "[Sample] Certificate of Completion",
    issuer: "[Issuing organization]",
    issueDate: "[Issue date]",
    credentialId: "",
    verificationUrl: "",
    category: "Training and Workshops",
    image: "",
  },
];

export const experiences: Experience[] = [];

export const skillGroups: SkillGroup[] = [
  {
    title: "Legal & Academic",
    skills: [
      { name: "Legal Research" }, { name: "Legal Writing" }, { name: "Case Analysis" },
      { name: "Legal Drafting" }, { name: "Comparative Legal Analysis" },
      { name: "Islamic Jurisprudence" }, { name: "Academic Writing" }, { name: "Literature Review" },
    ],
  },
  {
    title: "Communication",
    skills: [
      { name: "Public Speaking" }, { name: "Presentation" }, { name: "Debate" },
      { name: "Academic Communication" }, { name: "Team Collaboration" },
    ],
  },
  {
    title: "Digital",
    skills: [
      { name: "Microsoft Word" }, { name: "Microsoft PowerPoint" }, { name: "Microsoft Excel" },
      { name: "Academic Research Tools" }, { name: "Online Legal Research" },
    ],
  },
  {
    title: "Languages",
    skills: [{ name: "Bengali" }, { name: "English" }, { name: "Arabic" }],
  },
];
