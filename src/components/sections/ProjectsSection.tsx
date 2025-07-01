import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const laptopVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -30 },
    visible: { scale: 1, opacity: 1, rotateY: 0 },
  };

  return (
    <motion.section
      id="projects"
      className="min-h-screen bg-bg1 py-20 relative overflow-hidden"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Section indicator */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center mb-16"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: 4 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-12 bg-brand1/30"
        />
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={
            inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
          }
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-brand1 text-brand1 mx-2 bg-bg1"
        >
          0
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: 4 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-12 bg-brand1/30"
        />
      </motion.div>

      {/* Section title */}
      <motion.div variants={itemVariants} className="text-center mb-10">
        <motion.h2
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-brand1"
        >
          Works
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-400 mt-2">
          I had the pleasure of working with these awesome projects.
        </motion.p>
      </motion.div>

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
        <motion.div
          variants={containerVariants}
          className="flex justify-center gap-8"
        >
          <motion.div
            variants={laptopVariants}
            whileHover={{
              scale: 1.05,
              rotate: -3,
              transition: { duration: 0.3 },
            }}
            className="w-56 transform -rotate-6"
          >
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
          </motion.div>

          <motion.div
            variants={laptopVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 40px rgba(18, 247, 214, 0.2)",
              transition: { duration: 0.3 },
            }}
            className="w-64 z-10"
          >
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
          </motion.div>
        </motion.div>

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
    </motion.section>
  );
};

export default ProjectsSection;
