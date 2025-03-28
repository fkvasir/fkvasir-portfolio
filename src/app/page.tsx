"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/components/logo";
import Link from "next/link";
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import Image from "next/image";

function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Function to handle scroll events and update active section
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Added offset for fixed header

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    // Handle initial hash in URL
    if (window.location.hash) {
      setActiveSection(window.location.hash.substring(1));
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    // Cleanup scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="fixed top-0 left-0 z-50 px-4 md:px-12 py-4 bg-zinc-900 border-y-2 border-brand1 w-full shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          {/* Logo */}
          <div className="flex flex-row items-center gap-2 mb-4 md:mb-0">
            <Logo className="w-10 h-10" />
            <h1>FKVASIR</h1>
          </div>
          {/* Home, Projects, About */}
          <nav className="flex flex-col md:flex-row justify-between items-center w-full md:w-auto">
            <ul className="flex flex-row items-center gap-4 md:gap-10 mb-4 md:mb-0 md:mr-10">
              <li>
                <Link
                  href="#home"
                  className={`navigation-link ${
                    activeSection === "home" ? "active" : ""
                  }`}
                  onClick={() => setActiveSection("home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className={`navigation-link ${
                    activeSection === "about" ? "active" : ""
                  }`}
                  onClick={() => setActiveSection("about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className={`navigation-link ${
                    activeSection === "projects" ? "active" : ""
                  }`}
                  onClick={() => setActiveSection("projects")}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contacts"
                  className={`navigation-link ${
                    activeSection === "contacts" ? "active" : ""
                  }`}
                  onClick={() => setActiveSection("contacts")}
                >
                  Contacts
                </Link>
              </li>
            </ul>
            {/* Socials */}
            <ul className="flex flex-row ml-3 items-center gap-4 md:gap-5">
              <li>
                <Link
                  href="https://github.com/fkvasir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navigation-link"
                >
                  <FaGithub size={20} />
                  <span className="text-xs">Github</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/fulgent-kvasir-lavesores-662900231/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navigation-link"
                >
                  <FaLinkedin size={20} />
                  <span className="text-xs">Linkedin</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.com/users/727883349179498538"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navigation-link"
                >
                  <FaDiscord size={20} />
                  <span className="text-xs">Discord</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~019e3e00ec733503db"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navigation-link"
                >
                  <FaSquareUpwork size={20} />
                  <span className="text-xs">Upwork</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-28 md:pt-20">
        {/* Main content sections */}
        <section
          id="home"
          className="min-h-screen bg-zinc-900 flex flex-col md:flex-row items-center justify-center px-6 py-10 md:py-0 md:px-16"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 w-full max-w-6xl">
            {/* Profile Card */}
            <div className="flex flex-col items-center bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 max-w-xs">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-brand1/40">
                <Image
                  src="/profile-pic.jpg"
                  alt="FKVASIR"
                  width={160}
                  height={160}
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="mt-4 text-xl font-bold">FKVASIR</h3>
              <p className="text-gray-400 text-sm">Full-stack developer</p>

              <div className="mt-5 w-full space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <FaEnvelope size={16} className="text-brand1" />
                  <span>fkvasir@example.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-brand1">🌍</span>
                  <span>Philippines</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-brand1">💼</span>
                  <span>Full-Time / Freelancer</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-brand1">🌐</span>
                  <span>www.fkvasir.dev</span>
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                <span className="px-2 py-1 text-xs bg-brand1 text-black rounded">
                  HTML
                </span>
                <span className="px-2 py-1 text-xs bg-brand1 text-black rounded">
                  CSS
                </span>
                <span className="px-2 py-1 text-xs bg-brand1 text-black rounded">
                  JS
                </span>
                <span className="px-2 py-1 text-xs bg-brand1 text-black rounded">
                  React
                </span>
              </div>

              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 mt-6 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md hover:bg-zinc-700 transition"
              >
                <FaDownload />
                <span>Download CV</span>
              </a>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-8">
              <div>
                <div className="text-gray-500 font-mono">&lt;h1&gt;</div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Hey
                  <br />
                  I&apos;m <span className="text-brand1">FKVASIR</span>,<br />
                  Full-Stack Developer
                </h1>
                <div className="text-gray-500 font-mono">&lt;/h1&gt;</div>
              </div>

              <div>
                <div className="text-gray-500 font-mono">&lt;p&gt;</div>
                <p className="text-gray-300 text-lg">
                  I help businesses grow by crafting amazing web experiences. If
                  you&apos;re looking for a developer that likes to get stuff
                  done, let&apos;s talk about your project!
                </p>
                <div className="text-gray-500 font-mono">&lt;/p&gt;</div>
              </div>

              <Link
                href="#contacts"
                className="inline-flex items-center gap-2 px-5 py-3 bg-brand1 text-black font-medium rounded-md hover:bg-brand2 transition-colors"
              >
                Let&apos;s Talk <FaEnvelope />
              </Link>

              {/* Stats */}
              <div className="flex flex-col md:flex-row gap-6 mt-10">
                <div className="flex items-center gap-4 bg-zinc-800/50 p-4 rounded-lg">
                  <span className="text-3xl font-bold text-brand1">4</span>
                  <span className="text-sm text-gray-300">
                    Programming
                    <br />
                    Languages
                  </span>
                </div>
                <div className="flex items-center gap-4 bg-zinc-800/50 p-4 rounded-lg">
                  <span className="text-3xl font-bold text-brand1">6</span>
                  <span className="text-sm text-gray-300">
                    Development
                    <br />
                    Tools
                  </span>
                </div>
                <div className="flex items-center gap-4 bg-zinc-800/50 p-4 rounded-lg">
                  <span className="text-3xl font-bold text-brand1">3</span>
                  <span className="text-sm text-gray-300">
                    Years of
                    <br />
                    Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen">
          <h2 className="text-2xl font-bold">About Section</h2>
          {/* About section content */}
          <Link href="/about">More About Me</Link>
        </section>

        <section id="projects" className="min-h-screen">
          <h2 className="text-2xl font-bold">Projects Section</h2>
          {/* Projects section content */}
          <Link href="/projects">View My Projects</Link>
        </section>

        <section id="contacts" className="min-h-screen">
          <h2 className="text-2xl font-bold">Contacts Section</h2>
          {/* Contacts section content */}
        </section>
      </div>
    </div>
  );
}

export default Home;
