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
"Incoming Software Engineer Intern @ Amazon",
"Top 42 Global Performer in Jane Street & QRT Quant Competitions",
"ICPC Regionalist 2025",
"5★ CodeChef | Codeforces Expert",
"Full-Stack & Backend Engineer",
"AI/ML Enthusiast"
],

bio:
"Nikhil Kumar Das is an Incoming Software Engineer Intern at Amazon, Competitive Programmer, and Computer Science undergraduate at NIT Patna. He is a Top 42 Global Performer in AMS rounds sponsored by quantitative trading firms including Jane Street and QRT. With strong expertise in Data Structures & Algorithms, Distributed Systems, MERN Stack Development, and Artificial Intelligence, he builds scalable software products that impact thousands of users."
},

 about: {
description:
"Hey, I'm Nikhil Kumar Das — an Incoming Software Engineer Intern at Amazon, ICPC Regionalist 2025, and Computer Science student at NIT Patna. I am passionate about solving challenging algorithmic problems and building large-scale software systems. My achievements include becoming a 5★ CodeChef Coder, Codeforces Expert, and securing a Top 42 Global Rank in AMS competitions sponsored by leading quantitative trading firms such as Jane Street and QRT. Beyond competitive programming, I specialize in Full-Stack Development, Backend Engineering, Artificial Intelligence, and System Design. I enjoy creating scalable products, high-performance applications, and AI-powered solutions that solve real-world problems.",

  highlights: [
"Amazon Software Engineer Intern",
"Top 42 Global Rank - Jane Street & QRT AMS",
"ICPC Regionalist 2025",
"5★ CodeChef",
"Codeforces Expert",
"MERN Stack Development",
"System Design & Backend Engineering",
"Artificial Intelligence & Machine Learning",
"Blockchain & Web3 Development",
"Data Structures & Algorithms"
]
},
  experience: [

{
      company: "Amazon",
      role: "Software Engineering (SWE) Intern",
      duration: "Upcoming (6 Months)", 
      description: [
        "Incoming 6-month Software Engineering Intern at Amazon.",
        "Will be working alongside senior engineers to build, optimize, and scale enterprise-level software systems.",
        "Focusing on backend architecture, cloud infrastructure, and solving high-impact engineering problems.",
      ],
    },

{
      company: "StackCart",
      role: "Software Engineering Intern",
      duration: "Dec 2025 – Present",
      description: [
        "Contributed to the development of an AI-driven hiring platform, automating the end-to-end recruitment workflow.",
        "Designed and enhanced Python-based backend services to support AI-powered candidate screening and evaluation.",
        "Fixed 10+ production bugs and implemented 3 new features, improving platform stability and user experience.",
        "Worked on automated email parsing and detection to extract candidate information and trigger hiring workflows.",
        "Developed and improved a coding test environment to enhance the candidate assessment process.",
      ],
    },

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
    link:"2",
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
    link:"2",
  },
  {
    title: "Nirbhaya – Emergency Voice Detection System",
    description:
      "Developed an emergency voice detection system that alerts SOS contacts in real-time for women’s safety. Integrated IoT sensors and mobile notifications for immediate response.",
    tech: ["IoT", "React Native", "Python", "AWS", "Push Notifications"],
    github: "https://github.com/nikhil94058/Nirbhaya",
    link:"2",
  },
  {
    title: "JalChakshu – Crowdsourced Water Management System",
    description:
      "Built a web platform to monitor water availability and quality through crowdsourced data. Visualized water metrics on interactive maps and implemented alert system for anomalies.",
    tech: ["React.js", "Leaflet.js", "PostgreSQL", "Python", "Geospatial Analysis"],
    github: "https://github.com/nikhil94058/JalChakshu",
    link:"2",
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
    link:"2",
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
      title: "Global Rank 42 – AMS Prior Round",
      organization: " Jane Street & QRT (Qube Research & Technologies)",
      date: "2026",
      description:
        "Secured Global Rank 42 in the highly competitive AMS Prior Round, an algorithmic and competitive programming contest sponsored by top quantitative trading firms Jane Street and QRT.",
    },
    {
      title: "Finalist – OpenEnv × Scaler AI Hackathon",
      organization: "Scaler School of Technology / OpenEnv",
      date: "Apr 2026",
      description:
        "Selected among the Top 800 teams out of 31,000+ participants in India’s Biggest AI Hackathon. Worked as part of team Dynamics_again to build a highly optimized AI-based solution under strict competitive constraints.",
    },
     {
      title: "Selected – AWS AI For Bharat Hackathon",
      organization: "AWS / Bharat Hackathon",
      date: "2025",
      description:
        "Developed EmerMedi, an AI-powered medical emergency routing and handover system integrated with AWS services.",
    },
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
