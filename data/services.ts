export interface ServicePackage {
  name: string;
  price?: string;
  description: string;
  items: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  badge?: string;
  category?: string;
  description: string;
  detailedDescription?: string[];
  benefits?: string[];
  packages?: ServicePackage[];
  doctorTeam?: string;
  iconName?: string;
}

export const featuredServices: ServiceItem[] = [
  {
    id: "mcu",
    title: "Medical Check Up (MCU)",
    subtitle: "Pemeriksaan Kesehatan Preventif & Skrining Terpadu",
    image: "/assets/fasilitas/rawatjalan.jpg",
    badge: "Preventive Care",
    category: "Pemeriksaan & Skrining",
    description: "Pemeriksaan kesehatan menyeluruh untuk mendeteksi dini faktor risiko penyakit, skrining kesehatan calon pengantin (Pra-Nikah), dan evaluasi kesehatan berkala karyawan korporat.",
    detailedDescription: [
      "Layanan Medical Check Up (MCU) RS Ridhoka Salma dirancang untuk memberikan gambaran komprehensif mengenai status kesehatan Anda. Dilengkapi sarana laboratorium otomatis, radiologi digital, EKG, serta evaluasi oleh dokter spesialis dan dokter penguji kesehatan.",
      "Hasil pemeriksaan disajikan dalam buku laporan rekam medis yang rapi disertai rekomendasi pola hidup sehat dan konsultasi dokter langsung.",
    ],
    benefits: [
      "Paket Pra-Nikah (Screening Pranikah Calon Pengantin)",
      "Paket MCU Karyawan & Skrining Calon Tenaga Kerja (Korporasi)",
      "Paket Skrining Jantung, Diabetes, & Sindrom Metabolik",
      "Pemeriksaan Laboratorium, Rontgen Thorax, & EKG Rekam Jantung",
    ],
    doctorTeam: "Dokter Spesialis Penyakit Dalam, Dokter Umum & Tim Lab",
    iconName: "Stethoscope",
  },
  {
    id: "tumbuh-kembang",
    title: "Klinik Tumbuh Kembang Anak",
    subtitle: "Deteksi Dini & Stimulasi Tumbuh Kembang Buah Hati",
    image: "/assets/fasilitas/anak2.png",
    badge: "Pediatric Development Center",
    category: "Ibu & Anak",
    description: "Layanan konsultasi spesialis anak, psikolog anak, fisioterapi pediatrik, dan terapi wicara untuk mendukung tumbuh kembang optimal dan mengatasi keterlambatan perkembangan anak.",
    detailedDescription: [
      "Klinik Tumbuh Kembang RS Ridhoka Salma memberikan evaluasi menyeluruh terhadap aspek motorik kasar, motorik halus, bahasa, komunikasi, kognitif, dan sosialisasi anak.",
      "Didukung ruang terapi ramah anak dengan alat stimulasi sensorik integrasi yang aman dan menyenangkan.",
    ],
    benefits: [
      "Penanganan Speech Delay (Keterlambatan Bicara & Bahasa)",
      "Sensory Integration & Fisioterapi Pediatrik",
      "Skrining Autisme, ADHD, & Gangguan Belajar Anak",
      "Konsultasi Nutrisi & Pemantauan Grafik Berat/Tinggi Badan",
    ],
    doctorTeam: "Dokter Spesialis Anak, Fisioterapis, & Terapis Wicara",
    iconName: "Baby",
  },
  {
    id: "rose-aesthetic",
    title: "Rose Aesthetic Clinic",
    subtitle: "Klinik Kecantikan Medis & Perawatan Kulit Syariah",
    image: "/assets/layanan/rose.png",
    badge: "Aesthetic & Skincare",
    category: "Estetika Medis",
    description: "Perawatan estetika dan kesehatan kulit wajah yang aman, higienis, berlandaskan prinsip syariah di bawah pengawasan langsung dokter spesialis kulit dan dokter estetika berpengalaman.",
    detailedDescription: [
      "Rose Aesthetic Clinic memadukan teknologi perawatan kulit medis modern dengan formulasi produk bersertifikat halal BPOM.",
      "Prosedur perawatan dilakukan dalam ruangan privat yang nyaman dengan menjaga privasi aurat pasien secara maksimal.",
    ],
    benefits: [
      "Medical Facial & Deep Cleansing Treatment",
      "Brightening Booster & Skin Rejuvenation Therapy",
      "Penanganan Jerawat (Acne Treatment) & Bekas Luka",
      "Konsultasi Masalah Flek & Hiperpigmentasi Kulit",
    ],
    doctorTeam: "Dokter Spesialis Kulit & Kelamin / Dokter Estetika",
    iconName: "Sparkles",
  },
];

