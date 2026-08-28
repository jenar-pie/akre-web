export interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export interface DropdownItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Tentang Kami",
    href: "/tentang-kami",
    dropdown: [
      { label: "Sejarah", href: "/tentang-kami/sejarah" },
      { label: "Visi Misi", href: "/tentang-kami/visi-misi" },
      { label: "Struktur Organisasi", href: "/tentang-kami/struktur-organisasi" },
      { label: "Akreditasi dan Penghargaan", href: "/tentang-kami/akreditasi" },
    ],
  },
  {
    label: "Layanan",
    href: "/layanan",
    dropdown: [
      { label: "Fasilitas", href: "/layanan/fasilitas" },
      { label: "Layanan Unggulan", href: "/layanan/layanan-unggulan" },
      { label: "Rawat Inap", href: "/layanan/rawat-inap" },
    ],
  },
  {
    label: "Spesialis Kami",
    href: "/spesialis-kami",
    dropdown: [
      { label: "Anak", href: "/spesialis-kami/anak" },
      { label: "Kebidanan dan Kandungan", href: "/spesialis-kami/kebidanan" },
      { label: "Penyakit Dalam", href: "/spesialis-kami/penyakit-dalam" },
      { label: "Bedah Umum", href: "/spesialis-kami/bedah-umum" },
      { label: "Saraf", href: "/spesialis-kami/saraf" },
      { label: "Lihat Semua", href: "/spesialis-kami" },
    ],
  },
  {
    label: "Informasi",
    href: "/informasi",
    dropdown: [
      { label: "Promosi", href: "/informasi/promosi" },
      { label: "Artikel Kesehatan", href: "/informasi/artikel-kesehatan" },
      { label: "Artikel Islami", href: "/informasi/artikel-islami" },
      { label: "E-leaflet", href: "/informasi/e-leaflet" },
      { label: "Event", href: "/informasi/event" },
      { label: "Karir", href: "/informasi/karir" },
    ],
  },
  {
    label: "Kesyariahan",
    href: "/kesyariahan",
    dropdown: [
      { label: "Kebijakan Mutu Syariah", href: "/kesyariahan/kebijakan-mutu" },
      { label: "Program Kesyariahan", href: "/kesyariahan/program" },
      { label: "Konsultan Syariah", href: "/kesyariahan/konsultan" },
      { label: "Profil DPS dan Komite Syariah", href: "/kesyariahan/profil-dps" },
    ],
  },
  { label: "Cari Dokter", href: "/cari-dokter" },
  { label: "Janji Temu", href: "/janji-temu" },
];

export const footerNavigation = {
  tentangKami: [
    { label: "Sejarah", href: "/tentang-kami/sejarah" },
    { label: "Visi Misi", href: "/tentang-kami/visi-misi" },
    { label: "Struktur Organisasi", href: "/tentang-kami/struktur-organisasi" },
    { label: "Akreditasi dan Penghargaan", href: "/tentang-kami/akreditasi" },
  ],
  layanan: [
    { label: "Fasilitas", href: "/layanan/fasilitas" },
    { label: "Layanan Unggulan", href: "/layanan/layanan-unggulan" },
    { label: "Rawat Inap", href: "/layanan/rawat-inap" },
  ],
  informasi: [
    { label: "Promosi", href: "/informasi/promosi" },
    { label: "Artikel Kesehatan", href: "/informasi/artikel-kesehatan" },
    { label: "Artikel Islami", href: "/informasi/artikel-islami" },
    { label: "Event", href: "/informasi/event" },
    { label: "Karir", href: "/informasi/karir" },
  ],
  kesyariahan: [
    { label: "Kebijakan Mutu Syariah", href: "/kesyariahan/kebijakan-mutu" },
    { label: "Program Kesyariahan", href: "/kesyariahan/program" },
    { label: "Konsultasi Syariah", href: "/kesyariahan/konsultan" },
    { label: "Profil DPS dan Komite Syariah", href: "/kesyariahan/profil-dps" },
  ],
};
