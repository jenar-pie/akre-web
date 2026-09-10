import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles, User, Award, ArrowRight, ShieldCheck, BookOpen } from "lucide-react";

import { dpsMembersData } from "@/data/dps";

export default function ProfilDPSPage() {
  return (
    <div className="bg-surface-bg min-h-screen">
      {/* Header Banner */}
      <div className="relative w-full bg-[#3A9D9A] text-white py-10 sm:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <Link
              href="/kesyariahan"
              className="text-xs text-teal-100 hover:text-white transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Menu Kesyariahan</span>
            </Link>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-3 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STRUKTUR KESYARIAHAN</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2">
            Profil DPS & Komite Syariah
          </h1>
          <p className="text-xs sm:text-sm text-teal-50 max-w-xl leading-relaxed">
            Mengenal jajaran Dewan Pengawas Syariah dan Komite Syariah RS Ridhoka Salma yang memastikan seluruh layanan medis dan operasional sesuai prinsip Islam.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dpsMembersData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Dummy Image */}
                <div className="relative w-full aspect-[4/3] bg-[#edf6f5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  {/* Badge Pill on Image */}
                  <div className="absolute bottom-3.5 left-3.5">
                    <span className="inline-block bg-white/95 backdrop-blur-xs text-[#2A7B78] text-xs font-bold px-3 py-1 rounded-lg shadow-xs border border-gray-100">
                      {member.badge}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3.5">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-[#3A9D9A] transition-colors leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">
                      {member.code}
                    </p>
                  </div>

                  {/* Metadata: Experience & Focus */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-5 h-5 rounded-full bg-[#e6f6f5] text-[#3A9D9A] flex items-center justify-center flex-shrink-0">
                        <Award className="w-3 h-3" />
                      </div>
                      <span className="truncate">{member.experience}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-5 h-5 rounded-full bg-[#e6f6f5] text-[#3A9D9A] flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-3 h-3" />
                      </div>
                      <span className="truncate">{member.focus}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 pt-0">
                <Link
                  href={`/kesyariahan/profil-dps/${member.slug}`}
                  className="w-full bg-[#3A9D9A] hover:bg-[#2A7B78] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Lihat Profil</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

