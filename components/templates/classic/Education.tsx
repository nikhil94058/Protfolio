"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";

type EducationItem = {
  institute: string;
  degree: string;
  duration: string;
};

export default function Education({ education }: { education: EducationItem[] }) {
  return (
    <section className="py-20  text-gray-200 overflow-hidden relative">
      {/* Background Decorative Glow - Teal/Cyan Theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-teal-500/10 rounded-xl border border-teal-500/20 text-teal-400">
            <FaGraduationCap className="text-2xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-12 pb-4">
          
          {education.map((e, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot (Teal Border & Glow) */}
              <div className="absolute -left-[5px] md:-left-[9px] top-0 bg-[#0d1117] border-2 border-teal-500 w-3 h-3 md:w-5 md:h-5 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>

              {/* Card Content */}
              <div className="group relative bg-gray-900/50 border border-gray-800 hover:border-teal-500/30 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1">
                
                {/* Degree Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-teal-400 transition-colors mb-2">
                  {e.degree}
                </h3>

                {/* Institute */}
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <FaUniversity className="text-sm text-teal-500/70" />
                  <span className="font-medium text-base">{e.institute}</span>
                </div>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm font-mono">
                  <FaCalendarAlt className="text-xs" />
                  {e.duration}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}