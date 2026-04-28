"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaLock,
} from "react-icons/fa";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-bg1 pt-20 pb-20 px-4 md:px-8">
      {/* Header with back button */}
      <div className="max-w-7xl mx-auto mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand1 hover:text-brand2 transition-colors mb-6"
        >
          <FaArrowLeft />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center mb-4">
          <div className="w-1 h-12 bg-brand1/30"></div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-brand1 text-brand1 mx-2">
            P
          </div>
          <div className="w-1 h-12 bg-brand1/30"></div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          My Projects
        </h1>
        <p className="text-gray-400 mb-8">
          A showcase of my recent development work
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2 rounded-md transition ${
              activeCategory === "all"
                ? "bg-brand1 text-black font-medium"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveCategory("software")}
            className={`px-6 py-2 rounded-md transition ${
              activeCategory === "software"
                ? "bg-brand1 text-black font-medium"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
            }`}
          >
            Software Engineering
          </button>
          <button
            onClick={() => setActiveCategory("ml-ai")}
            className={`px-6 py-2 rounded-md transition ${
              activeCategory === "ml-ai"
                ? "bg-brand1 text-black font-medium"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
            }`}
          >
            Machine Learning / AI
          </button>
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-bg2 border border-zinc-700 rounded-lg overflow-hidden hover:border-brand1/50 transition-all duration-300 flex flex-col"
          >
            {/* Project image */}
            <div className="h-48 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              {/* NDA badge */}
              {project.private && (
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded bg-black/70 border border-brand1/40 text-brand1 text-xs backdrop-blur-sm">
                  <FaLock size={10} />
                  <span>Private — NDA</span>
                </div>
              )}
              {/* Overlay with buttons — only when at least one URL exists */}
              {(project.github || project.demo) && (
                <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-brand1 hover:bg-zinc-700 transition"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-brand1 hover:bg-zinc-700 transition"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Project content */}
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              {project.period && (
                <p className="text-brand1 text-xs mb-1">{project.period}</p>
              )}
              {project.company && (
                <p className="text-brand2 text-sm">{project.company}</p>
              )}
              {project.role && (
                <p className="text-gray-400 text-xs italic mb-3">
                  {project.role}
                </p>
              )}
              <p className="text-gray-400 text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-brand1/10 text-brand1 rounded-md border border-brand1/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
