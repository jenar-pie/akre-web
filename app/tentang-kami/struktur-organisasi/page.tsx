"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users2,
  ShieldCheck,
  Building,
  Stethoscope,
  Briefcase,
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  UserCheck,
} from "lucide-react";
import AboutHero from "@/components/about/AboutHero";
import AboutNavTabs from "@/components/about/AboutNavTabs";
import { strukturOrganisasiData } from "@/data/about";

export default function StrukturOrganisasiPage() {
  const [activeCategory, setActiveCategory] = useState("semua");

  const filteredMembers =
    activeCategory === "semua"
      ? strukturOrganisasiData.members
      : strukturOrganisasiData.members.filter(
          (m) => m.category === activeCategory
        );

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "pengawas":
        return {
          label: "Dewan Pengawas Syariah",
          bg: "bg-emerald-50 text-emerald-700 border-emerald-200",
          icon: ShieldCheck,
        };
      case "direksi":
        return {
          label: "Direksi Rumah Sakit",
          bg: "bg-teal-50 text-primary-dark border-teal-200",
          icon: Building,
        };
      case "komite":
        return {
          label: "Komite Rumah Sakit",
          bg: "bg-blue-50 text-blue-700 border-blue-200",
          icon: Stethoscope,
        };
      case "manajemen":
        return {
          label: "Manajemen Operasional",
          bg: "bg-amber-50 text-amber-800 border-amber-200",
          icon: Briefcase,
        };
      default:
        return {
          label: "Staf",
          bg: "bg-gray-50 text-gray-700 border-gray-200",
          icon: Users2,
        };
    }
  };

  return (
    <div className="bg-surface-bg min-h-screen">
      {/* Hero Header */}
      <AboutHero
        badge="Tata Kelola & Kepemimpinan"
        title="Struktur Organisasi RS Ridhoka Salma"
        description="Kepemimpinan profesional, dewan pengawas syariah, komite klinis, serta manajemen operasional yang berdedikasi menjaga mutu pelayanan dan keselamatan pasien."
        breadcrumbs={[
          { label: "Tentang Kami", href: "/tentang-kami" },
          { label: "Struktur Organisasi" },
        ]}
      />

      {/* Subnav Tabs */}
      <AboutNavTabs />

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">

        {/* Visual Chart / Flowchart Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-card">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>BAGAN TATA KELOLA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Bagan Hierarki Kepemimpinan
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Struktur tata kelola terpadu yang memadukan pengawasan syariah dengan manajemen rumah sakit modern.
            </p>
          </div>

          {/* Graphical Hierarchy Tree */}
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Level 1: Dewan Pengawas Syariah & Dewan Komisaris */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-center">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-2 shadow-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Dewan Pengawas Syariah (DPS)
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  Dr. KH. M. Anwar Syahid & Ustadz H. Ahmad Fauzi
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 text-center">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 shadow-xs">
                  <Building className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-primary-dark uppercase tracking-wider">
                  Dewan Komisaris & Direktur Utama
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  Hj. Roziana Ghani (Direktur Utama)
                </p>
              </div>
            </div>

            {/* Connecting line */}
            <div className="w-0.5 h-6 bg-primary/40 mx-auto" />

            {/* Level 2: Direktur RS */}
            <div className="max-w-md mx-auto">
              <div className="p-5 rounded-xl bg-primary text-white text-center shadow-md">
                <h3 className="text-sm sm:text-base font-bold">
                  dr. H. Hendra Budiman, MARS
                </h3>
                <p className="text-xs text-teal-100 mt-0.5">
                  Direktur Utama Rumah Sakit
                </p>
              </div>
            </div>

            {/* Connecting line */}
            <div className="w-0.5 h-6 bg-primary/40 mx-auto" />

            {/* Level 3: Wakil Direktur */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border-2 border-primary/30 text-center shadow-xs">
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                  dr. Siti Rahmawati, Sp.A
                </h4>
                <p className="text-xs text-primary font-medium mt-0.5">
                  Wadir Pelayanan Medis & Keperawatan
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border-2 border-primary/30 text-center shadow-xs">
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                  H. Bambang Sutejo, S.E., M.M.
                </h4>
                <p className="text-xs text-primary font-medium mt-0.5">
                  Wadir Umum, SDM & Keuangan
                </p>
              </div>
            </div>

            {/* Level 4: Komite & Unit */}
            <div className="p-4 rounded-xl bg-surface-bg border border-gray-200 text-center">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                Komite-Komite Medis & Pengendali Mutu
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-600">
                <span className="px-2.5 py-1 bg-white rounded-md border border-gray-200">Komite Medik</span>
                <span className="px-2.5 py-1 bg-white rounded-md border border-gray-200">Komite Keperawatan</span>
                <span className="px-2.5 py-1 bg-white rounded-md border border-gray-200">Komite PMKP (Mutu & Keselamatan)</span>
                <span className="px-2.5 py-1 bg-white rounded-md border border-gray-200">Komite Syariah</span>
                <span className="px-2.5 py-1 bg-white rounded-md border border-gray-200">Komite PPI</span>
              </div>
            </div>

          </div>
        </section>

        {/* Member Directory with Category Filter */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Daftar Pejabat & Pimpinan
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Profil jajaran pengawas, direksi, ketua komite, dan manajer divisi.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {strukturOrganisasiData.tabs.map((tab) => {
                const isCurrent = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                      isCurrent
                        ? "bg-primary text-white shadow-xs font-semibold"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((person, idx) => {
              const badge = getCategoryBadge(person.category);
              const BadgeIcon = badge.icon;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Dummy Image */}
                    <div className="relative w-full aspect-[4/3] bg-[#edf6f5] overflow-hidden">
                      {person.image ? (
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-teal-50 text-primary">
                          <UserCheck className="w-16 h-16 opacity-40" />
                        </div>
                      )}

                      {/* Badge Pill on Image */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between gap-1.5">
                        <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-xs text-primary-dark text-xs font-bold px-2.5 py-1 rounded-lg shadow-xs border border-gray-100 truncate">
                          <BadgeIcon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span className="truncate">{badge.label}</span>
                        </span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-5 space-y-3">
                      <div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-primary transition-colors leading-snug">
                          {person.name}
                        </h3>
                        <p className="text-xs font-semibold text-primary mt-1">
                          {person.role}
                        </p>
                        {person.division && (
                          <p className="text-[11px] font-medium text-gray-400 mt-0.5">
                            {person.division}
                          </p>
                        )}
                      </div>

                      {/* Description */}
                      {person.description && (
                        <p className="text-xs text-gray-600 leading-relaxed pt-3 border-t border-gray-100">
                          {person.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Good Governance Principles */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-card">
          <div className="max-w-3xl mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRINSIP TATA KELOLA</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Tata Kelola Rumah Sakit yang Baik (Good Healthcare Governance)
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              RS Ridhoka Salma mengintegrasikan prinsip Good Corporate Governance dengan nilai Syariah Governance melalui pilar:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-surface-bg border border-gray-100">
              <div className="text-base font-bold text-primary mb-1">1. Transparansi</div>
              <p className="text-xs text-gray-600">Keterbukaan informasi biaya tindakan, jadwal dokter, dan hak-kewajiban pasien.</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-bg border border-gray-100">
              <div className="text-base font-bold text-primary mb-1">2. Akuntabilitas</div>
              <p className="text-xs text-gray-600">Pertanggungjawaban klinis melalui audit mutu komite medis dan pengawasan DPS.</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-bg border border-gray-100">
              <div className="text-base font-bold text-primary mb-1">3. Responsibilitas</div>
              <p className="text-xs text-gray-600">Kepatuhan regulasi Kemenkes, perundang-undangan, serta standar syariat Islam.</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-bg border border-gray-100">
              <div className="text-base font-bold text-primary mb-1">4. Keadilan & Kesetaraan</div>
              <p className="text-xs text-gray-600">Pelayanan yang adil tanpa diskriminasi bagi pasien umum, asuransi, maupun BPJS.</p>
            </div>
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="bg-gradient-to-r from-primary-dark via-primary to-teal-700 rounded-2xl p-6 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium text-teal-100 mb-2">
              Mutu & Pengakuan
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Akreditasi Paripurna & Sertifikasi Syariah
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              Lihat sertifikasi resmi dari KARS / Kemenkes RI, DSN-MUI, serta berbagai penghargaan yang telah diraih.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap">
            <Link
              href="/tentang-kami/akreditasi"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-dark px-5 py-3 rounded-xl font-bold text-sm transition-colors shadow-xs"
            >
              <span>Lihat Akreditasi & Prestasi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/kesyariahan"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              <span>Layanan Kesyariahan</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
