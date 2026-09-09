import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, ArrowRight, Sparkles } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Tips Menjaga Kesehatan Jantung di Usia Produktif",
    category: "Kesehatan Jantung",
    date: "28 Februari 2026",
    author: "Tim Medis RS Ridhoka Salma",
    image: "/assets/fasilitas/jantung.jpg",
    excerpt: "Panduan pola makan sehat, olahraga teratur, dan kontrol stres untuk mencegah penyakit jantung koroner sejak dini.",
    url: "https://www.kompas.com/tren/read/2022/12/17/110500765/6-cara-menjaga-kesehatan-jantung-apa-saja-?page=all",
  },
  {
    id: 2,
    title: "Mengenal Metode Persalinan ERACS yang Minim Nyeri",
    category: "Kebidanan & Kandungan",
    date: "25 Februari 2026",
    author: "dr. Hj. Siti Rahmawati, Sp.OG",
    image: "/assets/layanan/eracs.jpg",
    excerpt: "Metode operasi Caesar ERACS memungkinkan ibu pulih lebih cepat dan dapat segera bergerak serta menyusui buah hati.",
    url: "https://www.rsridhokasalma.com/mengenal-lahiran-caesar-dengan-metode-eracs/",
  },
  {
    id: 3,
    title: "Pentingnya Imunisasi Dasar Lengkap untuk Tumbuh Kembang Buah Hati",
    category: "Kesehatan Anak",
    date: "20 Februari 2026",
    author: "dr. H. Ahmad Fauzi, Sp.A",
    image: "/assets/fasilitas/anak2.png",
    excerpt: "Jadwal imunisasi dasar dan vaksin tambahan untuk melindungi anak dari penyakit berbahaya dan infeksi menular.",
    url: "https://www.halodoc.com/artikel/pentingnya-imunisasi-dasar-lengkap-kemenkes-bagi-buah-hati?srsltid=AfmBOory_s2Cka98_qAd-xKcowx5e1ckd0SQb9PZXqlaQX_IsvrbnBP4",
  },
];

export default function ArtikelKesehatanPage() {
  return (
    <div className="bg-surface-bg min-h-screen">
      {/* Header Banner */}
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
            <span>EDUKASI KESEHATAN</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Artikel Kesehatan
          </h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Informasi, tips kesehatan terpercaya, dan panduan medis dari tim dokter RS Ridhoka Salma.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art) => (
            <a
              key={art.id}
              href={art.url || "https://www.google.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-lg transition-all group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-primary text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                    {art.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{art.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base group-hover:text-primary transition-colors leading-snug mb-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
