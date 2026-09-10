"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Sparkles,
  Bed,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Calendar,
  Activity,
  UserCheck,
  HeartPulse,
} from "lucide-react";
import LayananHero from "@/components/layanan/LayananHero";
import LayananNavTabs from "@/components/layanan/LayananNavTabs";
import { contacts } from "@/data/contacts";

const mainLayananCards = [
  {
    title: "Fasilitas Medis Modern",
    subtitle: "IGD 24 Jam, ICU, NICU, Kamar Operasi & Diagnostik",
    description: "Sarana prasarana kesehatan terpadu dan peralatan medis mutakhir yang mendukung penanganan gawat darurat, perawatan kritis, dan diagnostik akurat.",
    href: "/layanan/fasilitas",
    icon: Building2,
    badge: "Fasilitas Lengkap",
    color: "from-teal-600 to-primary",
    highlights: ["IGD & Farmasi 24 Jam", "Kamar Operasi Berstandar HEPA", "Radiologi Digital & Laboratorium Cito"],
  },
  {
    title: "Layanan Unggulan",
    subtitle: "MCU, Tumbuh Kembang Anak, Estetika & Spa Syariah",
    description: "Program pelayanan spesialisasi terdepan untuk mendukung pemeliharaan kesehatan preventif, stimulasi buah hati, serta kesehatan ibu dan keluarga.",
    href: "/layanan/layanan-unggulan",
    icon: Sparkles,
    badge: "Program Khusus",
    color: "from-primary to-teal-700",
    highlights: ["Medical Check Up Komprehensif", "Klinik Tumbuh Kembang Anak", "Rose Aesthetic & Mom-Baby Spa"],
  },
  {
    title: "Rawat Inap & Perawatan Syariah",
    subtitle: "Pilihan Kamar VVIP, VIP, Kelas 1, 2, 3 (KRIS BPJS)",
    description: "Kenyamanan ruang rawat inap dengan bimbingan rohani harian, penjagaan aurat, sajian gizi halal, dan asuhan keperawatan profesional 24 jam.",
    href: "/layanan/rawat-inap",
    icon: Bed,
    badge: "Kenyamanan Pasien",
    color: "from-teal-700 to-emerald-700",
    highlights: ["Kapasitas 100+ Tempat Tidur", "Bimbingan Ibadah & Doa Pasien", "Standar KRIS BPJS & Asuransi"],
  },
];

const stats = [
  { value: "24 Jam", label: "IGD & Ambulans Siaga", desc: "Penanganan tanggap darurat medis" },
  { value: "30+", label: "Dokter Spesialis & Umum", desc: "Tenaga medis ahli & bersertifikasi" },
  { value: "100+", label: "Tempat Tidur Pasien", desc: "Dari kelas VVIP hingga Kelas 3 KRIS" },
  { value: "100%", label: "Komitmen Layanan Syariah", desc: "Sertifikasi resmi DSN-MUI & KARS" },
];

export default function LayananPage() {
  return (
    <div className="bg-surface-bg min-h-screen">
      {/* Hero Header */}
      <LayananHero
        badge="Pusat Pelayanan Medis Terpadu"
        title="Layanan RS Ridhoka Salma"
        description="Menghadirkan pelayanan kesehatan komprehensif, modern, dan berlandaskan prinsip syariah untuk melayani setiap kebutuhan medis Anda dan keluarga di Cikarang Barat, Bekasi."
        breadcrumbs={[{ label: "Layanan" }]}
      />

      {/* Subnav Tabs */}
      <LayananNavTabs />

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">
        
        {/* Intro Overview Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <HeartPulse className="w-3.5 h-3.5" />
                <span>PELAYANAN KESEHATAN PARIPURNA</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Dedikasi Melayani dengan Hati, Keunggulan Medis, dan Nilai Syariah
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                RS Ridhoka Salma senantiasa berkomitmen menghadirkan layanan medis berkualitas tinggi yang mudah diakses oleh seluruh lapisan masyarakat. Didukung oleh fasilitas penunjang berteknologi tinggi, dokter spesialis berpengalaman, dan tata kelola berstandar akreditasi Paripurna (Bintang 5) dari KARS & Kemenkes RI.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                  <span>Akreditasi Paripurna Bintang 5 KARS</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                  <span>Sertifikasi RS Syariah DSN-MUI</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                  <span>Mitra Faskes Utama BPJS Kesehatan</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                  <span>Kerjasama Puluhan Asuransi Swasta</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Highlight */}
            <div className="lg:col-span-5 bg-gradient-to-br from-primary-dark via-primary to-teal-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <span className="text-xs uppercase tracking-widest text-teal-200 font-bold">
                  Akses Cepat Layanan
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">
                  Pendaftaran Pasien & Jadwal Dokter Online
                </h3>
                <p className="text-xs text-teal-50/90 leading-relaxed">
                  Daftar konsultasi dokter spesialis atau jadwalkan pemeriksaan medis dengan praktis melalui sistem antrean dan janji temu online kami.
                </p>
                <div className="flex items-center gap-3 pt-2 flex-wrap">
                  <Link
                    href="/janji-temu"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-primary-dark text-xs font-bold hover:bg-gray-100 transition-colors shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Buat Janji Temu</span>
                  </Link>
                  <Link
                    href="/cari-dokter"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/30 text-xs font-semibold transition-colors"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Jadwal Dokter</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3 Main Pillars Navigation Cards */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>JELAJAHI MENU LAYANAN KAMI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Kategori Layanan Utama RS Ridhoka Salma
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Pilih menu di bawah ini untuk melihat rincian fasilitas medis, layanan unggulan khusus, atau informasi rawat inap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainLayananCards.map((card) => {
              const IconComp = card.icon;

              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-card hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                      {card.title}
                    </h3>
                    <h4 className="text-xs font-semibold text-primary mb-3">
                      {card.subtitle}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      {card.description}
                    </p>

                    <div className="pt-3 border-t border-gray-100 mb-4">
                      <ul className="space-y-1.5 text-xs text-gray-700">
                        {card.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-green flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-primary group-hover:text-primary-dark">
                    <span>Buka Halaman</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Stats Grid */}
        <section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
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

        {/* Bottom Contact CTA */}
        <section className="bg-gradient-to-r from-primary-dark via-primary to-teal-700 rounded-2xl p-6 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold text-teal-100">
              Layanan Informasi & Pendaftaran
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Hubungi Kami untuk Pertanyaan Seputar Layanan Rumah Sakit
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              Kami siap melayani kebutuhan informasi jadwal dokter, konsultasi paket kesehatan, dan estimasi biaya perawatan.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap justify-center">
            <a
              href={`https://wa.me/${contacts.whatsappLink.split("/").pop()}?text=${encodeURIComponent("Halo RS Ridhoka Salma, saya ingin menanyakan informasi seputar layanan rumah sakit.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-dark px-5 py-3 rounded-xl font-bold text-sm transition-colors shadow-xs"
            >
              <span>Chat WhatsApp Resmi</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${contacts.emergency.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-accent-red hover:bg-red-700 text-white px-5 py-3 rounded-xl font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>IGD: {contacts.emergency}</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
