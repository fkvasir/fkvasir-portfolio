import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaLock,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
} from "react-icons/fa";
import { projects, type Project } from "@/lib/projects";

const AUTOPLAY_MS = 4000;
const CARD_WIDTH = 320;
const PITCH_DESKTOP = 320;
const PITCH_MOBILE = 240;

const ProjectCard = ({
  project,
  isCenter,
  variant = "carousel",
  onDetails,
}: {
  project: Project;
  isCenter: boolean;
  variant?: "carousel" | "grid";
  onDetails: () => void;
}) => {
  const ringClass = isCenter
    ? "ring-2 ring-brand1/50 shadow-xl shadow-brand1/20 border-brand1/40"
    : variant === "grid"
    ? "border-zinc-700 hover:ring-2 hover:ring-brand1/50 hover:shadow-xl hover:shadow-brand1/20 hover:border-brand1/40 transition-all duration-300"
    : "border-zinc-700";
  const imgSrc =
    variant === "grid"
      ? project.image
      : project.carouselImage ?? project.image;

  return (
    <div
      onClick={onDetails}
      className={`group relative w-80 bg-bg2 border ${ringClass} rounded-lg overflow-hidden flex flex-col transition-colors cursor-pointer`}
      style={{ width: CARD_WIDTH }}
    >
      <div className="h-52 relative">
        <Image
          src={imgSrc}
          alt={project.title}
          fill
          sizes="320px"
          className="object-cover"
        />
        {project.private && (
          <div className="absolute top-2 right-2 z-10 flex items-center gap-1 px-2 py-1 rounded bg-black/70 border border-brand1/40 text-brand1 text-xs backdrop-blur-sm">
            <FaLock size={9} />
            <span>NDA</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-white font-semibold text-base leading-snug mb-1 line-clamp-2">
          {project.title}
        </h3>
        {project.company && (
          <p className="text-brand2 text-sm">{project.company}</p>
        )}
        {project.period && (
          <p className="text-brand1 text-xs mt-1">{project.period}</p>
        )}
        {variant === "grid" && (
          <p className="text-gray-400 text-sm mt-2 line-clamp-4">
            {project.description}
          </p>
        )}
        <div className="flex flex-wrap gap-1 mt-3">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-xs bg-brand1/10 text-brand1 rounded border border-brand1/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDetails();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-brand1 text-black rounded hover:bg-brand2 hover:text-white transition-colors"
          >
            Details
          </button>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live site`}
              onClick={(e) => e.stopPropagation()}
              className="p-2 text-brand1 border border-brand1/30 rounded hover:bg-brand1/10 transition-colors"
            >
              <FaExternalLinkAlt size={12} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              onClick={(e) => e.stopPropagation()}
              className="p-2 text-brand1 border border-brand1/30 rounded hover:bg-brand1/10 transition-colors"
            >
              <FaGithub size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reduceMotion = useReducedMotion();
  const N = projects.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [pitch, setPitch] = useState(PITCH_DESKTOP);
  const [view, setView] = useState<"carousel" | "circle" | "vacuum" | "grid">(
    "carousel"
  );
  const [detailProject, setDetailProject] = useState<Project | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const morphTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () =>
      setPitch(mq.matches ? PITCH_MOBILE : PITCH_DESKTOP);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % N);
    }, AUTOPLAY_MS);
  }, [N]);

  useEffect(() => {
    if (view === "carousel") {
      startAutoplay();
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoplay, view]);

  useEffect(() => {
    return () => {
      if (morphTimer.current) clearTimeout(morphTimer.current);
    };
  }, []);

  const goTo = (i: number) => {
    setActiveIndex(((i % N) + N) % N);
    startAutoplay();
  };
  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  // View all: the carousel wraps into a circle, spins, and gets vacuumed into
  // the middle, then the grid bursts out. Show less reverses through the vacuum.
  const expand = () => {
    if (view !== "carousel") return;
    setView("circle");
    morphTimer.current = setTimeout(
      () => {
        setView("vacuum");
        morphTimer.current = setTimeout(
          () => setView("grid"),
          reduceMotion ? 0 : 600
        );
      },
      reduceMotion ? 0 : 700
    );
  };
  const collapse = () => {
    if (view !== "grid") return;
    // Shrink the section first, then scroll — so the smooth scroll lands on
    // the final layout instead of drifting into the next section
    setView("vacuum");
    requestAnimationFrame(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    morphTimer.current = setTimeout(
      () => setView("carousel"),
      reduceMotion ? 0 : 650
    );
  };

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: [0.32, 0.72, 0, 1] as const };

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

      {/* Sliding 3-card showcase carousel */}
      <motion.div
        variants={itemVariants}
        className="relative max-w-6xl mx-auto px-4 md:px-12"
      >
        {view !== "grid" ? (
          <div className="relative h-[30rem] md:h-[32rem] overflow-hidden">
            {/* White blackhole at the center that swallows the cards */}
            {(view === "circle" || view === "vacuum") && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    view === "vacuum"
                      ? { scale: [0.4, 1.3, 0], opacity: [1, 1, 0] }
                      : { scale: 1, opacity: 1 }
                  }
                  transition={
                    view === "vacuum"
                      ? {
                          duration: reduceMotion ? 0 : 0.7,
                          times: [0, 0.7, 1],
                        }
                      : { duration: reduceMotion ? 0 : 0.4 }
                  }
                  className="w-24 h-24 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, #FFFFFF 0%, rgba(255, 255, 255, 0.85) 35%, rgba(255, 255, 255, 0.15) 70%, transparent 100%)",
                    boxShadow:
                      "0 0 60px rgba(255, 255, 255, 0.8), 0 0 120px rgba(255, 255, 255, 0.4)",
                  }}
                />
              </div>
            )}
            {projects.map((p, i) => {
              let offset = i - activeIndex;
              if (offset > N / 2) offset -= N;
              if (offset < -N / 2) offset += N;

              const isCenter = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;
              const visible = isCenter || isAdjacent;

              // Ring formation targets — cards wrap into a circle, spin, and
              // get vacuumed into the middle
              const inCircle = view === "circle";
              const inVacuum = view === "vacuum";
              const angle = (i / N) * Math.PI * 2 - Math.PI / 2;
              const rx = pitch === PITCH_MOBILE ? 120 : 250;
              const ry = pitch === PITCH_MOBILE ? 110 : 130;
              const circlePos = {
                x: Math.cos(angle) * rx - CARD_WIDTH / 2,
                y: Math.sin(angle) * ry,
                scale: 0.35,
                opacity: 1,
                zIndex: 10,
              };

              const target = inVacuum
                ? {
                    x: -CARD_WIDTH / 2,
                    y: 0,
                    scale: 0.05,
                    opacity: 0,
                    zIndex: 10,
                  }
                : inCircle
                ? circlePos
                : {
                    x: offset * pitch - CARD_WIDTH / 2,
                    y: 0,
                    scale: isCenter ? 1.1 : 0.82,
                    opacity: visible ? (isCenter ? 1 : 0.5) : 0,
                    zIndex: isCenter ? 20 : 10,
                  };

              const morphTransition = inVacuum
                ? reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.55, ease: "easeIn" as const }
                : transition;

              return (
                <div
                  key={p.id}
                  className="absolute top-1/2 left-1/2"
                  style={{ transform: "translateY(-50%)" }}
                >
                  <motion.div
                    initial={inVacuum || inCircle ? circlePos : false}
                    animate={target}
                    transition={morphTransition}
                    style={{
                      pointerEvents:
                        view === "carousel" && visible ? "auto" : "none",
                    }}
                  >
                    <ProjectCard
                      project={p}
                      isCenter={view === "carousel" && isCenter}
                      onDetails={() => setDetailProject(p)}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{
                  delay: reduceMotion ? 0 : i * 0.05,
                  duration: reduceMotion ? 0 : 0.5,
                  ease: [0.32, 0.72, 0, 1],
                }}
              >
                <ProjectCard
                  project={p}
                  isCenter={false}
                  variant="grid"
                  onDetails={() => setDetailProject(p)}
                />
              </motion.div>
            ))}
          </div>
        )}

        {view === "carousel" && (
          <>
            {/* Arrow controls */}
            <button
              type="button"
              aria-label="Previous project"
              onClick={prev}
              className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-bg2/80 border border-zinc-700 text-white hover:text-brand1 hover:border-brand1/60 hover:bg-bg2 backdrop-blur-sm flex items-center justify-center transition-colors"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={next}
              className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-bg2/80 border border-zinc-700 text-white hover:text-brand1 hover:border-brand1/60 hover:bg-bg2 backdrop-blur-sm flex items-center justify-center transition-colors"
            >
              <FaChevronRight size={16} />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {projects.map((p, i) => {
                const active = i === activeIndex;
                return (
                  <button
                    key={p.id}
                    type="button"
                    aria-label={`Go to project ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      active
                        ? "w-6 bg-brand1"
                        : "w-2 bg-zinc-600 hover:bg-zinc-400"
                    }`}
                  />
                );
              })}
            </div>
          </>
        )}
      </motion.div>

      {/* View all / show less toggle */}
      <div className="text-center mt-16">
        <button
          type="button"
          onClick={view === "grid" ? collapse : expand}
          disabled={view === "circle" || view === "vacuum"}
          className="inline-flex items-center gap-2 px-5 py-2 bg-brand1 text-black font-medium rounded-md hover:bg-brand2 transition-colors disabled:opacity-60"
        >
          {view === "grid" ? (
            <>
              Show less <span>↑</span>
            </>
          ) : (
            <>
              View all <span>→</span>
            </>
          )}
        </button>
      </div>

      {/* Project details dialog — card spins to the front, reverses on close */}
      <AnimatePresence>
        {detailProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setDetailProject(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            style={{ perspective: 1200 }}
          >
            <motion.div
              initial={{ rotateY: 180, scale: 0.5, opacity: 0 }}
              animate={{ rotateY: 0, scale: 1, opacity: 1 }}
              exit={{ rotateY: -180, scale: 0.5, opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                ease: [0.32, 0.72, 0, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-bg2 border border-brand1/40 rounded-xl shadow-2xl"
            >
              <button
                type="button"
                aria-label="Close details"
                onClick={() => setDetailProject(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 border border-brand1/40 text-brand1 hover:bg-brand1 hover:text-black transition-colors flex items-center justify-center"
              >
                <FaTimes size={14} />
              </button>

              <div className="h-56 md:h-72 relative">
                <Image
                  src={detailProject.image}
                  alt={detailProject.title}
                  fill
                  sizes="672px"
                  className="object-cover rounded-t-xl"
                />
                {detailProject.private && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded bg-black/70 border border-brand1/40 text-brand1 text-xs backdrop-blur-sm">
                    <FaLock size={9} />
                    <span>Private — NDA</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-white text-2xl font-bold leading-snug">
                  {detailProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-sm">
                  {detailProject.company && (
                    <span className="text-brand2">{detailProject.company}</span>
                  )}
                  {detailProject.role && (
                    <span className="text-gray-400 italic">
                      {detailProject.role}
                    </span>
                  )}
                  {detailProject.period && (
                    <span className="text-brand1 text-xs border border-brand1/30 bg-brand1/10 px-2 py-0.5 rounded">
                      {detailProject.period}
                    </span>
                  )}
                </div>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  {detailProject.longDescription ?? detailProject.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {detailProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs bg-brand1/10 text-brand1 rounded border border-brand1/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(detailProject.demo || detailProject.github) && (
                  <div className="flex flex-wrap gap-3 mt-6">
                    {detailProject.demo && (
                      <a
                        href={detailProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-brand1 text-black text-sm font-medium rounded-md hover:bg-brand2 hover:text-white transition-colors"
                      >
                        Live Site <FaExternalLinkAlt size={12} />
                      </a>
                    )}
                    {detailProject.github && (
                      <a
                        href={detailProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border-2 border-brand1 text-brand1 text-sm font-medium rounded-md hover:bg-brand1/10 transition-colors"
                      >
                        GitHub <FaGithub size={12} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ProjectsSection;
