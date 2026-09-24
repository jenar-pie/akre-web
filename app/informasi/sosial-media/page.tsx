"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, ArrowRight } from "lucide-react";
import { socialMediaLinks } from "@/data/socialMedia";

export default function SosialMediaPage() {
  const getUrl = (id: string, fallback: string) => {
    const found = socialMediaLinks.find((item) => item.id === id);
    return found ? found.url : fallback;
  };

  const getImage = (id: string, fallback: string) => {
    const found = socialMediaLinks.find((item) => item.id === id);
    return (found && found.image) ? found.image : fallback;
  };

  return (
    <div className="bg-surface-bg min-h-screen">
      {/* Header Banner */}
      <div className="relative w-full bg-[#3A9D9A] text-white py-10 sm:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <Link
              href="/informasi"
              className="text-xs text-teal-100 hover:text-white transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Pusat Informasi</span>
            </Link>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-3 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OFFICIAL CHANNELS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Sosial Media Resmi
          </h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Terhubung bersama RS Ridhoka Salma melalui kanal media sosial resmi untuk update jadwal praktek, edukasi kesehatan, dan promo terkini.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Bento Grid Social Media */}
        <div className="space-y-4 sm:space-y-5">
          {/* Top Section: Left Big Card (Instagram) + Right 2 Stacked Cards (TikTok & Facebook) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
            
            {/* 1. Large Card: INSTAGRAM */}
            <div className="md:col-span-7">
              <a
                href={getUrl("instagram", "https://www.instagram.com/rs.ridhokasalma?stkn=aGc1enQzbTFuN284")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full h-[280px] sm:h-[360px] md:h-full md:min-h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl hover:shadow-pink-900/20 hover:-translate-y-1 transition-all duration-300 border border-white/20 cursor-pointer"
              >
                {/* Background Scenery Image with Smooth Zoom on Hover */}
                <Image
                  src={getImage("instagram", "/assets/fasilitas/poli-eksekutif1.png")}
                  alt="Instagram RS Ridhoka Salma"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />

                {/* Overlay Hitam dengan 20% Blur HANYA saat Hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 backdrop-blur-none group-hover:backdrop-blur-[2px] transition-all duration-300 pointer-events-none" />

                {/* Centered Subtitle, Title & LIHAT Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 text-center">
                  <span className="text-[10px] sm:text-xs tracking-[0.22em] font-semibold text-white/90 uppercase drop-shadow-sm mb-1 sm:mb-1.5 transition-all duration-300">
                    OFFICIAL CHANNEL
                  </span>
                  <h3 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                    INSTAGRAM
                  </h3>
                  <div className="mt-4 inline-flex items-center gap-2 px-8 sm:px-10 py-2 sm:py-2.5 rounded-full border border-white/80 bg-black/30 backdrop-blur-[2px] hover:bg-white hover:text-gray-900 text-white text-xs sm:text-sm font-bold tracking-wider shadow-xl active:scale-95 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <span>LIHAT</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            </div>

            {/* Right Column: 2 Stacked Cards (TIKTOK & FACEBOOK) */}
            <div className="md:col-span-5 flex flex-col gap-4 sm:gap-5">
              
              {/* 2. Top Right Card: TIKTOK */}
              <a
                href={getUrl("tiktok", "https://www.tiktok.com/discover/rs-ridhoka-salma-cikarang?is_from_webapp=1&sender_device=pc")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full h-[180px] sm:h-[210px] md:flex-1 md:min-h-[205px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl hover:shadow-cyan-900/20 hover:-translate-y-1 transition-all duration-300 border border-white/15 cursor-pointer"
              >
                {/* Background Scenery Image */}
                <Image
                  src={getImage("tiktok", "/assets/fasilitas/poli-eksekutif3.png")}
                  alt="TikTok RS Ridhoka Salma"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />

                {/* Overlay Hitam dengan 20% Blur HANYA saat Hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 backdrop-blur-none group-hover:backdrop-blur-[2px] transition-all duration-300 pointer-events-none" />

                {/* Centered Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 text-center">
                  <span className="text-[10px] sm:text-xs tracking-[0.22em] font-semibold text-white/90 uppercase drop-shadow-sm mb-1 transition-all duration-300">
                    SHORT VIDEOS & EDUKASI
                  </span>
                  <h3 className="text-white font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                    TIKTOK
                  </h3>
                  <div className="mt-3.5 inline-flex items-center gap-1.5 px-7 sm:px-9 py-1.5 sm:py-2 rounded-full border border-white/80 bg-black/30 backdrop-blur-[2px] hover:bg-white hover:text-gray-900 text-white text-xs sm:text-sm font-bold tracking-wider shadow-xl active:scale-95 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <span>LIHAT</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>

              {/* 3. Bottom Right Card: FACEBOOK */}
              <a
                href={getUrl("facebook", "https://www.facebook.com/rumahsakitridhokasalma/?locale=id_ID")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full h-[180px] sm:h-[210px] md:flex-1 md:min-h-[205px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300 border border-white/20 cursor-pointer"
              >
                {/* Background Scenery Image */}
                <Image
                  src={getImage("facebook", "/assets/fasilitas/poli-eksekutif4.png")}
                  alt="Facebook RS Ridhoka Salma"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />

                {/* Overlay Hitam dengan 20% Blur HANYA saat Hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 backdrop-blur-none group-hover:backdrop-blur-[2px] transition-all duration-300 pointer-events-none" />

                {/* Centered Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 text-center">
                  <span className="text-[10px] sm:text-xs tracking-[0.22em] font-semibold text-white/90 uppercase drop-shadow-sm mb-1 transition-all duration-300">
                    KOMUNITAS RESMI
                  </span>
                  <h3 className="text-white font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    FACEBOOK
                  </h3>
                  <div className="mt-3.5 inline-flex items-center gap-1.5 px-7 sm:px-9 py-1.5 sm:py-2 rounded-full border border-white/80 bg-black/30 backdrop-blur-[2px] hover:bg-white hover:text-gray-900 text-white text-xs sm:text-sm font-bold tracking-wider shadow-xl active:scale-95 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <span>LIHAT</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* Bottom Section: YouTube + Threads */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
            {/* 4. Left Bottom Card: YOUTUBE */}
            <div className="md:col-span-5">
              <a
                href={getUrl("youtube", "https://youtube.com/@rs.ridhokasalma2727?si=7gZ-kNcj9btRWf7i")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full h-[180px] sm:h-[200px] md:h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl hover:shadow-red-900/20 hover:-translate-y-1 transition-all duration-300 border border-white/15 cursor-pointer"
              >
                {/* Background Scenery Image */}
                <Image
                  src={getImage("youtube", "/assets/fasilitas/mushola.png")}
                  alt="YouTube RS Ridhoka Salma"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />

                {/* Overlay Hitam dengan 20% Blur HANYA saat Hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 backdrop-blur-none group-hover:backdrop-blur-[2px] transition-all duration-300 pointer-events-none" />

                {/* Centered Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 text-center">
                  <span className="text-[10px] sm:text-xs tracking-[0.22em] font-semibold text-white/90 uppercase drop-shadow-sm mb-1 transition-all duration-300">
                    VIDEO EDUKASI MEDIS
                  </span>
                  <h3 className="text-white font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                    YOUTUBE
                  </h3>
                  <div className="mt-3.5 inline-flex items-center gap-1.5 px-7 sm:px-9 py-1.5 sm:py-2 rounded-full border border-white/80 bg-black/30 backdrop-blur-[2px] hover:bg-white hover:text-gray-900 text-white text-xs sm:text-sm font-bold tracking-wider shadow-xl active:scale-95 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <span>LIHAT</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            </div>

            {/* 5. Right Bottom Card: THREADS */}
            <div className="md:col-span-7">
              <a
                href={getUrl("threads", "https://www.threads.com/@rs.ridhokasalma")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full h-[180px] sm:h-[200px] md:h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl hover:shadow-purple-900/20 hover:-translate-y-1 transition-all duration-300 border border-white/15 cursor-pointer"
              >
                {/* Background Scenery Image */}
                <Image
                  src={getImage("threads", "/assets/fasilitas/poli-eksekutif2.png")}
                  alt="Threads RS Ridhoka Salma"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />

                {/* Overlay Hitam dengan 20% Blur HANYA saat Hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 backdrop-blur-none group-hover:backdrop-blur-[2px] transition-all duration-300 pointer-events-none" />

                {/* Centered Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 text-center">
                  <span className="text-[10px] sm:text-xs tracking-[0.22em] font-semibold text-white/90 uppercase drop-shadow-sm mb-1 transition-all duration-300">
                    JOIN THE CONVERSATION
                  </span>
                  <h3 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                    THREADS
                  </h3>
                  <div className="mt-4 inline-flex items-center gap-2 px-8 sm:px-10 py-2 sm:py-2.5 rounded-full border border-white/80 bg-black/30 backdrop-blur-[2px] hover:bg-white hover:text-gray-900 text-white text-xs sm:text-sm font-bold tracking-wider shadow-xl active:scale-95 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <span>LIHAT</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

