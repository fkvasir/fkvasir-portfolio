import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowDown, FaBriefcase } from "react-icons/fa";

type Experience = {
  title: string;
  company: string;
  role: string;
  period: string;
  description: string;
};

// Ambient backdrop stars for the timeline
const EXPERIENCE_STARS = [
  { top: "8%", left: "12%", size: 3, duration: 2.6, delay: 0.2 },
  { top: "14%", left: "78%", size: 4, duration: 3.1, delay: 0.9 },
  { top: "30%", left: "6%", size: 3, duration: 2.8, delay: 1.4 },
  { top: "42%", left: "92%", size: 3, duration: 3.3, delay: 0.4 },
  { top: "58%", left: "10%", size: 3, duration: 2.5, delay: 1.8 },
  { top: "66%", left: "85%", size: 4, duration: 3.0, delay: 0.6 },
  { top: "80%", left: "20%", size: 3, duration: 2.9, delay: 1.1 },
  { top: "88%", left: "70%", size: 3, duration: 3.4, delay: 0.3 },
];

const experiences: Experience[] = [
  {
    title: "Caregiver Booking & Recreational Activity Generator",
    company: "Geriatric Care Solutions",
    role: "Full Stack Developer",
    period: "May 2025 – Present",
    description:
      "Engineered core features for a fullstack caregiver booking platform for elderly care, architecting AI-generated products — NYT-style crosswords, memoir books and stories from guided forms, AI video generation with a customization tool, photo albums, care prints, and blog posts — plus UI/UX improvements.",
  },
  {
    title: "AI Daily Living Assistant & Personal Life OS",
    company: "Personal Project",
    role: "Full Stack Developer",
    period: "May 2026",
    description:
      "Architected and deployed a full-stack AI productivity suite (eight modules across an AI daily-living toolkit and a Life OS) on Next.js 16, NestJS 11, and PostgreSQL/Prisma in a Turborepo monorepo, with Gemini-powered recipe, meal-planning, and weather-aware outfit tools.",
  },
  {
    title: "Nutritionist Meal Plan System",
    company: "ChefMDRX",
    role: "Full Stack Developer",
    period: "Apr 2026 – May 2026",
    description:
      "Engineered a subscription-based nutritionist meal-planning platform on Next.js, NestJS, and PostgreSQL with an R&D consultation-to-kitchen workflow, auditor verification of consultation recordings, bookings, and payments, admin dashboards for payments, R&D salary shares, and client stats, and an elder-friendly guided UI.",
  },
  {
    title: "E-commerce Website",
    company: "Matchderport",
    role: "Full Stack Developer",
    period: "Apr 2025 – Nov 2025",
    description:
      "Engineered a marketplace where users post and buy products, with seller-created community-style marketplaces that let members shape which products are offered, plus booking, product pages, and community discussions.",
  },
  {
    title: "E-Referral for Hospitals",
    company: "Anura Innovations",
    role: "Full Stack Developer",
    period: "Feb 2025 – Jun 2025",
    description:
      "Engineered a secure web-based system with authenticated access, enabling healthcare personnel to manage hospital-to-hospital patient referrals.",
  },
  {
    title: "Income & Expenses Tracker",
    company: "Self-Project",
    role: "Full Stack Developer",
    period: "Nov 2024 – Jan 2025",
    description:
      "Designed and implemented a user-friendly application to track income and expenses, engineering secure data management with encryption and authentication.",
  },
  {
    title: "Payment System",
    company: "Self-Project",
    role: "Frontend Developer",
    period: "Nov 2024",
    description:
      "Designed and engineered an intuitive user interface for seamless payment processing, ensuring a responsive and user-friendly experience across devices. Implemented static payment status updates for design and user experience.",
  },
  {
    title: "Rush Gym App",
    company: "Brite Studio Design and Automation",
    role: "Mobile Application Frontend Developer",
    period: "Jun 2024 – Aug 2024",
    description:
      "Engineered and shipped the Profile, Booking, and Wallet screens for the gym app using the React Native framework and Expo for production.",
  },
  {
    title: "MSU-IIT Faculty Program System",
    company: "Software Engineering Project",
    role: "Full Stack Developer",
    period: "Aug 2023 – Dec 2023",
    description:
      "A university website project where I architected the landing page feature and engineered backend MySQL databases for courses and sections, enabling faculty to enroll students in courses and assign sections to students.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delayChildren: 0.3,
      staggerChildren: 0.18,
    },
  },
};

const headerItemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ExperienceCard = ({
  exp,
  side,
  inView,
  index,
}: {
  exp: Experience;
  side: "left" | "right";
  inView: boolean;
  index: number;
}) => {
  const fromX = side === "left" ? -60 : 60;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromX }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: fromX }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 40px rgba(108, 59, 170, 0.4)",
        transition: { duration: 0.3 },
      }}
      className="bg-zinc-800/80 backdrop-blur rounded-lg border border-zinc-700 hover:border-brand1/50 p-6 transition-colors duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 text-brand1">
          <FaBriefcase size={14} />
          <span className="text-brand2 text-sm">{exp.company}</span>
        </div>
        <span className="shrink-0 text-xs text-brand1 border border-brand1/30 bg-brand1/10 px-2 py-1 rounded">
          {exp.period}
        </span>
      </div>

      <h3 className="text-white font-bold text-lg mb-1">{exp.title}</h3>
      <p className="text-gray-400 text-sm italic mb-3">{exp.role}</p>
      <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
    </motion.div>
  );
};

const ZigzagArrow = ({
  direction,
  inView,
  delay,
}: {
  direction: "right-down" | "left-down";
  inView: boolean;
  delay: number;
}) => {
  const path =
    direction === "right-down"
      ? "M 10 10 C 80 10, 190 30, 190 90"
      : "M 190 10 C 120 10, 10 30, 10 90";
  const arrowX = direction === "right-down" ? 190 : 10;
  const arrowY = 90;
  const arrowRotation = 90;

  return (
    <div className="hidden md:flex items-center justify-center my-2 col-span-2">
      <svg
        width="200"
        height="100"
        viewBox="0 0 200 100"
        className="overflow-visible"
      >
        <motion.path
          d={path}
          fill="none"
          stroke="#6C3BAA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            inView
              ? { pathLength: 1, opacity: 0.85 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{ duration: 0.9, delay, ease: "easeInOut" }}
        />
        <motion.g
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: delay + 0.85 }}
        >
          <polygon
            points="0,-6 12,0 0,6"
            fill="#6C3BAA"
            transform={`translate(${arrowX}, ${arrowY}) rotate(${arrowRotation})`}
          />
        </motion.g>
      </svg>
    </div>
  );
};

