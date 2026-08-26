"use client";

import React from "react";
import Link from "next/link";
import { promotionsData } from "@/data/promotions";
import { ArrowRight, Tag } from "lucide-react";

export default function Promotions() {
  return (
    <section className="w-full py-5 sm:py-6 bg-white">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-5 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
          <div className="max-w-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-primary">Temukan Promosi Menarik</h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">
              Temukan berbagai promosi menarik dengan harga terjangkau, sebagai wujud pelayanan yang amanah dan penuh kepedulian untuk kebutuhan perawatan anda
            </p>
          </div>
          <Link
            href="/informasi/promosi"
            className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-2 rounded transition-colors flex-shrink-0 self-start"
          >
            <span>Lihat promosi lainnya</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {promotionsData.map((promo) => (
            <Link
              key={promo.id}
              href={promo.link || "#"}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100 p-4 flex flex-col justify-center items-center text-center">
                <h4 className="font-bold text-gray-800 text-sm sm:text-base leading-snug mb-2">
                  {promo.title}
                </h4>
                {promo.priceBadge && (
                  <span className="inline-flex items-center bg-red-600 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full">
                    {promo.priceBadge}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
