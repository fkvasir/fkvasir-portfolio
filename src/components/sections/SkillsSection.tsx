import React from "react";
import Image from "next/image";

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen bg-bg2 py-20 relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/background-pic.jpeg"
          alt="Coding background"
          fill
          className="object-cover"
        />
      </div>

      {/* Section indicator */}
      <div className="flex items-center justify-center mb-16">
        <div className="w-1 h-12 bg-brand1/30"></div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-brand1 text-brand1 mx-2">
          0
        </div>
        <div className="w-1 h-12 bg-brand1/30"></div>
      </div>

      {/* Code bracket icon */}
      <div className="text-center mb-10">
        <span className="text-5xl text-brand1">&lt;/&gt;</span>
        <h2 className="text-2xl font-bold mt-4 text-brand1">Skills</h2>
        <p className="text-gray-400 mt-2">
          I am striving to never stop learning and improving
        </p>
      </div>

      {/* Skill categories */}
      <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-8 mb-16">
        <div className="bg-brand1/10 border border-brand1/30 rounded-lg p-6 text-center w-64">
          <div className="w-12 h-12 bg-zinc-800 rounded flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-brand1">🖥️</span>
          </div>
          <h3 className="text-lg font-medium text-white">Web Development</h3>
        </div>

        <div className="bg-brand1/10 border border-brand1/30 rounded-lg p-6 text-center w-64">
          <div className="w-12 h-12 bg-zinc-800 rounded flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-brand1">📱</span>
          </div>
          <h3 className="text-lg font-medium text-white">App Development</h3>
        </div>
      </div>

      {/* Skill icons */}
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white">
          <span className="text-2xl">HTML</span>
        </div>
        <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white">
          <span className="text-2xl">CSS</span>
        </div>
        <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-white">
          <span className="text-2xl">JS</span>
        </div>
        <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center text-white">
          <span className="text-2xl">REACT</span>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
