import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-bg2 py-20 relative">
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
              and I specialize in web development, app development, machine
              learning, deep learning and AI integration in systems that
              utilizes
            </span>{" "}
            <span className="text-brand1">HTML, CSS, JavaScript, Python</span>.
          </p>
          <p className="mb-4 text-gray-400">
            I&apos;m passionate about creating intuitive user experiences and
            functional interfaces. Building things that make a difference by
            focusing on the details that matter.
          </p>
          <p className="mb-4">
            <span className="text-brand1">When I&apos;m not coding // </span>
            <span className="opacity-80 text-gray-400">
              you&apos;ll probably find me reading or gaming.
            </span>
          </p>
          <p className="text-gray-400">
            I&apos;d love to help you achieve your vision, and create systems
            that make an impact and make the world better.
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
  );
};

export default AboutSection;
