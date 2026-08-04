import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaLaptopCode,
  FaCreditCard,
  FaComments,
  FaDatabase,
  FaRocket,
  FaMobileAlt,
  FaMoon,
} from "react-icons/fa";

// Deterministic star field for the section background
const SECTION_STARS = [
  { top: "8%", left: "6%", size: 2, duration: 2.7, delay: 0.2 },
  { top: "14%", left: "20%", size: 3, duration: 3.3, delay: 1.1 },
  { top: "6%", left: "41%", size: 2, duration: 2.5, delay: 0.6 },
  { top: "11%", left: "63%", size: 2, duration: 3.0, delay: 1.7 },
  { top: "7%", left: "82%", size: 3, duration: 2.8, delay: 0.4 },
  { top: "24%", left: "12%", size: 2, duration: 3.4, delay: 0.9 },
  { top: "28%", left: "48%", size: 2, duration: 2.6, delay: 1.4 },
  { top: "22%", left: "91%", size: 2, duration: 3.1, delay: 0.1 },
  { top: "38%", left: "30%", size: 2, duration: 2.9, delay: 1.9 },
  { top: "42%", left: "72%", size: 2, duration: 3.2, delay: 0.7 },
];

const services = [
  {
    icon: FaLaptopCode,
    title: "Full-Stack Web Apps",
    blurb: "Complete platforms from landing page to admin dashboard.",
    tech: "Next.js · NestJS",
  },
  {
    icon: FaCreditCard,
    title: "Payment Integration",
    blurb: "Subscriptions, checkouts, and billing flows that just work.",
    tech: "Stripe · Xendit",
  },
  {
    icon: FaComments,
    title: "Real-time & Live Chat",
    blurb:
      "Live features and in-site customer-service chat your users can reach instantly.",
    tech: "Socket.io · Zendesk",
  },
  {
    icon: FaDatabase,
    title: "Databases & ORM",
    blurb: "Clean, type-safe data models on relational and document stores.",
    tech: "PostgreSQL · MongoDB Atlas · Neon · Prisma",
  },
  {
    icon: FaRocket,
    title: "Deployment & DevOps",
    blurb: "Shipped with CI, containers, and automated migrations.",
    tech: "Vercel · Render · Railway · Docker",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Apps",
    blurb: "Cross-platform mobile screens for iOS and Android.",
    tech: "React Native · Expo",
  },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="services"
      className="min-h-screen bg-bg2 py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Star field + falling star */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {SECTION_STARS.map((star, i) => (
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
        <motion.span
          className="absolute top-[8%] left-[85%] h-px w-24 bg-gradient-to-r from-white to-transparent"
          style={{ rotate: -35 }}
          animate={{ x: [-20, -300], y: [0, 190], opacity: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 7,
            ease: "easeOut",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10"
      >
        {/* Section indicator */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center mb-16"
        >
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: 48 } : { height: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-1 bg-brand1/30"
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
            initial={{ height: 0 }}
            animate={inView ? { height: 48 } : { height: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-1 bg-brand1/30"
          />
        </motion.div>

        {/* Section title */}
        <motion.div variants={itemVariants} className="text-center mb-4">
          <motion.span
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(207, 181, 59, 0.3)",
            }}
            className="inline-block border-2 border-brand1 px-6 py-2 rounded-full text-xl text-brand1 font-medium cursor-pointer transition-all duration-300"
          >
            What I Do
          </motion.span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-center text-gray-400 mb-10 px-4"
        >
          Everything you need to launch and run a real product.
        </motion.p>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, blurb, tech }) => (
            <motion.div
              key={title}
              variants={{
                ...itemVariants,
                hover: {
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(108, 59, 170, 0.4)",
                },
              }}
              whileHover="hover"
              className="bg-bg1/80 border border-brand1/30 rounded-lg p-6 backdrop-blur-sm"
            >
              {/* Icon spins away and morphs into a moon on hover */}
              <div className="relative w-12 h-12 bg-brand1/10 border border-brand1/30 rounded flex items-center justify-center mb-4">
                <motion.span
                  variants={{
                    hidden: { rotate: 0, scale: 1, opacity: 1 },
                    visible: { rotate: 0, scale: 1, opacity: 1 },
                    hover: { rotate: 180, scale: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Icon className="text-brand1 text-xl" />
                </motion.span>
                <motion.span
                  variants={{
                    hidden: { rotate: -180, scale: 0, opacity: 0 },
                    visible: { rotate: -180, scale: 0, opacity: 0 },
                    hover: { rotate: 0, scale: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <FaMoon className="text-brand1 text-xl" />
                </motion.span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm mb-3">{blurb}</p>
              <span className="text-xs font-mono text-brand1">{tech}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
