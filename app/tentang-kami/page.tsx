import Link from "next/link";
import { ArrowLeft, Info } from "lucide-react";

export default function TentangKamiPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 text-center min-h-[50vh] flex flex-col items-center justify-center">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
        <Info className="w-8 h-8" />
      </div>
      <h1 className="text-3xl font-bold text-primary mb-2">Tentang RS Ridhoka Salma</h1>
      <p className="text-gray-600 max-w-md mb-6">
        Informasi profil, sejarah, visi misi, dan keunggulan pelayanan syariah RS Ridhoka Salma.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-md font-medium text-sm transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Beranda</span>
      </Link>
    </div>
  );
}
