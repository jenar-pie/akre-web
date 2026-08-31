import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Download, Sparkles } from "lucide-react";

const leaflets = [
  { id: 1, title: "Panduan Persalinan Syariah & ERACS", category: "Kebidanan", size: "2.4 MB" },
  { id: 2, title: "Jadwal Imunisasi Anak & Balita", category: "Pediatri", size: "1.8 MB" },
  { id: 3, title: "Panduan Pola Hidup Sehat Pasien Diabetes", category: "Penyakit Dalam", size: "1.5 MB" },
  { id: 4, title: "Brosur Paket Medical Check Up (MCU)", category: "Check Up", size: "3.1 MB" },
  { id: 5, title: "Tata Tertib & Hak Pasien Rawat Inap", category: "Informasi Pasien", size: "1.2 MB" },
  { id: 6, title: "Panduan Fisioterapi & Bebas Nyeri", category: "Rehabilitasi", size: "2.0 MB" },
];

export default function ELeafletPage() {
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
            <span>UNDUH INFORMASI</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">E-Leaflet & Brosur Digital</h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Unduh brosur digital dan panduan edukasi kesehatan RS Ridhoka Salma secara praktis.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {leaflets.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-surface-bg text-gray-600 border border-gray-200">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">Ukuran file: PDF ({item.size})</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <button className="w-full inline-flex items-center justify-center gap-1.5 bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors shadow-xs">
                  <Download className="w-4 h-4" />
                  <span>Unduh Brosur</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
