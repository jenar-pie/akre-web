import React from "react";
import Link from "next/link";
import { ArrowLeft, HeartHandshake, CheckCircle2, Sparkles } from "lucide-react";

const programs = [
  { title: "Bimbingan Ibadah & Doa Harian Pasien", desc: "Kunjungan rohaniawan Islam ke setiap kamar rawat inap untuk membimbing shalat, tayammum, dan membaca doa kesembuhan." },
  { title: "Penjagaan Aurat & Privasi Pasien", desc: "Pemisahan ruang rawat, perawat sejenis gender (pasien wanita didampingi perawat wanita), serta penyediaan hijab medis." },
  { title: "Bimbingan Sakaratul Maut (Talqin)", desc: "Pendampingan khusus dan bimbingan membaca kalimat tauhid bagi pasien dalam kondisi kritis menuju husnul khatimah." },
  { title: "Edukasi Fiqih Medis & Kesehatan", desc: "Kajian rutin keislaman untuk karyawan dan pasien tentang fiqih bersuci, puasa bagi penderita penyakit, dan pengobatan nabawi." },
  { title: "Pelayanan Zakat, Infaq & Sedekah (ZIS)", desc: "Penyaluran bantuan biaya pengobatan bagi pasien dhuafa melalui unit pengumpul zakat rumah sakit." },
];

export default function ProgramKesyariahanPage() {
  return (
    <div className="bg-surface-bg min-h-screen">
      <div className="relative w-full bg-gradient-to-r from-primary-dark via-primary to-primary-hover text-white py-10 sm:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <Link href="/kesyariahan" className="text-xs text-teal-100 hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Menu Kesyariahan</span>
            </Link>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-3 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROGRAM BINA ROHANI</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Program Kesyariahan</h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Inisiatif pelayanan rohani dan penerapan syariat Islam dalam setiap tahapan perawatan pasien.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">{prog.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{prog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
