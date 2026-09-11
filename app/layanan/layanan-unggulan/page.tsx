"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  Baby,
  Sparkles,
  Heart,
  Activity,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Calendar,
  MessageCircle,
  Clock,
  Shield,
  Layers,
} from "lucide-react";
import LayananHero from "@/components/layanan/LayananHero";
import LayananNavTabs from "@/components/layanan/LayananNavTabs";
import { allServices, ServiceItem } from "@/data/services";
import { contacts } from "@/data/contacts";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Baby,
  Sparkles,
  Heart,
  Activity,
  ShieldCheck,
};

const valueHighlights = [
  {
    icon: UserCheck,
    title: "Dokter Spesialis Ahli & Ramah",
    desc: "Didukung tim dokter spesialis dan tenaga kesehatan berpengalaman yang melayani dengan tulus dan berempati.",
  },
  {
    icon: Sparkles,
    title: "Teknologi Medis Mutakhir",
    desc: "Peralatan diagnostik dan terapi modern berstandar akreditasi untuk memastikan hasil akurat dan aman.",
  },
  {
    icon: Shield,
    title: "Pelayanan Berlandaskan Syariah",
    desc: "Menjaga privasi, kenyamanan aurat, obat dan gizi halal, serta bimbingan nilai Islami di setiap layanan.",
  },
  {
    icon: Clock,
    title: "Akses Cepat & Kemudahan Antrean",
    desc: "Sistem registrasi online, jadwal konsultasi fleksibel, dan integrasi penjamin BPJS Kesehatan maupun asuransi.",
  },
];

export default function LayananUnggulanPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua Layanan Unggulan" },
    { id: "Pemeriksaan & Skrining", label: "Pemeriksaan & Skrining" },
    { id: "Ibu & Anak", label: "Ibu & Anak" },
    { id: "Estetika Medis", label: "Estetika Medis" },
    { id: "Persalinan & Kehamilan", label: "Persalinan & Kehamilan" },
    { id: "Pemeriksaan & Imunisasi", label: "Vaksinasi & Imunisasi" },
  ];

  const filteredServices = selectedCategory === "all"
    ? allServices
    : allServices.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-surface-bg min-h-screen">
      {/* Hero Header */}
      <LayananHero
        badge="Layanan Medis Unggulan & Komprehensif"
        title="Layanan Unggulan RS Ridhoka Salma"
        description="Ragam program pelayanan kesehatan spesialisasi dan holistik yang dirancang untuk mendukung tumbuh kembang anak, kesehatan ibu, pemeliharaan preventif, dan estetika medis berlandaskan syariah."
        breadcrumbs={[
          { label: "Layanan", href: "/layanan" },
          { label: "Layanan Unggulan" },
        ]}
      />

      {/* Subnav Tabs */}
      <LayananNavTabs />

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">
        
        {/* Value Highlights Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {valueHighlights.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-card hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Filter Navigation */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>PROGRAM KESEHATAN TERPADU</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Pilihan Layanan Unggulan Kami
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
                Temukan program pemeriksaan dan perawatan spesifik yang disesuaikan dengan kebutuhan Anda dan keluarga.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/janji-temu"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Buat Janji Temu</span>
              </Link>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 pt-6 overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-xs"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Detailed Service Cards Grid */}
        <section className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service: ServiceItem) => {
              const IconComp = (service.iconName && iconMap[service.iconName]) || Sparkles;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual & Badges */}
                    <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] bg-gray-100 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                      {service.badge && (
                        <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs text-primary font-bold text-xs px-3 py-1 rounded-full shadow-xs border border-primary/20">
                          {service.badge}
                        </span>
                      )}
                      {service.category && (
                        <span className="absolute bottom-4 left-4 bg-primary/90 text-white font-medium text-[11px] px-3 py-1 rounded-full backdrop-blur-xs">
                          {service.category}
                        </span>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors shadow-xs mt-0.5">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                            {service.title}
                          </h3>
                          {service.subtitle && (
                            <p className="text-xs sm:text-sm font-semibold text-primary mt-0.5">
                              {service.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Detailed Paragraphs */}
                      {service.detailedDescription && (
                        <div className="space-y-2 text-xs text-gray-500 leading-relaxed">
                          {service.detailedDescription.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      )}

                      {/* Key Benefits Checklist */}
                      {service.benefits && service.benefits.length > 0 && (
                        <div className="pt-3 border-t border-gray-100">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                            Cakupan & Keunggulan Layanan:
                          </span>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                              >
                                <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Doctor/Staff In-charge */}
                      {service.doctorTeam && (
                        <div className="p-3 bg-surface-bg rounded-xl border border-gray-100 flex items-center gap-2.5 text-xs text-gray-700">
                          <UserCheck className="w-4 h-4 text-primary flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-900">Tim Medis: </span>
                            <span>{service.doctorTeam}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      href="/janji-temu"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition-colors shadow-xs"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Daftar / Janji Temu</span>
                    </Link>
                    <a
                      href={`https://wa.me/${contacts.whatsappNumber}?text=${encodeURIComponent(
                        `Halo RS Ridhoka Salma, saya ingin konsultasi mengenai layanan: ${service.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs sm:text-sm font-semibold py-3 px-4 rounded-xl transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Tanya via WA</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Consultation & Schedule CTA */}
        <section className="bg-gradient-to-r from-primary-dark via-primary to-teal-700 rounded-2xl p-6 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold text-teal-100">
              Konsultasi Dokter Spesialis
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Siap Memilih Jadwal Dokter dan Layanan Kesehatan Anda?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              Dapatkan kenyamanan pelayanan kesehatan keluarga dengan kemudahan janji temu online dan bimbingan medis Islami.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap justify-center">
            <Link
              href="/cari-dokter"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-dark px-5 py-3 rounded-xl font-bold text-sm transition-colors shadow-xs"
            >
              <span>Lihat Jadwal Dokter</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/layanan/fasilitas"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              <span>Fasilitas Rumah Sakit</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
