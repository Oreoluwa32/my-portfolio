export const profile = {
  name: "Oreoluwa Adewale",
  role: "Full-Stack Engineer",
  location: "Ibadan, Nigeria",
  email: "adewalepete08@gmail.com",
  phone: "+2348060399046",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/oreoluwa32",
    twitter: "https://twitter.com/OreoluwaAdewal7",
    linkedin: "#",
  },
  blurb:
    "I build reliable, end-to-end web products — from typed React UIs to APIs, data models, and deploys. Currently focused on TypeScript, Next.js, and Node, with side experience in Flutter and Unity.",
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C#", "Dart", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Redux", "React Native"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "REST", "GraphQL", "Auth (JWT, OAuth)"],
  },
  {
    group: "Data & Infra",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "Docker", "AWS"],
  },
  {
    group: "Tooling",
    items: ["Git", "GitHub Actions", "Jest", "Playwright", "Vitest", "Figma"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
};

// Replace these placeholders with your real projects.
export const projects: Project[] = [
  {
    title: "Project One",
    tagline: "Full-stack SaaS dashboard",
    description:
      "A multi-tenant analytics dashboard with auth, role-based access, and real-time charts. Replace with a real project description, problem solved, and your role.",
    stack: ["Next.js", "TypeScript", "Postgres", "Prisma", "Tailwind"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Project Two",
    tagline: "REST API + background workers",
    description:
      "A typed REST API with queue-backed jobs, rate limiting, and observability. Replace with what it actually does and the scale/impact.",
    stack: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Three",
    tagline: "Real-time collaboration app",
    description:
      "WebSocket-driven collaboration with optimistic UI and conflict resolution. Replace with the real product, users, and metrics.",
    stack: ["React", "Node.js", "Socket.IO", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Four",
    tagline: "Mobile app",
    description:
      "A cross-platform mobile app built with Flutter / React Native. Replace with the actual app and what shipped.",
    stack: ["Flutter", "Firebase"],
    github: "#",
    live: "#",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Founder & Lead Engineer",
    company: "QuantumWeb Studios",
    period: "2022 — Present",
    bullets: [
      "Shipped client web apps end-to-end: design system, API, deploy.",
      "Cut page load by ~40% via SSR, caching, and image optimization.",
      "Built reusable Next.js + Tailwind starter used across projects.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-employed",
    period: "2021 — Present",
    bullets: [
      "Delivered React/Next.js frontends and Node REST APIs for SMB clients.",
      "Set up CI/CD on GitHub Actions and Netlify/Vercel for zero-touch deploys.",
    ],
  },
];
