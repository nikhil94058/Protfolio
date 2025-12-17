"use client";
import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ClassicTemplate from "@/components/templates/classic";
import { portfolioData } from "@/lib/data";
import { FaLock } from "react-icons/fa"; // Ensure you have react-icons installed

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [securityAlert, setSecurityAlert] = useState(false);

  // --- 1. PRELOADER LOGIC ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // --- 2. SECURITY LOGIC (BLOCKING) ---
  const showWarning = useCallback(() => {
    setSecurityAlert(true);
    setTimeout(() => setSecurityAlert(false), 2000); // Hide after 2 seconds
  }, []);

  useEffect(() => {
    // Block Right Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showWarning();
    };

    // Block Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+U, Ctrl+C, etc.)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && e.key === "I") || // Inspect
        (e.ctrlKey && e.shiftKey && e.key === "J") || // Console
        (e.ctrlKey && e.key === "u") || // View Source
        (e.ctrlKey && e.key === "c") || // Copy
        (e.ctrlKey && e.key === "s") || // Save
        (e.ctrlKey && e.key === "p")    // Print
      ) {
        e.preventDefault();
        showWarning();
      }
    };

    // Block Copying/Cutting via Edit Menu
    const handleCopyCut = (e: ClipboardEvent) => {
      e.preventDefault();
      showWarning();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("copy", handleCopyCut);
    document.addEventListener("cut", handleCopyCut);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("copy", handleCopyCut);
      document.removeEventListener("cut", handleCopyCut);
    };
  }, [showWarning]);

  return (
    <div 
      className="bg-[#0d1117] min-h-screen text-gray-200 select-none selection:bg-none"
      onDragStart={(e) => e.preventDefault()} // Block Dragging
    >
      {/* CSS to forcefully disable selection everywhere */}
      <style jsx global>{`
        body {
          -webkit-user-select: none; /* Safari */
          -ms-user-select: none; /* IE 10 and IE 11 */
          user-select: none; /* Standard syntax */
        }
        img {
          -webkit-user-drag: none;
          pointer-events: none;
        }
      `}</style>

      {/* SECURITY ALERT POPUP (Toast) */}
      <AnimatePresence>
        {securityAlert && (
          <motion.div 
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 20, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-0 left-1/2 z-[100] bg-red-500/10 border border-red-500/50 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
          >
            <FaLock className="text-red-500" />
            <span className="text-red-400 font-mono text-sm font-bold tracking-wider">
              CONTENT PROTECTED
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ClassicTemplate data={portfolioData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- PRELOADER COMPONENT (Same as before) ---
const Preloader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d1117] text-white"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tighter"
        >
          <span className="text-white">NIKHIL</span>
          <span className="text-teal-400">.DEV</span>
        </motion.div>

        <div className="font-mono text-teal-400 text-sm md:text-base mt-2">
           System Initializing... {count}%
        </div>

        <div className="w-64 md:w-80 h-1 bg-gray-800 rounded-full overflow-hidden mt-2 relative">
          <motion.div
            className="h-full bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.8)]"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
};