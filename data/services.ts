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

export const allServices: ServiceItem[] = [
  {
    id: "moms-club",
    title: "Mom's Club",
    subtitle: "Komunitas Edukasi Kehamilan, Senam Hamil & Mom-Baby Spa",
    image: "/assets/fasilitas/momsclub.jpg",
    badge: "Community & Wellness",
    category: "Ibu & Anak",
    description: "Wadah komunitas dan program holistik untuk calon ibu dan bunda tercinta. Menghadirkan kelas senam hamil, edukasi persalinan, baby spa & swim, pijat laktasi, serta seminar parenting Islami.",
    detailedDescription: [
      "Mom's Club mendampingi perjalanan keibuan mulai dari masa kehamilan hingga tumbuh kembang balita dengan dukungan tenaga bidan dan terapis bersertifikat.",
      "Menghubungkan para ibu dalam lingkungan komunitas yang positif, hangat, dan sarat edukasi kesehatan medis berlandaskan nilai syariah.",
    ],
    benefits: [
      "Kelas Senam Hamil & Panduan Teknik Persalinan Bahagia",
      "Baby Hydrotherapy (Berenang) & Baby Massage Relaksasi",
      "Pijat Laktasi (Breast Care) Pasca Melahirkan",
      "Komunitas Edukasi & Kuliah WhatsApp Bersama Dokter",
    ],
    doctorTeam: "Bidan Maternitas, Konselor Laktasi & Instruktur Senam Hamil",
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
  {
    id: "fasilitas-rawat-inap",
    title: "Fasilitas Rawat Inap Berkah",
    subtitle: "Kenyamanan Perawatan dengan Nuansa Islami & Privasi Terjaga",
    image: "/assets/fasilitas/rawat-inap-vvip.png",
    badge: "Inpatient Care",
    category: "Rawat Inap & Bedah",
    description: "Ruang rawat inap yang bersih, tenang, dan higienis mulai dari kelas Standard hingga VVIP, dilengkapi bimbingan doa & ibadah harian, makanan bergizi halal, dan penjagaan privasi pasien.",
    detailedDescription: [
      "Setiap kamar dirancang untuk kenyamanan istirahat dan percepatan kesembuhan pasien dengan standar sterilisasi dan protokol keselamatan medis yang ketat.",
      "Tersedia pendampingan bimbingan rohani Islam bagi pasien yang membutuhkan bantuan tayammum, sholat di tempat tidur, dan motivasi spiritual.",
    ],
    benefits: [
      "Pilihan Kamar VVIP, VIP, Kelas 1, 2, dan 3",
      "Layanan Bimbingan Rohani & Pendampingan Ibadah Pasien",
      "Menu Makanan Pasien Halal, Higienis & Diawasi Ahli Gizi",
      "Monitoring Perawat 24 Jam dengan Nurse Call Modern",
    ],
    doctorTeam: "Dokter Penanggung Jawab Pasien (DPJP) & Tim Perawat 24 Jam",
    iconName: "Home",
  },
  {
    id: "vaksinasi",
    title: "Layanan Vaksinasi",
    subtitle: "Imunisasi Anak, Dewasa, Haji & Umroh (ICV)",
    image: "/assets/layanan/vaksin.png",
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
  {
    id: "tumbuh-kembang",
    title: "Tumbuh Kembang Anak",
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
    id: "paket-homecare",
    title: "Layanan Homecare",
    subtitle: "Perawatan Medis & Keperawatan Profesional di Rumah Anda",
    image: "/assets/layanan/homecare.png",
    badge: "Home Healthcare",
    category: "Rawat Jalan & Poliklinik",
    description: "Layanan medis dokter dan perawat langsung ke rumah untuk perawatan luka diabetes, perawatan pasca bedah, perawatan lansia (geriatri), pemasangan infus/selang NGT, dan fisioterapi.",
    detailedDescription: [
      "Layanan Homecare RS Ridhoka Salma memberikan kemudahan bagi pasien dengan mobilitas terbatas untuk tetap mendapatkan asuhan medis profesional di lingkungan rumah yang nyaman.",
      "Seluruh tindakan dilakukan oleh tenaga medis bersertifikat dengan standar sterilitas rumah sakit.",
    ],
    benefits: [
      "Kunjungan Dokter & Perawat Profesional ke Rumah",
      "Perawatan Luka Modern (Modern Wound Care) & Pasca Bedah",
      "Pemasangan / Penggantian Kateter & Selang NGT",
      "Fisioterapi & Perawatan Pasien Stroke / Geriatri di Rumah",
    ],
    doctorTeam: "Dokter Umum, Perawat Homecare Bersertifikasi & Fisioterapis",
    iconName: "HeartHandshake",
  },
  {
    id: "mcu",
    title: "Paket Medical Check Up (MCU)",
    subtitle: "Pemeriksaan Kesehatan Preventif & Skrining Terpadu",
    image: "/assets/layanan/paket-mcu.jpeg",
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
    id: "paket-rawat-jalan",
    title: "Paket Rawat Jalan",
    subtitle: "Konsultasi Dokter Umum & Spesialis Terpadu",
    image: "/assets/fasilitas/kandungan.webp",
    badge: "Outpatient Services",
    category: "Rawat Jalan & Poliklinik",
    description: "Layanan poliklinik rawat jalan dokter umum dan spesialis dengan fasilitas diagnostik terpadu, farmasi obat halal, serta ruang tunggu yang nyaman dan modern.",
    detailedDescription: [
      "Pelayanan Rawat Jalan RS Ridhoka Salma melayani konsultasi dengan berbagai dokter spesialis berpengalaman, ditunjang sarana diagnostik lengkap seperti laboratorium, rontgen, USG, dan EKG.",
      "Dilengkapi fasilitas sistem antrean terintegrasi serta pengantaran obat ke rumah pasien untuk kenyamanan maksimal keluarga.",
    ],
    benefits: [
      "Konsultasi Dokter Umum & Dokter Spesialis Lengkap",
      "Pelayanan Laboratorium & Radiologi Cepat",
      "Pelayanan Farmasi Obat Halal & Antar Obat",
      "Pendaftaran & Antrean Online Terintegrasi",
    ],
    doctorTeam: "Dokter Umum & Tim Dokter Spesialis RS Ridhoka Salma",
    iconName: "Stethoscope",
  },
  {
    id: "paket-persalinan",
    title: "Paket Persalinan",
    subtitle: "Persalinan Normal & Caesar Metode ERACS",
    image: "/assets/fasilitas/homecare.png",
    badge: "Maternity & Delivery",
    category: "Ibu & Anak",
    description: "Pelayanan persalinan dengan suasana syariah yang menenangkan, pendampingan suami, serta metode ERACS (Enhanced Recovery After Cesarean Surgery) untuk pemulihan lebih cepat dan minim nyeri.",
    detailedDescription: [
      "Metode ERACS memungkinkan bunda bergerak lebih cepat pasca operasi, mengurangi mual dan rasa nyeri, serta mempercepat proses bonding dengan si kecil.",
      "Didukung ruang bersalin privat, bimbingan doa persalinan secara Islami, dan fasilitas kamar rawat inap ibu & bayi yang nyaman.",
    ],
    benefits: [
      "Metode Caesar ERACS (Cepat Pulih, Bergerak Pasca Operasi)",
      "Persalinan Normal Ramah Syariah & Didampingi Suami",
      "Bimbingan Rohani, Doa Persalinan & Bimbingan Azan Bayi",
      "Fasilitas Inisiasi Menyusu Dini (IMD) & Rawat Gabung",
    ],
    doctorTeam: "Dokter Spesialis Obstetri & Ginekologi (Obgyn) & Bidan Profesional",
    iconName: "Heart",
  },
  {
    id: "paket-poli-gigi",
    title: "Paket Poli Gigi & Mulut",
    subtitle: "Kesehatan Gigi Komprehensif & Estetika Senyum Keluarga",
    image: "/assets/layanan/gigi.png",
    badge: "Dental Care",
    category: "Rawat Jalan & Poliklinik",
    description: "Perawatan kesehatan gigi dan mulut untuk anak hingga dewasa dengan teknologi dental modern dan higienis, mulai dari scaling, penambalan estetik, hingga perawatan ortodonti.",
    detailedDescription: [
      "Poli Gigi RS Ridhoka Salma melayani pencegahan, pemeliharaan, serta perbaikan estetika gigi dan fungsi kunyah keluarga.",
      "Dilengkapi alat sterilisasi instrumen dental standar medis untuk kenyamanan dan keamanan seluruh anggota keluarga.",
    ],
    benefits: [
      "Pembersihan Karang Gigi (Ultrasonic Scaling)",
      "Penambalan Estetik Sesuai Warna Gigi Alami",
      "Pencabutan Gigi Anak & Dewasa Tanpa Rasa Cemas",
      "Perawatan Saluran Akar, Behel (Ortodonti) & Pemutihan Gigi",
    ],
    doctorTeam: "Dokter Gigi & Dokter Gigi Spesialis",
    iconName: "Smile",
  },
  {
    id: "paket-bedah",
    title: "Paket Tindakan Bedah & Operasi",
    subtitle: "Bedah Umum & Spesialistik dengan Kamar Operasi Berstandar Tinggi",
    image: "/assets/layanan/bedah.png",
    badge: "Surgical Center",
    category: "Rawat Inap & Bedah",
    description: "Fasilitas tindakan bedah minor maupun mayor dengan ruang operasi steril bertekanan positif, teknologi anestesi modern, dan penanganan dokter spesialis bedah berpengalaman.",
    detailedDescription: [
      "Kamar Operasi RS Ridhoka Salma didukung peralatan bedah modern dan tim medis terpadu yang memprioritaskan keselamatan pasien (Patient Safety).",
      "Melayani tindakan bedah terencana maupun darurat dengan pemulihan pasca operasi yang terpantau intensif.",
    ],
    benefits: [
      "Operasi Bedah Umum (Hernia, Usus Buntu, Lipoma, dll.)",
      "Laparoskopi (Bedah Minimal Invasif dengan Luka Sayatan Minimal)",
      "Bedah Ortopedi & Bedah Saluran Kemih (Urologi)",
      "Kamar Operasi Steril Berstandar Akreditasi KARS",
    ],
    doctorTeam: "Dokter Spesialis Bedah, Dokter Anestesi & Tim Perawat Bedah",
    iconName: "Activity",
  },
  {
    id: "sunday-clinic",
    title: "Sunday Clinic (Klinik Hari Minggu)",
    subtitle: "Pelayanan Poliklinik Dokter Spesialis di Akhir Pekan",
    image: "/assets/layanan/sunday.jpeg",
    badge: "Weekend Service",
    category: "Rawat Jalan & Poliklinik",
    description: "Solusi kemudahan berobat bagi Anda dan keluarga yang memiliki kesibukan di hari kerja. Layanan poliklinik dokter spesialis anak, kebidanan, penyakit dalam, dan gigi tetap buka di hari Minggu.",
    detailedDescription: [
      "Sunday Clinic RS Ridhoka Salma hadir untuk memastikan pelayanan kesehatan Anda tidak tertunda meski di hari libur akhir pekan.",
      "Didukung tim dokter spesialis pilihan dengan layanan penunjang laboratorium dan farmasi yang tetap beroperasi penuh.",
    ],
    benefits: [
      "Poli Spesialis Anak, Obgyn, Penyakit Dalam & Gigi Buka Hari Minggu",
      "Pelayanan Farmasi & Laboratorium Tetap Siaga Penuh",
      "Waktu Konsultasi Nyaman Tanpa Mengorbankan Hari Kerja",
      "Kemudahan Registrasi dan Janji Temu Online",
    ],
    doctorTeam: "Tim Dokter Spesialis & Dokter Umum Jaga Minggu",
    iconName: "Clock",
  },
];

export const featuredServices: ServiceItem[] = [
  allServices.find((s) => s.id === "moms-club")!,
  allServices.find((s) => s.id === "tumbuh-kembang")!,
  allServices.find((s) => s.id === "paket-persalinan")!,
];

