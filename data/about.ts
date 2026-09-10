export interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface ValueItem {
  letter: string;
  title: string;
  meaning: string;
  description: string;
  iconName: string;
}

export interface MissionItem {
  number: number;
  title: string;
  description: string;
  points: string[];
  iconName: string;
}

export interface OrgPerson {
  name: string;
  role: string;
  title?: string;
  category: "pengawas" | "direksi" | "komite" | "manajemen";
  division?: string;
  image?: string;
  description?: string;
}

export interface AccreditationItem {
  id: string;
  title: string;
  issuer: string;
  level: string;
  badgeText: string;
  year: string;
  validUntil: string;
  certificateNo: string;
  description: string;
  highlights: string[];
  category: "akreditasi" | "syariah" | "iso";
}

export interface AwardItem {
  id: string;
  year: string;
  title: string;
  issuer: string;
  category: string;
  description: string;
  badge: string;
}

export const sejarahData = {
  headline: "Perjalanan Menuju Pelayanan Medis Syariah Terdepan",
  subheadline: "Lebih dari 17 Tahun Mengabdi dengan Penuh Keikhlasan bagi Masyarakat Bekasi dan Sekitarnya",
  storyIntro: [
    "Rumah Sakit Ridhoka Salma didirikan dengan semangat ketulusan untuk memberikan pelayanan kesehatan berkualitas yang berlandaskan nilai-nilai Islam bagi masyarakat Cikarang dan Kabupaten Bekasi.",
    "Bermula dari sebuah Rumah Bersalin sederhana pada tahun 2007, kepercayaan masyarakat yang begitu besar mendorong kami untuk terus berbenah, berinovasi, dan melengkapi sarana prasarana medis hingga bertransformasi menjadi Rumah Sakit Umum modern yang terakreditasi Paripurna.",
  ],
  milestones: [
    {
      year: "2007",
      title: "Pendirian Rumah Bersalin Ridhoka Salma",
      subtitle: "Langkah Pertama Pengabdian Kesehatan Ibu & Anak",
      description: "Didirikan sebagai Rumah Bersalin yang berfokus pada pelayanan persalinan aman, ramah, dan islami bagi masyarakat di kawasan Cikarang Barat.",
      highlights: ["Layanan Persalinan 24 Jam", "Klinik Ibu dan Anak", "Pelayanan Berbasis Kekeluargaan"],
      iconName: "Baby",
    },
    {
      year: "2012",
      title: "Transformasi Menjadi Rumah Sakit Umum",
      subtitle: "Ekspansi Fasilitas dan Pelayanan Medis Lengkap",
      description: "Meningkatkan status menjadi Rumah Sakit Umum (RSU) dengan penambahan poliklinik spesialis, kamar operasi berstandar medis, Instalasi Gawat Darurat (IGD) 24 jam, dan laboratorium.",
      highlights: ["Peresmian Status RS Umum", "Penambahan Poliklinik Dokter Spesialis", "Fasilitas Kamar Operasi & Rawat Inap"],
      iconName: "Building2",
    },
    {
      year: "2017",
      title: "Penerapan Standar Pelayanan Syariah Terintegrasi",
      subtitle: "Pelopor Rumah Sakit Bernuansa Syariah di Bekasi",
      description: "Mengukuhkan identitas sebagai RS Syariah dengan membentuk Dewan Pengawas Syariah (DPS), menerapkan tata kelola farmasi halal, bimbingan rohani pasien, serta penjagaan privasi dan aurat sesuai syariat.",
      highlights: ["Pembentukan Dewan Pengawas Syariah (DPS)", "SOP Pelayanan Medis Ramah Syariah", "Program Bimbingan Ibadah Pasien Rawat Inap"],
      iconName: "ShieldCheck",
    },
    {
      year: "2019",
      title: "Pengembangan Fasilitas Perawatan Intensif Modern",
      subtitle: "Peningkatan Kapasitas ICU, NICU, PICU & Radiologi Digital",
      description: "Menambah fasilitas perawatan kritis ICU, NICU, dan PICU berteknologi tinggi, serta modernisasi sarana diagnostik radiologi dan USG 4D untuk mendukung akurasi diagnosa medis.",
      highlights: ["Unit Perawatan Intensif (ICU, NICU, PICU)", "Digital X-Ray & Laboratorium Otomatis", "Kapasitas Tempat Tidur Lebih dari 100 Bed"],
      iconName: "Activity",
    },
    {
      year: "2022",
      title: "Raihan Akreditasi Paripurna & Sertifikasi DSN-MUI",
      subtitle: "Pengakuan Mutu Tertinggi Tingkat Nasional",
      description: "Berhasil meraih predikat Akreditasi Paripurna (Bintang 5) dari Lembaga Akreditasi Rumah Sakit dan Sertifikasi Rumah Sakit Syariah resmi dari Dewan Syariah Nasional (DSN-MUI).",
      highlights: ["Akreditasi Paripurna Bintang 5 KARS", "Sertifikasi Resmi RS Syariah DSN-MUI", "Penghargaan Kepemimpinan Pelayanan Kesehatan"],
      iconName: "Award",
    },
    {
      year: "2024 - Sekarang",
      title: "Transformasi Digital & Layanan Unggulan Komprehensif",
      subtitle: "Integrasi Rekam Medis Elektronik (RME) & Pendaftaran Online",
      description: "Menerapkan integrasi sistem rekam medis elektronik terstandar Kemenkes (SatuSehat), sistem antrean online mobile, perluasan kemitraan asuransi & BPJS, serta optimalisasi klinik tumbuh kembang anak dan bedah minimal invasif.",
      highlights: ["Pendaftaran & Antrean Online Real-Time", "Klinik Tumbuh Kembang & Mom-Baby Spa", "Peringkat Tertinggi Kepatuhan Kontrak BPJS"],
      iconName: "Sparkles",
    },
  ] as Milestone[],
  stats: [
    { value: "17+", label: "Tahun Pengabdian", desc: "Sejak 2007 melayani masyarakat" },
    { value: "30+", label: "Dokter Spesialis & Umum", desc: "Tenaga medis berdedikasi & profesional" },
    { value: "100+", label: "Kapasitas Tempat Tidur", desc: "Dari kelas VVIP hingga Kelas 3" },
    { value: "50.000+", label: "Pasien Terlayani", desc: "Tingkat kepuasan pasien tinggi" },
  ],
};

