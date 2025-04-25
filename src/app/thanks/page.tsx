"use client";

import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-bg1 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-bg2 border border-zinc-700 rounded-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-brand1 text-6xl" />
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
        <p className="text-gray-400 mb-8">
          Your message has been successfully sent. I&apos;ll get back to you as
          soon as possible.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand1 text-black font-medium rounded-md hover:bg-brand2 transition-colors"
        >
          <FaArrowLeft size={14} />
          <span>Back to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
