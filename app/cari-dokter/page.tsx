"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Plus, User, ArrowRight } from "lucide-react";

interface DoctorItem {
  id: string;
  name: string;
  specialtyCode: string;
  specialtyBadge: string;
  experience: string;
  poli: string;
  image: string;
  slug: string;
}

const dummyDoctors: DoctorItem[] = [
  // Poster 1: Saraf & Anak
  {
    id: "doc-nurita",
    name: "dr. Nurita H., Sp.S",
    specialtyCode: "Sp.S",
    specialtyBadge: "Spesialis Saraf",
    experience: "13 Tahun Pengalaman",
    poli: "Poli Saraf",
    image: "/assets/profil/nurita.png",
    slug: "saraf",
  },
  {
    id: "doc-kinanta",
    name: "dr. Kinanta, Sp.N",
    specialtyCode: "Sp.N",
    specialtyBadge: "Spesialis Saraf",
    experience: "8 Tahun Pengalaman",
    poli: "Poli Saraf / Neurologi",
    image: "/assets/profil/kinanta.png",
    slug: "saraf",
  },
  {
    id: "doc-nelly",
    name: "dr. Nelly R., Sp.A",
    specialtyCode: "Sp.A",
    specialtyBadge: "Spesialis Anak",
    experience: "12 Tahun Pengalaman",
    poli: "Poli Anak",
    image: "/assets/profil/nelly.png",
    slug: "anak",
  },
  {
    id: "doc-puni",
    name: "dr. Puni O., Sp.A",
    specialtyCode: "Sp.A",
    specialtyBadge: "Spesialis Anak",
    experience: "10 Tahun Pengalaman",
    poli: "Poli Anak",
    image: "/assets/profil/puni.png",
    slug: "anak",
  },
  {
    id: "doc-shifa",
    name: "dr. Shifa, M.Ked(Ped), Sp.A",
    specialtyCode: "Sp.A",
    specialtyBadge: "Spesialis Anak",
    experience: "9 Tahun Pengalaman",
    poli: "Poli Anak",
    image: "/assets/profil/shifa.png",
    slug: "anak",
  },

  // Poster 2 - Row 1
  {
    id: "doc-linda",
    name: "drg. Linda Puspita, Sp.KG",
    specialtyCode: "Sp.KG",
    specialtyBadge: "Spesialis Konservasi Gigi",
    experience: "11 Tahun Pengalaman",
    poli: "Poli Gigi & Mulut",
    image: "/assets/profil/linda.png",
    slug: "gigi",
  },
  {
    id: "doc-ferry",
    name: "dr. Ferry H., Sp. THT-KL",
    specialtyCode: "Sp.THT-KL",
    specialtyBadge: "Spesialis THT-KL",
    experience: "14 Tahun Pengalaman",
    poli: "Poli THT",
    image: "/assets/profil/ferry.png",
    slug: "tht",
  },
  {
    id: "doc-gema",
    name: "dr. Gema Putra, Sp.B",
    specialtyCode: "Sp.B",
    specialtyBadge: "Spesialis Bedah Umum",
    experience: "12 Tahun Pengalaman",
    poli: "Poli Bedah",
    image: "/assets/profil/gema.png",
    slug: "bedah-umum",
  },
  {
    id: "doc-alifarhan",
    name: "dr. Ali Farhan, Sp.B",
    specialtyCode: "Sp.B",
    specialtyBadge: "Spesialis Bedah Umum",
    experience: "15 Tahun Pengalaman",
    poli: "Poli Bedah",
    image: "/assets/profil/ali-farhan.png",
    slug: "bedah-umum",
  },

  // Poster 2 - Row 2
  {
    id: "doc-sukirman",
    name: "dr. Sukirman, Sp.M",
    specialtyCode: "Sp.M",
    specialtyBadge: "Spesialis Mata",
    experience: "15 Tahun Pengalaman",
    poli: "Poli Mata",
    image: "/assets/profil/sukirman.png",
    slug: "mata",
  },
  {
    id: "doc-zecky",
    name: "dr. Zecky E., T., Sp.OT, MARS",
    specialtyCode: "Sp.OT",
    specialtyBadge: "Spesialis Bedah Orthopaedi",
    experience: "16 Tahun Pengalaman",
    poli: "Poli Ortopedi",
    image: "/assets/profil/zecky.png",
    slug: "ortopedi",
  },
  {
    id: "doc-firmansyah",
    name: "dr. Firmansyah, Sp. OT",
    specialtyCode: "Sp.OT",
    specialtyBadge: "Dokter Spesialis Orthopedi",
    experience: "12 Tahun Pengalaman",
    poli: "Poli Ortopedi",
    image: "/assets/profil/firmansyah.png",
    slug: "ortopedi",
  },
  {
    id: "doc-kurniadi",
    name: "dr. Kurniadi Yusuf S., Sp. U",
    specialtyCode: "Sp.U",
    specialtyBadge: "Spesialis Urologi",
    experience: "10 Tahun Pengalaman",
    poli: "Poli Urologi",
    image: "/assets/profil/kurniadi.png",
    slug: "urologi",
  },

  // Poster 2 - Row 3
  {
    id: "doc-margaretha",
    name: "dr. Margaretha, Sp.KFR",
    specialtyCode: "Sp.KFR",
    specialtyBadge: "Spesialis Kedokteran Fisik & Rehabilitasi",
    experience: "13 Tahun Pengalaman",
    poli: "Poli Rehabilitasi Medik",
    image: "/assets/profil/margaretha.png",
    slug: "rehabilitasi-medik",
  },
  {
    id: "doc-hotman",
    name: "dr. Hotman, Sp.An",
    specialtyCode: "Sp.An",
    specialtyBadge: "Spesialis Anestesi",
    experience: "14 Tahun Pengalaman",
    poli: "Anestesi & Terapi Intensif",
    image: "/assets/profil/hotman.png",
    slug: "bedah-umum",
  },
  {
    id: "doc-ina",
    name: "dr. Ina S., Sp.An",
    specialtyCode: "Sp.An",
    specialtyBadge: "Spesialis Anestesi",
    experience: "11 Tahun Pengalaman",
    poli: "Anestesi & Rawat Kritis",
    image: "/assets/profil/ina.png",
    slug: "bedah-umum",
  },
  {
    id: "doc-ryan",
    name: "dr. Ryan B. R., Sp.PK, MMRS",
    specialtyCode: "Sp.PK",
    specialtyBadge: "Penanggung Jawab Lab.",
    experience: "12 Tahun Pengalaman",
    poli: "Laboratorium & Patologi Klinik",
    image: "/assets/profil/ryan-lab.png",
    slug: "penyakit-dalam",
  },
  {
    id: "doc-dian",
    name: "dr. Dian A., Sp.Rad",
    specialtyCode: "Sp.Rad",
    specialtyBadge: "Spesialis Radiologi",
    experience: "16 Tahun Pengalaman",
    poli: "Radiologi & Diagnostik",
    image: "/assets/profil/dian.png",
    slug: "saraf",
  },

  // Poster 2 - Row 4
  {
    id: "doc-heru",
    name: "drg. Heru",
    specialtyCode: "drg.",
    specialtyBadge: "Gigi & Mulut",
    experience: "15 Tahun Pengalaman",
    poli: "Poli Gigi & Mulut",
    image: "/assets/profil/heru.png",
    slug: "gigi",
  },
  {
    id: "doc-arif",
    name: "drg. Arif",
    specialtyCode: "drg.",
    specialtyBadge: "Gigi & Mulut",
    experience: "10 Tahun Pengalaman",
    poli: "Poli Gigi & Mulut",
    image: "/assets/profil/arif.png",
    slug: "gigi",
  },
  {
    id: "doc-bening",
    name: "drg. Bening",
    specialtyCode: "drg.",
    specialtyBadge: "Gigi & Mulut",
    experience: "8 Tahun Pengalaman",
    poli: "Poli Gigi & Mulut",
    image: "/assets/profil/bening.png",
    slug: "gigi",
  },
  {
    id: "doc-ryan-gigi",
    name: "dr. Ryan B. R., Sp.PK, MMRS",
    specialtyCode: "Sp.PK",
    specialtyBadge: "Gigi & Mulut",
    experience: "12 Tahun Pengalaman",
    poli: "Poli Gigi & Mulut",
    image: "/assets/profil/ryan-gigi.png",
    slug: "gigi",
  },
  {
    id: "doc-tuti",
    name: "dr. Tuti H., M.Biomed (AAM)",
    specialtyCode: "M.Biomed",
    specialtyBadge: "Dokter Kecantikan",
    experience: "10 Tahun Pengalaman",
    poli: "Klinik Estetika & Kulit",
    image: "/assets/profil/tuti.png",
    slug: "rehabilitasi-medik",
  },

  // Poster 2 - Row 5
  {
    id: "doc-murniati",
    name: "dr. Murniati, Sp. OG",
    specialtyCode: "Sp.OG",
    specialtyBadge: "Spesialis Obstetri dan Ginekologi",
    experience: "15 Tahun Pengalaman",
    poli: "Poli Kandungan & Kebidanan",
    image: "/assets/profil/murniati.png",
    slug: "kebidanan",
  },
  {
    id: "doc-djoni",
    name: "dr. Djoni N., Sp. OG (K)",
    specialtyCode: "Sp.OG (K)",
    specialtyBadge: "Spesialis Obstetri dan Ginekologi",
    experience: "20 Tahun Pengalaman",
    poli: "Poli Kandungan (Konsultan)",
    image: "/assets/profil/djoni.png",
    slug: "kebidanan",
  },
  {
    id: "doc-rita",
    name: "dr. Rita F., Sp.OG",
    specialtyCode: "Sp.OG",
    specialtyBadge: "Spesialis Obstetri dan Ginekologi",
    experience: "12 Tahun Pengalaman",
    poli: "Poli Kandungan & Kebidanan",
    image: "/assets/profil/rita.png",
    slug: "kebidanan",
  },
  {
    id: "doc-tantrie",
    name: "dr. Tantrie D., Sp.P",
    specialtyCode: "Sp.P",
    specialtyBadge: "Spesialis Paru",
    experience: "11 Tahun Pengalaman",
    poli: "Poli Paru",
    image: "/assets/profil/tantrie.png",
    slug: "paru",
  },

  // Poster 2 - Row 6
  {
    id: "doc-driyarkara",
    name: "dr. Driyarkara, Sp.PD",
    specialtyCode: "Sp.PD",
    specialtyBadge: "Spesialis Penyakit Dalam",
    experience: "16 Tahun Pengalaman",
    poli: "Poli Penyakit Dalam",
    image: "/assets/profil/driyarkara.png",
    slug: "penyakit-dalam",
  },
  {
    id: "doc-muhipah",
    name: "dr. Muhipah, Sp.PD",
    specialtyCode: "Sp.PD",
    specialtyBadge: "Spesialis Penyakit Dalam",
    experience: "14 Tahun Pengalaman",
    poli: "Poli Penyakit Dalam",
    image: "/assets/profil/muhipah.png",
    slug: "penyakit-dalam",
  },
  {
    id: "doc-teukuemir",
    name: "dr. Teuku Emir, Sp.PD",
    specialtyCode: "Sp.PD",
    specialtyBadge: "Spesialis Penyakit Dalam",
    experience: "11 Tahun Pengalaman",
    poli: "Poli Penyakit Dalam",
    image: "/assets/profil/teuku.png",
    slug: "penyakit-dalam",
  },
  {
    id: "doc-tania",
    name: "dr. Tania Andriani, Sp.JP",
    specialtyCode: "Sp.JP",
    specialtyBadge: "Spesialis Jantung & P. Darah",
    experience: "10 Tahun Pengalaman",
    poli: "Poli Jantung",
    image: "/assets/profil/tania.png",
    slug: "jantung",
  },
];

