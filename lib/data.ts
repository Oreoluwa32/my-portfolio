export const profile = {
  name: "Oreoluwa Adewale",
  role: "Full-Stack Engineer",
  location: "Lagos, Nigeria",
  email: "adewalepete08@gmail.com",
  phone: "+2348060399046",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/Oreoluwa32",
    twitter: "https://twitter.com/OreoluwaAdewal7",
    linkedin: "#",
  },
  blurb:
    "Creative, detail-oriented full-stack engineer with hands-on experience building scalable mobile and web apps across transportation, fintech, and interactive platforms. I specialize in responsive frontends, backend API integration, and real-time features.",
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Dart", "Python", "C#", "C++", "HTML", "CSS"],
  },
  {
    group: "Frontend",
    items: ["React.js", "Tailwind CSS", "Flutter", "Responsive UI", "UI Optimization"],
  },
  {
    group: "Backend & Realtime",
    items: ["Node.js", "Django REST", "Supabase", "Postgres", "WebSocket", "Auth & RLS"],
  },
  {
    group: "Mobile & Games",
    items: ["Flutter (Android/iOS)", "Unity", "Google Play publishing"],
  },
  {
    group: "Tooling & Infra",
    items: ["Git", "Docker", "AWS", "API Integration", "Performance Tuning"],
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

export const projects: Project[] = [
  {
    title: "Excel Meet",
    tagline: "Professional services marketplace",
    description:
      "A Nigerian marketplace connecting skilled professionals with clients. Clients post jobs, professionals apply with proposals, and both sides talk through built-in realtime messaging. Includes Paystack subscriptions, FCM web push, full-text + trigram search, an admin dashboard, and an installable PWA — all running on Supabase with RLS, edge functions, and trigger-maintained badges.",
    stack: [
      "React 18",
      "Vite",
      "Tailwind",
      "Supabase",
      "Postgres",
      "Edge Functions",
      "Paystack",
      "FCM",
      "PWA",
    ],
    github: "https://github.com/Oreoluwa32/excel_meet",
    live: "https://excel-meet.vercel.app",
    featured: true,
  },
  {
    title: "Movr",
    tagline: "Ride-hailing & transportation app",
    description:
      "Production Flutter app integrated with Django REST APIs for authentication, trip booking, and onboarding. Live driver tracking and trip updates powered by WebSockets and location services; payments and production builds shipped to Android and iOS.",
    stack: ["Flutter", "Dart", "Django REST", "WebSocket", "Maps"],
    github: "https://github.com/Oreoluwa32/Mover",
    featured: true,
  },
  {
    title: "XPay by Creastech",
    tagline: "Fintech wallet & payments app",
    description:
      "Production Flutter app for wallet operations, bill payments, transfers, and transaction management. I build the responsive frontend and integrate it with backend APIs for secure auth, real-time transaction status, and payment flows — shipped and live on the Google Play Store.",
    stack: ["Flutter", "Dart", "REST APIs", "Auth", "Payments"],
    live: "https://play.google.com/store/apps/details?id=com.crestech.xpay",
  },
  {
    title: "OBS Bible Plugin",
    tagline: "Real-time Bible verse detection for OBS",
    description:
      "A C++ plugin for OBS Studio that uses NLP to detect Bible references spoken in real time and surface the verse on screen — useful for churches and livestreams.",
    stack: ["C++", "OBS SDK", "NLP"],
    github: "https://github.com/Oreoluwa32/OBS-Bible-Plugin",
  },
  {
    title: "EduQuiz",
    tagline: "Educational quiz mobile game",
    description:
      "Final-year university project: a mobile quiz game that helps students master coursework across departments through gamified, department-specific quizzes.",
    stack: ["Unity", "C#", "Mobile"],
    github: "https://github.com/Oreoluwa32/EduQuiz-Final-Year-School-Project-",
  },
  {
    title: "Word Match",
    tagline: "2D word-matching puzzle game",
    description:
      "A polished mobile word puzzle built in Unity with progression, animations, and tuned gameplay loops.",
    stack: ["Unity", "C#"],
    github: "https://github.com/Oreoluwa32/Word-Match",
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
    role: "Frontend Engineer",
    company: "Creastech Limited",
    period: "Dec 2025 — Present",
    bullets: [
      "Build responsive Flutter frontend features for the XPay mobile app, focused on smooth UX and clean UI implementation.",
      "Integrate frontend with backend APIs for authentication, wallet operations, bill payments, transfers, and transaction management.",
      "Ship payment-facing features: real-time transaction status, form validation, and secure auth flows.",
      "Partner with backend and product teams to fix production issues and improve Android stability.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Movr Technologies Ltd",
    period: "Jul 2024 — Present",
    bullets: [
      "Build and maintain mobile frontend features in Flutter — authentication, trip booking, and onboarding.",
      "Integrate the app with Django REST APIs for real-time data exchange and trip management.",
      "Implement maps and real-time tracking via WebSockets and location services for live driver and trip updates.",
      "Debug and optimize performance, payment integrations, and Android/iOS production builds.",
    ],
  },
  {
    role: "Game Developer",
    company: "Maliyo Game Studio",
    period: "Jul 2023 — Jan 2024",
    bullets: [
      "Led a team of 5 developers to design, build, and ship 5 mobile games to the Google Play Store.",
      "Improved gameplay performance and cut bugs ~30% via optimized C# scripts and iterative testing.",
      "Raised team delivery speed ~20% through structured task delegation and sprint planning.",
      "Boosted engagement with interactive UI/UX and optimized animations.",
    ],
  },
  {
    role: "Mobile Frontend Developer",
    company: "SQI College of ICT",
    period: "Jun 2022 — Jan 2023",
    bullets: [
      "Implemented responsive interfaces for web and mobile in collaboration with design and backend teams.",
      "Improved page-load performance up to 25% with minification, lazy loading, and other best practices.",
      "Built reusable UI components, cutting feature dev time 15–20%.",
      "Integrated multiple REST APIs for seamless cross-product UX.",
    ],
  },
  {
    role: "Robotic Engineering Intern",
    company: "RAINigeria",
    period: "Jan 2021 — May 2021",
    bullets: [
      "Contributed to CAD modeling, sensor integration, microcontroller programming, and robotic system testing.",
      "Raised sensor accuracy ~15% via calibration and troubleshooting.",
      "Ran real-world and simulated performance tests, cutting system errors ~10%.",
    ],
  },
];
