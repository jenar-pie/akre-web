import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Medal,
  Sparkles,
  ArrowRight,
  FileCheck,
  Calendar,
  Building,
  HeartHandshake,
  BookOpen,
  Utensils,
  Shield,
} from "lucide-react";
import AboutHero from "@/components/about/AboutHero";
import AboutNavTabs from "@/components/about/AboutNavTabs";
import { akreditasiData } from "@/data/about";

export const metadata: Metadata = {
  title: "Akreditasi & Penghargaan RS Ridhoka Salma",
  description: "Status Akreditasi Paripurna KARS Bintang 5, Sertifikasi Rumah Sakit Syariah DSN-MUI, dan ragam penghargaan prestasi RS Ridhoka Salma Cikarang.",
};

const principleIcons: Record<string, React.ElementType> = {
  Shield,
  BookOpen,
  Utensils,
  FileCheck,
};

export default function AkreditasiPage() {
  return (
    <div className="bg-surface-bg min-h-screen">
      {/* Hero Header */}
      <AboutHero
        badge="Standar Mutu & Pengakuan Resmi"
        title="Akreditasi, Sertifikasi & Penghargaan"
        description="Pengakuan resmi atas komitmen berkelanjutan RS Ridhoka Salma dalam menghadirkan standar keselamatan medis paripurna berpadu dengan kepatuhan syariah."
        breadcrumbs={[
          { label: "Tentang Kami", href: "/tentang-kami" },
          { label: "Akreditasi & Penghargaan" },
        ]}
      />

      {/* Subnav Tabs */}
      <AboutNavTabs />

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">

        {/* Section 1: Akreditasi & Sertifikasi Utama */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>LEGALITAS & STANDAR MUTU</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Akreditasi & Sertifikasi Resmi
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Terverifikasi oleh lembaga akreditasi independen dan otoritas syariah nasional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {akreditasiData.accreditations.map((item) => {
              const isParipurna = item.id === "kars-paripurna";
              const isSyariah = item.id === "dsn-mui-syariah";

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl p-6 sm:p-7 border ${
                    isParipurna
                      ? "border-accent-gold/40 shadow-md ring-1 ring-accent-gold/20"
                      : isSyariah
                      ? "border-emerald-300 shadow-md ring-1 ring-emerald-200"
                      : "border-gray-200 shadow-card"
                  } hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
                >
                  {/* Decorative Corner Ribbon */}
                  {isParipurna && (
                    <div className="absolute top-0 right-0 bg-accent-gold text-white text-[10px] font-extrabold px-3 py-1 rounded-bl-lg uppercase tracking-wider shadow-xs">
                      Bintang 5
                    </div>
                  )}
                  {isSyariah && (
                    <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-bl-lg uppercase tracking-wider shadow-xs">
                      RS Syariah
                    </div>
                  )}

                  <div>
                    {/* Top Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          isParipurna
                            ? "bg-amber-50 text-accent-gold"
                            : isSyariah
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-primary-light text-primary"
                        }`}
                      >
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                            isParipurna
                              ? "bg-amber-100 text-amber-900"
                              : isSyariah
                              ? "bg-emerald-100 text-emerald-900"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {item.badgeText}
                        </span>
                        <div className="text-[11px] text-gray-500 font-medium mt-0.5">
                          Tingkat {item.level}
                        </div>
                      </div>
                    </div>

                    {/* Title & Issuer */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-primary font-medium mb-3">
                      Penerbit: {item.issuer}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Meta info box */}
                    <div className="p-3 bg-surface-bg rounded-lg border border-gray-100 space-y-1 text-xs text-gray-600 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">No. Sertifikat:</span>
                        <span className="font-semibold text-gray-800">{item.certificateNo}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Masa Berlaku:</span>
                        <span className="font-semibold text-gray-800">{item.year} - {item.validUntil}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Bullets */}
                  <div className="pt-3 border-t border-gray-100">
                    <ul className="space-y-1.5 text-xs text-gray-700">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-green flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Prinsip Implementasi Layanan Syariah */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-card">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NILAI KESYARIAHAN TERPADU</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Penerapan Standar Rumah Sakit Syariah
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Sebagai rumah sakit bersertifikasi DSN-MUI, seluruh operasional mengedepankan prinsip kemaslahatan, kesucian, dan bimbingan ibadah terintegrasi:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {akreditasiData.syariahPrinciples.map((principle, idx) => {
              const IconComp = principleIcons[principle.icon] || Shield;

              return (
                <div
                  key={idx}
                  className="bg-emerald-50/40 rounded-xl p-5 border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50/80 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-xs">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-emerald-950 mb-1.5">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Daftar Penghargaan & Rekognisi */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-gold/15 text-amber-900 text-xs font-semibold mb-2">
              <Medal className="w-3.5 h-3.5 text-accent-gold" />
              <span>AWARDS & RECOGNITION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Penghargaan & Apresiasi Prestasi
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Apresiasi dari kementerian, badan penyelenggara jaminan sosial, asosiasi profesi, dan masyarakat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {akreditasiData.awards.map((award) => (
              <div
                key={award.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold text-xs font-bold">
                      Tahun {award.year}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-400">
                      {award.category}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-accent-gold flex items-center justify-center flex-shrink-0 group-hover:bg-accent-gold group-hover:text-white transition-colors">
                      <Medal className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                        {award.title}
                      </h3>
                      <p className="text-xs text-primary font-medium mt-0.5">
                        {award.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed pt-2">
                    {award.description}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-gray-100">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-gray-700">
                    {award.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 6 Sasaran Keselamatan Pasien */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-card">
          <div className="max-w-3xl mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>PATIENT SAFETY GOALS</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              6 Sasaran Keselamatan Pasien Nasional (SKP)
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Protokol keselamatan wajib yang dijalankan tanpa kompromi oleh seluruh staf medis RS Ridhoka Salma:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-surface-bg border border-gray-100">
              <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold inline-flex items-center justify-center mb-2">1</span>
              <h4 className="text-xs sm:text-sm font-bold text-gray-800 mb-1">Ketepatan Identifikasi Pasien</h4>
              <p className="text-xs text-gray-600">Gelang identitas ganda sebelum tindakan, pemberian obat, atau pengambilan darah.</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-bg border border-gray-100">
              <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold inline-flex items-center justify-center mb-2">2</span>
              <h4 className="text-xs sm:text-sm font-bold text-gray-800 mb-1">Komunikasi yang Efektif</h4>
              <p className="text-xs text-gray-600">Metode SBAR (Situation, Background, Assessment, Recommendation) dan konfirmasi Readback.</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-bg border border-gray-100">
              <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold inline-flex items-center justify-center mb-2">3</span>
              <h4 className="text-xs sm:text-sm font-bold text-gray-800 mb-1">Keamanan Obat High-Alert</h4>
              <p className="text-xs text-gray-600">Penyimpanan khusus dan verifikasi ganda (double-check) obat berisiko tinggi.</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-bg border border-gray-100">
              <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold inline-flex items-center justify-center mb-2">4</span>
              <h4 className="text-xs sm:text-sm font-bold text-gray-800 mb-1">Ketepatan Prosedur Operasi</h4>
              <p className="text-xs text-gray-600">Pemberian tanda lokasi operasi (surgical marking) dan Surgical Safety Checklist (Sign In, Time Out, Sign Out).</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-bg border border-gray-100">
              <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold inline-flex items-center justify-center mb-2">5</span>
              <h4 className="text-xs sm:text-sm font-bold text-gray-800 mb-1">Pengurangan Risiko Infeksi (PPI)</h4>
              <p className="text-xs text-gray-600">Kepatuhan kebersihan tangan (Hand Hygiene 5 Momen WHO) dan penggunaan APD terstandar.</p>
            </div>

            <div className="p-4 rounded-xl bg-surface-bg border border-gray-100">
              <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold inline-flex items-center justify-center mb-2">6</span>
              <h4 className="text-xs sm:text-sm font-bold text-gray-800 mb-1">Pengurangan Risiko Pasien Jatuh</h4>
              <p className="text-xs text-gray-600">Asesmen risiko jatuh berkala, pemasangan gelang kuning risiko jatuh, dan palang pengaman tempat tidur.</p>
            </div>
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="bg-gradient-to-r from-primary-dark via-primary to-teal-700 rounded-2xl p-6 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium text-teal-100 mb-2">
              Pelayanan Terakreditasi
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Percayakan Kesehatan Keluarga Anda Bersama Kami
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              Daftar online atau konsultasikan kebutuhan rawat jalan dan rawat inap dengan tim medis profesional RS Ridhoka Salma.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap">
            <Link
              href="/janji-temu"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-dark px-5 py-3 rounded-xl font-bold text-sm transition-colors shadow-xs"
            >
              <span>Buat Janji Temu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cari-dokter"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              <span>Jadwal Dokter</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
