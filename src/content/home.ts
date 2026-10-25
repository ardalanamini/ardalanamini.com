export const PROFILE = {
  name           : "Ardalan Amini",
  availability   : "Open for Opportunities",
  careerStartYear: 2016,
  headline       : ["Engineering", "Resilient", "Systems."],
  introduction   : "I build the invisible engines that power the modern web.",
  biography      : "I'm Ardalan Amini, Software Engineer specializing in distributed systems,"
    + " high-performance infrastructure,"
    + " and scalable cloud solutions.",
  skills: ["Distributed_Systems", "API_Design", "Database_Optimization", "Cloud_Native"],
};

export const SECTIONS = {
  projects: {
    title      : "Projects",
    description: "Open Source Repositories & Contributions",
  },
  experience: {
    title      : "Experience",
    description: "System Logs // Professional Experience",
  },
  techStack: {
    title      : "Tech Stack",
    description: "The foundational technologies I use to build scalable, secure,"
      + " and performant backend infrastructures.",
  },
};

export const CONTACT = {
  title      : ["Establish", "Connection"],
  description: "Available for architectural consulting and high-performance software engineering.",
  email      : "ardalanamini22@gmail.com",
  emailLabel : "Send Packet",
};

export const SOCIAL_LINKS = {
  github: {
    label: "GitHub",
    url  : "https://github.com/ardalanamini",
  },
  linkedin: {
    label: "LinkedIn",
    url  : "https://www.linkedin.com/in/ardalanamini/",
  },
  telegram: {
    label: "Telegram",
    url  : "https://t.me/ardalanamini",
  },
};

export const TECH_STACK = [
  {
    name : "Languages",
    items: ["TypeScript", "Go", "PHP", "C++"],
  },
  {
    name : "Databases & Storage",
    items: ["MongoDB", "PostgreSQL", "Redis", "S3"],
  },
  {
    name : "Infrastructure",
    items: ["Kubernetes", "Docker", "AWS", "Terraform"],
  },
  {
    name : "Security",
    items: ["OAuth2", "JWT", "TLS/SSL", "Pen-testing"],
  },
] as const;

export const PROJECTS = [
  {
    title: "Foxify",
    description:
      "A fast, easy to use & typescript ready web framework for Node.js",
    metrics: ["152 Stars", "MIT License", "v0.10.7"],
    tech   : ["TypeScript", "Pnpm"],
    link   : "https://github.com/foxifyjs/foxify",
  },
  {
    title: "Kutt.it Node.js Client",
    description:
      "Node.js & browser (TypeScript) client for Kutt url shortener.",
    metrics: ["40 Stars", "MIT License", "v3.0.2"],
    tech   : ["TypeScript"],
    link   : "https://github.com/ardalanamini/node-kutt",
  },
  {
    title: "Github Automatic Changelog",
    description:
      "A GitHub action that automatically generates changelogs from commit messages.",
    metrics: ["28 Stars", "MIT License", "v4.0.6"],
    tech   : ["Node.js", "TypeScript", "GitHub Actions"],
    link   : "https://github.com/ardalanamini/auto-changelog",
  },
  {
    title: "Prototyped.js",
    description:
      "Common Typescript ready helpers & prototypes available for both Server-Side and Client-Side applications.",
    metrics: ["25 Stars", "MIT License", "v3.0.5"],
    tech   : ["TypeScript"],
    link   : "https://github.com/ardalanamini/prototyped.js",
  },
];

export const EXPERIENCES = [
  {
    company     : "Xcoins",
    role        : "Senior Software Engineer - Back End Team Lead",
    period      : "Sep 2022 - Nov 2025",
    description : "Crypto currency exchange and payment processing platform.",
    achievements: [
      "Nest.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    company: "AdaKerja",
    role   : "Senior Software Engineer",
    period : "Jul 2020 — Jul 2022",
    description:
      "Attendance & Payroll management system that consists of two sides, employers & job seekers.",
    achievements: [
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Docker",
      "AWS Lambda",
    ],
  },
  {
    company: "AInfluencer",
    role   : "Senior Back End Developer",
    period : "Jul 2019 — Jul 2020",
    description:
      "AI-based Instagram social marketing platform, editing, suggesting & automating posts & stories for influencers"
      + " & connecting them to the suitable accounts for advertisement purposes.",
    achievements: ["Express.js", "TypeScript", "Laravel", "MongoDB", "CI/CD"],
  },
  {
    company: "Chibaki",
    role   : "Senior Back End Developer",
    period : "Aug 2018 — Feb 2019",
    description:
      "Online platform to find local professionals suitable for the posted jobs that consisted of two sides,"
      + " employers & professionals.",
    achievements: ["Express.js", "Mongoose.js", "Jest", "MongoDB", "Docker"],
  },
  {
    company: "Jahangostar Pars Raden",
    role   : "Software Engineer",
    period : "Nov 2016 — Sep 2018",
    description:
      "Cloud based human resource management system allowing HR teams and business owners to manage and automate"
      + " contracts, attendances, leaves & salaries.",
    achievements: ["Laravel", "MariaDB", "React.js", "Redis", "Docker"],
  },
];

// Both representations use the same build-time statistics.
export const EXPERIENCE_SUMMARY = `${ new Date().getFullYear() - PROFILE.careerStartYear } years of experience,`
  + ` ${ EXPERIENCES.length } roles,`
  + ` ${ PROJECTS.length }+ personal projects, 1 motivated software engineer`;
