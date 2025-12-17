"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaTimes, 
  FaPaperPlane, 
  FaExternalLinkAlt 
} from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiCodeforces } from "react-icons/si";

type ContactProps = {
  email: string;
  github: string;
  linkedin: string;
};

// --- MODAL COMPONENT ---
const ModalWindow = ({ 
  isOpen, 
  onClose, 
  title, 
  children 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  children: React.ReactNode 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-lg bg-[#161b22] border border-gray-700 rounded-xl shadow-2xl shadow-teal-900/20 overflow-hidden"
      >
        {/* Mock Browser Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d1117] border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="ml-3 text-xs text-gray-400 font-mono opacity-60">
              https://{title.toLowerCase()}.com
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <FaTimes />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default function Contact({ email, github, linkedin }: ContactProps) {
  const [activeModal, setActiveModal] = useState<"github" | "linkedin" | "form" | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  
  // State to capture form inputs
  const [formData, setFormData] = useState({
    name: "",
    userEmail: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // 1. Construct the Mailto Link
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0AEmail: ${formData.userEmail}%0A%0A${formData.message}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // 2. Simulate delay for UX, then trigger email client
    setTimeout(() => {
      window.location.href = mailtoLink; // Open Email Client
      setFormStatus("sent");
      
      // 3. Reset form after showing success message
      setTimeout(() => {
        setFormStatus("idle");
        setFormData({ name: "", userEmail: "", message: "" }); // Clear inputs
        setActiveModal(null);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d1117] text-gray-200 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Let's <span className="text-teal-400">Connect</span>
        </motion.h2>

        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* --- MAIN ACTION CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* 1. Email / Form Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            onClick={() => setActiveModal("form")}
            className="group cursor-pointer p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-teal-500/50 hover:bg-teal-900/10 transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto bg-teal-500/10 rounded-full flex items-center justify-center text-teal-400 text-3xl mb-4 group-hover:scale-110 transition-transform">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Send Message</h3>
            <p className="text-sm text-gray-500 group-hover:text-teal-300">Opens Contact Form</p>
          </motion.div>

          {/* 2. LinkedIn Card */}
          <motion.div 
             whileHover={{ y: -5 }}
             onClick={() => setActiveModal("linkedin")}
             className="group cursor-pointer p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 text-3xl mb-4 group-hover:scale-110 transition-transform">
              <FaLinkedin />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
            <p className="text-sm text-gray-500 group-hover:text-blue-300">View LinkedIn Profile</p>
          </motion.div>

          {/* 3. GitHub Card */}
          <motion.div 
             whileHover={{ y: -5 }}
             onClick={() => setActiveModal("github")}
             className="group cursor-pointer p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
          >
             <div className="w-16 h-16 mx-auto bg-gray-700/30 rounded-full flex items-center justify-center text-white text-3xl mb-4 group-hover:scale-110 transition-transform">
              <FaGithub />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Development</h3>
            <p className="text-sm text-gray-500 group-hover:text-gray-300">View GitHub Profile</p>
          </motion.div>
        </div>

        {/* Coding Profiles Quick Links */}
        <div className="flex justify-center gap-6 opacity-70">
           <a href="https://leetcode.com/u/nikhil94058/" target="_blank" className="hover:text-teal-400 transition-colors"><SiLeetcode size={24}/></a>
           <a href="https://codeforces.com/profile/nikhil94058" target="_blank" className="hover:text-teal-400 transition-colors"><SiCodeforces size={24}/></a>
           <a href="https://www.codechef.com/users/nikhil94058" target="_blank" className="hover:text-teal-400 transition-colors"><SiCodechef size={24}/></a>
        </div>

      </div>


      {/* --- MODALS SECTION --- */}
      <AnimatePresence>
        
        {/* 1. CONTACT FORM MODAL */}
        {activeModal === "form" && (
          <ModalWindow isOpen={true} onClose={() => setActiveModal(null)} title="Contact">
             {formStatus === "sent" ? (
               <div className="text-center py-10 animate-fadeIn">
                 <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                   <FaPaperPlane className="text-2xl" />
                 </div>
                 <h3 className="text-2xl font-bold text-white">Message Ready!</h3>
                 <p className="text-gray-400 mt-2 px-4">Your email client should have opened. If not, please email me directly at <span className="text-teal-400">{email}</span></p>
               </div>
             ) : (
               <form onSubmit={handleSend} className="space-y-4">
                 <div>
                   <label className="block text-xs font-mono text-teal-400 mb-1">YOUR NAME</label>
                   <input 
                     type="text" 
                     name="name"
                     value={formData.name}
                     onChange={handleInputChange}
                     required 
                     className="w-full bg-[#0d1117] border border-gray-700 rounded-lg p-3 text-white focus:border-teal-500 outline-none transition-colors" 
                     placeholder="John Doe" 
                   />
                 </div>
                 <div>
                   <label className="block text-xs font-mono text-teal-400 mb-1">YOUR EMAIL</label>
                   <input 
                     type="email" 
                     name="userEmail"
                     value={formData.userEmail}
                     onChange={handleInputChange}
                     required 
                     className="w-full bg-[#0d1117] border border-gray-700 rounded-lg p-3 text-white focus:border-teal-500 outline-none transition-colors" 
                     placeholder="john@example.com" 
                   />
                 </div>
                 <div>
                   <label className="block text-xs font-mono text-teal-400 mb-1">MESSAGE</label>
                   <textarea 
                     name="message"
                     value={formData.message}
                     onChange={handleInputChange}
                     required 
                     rows={4} 
                     className="w-full bg-[#0d1117] border border-gray-700 rounded-lg p-3 text-white focus:border-teal-500 outline-none transition-colors" 
                     placeholder="Hey, I have a project..." 
                   />
                 </div>
                 <button 
                   type="submit" 
                   disabled={formStatus === "sending"}
                   className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                 >
                   {formStatus === "sending" ? "Opening Mail..." : <><FaPaperPlane /> Send Message</>}
                 </button>
               </form>
             )}
          </ModalWindow>
        )}

        {/* 2. LINKEDIN PREVIEW MODAL */}
        {activeModal === "linkedin" && (
          <ModalWindow isOpen={true} onClose={() => setActiveModal(null)} title="LinkedIn">
             <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-blue-600 mx-auto mb-4 flex items-center justify-center text-4xl text-white shadow-lg shadow-blue-500/30">
                  <span className="font-bold">in</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Nikhil Kumar Das</h3>
                <p className="text-teal-400 text-sm mb-4 leading-relaxed">
                  ICPC Regionalist ’25 | 5★ CodeChef | Expert @ Codeforces | Knight @ LeetCode | Proficient in Data Structures & Algorithms
                </p>
                <p className="text-gray-400 text-sm mb-6 px-4">
                   Connecting professionals. Check out my latest posts, experience, and certifications on my official profile.
                </p>
                
                <div className="flex justify-center gap-3">
                   <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-bold transition-all">
                     View Profile <FaExternalLinkAlt className="text-sm"/>
                   </a>
                   <button onClick={() => setActiveModal(null)} className="px-6 py-2 rounded-full border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 transition-all">
                     Close
                   </button>
                </div>
             </div>
          </ModalWindow>
        )}

        {/* 3. GITHUB PREVIEW MODAL */}
        {activeModal === "github" && (
          <ModalWindow isOpen={true} onClose={() => setActiveModal(null)} title="GitHub">
             <div className="text-left bg-[#0d1117] p-4 rounded-lg border border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                     <FaGithub className="text-3xl text-white"/>
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white">nikhil94058</h3>
                     <p className="text-gray-400 text-sm">Followers: 100+ &bull; Repos: 25+</p>
                   </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-teal-500"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 font-mono">
                    <span>JavaScript 45%</span>
                    <span>C++ 30%</span>
                    <span>Solidity 25%</span>
                  </div>
                </div>

                <a href={github} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg font-bold transition-all">
                   <FaGithub /> Visit Full Profile
                </a>
             </div>
          </ModalWindow>
        )}

      </AnimatePresence>

    </section>
  );
}