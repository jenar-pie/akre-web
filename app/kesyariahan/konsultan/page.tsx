import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { contacts } from "@/data/contacts";

export default function KonsultasiSyariahPage() {
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
            <span>KONSULTASI ISLAMI</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Konsultasi Syariah</h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Layanan bimbingan fiqih ibadah, etika medis Islam, dan konsultasi rohani bagi pasien dan keluarga.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-card max-w-2xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Konsultasi dengan Dewan Pengawas & Tim Syariah</h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Memiliki pertanyaan seputar hukum fiqih pengobatan, tata cara shalat orang sakit, atau akad layanan medis? Tim konsultan syariah kami siap memberikan pencerahan.
            </p>
          </div>
          <div className="pt-2">
            <a
              href={`https://wa.me/${contacts.whatsappNumber}?text=${encodeURIComponent("Halo Tim Kesyariahan RS Ridhoka Salma, saya ingin berkonsultasi mengenai bimbingan syariah.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Hubungi Konsultan Syariah via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