export const visiMisiData = {
  moto: "Keikhlasan Melayani Adalah Ibadahku",
  mottoTranslation: "Setiap langkah pelayanan kami didedikasikan sebagai wujud ibadah untuk memberikan yang terbaik bagi kesembuhan dan kenyamanan pasien.",
  visi: "Menjadi Rumah Sakit Islam Terpilih dan Terpercaya di Bekasi yang Unggul dalam Pelayanan Medis dan Berlandaskan Prinsip Syariah.",
  visiDescription: "Visi ini menjadi kompas seluruh insan RS Ridhoka Salma dalam menghadirkan pelayanan kesehatan berstandar mutu tinggi, aman, humanis, serta senantiasa menghidupkan nilai-nilai luhur Islami dalam setiap interaksi.",
  misiList: [
    {
      number: 1,
      title: "Pelayanan Kesehatan Bermutu, Aman, & Terjangkau",
      description: "Menyelenggarakan pelayanan rumah sakit yang bermutu tinggi, mengutamakan keselamatan pasien (patient safety), berkesan, profesional, dan dapat dijangkau oleh segenap lapisan masyarakat.",
      points: [
        "Penerapan standar keselamatan pasien berstandar nasional",
        "Aksesibilitas layanan medis yang adil dan merata",
        "Pencegahan dan pengendalian infeksi yang ketat",
      ],
      iconName: "HeartPulse",
    },
    {
      number: 2,
      title: "Peningkatan Mutu & Keselamatan Berkelanjutan",
      description: "Melakukan continuous improvement (upaya berkelanjutan) melalui evaluasi berkala, audit klinis, manajemen risiko, serta penerapan teknologi kesehatan modern guna meningkatkan kepuasan pelanggan.",
      points: [
        "Audit mutu klinis dan kepatuhan SOP secara berkala",
        "Implementasi teknologi medis dan sistem informasi terpadu",
        "Pengelolaan kritik, saran, dan umpan balik pasien secara responsif",
      ],
      iconName: "TrendingUp",
    },
    {
      number: 3,
      title: "Pengembangan SDM yang Kompeten & Berakhlak",
      description: "Menyelenggarakan pendidikan, pelatihan, dan pengembangan kapasitas berkelanjutan bagi seluruh tenaga medis, paramedis, dan staf penunjang agar mampu memberikan pelayanan yang profesional dan berkarakter.",
      points: [
        "Program pelatihan medis dan sertifikasi profesi berkala",
        "Pengembangan soft-skill komunikasi terapeutik dan empati",
        "Peningkatan kesejahteraan dan jenjang karir karyawan",
      ],
      iconName: "Users",
    },
    {
      number: 4,
      title: "Penanaman Nilai Islami & Akhlakul Karimah",
      description: "Memberikan pembinaan aqidah, ibadah, dan akhlakul karimah secara berkesinambungan bagi seluruh insan rumah sakit untuk menciptakan suasana pelayanan yang sejuk, santun, dan penuh keberkahan.",
      points: [
        "Bimbingan rohani dan doa bersama bagi kesembuhan pasien",
        "Penyediaan sarana ibadah bersih, nyaman, dan ramah difabel",
        "Penjagaan aurat pasien dan pemisahan privasi sesuai syariat",
      ],
      iconName: "Sparkles",
    },
  ] as MissionItem[],
  budayaKerja: {
    title: "Tata Nilai Budaya Kerja: I.K.H.L.A.S",
    subtitle: "Nilai-nilai inti yang dihayati dan diamalkan oleh setiap insan RS Ridhoka Salma dalam bertindak dan melayani",
    values: [
      {
        letter: "I",
        title: "Integritas",
        meaning: "Jujur, Transparan & Amanah",
        description: "Menjunjung tinggi kejujuran, keterbukaan informasi, dan memegang teguh amanah dalam setiap tindakan serta pelayanan kepada pasien.",
        iconName: "Shield",
      },
      {
        letter: "K",
        title: "Kedisiplinan",
        meaning: "Tepat Waktu & Taat Prosedur",
        description: "Menegakkan disiplin kerja, ketepatan waktu dalam pelayanan medis, serta konsisten menjalankan standar operasional prosedur.",
        iconName: "Clock",
      },
      {
        letter: "H",
        title: "Harmoni",
        meaning: "Kerjasama & Saling Menghargai",
        description: "Menciptakan lingkungan kerja yang sinergis, saling mendukung antarprofesi, serta memperlakukan pasien dan keluarga dengan penuh rasa hormat.",
        iconName: "HeartHandshake",
      },
      {
        letter: "L",
        title: "Lakukan",
        meaning: "Tindakan Cepat & Solutif",
        description: "Berorientasi pada tindakan nyata, responsif terhadap kebutuhan pasien, dan selalu berupaya memberikan solusi terbaik dengan sepenuh hati.",
        iconName: "Zap",
      },
      {
        letter: "A",
        title: "Akhlak",
        meaning: "Santun, Ramah & Beretika Islami",
        description: "Mengedepankan budi pekerti luhur, tutur kata yang santun, senyum, sapa, dan menjaga etika islami dalam setiap interaksi.",
        iconName: "Smile",
      },
      {
        letter: "S",
        title: "Sedekah",
        meaning: "Ikhlas Melayani & Berbagi Kebaikan",
        description: "Menjadikan setiap pelayanan, bantuan tenaga, dan kebaikan sebagai ladang sedekah serta ibadah untuk meraih keberkahan bersama.",
        iconName: "HeartHandshake",
      },
    ] as ValueItem[],
  },
};

