"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bed,
  CheckCircle2,
  Phone,
  Calendar,
  Clock,
  Shield,
  BookOpen,
  Utensils,
  HeartHandshake,
  FileText,
  CreditCard,
  Activity,
  ArrowRight,
  Sparkles,
  Info,
  Users,
  Building,
} from "lucide-react";
import LayananHero from "@/components/layanan/LayananHero";
import LayananNavTabs from "@/components/layanan/LayananNavTabs";
import {
  roomTypesData,
  syariahPillarsData,
  admissionStepsData,
  visitingHoursData,
  RoomType,
} from "@/data/inpatient";
import { contacts } from "@/data/contacts";

const pillarIconMap: Record<string, React.ElementType> = {
  BookOpen,
  Shield,
  Utensils,
  HeartHandshake,
};

const stepIconMap: Record<string, React.ElementType> = {
  FileText,
  CreditCard,
  Bed,
  Activity,
};

export default function RawatInapPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const roomFilters = [
    { id: "all", label: "Semua Kelas Kamar" },
    { id: "vvip", label: "VVIP" },
    { id: "vip", label: "VIP" },
    { id: "kelas-1", label: "Kelas 1" },
    { id: "kelas-2", label: "Kelas 2" },
    { id: "kelas-3", label: "Kelas 3 (KRIS BPJS)" },
    { id: "intensive-care", label: "Intensive Care (ICU/NICU)" },
  ];

  const filteredRooms = selectedFilter === "all"
    ? roomTypesData
    : roomTypesData.filter((r) => r.id === selectedFilter);

  return (
    <div className="bg-surface-bg min-h-screen">
      {/* Hero Header */}
      <LayananHero
        badge="Kenyamanan Perawatan & Nilai Syariah"
        title="Layanan Rawat Inap RS Ridhoka Salma"
        description="Menghadirkan lingkungan perawatan yang sejuk, bersih, dan nyaman dengan bimbingan rohani Islam, penjagaan aurat, serta asuhan keperawatan profesional 24 jam untuk mendukung proses penyembuhan optimal Anda."
        breadcrumbs={[
          { label: "Layanan", href: "/layanan" },
          { label: "Rawat Inap" },
        ]}
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
                <Bed className="w-3.5 h-3.5" />
                <span>PERAWATAN RAWAT INAP BERKUALITAS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Kenyamanan dan Ketenangan Pasien Adalah Prioritas Utama Kami
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                RS Ridhoka Salma menyediakan berbagai pilihan kamar rawat inap mulai dari Kamar VVIP, VIP, Kelas 1, Kelas 2, hingga Kelas 3 yang memenuhi standar KRIS BPJS Kesehatan. Setiap ruangan didesain mengutamakan kebersihan, sirkulasi udara yang baik, dan suasana tenang bernuansa Islami.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                  <span>Kapasitas 100+ Tempat Tidur</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                  <span>Bimbingan Ibadah & Doa Pasien</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                  <span>Kerjasama BPJS & Asuransi Swasta</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                  <span>Nurse Call System Siaga 24 Jam</span>
                </div>
              </div>
            </div>

            {/* Quick Hotline Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-primary-dark via-primary to-teal-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <span className="text-xs uppercase tracking-widest text-teal-200 font-bold">
                  Informasi & Ketersediaan Bed
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">
                  Layanan Admisi & Pemesanan Kamar Rawat Inap
                </h3>
                <p className="text-xs text-teal-50/90 leading-relaxed">
                  Hubungi petugas admisi kami untuk informasi real-time ketersediaan tempat tidur atau konsultasi proses rawat inap.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`https://wa.me/${contacts.whatsappLink.split("/").pop()}?text=${encodeURIComponent("Halo RS Ridhoka Salma, saya ingin menanyakan informasi ketersediaan kamar rawat inap.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-dark text-xs font-bold py-3 px-4 rounded-xl transition-colors shadow-xs"
                  >
                    <span>Chat WhatsApp Admisi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`tel:${contacts.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 text-xs font-semibold py-3 px-4 rounded-xl transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{contacts.phone}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4 Syariah Inpatient Pillars */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-green/10 text-accent-green text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NILAI PELAYANAN SYARIAH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Keunggulan Rawat Inap Bernuansa Syariah
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Menghadirkan ketenangan lahir dan batin selama masa perawatan di rumah sakit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {syariahPillarsData.map((pillar, idx) => {
              const IconComp = (pillar.iconName && pillarIconMap[pillar.iconName]) || Shield;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                      {pillar.title}
                    </h3>
                    <h4 className="text-xs font-semibold text-accent-green mb-3">
                      {pillar.subtitle}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Room Types Showcase */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                <Building className="w-3.5 h-3.5" />
                <span>PILIHAN KELAS KAMAR</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Pilihan Kamar & Fasilitas Rawat Inap
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Pilih kamar yang sesuai dengan kenyamanan dan kebutuhan perawatan keluarga Anda.
              </p>
            </div>

            {/* Room Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
              {roomFilters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFilter(f.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedFilter === f.id
                      ? "bg-primary text-white shadow-xs"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredRooms.map((room: RoomType) => (
              <div
                key={room.id}
                className={`bg-white rounded-2xl overflow-hidden border ${
                  room.highlight ? "border-primary/40 shadow-lg ring-1 ring-primary/20" : "border-gray-100 shadow-card"
                } hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Image & Badges */}
                  <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-primary text-white font-bold text-xs px-3 py-1 rounded-full shadow-xs">
                        {room.badge}
                      </span>
                      <span className="bg-white/90 text-gray-800 font-semibold text-[11px] px-2.5 py-1 rounded-full backdrop-blur-xs shadow-xs">
                        {room.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                        {room.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-semibold text-primary mt-1">
                        <Users className="w-3.5 h-3.5" />
                        <span>{room.capacity}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Features Checklist */}
                    <div className="pt-3 border-t border-gray-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                        Fasilitas & Kelengkapan Kamar:
                      </span>
                      <ul className="space-y-2">
                        {room.features.map((feat, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Amenity Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {room.amenities.map((amenity, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-surface-bg text-gray-700 text-[11px] font-medium border border-gray-200"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 sm:p-8 pt-0 flex items-center gap-3">
                  <a
                    href={`https://wa.me/${contacts.whatsappLink.split("/").pop()}?text=${encodeURIComponent(`Halo RS Ridhoka Salma, saya ingin menanyakan ketersediaan kamar: ${room.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition-colors shadow-xs"
                  >
                    <span>Cek Ketersediaan Kamar</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Admission Workflow (4 Steps) */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-card">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>PANDUAN RAWAT INAP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Alur & Prosedur Pendaftaran Rawat Inap
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Tahapan mudah proses pendaftaran pasien rawat inap di RS Ridhoka Salma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {admissionStepsData.map((step) => {
              const IconComp = (step.iconName && stepIconMap[step.iconName]) || FileText;

              return (
                <div
                  key={step.stepNumber}
                  className="bg-surface-bg/60 rounded-xl p-5 sm:p-6 border border-gray-100 relative flex flex-col justify-between group hover:border-primary/40 hover:bg-white transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-extrabold text-primary/30 group-hover:text-primary transition-colors">
                        0{step.stepNumber}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Visiting Hours & Rules */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Schedule */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>WAKTU BERKUNJUNG</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {visitingHoursData.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {visitingHoursData.description}
              </p>

              <div className="space-y-3 pt-2">
                {visitingHoursData.sessions.map((sess, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-primary-light/50 border border-primary/20 flex items-center justify-between gap-4"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-primary-dark">
                        {sess.sessionName}
                      </h4>
                      <span className="text-xs text-gray-600">{sess.note}</span>
                    </div>
                    <div className="px-3 py-1.5 bg-primary text-white font-bold text-xs rounded-lg whitespace-nowrap shadow-xs">
                      {sess.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hospital Rules */}
            <div className="lg:col-span-7 bg-surface-bg/80 rounded-xl p-6 sm:p-8 border border-gray-200/80 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <Info className="w-4 h-4 text-primary" />
                <span>Tata Tertib Demi Keselamatan & Kenyamanan Pasien</span>
              </div>

              <ul className="space-y-3">
                {visitingHoursData.rules.map((rule, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* CTA Bottom Banner */}
        <section className="bg-gradient-to-r from-primary-dark via-primary to-teal-700 rounded-2xl p-6 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold text-teal-100">
              Layanan Admisi Pasien
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Informasi Pemesanan Kamar & Konsultasi Jaminan Asuransi
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              Hubungi petugas admisi RS Ridhoka Salma untuk kemudahan reservasi rawat inap dan koordinasi penjaminan BPJS maupun asuransi.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap justify-center">
            <a
              href={`https://wa.me/${contacts.whatsappLink.split("/").pop()}?text=${encodeURIComponent("Halo RS Ridhoka Salma, saya ingin reservasi kamar rawat inap.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-dark px-5 py-3 rounded-xl font-bold text-sm transition-colors shadow-xs"
            >
              <span>Chat WhatsApp Admisi</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/layanan/layanan-unggulan"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              <span>Layanan Unggulan</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
