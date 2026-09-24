"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Stethoscope, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToContent = () => {
    const nextSection = document.getElementById("quick-access");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white text-gray-900 border-b border-gray-100">
      {/* Ambient Soft Mesh Gradients Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Teal Glow */}
        <div className="absolute -top-24 -left-24 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-teal-400/15 rounded-full blur-[100px] sm:blur-[130px]" />
        {/* Right Soft Sky/Purple Glow */}
        <div className="absolute -top-20 -right-20 w-[350px] sm:w-[520px] h-[350px] sm:h-[520px] bg-purple-300/15 rounded-full blur-[100px] sm:blur-[140px]" />
        {/* Center Soft Emerald Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-emerald-200/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-5 lg:pt-8 pb-20 sm:pb-28 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition (5 cols for bigger right showcase) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 z-10 text-center lg:text-left mt-3 sm:mt-6 lg:mt-8">
            
            {/* Main Headline with Barokah Bersama Kami Tagline */}
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
                Ridhoka Salma.
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif italic text-primary tracking-tight leading-[1.15] drop-shadow-xs">
                Barokah Bersama Kami.
              </h2>
            </div>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Pelayanan kesehatan yang modern, nyaman, dan berorientasi pada kebutuhan setiap pasien dan keluarga berlandaskan prinsip syariah.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
              <Link
                href="/janji-temu"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-bold shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Buat Janji Temu</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>
              <Link
                href="/layanan"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-gray-700 hover:text-primary border border-gray-200 text-xs sm:text-sm font-semibold shadow-xs transition-all hover:-translate-y-0.5"
              >
                <Stethoscope className="w-4 h-4 text-primary" />
                <span>Jelajahi Layanan</span>
              </Link>
            </div>

            {/* Scroll indicator (positioned near bottom) */}
            <div className="pt-12 sm:pt-20 lg:pt-28 hidden sm:flex items-center justify-center lg:justify-start">
              <button
                onClick={scrollToContent}
                className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 hover:text-primary transition-colors cursor-pointer"
              >
                <span className="w-8 h-[2px] bg-gray-300 group-hover:bg-primary group-hover:w-12 transition-all" />
                <span>Scroll to explore</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </button>
            </div>

          </div>

          {/* Right Column: 4-Card Floating Mosaic Collage (7 cols with Increased Size & Float Animations) */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Ambient Radial Glow behind the cards */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/20 via-sky-300/20 to-purple-400/20 rounded-full blur-3xl transform scale-95 pointer-events-none" />

            {/* 2x2 Floating Cards Container (Expanded Size & Organic Floating Keyframes) */}
            <div className="relative grid grid-cols-2 gap-4 sm:gap-6 lg:gap-7 w-full max-w-[560px] sm:max-w-[640px] lg:max-w-[700px] p-2 sm:p-4 py-4 sm:py-6">
              
              {/* Card 1: Top Left (Float 1) */}
              <div className="relative aspect-[5/4] animate-card-float-1 hover:[animation-play-state:paused]">
                <div className="group relative w-full h-full rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-white shadow-xl shadow-gray-400/20 border border-gray-100/80 -rotate-[8deg] sm:-rotate-[10deg] hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:shadow-teal-900/15 hover:z-30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer overflow-hidden">
                  <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src="/assets/fasilitas/landing1.jpeg"
                      alt="RS Ridhoka Salma"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      sizes="(min-width: 1024px) 30vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Card 2: Top Right (Float 2, offset down) */}
              <div className="relative aspect-[5/4] animate-card-float-2 hover:[animation-play-state:paused] mt-6 sm:mt-8">
                <div className="group relative w-full h-full rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-white shadow-xl shadow-gray-400/20 border border-gray-100/80 rotate-[4deg] sm:rotate-[5deg] hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:shadow-teal-900/15 hover:z-30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer overflow-hidden">
                  <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src="/assets/fasilitas/poli-eksekutif1.png"
                      alt="Poli Eksekutif RS Ridhoka Salma"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      sizes="(min-width: 1024px) 30vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Card 3: Bottom Left (Float 3, offset up) */}
              <div className="relative aspect-[5/4] animate-card-float-3 hover:[animation-play-state:paused] -mt-3 sm:-mt-5">
                <div className="group relative w-full h-full rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-white shadow-xl shadow-gray-400/20 border border-gray-100/80 rotate-[2deg] sm:rotate-[3deg] hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:shadow-teal-900/15 hover:z-30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer overflow-hidden">
                  <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src="/assets/fasilitas/poli-eksekutif2.png"
                      alt="Layanan Poliklinik RS Ridhoka Salma"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      sizes="(min-width: 1024px) 30vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Card 4: Bottom Right (Float 4) */}
              <div className="relative aspect-[5/4] animate-card-float-4 hover:[animation-play-state:paused] mt-1 sm:mt-2">
                <div className="group relative w-full h-full rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-white shadow-xl shadow-gray-400/20 border border-gray-100/80 -rotate-[6deg] sm:-rotate-[8deg] hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:shadow-teal-900/15 hover:z-30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer overflow-hidden">
                  <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src="/assets/fasilitas/poli-eksekutif4.png"
                      alt="Ruang Tunggu Poli Nyaman & Modern"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      sizes="(min-width: 1024px) 30vw, 50vw"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