export const strukturOrganisasiData = {
  headline: "Struktur Organisasi & Tata Kelola Rumah Sakit",
  subheadline: "Kepemimpinan yang Berintegritas, Profesional, dan Berkomitmen Menjaga Mutu Medis serta Kepatuhan Syariah",
  tabs: [
    { id: "semua", label: "Semua Tingkatan" },
    { id: "pengawas", label: "Dewan Pengawas Syariah (DPS)" },
    { id: "direksi", label: "Direksi & Pimpinan" },
  ],
  members: [
    {
      name: "Roziana Ghani",
      role: "Direktur Utama",
      title: "Pimpinan Eksekutif",
      category: "direksi",
      division: "Direksi",
      image: "/assets/fasilitas/ghani.png",
      description: "Memimpin arah strategis, visi jangka panjang, serta keberlanjutan tata kelola RS Ridhoka Salma.",
    },

    {
      name: "Dr. Latief Awaludin",
      role: "Komite Syariah",
      title: "Pimpinan Eksekutif",
      category: "pengawas",
      division: "Dewan Pengawas Syariah",
      image: "/assets/profil/latief.png",
      description: "Kesehatan adalah amanah, dan setiap amanah harus dijaga dengan ilmu, keikhlasan, dan nilai-nilai Islam.",
    },

    {
      name: "Muhammad Yunus, S.H.I, M.E.SY",
      role: "Komite Syariah",
      title: "Pimpinan Eksekutif",
      category: "pengawas",
      division: "Dewan Pengawas Syariah",
      image: "/assets/profil/yunus.png",
      description: "Pelayanan kesehatan yang berlandaskan syariah mengintegrasikan keahlian medis dengan ketulusan doa dan bimbingan ibadah pasien.",
    },

  ] as OrgPerson[],
};

