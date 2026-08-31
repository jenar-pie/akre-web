export interface PromotionItem {
  id: string;
  title: string;
  badge: string;
  period: string;
  priceBadge?: string;
  category: string;
  image: string;
  link: string;
  description?: string;
}

export const promotionsData: PromotionItem[] = [
  {
    id: "vaksin-meningitis",
    title: "Vaksin Meningitis & Influenza",
    badge: "Vaksin",
    period: "1 Mar - 30 Apr 2026",
    priceBadge: "Rp 595.000",
    category: "Vaksinasi",
    image: "/assets/layanan/vaksinasi.jpg",
    link: "/informasi/promosi",
    description: "Vaksin resmi bersertifikat ICV untuk jamaah umrah dan haji.",
  },
  {
    id: "promo-ramadhan-glowing",
    title: "Promo Ramadhan Glowing",
    badge: "Estetika",
    period: "1 - 31 Mar 2026",
    priceBadge: "Rp 195.000",
    category: "Estetika",
    image: "/assets/layanan/rose.jpeg",
    link: "/informasi/promosi",
    description: "Perawatan kulit wajah bersih dan segar di Rose Aesthetic Clinic.",
  },
  {
    id: "paket-maternity",
    title: "Paket Maternity Syariah",
    badge: "Persalinan",
    period: "Tahun 2026",
    priceBadge: "Rp 3.979.000",
    category: "Ibu & Anak",
    image: "/assets/fasilitas/ruang-bersalin.jpg",
    link: "/informasi/promosi",
    description: "Persalinan nyaman normal & Caesar ERACS ramah syariah.",
  },
  {
    id: "paket-mcu-sehat",
    title: "Paket MCU Sehat Prima",
    badge: "Check Up",
    period: "1 Feb - 31 Mei 2026",
    priceBadge: "Rp 350.000",
    category: "Pencegahan",
    image: "/assets/layanan/mcu.jpg",
    link: "/informasi/promosi",
    description: "Skrining kesehatan lengkap: lab darah, rontgen, dan konsultasi.",
  },
  {
    id: "promo-scaling-gigi",
    title: "Promo Scaling Gigi",
    badge: "Gigi",
    period: "1 - 30 Apr 2026",
    priceBadge: "Rp 250.000",
    category: "Klinik Gigi",
    image: "/assets/fasilitas/gigi.jpg",
    link: "/informasi/promosi",
    description: "Pembersihan karang gigi ultrasonik oleh dokter gigi ahli.",
  },
  {
    id: "paket-fisioterapi",
    title: "Paket Fisioterapi Nyeri",
    badge: "Fisioterapi",
    period: "1 Mar - 30 Jun 2026",
    priceBadge: "Rp 180.000",
    category: "Rehabilitasi",
    image: "/assets/fasilitas/fisio.jpg",
    link: "/informasi/promosi",
    description: "Terapi pemulihan nyeri sendi, otot, dan saraf terjepit.",
  },
];
