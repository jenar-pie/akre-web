"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-[180px] h-[50px] sm:w-[240px] sm:h-[68px] lg:w-[300px] lg:h-[84px]">
              <Image
                src="/assets/logo/LOGO RSRS.svg"
                alt="RS Ridhoka Salma"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}