export const akreditasiData = {
  headline: "Akreditasi, Sertifikasi Mutu & Penghargaan",
  subheadline: "Bukti Nyata Dedikasi Kami dalam Menghadirkan Standar Pelayanan Medis Tertinggi Berlandaskan Prinsip Syariah",
  accreditations: [
    {
      id: "kars-paripurna",
      title: "Akreditasi Paripurna (Bintang 5)",
      issuer: "Komite Akreditasi Rumah Sakit (KARS) / Kementerian Kesehatan RI",
      level: "Tingkat Paripurna (Tertinggi)",
      badgeText: "Akreditasi Paripurna",
      year: "2022",
      validUntil: "2026",
      certificateNo: "KARS-SERT/982/XI/2022",
      description: "Merupakan predikat kelulusan tertinggi dalam penilaian mutu pelayanan dan keselamatan pasien rumah sakit yang mencakup standar klinis, manajemen, sarana prasarana, serta kepatuhan hak pasien.",
      highlights: [
        "Pemenuhan 16 bab standar akreditasi Kemenkes RI dengan skor sangat memuaskan",
        "Standar ketat keselamatan pasien dan manajemen risiko fasilitas",
        "Pencegahan dan pengendalian infeksi rumah sakit yang komprehensif",
      ],
      category: "akreditasi",
    },
    {
      id: "dsn-mui-syariah",
      title: "Sertifikasi Rumah Sakit Syariah",
      issuer: "Dewan Syariah Nasional Majelis Ulama Indonesia (DSN-MUI) & MUKISI",
      level: "Sertifikat Rumah Sakit Syariah",
      badgeText: "RS Syariah Terverifikasi",
      year: "2022",
      validUntil: "2025",
      certificateNo: "DSN-MUI/RSS/047/VII/2022",
      description: "Sertifikasi resmi yang membuktikan bahwa tata kelola rumah sakit, transaksi keuangan, pelayanan medis, bimbingan rohani, penyediaan obat halal, dan gizi telah teruji memenuhi kaidah maqashid syariah.",
      highlights: [
        "Pelayanan bimbingan doa, tayamum, dan ibadah bagi pasien rawat inap",
        "Jaminan obat-obatan halal dan instalasi gizi berstandar halal",
        "Pemberian edukasi Islami dan penjagaan privasi/aurat pasien",
      ],
      category: "syariah",
    },
    {
      id: "bpjs-faskes-prima",
      title: "Kepatuhan Mutu Faskes Rujukan BPJS",
      issuer: "BPJS Kesehatan Cabang Cikarang / Wilayah Jawa Barat",
      level: "Fasilitas Kesehatan Rujukan Utama",
      badgeText: "Faskes Kepatuhan Tinggi",
      year: "2024",
      validUntil: "Aktif",
      certificateNo: "BPJS-CKR/MUTU/2024",
      description: "Pengakuan resmi atas komitmen RS Ridhoka Salma dalam menyediakan akses pelayanan BPJS Kesehatan yang mudah, cepat, setara, tanpa diskriminasi dan tanpa iur biaya tambahan.",
      highlights: [
        "Integrasi antrean online Mobile JKN dan finger print",
        "Ketersediaan display tempat tidur & jadwal dokter transparan",
        "Respon cepat pengaduan peserta BPJS Kesehatan",
      ],
      category: "akreditasi",
    },
  ] as AccreditationItem[],
  awards: [
    {
      id: "mukisi-2026",
      year: "2026",
      title: "MUKISI Syariah Healthcare Award",
      issuer: "Majelis Upaya Kesehatan Islam Seluruh Indonesia (MUKISI)",
      category: "Pelayanan Syariah",
      description: "Penghargaan atas konsistensi dan inovasi dalam penyelenggaraan pelayanan kesehatan berbasis syariah dan bimbingan rohani pasien terbaik.",
      badge: "Kategori Layanan Syariah",
    },
    {
      id: "bpjs-kepatuhan-2024",
      year: "2024",
      title: "Penghargaan Capaian Kepatuhan Kontrak Faskes Tertinggi",
      issuer: "BPJS Kesehatan Cabang Cikarang",
      category: "Kepatuhan Mutu & Kerjasama",
      description: "Apresiasi atas komitmen rumah sakit dalam menjaga mutu perjanjian kerja sama, nihil diskriminasi pasien, serta optimalisasi antrean digital.",
      badge: "Kepatuhan Terbaik",
    },
    {
      id: "leadership-women-2022",
      year: "2022",
      title: "Inspiring Healthcare Leader & Successful Women in Leadership",
      issuer: "Indonesia Achievement Center / Forum Komunikasi Profesi",
      category: "Kepemimpinan Manajemen",
      description: "Diberikan kepada Hj. Roziana Ghani (Direktur Utama) atas dedikasi dan visi kepemimpinan yang progresif dalam memajukan RS Ridhoka Salma.",
      badge: "Leadership Award",
    },
    {
      id: "plkk-bpjamsostek-2021",
      year: "2021",
      title: "Pusat Layanan Kecelakaan Kerja (PLKK) Award",
      issuer: "BPJS Ketenagakerjaan (BPJAMSOSTEK) Bekasi",
      category: "Pelayanan Trauma & PLKK",
      description: "Penghargaan bagi tenaga kesehatan dan rumah sakit sebagai penanggung jawab dan penanganan trauma kecelakaan kerja terbaik di kawasan industri Cikarang.",
      badge: "PLKK Terbaik",
    },
    {
      id: "layanan-terbaik-masyarakat",
      year: "2023",
      title: "Penghargaan Rumah Sakit Pilihan & Ramah Pasien",
      issuer: "Asosiasi Komunitas Masyarakat Cikarang Barat",
      category: "Kepuasan Pasien",
      description: "Apresiasi dari masyarakat sekitar atas keramahan petugas, kebersihan fasilitas, serta program sosial kesehatan gratis secara rutin.",
      badge: "Pilihan Masyarakat",
    },
  ] as AwardItem[],
  syariahPrinciples: [
    {
      title: "Menjaga Privasi & Aurat",
      desc: "Pemisahan ruang dan tenaga medis yang mengedepankan kesesuaian gender serta pakaian pasien yang syar'i dan tertutup rapi.",
      icon: "Shield",
    },
    {
      title: "Bimbingan Ibadah & Doa",
      desc: "Petugas bina rohani siap membimbing tayamum, tata cara shalat orang sakit, zikir, dan mendampingi sakaratul maut (talqin).",
      icon: "BookOpen",
    },
    {
      title: "Obat & Makanan Halal",
      desc: "Formularium obat terseleksi ketat bebas unsur non-halal serta instalasi gizi bersertifikat higienis dan halal.",
      icon: "Utensils",
    },
    {
      title: "Akad Transaksi Syariah",
      desc: "Semua perjanjian layanan, sewa kamar, dan transaksi keuangan bebas riba, maisir, dan gharar.",
      icon: "FileCheck",
    },
  ],
};
