import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CTABanner = ({
  message = "Have a project in mind?",
}: {
  message?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className="max-w-4xl mx-auto px-4 py-12"
  >
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-bg1 border border-brand1/30 rounded-lg p-8 shadow-lg">
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold text-white">{message}</h3>
        <p className="text-gray-400 mt-1">
          You&apos;ll get a reply from me personally.
        </p>
      </div>
      <Link
        href="#contacts"
        className="inline-flex items-center gap-2 px-6 py-3 bg-brand1 text-black font-medium rounded-md hover:bg-brand2 transition-colors whitespace-nowrap"
      >
        Let&apos;s Talk <FaArrowRight />
      </Link>
    </div>
  </motion.div>
);

export default CTABanner;
