import React from "react";

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  description: string[];
};

export default function Experience({
  experiences,
}: {
  experiences: ExperienceItem[];
}) {
  return (
    <div className="space-y-6 bg-gray-900">
      {experiences.map((exp, i) => (
        <div
          key={i}
          className="group relative bg-gray-800 rounded-xl p-6 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 shadow-lg hover:shadow-teal-900/20"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            
            {/* LEFT COLUMN: Company Info & Date (The "Sidebar" of the resume card) */}
            <div className="md:w-1/4 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-2 md:border-r md:border-gray-700/50 pr-4">
              
              {/* Logo / Initials Placeholder */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gray-700 flex items-center justify-center shadow-inner shrink-0 text-teal-400 font-bold text-xl md:text-2xl border border-gray-600">
                {exp.company.charAt(0)}
              </div>

              <div className="flex flex-col">
                <h4 className="text-white font-bold text-lg leading-tight">
                  {exp.company}
                </h4>
                <div className="flex items-center gap-2 mt-1 text-teal-400 text-xs font-mono uppercase tracking-wide bg-teal-400/10 px-2 py-1 rounded w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  {exp.duration}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Role & Details (The "Body" of the resume) */}
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                {exp.role}
              </h3>
              
              <ul className="space-y-3">
                {exp.description.map((desc, j) => (
                  <li key={j} className="flex items-start gap-3">
                    {/* Bullet Point Style */}
                    <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-gray-500 group-hover:bg-teal-400 transition-colors" />
                    <p className="text-gray-300 leading-relaxed text-base">
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}