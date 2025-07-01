import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
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

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: { opacity: 1, scale: 1, x: 0 },
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-bg2 py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand1/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
        <motion.div variants={itemVariants} className="text-center mb-10">
          <motion.span
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(18, 247, 214, 0.3)",
            }}
            className="inline-block border-2 border-brand1 px-6 py-2 rounded-full text-xl text-brand1 font-medium cursor-pointer transition-all duration-300"
          >
            About Me
          </motion.span>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Terminal-style text */}
          <motion.div
            variants={textVariants}
            className="bg-zinc-800/80 backdrop-blur rounded-lg p-6 border border-zinc-700 font-mono text-sm md:text-base leading-relaxed relative"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-600">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-400 ml-2">about-me.js</span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-brand1 mb-2"
            >
              Hello!
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mb-4"
            >
              <span className="text-gray-400">I&apos;m</span>{" "}
              <span className="text-brand1">FKVASIR</span>{" "}
              <span className="text-gray-400">
                and I specialize in web development, app development, machine
                learning, deep learning and AI integration in systems that
                utilizes
              </span>{" "}
              <span className="text-brand1">HTML, CSS, JavaScript, Python</span>
              .
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mb-4 text-gray-400"
            >
              I&apos;m passionate about creating intuitive user experiences and
              functional interfaces. Building things that make a difference by
              focusing on the details that matter.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="mb-4"
            >
              <span className="text-brand1">When I&apos;m not coding // </span>
              <span className="opacity-80 text-gray-400">
                you&apos;ll probably find me reading or gaming.
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="text-gray-400"
            >
              I&apos;d love to help you achieve your vision, and create systems
              that make an impact and make the world better.
            </motion.p>

            {/* Typing cursor */}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-brand1"
            >
              _
            </motion.span>
          </motion.div>

          {/* Developer image */}
          <motion.div variants={imageVariants} className="relative">
            <motion.div
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="relative rounded-lg overflow-hidden shadow-2xl border border-zinc-700"
            >
              <motion.div
                initial={{ scale: 1.1 }}
                animate={inView ? { scale: 1 } : { scale: 1.1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Image
                  src="/about-me_coding.jpg"
                  alt="Developer coding"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </motion.div>

              {/* Overlay effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-tr from-brand1/20 to-transparent"
              />

              {/* Floating icons */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 right-4 w-8 h-8 bg-brand1/20 rounded-full flex items-center justify-center border border-brand1/30"
              >
                <span className="text-brand1 text-xs">💻</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-4 left-4 w-8 h-8 bg-brand1/20 rounded-full flex items-center justify-center border border-brand1/30"
              >
                <span className="text-brand1 text-xs">⚡</span>
              </motion.div>
            </motion.div>

            {/* Background glow */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-4 bg-brand1/10 rounded-lg blur-xl -z-10"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
