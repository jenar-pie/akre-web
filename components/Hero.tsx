"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-[#198782]">
      {/* Hero - responsive scaling without cropping */}
      <div className="relative w-full">
        {/* Use a responsive aspect ratio that maintains the full image */}
        <div className="relative w-full" style={{ paddingTop: "clamp(35%, 42.47%, 50%)" }}>
          <Image
            src="/assets/hero/Baner.svg"
            alt="Welcome to RS Ridhoka Salma - Melayani Dengan Hati dan Syariah"
            fill
            className="object-contain object-center"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
