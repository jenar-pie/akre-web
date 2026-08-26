import Link from "next/link";
import { ArrowLeft, Tag } from "lucide-react";
import { promotionsData } from "@/data/promotions";

export default function PromosiPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-primary">Promosi & Paket Kesehatan</h1>
          <p className="text-gray-600 text-sm mt-1">Penawaran harga terbaik paket kesehatan RS Ridhoka Salma</p>
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
        {promotionsData.map((promo) => (
          <div key={promo.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-xs p-6 flex flex-col justify-between">
            <div>
              <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {promo.category}
              </span>
              <h3 className="text-lg font-bold text-gray-800 mt-4">{promo.title}</h3>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <span className="bg-accent-red text-white text-xs font-bold px-3 py-1.5 rounded-full inline-block">
                {promo.priceBadge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
