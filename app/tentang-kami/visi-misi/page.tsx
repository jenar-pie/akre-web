import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Target,
  Compass,
  HeartPulse,
  TrendingUp,
  Users,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  Shield,
  Clock,
  Zap,
  Smile,
  ArrowRight,
  Quote,
} from "lucide-react";
import AboutHero from "@/components/about/AboutHero";
import AboutNavTabs from "@/components/about/AboutNavTabs";
import { visiMisiData } from "@/data/about";

export const metadata: Metadata = {
  title: "Visi, Misi & Budaya Kerja RS Ridhoka Salma",
  description: "Visi, 4 Misi Strategis, Moto Pelayanan, serta Tata Nilai Budaya Kerja I.K.H.L.A.S RS Ridhoka Salma Cikarang.",
};

const missionIcons: Record<string, React.ElementType> = {
  HeartPulse,
  TrendingUp,
  Users,
  Sparkles,
};

const valueIcons: Record<string, React.ElementType> = {
  HeartHandshake,
  CheckCircle2,
  Shield,
  Clock,
  Zap,
  Smile,
};

export default function VisiMisiPage() {
  return (
    <div className="bg-surface-bg min-h-screen">
      {/* Hero Banner */}
      <AboutHero
        badge="Landasan Nilai & Arah Kebijakan"
        title="Visi, Misi & Tata Nilai Budaya Kerja"
        description="Pedoman fundamental yang mengarahkan setiap langkah pengabdian, standar pelayanan medis, dan integritas syariah seluruh insan RS Ridhoka Salma."
        breadcrumbs={[
          { label: "Tentang Kami", href: "/tentang-kami" },
          { label: "Visi & Misi" },
        ]}
      />

      {/* Subnav Tabs */}
      <AboutNavTabs />

      {/* Main Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">
        
        {/* Moto Pelayanan Bar */}
        <section className="bg-gradient-to-r from-primary-dark via-primary to-teal-800 rounded-2xl p-6 sm:p-8 text-white shadow-card relative overflow-hidden">
          <div className="absolute right-4 -bottom-6 opacity-10 pointer-events-none">
            <Quote className="w-40 h-40 text-white" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-white/20 text-teal-100 text-xs font-semibold rounded-full mb-3">
              MOTO PELAYANAN
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 text-white">
              &ldquo;{visiMisiData.moto}&rdquo;
            </h2>
            <p className="text-xs sm:text-sm text-teal-50/90 leading-relaxed max-w-2xl">
              {visiMisiData.mottoTranslation}
            </p>
          </div>
        </section>

        {/* Visi Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-card relative overflow-hidden">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>VISI RUMAH SAKIT</span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-snug">
              &ldquo;{visiMisiData.visi}&rdquo;
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {visiMisiData.visiDescription}
            </p>
          </div>
        </section>

        {/* Misi Section */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
              <Target className="w-3.5 h-3.5" />
              <span>4 PILAR MISI STRATEGIS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Misi Pelayanan RS Ridhoka Salma
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Komitmen terukur dalam mewujudkan pelayanan kesehatan paripurna dan bernuansa syariah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visiMisiData.misiList.map((misi) => {
              const IconComponent = missionIcons[misi.iconName] || Target;

              return (
                <div
                  key={misi.number}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-card hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shadow-xs">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                        0{misi.number}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3 leading-snug">
                      {misi.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {misi.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="pt-4 border-t border-gray-100">
                    <ul className="space-y-2">
                      {misi.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Budaya Kerja: I.B.A.D.A.H */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-card">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-green/10 text-accent-green text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TATA NILAI PERUSAHAAN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {visiMisiData.budayaKerja.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              {visiMisiData.budayaKerja.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiMisiData.budayaKerja.values.map((val) => {
              const IconComp = valueIcons[val.iconName] || CheckCircle2;

              return (
                <div
                  key={val.letter + val.title}
                  className="bg-surface-bg/60 rounded-xl p-5 sm:p-6 border border-gray-200/70 hover:border-primary/50 hover:bg-white hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-lg bg-primary text-white font-extrabold text-xl flex items-center justify-center shadow-xs flex-shrink-0">
                      {val.letter}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {val.title}
                      </h3>
                      <span className="text-xs font-medium text-accent-green">
                        {val.meaning}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mt-2">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-primary-dark via-primary to-teal-700 rounded-2xl p-6 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium text-teal-100 mb-2">
              Tata Kelola Rumah Sakit
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Struktur Organisasi & Dewan Pengawas Syariah
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              Ketahui jajaran pimpinan, dewan pengawas syariah, dan komite medis yang mengawal profesionalitas pelayanan kami.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap">
            <Link
              href="/tentang-kami/struktur-organisasi"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-dark px-5 py-3 rounded-xl font-bold text-sm transition-colors shadow-xs"
            >
              <span>Struktur Organisasi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tentang-kami/akreditasi"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              <span>Akreditasi & Prestasi</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
