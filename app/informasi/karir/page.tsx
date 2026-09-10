import React from "react";
import Link from "next/link";
import { ArrowLeft, Briefcase, MapPin, Sparkles, Mail } from "lucide-react";
import { contacts } from "@/data/contacts";

const jobs = [
  { id: 1, title: "Perawat Rawat Inap & ICU (Ners)", type: "Penuh Waktu", dept: "Keperawatan", req: "Pendidikan Profesi Ners, STR Aktif, pengalaman min 1 tahun." },
  { id: 2, title: "Radiografer", type: "Penuh Waktu", dept: "Radiologi", req: "D3 Radiologi, STR Aktif, memiliki sertifikat proteksi radiasi." },
  { id: 3, title: "Analis Laboratorium Medis (ATLM)", type: "Penuh Waktu", dept: "Laboratorium", req: "D3 Analis Kesehatan/TLM, STR Aktif, teliti dan profesional." },
  { id: 4, title: "Customer Service & Kasir", type: "Penuh Waktu", dept: "Pelayanan Pasien", req: "D3/S1 Segala Jurusan, komunikatif, berpenampilan rapi & ramah." },
];

export default function KarirPage() {
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
            <span>PELUANG KARIR</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Karir & Rekrutmen</h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Bergabunglah bersama keluarga besar RS Ridhoka Salma untuk mewujudkan pelayanan kesehatan bernilai ibadah.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                    {job.dept}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">{job.type}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">{job.title}</h3>
                <p className="text-xs text-gray-600 mb-4">{job.req}</p>
              </div>
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> Cikarang Barat
                </span>
                <a
                  href={`mailto:${contacts.email}?subject=${encodeURIComponent(`Lamaran Posisi: ${job.title}`)}`}
                  className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Kirim Lamaran</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