export const allServices: ServiceItem[] = [
  ...featuredServices,
  {
    id: "mom-and-baby-spa",
    title: "Mom & Baby Spa Syariah",
    subtitle: "Relaksasi & Stimulasi Holistik untuk Ibu & Bayi",
    image: "/assets/layanan/baby.jpeg",
    badge: "Mom & Baby Care",
    category: "Ibu & Anak",
    description: "Layanan hidroterapi bayi (baby swim), baby massage untuk meningkatkan nafsu makan dan pola tidur lelap, serta pijat laktasi dan perawatan relaksasi pasca melahirkan bagi bunda.",
    detailedDescription: [
      "Ditangani oleh bidan dan terapis bersertifikasi dengan teknik pijat bayi yang aman, steril, dan lembut.",
      "Membantu melancarkan produksi ASI bunda, meredakan ketegangan otot pasca melahirkan, dan memperkuat bonding ibu dan anak.",
    ],
    benefits: [
      "Baby Hydrotherapy (Berenang) & Baby Massage Relaksasi",
      "Pijat Laktasi (Breast Care) Melancarkan ASI",
      "Pijat Pasca Persalinan (Postpartum Massage)",
      "Perawatan Tali Pusar & Edukasi Memandikan Bayi Baru Lahir",
    ],
    doctorTeam: "Bidan Profesional & Terapis Mom-Baby Bersertifikat",
    iconName: "Heart",
  },
  {
    id: "senam-hamil",
    title: "Senam Hamil & Edukasi Persalinan",
    subtitle: "Persiapan Fisik & Mental Menghadapi Persalinan Bahagia",
    image: "/assets/layanan/senam.jpeg",
    badge: "Maternity Class",
    category: "Persalinan & Kehamilan",
    description: "Kelas latihan pernapasan, relaksasi panggul, postur tubuh ibu hamil, serta panduan praktis persiapan melahirkan normal maupun metode ERACS dalam bimbingan bidan berpengalaman.",
    detailedDescription: [
      "Senam hamil membantu mengurangi keluhan nyeri punggung, melancarkan sirkulasi darah, melatih otot panggul, serta mempersiapkan posisi jalan lahir bayi secara optimal.",
      "Dilengkapi sesi sharing seputar inisiasi menyusu dini (IMD) dan bimbingan doa-doa melahirkan secara Islami.",
    ],
    benefits: [
      "Latihan Pernapasan & Teknik Meredakan Nyeri Kontraksi",
      "Latihan Fleksibilitas Otot Panggul & Senam Kegel",
      "Edukasi Persalinan Ramah Syariah & Metode ERACS",
      "Konsultasi Kesiapan Menyusui Eksklusif (ASI)",
    ],
    doctorTeam: "Bidan Spesialis Maternitas & Konselor Laktasi",
    iconName: "Activity",
  },
  {
    id: "vaksinasi",
    title: "Layanan Vaksinasi Lengkap & Internasional",
    subtitle: "Imunisasi Anak, Dewasa, Haji & Umroh (ICV)",
    image: "/assets/layanan/vaksin.jpg",
    badge: "Official Vaccination",
    category: "Pemeriksaan & Imunisasi",
    description: "Pelayanan vaksinasi anak sesuai jadwal IDAI, vaksin dewasa, serta vaksin wajib perjalanan luar negeri/haji & umroh bersertifikat resmi International Certificate of Vaccination (ICV) Kemenkes RI.",
    detailedDescription: [
      "Menyediakan vaksin berkualitas tinggi yang terjaga dalam rantai dingin (cold chain) standar internasional untuk menjamin potensi vaksin.",
      "Pemberian vaksin dilakukan oleh dokter dengan skrining pra-vaksinasi menyeluruh.",
    ],
    benefits: [
      "Vaksin Meningitis Meningokokus & Influenza (Haji & Umroh / ICV)",
      "Vaksin Kanker Serviks (HPV) & Hepatitis B Dewasa",
      "Vaksin Pneumokokus (PCV), Tifoid, & Cacar Air",
      "Imunisasi Dasar & Lanjutan Lengkap Bayi/Anak (IDAI)",
    ],
    doctorTeam: "Dokter Spesialis Anak & Dokter Vaksinator Berlisensi",
    iconName: "ShieldCheck",
  },
];

