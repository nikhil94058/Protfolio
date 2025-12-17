"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaTerminal, FaCircle } from "react-icons/fa";

// --- 1. DATA HELPER (Same as before) ---
// --- 1. DATA HELPER: Mapped to your Resume ---
const categorizeSkills = (flatSkills: string[]) => {
  const categories = [
    { 
      id: "languages", 
      title: "languages", 
      // Strictly from your Resume "Languages" section
      match: ["C++", "Java", "Python", "JavaScript", "TypeScript"] 
    },
    { 
      id: "web-dev", 
      title: "fullstack-web", 
      // Merged your Frontend/Backend/Tools (React, Angular, Spring Boot, Node, Mongo)
      match: ["React.js", "Angular", "Next.js", "Node.js", "Express.js", "Spring Boot", "MongoDB", "Tailwind CSS"] 
    },
    { 
      id: "blockchain", 
      title: "blockchain-web3", 
      // From your Projects (LandSol, Medicare) & Skills section
      match: ["Solidity", "Web3.js", "Hardhat", "IPFS", "Ethereum", "Polygon", "Smart Contracts"] 
    },
    { 
      id: "cp", 
      title: "cp-algorithms", 
      // Implied from your "Achievements" (ICPC, Codeforces Expert, LeetCode Knight)
      match: ["Data Structures", "Algorithms", "Problem Solving", "C++ STL", "Competitive Programming"] 
    },
    { 
      id: "tools", 
      title: "tools-misc", 
      // From "Tools & Frameworks"
      match: ["Git", "Postman", "VS Code", "JWT", "Spring Security"] 
    },
  ];

  const grouped = categories.map(cat => ({
    ...cat,
    items: flatSkills.filter(skill => cat.match.includes(skill))
  })).filter(cat => cat.items.length > 0);

  const usedSkills = new Set(grouped.flatMap(g => g.items));
  const others = flatSkills.filter(s => !usedSkills.has(s));
  
  if (others.length > 0) {
    grouped.push({ id: "misc", title: "miscellaneous", match: [], items: others });
  }

  return grouped;
};

// --- 2. TYPES ---
type Phase = "idle" | "typing" | "display" | "deleting";

export default function Terminal({ skills }: { skills: string[] }) {
  const structuredSkills = categorizeSkills(skills || []);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // State
  const [isVisible, setIsVisible] = useState(false); // Only start when in viewport
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");

  // --- 3. INTERSECTION OBSERVER (Detect when in view) ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setPhase("typing"); // Start animation
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // --- 4. TYPING ENGINE ---
  useEffect(() => {
    if (!isVisible || structuredSkills.length === 0) return;

    const currentCategory = structuredSkills[categoryIndex];
    const targetCommand = `cat ${currentCategory.title}.json`;
    const TYPING_SPEED = 60;
    const DELETING_SPEED = 30;
    const PAUSE_DURATION = 3000; // How long to show the JSON

    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      // Type forward
      if (text.length < targetCommand.length) {
        timeout = setTimeout(() => {
          setText(targetCommand.slice(0, text.length + 1));
        }, TYPING_SPEED);
      } else {
        // Finished typing, switch to display
        setPhase("display");
      }
    } 
    else if (phase === "display") {
      // Wait while showing JSON
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, PAUSE_DURATION);
    } 
    else if (phase === "deleting") {
      // Backspace
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(targetCommand.slice(0, text.length - 1));
        }, DELETING_SPEED);
      } else {
        // Finished deleting, move to next category
        setCategoryIndex((prev) => (prev + 1) % structuredSkills.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, isVisible, categoryIndex, structuredSkills]);


  // Current Data to Display
  const currentData = structuredSkills[categoryIndex];

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto p-4 md:p-8 min-h-[400px]">
      
      {/* WINDOW CONTAINER */}
      <div className="w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-700 shadow-2xl shadow-black/60 font-mono text-sm md:text-base flex flex-col h-[400px]">
        
        {/* HEADER */}
        <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-gray-800 shrink-0">
          <div className="flex gap-2">
            <FaCircle className="text-red-500 text-[10px]" />
            <FaCircle className="text-yellow-500 text-[10px]" />
            <FaCircle className="text-green-500 text-[10px]" />
          </div>
          <div className="text-gray-500 text-xs flex items-center gap-2 opacity-80">
            <FaTerminal />
            <span>guest@portfolio: ~/skills</span>
          </div>
          <div className="w-10"></div>
        </div>

        {/* TERMINAL BODY */}
        <div className="p-6 text-gray-300 grow flex flex-col">
          
          {/* 1. THE COMMAND LINE */}
          <div className="flex flex-wrap items-center gap-x-2 break-all mb-4">
            <span className="text-green-500 font-bold">guest@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-500 font-bold">~/skills</span>
            <span className="text-gray-500">$</span>
            
            <span className="text-gray-100 ml-1">
              {text}
              {/* Blinking Cursor */}
              <span className={`inline-block w-2.5 h-5 bg-gray-400 ml-1 align-middle ${phase !== 'display' ? 'animate-pulse' : 'opacity-0'}`}></span>
            </span>
          </div>

          {/* 2. THE RESULT (Only visible during display/deleting phases) */}
          <div className={`transition-opacity duration-300 ${phase === 'idle' || (phase === 'typing' && text.length < 5) ? 'opacity-0' : 'opacity-100'}`}>
            {/* We keep the component mounted but invisible during typing to prevent layout shifts, 
                or strictly show it only on display. Here we show it as long as there is text context 
                so it fades out nicely during delete */}
            {(phase === 'display' || phase === 'deleting' || (phase === 'typing' && text.length > 5)) && (
               <JSONOutput category={currentData.title} items={currentData.items} />
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: JSON VISUALIZER ---
const JSONOutput = ({ category, items }: { category: string; items: string[] }) => (
  <div className="pl-2 md:pl-5 border-l-2 border-gray-800 ml-1 text-sm md:text-base animate-fadeIn">
    <span className="text-yellow-500">{"{"}</span>
    
    <div className="pl-4">
      <span className="text-sky-400">"category"</span>
      <span className="text-gray-400">: </span>
      <span className="text-orange-400">"{category}"</span>
      <span className="text-gray-400">,</span>
    </div>

    <div className="pl-4">
      <span className="text-sky-400">"skills"</span>
      <span className="text-gray-400">: </span>
      <span className="text-yellow-500">{"["}</span>
    </div>

    {/* Skills Grid */}
    <div className="pl-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1 my-1">
      {items.map((skill, j) => (
        <span key={j} className="whitespace-nowrap transition-colors hover:text-white cursor-default">
          <span className="text-emerald-400">"{skill}"</span>
          {j !== items.length - 1 && <span className="text-gray-500">,</span>}
        </span>
      ))}
    </div>

    <div className="pl-4 text-yellow-500">{"]"}</div>
    <span className="text-yellow-500">{"}"}</span>
  </div>
);