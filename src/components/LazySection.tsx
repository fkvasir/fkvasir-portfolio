"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";

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
      {isVisible ? (
        // Cast is necessary to pass props correctly with TypeScript
        <Component {...(props as T & {})} />
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      )}
    </div>
  );
}

export default LazySection;
