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
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(108, 59, 170, 0.4)",
              }}
              className="bg-bg1/80 border border-brand1/30 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-brand1/10 border border-brand1/30 rounded flex items-center justify-center mb-4">
                <Icon className="text-brand1 text-xl" />
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
