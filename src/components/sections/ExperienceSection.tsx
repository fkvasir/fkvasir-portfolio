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

const experiences: Experience[] = [
  {
    title: "Caregiver Booking & Recreational Activity Generator",
    company: "Geriatric Care Solutions",
    role: "Full Stack Developer",
    period: "May 2025 – Present",
    description:
      "Contributed to the development of a fullstack caregiver booking platform delivering personalized activities for elderly care.",
  },
  {
    title: "AI Daily Living Assistant & Personal Life OS",
    company: "Personal Project",
    role: "Full Stack Developer",
    period: "May 2026",
    description:
      "Built and deployed a full-stack AI productivity suite (eight modules across an AI daily-living toolkit and a Life OS) on Next.js 16, NestJS 11, and PostgreSQL/Prisma in a Turborepo monorepo, with Gemini-powered recipe, meal-planning, and weather-aware outfit tools.",
  },
  {
    title: "Nutritionist Meal Plan System",
    company: "ChefMDRX",
    role: "Full Stack Developer",
    period: "Apr 2026 – May 2026",
    description:
      "Built a subscription-based nutritionist meal-planning platform on Next.js, NestJS, and PostgreSQL with an R&D consultation-to-kitchen workflow, Xendit subscription payments, Resend transactional email, and free meal-delivery scheduling.",
  },
  {
    title: "E-commerce Website",
    company: "Matchderport",
    role: "Full Stack Developer",
    period: "Apr 2025 – Nov 2025",
    description:
      "Developed a fullstack e-commerce platform with booking, product pages, and user-community discussion features.",
  },
  {
    title: "E-Referral for Hospitals",
    company: "Anura Innovations",
    role: "Full Stack Developer",
    period: "Feb 2025 – Jun 2025",
    description:
      "Developed a secure web-based system with login enabling healthcare personnel to manage hospital-to-hospital patient referrals.",
  },
  {
    title: "Income & Expenses Tracker",
    company: "Self-Project",
    role: "Full Stack Developer",
    period: "Nov 2024 – Jan 2025",
    description:
      "Designed and implemented a user-friendly application to track income and expenses. Ensured secure data management with encryption and authentication features.",
  },
  {
    title: "Payment System",
    company: "Self-Project",
    role: "Frontend Developer",
    period: "Nov 2024",
    description:
      "Designed and developed an intuitive user interface for seamless payment processing, ensuring a responsive and user-friendly experience across devices. Implemented static payment status updates for design and user-experience.",
  },
  {
    title: "Rush Gym App",
    company: "Brite Studio Design and Automation",
    role: "Mobile Application Frontend Developer",
    period: "Jun 2024 – Aug 2024",
    description:
      "Implemented the Profile, Booking, and Wallet Screens for the Gym App using the React Native framework and Expo for production.",
  },
  {
    title: "MSU-IIT Faculty Program System",
    company: "Software Engineering Project",
    role: "Full Stack Developer",
    period: "Aug 2023 – Dec 2023",
    description:
      "A university website project where I designed and developed the landing page feature and implemented backend MySQL databases for courses and sections, enabling faculty to enroll students to courses and assign sections to students.",
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
        boxShadow: "0 20px 40px rgba(120, 81, 169, 0.35)",
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
          stroke="#7851A9"
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
            fill="#7851A9"
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
      {/* Section indicator */}
      <motion.div
        variants={headerItemVariants}
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
          className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-brand1 text-brand1 mx-2 bg-bg2"
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
