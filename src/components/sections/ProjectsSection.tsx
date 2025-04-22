import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen bg-bg1 py-20 relative">
      {/* Section indicator */}
      <div className="flex items-center justify-center mb-16">
        <div className="w-1 h-12 bg-brand1/30"></div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-brand1 text-brand1 mx-2">
          0
        </div>
        <div className="w-1 h-12 bg-brand1/30"></div>
      </div>

      {/* Section title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-brand1">Works</h2>
        <p className="text-gray-400 mt-2">
          I had the pleasure of working with these awesome projects.
        </p>
      </div>

      {/* Projects Carousel */}
      <div className="max-w-5xl mx-auto px-4 relative">
        {/* Carousel controls */}
        <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
          <button
            className="w-10 h-10 bg-zinc-800/80 rounded-full flex items-center justify-center border border-zinc-700 text-brand1 hover:bg-zinc-700 transition"
            aria-label="Previous project"
          >
            &lt;
          </button>
          <button
            className="w-10 h-10 bg-zinc-800/80 rounded-full flex items-center justify-center border border-zinc-700 text-brand1 hover:bg-zinc-700 transition"
            aria-label="Next project"
          >
            &gt;
          </button>
        </div>

        {/* Project displays */}
        <div className="flex justify-center gap-8">
          <div className="w-56 transform -rotate-6">
            <div className="bg-zinc-800 border border-zinc-700 rounded-t-lg p-2">
              <div className="bg-zinc-900 rounded h-40 overflow-hidden">
                <div className="font-mono text-sm text-green-400 p-3">
                  <pre>{"function App() {\n  return <div>Hello</div>;\n}"}</pre>
                </div>
              </div>
            </div>
            <div className="h-8 bg-zinc-700 rounded-b-md flex items-center justify-center">
              <div className="w-6 h-2 bg-zinc-800 rounded"></div>
            </div>
            <div className="h-3 w-16 bg-zinc-800 mx-auto rounded-b-full"></div>
          </div>

          <div className="w-64 z-10">
            <div className="bg-zinc-800 border border-zinc-700 rounded-t-lg p-2">
              <div className="bg-white rounded h-48 overflow-hidden">
                <Image
                  src="/coding-background.jpg"
                  alt="Project Screenshot"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="h-8 bg-zinc-700 rounded-b-md flex items-center justify-center">
              <div className="w-6 h-2 bg-zinc-800 rounded"></div>
            </div>
            <div className="h-3 w-16 bg-zinc-800 mx-auto rounded-b-full"></div>
          </div>
        </div>

        {/* View all projects button */}
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2 bg-brand1 text-black font-medium rounded-md hover:bg-brand2 transition-colors"
          >
            View all <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
