"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, Sparkles, Check, Search, Eye, X, ZoomIn, FileText } from "lucide-react";

interface LeafletItem {
  id: number;
  title: string;
  category: "Leaflet" | "Brosur" | "Poster";
  size: string;
  image: string;
  fileUrl?: string;
}

const leaflets: LeafletItem[] = [
  {
    id: 1,
    title: "Poster Panduan Cuci Tangan 6 Langkah Bersih",
    category: "Poster",
    size: "4.5 MB",
    image: "/assets/leaflet/infografis.png",
  },
  {
    id: 2,
    title: "Brosur Paket Medical Check Up (MCU) Lengkap",
    category: "Brosur",
    size: "3.2 MB",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Brosur Layanan Rawat Inap & Fasilitas Kamar",
    category: "Brosur",
    size: "2.7 MB",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Leaflet Panduan Persalinan Syariah & ERACS",
    category: "Leaflet",
    size: "1.8 MB",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Leaflet Jadwal & Panduan Imunisasi Anak",
    category: "Leaflet",
    size: "1.5 MB",
    image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Leaflet Pola Hidup Sehat Pasien Diabetes",
    category: "Leaflet",
    size: "1.2 MB",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["Semua", "Leaflet", "Brosur", "Poster"];

export default function ELeafletPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadedId, setDownloadedId] = useState<number | null>(null);
  const [selectedPreview, setSelectedPreview] = useState<LeafletItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPreview(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredLeaflets = leaflets.filter((item) => {
    const matchesCategory = activeCategory === "Semua" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (item: LeafletItem) => {
    setDownloadedId(item.id);
    setTimeout(() => {
      setDownloadedId(null);
    }, 2000);
  };

  return (
    <div className="bg-surface-bg min-h-screen">
      {/* Hero Header */}
      <div className="relative w-full bg-gradient-to-r from-primary-dark via-primary to-primary-hover text-white py-10 sm:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <Link
              href="/"
              className="text-xs text-teal-100 hover:text-white transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-3 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UNDUH INFORMASI</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            E-Leaflet & Brosur Digital
          </h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Unduh brosur digital, poster edukasi, dan panduan kesehatan RS Ridhoka Salma dalam format standar A4.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Filters & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white shadow-xs font-semibold"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari brosur / poster..."
              className="w-full pl-9 pr-4 py-2 rounded-full text-xs border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Cards Grid: Exact 1:1 A4 Ratio (aspect-[210/297]) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredLeaflets.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPreview(item)}
              className="group relative aspect-[210/297] rounded-3xl overflow-hidden shadow-card hover:shadow-2xl hover:shadow-teal-900/20 hover:-translate-y-1.5 border border-gray-100 bg-gray-900 cursor-pointer transition-all duration-300"
            >
              {/* Plain Image (Format 1:1 Standar Poster A4) */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />

              {/* Hover Fade Effect: Hitam Opacity 40% (bg-black/40) */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 sm:p-7 text-center items-center backdrop-blur-[1px]">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center w-full">
                  {/* Category Pill */}
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold mb-2.5 tracking-wide uppercase">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-bold text-white text-base sm:text-lg leading-snug mb-1.5 line-clamp-2 drop-shadow-xs">
                    {item.title}
                  </h3>

                  {/* Size File */}
                  <p className="text-xs text-gray-200 font-medium mb-4 drop-shadow-xs">
                    Ukuran File: PDF ({item.size}) &bull; Ukuran A4
                  </p>

                  {/* Action Buttons: Preview 1:1 & Download */}
                  <div className="flex items-center gap-2 w-full justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPreview(item);
                      }}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-white/80 bg-white/10 hover:bg-white hover:text-gray-900 text-white text-xs font-semibold backdrop-blur-md transition-all duration-200 shadow-md active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(item);
                      }}
                      className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all duration-200 shadow-md active:scale-95 ${
                        downloadedId === item.id
                          ? "bg-emerald-600 text-white border border-emerald-500"
                          : "bg-primary hover:bg-primary-dark text-white border border-primary"
                      }`}
                    >
                      {downloadedId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Mengunduh...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Unduh</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLeaflets.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-xs max-w-md mx-auto my-8">
            <p className="text-gray-600 text-sm font-medium">
              Tidak ada berkas yang sesuai dengan pencarian &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setActiveCategory("Semua");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-full hover:bg-primary-dark transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      {/* 1:1 A4 Poster Preview Modal Lightbox */}
      {selectedPreview && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedPreview(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[11px] font-bold uppercase shrink-0">
                  {selectedPreview.category}
                </span>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate">
                  {selectedPreview.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPreview(null)}
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors shrink-0 ml-2"
                aria-label="Tutup Preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Body (1:1 A4 Size Ratio: 210 x 297) */}
            <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-gray-900/5">
              <div className="relative w-full max-w-[420px] aspect-[210/297] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                <Image
                  src={selectedPreview.image}
                  alt={selectedPreview.title}
                  fill
                  className="object-contain sm:object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3.5 bg-white border-t border-gray-100 flex items-center justify-between gap-3">
              <div className="text-xs text-gray-500">
                <span>Format: PDF ({selectedPreview.size})</span>
                <span className="hidden sm:inline"> &bull; Dimensi Cetak: A4 (210 &times; 297 mm)</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedPreview(null)}
                  className="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold transition-colors"
                >
                  Tutup
                </button>
                <button
                  onClick={() => handleDownload(selectedPreview)}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  {downloadedId === selectedPreview.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Mengunduh...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Unduh Berkas</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
