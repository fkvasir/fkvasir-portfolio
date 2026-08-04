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
} from "react-icons/fa";

// Per-card star field revealed on hover
const CARD_STARS = [
  { top: "12%", left: "10%", size: 2, duration: 2.4, delay: 0 },
  { top: "20%", left: "55%", size: 2, duration: 3.0, delay: 0.5 },
  { top: "10%", left: "80%", size: 3, duration: 2.6, delay: 1.1 },
  { top: "38%", left: "28%", size: 2, duration: 3.2, delay: 0.8 },
  { top: "45%", left: "72%", size: 2, duration: 2.8, delay: 0.3 },
  { top: "30%", left: "90%", size: 2, duration: 3.4, delay: 1.5 },
];

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
        {/* Scroll-down mouse indicator */}
        <motion.div
          variants={itemVariants}
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
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="group relative pt-8"
            >
              {/* Card body */}
              <div className="relative overflow-hidden bg-bg1/80 border border-brand1/30 rounded-lg px-6 pb-6 pt-12 backdrop-blur-sm transition-shadow duration-300 group-hover:shadow-[0_20px_40px_rgba(108,59,170,0.4)]">
              {/* Hover night scene — stars, shooting star, treeline */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              >
                {CARD_STARS.map((star, i) => (
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
                  className="absolute top-[15%] left-[75%] h-px w-16 bg-gradient-to-r from-white to-transparent"
                  style={{ rotate: -35 }}
                  animate={{ x: [0, -140], y: [0, 90], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeOut",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-full h-16 opacity-60"
                  style={{
                    backgroundImage: "url(/trees-m.webp)",
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "auto 100%",
                    backgroundPosition: "bottom left",
                  }}
                />
              </div>

              {/* Gold corner fill sweeping in diagonally from the bottom right */}
              <div
                className="absolute bottom-0 right-0 w-14 h-14 pointer-events-none opacity-0 translate-x-14 translate-y-14 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"
                aria-hidden="true"
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                  background: "linear-gradient(135deg, #E8D77A, #CFB53B 55%, #A98F2F)",
                }}
              />

              <div className="relative z-10">
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-3">{blurb}</p>
                <span className="text-xs font-mono text-brand1">{tech}</span>
              </div>
              </div>

              {/* Icon chip overlapping the card's top edge — morphs into the moon */}
              <div className="absolute top-0 left-6 z-20 w-16 h-16 rounded-lg bg-bg1 border border-brand1/30 flex items-center justify-center transition-colors duration-500 group-hover:bg-transparent group-hover:border-transparent">
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:rotate-180 group-hover:scale-0 group-hover:opacity-0">
                  <Icon className="text-brand1 text-2xl" />
                </span>
                <span className="absolute inset-0 flex items-center justify-center -rotate-180 scale-0 opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100">
                  <span
                    className="block w-14 h-14 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 35% 35%, #E8D77A, #CFB53B 60%, #A98F2F)",
                      boxShadow:
                        "0 0 25px rgba(207, 181, 59, 0.8), 0 0 60px rgba(207, 181, 59, 0.4)",
                    }}
                  />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
