"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  ArrowRight,
  Sparkles,
  Search,
  BookOpen,
  HeartPulse,
  Moon,
} from "lucide-react";
import { articlesData, ArticleItem } from "@/data/articles";

type FilterType = "semua" | "kesehatan" | "islami";

function ArtikelContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("kategori");

  const [activeFilter, setActiveFilter] = useState<FilterType>(() => {
    if (initialCategory === "kesehatan" || initialCategory === "islami") {
      return initialCategory;
    }
    return "semua";
  });

  const [searchQuery, setSearchQuery] = useState("");

  // Counts for each filter
  const counts = useMemo(() => {
    return {
      semua: articlesData.length,
      kesehatan: articlesData.filter((a) => a.type === "kesehatan").length,
      islami: articlesData.filter((a) => a.type === "islami").length,
    };
  }, []);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articlesData.filter((art) => {
      // Type filter
      const matchesType =
        activeFilter === "semua" || art.type === activeFilter;

      // Search query
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        art.title.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        (art.author && art.author.toLowerCase().includes(q));

      return matchesType && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

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
            <span>ARTIKEL & EDUKASI</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Artikel & Edukasi
          </h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Kumpulan artikel edukasi medis, tips kesehatan terpercaya, serta khazanah ibadah dan fiqih kesehatan islami.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Controls: Tag Filters & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Tag Filter Pills */}
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-gray-200/90 shadow-xs gap-1.5 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveFilter("semua")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === "semua"
                  ? "bg-primary text-white shadow-xs"
                  : "text-gray-600 hover:text-primary hover:bg-gray-50"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Semua Artikel</span>
              <span
                className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                  activeFilter === "semua"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {counts.semua}
              </span>
            </button>

            <button
              onClick={() => setActiveFilter("kesehatan")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === "kesehatan"
                  ? "bg-primary text-white shadow-xs"
                  : "text-gray-600 hover:text-primary hover:bg-gray-50"
              }`}
            >
              <HeartPulse className="w-4 h-4" />
              <span>Kesehatan</span>
              <span
                className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                  activeFilter === "kesehatan"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {counts.kesehatan}
              </span>
            </button>

            <button
              onClick={() => setActiveFilter("islami")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === "islami"
                  ? "bg-primary text-white shadow-xs"
                  : "text-gray-600 hover:text-primary hover:bg-gray-50"
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>Islami</span>
              <span
                className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                  activeFilter === "islami"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {counts.islami}
              </span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200/90 rounded-2xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-xs transition-all"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <a
              key={art.id}
              href={art.url || "#"}
              target={art.url ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Article Image Banner */}
                <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  {/* Category Badge & Tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="bg-white/95 backdrop-blur-xs text-primary text-[11px] font-bold px-3 py-1 rounded-lg shadow-xs border border-gray-100">
                      {art.category}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-1 rounded-lg shadow-xs ${
                        art.type === "islami"
                          ? "bg-emerald-600 text-white"
                          : "bg-teal-600 text-white"
                      }`}
                    >
                      {art.type === "islami" ? "Islami" : "Kesehatan"}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{art.date}</span>
                    {art.author && (
                      <>
                        <span>•</span>
                        <span className="truncate max-w-[160px]">
                          {art.author}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-primary-dark">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-xs max-w-md mx-auto my-6">
            <BookOpen className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600 text-sm font-medium">
              Tidak ada artikel yang sesuai dengan filter atau pencarian Anda.
            </p>
            <button
              onClick={() => {
                setActiveFilter("semua");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2.5 bg-primary text-white text-xs font-semibold rounded-full hover:bg-primary-dark shadow-xs transition-colors"
            >
              Reset Filter & Pencarian
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ArtikelPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface-bg flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      }
    >
      <ArtikelContent />
    </Suspense>
  );
}
