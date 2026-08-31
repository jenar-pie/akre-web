"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { promotionsData } from "@/data/promotions";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Promotions() {
  return (
    <section className="w-full py-6 sm:py-8 bg-white">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-5 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROMOSI & PAKET</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              Promosi Menarik
            </h2>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              Penawaran paket kesehatan terjangkau dan berwawasan syariah untuk Anda dan keluarga.
            </p>
          </div>
          <Link
            href="/informasi/promosi"
            className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex-shrink-0 self-start shadow-xs"
          >
            <span>Lihat semua promo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards Grid with Theme Color and Short Text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
              </div>

              {/* Action Button - Primary Theme Color */}
              <div className="mt-3 pt-2">
                <Link
                  href={promo.link || "/informasi/promosi"}
                  className="w-full bg-primary hover:bg-primary-dark active:scale-[0.99] text-white font-semibold text-xs sm:text-sm py-2.5 sm:py-3 rounded-lg text-center transition-all shadow-xs block"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
