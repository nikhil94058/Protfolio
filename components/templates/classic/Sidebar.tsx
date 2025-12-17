"use client";
import React, { useState } from "react";
import { FaUser, FaBriefcase, FaCode, FaGraduationCap, FaEnvelope, FaBars, FaTimes, FaFileAlt } from "react-icons/fa";

export default function SideNav({ data }: { data?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Items
  const navItems = [
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Experience", href: "#experience", icon: <FaBriefcase /> },
    { name: "Projects", href: "#projects", icon: <FaCode /> },
    { name: "Skills", href: "#skills", icon: <FaCode /> }, 
    { name: "Education", href: "#education", icon: <FaGraduationCap /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
    { name: "Resume", href: "/resume.pdf", icon: <FaFileAlt />, isExternal: true },
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div className="fixed top-0 left-0 z-50 p-4 md:hidden w-full bg-gray-900 shadow-lg flex justify-between items-center text-white border-b border-gray-800">
        <span className="font-bold text-xl tracking-tight text-teal-400">Nikhil K. Das</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 border-r border-gray-800 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        // This style block hides the scrollbar but keeps functionality
        style={{
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none',  /* IE and Edge */
        }}
      >
        {/* Hide scrollbar for Chrome/Safari/Opera */}
        <style jsx>{`
          aside::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="flex flex-col min-h-full">
          
          {/* PROFILE IMAGE SECTION */}
          <div className="p-8 flex flex-col items-center border-b border-gray-800 bg-gray-900">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl mb-4 relative">
              <img 
                src="https://github.com/nikhil94058.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-white text-xl font-bold mt-2 text-center">Nikhil Kumar</h2>
            <p className="text-teal-500 text-sm font-medium">Full Stack Developer</p>
          </div>

          {/* NAVIGATION LINKS */}
          <nav className="flex-1 py-6">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)} 
                    target={item.isExternal ? "_blank" : "_self"}
                    className="flex items-center gap-4 px-8 py-4 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200 group border-l-4 border-transparent hover:border-teal-500"
                  >
                    <span className="text-lg group-hover:text-teal-400 transition-colors">
                      {item.icon}
                    </span>
                    <span className="font-medium tracking-wide uppercase text-xs">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-800 text-center text-xs text-gray-600">
             &copy; 2024 Nikhil Das
          </div>
        </div>
      </aside>

      {/* Overlay for mobile when menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}