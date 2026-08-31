import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, ArrowRight, Sparkles } from "lucide-react";

const islamicArticles = [
  {
    id: 1,
    title: "Adab dan Doa Menjenguk Orang Sakit Sesuai Sunnah Rasulullah",
    category: "Fiqih Kesehatan",
    date: "27 Februari 2026",
    image: "/assets/fasilitas/rawatjalan.jpg",
    excerpt: "Panduan adab bertamu, waktu yang tepat, dan bacaan doa yang diajarkan Nabi Muhammad SAW saat menjenguk keluarga yang sedang sakit.",
  },
  {
    id: 2,
    title: "Panduan Ibadah Shalat bagi Pasien Rawat Inap dalam Kondisi Sakit",
    category: "Bimbingan Ibadah",
    date: "22 Februari 2026",
    image: "/assets/fasilitas/rawat inap.jpg",
    excerpt: "Kemudahan dalam Islam: tata cara bersuci (tayammum) dan posisi shalat bagi pasien yang sedang menjalani perawatan di rumah sakit.",
  },
  {
    id: 3,
    title: "Menjaga Kesehatan Jasmani dan Ruhani dalam Perspektif Islam",
    category: "Gaya Hidup Islami",
    date: "18 Februari 2026",
    image: "/assets/layanan/senam-hamil.jpg",
    excerpt: "Keseimbangan antara konsumsi makanan halal thayyib, istirahat cukup, dan dzikir harian sebagai ikhtiar kesehatan paripurna.",
  },
];

export default function ArtikelIslamiPage() {
  return (
    <div className="bg-surface-bg min-h-screen">
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
            <span>KHAZANAH ISLAMI</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Artikel Islami & Bina Rohani
          </h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Artikel rohani, bimbingan ibadah pasien, dan wawasan kesyariahan rumah sakit Islam.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {islamicArticles.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-lg transition-all group flex flex-col justify-between"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
