"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { contacts } from "@/data/contacts";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/cari-dokter?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="w-full bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5">
        <div className="flex items-center justify-between gap-4 sm:gap-6 lg:gap-8">

          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-[200px] h-[57px] sm:w-[300px] sm:h-[86px] lg:w-[420px] lg:h-[120px]">
              <Image
                src="/assets/logo/LOGO RSRS.svg"
                alt="RS Ridhoka Salma"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Right column: Search on top, Hubungi Kami below - both left-aligned as a group */}
          <div className="hidden sm:flex flex-col items-start gap-2.5 lg:gap-4">

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-primary/70 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari yang Anda Butuhkan di Sini"
                  className="w-[300px] sm:w-[400px] lg:w-[520px] text-sm lg:text-base pl-10 pr-4 py-2.5 lg:py-3.5 border-2 border-primary rounded-full focus:outline-none focus:ring-2 focus:ring-primary/40 text-gray-700 bg-white placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-6 sm:px-7 lg:px-9 py-2.5 lg:py-3.5 text-sm lg:text-base font-semibold rounded-full transition-colors flex-shrink-0"
              >
                Cari
              </button>
            </form>

            {/* Hubungi Kami - single row, not stacked */}
            <div className="flex items-center gap-3 lg:gap-6 flex-wrap">
              <span className="text-sm lg:text-xl font-semibold text-primary whitespace-nowrap">
                Hubungi Kami
              </span>

              <a
                href={`tel:${contacts.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 lg:gap-2.5 hover:opacity-80 transition-opacity"
              >
                <span className="relative w-5 h-5 lg:w-8 lg:h-8 flex-shrink-0">
                  <Image src="/assets/icons/telephone.svg" alt="Telepon" fill className="object-contain" />
                </span>
                <span className="text-sm lg:text-xl font-bold text-gray-800 whitespace-nowrap">{contacts.phone}</span>
              </a>

              <a
                href={`tel:${contacts.emergency.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 lg:gap-2.5 hover:opacity-80 transition-opacity"
              >
                <span className="relative w-5 h-5 lg:w-8 lg:h-8 flex-shrink-0">
                  <Image src="/assets/icons/ambulan.svg" alt="Emergency" fill className="object-contain" />
                </span>
                <span className="text-sm lg:text-xl font-bold text-accent-red whitespace-nowrap">{contacts.emergency}</span>
              </a>
            </div>
          </div>

          {/* Mobile search icon - shown only on mobile */}
          <div className="sm:hidden flex-shrink-0">
            <button
              onClick={() => {
                const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
                if (searchInput) searchInput.focus();
              }}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>

        {/* Mobile search bar + contact - shown below header on mobile */}
        <div className="sm:hidden mt-3 flex flex-col gap-2.5">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/70 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari yang Anda Butuhkan di Sini"
                className="w-full text-xs pl-9 pr-3 py-2.5 border-2 border-primary rounded-full focus:outline-none focus:ring-2 focus:ring-primary/40 text-gray-700 bg-white placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 text-xs font-semibold rounded-full transition-colors flex-shrink-0"
            >
              Cari
            </button>
          </form>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-semibold text-primary whitespace-nowrap">Hubungi Kami</span>
            <a href={`tel:${contacts.phone.replace(/\s+/g, "")}`} className="flex items-center gap-1.5">
              <span className="relative w-4 h-4 flex-shrink-0">
                <Image src="/assets/icons/telephone.svg" alt="Telepon" fill className="object-contain" />
              </span>
              <span className="text-xs font-bold text-gray-800">{contacts.phone}</span>
            </a>
            <a href={`tel:${contacts.emergency.replace(/\s+/g, "")}`} className="flex items-center gap-1.5">
              <span className="relative w-4 h-4 flex-shrink-0">
                <Image src="/assets/icons/ambulan.svg" alt="Emergency" fill className="object-contain" />
              </span>
              <span className="text-xs font-bold text-accent-red">{contacts.emergency}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
