"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredServices } from "@/data/services";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section className="w-full py-5 sm:py-6 bg-white">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-5 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
          <div className="max-w-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-primary">Layanan Unggulan Kami</h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">
              Kami juga menawarkan berbagai layanan kesehatan yang lengkap dan berkualitas, insyaAllah berpandaskan prinsip syariah untuk mendukung tumbuh kembang dan kesejahteraan keluarga.
            </p>
          </div>
          <Link
            href="/layanan/layanan-unggulan"
            className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-2 rounded transition-colors flex-shrink-0 self-start"
          >
            <span>Lihat layanan lainnya</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-3 sm:p-4 text-center">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
