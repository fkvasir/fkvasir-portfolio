import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaDownload } from "react-icons/fa";

interface HomeSectionProps {
  profileImageKey: number;
}

const HomeSection: React.FC<HomeSectionProps> = ({ profileImageKey }) => {
  return (
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
              you&apos;re looking for a developer that likes to get stuff done,
              let&apos;s talk about your project!
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
  );
};

export default HomeSection;
