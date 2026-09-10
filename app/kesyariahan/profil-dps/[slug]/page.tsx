import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Home,
  ChevronRight,
  ShieldCheck,
  Calendar,
  GraduationCap,
  Briefcase,
  Check,
  Quote,
  ArrowLeft,
} from "lucide-react";
import { dpsMembersData, DPSMember } from "@/data/dps";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return dpsMembersData.flatMap((m) => [{ slug: m.slug }, { slug: m.id }]);
}

export default function DPSProfilePreviewPage({ params }: PageProps) {
  const member: DPSMember | undefined = dpsMembersData.find(
    (m) => m.slug === params.slug || m.id === params.slug
  );

  if (!member) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-b from-[#e6f4f2] via-[#eff8f7] to-[#e8f5f4] min-h-screen py-6 sm:py-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-500">
            <Link
              href="/"
              className="text-[#198782] hover:text-[#2A7B78] transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link
              href="/kesyariahan"
              className="text-[#198782] hover:underline"
            >
              Kesyariahan
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link
              href="/kesyariahan/profil-dps"
              className="text-[#198782] hover:underline"
            >
              Profil Dewan Pengawas Syariah
            </Link>
          </nav>

          <Link
            href="/kesyariahan/profil-dps"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#198782] hover:text-[#143231] bg-white/80 hover:bg-white px-3.5 py-1.5 rounded-full border border-teal-200/70 shadow-2xs transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali</span>
          </Link>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_35px_-5px_rgba(25,135,130,0.08)] border border-teal-100/70">
            {/* Portrait Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#edf6f5] shadow-xs border border-teal-50">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 33vw, 100vw"
                priority
              />
            </div>

            {/* Shield Badge */}
            <div className="mt-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50/90 text-[#198782] text-xs font-bold border border-teal-200/60 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#198782]" />
                <span>{member.badge}</span>
              </span>
            </div>

            {/* Name and Position */}
            <div className="mt-3.5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#143231] leading-tight tracking-tight">
                {member.name}
              </h1>
              <div className="text-xs sm:text-sm font-semibold text-gray-500 mt-1">
                {member.role}
              </div>
              <div className="text-xs font-bold text-[#198782] mt-0.5">
                {member.hospital}
              </div>
            </div>

            <hr className="my-5 border-gray-100" />

            {/* Birth Info */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#198782] flex items-center justify-center shrink-0 border border-teal-100">
                <Calendar className="w-5 h-5 text-[#198782]" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">
                  Tempat, Tanggal Lahir
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-800 mt-0.5">
                  {member.birthInfo}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Activities Cards */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Card 1: Riwayat Pendidikan */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_-5px_rgba(25,135,130,0.08)] border border-teal-100/70">
              {/* Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-[#198782] text-white flex items-center justify-center shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#198782]">
                    RIWAYAT PENDIDIKAN
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#143231] leading-tight">
                    Pendidikan
                  </h2>
                </div>
              </div>

              {/* Timeline Items */}
              <div className="relative pl-6 space-y-5 before:absolute before:left-[9px] before:top-3 before:bottom-3 before:w-0.5 before:bg-teal-200/80">
                {member.education.map((edu, idx) => (
                  <div key={idx} className="relative flex items-center gap-4 sm:gap-6">
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-3 border-[#198782] shrink-0 shadow-xs" />
                    <span className="inline-block px-3 py-1 rounded-lg bg-teal-50 text-[#198782] font-bold text-xs sm:text-sm shrink-0 border border-teal-100">
                      {edu.year}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">
                      {edu.degree}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Pengalaman & Aktivitas */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_-5px_rgba(25,135,130,0.08)] border border-teal-100/70 space-y-6">
              {/* Header */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#198782] text-white flex items-center justify-center shadow-xs">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#198782]">
                    PENGALAMAN & AKTIVITAS
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#143231] leading-tight">
                    Aktivitas
                  </h2>
                </div>
              </div>

              {/* Checkmark Activities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {member.activities.map((act, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#198782] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                      {act}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quote Card */}
              <div className="rounded-2xl bg-gradient-to-r from-teal-50/80 via-emerald-50/50 to-teal-50/80 p-5 sm:p-6 border border-teal-100/80">
                <div className="flex items-start gap-3.5">
                  <Quote className="w-7 h-7 text-[#198782] shrink-0 rotate-180 opacity-80" />
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-[#143d3b] italic leading-relaxed">
                      &ldquo;{member.quote}&rdquo;
                    </p>
                    <p className="text-xs font-bold text-[#198782]">
                      — {member.name}
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
