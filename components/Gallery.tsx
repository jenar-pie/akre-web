"use client";

import React from "react";
import Image from "next/image";

export interface GalleryItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "POLI EKSEKUTIF",
    subtitle: "PELAYANAN SPESIALIS",
    image: "/assets/fasilitas/poli-eksekutif1.png",
    alt: "Poli Eksekutif RS Ridhoka Salma",
  },
  {
    id: "gallery-2",
    title: "SENAM HAMIL & EDUKASI PERSALINAN",
    subtitle: "RELAKSASI NAPAS DALAM",
    image: "/assets/layanan/senam.jpeg",
    alt: "Senam Hamil & Edukasi Persalinan RS Ridhoka Salma",
  },
  {
    id: "gallery-3",
    title: "LOBY POLI EKSEKUTIF",
    subtitle: "RUANG TUNGGU NYAMAN",
    image: "/assets/fasilitas/poli-eksekutif3.png",
    alt: "Loby Poli Eksekutif RS Ridhoka Salma",
  },
  {
    id: "gallery-4",
    title: "RAWAT INAP VVIP",
    subtitle: "KENYAMANAN & PRIVASI",
    image: "/assets/fasilitas/rawat-inap-vvip.png",
    alt: "Rawat Inap VVIP RS Ridhoka Salma",
  },
  {
    id: "gallery-5",
    title: "LAB",
    subtitle: "DIAGNOSTIK 24 JAM",
    image: "/assets/fasilitas/lab1.png",
    alt: "Laboratorium RS Ridhoka Salma",
  },
];

interface BentoCardProps {
  item: GalleryItem;
  className?: string;
}

function BentoCard({ item, className = "" }: BentoCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 shadow-sm hover:shadow-2xl hover:shadow-teal-900/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white/10 ${className}`}
    >
      {/* Background Image with Smooth Zoom on Hover */}
      <Image
        src={item.image}
        alt={item.alt || item.title}
        fill
        className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
        sizes="(min-width: 1024px) 33vw, 100vw"
      />

      {/* Dark Overlay with 20% Blur (backdrop-blur-[2px]) only on Hover */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 backdrop-blur-none group-hover:backdrop-blur-[2px] transition-all duration-300 pointer-events-none" />

      {/* Centered Content: Subtitle & Bold Uppercase Title (Without Button) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 z-10 text-center pointer-events-none">
        {item.subtitle && (
          <span className="text-[10px] sm:text-xs tracking-[0.22em] font-semibold text-white/90 uppercase drop-shadow-sm mb-1 sm:mb-1.5 transition-all duration-300">
            {item.subtitle}
          </span>
        )}
        <h3 className="text-white font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] max-w-[90%] leading-snug transition-transform duration-300 group-hover:-translate-y-0.5">
          {item.title}
        </h3>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="relative w-full py-8 sm:py-12 bg-white overflow-hidden">
      {/* Ambient Mesh Glow Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-20 w-[450px] h-[450px] bg-teal-400/8 rounded-full blur-[130px]" />
        <div className="absolute -bottom-24 -right-20 w-[450px] h-[450px] bg-sky-300/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5">
        
        {/* Top Row: Left Wide Card (Poli Eksekutif) + Right Tall Portrait Card (Senam Hamil & Edukasi Persalinan) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          {/* Card 1: Poli Eksekutif (8 Cols) */}
          <div className="md:col-span-8">
            <BentoCard
              item={galleryItems[0]}
              className="w-full h-[280px] sm:h-[360px] md:h-[420px]"
            />
          </div>

          {/* Card 2: Senam Hamil & Edukasi Persalinan (4 Cols) */}
          <div className="md:col-span-4">
            <BentoCard
              item={galleryItems[1]}
              className="w-full h-[280px] sm:h-[360px] md:h-[420px]"
            />
          </div>
        </div>

        {/* Bottom Row: 3 Equal Columns (Loby Poli Eksekutif, Rawat Inap VVIP, Lab) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Card 3: Loby Poli Eksekutif */}
          <BentoCard
            item={galleryItems[2]}
            className="w-full h-[200px] sm:h-[220px] md:h-[240px]"
          />

          {/* Card 4: Rawat Inap VVIP */}
          <BentoCard
            item={galleryItems[3]}
            className="w-full h-[200px] sm:h-[220px] md:h-[240px]"
          />

          {/* Card 5: Lab */}
          <BentoCard
            item={galleryItems[4]}
            className="w-full h-[200px] sm:h-[220px] md:h-[240px]"
          />
        </div>

      </div>
    </section>
  );
}
