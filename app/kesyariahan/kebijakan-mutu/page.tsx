import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export default function KebijakanMutuPage() {
  const policies = [
    "Menjamin seluruh pelayanan medis dan keperawatan berlandaskan nilai-nilai etika kedokteran Islam dan fatwa DSN-MUI.",
    "Menjaga privasi, kehormatan, dan batas aurat pasien pria dan wanita selama masa rawat inap dan tindakan medis.",
    "Menyediakan konsumsi makanan dan minuman pasien yang 100% tersertifikasi halal dan bergizi seimbang.",
    "Mengedepankan bimbingan rohani Islam, dzikir kesembuhan, dan pendampingan ibadah shalat bagi pasien.",
    "Menerapkan sistem pengelolaan keuangan, transaksi, dan akad-akad syariah yang terbebas dari riba, gharar, dan maysir.",
  ];

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
            <span>STANDAR MUTU</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Kebijakan Mutu Syariah</h1>
          <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
            Pedoman tata kelola dan standar operasional pelayanan kesehatan syariah di RS Ridhoka Salma.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-card space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Komitmen Rumah Sakit Syariah</h2>
              <p className="text-xs text-gray-500">Tersertifikasi DSN-MUI & MUKISI</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {policies.map((p, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-bg border border-gray-100 text-xs sm:text-sm text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
