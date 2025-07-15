import React from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg1 border-t border-zinc-700 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-2"
            >
              <Image
                src="/my_logo.png"
                alt="FKVASIR Logo"
                width={32}
                height={32}
                className="rounded-md"
              />
              <h3 className="text-xl font-bold text-brand1">FKVASIR</h3>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              Full-Stack Developer
              <br />
              Building amazing web experiences
            </motion.p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center md:items-start">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold text-white mb-4"
            >
              Contact
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 text-gray-400 text-sm text-center md:text-left"
            >
              <p>lavesoreskvasir@gmail.com</p>
              <p>Philippines (Remote)</p>
              <p>Available for freelance work</p>
            </motion.div>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-start">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold text-white mb-4"
            >
              Connect
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col space-y-3"
            >
              <a
                href="https://github.com/fkvasir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-brand1 transition-colors"
              >
                <FaGithub size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/fulgent-kvasir-lavesores-662900231/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-brand1 transition-colors"
              >
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://discord.com/users/727883349179498538"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-brand1 transition-colors"
              >
                <FaDiscord size={18} />
                <span>Discord</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-px bg-zinc-700 mb-6"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-gray-500 text-sm"
        >
          <Image
            src="/my_logo.png"
            alt="FKVASIR Logo"
            width={20}
            height={20}
            className="rounded-sm"
          />
          <p>© {currentYear} FKVASIR. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
