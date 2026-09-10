import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Sparkles } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Seminar Kesehatan Jantung & Deteksi Dini Penyakit Kronis",
    date: "15 Maret 2026",
    time: "09.00 - 12.00 WIB",
    location: "Auditorium RS Ridhoka Salma",
    badge: "Mendatang",
    desc: "Seminar umum bersama dokter spesialis jantung & penyakit dalam untuk masyarakat umum dan komunitas lansia.",
  },
  {
    id: 2,
    title: "Donor Darah Rutin & Pemeriksaan Gula Darah Gratis",
    date: "22 Maret 2026",
    time: "08.00 - 13.00 WIB",
    location: "Lobby Utama RS Ridhoka Salma",
    badge: "Mendatang",
    desc: "Aksi kepedulian sosial bekerja sama dengan PMI Kabupaten Bekasi terbuka untuk seluruh pengunjung.",
  },
  {
    id: 3,
    title: "Kelas Edukasi Senam Hamil Syariah & Perawatan Bayi Baru Lahir",
    date: "29 Maret 2026",
    time: "09.30 - 11.30 WIB",
    location: "Ruang Bersalin & Senam RS Ridhoka Salma",
    badge: "Rutin Mingguan",
    desc: "Persiapan fisik dan mental ibu hamil menghadapi persalinan lancar dan berwawasan Islami.",
  },
];

export default function EventPage() {
  return (
    <div className="bg-surface-bg min-h-screen">
      <div className="relative w-full bg-gradient-to-r from-primary-dark via-primary to-primary-hover text-white py-10 sm:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <Link href="/" className="text-xs text-teal-100 hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-3 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AGENDA KEGIATAN</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Event & Kegiatan</h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Ikuti kegiatan seminar kesehatan, donor darah, dan kelas edukasi publik di RS Ridhoka Salma.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev) => (
            <div key={ev.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary mb-3 inline-block">
                  {ev.badge}
                </span>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3 leading-snug">
                  {ev.title}
                </h3>
                <div className="space-y-1.5 text-xs text-gray-600 mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{ev.date} ({ev.time})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{ev.location}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{ev.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
