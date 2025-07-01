import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

interface HomeSectionProps {
  profileImageKey: number;
}

const HomeSection: React.FC<HomeSectionProps> = ({ profileImageKey }) => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hey\nI'm FKVASIR,\nFull-Stack Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.2,
      },
    },
  };

  const skills = [
    "HTML",
    "CSS",
    "JS",
    "Typescript",
    "React",
    "React Native",
    "NextJS",
    "MongoDB",
    "Express.js",
    "Node.js",
    "Python",
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-bg2 flex flex-col md:flex-row items-center justify-center px-6 py-10 md:py-0 md:px-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-brand1 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand2 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 w-full max-w-6xl relative z-10"
      >
        {/* Profile Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            rotateY: 5,
            transition: { duration: 0.3 },
          }}
          className="flex flex-col items-center bg-bg1 p-6 rounded-lg border border-zinc-700 max-w-xs backdrop-blur-sm bg-opacity-90"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-brand1/40"
          >
            <Image
              src={`/profile-pic.jpeg?v=${profileImageKey}`}
              alt="FKVASIR"
              width={160}
              height={160}
              className="object-cover object-center"
              priority
            />
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 border-4 border-transparent border-t-brand1 rounded-full"
            />
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="mt-4 text-xl text-brand1 font-bold"
          >
            FKVASIR
          </motion.h3>

          <motion.p variants={itemVariants} className="text-gray-400 text-sm">
            Full-stack developer
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-5 w-full space-y-3 text-sm"
          >
            <motion.div
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
              className="flex items-center gap-2 text-gray-300"
            >
              <FaEnvelope size={16} className="text-brand1" />
              <span>lavesoreskvasir@gmail.com</span>
            </motion.div>
            <motion.div
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
              className="flex items-center gap-2 text-gray-300"
            >
              <span className="text-brand1">🌍</span>
              <span>Philippines &#40; Remote &#41;</span>
            </motion.div>
            <motion.div
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
              className="flex items-center gap-2 text-gray-300"
            >
              <span className="text-brand1">💼</span>
              <span>Full-Time / Freelancer</span>
            </motion.div>
            <motion.div
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
              className="flex items-center gap-2 text-gray-300"
            >
              <span className="text-brand1">🌐</span>
              <span>www.fkvasir.dev</span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-2 mt-6 flex-wrap"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#98FAEC",
                  transition: { duration: 0.2 },
                }}
                className="px-2 py-1 text-xs bg-brand1 text-black rounded cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.a
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(18, 247, 214, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            href="/cv.pdf"
            download
            className="flex items-center gap-2 mt-6 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md hover:bg-zinc-700 transition"
          >
            <FaDownload />
            <span className="text-white">Download CV</span>
          </motion.a>
        </motion.div>

        {/* Content */}
        <div className="flex-1 space-y-8">
          <motion.div variants={itemVariants}>
            <div className="text-gray-500 font-mono">&lt;h1&gt;</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white min-h-[180px] md:min-h-[200px]">
              {displayText.split("\n").map((line, index) => (
                <span key={index} className="block">
                  {line.includes("FKVASIR") ? (
                    <>
                      {line.split("FKVASIR")[0]}
                      <span className="text-brand1">FKVASIR</span>
                      {line.split("FKVASIR")[1]}
                    </>
                  ) : (
                    line
                  )}
                  {index < displayText.split("\n").length - 1 && <br />}
                </span>
              ))}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-brand1"
              >
                |
              </motion.span>
            </h1>
            <div className="text-gray-500 font-mono">&lt;/h1&gt;</div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <div className="text-gray-500 font-mono">&lt;p&gt;</div>
            <p className="text-gray-300 text-lg">
              I help businesses grow by crafting amazing web experiences. If
              you&apos;re looking for a developer that likes to get stuff done,
              let&apos;s talk about your project!
            </p>
            <div className="text-gray-500 font-mono">&lt;/p&gt;</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
          >
            <Link
              href="#contacts"
              className="inline-flex items-center gap-2 px-5 py-3 bg-brand1 text-black font-medium rounded-md hover:bg-brand2 transition-colors group"
            >
              <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                Let&apos;s Talk
              </motion.span>
              <motion.div
                whileHover={{ x: 5, rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope />
              </motion.div>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={statsVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row gap-6 mt-10"
          >
            {[
              { number: "4", label: "Programming\nLanguages" },
              { number: "6", label: "Development\nTools" },
              { number: "2", label: "Years of\nExperience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(18, 247, 214, 0.1)",
                  borderColor: "rgba(18, 247, 214, 0.3)",
                }}
                className="flex items-center gap-4 bg-zinc-800/50 p-4 rounded-lg border border-transparent transition-all duration-300"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.2, duration: 0.5 }}
                  className="text-3xl font-bold text-brand1"
                >
                  {stat.number}
                </motion.span>
                <span className="text-sm text-gray-300 whitespace-pre-line">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
