import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLock } from "react-icons/fa";
import { projects, type Project } from "@/lib/projects";

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative w-72 shrink-0 bg-bg2 border border-zinc-700 rounded-lg overflow-hidden hover:border-brand1/50 transition-colors duration-300 flex flex-col">
    <div className="h-40 relative">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="288px"
        className="object-cover"
      />
      {project.private && (
        <div className="absolute top-2 right-2 z-10 flex items-center gap-1 px-2 py-1 rounded bg-black/70 border border-brand1/40 text-brand1 text-xs backdrop-blur-sm">
          <FaLock size={9} />
          <span>NDA</span>
        </div>
      )}
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-white font-semibold text-sm leading-snug mb-1 line-clamp-2">
        {project.title}
      </h3>
      {project.company && (
        <p className="text-brand2 text-xs">{project.company}</p>
      )}
      {project.period && (
        <p className="text-brand1 text-[10px] mt-1">{project.period}</p>
      )}
      <div className="flex flex-wrap gap-1 mt-3">
        {project.tags.slice(0, 3).map((tag, i) => (
          <span
            key={i}
            className="px-2 py-0.5 text-[10px] bg-brand1/10 text-brand1 rounded border border-brand1/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

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

  // Duplicate the list so the marquee loops seamlessly when the first copy
  // finishes scrolling out (-50% lands exactly on the start of the duplicate).
  const marqueeProjects = [...projects, ...projects];

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

      {/* Auto-scrolling marquee carousel */}
      <motion.div
        variants={itemVariants}
        className="relative max-w-7xl mx-auto"
      >
        {/* Edge fade masks so cards visually melt at the rails */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-bg1 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-bg1 to-transparent" />

        <div className="overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee">
            {marqueeProjects.map((project, i) => (
              <ProjectCard key={`${project.id}-${i}`} project={project} />
            ))}
          </div>
        </div>
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
    </motion.section>
  );
};

export default ProjectsSection;
