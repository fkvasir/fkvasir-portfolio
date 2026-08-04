import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const contactRows = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "lavesoreskvasir@gmail.com",
    href: "mailto:lavesoreskvasir@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Areas Served",
    value: "Worldwide — Remote (Philippines based)",
  },
  {
    icon: FaBriefcase,
    label: "Availability",
    value: "Full-Time / Freelance",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contacts"
      className="min-h-screen bg-bg2 py-20 relative overflow-hidden"
    >
      {/* Treeline along the bottom */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-24 md:h-32 pointer-events-none opacity-50"
        style={{
          backgroundImage: "url(/trees-m.webp)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "bottom left",
        }}
      />

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
      <div className="text-center mb-14">
        <p className="text-brand1 text-sm font-bold tracking-[0.3em] uppercase">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 uppercase">
          Get In Touch
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-start">
        {/* Left column — intro + contact rows */}
        <div>
          <p className="text-gray-300 leading-relaxed max-w-xl">
            Send me a message and let me know everything you want out of your
            project. I respond to everyone within 24 hours of contacting me —
            and if I&apos;m unavailable, I&apos;ll get back to you the same
            day.
          </p>

          <div className="mt-10 space-y-8">
            {contactRows.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-5">
                <span
                  className="flex-none w-14 h-14 rounded-full border border-brand1/60 flex items-center justify-center text-brand1"
                  style={{
                    boxShadow:
                      "0 0 14px rgba(207, 181, 59, 0.35), inset 0 0 10px rgba(207, 181, 59, 0.15)",
                  }}
                >
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-white font-bold uppercase tracking-wide text-sm">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-gray-400 hover:text-brand1 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-400">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — message card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-bg1/60 border border-brand1/20 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-8 uppercase">
            Send a Message
          </h3>
          <form
            action="https://formsubmit.co/3263afce60802beb0aa69fcb4343799a"
            method="POST"
            className="space-y-6"
          >
            {/* Hidden fields for FormSubmit configuration */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
            />
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

            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-white uppercase tracking-wide text-xs font-bold"
              >
                Name*
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                className="bg-black/40 border-zinc-700 text-white focus-visible:ring-brand1"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-white uppercase tracking-wide text-xs font-bold"
              >
                Email*
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="bg-black/40 border-zinc-700 text-white focus-visible:ring-brand1"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-white uppercase tracking-wide text-xs font-bold"
              >
                Phone
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone (optional)"
                className="bg-black/40 border-zinc-700 text-white focus-visible:ring-brand1"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-white uppercase tracking-wide text-xs font-bold"
              >
                Message*
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write message..."
                required
                className="bg-black/40 border-zinc-700 text-white focus-visible:ring-brand1"
              />
            </div>

            <Button
              type="submit"
              className="rounded-full bg-brand1 text-black font-bold hover:bg-brand2 hover:text-white px-10 py-6 h-auto text-base uppercase tracking-wide"
              style={{
                boxShadow: "0 0 25px rgba(207, 181, 59, 0.4)",
              }}
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
