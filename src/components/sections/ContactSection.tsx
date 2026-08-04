import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  return (
    <section id="contacts" className="min-h-screen bg-bg2 py-20 relative">
      {/* Scroll-down mouse indicator */}
      <div className="flex items-center justify-center gap-4 mb-16">
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
      </div>

      {/* Section title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-brand1">Contact</h2>
        <p className="text-gray-400 mt-2">
          I&apos;m currently available for freelance work
        </p>
      </div>

      {/* Contact form */}
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <form
          action="https://formsubmit.co/lavesoreskvasir@gmail.com"
          method="POST"
          className="space-y-8"
        >
          {/* Hidden fields for FormSubmit configuration */}
          <input
            type="hidden"
            name="_subject"
            value="New message from portfolio website!"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://fkvasir.vercel.app/thanks"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-brand1">
                Your name*
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-brand1"
                style={{ position: "relative", zIndex: 20 }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-brand1">
                Your email*
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-brand1"
                style={{ position: "relative", zIndex: 20 }}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-brand1">
              Your message*
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-brand1"
              style={{ position: "relative", zIndex: 20 }}
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              className="bg-brand1 text-black hover:bg-brand2 px-6 py-6 h-auto text-base relative z-20"
            >
              Send Message <span className="ml-2">↗</span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
