import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Baby,
  Building2,
  ShieldCheck,
  Activity,
  Award,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  HeartHandshake,
  Calendar,
  Layers,
} from "lucide-react";
import AboutHero from "@/components/about/AboutHero";
import AboutNavTabs from "@/components/about/AboutNavTabs";
import { sejarahData } from "@/data/about";

export const metadata: Metadata = {
  title: "Sejarah RS Ridhoka Salma - Melayani dengan Hati dan Syariah",
  description: "Perjalanan RS Ridhoka Salma dari Rumah Bersalin tahun 2007 hingga menjadi Rumah Sakit Umum & Syariah terpercaya dan terakreditasi Paripurna di Cikarang, Bekasi.",
};

const iconMap: Record<string, React.ElementType> = {
  Baby,
  Building2,
  ShieldCheck,
  Activity,
  Award,
  Sparkles,
};

export default function SejarahPage() {
  return (
    <div className="bg-surface-bg min-h-screen">
      {/* Hero Header */}
      <AboutHero
        badge="Sejarah & Jejak Langkah"
        title="Sejarah & Perjalanan RS Ridhoka Salma"
        description="Menapaki lebih dari 17 tahun dedikasi melayani kesehatan masyarakat dengan ketulusan hati, integritas medis, dan nilai-nilai luhur syariah di Cikarang Barat, Bekasi."
        breadcrumbs={[
          { label: "Tentang Kami", href: "/tentang-kami" },
          { label: "Sejarah" },
        ]}
      />

      {/* Subnav Tabs */}
      <AboutNavTabs />

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">
        
        {/* Intro Story Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-card border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full pointer-events-none" />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Didirikan Tahun 2007</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {sejarahData.headline}
            </h2>
            
            <p className="text-base sm:text-lg text-primary font-medium mb-6">
              {sejarahData.subheadline}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              {sejarahData.storyIntro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Philosophy Box */}
            <div className="mt-8 p-5 sm:p-6 bg-gradient-to-r from-primary-light to-teal-50/50 rounded-xl border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-primary-dark mb-1">
                  Filosofi Pendirian
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 italic">
                  &ldquo;Keikhlasan Melayani Adalah Ibadahku — Menjadi ikhtiar kami dalam menghadirkan kesembuhan bagi setiap pasien dengan memadukan keunggulan medis dan kesejukan akhlak Islami.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats Counter */}
        <section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {sejarahData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 group text-center sm:text-left"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1 group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones Timeline */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Tonggak Sejarah</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Milestone & Perjalanan Perkembangan
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Transformasi bertahap dan pencapaian bermakna RS Ridhoka Salma dari waktu ke waktu.
            </p>
          </div>

          <div className="relative">
            {/* Center / Left line for timeline */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-teal-400 to-primary-dark -translate-x-1/2" />
            <div className="md:hidden absolute left-6 top-6 bottom-6 w-0.5 bg-primary/40" />

            <div className="space-y-8 sm:space-y-12">
              {sejarahData.milestones.map((milestone, idx) => {
                const IconComponent = iconMap[milestone.iconName] || Award;
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    } gap-6 md:gap-12`}
                  >
                    {/* Timeline Node Badge on Desktop */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 w-10 h-10 rounded-full bg-white border-4 border-primary shadow-md items-center justify-center z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent-gold" />
                    </div>

                    {/* Timeline Node Badge on Mobile */}
                    <div className="md:hidden absolute left-6 -translate-x-1/2 top-4 w-8 h-8 rounded-full bg-white border-3 border-primary shadow-xs flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-accent-gold" />
                    </div>

                    {/* Content Card */}
                    <div
                      className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${
                        isEven ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-card hover:shadow-lg transition-all duration-300 group relative">
                        {/* Header inside card */}
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            isEven ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                            Tahun {milestone.year}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                          {milestone.title}
                        </h3>

                        <h4 className="text-xs sm:text-sm font-semibold text-primary mb-3">
                          {milestone.subtitle}
                        </h4>

                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                          {milestone.description}
                        </p>

                        {/* Highlight list */}
                        <div className="pt-3 border-t border-gray-100">
                          <ul
                            className={`space-y-1.5 text-xs text-gray-700 ${
                              isEven ? "md:items-end" : ""
                            }`}
                          >
                            {milestone.highlights.map((h, i) => (
                              <li
                                key={i}
                                className={`flex items-center gap-2 ${
                                  isEven ? "md:flex-row-reverse" : ""
                                }`}
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-accent-green flex-shrink-0" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Empty space for opposite side on Desktop */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Navigation Bottom */}
        <section className="bg-gradient-to-r from-primary-dark via-primary to-teal-700 rounded-2xl p-6 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium text-teal-100 mb-2">
              Langkah Berikutnya
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Kenali Visi, Misi & Budaya Kerja Kami
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              Pelajari landasan nilai, pedoman mutu, dan komitmen syariah yang membimbing pelayanan kami setiap hari.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap">
            <Link
              href="/tentang-kami/visi-misi"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-dark px-5 py-3 rounded-xl font-bold text-sm transition-colors shadow-xs"
            >
              <span>Lihat Visi & Misi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cari-dokter"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              <span>Jadwal Dokter</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
