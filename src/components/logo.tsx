import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/my_logo.png"
      alt="FKVASIR Logo"
      width={40}
      height={40}
      className={className}
      priority
    />
  );
}
