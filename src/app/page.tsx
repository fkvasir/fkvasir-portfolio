"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/components/logo";
import Link from "next/link";
import LazySection from "@/components/LazySection";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

// Import section components without dynamic loading
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [profileImageKey, setProfileImageKey] = useState(1);

  useEffect(() => {
    // This will force a refresh of the image on the client side only
    setProfileImageKey(Date.now());

    // Function to handle scroll events and update active section
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id], div[id]");
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
      <header className="fixed top-0 left-0 z-50 px-4 md:px-12 py-4 bg-bg1 border-y-2 border-brand1 w-full shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          {/* Logo */}
          <div className="flex flex-row items-center gap-2 mb-4 md:mb-0">
            <Logo className="w-10 h-10" />
            <h1 className="text-white">FKVASIR</h1>
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

      {/* Add padding to account for fixed header and avoid white line */}
      <div className="pt-28 md:pt-20 bg-bg2">
        {/* Main content sections */}
        <LazySection
          id="home"
          component={HomeSection}
          props={{ profileImageKey }}
        />
        <LazySection id="about" component={AboutSection} />
        <LazySection id="skills" component={SkillsSection} />
        <LazySection id="projects" component={ProjectsSection} />
        <LazySection id="contacts" component={ContactSection} />
      </div>
    </div>
  );
}

export default Home;
