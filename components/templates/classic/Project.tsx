"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaRegFolder, 
  FaChevronDown, 
  FaChevronUp,
  FaLock 
} from "react-icons/fa";

// 1. Defined Types with optional fields
type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;   // Live Demo (Optional)
  github?: string; // Repo Link (Optional)
};

export default function Projects({ projects }: { projects: Project[] }) {
  const [showAll, setShowAll] = useState(false);
  
  // Safety check: Ensure projects is an array before slicing
  const safeProjects = Array.isArray(projects) ? projects : [];
  
  // Show only first 6 projects by default, or all if toggled
  const visibleProjects = showAll ? safeProjects : safeProjects.slice(0, 6);

  if (safeProjects.length === 0) {
    return null; // Don't render section if no data
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Featured <span className="text-teal-400">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-lg">
              A collection of DApps, Full Stack platforms, and algorithmic solutions.
            </p>
          </div>
          {/* Project Count Badge */}
          <div className="font-mono text-sm text-teal-400 bg-teal-500/10 px-4 py-2 rounded-full border border-teal-500/20">
            {safeProjects.length} Total Projects
          </div>
        </div>

        {/* --- PROJECTS GRID --- */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleProjects.map((p, i) => (
              <ProjectCard key={i} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- SHOW MORE / LESS BUTTON --- */}
        {safeProjects.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gray-800 hover:bg-teal-900/30 text-white font-semibold border border-gray-700 hover:border-teal-500 transition-all duration-300 group"
            >
              {showAll ? "Show Less" : "View All Projects"}
              {showAll ? (
                <FaChevronUp className="text-teal-400 group-hover:-translate-y-1 transition-transform" />
              ) : (
                <FaChevronDown className="text-teal-400 group-hover:translate-y-1 transition-transform" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// --- INDIVIDUAL CARD COMPONENT ---
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  
  // 2. Exception Handling / Validation Helper
  // Checks if the string exists AND is not just empty whitespace
  const hasGithub = project.github && project.github.trim().length > 2;
  const hasLink = project.link && project.link.trim().length > 2;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative flex flex-col h-full bg-[#161b22] rounded-xl border border-gray-800 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-900/20 hover:-translate-y-2"
    >
      {/* 1. TOP BAR: Icons */}
      <div className="p-6 pb-0 flex justify-between items-start">
        <div className="text-teal-400 text-4xl opacity-80 group-hover:opacity-100 transition-opacity">
          <FaRegFolder />
        </div>
        
        <div className="flex gap-4 z-20">
          {/* GITHUB LINK HANDLING */}
          {hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-1"
              title="View Source Code"
            >
              <FaGithub size={22} />
            </a>
          ) : null}

          {/* DEMO LINK HANDLING */}
          {hasLink ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors p-1"
              title="Live Demo"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          ) : null}

          {/* NO LINKS HANDLING (Privacy/Concept Mode) */}
          {!hasGithub && !hasLink && (
            <div className="text-gray-600 p-1 cursor-not-allowed" title="Private Project / No Link Available">
              <FaLock size={18} />
            </div>
          )}
        </div>
      </div>

      {/* 2. CONTENT: Title & Desc */}
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-100 group-hover:text-teal-400 transition-colors mb-3">
          {project.title}
        </h3>
        
        {/* Safe check for description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description || "No description available."}
        </p>
      </div>

      {/* 3. FOOTER: Tech Stack */}
      <div className="px-6 pb-6 mt-auto">
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800 group-hover:border-teal-500/30 transition-colors">
          {/* Safe check for tech array */}
          {(project.tech || []).slice(0, 4).map((t, j) => (
            <span
              key={j}
              className="text-xs font-mono font-medium text-teal-300 bg-teal-900/20 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
          
          {/* Overflow Badge */}
          {(project.tech || []).length > 4 && (
             <span className="text-xs font-mono font-medium text-gray-500 px-2 py-1">
               +{(project.tech || []).length - 4}
             </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};