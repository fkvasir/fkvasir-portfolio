"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Dummy projects data
const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce platform with product filtering, cart management, and secure checkout.",
    image: "/coding-background.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/fkvasir/project1",
    demo: "https://demo-project1.vercel.app",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Drag-and-drop task management application with team collaboration features.",
    image: "/about-me_coding.jpg",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/fkvasir/project2",
    demo: "https://demo-project2.vercel.app",
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description:
      "Interactive dashboard for tracking personal finances with data visualization.",
    image: "/coding-background.jpg",
    tags: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
    github: "https://github.com/fkvasir/project3",
    demo: "https://demo-project3.vercel.app",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description:
      "Mobile-responsive fitness tracking application with progress charts and workout plans.",
    image: "/about-me_coding.jpg",
    tags: ["React Native", "Redux", "Firebase", "Expo"],
    github: "https://github.com/fkvasir/project4",
    demo: "https://demo-project4.vercel.app",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "Real-time weather application with location detection and 7-day forecasts.",
    image: "/coding-background.jpg",
    tags: ["JavaScript", "HTML/CSS", "OpenWeather API"],
    github: "https://github.com/fkvasir/project5",
    demo: "https://demo-project5.vercel.app",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description:
      "Comprehensive analytics dashboard for social media management and content scheduling.",
    image: "/about-me_coding.jpg",
    tags: ["React", "GraphQL", "Apollo", "Material UI"],
    github: "https://github.com/fkvasir/project6",
    demo: "https://demo-project6.vercel.app",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-bg1 pt-32 pb-20 px-4 md:px-8">
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
        <p className="text-gray-400">
          A showcase of my recent web development work
        </p>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
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
              {/* Overlay with buttons */}
              <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-brand1 hover:bg-zinc-700 transition"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-brand1 hover:bg-zinc-700 transition"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              </div>
            </div>

            {/* Project content */}
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
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

      {/* Pagination (not functional, just for design) */}
      <div className="flex justify-center mt-12">
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-md bg-brand1 text-black font-medium flex items-center justify-center">
            1
          </button>
          <button className="w-10 h-10 rounded-md bg-zinc-800 text-white hover:bg-zinc-700 transition flex items-center justify-center">
            2
          </button>
          <button className="w-10 h-10 rounded-md bg-zinc-800 text-white hover:bg-zinc-700 transition flex items-center justify-center">
            3
          </button>
        </div>
      </div>
    </div>
  );
}