const MobileArrow = ({ inView, delay }: { inView: boolean; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
    transition={{ duration: 0.4, delay }}
    className="md:hidden flex items-center justify-center my-3"
  >
    <FaArrowDown className="text-brand1" size={22} />
  </motion.div>
);

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <motion.section
      id="experience"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="min-h-screen bg-bg2 py-20 relative overflow-hidden"
    >
      {/* Ambient night backdrop — gold fog, stars, comet, and a UFO */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            opacity: [0.12, 0.24, 0.12],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] -left-24 w-[28rem] h-[28rem] rounded-full bg-brand1 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-[10%] -right-24 w-[26rem] h-[26rem] rounded-full bg-brand1 blur-3xl"
        />

        {/* Edge bubbles — large circles flushed on alternating borders */}
        <div className="absolute top-[8%] right-0 translate-x-1/2 w-[26rem] h-[26rem] md:w-[34rem] md:h-[34rem]">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(108, 59, 170, 0.4), rgba(108, 59, 170, 0.14) 55%, transparent 78%)",
            }}
          />
          <div className="absolute -inset-6 rounded-full border border-brand1/40" />
          <div className="absolute inset-8 rounded-full border border-white/10" />
        </div>
        <div className="absolute top-[40%] left-0 -translate-x-1/2 w-[20rem] h-[20rem] md:w-[28rem] md:h-[28rem]">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, rgba(108, 59, 170, 0.38), rgba(108, 59, 170, 0.12) 55%, transparent 78%)",
            }}
          />
          <div className="absolute -inset-6 rounded-full border border-brand1/40" />
          <div className="absolute inset-8 rounded-full border border-white/10" />
        </div>
        <div className="absolute top-[72%] right-0 translate-x-1/2 w-[16rem] h-[16rem] md:w-[24rem] md:h-[24rem]">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 40%, rgba(108, 59, 170, 0.36), rgba(108, 59, 170, 0.12) 55%, transparent 78%)",
            }}
          />
          <div className="absolute -inset-6 rounded-full border border-brand1/40" />
          <div className="absolute inset-8 rounded-full border border-white/10" />
        </div>

        {EXPERIENCE_STARS.map((star, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.15, 0.9, 0.15], scale: [1, 1.3, 1] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Comet */}
        <motion.span
          className="absolute top-[18%] left-[90%] h-1 w-56 rounded-full bg-gradient-to-r from-white via-brand1 to-transparent"
          style={{
            rotate: -30,
            boxShadow:
              "0 0 18px rgba(255, 255, 255, 0.9), 0 0 40px rgba(207, 181, 59, 0.5)",
          }}
          animate={{ x: [0, -900], y: [0, 480], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeOut",
          }}
        />
        {/* UFO */}
        <motion.span
          className="absolute top-[55%] left-0 text-5xl"
          style={{
            filter: "drop-shadow(0 6px 14px rgba(207, 181, 59, 0.6))",
          }}
          animate={{
            x: ["-10vw", "110vw"],
            y: [0, -24, 10, -18, 0],
            rotate: [0, 8, -8, 5, 0],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "linear",
          }}
        >
          🛸
        </motion.span>
      </div>

      {/* Scroll-down mouse indicator */}
      <motion.div
        variants={headerItemVariants}
        className="flex items-center justify-center gap-4 mb-16"
      >
        <motion.span
          animate={{ opacity: [0.2, 1, 0.2], y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block w-1 h-10 rounded bg-brand1/50"
        />
        <div className="w-7 h-12 rounded-full border-2 border-brand1 flex justify-center pt-2">
          <motion.span
            animate={{ y: [0, 14], opacity: [1, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeIn" }}
            className="block w-1.5 h-3 rounded-full bg-brand1"
          />
        </div>
        <motion.span
          animate={{ opacity: [0.2, 1, 0.2], y: [0, 10, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="block w-1 h-10 rounded bg-brand1/50"
        />
      </motion.div>

      {/* Section title */}
      <motion.div variants={headerItemVariants} className="text-center mb-14">
        <motion.h2
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-brand1"
        >
          Work Experience
        </motion.h2>
        <motion.p
          variants={headerItemVariants}
          className="text-gray-400 mt-2 px-4"
        >
          A timeline of where I&apos;ve built things.
        </motion.p>
      </motion.div>

      {/* Timeline grid: zigzag on md+, single column on mobile */}
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 md:gap-x-10">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            const arrowDirection = isLeft ? "right-down" : "left-down";
            const isLast = i === experiences.length - 1;

            return (
              <React.Fragment key={`${exp.title}-${exp.period}`}>
                {/* Card slot — desktop alternates columns; mobile is single col */}
                <div
                  className={`${
                    isLeft ? "md:col-start-1" : "md:col-start-2"
                  } md:row-auto`}
                >
                  <ExperienceCard
                    exp={exp}
                    side={isLeft ? "left" : "right"}
                    inView={inView}
                    index={i}
                  />
                </div>

                {/* Connector — hidden after the last card */}
                {!isLast && (
                  <>
                    <ZigzagArrow
                      direction={arrowDirection}
                      inView={inView}
                      delay={0.6 + i * 0.15}
                    />
                    <MobileArrow inView={inView} delay={0.4 + i * 0.15} />
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
