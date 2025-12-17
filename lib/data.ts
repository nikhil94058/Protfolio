// src/lib/data.ts

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  description: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  link: string;
};

export type EducationItem = {
  institute: string;
  degree: string;
  duration: string;
};


export type CodingProfileItem = {
  platform: string;
  rating: string;     // e.g., "2054" or "Max 1800"
  rank?: string;      // e.g., "Top 1.5%" or "Specialist"
  link: string;
};

// 2. New Type for Achievements
export type AchievementItem = {
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
};

export type PortfolioData = {
  hero: {
    name: string;
    roles: string[];
    bio: string;
  };
  about: {
    description: string;
    highlights: string[];
  };
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: string[];
  education: EducationItem[];
   codingProfiles: CodingProfileItem[]; // NEW
  achievements: AchievementItem[];     // NEW
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };



};





export const portfolioData: PortfolioData = {
  hero: {
    name: "Nikhil Kumar Das",
    roles: [
      "Full Stack Developer",
      "Competitive Programmer",
      "ICPC Regionalist ’25",
      "5★ CodeChef",
      "Expert @ Codeforces",
      "Knight @ LeetCode",
    ],
    bio:
      "Proficient in Data Structures & Algorithms. Passionate about building scalable systems, DApps, and modern web products.",
  },
  about: {
    description:
      "Hey! Myself, Nikhil Kumar Das. I am pursuing B.Tech in Computer Science and Engineering (Data Science) from NIT Patna. A 5★ Coder on CodeChef, Specialist on Codeforces, and Knight on LeetCode. I am passionate about Competitive Programming, Data Structures, and Algorithms. Currently learning and working on MERN Stack, Advanced Backend Development, AI/ML, Blockchain, DevOps, and UI/UX Design. Determined to achieve meaningful goals and contribute to impactful projects.",
    highlights: [
      "Competitive Programming",
      "MERN Stack",
      "AI/ML",
      "Blockchain",
      "Advanced Backend",
      "DApps",
      "Problem Solving",
      "Data Structures & Algorithms",
    ],
  },
  experience: [
    {
      company: "Platypus Box",
      role: "Full Stack Developer Intern",
      duration: "Jul 2024 – Present",
      description: [
        "Built scalable eCommerce platform using MERN stack.",
        "Implemented cloud integration and backend optimizations.",
        "Developed decentralized applications (DApps) on Ethereum.",
      ],
    },
    {
      company: "THINK INDIA NITP",
      role: "Web Developer",
      duration: "May 2024 – Present",
      description: ["Worked on web development projects using HTML, CSS, JS, and React."],
    },
    {
      company: "GDSC, NIT Patna",
      role: "Member",
      duration: "Mar 2024 – Present",
      description: ["Engaged in workshops, hackathons, and mentorship programs."],
    },
    {
      company: "Training & Placement Cell, NIT Patna",
      role: "Designer",
      duration: "Mar 2024 – Present",
      description: ["Designed graphics and web interfaces for student engagement."],
    },
    {
      company: "Web and Coding Club, NIT Patna",
      role: "Member",
      duration: "Mar 2024 – Present",
      description: ["Contributed to competitive programming and coding events."],
    },
  ],
  projects: [
  {
    title: "EcoFood – Food Donation Platform",
    description:
      "Built a scalable full-stack platform connecting food donors with NGOs using geolocation-based matching and real-time availability tracking. Implemented secure stateless authentication with Spring Security, JWT, and BCrypt with role-based access. Designed RESTful APIs following MVC architecture and optimized MongoDB queries. Developed a responsive Angular SPA with lazy loading, route guards, HTTP interceptors, and Google Maps integration.",
    tech: ["Angular", "Spring Boot", "Java", "MongoDB", "JWT", "BCrypt", "REST API", "Google Maps API"],
    github: "https://github.com/nikhil94058/EcoFood",
  },
  {
    title: "LandSol – Decentralized Land Management DApp",
    description:
      "Developed a MERN + Ethereum-based DApp where land parcels are minted as NFTs using ERC-721 tokens. Automated land transfer workflows via Solidity smart contracts and stored documents on IPFS (Pinata). Integrated Stripe payment gateway with MetaMask + Web3.js for secure blockchain transactions.",
    tech: ["Solidity", "Ethereum", "Polygon", "React.js", "Web3.js", "IPFS (Pinata)", "Hardhat", "ERC-721", "Stripe API"],
    link: "https://landsol.vercel.app",
    github: "https://github.com/nikhil94058/landsol",
  },
  {
    title: "Student Progress Tracker – CF Analytics",
    description:
      "Developed a full-stack dashboard to analyze Codeforces performance (ratings, streaks, activity). Automated daily data syncing with cron jobs and sent inactivity alerts via email. Designed a responsive UI with dark/light theme toggle and integrated real-time data from Codeforces API.",
    tech: ["MERN Stack", "REST API", "Codeforces API", "Tailwind CSS", "Cron Jobs", "React.js"],
    link: "https://cf-tracker.vercel.app",
    github: "https://github.com/nikhil94058/student-progress-tracker",
  },
  {
    title: "Medicare – Prescription Storage DApp",
    description:
      "Built a decentralized medical record system using Solidity smart contracts and IPFS for secure, role-based prescription storage. Enabled encrypted prescription sharing between doctors and patients with on-chain verification. Developed a RAG Chatbot for medical queries and enhanced RDP security with encryption, multi-factor authentication, and session monitoring.",
    tech: ["Solidity", "Ethereum", "React.js", "Web3.js", "Tailwind CSS", "IPFS", "RAG Chatbot", "Encryption", "MFA"],
    github: "https://github.com/nikhil94058/Medicare",
  },
  {
    title: "Nirbhaya – Emergency Voice Detection System",
    description:
      "Developed an emergency voice detection system that alerts SOS contacts in real-time for women’s safety. Integrated IoT sensors and mobile notifications for immediate response.",
    tech: ["IoT", "React Native", "Python", "AWS", "Push Notifications"],
    github: "https://github.com/nikhil94058/Nirbhaya",
  },
  {
    title: "JalChakshu – Crowdsourced Water Management System",
    description:
      "Built a web platform to monitor water availability and quality through crowdsourced data. Visualized water metrics on interactive maps and implemented alert system for anomalies.",
    tech: ["React.js", "Leaflet.js", "PostgreSQL", "Python", "Geospatial Analysis"],
    github: "https://github.com/nikhil94058/JalChakshu",
  },
  {
    title: "Expresso – Club Website",
    description:
      "Developed an informational website for a student club to showcase members, events, and official updates. Implemented a responsive design with interactive UI components for seamless user experience.",
    tech: ["React.js", "Tailwind CSS", "Node.js"],
    link: "https://expresso-club.vercel.app",
    github: "https://github.com/nikhil94058/Expresso",
  },
  {
    title: "University Management System",
    description:
      "Built a MERN + Redux-based university management system for tracking students, courses, and grades. Integrated role-based access and analytics dashboards.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS"],
    github: "https://github.com/nikhil94058/University-Management-System",
  },
],

  skills: [
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "C++",
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Solidity",
    "IPFS",
    "Blockchain",
    "REST API",
    "Tailwind CSS",
    "Hardhat",
    "MERN Stack",
    "AI/ML",
    "DevOps",
  ],
  education: [
    {
      institute: "National Institute of Technology, Patna",
      degree: "B.Tech + M.Tech Dual Degree CSE (Data Science)",
      duration: "Nov 2022 – Jun 2027 | CGPA: 9.35/10",
    },
    {
      institute: "BLSSP HS Narkatia",
      degree: "High School",
      duration: "2020 – 2022",
    },
  ],

