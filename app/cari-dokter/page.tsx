"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, UserCheck, Clock, Calendar, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { specialistsData } from "@/data/specialists";

export default function CariDokterPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const allDoctors = useMemo(() => {
    const list: Array<{
      name: string;
      title: string;
      subspecialty?: string;
      schedule?: string;
      specialtyTitle: string;
      specialtySlug: string;
      code: string;
    }> = [];

    specialistsData.forEach((sp) => {
      sp.doctors.forEach((doc) => {
        list.push({
          ...doc,
          specialtyTitle: sp.title,
          specialtySlug: sp.slug,
          code: sp.code,
        });
      });
    });

    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase().trim();
    return list.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.specialtyTitle.toLowerCase().includes(q) ||
        d.code.toLowerCase().includes(q) ||
        (d.subspecialty && d.subspecialty.toLowerCase().includes(q))
    );
  }, [searchQuery]);

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
            <span>JADWAL & PRAKTIK</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Cari Dokter Spesialis</h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Temukan jadwal praktik dokter spesialis dan buat janji temu konsultasi dengan mudah.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Search */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Ketik nama dokter atau bidang spesialis..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-bg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        {/* Doctor List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allDoctors.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-50 text-primary border border-primary/20">
                    {doc.code}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1">{doc.name}</h3>
                <p className="text-xs font-semibold text-primary mb-2">{doc.specialtyTitle}</p>
                {doc.schedule && (
                  <div className="flex items-center gap-1.5 text-xs text-gray-600 bg-surface-bg p-2.5 rounded-xl border border-gray-100 mb-3">
                    <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>{doc.schedule}</span>
                  </div>
                )}
              </div>
              <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                <Link
                  href={`/spesialis-kami/${doc.specialtySlug}`}
                  className="flex-1 text-center py-2 rounded-lg bg-surface-bg text-gray-700 hover:bg-gray-100 text-xs font-semibold border border-gray-200"
                >
                  Info Poliklinik
                </Link>
                <Link
                  href="/janji-temu"
                  className="flex-1 text-center py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-semibold shadow-xs"
                >
                  Buat Janji
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
