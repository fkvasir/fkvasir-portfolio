"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/components/logo";
import Link from "next/link";
import LazySection from "@/components/LazySection";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

// Import section components without dynamic loading
import HomeSection from "@/components/sections/HomeSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import CTABanner from "@/components/CTABanner";

function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [profileImageKey, setProfileImageKey] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const [nightMode, setNightMode] = useState(true);

  useEffect(() => {
    // This will force a refresh of the image on the client side only
    setProfileImageKey(Date.now());

    // Function to handle scroll events and update active section
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
      <header
        className={`fixed z-50 py-3 bg-bg1/90 backdrop-blur-md shadow-lg transition-all duration-300 ${
          scrolled
            ? "top-0 left-0 translate-x-0 w-full max-w-none rounded-none border-b-2 border-brand1 px-4 md:px-12"
            : "top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-6xl rounded-2xl border border-brand1/40 px-4 md:px-8"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          {/* Logo */}
          <div className="flex flex-row items-center gap-2 mb-4 md:mb-0">
            <Logo className="w-10 h-10" />
            <h1 className="text-white">FKVASIR</h1>
          </div>
          {/* Home, Projects, About */}
          <nav className="flex flex-row items-center justify-center gap-3 md:gap-6 w-full md:w-auto">
            <ul className="flex flex-row flex-wrap justify-center items-center gap-3 md:gap-8 relative">
              {["home", "services", "about", "projects", "experience", "contacts"].map((section) => (
                <li key={section} className="relative">
                  <Link
                    href={`#${section}`}
                    className="navigation-link relative z-10"
                    onClick={() => setActiveSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    {activeSection === section && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -inset-x-2 -inset-y-1 bg-brand1/20 rounded-md border border-brand1/30"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Night mode toggle — moon slides out, sun rises in */}
            <button
              type="button"
              aria-label="Toggle night mode"
              onClick={() => setNightMode((n) => !n)}
              className="relative w-10 h-10 flex-none rounded-full border border-brand1/40 bg-bg2/60 overflow-hidden hover:border-brand1 transition-colors"
            >
              <motion.span
                initial={false}
                animate={
                  nightMode ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center text-brand2"
              >
                <FaMoon size={15} />
              </motion.span>
              <motion.span
                initial={false}
                animate={
                  nightMode ? { y: 20, opacity: 0 } : { y: 0, opacity: 1 }
                }
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center text-brand1"
              >
                <FaSun size={15} />
              </motion.span>
            </button>
          </nav>
        </div>
      </header>

      {/* Add padding to account for fixed header and avoid white line */}
      <div className="pt-36 md:pt-28 bg-bg2">
        {/* Main content sections */}
        <LazySection
          id="home"
          component={HomeSection}
          props={{ profileImageKey, nightMode }}
        />
        <LazySection id="services" component={ServicesSection} />
        <LazySection id="about" component={AboutSection} />
        <LazySection id="skills" component={SkillsSection} />
        <LazySection id="projects" component={ProjectsSection} />
        <CTABanner message="Like what you see? Let's build yours." />
        <LazySection id="experience" component={ExperienceSection} />
        <CTABanner />
        <LazySection id="contacts" component={ContactSection} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
