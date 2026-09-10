"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Siren,
  Activity,
  Baby,
  HeartPulse,
  Stethoscope,
  Smile,
  Sparkles,
  Scissors,
  Heart,
  Zap,
  Microscope,
  Scan,
  Pill,
  Car,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Calendar,
  Layers,
} from "lucide-react";
import LayananHero from "@/components/layanan/LayananHero";
import LayananNavTabs from "@/components/layanan/LayananNavTabs";
import { categorizedFacilities } from "@/data/facilities";
import { contacts } from "@/data/contacts";

const iconMap: Record<string, React.ElementType> = {
  Siren,
  Activity,
  Baby,
  HeartPulse,
  Stethoscope,
  Smile,
  Sparkles,
  Scissors,
  Heart,
  Zap,
  Microscope,
  Scan,
  Pill,
  Car,
  Building2,
  ShieldCheck,
};

export default function FasilitasPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua Fasilitas" },
    { id: "critical-care", label: "Gawat Darurat & Kritis" },
    { id: "outpatient-surgery", label: "Rawat Jalan & Bedah" },
    { id: "diagnostic-support", label: "Penunjang & Diagnostik" },
    { id: "general-syariah", label: "Umum & Syariah" },
  ];

  const filteredSections = activeCategory === "all"
    ? categorizedFacilities
    : categorizedFacilities.filter((cat) => cat.categorySlug === activeCategory);

  return (
    <div className="bg-surface-bg min-h-screen">
      {/* Hero Header */}
      <LayananHero
        badge="Fasilitas Medis Modern & Berstandar Syariah"
        title="Fasilitas Medis RS Ridhoka Salma"
        description="Kami menghadirkan sarana prasarana kesehatan modern yang lengkap, steril, dan berstandar nasional dalam nuansa Islami yang menenangkan untuk mendukung ikhtiar kesembuhan keluarga Anda."
        breadcrumbs={[
          { label: "Layanan", href: "/layanan" },
          { label: "Fasilitas" },
        ]}
      />

      {/* Subnav Tabs */}
      <LayananNavTabs />

      {/* Main Content Area */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">
        
        {/* Intro & Category Filter Bar */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>SARANA PRASARANA LENGKAP</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Jelajahi Fasilitas Pelayanan Rumah Sakit
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
                Dari penanganan gawat darurat 24 jam, kamar operasi berstandar HEPA, hingga penunjang diagnostik mutakhir yang terintegrasi.
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <Link
                href="/janji-temu"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Jadwal Dokter</span>
              </Link>
              <a
                href={`tel:${contacts.emergency.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 bg-red-50 hover:bg-red-100 text-accent-red border border-red-200 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors"
              >
                <Siren className="w-4 h-4" />
                <span>IGD: {contacts.emergency}</span>
              </a>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 pt-6 overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-xs scale-100"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Categorized Facility Grid */}
        <div className="space-y-12">
          {filteredSections.map((section) => (
            <section key={section.categorySlug} className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {section.categoryName}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  {section.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((facility) => {
                  const IconComp = (facility.iconName && iconMap[facility.iconName]) || Building2;

                  return (
                    <div
                      key={facility.id}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Image Thumbnail */}
                        <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                          <Image
                            src={facility.image}
                            alt={facility.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                          {facility.badge && (
                            <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-primary font-bold text-[11px] px-3 py-1 rounded-full shadow-xs border border-primary/20">
                              {facility.badge}
                            </span>
                          )}
                        </div>

                        {/* Body Content */}
                        <div className="p-5 sm:p-6 space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-primary-light text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                              {facility.title}
                            </h3>
                          </div>

                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {facility.description}
                          </p>

                          {/* Features List */}
                          {facility.features && facility.features.length > 0 && (
                            <div className="pt-3 border-t border-gray-100">
                              <ul className="space-y-1.5">
                                {facility.features.map((feat, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 text-xs text-gray-700"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-green flex-shrink-0 mt-0.5" />
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Card Footer Action */}
                      <div className="p-5 sm:p-6 pt-0">
                        <Link
                          href="/janji-temu"
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-surface-bg hover:bg-primary hover:text-white text-primary font-semibold text-xs transition-colors border border-gray-200 group-hover:border-primary"
                        >
                          <span>Konsultasi & Reservasi</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Bottom Banner */}
        <section className="bg-gradient-to-r from-primary-dark via-primary to-teal-700 rounded-2xl p-6 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold text-teal-100">
              Pelayanan Medis 24 Jam
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Memerlukan Bantuan Medis Cepat atau Rawat Inap?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              Tim medis IGD 24 Jam dan Call Center Admisi kami siap membantu Anda kapan saja dengan sepenuh hati.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap justify-center">
            <a
              href={`tel:${contacts.emergency.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-accent-red hover:bg-red-700 text-white px-5 py-3 rounded-xl font-bold text-sm transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call Center IGD</span>
            </a>
            <Link
              href="/layanan/rawat-inap"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-dark px-5 py-3 rounded-xl font-bold text-sm transition-colors shadow-xs"
            >
              <span>Info Rawat Inap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
