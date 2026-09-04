"use client";

import React from "react";
import Image from "next/image";

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Poli Eksekutif",
    image: "/assets/fasilitas/poli-eksekutif1.png",
    alt: "Fasilitas Medis RS Ridhoka Salma 1",
  },
  {
    id: "gallery-2",
    title: "Loby Poli Eksekutif",
    image: "/assets/fasilitas/poli-eksekutif3.png",
    alt: "Fasilitas Medis RS Ridhoka Salma 2",
  },
  {
    id: "gallery-3",
    title: "Senam Hamil & Edukasi Persalinan",
    image: "/assets/layanan/senam.jpeg",
    alt: "Fasilitas Medis RS Ridhoka Salma 3",
  },
  {
    id: "gallery-4",
    title: "Rawat Inap VVIP", 
    image: "/assets/fasilitas/rawat-inap-vvip.png",
    alt: "Fasilitas Medis RS Ridhoka Salma 4",
  },
  {
    id: "gallery-5",
    title: "Medical Check Up (MCU)",
    image: "/assets/fasilitas/rawatjalan.jpg",
    alt: "Fasilitas Medis RS Ridhoka Salma 5",
  },
  {
    id: "gallery-6",
    title: "Fisioterapi",
    image: "/assets/fasilitas/fisio1.png",
    alt: "Fasilitas Medis RS Ridhoka Salma 6",
  },
  {
    id: "gallery-7",
    title: "Lab",
    image: "/assets/fasilitas/lab1.png",
    alt: "Fasilitas Medis RS Ridhoka Salma 7",
  },
];

interface BentoCardProps {
  item: GalleryItem;
  className?: string;
}

function BentoCard({ item, className = "" }: BentoCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
    >
      {/* Dummy Image */}
      <Image
        src={item.image}
        alt={item.alt || item.title}
        fill
        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        sizes="(min-width: 1024px) 33vw, 100vw"
      />

      {/* Overlay Gradient Hitam - Transparan hingga tengah card */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none transition-opacity duration-300 group-hover:from-black/90" />

      {/* Title Text di bagian bawah di dalam card */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6 z-10">
        <h3 className="text-white font-bold text-base sm:text-lg md:text-xl drop-shadow-sm leading-snug">
          {item.title}
        </h3>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="w-full py-6 sm:py-10 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic & Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[220px] sm:auto-rows-[240px]">
          {/* Card 1: Large Featured Card (2x2) */}
          <BentoCard
            item={galleryItems[0]}
            className="sm:col-span-2 sm:row-span-2 min-h-[300px] sm:min-h-0"
          />

          {/* Card 2: Compact Card (1x1) */}
          <BentoCard
            item={galleryItems[1]}
            className="sm:col-span-1 sm:row-span-1 min-h-[220px] sm:min-h-0"
          />

          {/* Card 3: Tall Vertical Card (1x2) */}
          <BentoCard
            item={galleryItems[2]}
            className="sm:col-span-1 sm:row-span-2 min-h-[300px] sm:min-h-0"
          />

          {/* Card 4: Compact Card (1x1) */}
          <BentoCard
            item={galleryItems[3]}
            className="sm:col-span-1 sm:row-span-1 min-h-[220px] sm:min-h-0"
          />

          {/* Card 5: Wide Panoramic Card (2x1) */}
          <BentoCard
            item={galleryItems[4]}
            className="sm:col-span-2 sm:row-span-1 min-h-[220px] sm:min-h-0"
          />

          {/* Card 6: Standard Card (1x1) */}
          <BentoCard
            item={galleryItems[5]}
            className="sm:col-span-1 sm:row-span-1 min-h-[220px] sm:min-h-0"
          />

          {/* Card 7: Standard Card (1x1) */}
          <BentoCard
            item={galleryItems[6]}
            className="sm:col-span-1 sm:row-span-1 min-h-[220px] sm:min-h-0"
          />
        </div>

      </div>
    </section>
  );
}

