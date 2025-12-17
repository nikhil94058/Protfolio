import React from "react";
import { SiLeetcode, SiCodeforces, SiCodechef, SiHackerrank, SiGeeksforgeeks } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CodingProfileItem } from "@/lib/data";

// Helper to get Icon and Color based on platform name
const getPlatformConfig = (platform: string) => {
  const lower = platform.toLowerCase();
  if (lower.includes("leetcode")) return { icon: <SiLeetcode />, color: "text-yellow-500", bg: "hover:border-yellow-500/50" };
  if (lower.includes("codeforces")) return { icon: <SiCodeforces />, color: "text-blue-500", bg: "hover:border-blue-500/50" }; // CF actually uses multi-colors, blue is safe
  if (lower.includes("codechef")) return { icon: <SiCodechef />, color: "text-orange-900", bg: "hover:border-orange-800/50" }; // Brown/Orange
  if (lower.includes("hacker")) return { icon: <SiHackerrank />, color: "text-green-500", bg: "hover:border-green-500/50" };
  if (lower.includes("geeks")) return { icon: <SiGeeksforgeeks />, color: "text-green-600", bg: "hover:border-green-600/50" };
  return { icon: <FaExternalLinkAlt />, color: "text-teal-400", bg: "hover:border-teal-500/50" };
};

export default function CodingProfiles({ profiles }: { profiles: CodingProfileItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map((profile, i) => {
        const config = getPlatformConfig(profile.platform);
        
        return (
          <a
            key={i}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative bg-gray-800 p-6 rounded-xl border border-gray-700 transition-all duration-300 shadow-lg hover:-translate-y-1 ${config.bg}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`text-4xl ${config.color} transition-transform group-hover:scale-110`}>
                {config.icon}
              </span>
              <FaExternalLinkAlt className="text-gray-600 group-hover:text-white transition-colors text-sm" />
            </div>

            <h3 className="text-xl font-bold text-gray-200 group-hover:text-white">
              {profile.platform}
            </h3>

            <div className="mt-4 flex items-end justify-between border-t border-gray-700 pt-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Rating</p>
                <p className="text-2xl font-extrabold text-white">{profile.rating}</p>
              </div>
              {profile.rank && (
                <div className="text-right">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Rank</p>
                  <span className="inline-block bg-gray-900 text-teal-400 text-xs font-bold px-2 py-1 rounded mt-1">
                    {profile.rank}
                  </span>
                </div>
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
}