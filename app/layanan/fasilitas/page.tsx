import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { allFacilities } from "@/data/facilities";

export default function FasilitasPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-primary">Fasilitas Medis RS Ridhoka Salma</h1>
          <p className="text-gray-600 text-sm mt-1">Layanan fasilitas medis lengkap untuk kesehatan keluarga Anda</p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allFacilities.map((fac) => (
          <div key={fac.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md transition-shadow">
            <div className="relative w-full aspect-[4/3]">
              <Image src={fac.image} alt={fac.title} fill className="object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800">{fac.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
