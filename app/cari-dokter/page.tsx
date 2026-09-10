"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  User,
  Clock,
  CheckCircle2,
  Search,
  Sparkles,
  ArrowRight,
  Stethoscope,
} from "lucide-react";

type DayOfWeek = "Senin" | "Selasa" | "Rabu" | "Kamis" | "Jumat" | "Sabtu" | "Minggu";

interface ScheduleItem {
  day: DayOfWeek;
  time: string;
  status: "Tersedia" | "Penuh" | "Selesai";
}

interface DoctorItem {
  id: string;
  name: string;
  specialtyCode: string;
  specialtyBadge: string;
  experience: string;
  poli: string;
  image: string;
  slug: string;
  schedules: ScheduleItem[];
}

const DAYS: DayOfWeek[] = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

const doctorsData: DoctorItem[] = [
  {
    id: "doc-edward",
    name: "dr. Edward Morganda Marpaung, Sp.OG., DMAS",
    specialtyCode: "Sp.OG",
    specialtyBadge: "Spesialis Obgyn",
    experience: "10 tahun pengalaman",
    poli: "Poli Kandungan & Kebidanan",
    image: "/assets/profil/djoni.png",
    slug: "kebidanan",
    schedules: [
      { day: "Senin", time: "09:00 - 12:00", status: "Tersedia" },
      { day: "Selasa", time: "09:00 - 12:00", status: "Tersedia" },
      { day: "Rabu", time: "09:00 - 12:00", status: "Tersedia" },
      { day: "Kamis", time: "09:00 - 12:00", status: "Tersedia" },
      { day: "Jumat", time: "09:00 - 12:00", status: "Tersedia" },
    ],
  },
  {
    id: "doc-nurhayati",
    name: "dr. Nur Hayati, Sp. A",
    specialtyCode: "Sp.A",
    specialtyBadge: "Spesialis Anak",
    experience: "5 tahun pengalaman",
    poli: "Poli Anak",
    image: "/assets/profil/nelly.png",
    slug: "anak",
    schedules: [
      { day: "Rabu", time: "09:00 - 11:00", status: "Tersedia" },
      { day: "Kamis", time: "09:00 - 11:00", status: "Tersedia" },
      { day: "Jumat", time: "09:00 - 11:00", status: "Tersedia" },
      { day: "Sabtu", time: "09:00 - 11:00", status: "Tersedia" },
    ],
  },
  {
    id: "doc-sindiawani",
    name: "drg. Sindiawani Gusvinda Radiani",
    specialtyCode: "drg.",
    specialtyBadge: "Dokter Gigi Umum",
    experience: "2 tahun pengalaman",
    poli: "Poli Gigi & Mulut",
    image: "/assets/profil/bening.png",
    slug: "gigi",
    schedules: [
      { day: "Senin", time: "09:00 - 14:00", status: "Tersedia" },
      { day: "Selasa", time: "09:00 - 14:00", status: "Tersedia" },
      { day: "Rabu", time: "09:00 - 14:00", status: "Tersedia" },
      { day: "Kamis", time: "09:00 - 14:00", status: "Tersedia" },
      { day: "Jumat", time: "09:00 - 14:00", status: "Tersedia" },
      { day: "Sabtu", time: "09:00 - 14:00", status: "Tersedia" },
    ],
  },
  {
    id: "doc-driyarkara",
    name: "dr. Driyarkara, Sp.PD",
    specialtyCode: "Sp.PD",
    specialtyBadge: "Spesialis Penyakit Dalam",
    experience: "16 tahun pengalaman",
    poli: "Poli Penyakit Dalam",
    image: "/assets/profil/driyarkara.png",
    slug: "penyakit-dalam",
    schedules: [
      { day: "Senin", time: "08:00 - 12:00", status: "Tersedia" },
      { day: "Selasa", time: "08:00 - 12:00", status: "Tersedia" },
      { day: "Rabu", time: "08:00 - 12:00", status: "Tersedia" },
      { day: "Kamis", time: "08:00 - 12:00", status: "Tersedia" },
      { day: "Jumat", time: "08:00 - 12:00", status: "Tersedia" },
    ],
  },
  {
    id: "doc-tania",
    name: "dr. Tania Andriani, Sp.JP",
    specialtyCode: "Sp.JP",
    specialtyBadge: "Spesialis Jantung & Pembuluh Darah",
    experience: "10 tahun pengalaman",
    poli: "Poli Jantung",
    image: "/assets/profil/tania.png",
    slug: "jantung",
    schedules: [
      { day: "Senin", time: "13:00 - 16:00", status: "Tersedia" },
      { day: "Rabu", time: "13:00 - 16:00", status: "Tersedia" },
      { day: "Kamis", time: "13:00 - 16:00", status: "Tersedia" },
      { day: "Jumat", time: "13:00 - 16:00", status: "Tersedia" },
    ],
  },
  {
    id: "doc-gema",
    name: "dr. Gema Putra, Sp.B",
    specialtyCode: "Sp.B",
    specialtyBadge: "Spesialis Bedah Umum",
    experience: "12 tahun pengalaman",
    poli: "Poli Bedah Umum",
    image: "/assets/profil/gema.png",
    slug: "bedah-umum",
    schedules: [
      { day: "Senin", time: "10:00 - 13:00", status: "Tersedia" },
      { day: "Selasa", time: "10:00 - 13:00", status: "Tersedia" },
      { day: "Kamis", time: "10:00 - 13:00", status: "Tersedia" },
      { day: "Sabtu", time: "10:00 - 13:00", status: "Tersedia" },
    ],
  },
  {
    id: "doc-sukirman",
    name: "dr. Sukirman, Sp.M",
    specialtyCode: "Sp.M",
    specialtyBadge: "Spesialis Mata",
    experience: "15 tahun pengalaman",
    poli: "Poli Mata",
    image: "/assets/profil/sukirman.png",
    slug: "mata",
    schedules: [
      { day: "Senin", time: "09:00 - 12:00", status: "Tersedia" },
      { day: "Selasa", time: "09:00 - 12:00", status: "Tersedia" },
      { day: "Rabu", time: "09:00 - 12:00", status: "Tersedia" },
      { day: "Kamis", time: "09:00 - 12:00", status: "Tersedia" },
      { day: "Jumat", time: "09:00 - 12:00", status: "Tersedia" },
    ],
  },
  {
    id: "doc-zecky",
    name: "dr. Zecky E., Sp.OT, MARS",
    specialtyCode: "Sp.OT",
    specialtyBadge: "Spesialis Bedah Orthopaedi",
    experience: "16 tahun pengalaman",
    poli: "Poli Ortopedi",
    image: "/assets/profil/zecky.png",
    slug: "ortopedi",
    schedules: [
      { day: "Senin", time: "14:00 - 17:00", status: "Tersedia" },
      { day: "Selasa", time: "14:00 - 17:00", status: "Tersedia" },
      { day: "Kamis", time: "14:00 - 17:00", status: "Tersedia" },
      { day: "Sabtu", time: "09:00 - 12:00", status: "Tersedia" },
    ],
  },
  {
    id: "doc-ferry",
    name: "dr. Ferry H., Sp.THT-KL",
    specialtyCode: "Sp.THT-KL",
    specialtyBadge: "Spesialis THT-KL",
    experience: "14 tahun pengalaman",
    poli: "Poli THT",
    image: "/assets/profil/ferry.png",
    slug: "tht",
    schedules: [
      { day: "Selasa", time: "09:00 - 12:00", status: "Tersedia" },
      { day: "Rabu", time: "09:00 - 12:00", status: "Tersedia" },
      { day: "Kamis", time: "09:00 - 12:00", status: "Tersedia" },
      { day: "Sabtu", time: "13:00 - 16:00", status: "Tersedia" },
    ],
  },
  {
    id: "doc-tantrie",
    name: "dr. Tantrie D., Sp.P",
    specialtyCode: "Sp.P",
    specialtyBadge: "Spesialis Paru",
    experience: "11 tahun pengalaman",
    poli: "Poli Paru",
    image: "/assets/profil/tantrie.png",
    slug: "paru",
    schedules: [
      { day: "Selasa", time: "08:00 - 11:00", status: "Tersedia" },
      { day: "Rabu", time: "08:00 - 11:00", status: "Tersedia" },
      { day: "Kamis", time: "08:00 - 11:00", status: "Tersedia" },
    ],
  },
  {
    id: "doc-kurniadi",
    name: "dr. Kurniadi Yusuf S., Sp.U",
    specialtyCode: "Sp.U",
    specialtyBadge: "Spesialis Urologi",
    experience: "10 tahun pengalaman",
    poli: "Poli Urologi",
    image: "/assets/profil/kurniadi.png",
    slug: "urologi",
    schedules: [
      { day: "Kamis", time: "15:00 - 18:00", status: "Tersedia" },
      { day: "Minggu", time: "09:00 - 12:00", status: "Tersedia" },
    ],
  },
];

