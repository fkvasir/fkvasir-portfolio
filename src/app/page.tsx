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

// Import shadcn components
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [profileImageKey, setProfileImageKey] = useState(1);

  useEffect(() => {
    // This will force a refresh of the image on the client side only
    setProfileImageKey(Date.now());

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
        <section
          id="home"
          className="min-h-screen bg-bg2 flex flex-col md:flex-row items-center justify-center px-6 py-10 md:py-0 md:px-16"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 w-full max-w-6xl">
            {/* Profile Card */}
            <div className="flex flex-col items-center bg-bg1 p-6 rounded-lg border border-zinc-700 max-w-xs">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-brand1/40">
                <Image
                  src={`/profile-pic.jpeg?v=${profileImageKey}`}
                  alt="FKVASIR"
                  width={160}
                  height={160}
                  className="object-cover object-center"
                  priority
                />
              </div>
              <h3 className="mt-4 text-xl text-brand1 font-bold">FKVASIR</h3>
              <p className="text-gray-400 text-sm">Full-stack developer</p>

              <div className="mt-5 w-full space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <FaEnvelope size={16} className="text-brand1" />
                  <span>lavesoreskvasir@gmail.com</span>
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
                <span className="text-white">Download CV</span>
              </a>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-8">
              <div>
                <div className="text-gray-500 font-mono">&lt;h1&gt;</div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
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
                  <span className="text-3xl font-bold text-brand1">5</span>
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
                  <span className="text-3xl font-bold text-brand1">2</span>
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

        <section id="about" className="min-h-screen bg-bg2 py-20 relative">
          {/* Background pattern - could be replaced with an actual pattern image */}
          <div className="absolute inset-0 opacity-20 z-0 bg-[url('/topo-pattern.png')] bg-repeat"></div>

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
            <span className="inline-block border-2 border-brand1 px-6 py-2 rounded-full text-xl text-brand1 font-medium">
              About Me
            </span>
          </div>

          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Terminal-style text */}
            <div className="bg-zinc-800/80 backdrop-blur rounded-lg p-6 border border-zinc-700 font-mono text-sm md:text-base leading-relaxed">
              <p className="text-brand1 mb-2">Hello!</p>
              <p className="mb-4">
                <span className="text-gray-400">I&apos;m</span>{" "}
                <span className="text-brand1">FKVASIR</span>{" "}
                <span className="text-gray-400">
                  and I specialize in web development that utilizes
                </span>{" "}
                <span className="text-brand1">HTML, CSS, JavaScript</span>.
              </p>
              <p className="mb-4 text-gray-400">
                I&apos;m passionate about creating intuitive user experiences
                and functional interfaces. Building things that make a
                difference by focusing on the details that matter.
              </p>
              <p className="mb-4">
                <span className="text-brand1">
                  When I&apos;m not coding //{" "}
                </span>
                <span className="opacity-80 text-gray-400">
                  you&apos;ll probably find me reading or gaming.
                </span>
              </p>
              <p className="text-gray-400">
                I&apos;d love to help you achieve your vision, and create
                systems that make an impact and make the world better.
              </p>
            </div>

            {/* Developer image */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl border border-zinc-700">
                <Image
                  src="/about-me_coding.jpg"
                  alt="Developer coding"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="min-h-screen bg-bg2 py-20 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="/background-pic.jpg"
              alt="Coding background"
              fill
              className="object-cover"
            />
          </div>

          {/* Background pattern continued */}
          <div className="absolute inset-0 opacity-20 z-0 bg-[url('/topo-pattern.png')] bg-repeat"></div>

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
              <h3 className="text-lg font-medium text-white">
                Web Development
              </h3>
            </div>

            <div className="bg-brand1/10 border border-brand1/30 rounded-lg p-6 text-center w-64">
              <div className="w-12 h-12 bg-zinc-800 rounded flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-brand1">📱</span>
              </div>
              <h3 className="text-lg font-medium text-white">
                App Development
              </h3>
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

        <section id="projects" className="min-h-screen bg-bg1 py-20 relative">
          {/* Background pattern continued */}
          <div className="absolute inset-0 opacity-20 z-0 bg-[url('/topo-pattern.png')] bg-repeat"></div>

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
                      <pre>
                        {"function App() {\n  return <div>Hello</div>;\n}"}
                      </pre>
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
                      src="/project-screenshot.jpg"
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

        <section id="contacts" className="min-h-screen bg-bg2 py-20 relative">
          {/* Background pattern continued */}
          <div className="absolute inset-0 opacity-20 z-0 bg-[url('/topo-pattern.png')] bg-repeat"></div>

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
            <h2 className="text-2xl font-bold text-brand1">Contact</h2>
            <p className="text-gray-400 mt-2">
              I&apos;m currently available for freelance work
            </p>
          </div>

          {/* Contact form */}
          <div className="max-w-2xl mx-auto px-6 relative z-10">
            <form
              action="https://formsubmit.co/lavesoreskvasir@gmail.com"
              method="POST"
              className="space-y-8"
            >
              {/* Hidden fields for FormSubmit configuration */}
              <input
                type="hidden"
                name="_subject"
                value="New message from portfolio website!"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value="https://fkvasir.vercel.app/thanks"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-brand1">
                    Your name*
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-brand1"
                    style={{ position: "relative", zIndex: 20 }}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-brand1">
                    Your email*
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-brand1"
                    style={{ position: "relative", zIndex: 20 }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-brand1">
                  Your message*
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-brand1"
                  style={{ position: "relative", zIndex: 20 }}
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-brand1 text-black hover:bg-brand2 px-6 py-6 h-auto text-base relative z-20"
                >
                  Send Message <span className="ml-2">↗</span>
                </Button>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-4 pt-8">
                <a
                  href="https://github.com/fkvasir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-brand1 hover:bg-zinc-700 transition"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/fulgent-kvasir-lavesores-662900231/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-brand1 hover:bg-zinc-700 transition"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://discord.com/users/727883349179498538"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-brand1 hover:bg-zinc-700 transition"
                >
                  <FaDiscord size={18} />
                </a>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
