"use client";
import SideNav from "./Sidebar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Project";
import Skills from "./Skill";
import Education from "./Education";
import Contact from "./Contact";
import CodingProfiles from "./CodingProfile";
import Achievements from "./Achivement";

import React from "react";
import { motion } from "framer-motion";

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="relative mb-12 inline-block group cursor-default">
      {/* Background shape */}
      <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 to-transparent rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative flex items-center gap-3">
        {/* Vertical Bar */}
        <div className="w-1.5 h-10 bg-gradient-to-b from-teal-400 to-blue-600 rounded-full"></div>
        
        <div>
          <h3 className="text-3xl font-bold text-white tracking-wide uppercase">
            {title}
          </h3>
          {/* Subtext decoration */}
          <div className="h-[2px] w-12 bg-teal-500/50 mt-1 group-hover:w-full transition-all duration-500 ease-out"></div>
        </div>
      </div>
    </div>
  );
};


export default function ClassicTemplate({ data }: any) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 font-sans scroll-smooth">
      
      {/* 1. Sidebar (Fixed width: 16rem / 64 tailwind units) */}
      <SideNav />

      {/* 2. Main Content Wrapper */}
      {/* md:ml-64 pushes content to the right. flex & items-center ensures content is centered in that space */}
      <main className="md:ml-64 transition-all duration-300 flex flex-col items-center w-auto">
        
        {/* HERO SECTION */}
        {/* We wrap Hero in the same max-w container so it aligns with the text below */}
        <div className="w-full bg-gray-900 border-b border-gray-800">
           <section id="hero" className="max-w-5xl mx-auto px-6 md:px-12 w-full">
              <Hero {...data.hero} />
           </section>
        </div>

        {/* CONTENT SECTIONS */}
        <div className="w-full">
          
          {/* ABOUT */}
          <section id="about" className="py-20 bg-gray-900 border-b border-gray-800 scroll-mt-0">
            <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
              <SectionTitle title="About" />
              <About {...data.about} />
            </div>
          </section>

          {/* CODING PROFILES (NEW) - Darker background */}
          <section id="coding-profiles" className="py-20 bg-gray-950 border-b border-gray-800 scroll-mt-0">
             <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
              <SectionTitle title="Coding Profiles" />
              <CodingProfiles profiles={data.codingProfiles} />
            </div>
          </section>


          {/* ACHIEVEMENTS (NEW) - Dark background to contrast Projects */}
          <section id="achievements" className="py-20 bg-gray-950 border-b border-gray-800 scroll-mt-0">
            <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
              <SectionTitle title="Achievements" />
              <Achievements achievements={data.achievements} />
            </div>
          </section>




          {/* EXPERIENCE */}
          <section id="experience" className="py-20 bg-gray-950 border-b border-gray-800 scroll-mt-0">
            <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
              <SectionTitle title="Experience" />
              <Experience experiences={data.experience} />
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="py-20 bg-gray-900 border-b border-gray-800 scroll-mt-0">
            <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
              <SectionTitle title="Projects" />
              <Projects projects={data.projects} />
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="py-20 bg-gray-950 border-b border-gray-800 scroll-mt-0">
             <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
              <SectionTitle title="Skills" />
              <Skills skills={data.skills} />
            </div>
          </section>

          {/* EDUCATION */}
          <section id="education" className="py-20 bg-gray-900 border-b border-gray-800 scroll-mt-0">
             <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
              <SectionTitle title="Education" />
              <Education education={data.education} />
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="py-20 bg-black text-white scroll-mt-0">
            <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
              <SectionTitle title="Contact" />
              <Contact {...data.contact} />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}