export default function CariDokterPage() {
  const [viewMode, setViewMode] = useState<"hari" | "dokter">("hari");
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>("Senin");
  const [searchQuery, setSearchQuery] = useState("");

  // Calculate doctor counts per day
  const dayDoctorCounts = useMemo(() => {
    const counts: Record<DayOfWeek, number> = {
      Senin: 0,
      Selasa: 0,
      Rabu: 0,
      Kamis: 0,
      Jumat: 0,
      Sabtu: 0,
      Minggu: 0,
    };
    DAYS.forEach((day) => {
      counts[day] = doctorsData.filter((doc) =>
        doc.schedules.some((s) => s.day === day)
      ).length;
    });
    return counts;
  }, []);

  // Filtered doctors based on search
  const filteredDoctors = useMemo(() => {
    if (!searchQuery.trim()) return doctorsData;
    const q = searchQuery.toLowerCase().trim();
    return doctorsData.filter(
      (doc) =>
        doc.name.toLowerCase().includes(q) ||
        doc.specialtyBadge.toLowerCase().includes(q) ||
        doc.specialtyCode.toLowerCase().includes(q) ||
        doc.poli.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Doctors for the selected day in "Lihat per Hari" view
  const doctorsForSelectedDay = useMemo(() => {
    return filteredDoctors
      .map((doc) => {
        const schedule = doc.schedules.find((s) => s.day === selectedDay);
        return schedule ? { doc, schedule } : null;
      })
      .filter((item): item is { doc: DoctorItem; schedule: ScheduleItem } => item !== null);
  }, [filteredDoctors, selectedDay]);

  return (
    <div className="bg-[#f8fbfb] min-h-screen py-8 sm:py-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top View Toggle Switcher */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="relative inline-flex p-1.5 bg-white rounded-2xl border border-gray-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.04)] select-none">
            {/* Smooth Sliding Background Pill (Zero Delay / Hardware Accelerated) */}
            <div
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gradient-to-r from-[#198782] to-[#259b95] rounded-xl shadow-[0_4px_16px_rgba(25,135,130,0.35),inset_0_1px_1px_rgba(255,255,255,0.25)] border border-teal-500/30 transition-transform duration-200 ease-out pointer-events-none ${
                viewMode === "hari" ? "left-1.5 translate-x-0" : "left-1.5 translate-x-full"
              }`}
            />

            <button
              type="button"
              onClick={() => setViewMode("hari")}
              className={`relative z-10 flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                viewMode === "hari" ? "text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <CalendarDays className="w-4 h-4 shrink-0" />
              <span>Lihat per Hari</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("dokter")}
              className={`relative z-10 flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                viewMode === "dokter" ? "text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <User className="w-4 h-4 shrink-0" />
              <span>Lihat per Dokter</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8 sm:mb-10 relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Cari dokter atau bidang spesialis..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-gray-200/90 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#198782]/20 focus:border-[#198782] shadow-[0_4px_16px_-2px_rgba(0,0,0,0.05)] transition-all"
          />
        </div>

        {/* VIEW 1: LIHAT PER HARI */}
        {viewMode === "hari" && (
          <div>
            {/* Horizontal Day Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {DAYS.map((day) => {
                const isActive = selectedDay === day;
                const count = dayDoctorCounts[day];

                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`p-4 sm:p-5 rounded-2xl text-center transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-br from-[#198782] via-[#1d918b] to-[#126b67] text-white shadow-[0_10px_28px_-4px_rgba(25,135,130,0.45),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-teal-400/40 -translate-y-0.5"
                        : "bg-white text-gray-800 border border-gray-200/90 shadow-[0_4px_14px_-2px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_-4px_rgba(25,135,130,0.15)] hover:border-[#198782]/50 hover:-translate-y-0.5"
                    }`}
                  >
                    <div
                      className={`font-bold text-sm sm:text-base mb-1 ${
                        isActive ? "text-white" : "text-[#198782]"
                      }`}
                    >
                      {day}
                    </div>
                    <div
                      className={`text-xs ${
                        isActive ? "text-teal-100 font-medium" : "text-gray-500 font-normal"
                      }`}
                    >
                      {count} dokter
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Heading: Jadwal [Hari] */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a4a47]">
                Jadwal {selectedDay}
              </h2>
            </div>

            {/* Doctors List for Selected Day (3 Kolom Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {doctorsForSelectedDay.map(({ doc, schedule }) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Doctor Image with Specialty Badge */}
                    <div className="relative w-full aspect-square bg-[#edf6f5] overflow-hidden">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        className="object-cover object-bottom group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                      {/* Specialty Pill Badge on Image */}
                      <div className="absolute top-3.5 left-3.5">
                        <span className="inline-block bg-white/95 backdrop-blur-xs text-[#2A7B78] text-xs font-bold px-3 py-1 rounded-lg shadow-xs border border-gray-100">
                          {doc.specialtyBadge}
                        </span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-5 space-y-3.5">
                      <div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-[#3A9D9A] transition-colors leading-snug">
                          {doc.name}
                        </h3>
                        <p className="text-xs text-gray-400 font-medium mt-0.5">
                          {doc.specialtyCode ? `${doc.specialtyCode} • ` : ""}{doc.poli}
                        </p>
                      </div>

                      {/* Metadata: Experience & Selected Day Schedule */}
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="w-5 h-5 rounded-full bg-[#e6f6f5] text-[#3A9D9A] flex items-center justify-center flex-shrink-0">
                            <User className="w-3 h-3" />
                          </div>
                          <span>{doc.experience || "10+ Tahun Pengalaman"}</span>
                        </div>

                        <div className="flex items-center justify-between gap-2 text-xs text-gray-500">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-5 h-5 rounded-full bg-[#e6f6f5] text-[#3A9D9A] flex items-center justify-center flex-shrink-0">
                              <Clock className="w-3 h-3" />
                            </div>
                            <span className="font-medium text-gray-700 truncate">
                              {selectedDay}: {schedule.time}
                            </span>
                          </div>
                          <span className="text-emerald-600 font-bold text-[11px] shrink-0 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{schedule.status}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="p-5 pt-0">
                    <Link
                      href="/janji-temu"
                      className="w-full bg-[#3A9D9A] hover:bg-[#2A7B78] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    >
                      <span>Pilih Dokter & Janji Temu</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}

              {doctorsForSelectedDay.length === 0 && (
                <div className="col-span-full bg-white rounded-3xl p-10 text-center border border-gray-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                  <p className="text-gray-500 text-sm">
                    Tidak ada dokter yang berpraktek pada hari {selectedDay} untuk kriteria pencarian ini.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIEW 2: LIHAT PER DOKTER */}
        {viewMode === "dokter" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_6px_28px_-6px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_22px_48px_-8px_rgba(25,135,130,0.22),0_8px_16px_-4px_rgba(0,0,0,0.06)] hover:border-teal-300 hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Top Doctor Info */}
                  <div className="flex items-center gap-3.5 mb-2">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-b from-[#edf6f5] to-white shrink-0 border-2 border-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] ring-2 ring-teal-50">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        className="object-cover object-bottom"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base leading-snug">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#198782] mt-0.5">
                        {doc.specialtyBadge}
                      </p>
                      <p className="text-xs text-gray-400 font-medium mt-0.5">
                        {doc.experience}
                      </p>
                    </div>
                  </div>

                  {/* Weekly Schedule Section */}
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm mb-3">
                      Jadwal Mingguan
                    </h4>

                    <div className="space-y-1.5">
                      {doc.schedules.map((s, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between text-xs sm:text-sm py-2 px-2.5 rounded-xl hover:bg-teal-50/50 transition-colors border-b border-gray-100/60 last:border-none"
                        >
                          <span className="font-bold text-gray-900 w-16">
                            {s.day}
                          </span>
                          <span className="text-gray-600 font-medium text-center flex-1">
                            {s.time}
                          </span>
                          <span className="text-emerald-600 font-semibold flex items-center gap-1 justify-end shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{s.status}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Link to Doctor/Specialist profile */}
                <div className="mt-6 pt-4 border-t border-gray-100/80">
                  <Link
                    href={`/spesialis-kami/${doc.slug}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-2xl bg-gradient-to-r from-teal-50 to-[#edf6f5] hover:from-[#198782] hover:to-[#20948e] text-[#198782] hover:text-white font-semibold text-xs border border-teal-200/60 hover:border-transparent shadow-[0_2px_8px_rgba(25,135,130,0.08)] hover:shadow-[0_6px_18px_rgba(25,135,130,0.25)] transition-all duration-200"
                  >
                    <span>Lihat Layanan Spesialis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {filteredDoctors.length === 0 && (
              <div className="col-span-full bg-white rounded-3xl p-12 text-center border border-gray-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] max-w-md mx-auto my-8">
                <p className="text-gray-600 text-sm font-medium">
                  Tidak ada dokter yang sesuai dengan pencarian &quot;{searchQuery}&quot;
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 px-5 py-2.5 bg-[#198782] text-white text-xs font-semibold rounded-full hover:bg-[#2A7B78] shadow-sm transition-colors"
                >
                  Reset Pencarian
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
