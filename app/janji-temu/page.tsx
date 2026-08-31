"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Phone, CheckCircle2, Sparkles, MessageSquare } from "lucide-react";
import { contacts } from "@/data/contacts";
import { specialistsData } from "@/data/specialists";

export default function JanjiTemuPage() {
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [selectedSpecialist, setSelectedSpecialist] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo RS Ridhoka Salma, saya ingin membuat janji temu online:%0A- Nama Pasien: ${patientName}%0A- No HP/WA: ${patientPhone}%0A- Poliklinik: ${selectedSpecialist || "Umum"}%0A- Rencana Tanggal: ${appointmentDate}%0A- Keluhan/Catatan: ${notes || "-"}`;
    window.open(`https://wa.me/${contacts.whatsappLink.split("/").pop()}?text=${text}`, "_blank");
  };

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
            <span>RESERVASI ONLINE</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Buat Janji Temu Dokter</h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Daftar rawat jalan mandiri dengan cepat dan praktis tanpa perlu antre di loket pendaftaran.
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-card space-y-5">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Formulir Pendaftaran Janji Temu</h2>
          
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nama Lengkap Pasien *</label>
            <input
              type="text"
              required
              placeholder="Masukkan nama pasien"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nomor WhatsApp Aktif *</label>
            <input
              type="tel"
              required
              placeholder="Contoh: 081234567890"
              value={patientPhone}
              onChange={(e) => setPatientPhone(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Pilih Poliklinik Spesialis *</label>
              <select
                required
                value={selectedSpecialist}
                onChange={(e) => setSelectedSpecialist(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              >
                <option value="">-- Pilih Poliklinik --</option>
                {specialistsData.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title} ({s.code})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Rencana Tanggal Kunjungan *</label>
              <input
                type="date"
                required
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              >
              </input>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Keluhan atau Catatan Tambahan</label>
            <textarea
              rows={3}
              placeholder="Tuliskan keluhan singkat..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl text-sm transition-colors shadow-xs flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Kirim & Konfirmasi via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
