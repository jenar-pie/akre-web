export interface ServiceItem {
  id: string;
  title: string;
  image: string;
  description?: string;
  badge?: string;
}

export const featuredServices: ServiceItem[] = [
  {
    id: "mcu",
    title: "Medical Check Up (MCU)",
    image: "/assets/layanan/mcu.jpg",
    description: "Pemeriksaan kesehatan menyeluruh untuk pencegahan dan deteksi dini penyakit."
  },
  {
    id: "tumbuh-kembang",
    title: "Klinik Tumbuh Kembang",
    image: "/assets/layanan/klinik-tumbuh-kembang-anak.jpg",
    description: "Layanan stimulasi dan konsultasi spesialis untuk perkembangan optimal buah hati."
  },
  {
    id: "rose-aesthetic",
    title: "Rose Aesthetic Clinic",
    image: "/assets/layanan/mom-and-baby-spa.jpg",
    description: "Perawatan estetika dan kesehatan kulit yang aman, profesional, dan Islami."
  }
];

export const allServices: ServiceItem[] = [
  ...featuredServices,
  {
    id: "senam-hamil",
    title: "Senam Hamil & Edukasi Persalinan",
    image: "/assets/layanan/senam-hamil.jpg"
  },
  {
    id: "vaksinasi",
    title: "Layanan Vaksinasi Lengkap",
    image: "/assets/layanan/vaksinasi.jpg"
  }
];
