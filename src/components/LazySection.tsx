"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Using unknown to avoid using 'any' directly
interface LazySectionProps<T = unknown> {
  id: string;
  component: React.ComponentType<T>;
  props?: T;
}

function LazySection<T>({
  id,
  component: Component,
  props,
}: LazySectionProps<T>): ReactNode {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Load when component is 200px away from viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading when 200px away from viewport
        threshold: 0.01,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} id={id} style={{ minHeight: "100vh" }}>
      <AnimatePresence mode="wait">
        {isVisible ? (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Cast is necessary to pass props correctly with TypeScript */}
            <Component {...(props as T & {})} />
          </motion.div>
        ) : (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 border-4 border-gray-700 rounded-full"></div>
                <div className="absolute top-0 left-0 w-12 h-12 border-4 border-brand1 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-brand1 font-mono text-sm"
              >
                Loading section...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LazySection;
