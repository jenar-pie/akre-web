export interface Facility {
  id: string;
  title: string;
  image: string;
  description?: string;
}

export const featuredFacilities: Facility[] = [
  {
    id: "igd",
    title: "IGD 24 Jam",
    image: "/assets/fasilitas/igd.jpg",
    description: "Layanan gawat darurat 24 jam dengan tim medis siaga dan fasilitas penanganan cepat."
  },
  {
    id: "icu",
    title: "ICU",
    image: "/assets/fasilitas/icu.jpg",
    description: "Ruang perawatan intensif dengan peralatan pemantauan medis terkini."
  },
  {
    id: "nicu",
    title: "NICU",
    image: "/assets/fasilitas/nicu.jpg",
    description: "Perawatan intensif khusus untuk bayi baru lahir yang membutuhkan perawatan medis khusus."
  }
];

export const allFacilities: Facility[] = [
  ...featuredFacilities,
  {
    id: "fisioterapi",
    title: "Fisioterapi",
    image: "/assets/fasilitas/fisioterapi.jpg"
  },
  {
    id: "kamar-operasi",
    title: "Kamar Operasi",
    image: "/assets/fasilitas/kamar-operasi.jpg"
  },
  {
    id: "laboratorium",
    title: "Laboratorium",
    image: "/assets/fasilitas/laboratorium.jpg"
  },
  {
    id: "picu",
    title: "PICU",
    image: "/assets/fasilitas/picu.jpg"
  },
  {
    id: "poliklinik",
    title: "Poliklinik Spesialis",
    image: "/assets/fasilitas/poliklinik.jpg"
  },
  {
    id: "radiologi",
    title: "Radiologi",
    image: "/assets/fasilitas/radiologi.jpg"
  },
  {
    id: "ruang-bersalin",
    title: "Ruang Bersalin",
    image: "/assets/fasilitas/ruang-bersalin.jpg"
  }
];
