"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaCheckCircle, FaHome } from "react-icons/fa";

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-bg2 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <FaCheckCircle className="text-brand1 text-6xl mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-white">Message Sent!</h1>
        <p className="text-gray-300 text-lg mb-8">
          Thank you for reaching out. I&apos;ll get back to you as soon as
          possible!
        </p>

        <Link href="/">
          <Button className="bg-brand1 text-black hover:bg-brand2">
            <FaHome className="mr-2" /> Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
