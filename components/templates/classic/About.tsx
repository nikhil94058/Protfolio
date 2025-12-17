import React from "react";

type AboutProps = {
  description: string;
  highlights: string[];
};

export default function About({ description, highlights }: AboutProps) {
  return (
    <section className="relative w-full py-20 bg-gray-900 overflow-hidden text-white" id="about">
      {/* Background Decorator: Subtle Gradient Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-blue-500 mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Column: Biography (3/5 width) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="prose prose-lg prose-invert text-gray-300 leading-relaxed">
              <p className="text-xl font-light border-l-4 border-teal-500 pl-6 italic bg-gray-800/30 py-2 rounded-r-lg">
                "I am passionate about developing complex applications that solve real-world problems."
              </p>
              <p className="mt-6">
                {description}
              </p>
              {/* Contextual filler to match the vibe of your old template if description is short */}
              <p className="text-base text-gray-400">
                With a strong foundation in Computer Science, I enjoy problem-solving and coding. 
                Whether it's building scalable backends or intuitive frontends, I strive to bring 100% 
                to the work I do.
              </p>
            </div>
          </div>

          {/* Right Column: Tech Stack / Highlights (2/5 width) */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-teal-500/10 transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-teal-400">⚡</span> 
                Tech Highlights
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {highlights.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-gray-900 border border-gray-700 text-teal-300 hover:border-teal-500 hover:text-white hover:bg-teal-600/20 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Decorative "Code" lines to give it that developer feel */}
              <div className="mt-8 pt-6 border-t border-gray-700 font-mono text-xs text-gray-500 space-y-1">
                <div className="flex gap-2">
                  <span className="text-blue-400">const</span>
                  <span className="text-yellow-200">passion</span>
                  <span>=</span>
                  <span className="text-green-300">true</span>;
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-400">while</span>
                  <span>(</span>
                  <span className="text-purple-300">alive</span>
                  <span>)</span>
                  <span>{"{"}</span>
                </div>
                <div className="pl-4 text-gray-400">code();</div>
                <div className="pl-4 text-gray-400">eat();</div>
                <div className="pl-4 text-gray-400">sleep();</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}