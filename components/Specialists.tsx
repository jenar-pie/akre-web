"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Baby,
  HeartHandshake,
  Stethoscope,
  Activity,
  Zap,
  HeartPulse,
  ArrowRight,
  UserCheck,
  Calendar,
  Sparkles,
} from "lucide-react";
import { featuredSpecialists } from "@/data/specialists";

const iconMap: Record<string, React.ElementType> = {
  Baby,
  HeartHandshake,
  Stethoscope,
  Activity,
  Zap,
  HeartPulse,
};

export default function Specialists() {
  return (
    <section className="w-full py-6 sm:py-8 bg-surface-bg border-y border-gray-100">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-5 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TIM DOKTER AHLI</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              Spesialis Kami
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">
              Didukung oleh tim dokter spesialis berpengalaman dan berdedikasi tinggi, siap memberikan penanganan medis optimal, amanah, dan berlandaskan nilai-nilai syariah.
            </p>
          </div>
          <Link
            href="/spesialis-kami"
            className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-2 rounded transition-colors flex-shrink-0 self-start shadow-xs"
          >
            <span>Lihat semua spesialis</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Simple Cards Grid with Dummy Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {featuredSpecialists.map((specialist) => {
            const IconComponent = iconMap[specialist.iconName] || Stethoscope;
            const primaryDoctor = specialist.doctors[0];

            return (
              <Link
                key={specialist.id}
                href={`/spesialis-kami/${specialist.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  {/* Top: Dummy Image Banner with overlay code & category */}
                  <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                    <Image
                      src={specialist.image}
                      alt={specialist.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Badges on image */}
                    <div className="absolute top-3 left-3">
                      <div className="w-9 h-9 rounded-lg bg-white/95 backdrop-blur-xs text-primary flex items-center justify-center shadow-xs">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-primary shadow-xs border border-primary/20">
                        {specialist.code}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-100 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
                        {specialist.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    {/* Title & Short Description */}
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-primary transition-colors mb-1.5 leading-snug">
                      {specialist.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed mb-3.5">
                      {specialist.shortDescription}
                    </p>

                    {/* Doctor Info Pill */}
                    {primaryDoctor && (
                      <div className="bg-surface-bg rounded-lg p-2.5 border border-gray-100 text-xs mb-1">
                        <div className="flex items-center gap-1.5 font-semibold text-gray-800 truncate">
                          <UserCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span className="truncate">{primaryDoctor.name}</span>
                        </div>
                        {specialist.doctors.length > 1 && (
                          <div className="text-[11px] text-gray-500 mt-1 pl-5">
                            +{specialist.doctors.length - 1} dokter spesialis lainnya
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-primary-dark">
                  <span>Lihat Jadwal & Detail</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Help Banner under Cards */}
        <div className="mt-6 bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 hidden sm:flex">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-gray-900">
                Ingin konsultasi langsung dengan Dokter Spesialis?
              </h4>
              <p className="text-xs text-gray-600">
                Pendaftaran rawat jalan dan reservasi jadwal dokter dapat dilakukan secara online.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <Link
              href="/cari-dokter"
              className="flex-1 sm:flex-none text-center inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-surface-bg hover:bg-gray-100 text-gray-800 text-xs font-semibold border border-gray-200 transition-colors"
            >
              <span>Jadwal Dokter</span>
            </Link>
            <Link
              href="/janji-temu"
              className="flex-1 sm:flex-none text-center inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-semibold transition-colors shadow-xs"
            >
              <span>Buat Janji Temu</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
