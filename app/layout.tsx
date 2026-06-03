import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// 1. ADVANCED SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL("https://me-mu-ecru.vercel.app"),
  title: "Nikhil Kumar Das | Software Engineer & Competitive Programmer | NITP",
  description:
    "Official portfolio of Nikhil Kumar Das, a Software Engineer (SWE) and Competitive Programmer at National Institute of Technology Patna (NITP). Explore my projects, resume, and coding profiles.",
  verification: {
    google: "oOzMCR9GCwgOPKX51fPfQE30Tf3sdssrc_KQI-1C-f4", // Paste the random string here
  },

  
  keywords: [
    "Nikhil Kumar Das",
    "SWE",
    "NITP",
    "Competitive Programmer",
    "NIT Patna",
    "Software Engineer",
    "Nikhil Kumar Das",
    "Amazon SWE Intern",
    "Software Engineer",
    "ICPC Regionalist",
    "CodeChef 5 Star",
    "Codeforces Expert",
    "Jane Street",
    "QRT",
    "Competitive Programming",
    "NIT Patna",
    "Full Stack Developer",
    "MERN Stack",
    "Nikhil Kumar Das",
  "Nikhil Das",
  "Nikhil K Das",
  "N K Das",
  "Nikhil Kumar Das Portfolio",
  "Nikhil Das Portfolio",
  "Nikhil Portfolio",

  "Amazon SWE Intern",
  "Amazon Software Engineer Intern",
  "Software Engineer",
  "Software Developer",
  "Full Stack Developer",
  "Backend Developer",
  "Frontend Developer",

  "Competitive Programmer",
  "Competitive Programming",
  "Data Structures and Algorithms",
  "DSA",

  "ICPC Regionalist",
  "ICPC 2025",
  "CodeChef 5 Star",
  "5 Star CodeChef",
  "Codeforces Expert",

  "NIT Patna",
  "NITP",
  "Computer Science Engineer",
  "Computer Science Student",

  "MERN Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Node.js Developer",
  "TypeScript Developer",
  "JavaScript Developer",

  "System Design",
  "Distributed Systems",
  "Scalable Systems",

  "Artificial Intelligence",
  "AI Engineer",
  "Machine Learning",
  "Generative AI",
  "Prompt Engineering",

  "Blockchain Developer",
  "Web3 Developer",

  "Jane Street",
  "QRT",
  "Quantitative Trading",
  "Quant Competition",

  "Hackathon Finalist",
  "Open Source Developer",
  "Portfolio Website",
  "Developer Portfolio",

  ],
  openGraph: {
    title: "Nikhil Kumar Das | SWE & Competitive Programmer",
    description:
      "Portfolio of Nikhil Kumar Das, CSE student at NIT Patna. View my projects, LeetCode profile, and resume.",
    url: "https://me-mu-ecru.vercel.app/",
    siteName: "Nikhil Kumar Das Portfolio",
    images: [
      {
        url: "/profile.jpg", // Remember to add an og-image.jpg to your public/ folder!
        width: 1200,
        height: 630,
        alt: "Nikhil Kumar Das - Software Engineer at NIT Patna",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Kumar Das | SWE @ NITP",
    description: "Software Engineer and Competitive Programmer portfolio.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
  // 2. SCHEMA MARKUP FOR GOOGLE KNOWLEDGE PANEL (Updated with your real links)
  // 2. ADVANCED SCHEMA MARKUP FOR TOTAL SERP DOMINATION
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nikhil Kumar Das",
    "url": "https://me-mu-ecru.vercel.app/",
    "jobTitle": "Software Engineering Intern",
    "description": "Incoming Amazon SWE Intern, ICPC Regionalist, and Top 42 Global in AMS Prior Round.",
    "worksFor": {
      "@type": "Organization",
      "name": "Amazon"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "National Institute of Technology Patna",
      "alternateName": ["NITP", "NIT Patna"]
    },
    "knowsAbout": [
      "Competitive Programming",
      "Data Structures and Algorithms",
      "MERN Stack Development",
      "Artificial Intelligence",
      "Blockchain and DApps"
    ],
    "award": [
      "Global Rank 42 - AMS Prior Round (Jane Street & QRT)",
      "Finalist - Scaler AI Hackathon out of 31,000+ participants",
      "ICPC Asia Regionalist 2025",
      "Knight on LeetCode",
      "5-Star on CodeChef",
      "Expert on Codeforces"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/nikhil94058/",
      "https://github.com/nikhil94058",
      "https://leetcode.com/u/kumarnikhil94058/",
      "https://www.codechef.com/users/nikhildug22cs",
      "https://codeforces.com/profile/NikhilKumar_11"
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {/* Injecting the JSON-LD Script for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {children}
        <script src="/script.js" defer />
      </body>
    </html>
  );
}