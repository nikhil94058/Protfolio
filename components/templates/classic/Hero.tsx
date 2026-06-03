"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 

type HeroProps = {
  name: string;
  roles: string[];
  bio: string;
};

export default function Hero({ name, roles, bio }: HeroProps) {

 // --- Typewriter Logic Start ---
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex % roles.length];
      
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentRole.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentRole) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => prev + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles, typingSpeed]);
  // --- Typewriter Logic End ---


  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center bg-gray-900 overflow-hidden"
    >
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl -z-10" />

      <div className="w-full">
        <div className="max-w-4xl">
          <p className="text-teal-400 font-medium tracking-wide mb-4 text-lg">
            Hello, World!
          </p>

          {/* SEO FIX 1: Changed h2 to h1. This is the most important text on the page. */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">{name}</span>.
          </h1>

          {/* SEO FIX 2: Changed h5 to p. You shouldn't jump from H1 directly to H5. */}
          <p className="mt-6 text-2xl md:text-3xl text-gray-300 font-light">
            I am a{" "}
            <span className="font-semibold text-white border-b-4 border-teal-500 pb-1" aria-live="polite">
              {text}
            </span>
          </p>

          <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-2xl">
            {bio}
          </p>

          {/* SEO FIX 3: Added aria-labels so Google bot knows what these buttons do */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/nikhil94058/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nikhil Kumar Das LinkedIn Profile"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:bg-teal-500 hover:border-teal-500 hover:text-white transition-all duration-300 shadow-lg"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/nikhil94058"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nikhil Kumar Das GitHub Profile"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:bg-white hover:border-white hover:text-gray-900 transition-all duration-300 shadow-lg"
            >
              <FaGithub size={20} />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href="#about"
              className="px-8 py-3.5 bg-teal-500 text-white font-medium rounded-lg shadow-lg shadow-teal-500/20 hover:bg-teal-400 hover:shadow-teal-500/40 transform hover:-translate-y-1 transition-all duration-300"
            >
              Read More
            </a>

            <a
              href="#contact"
              className="px-8 py-3.5 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}