codingProfiles: [
    {
      platform: "LeetCode",
      rating: "1970",
      rank: "Knight (Top 2%)",
      link: "https://leetcode.com/u/kumarnikhil94058/",
    },
    {
      platform: "Codeforces",
      rating: "1770",
      rank: "Expert",
      link: "https://codeforces.com/profile/NikhilKumar_11",
    },
    {
      platform: "CodeChef",
      rating: "2010",
      rank: "5 Star",
      link: "https://www.codechef.com/users/nikhildug22cs",
    },
  ],
  achievements: [
  {
    title: "ICPC Asia Regional Contest 2025 – Regionalist",
    organization: "ICPC",
    date: "Nov 2025",
    description:
     "Secured AIR 139 in ICPC Asia Regional Contest 2025; achieved Institute Rank 1 at NIT Patna, corresponding to AIR 50 (General) after institute-wise prelim ranking."
  },
  {
    title: "IICPC – Intercollegiate Informatics & Competitive Programming Camp",
    organization: "IICPC Pvt. Ltd.",
    date: "2024",
    description:
      "Participated in a national-level competitive programming camp mentored by experts from top High-Frequency Trading (HFT) firms; achieved AIR 1925.",
  },
  {
    title: "Competitive Programming Excellence",
    organization: "Codeforces • CodeChef • LeetCode",
    date: "2024–2025",
    description:
      "Codeforces Expert (1770, Top 161 in Round 1030); CodeChef 5-Star (2010, Global Rank 32 in Starters 170); LeetCode Knight (1921). Solved 1400+ DSA problems across platforms.",
  },
  {
    title: "Selected – Salesforce Agentforce (Agentic AI) Virtual Hackathon",
    organization: "Salesforce",
    date: "2024",
    description:
      "Selected in Round 1 for building agentic AI workflows using Salesforce technologies.",
  },
  {
    title: "Selected – Google Solution Challenge",
    organization: "Google",
    date: "2023",
    description:
      "Selected for developing a technology-driven solution aligned with UN Sustainable Development Goals (UN SDGs).",
  },
  {
    title: "Hacktoberfest Contributor",
    organization: "DigitalOcean • GitHub",
    date: "2024",
    description:
      "Recognized for meaningful open-source contributions across multiple GitHub repositories during Hacktoberfest.",
  },
  {
    title: "Top Performer – Robotics & AI Hackathon",
    organization: "National Level Hackathon",
    date: "2023",
    description:
      "Ranked among top teams for building an AI-powered robotics solution addressing real-world automation challenges.",
  },
  {
    title: "Qualified – Smart India Hackathon (College Level)",
    organization: "Government of India",
    date: "2023",
    description:
      "Qualified at institute level in Smart India Hackathon 2023 with a blockchain-based land registry solution.",
  },
],




  contact: {
    email: "nikhild.ug22.cs@nitp.ac.in",
    github: "https://github.com/nikhil94058",
    linkedin: "https://www.linkedin.com/in/nikhil94058/",
  },
};
