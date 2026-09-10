"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Baby,
  HeartHandshake,
  Stethoscope,
  Activity,
  Zap,
  HeartPulse,
  Eye,
  Headphones,
  Smile,
  Shield,
  Wind,
  Sparkles,
  ArrowRight,
  UserCheck,
  Calendar,
  Clock,
  CheckCircle2,
} from "lucide-react";
import SpecialistsHero from "@/components/specialists/SpecialistsHero";
import SpecialistsNavTabs from "@/components/specialists/SpecialistsNavTabs";
import {
  specialistsData,
  specialistCategories,
  specialistStats,
  Specialist,
} from "@/data/specialists";
import { contacts } from "@/data/contacts";

const iconMap: Record<string, React.ElementType> = {
  Baby,
  HeartHandshake,
  Stethoscope,
  Activity,
  Zap,
  HeartPulse,
  Eye,
  Headphones,
  Smile,
  Shield,
  Wind,
  Sparkles,
};

export default function SpesialisKamiPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("semua");

  const filteredSpecialists = useMemo(() => {
    return specialistsData.filter((item) => {
      const matchCategory =
        selectedCategory === "semua" || item.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query) ||
        item.doctors.some((d) =>
          d.name.toLowerCase().includes(query) ||
          (d.subspecialty && d.subspecialty.toLowerCase().includes(query))
        );

      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-surface-bg min-h-screen">
      {/* Hero Header */}
      <SpecialistsHero
        badge="Poliklinik Spesialis Terpadu"
        title="Spesialis & Dokter Ahli Kami"
        description="Pelayanan medis spesialisasi komprehensif didukung dokter ahli berpengalaman, teknologi penunjang diagnostik mutakhir, serta tata laksana berlandaskan prinsip syariah."
        breadcrumbs={[{ label: "Spesialis Kami" }]}
      />

      {/* Navigation Sub-Tabs */}
      <SpecialistsNavTabs />

      {/* Main Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 sm:space-y-14">

        {/* Filter & Search Bar */}
        <section className="bg-white rounded-2xl p-5 sm:p-7 border border-gray-100 shadow-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Cari spesialis, keluhan, atau nama dokter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-bg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600 p-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills (Desktop & Tablet) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {specialistCategories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                      isSelected
                        ? "bg-primary text-white shadow-xs"
                        : "bg-surface-bg text-gray-600 hover:text-primary hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

          </div>
        </section>

        {/* Specialists Cards Grid with Dummy Images */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span>Daftar Layanan Spesialis</span>
              <span className="text-xs font-normal px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                {filteredSpecialists.length} Poliklinik
              </span>
            </h2>
            {(searchQuery || selectedCategory !== "semua") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("semua");
                }}
                className="text-xs font-semibold text-primary hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>

          {filteredSpecialists.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm max-w-md mx-auto">
              <div className="w-14 h-14 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1">
                Spesialis tidak ditemukan
              </h3>
              <p className="text-xs text-gray-500 mb-4">
                Tidak ada layanan spesialis atau nama dokter yang sesuai dengan kata kunci &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("semua");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-colors"
              >
                Tampilkan Semua Spesialis
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredSpecialists.map((specialist) => {
                const IconComponent = iconMap[specialist.iconName] || Stethoscope;

                return (
                  <div
                    key={specialist.id}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-2xl hover:shadow-teal-900/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Dummy Image Banner */}
                      <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                        <Image
                          src={specialist.image}
                          alt={specialist.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-70"></div>
                        
                        {/* Top Badges */}
                        <div className="absolute top-3 left-3">
                          <div className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-xs text-primary flex items-center justify-center shadow-xs">
                            <IconComponent className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="absolute top-3 right-3 flex items-center gap-1.5">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-primary shadow-xs border border-primary/20">
                            {specialist.code}
                          </span>
                        </div>

                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-white bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-md">
                            {specialist.categoryLabel}
                          </span>
                          {specialist.badge && (
                            <span className="text-[10px] font-bold text-amber-200 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded">
                              ★ {specialist.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Body Content */}
                      <div className="p-5">
                        {/* Title & Description */}
                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors mb-2 leading-tight">
                          {specialist.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                          {specialist.shortDescription}
                        </p>

                        {/* Doctors Section */}
                        <div className="bg-surface-bg rounded-xl p-3.5 border border-gray-100 mb-4 space-y-2.5">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center justify-between">
                            <span>Dokter Praktik</span>
                            <span className="text-primary font-semibold">
                              {specialist.doctors.length} Dokter
                            </span>
                          </div>

                          {specialist.doctors.map((doctor, idx) => (
                            <div
                              key={idx}
                              className="text-xs border-t border-gray-200/60 pt-2 first:border-0 first:pt-0"
                            >
                              <div className="flex items-start gap-1.5 font-semibold text-gray-800">
                                <UserCheck className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                <div className="min-w-0">
                                  <p className="truncate font-bold text-gray-900">{doctor.name}</p>
                                  {doctor.subspecialty && (
                                    <p className="text-[11px] text-gray-500 font-normal">
                                      {doctor.subspecialty}
                                    </p>
                                  )}
                                </div>
                              </div>
                              {doctor.schedule && (
                                <div className="flex items-center gap-1 text-[11px] text-gray-600 mt-1 pl-5">
                                  <Clock className="w-3 h-3 text-gray-400 flex-shrink-0" />
                                  <span>{doctor.schedule}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Key Services Pill List */}
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                            Layanan Unggulan
                          </div>
                          <ul className="space-y-1 text-xs text-gray-700">
                            {specialist.services.slice(0, 3).map((service, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-accent-green flex-shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="p-5 pt-0 flex items-center gap-2">
                      <Link
                        href={`/spesialis-kami/${specialist.slug}`}
                        className="flex-1 text-center inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-surface-bg hover:bg-gray-100 text-gray-800 text-xs font-semibold border border-gray-200 transition-colors"
                      >
                        <span>Detail Layanan</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/janji-temu"
                        className="flex-1 text-center inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-semibold transition-colors shadow-xs"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Buat Janji</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Stats Grid */}
        <section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {specialistStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-xs text-center sm:text-left"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">{stat.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="bg-gradient-to-r from-primary-dark via-primary to-teal-700 rounded-2xl p-6 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold text-teal-100">
              Konsultasi & Informasi Jadwal
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Butuh Bantuan Menemukan Dokter Spesialis yang Tepat?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              Customer Service kami siap membantu Anda mencocokkan keluhan medis dengan dokter spesialis yang sesuai serta mengatur jadwal konsultasi.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap justify-center">
            <a
              href={`https://wa.me/${contacts.whatsappLink.split("/").pop()}?text=${encodeURIComponent("Halo RS Ridhoka Salma, saya ingin menanyakan jadwal dokter spesialis.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-dark px-5 py-3 rounded-xl font-bold text-sm transition-colors shadow-xs"
            >
              <span>Chat WhatsApp Info Dokter</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/cari-dokter"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-5 py-3 rounded-xl font-bold text-sm transition-colors"
            >
              <UserCheck className="w-4 h-4" />
              <span>Cari Dokter</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