export default function CariDokterPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDoctors = useMemo(() => {
    if (!searchQuery.trim()) return dummyDoctors;
    const q = searchQuery.toLowerCase().trim();
    return dummyDoctors.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.specialtyBadge.toLowerCase().includes(q) ||
        d.specialtyCode.toLowerCase().includes(q) ||
        d.poli.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 max-w-3xl">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#e6f6f5] text-[#3A9D9A] text-xs font-bold uppercase tracking-wider mb-3">
            TIM MEDIS
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A7B78] leading-tight">
            Dokter Profesional<br />untuk Anda
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-3 leading-relaxed">
            Didukung oleh dokter berpengalaman dari berbagai bidang spesialisasi untuk memberikan pelayanan kesehatan terbaik bagi pasien.
          </p>

          {/* Search Bar */}
          <div className="mt-6 relative max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari dokter atau bidang spesialis..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#198782]/30 focus:border-[#198782] transition-all"
            />
          </div>
          <p className="text-xs text-gray-400 mt-2 font-medium">
            Menampilkan <span className="font-bold text-[#198782]">{filteredDoctors.length}</span> dari {dummyDoctors.length} dokter spesialis & tenaga medis
          </p>
        </div>

        {/* Doctor Cards Grid (31 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Image */}
                <div className="relative w-full aspect-square bg-[#edf6f5] overflow-hidden">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover object-bottom group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  {/* Specialty Pill Badge on Image */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-block bg-white/95 backdrop-blur-xs text-[#2A7B78] text-xs font-bold px-3 py-1 rounded-lg shadow-xs border border-gray-100">
                      {doc.specialtyBadge}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3.5">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-[#3A9D9A] transition-colors leading-snug">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">
                      {doc.specialtyCode}
                    </p>
                  </div>

                  {/* Metadata: Experience & Poli */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-5 h-5 rounded-full bg-[#e6f6f5] text-[#3A9D9A] flex items-center justify-center flex-shrink-0">
                        <User className="w-3 h-3" />
                      </div>
                      <span>{doc.experience}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-5 h-5 rounded-full bg-[#e6f6f5] text-[#3A9D9A] flex items-center justify-center flex-shrink-0">
                        <Plus className="w-3 h-3" />
                      </div>
                      <span>{doc.poli}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 pt-0">
                <Link
                  href={`/spesialis-kami/${doc.slug}`}
                  className="w-full bg-[#3A9D9A] hover:bg-[#2A7B78] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Lihat Profil</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

