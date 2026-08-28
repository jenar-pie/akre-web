import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  History,
  Target,
  Users2,
  Award,
  ArrowRight,
  ShieldCheck,
  Building2,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import AboutHero from "@/components/about/AboutHero";
import AboutNavTabs from "@/components/about/AboutNavTabs";
import { sejarahData, visiMisiData } from "@/data/about";

export const metadata: Metadata = {
  title: "Tentang RS Ridhoka Salma - Melayani dengan Hati dan Syariah",
  description: "Profil lengkap RS Ridhoka Salma Cikarang: Sejarah, Visi & Misi, Struktur Organisasi, serta Akreditasi Paripurna dan Sertifikasi Syariah DSN-MUI.",
};

const navigationCards = [
  {
    title: "Sejarah Rumah Sakit",
    subtitle: "Perjalanan dari 2007 hingga Sekarang",
    description: "Kisah transformasi dari sebuah Rumah Bersalin sederhana menjadi Rumah Sakit Umum & Syariah modern terakreditasi Paripurna.",
    href: "/tentang-kami/sejarah",
    icon: History,
    badge: "17+ Tahun Pengabdian",
    color: "from-teal-600 to-primary",
  },
  {
    title: "Visi, Misi & Budaya Kerja",
    subtitle: "Nilai Budaya I.B.A.D.A.H",
    description: "Arah panduan strategis dan komitmen pelayanan yang berorientasi pada mutu medis prima, keselamatan pasien, dan akhlak Islami.",
    href: "/tentang-kami/visi-misi",
    icon: Target,
    badge: "Keikhlasan Melayani Adalah Ibadahku",
    color: "from-primary to-teal-700",
  },
  {
    title: "Struktur Organisasi",
    subtitle: "Tata Kelola & Dewan Pengawas",
    description: "Jajaran Direksi, Dewan Pengawas Syariah (DPS), Komite Medis, dan manajemen profesional yang berdedikasi tinggi.",
    href: "/tentang-kami/struktur-organisasi",
    icon: Users2,
    badge: "Tata Kelola Terpadu",
    color: "from-teal-700 to-emerald-700",
  },
  {
    title: "Akreditasi & Penghargaan",
    subtitle: "Standar Paripurna & Syariah DSN-MUI",
    description: "Pengakuan resmi mutu bintang 5 dari KARS/Kemenkes RI, sertifikasi kepatuhan syariah DSN-MUI, serta ragam apresiasi nasional.",
    href: "/tentang-kami/akreditasi",
    icon: Award,
    badge: "Paripurna Bintang 5",
    color: "from-amber-600 to-accent-gold",
  },
];

export default function TentangKamiHubPage() {
  return (
    <div className="bg-surface-bg min-h-screen">
      {/* Hero Header */}
      <AboutHero
        badge="Profil Rumah Sakit"
        title="Tentang RS Ridhoka Salma"
        description="Rumah Sakit Umum dan Syariah terpercaya di Cikarang Barat, Bekasi, yang menghadirkan pelayanan kesehatan komprehensif berstandar mutu tinggi dengan mengedepankan nilai-nilai Islam."
        breadcrumbs={[{ label: "Tentang Kami" }]}
      />

      {/* Subnav Tabs */}
      <AboutNavTabs />

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">

        {/* Overview Intro Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                <span>RUMAH SAKIT UMUM & SYARIAH BEKASI</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Melayani Kesehatan Keluarga Anda dengan Sepenuh Hati dan Berlandaskan Syariah
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                RS Ridhoka Salma berkomitmen menjadi mitra kesehatan pilihan bagi masyarakat Cikarang, Kabupaten Bekasi, dan sekitarnya. Didukung oleh dokter spesialis berpengalaman, fasilitas medis mutakhir (IGD 24 Jam, ICU, NICU, PICU, Laboratorium, Radiologi), serta tata kelola rumah sakit bersertifikasi syariah DSN-MUI.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                  <span>Akreditasi Paripurna KARS</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                  <span>Sertifikasi RS Syariah DSN-MUI</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                  <span>Kerjasama BPJS & Asuransi Swasta</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                  <span>Pelayanan 24 Jam Non-Stop</span>
                </div>
              </div>
            </div>

            {/* Quick Moto Highlight */}
            <div className="lg:col-span-5 bg-gradient-to-br from-primary-dark via-primary to-teal-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-xs uppercase tracking-widest text-teal-200 font-bold">
                  Moto Pelayanan
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold mt-1 mb-3">
                  &ldquo;{visiMisiData.moto}&rdquo;
                </h3>
                <p className="text-xs text-teal-50/90 leading-relaxed mb-6">
                  {visiMisiData.mottoTranslation}
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    href="/tentang-kami/visi-misi"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-primary-dark text-xs font-bold hover:bg-gray-100 transition-colors"
                  >
                    <span>Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4 Pillars Navigation Cards */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>JELAJAHI PROFIL KAMI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Informasi Lengkap Seputar RS Ridhoka Salma
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Pilih menu di bawah ini untuk melihat detail sejarah, visi misi, jajaran kepemimpinan, dan akreditasi mutu kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {navigationCards.map((card) => {
              const IconComponent = card.icon;

              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="w-6 h-6" />
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
            {sejarahData.stats.map((stat, idx) => (
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

        {/* Quick Contact & Action CTA */}
        <section className="bg-gradient-to-r from-primary-dark via-primary to-teal-700 rounded-2xl p-6 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium text-teal-100 mb-2">
              Layanan Pasien & Janji Temu
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Siap Melayani Kebutuhan Medis Anda 24 Jam
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              Konsultasikan keluhan kesehatan atau jadwalkan pemeriksaan dokter spesialis dengan mudah dan cepat.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap">
            <Link
              href="/cari-dokter"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-dark px-5 py-3 rounded-xl font-bold text-sm transition-colors shadow-xs"
            >
              <span>Cari Dokter Spesialis</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/layanan/fasilitas"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              <span>Lihat Fasilitas</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
