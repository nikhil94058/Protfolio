import React from "react";
import { FaTrophy, FaMedal, FaCertificate } from "react-icons/fa";
import { AchievementItem } from "@/lib/data";

export default function Achievements({ achievements }: { achievements: AchievementItem[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {achievements.map((item, i) => (
        <div 
          key={i} 
          className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-teal-500/40 transition-all duration-300 shadow-lg flex gap-4"
        >
          {/* Icon Box */}
          <div className="shrink-0 mt-1">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700 text-yellow-500 shadow-inner">
               {/* Alternate icons based on index for variety */}
               {i % 2 === 0 ? <FaTrophy size={18} /> : <FaMedal size={18} />}
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold text-white leading-tight mb-1">
              {item.title}
            </h4>
            
            <div className="flex items-center gap-2 text-sm text-teal-400 font-medium mb-2">
              <span>{item.organization}</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400 font-mono text-xs border border-gray-700 px-1.5 py-0.5 rounded">
                {item.date}
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}