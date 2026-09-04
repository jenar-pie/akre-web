"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { promotionsData } from "@/data/promotions";
import { contacts } from "@/data/contacts";

export default function PromosiPage() {
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
            <span>PENAWARAN SPESIAL</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Promosi & Paket Kesehatan
          </h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Paket pemeriksaan medis, persalinan syariah, dan vaksinasi dengan tarif terjangkau di RS Ridhoka Salma.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">

        {/* Promotion Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {promotionsData.map((promo) => (
            <div
              key={promo.id}
              className="bg-white rounded-2xl p-3.5 sm:p-4 border border-gray-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Top Promo Banner Image */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 mb-3.5">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  {promo.priceBadge && (
                    <div className="absolute top-2.5 right-2.5 bg-primary text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                      {promo.priceBadge}
                    </div>
                  )}
                </div>

                {/* Tag & Title Row */}
                <div className="flex items-start gap-2.5 mb-1.5">
                  <span className="border border-primary/20 bg-primary/5 text-primary text-[11px] font-semibold px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5">
                    {promo.badge}
                  </span>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {promo.title}
                  </h3>
                </div>

                {/* Period Text */}
                <p className="text-xs text-gray-500 pl-[44px] sm:pl-[48px] mb-2">
                  {promo.period}
                </p>

                {/* Short Description */}
                {promo.description && (
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mt-2 pt-2 border-t border-gray-100">
                    {promo.description}
                  </p>
                )}
              </div>

              {/* Action Button - Primary Theme */}
              <div className="mt-4 pt-2">
                <a
                  href={`https://wa.me/${contacts.whatsappNumber}?text=${encodeURIComponent(`Halo RS Ridhoka Salma, saya ingin bertanya tentang ${promo.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary hover:bg-primary-dark active:scale-[0.99] text-white font-semibold text-xs sm:text-sm py-2.5 sm:py-3 rounded-lg text-center transition-all shadow-xs block"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="bg-gradient-to-r from-primary-dark via-primary to-teal-700 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-teal-100 inline-block">
              Informasi Promo & Paket
            </span>
            <h3 className="text-xl font-bold">
              Tertarik dengan Paket Promosi Kami?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              Hubungi customer service kami untuk detail pendaftaran dan reservasi jadwal.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${contacts.whatsappNumber}?text=${encodeURIComponent("Halo RS Ridhoka Salma, saya ingin bertanya tentang promo kesehatan.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-dark px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors shadow-xs"
            >
              <span>Hubungi WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
