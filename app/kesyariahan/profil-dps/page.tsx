import React from "react";
import Link from "next/link";
import { ArrowLeft, Users2, ShieldCheck, Sparkles } from "lucide-react";

const dpsMembers = [
  { name: "KH. Dr. Muhammad Syukron, M.A.", role: "Ketua Dewan Pengawas Syariah", desc: "Pakar Fiqih Muamalah & Sertifikasi DSN-MUI Pusat." },
  { name: "Ust. H. Ahmad Rofiq, Lc., M.E.I.", role: "Anggota Dewan Pengawas Syariah", desc: "Konsultan Syariah Rumah Sakit & Pengajar Fiqih Medis." },
  { name: "dr. H. Muhammad Fachri, Sp.A", role: "Ketua Komite Syariah Rumah Sakit", desc: "Koordinator penerapan standar mutu syariah medis internal." },
];

export default function ProfilDPSPage() {
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
            <span>STRUKTUR KESYARIAHAN</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Profil DPS & Komite Syariah</h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Mengenal jajaran Dewan Pengawas Syariah dan Komite Syariah RS Ridhoka Salma.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dpsMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Users2 className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary mb-2 inline-block">
                  {member.role}
                </span>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">{member.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
