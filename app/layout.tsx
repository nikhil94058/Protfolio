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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nikhil Kumar Das",
    "url": "https://me-mu-ecru.vercel.app/",
    "jobTitle": "Software Engineer",
    "description": "Competitive Programmer and Software Engineering Student.",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "National Institute of Technology Patna",
      "alternateName": "NITP",
    },
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