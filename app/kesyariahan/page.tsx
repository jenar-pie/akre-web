import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, HeartHandshake, BookOpen, Users2, ArrowRight, Sparkles } from "lucide-react";

const kesyariahanCards = [
  { title: "Kebijakan Mutu Syariah", desc: "Standar mutu pelayanan rumah sakit berlandaskan prinsip dan fatwa DSN-MUI.", href: "/kesyariahan/kebijakan-mutu", icon: ShieldCheck },
  { title: "Program Kesyariahan", desc: "Bimbingan ibadah harian, penjagaan aurat, konsultasi rohani, dan sakaratul maut.", href: "/kesyariahan/program", icon: HeartHandshake },
  { title: "Konsultasi Syariah", desc: "Layanan konsultasi fiqih ibadah dan etika medis Islami bagi pasien dan keluarga.", href: "/kesyariahan/konsultan", icon: BookOpen },
  { title: "Profil DPS & Komite Syariah", desc: "Dewan Pengawas Syariah (DPS) dan Komite Syariah pengawal kepatuhan syariah.", href: "/kesyariahan/profil-dps", icon: Users2 },
];

export default function KesyariahanHubPage() {
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
            <span>PELAYANAN SYARIAH</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Pusat Kesyariahan</h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Komitmen penerapan standar rumah sakit syariah tersertifikasi DSN-MUI di RS Ridhoka Salma.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {kesyariahanCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={card.href}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-primary">
                  <span>Lihat Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
