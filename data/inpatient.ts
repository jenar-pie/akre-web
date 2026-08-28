export interface RoomType {
  id: string;
  name: string;
  category: string;
  tagline: string;
  badge: string;
  capacity: string;
  image: string;
  description: string;
  features: string[];
  amenities: string[];
  highlight?: boolean;
}

export interface InpatientSyariahPillar {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface AdmissionStep {
  stepNumber: number;
  title: string;
  desc: string;
  iconName: string;
}

export const roomTypesData: RoomType[] = [
  {
    id: "vvip",
    name: "Kamar VVIP (Presidential Suite)",
    category: "Perawatan Eksekutif",
    tagline: "Kenyamanan Maksimal, Kemewahan, dan Privasi Mutlak Bersama Keluarga",
    badge: "Kelas Tertinggi",
    capacity: "1 Pasien per Kamar (Kamar Tunggal Eksekutif)",
    image: "/assets/fasilitas/rawat-inap.jpg",
    description: "Ruang rawat inap paling eksklusif dengan area yang sangat luas, perabotan elegan, ruang tamu keluarga terpisah, serta bimbingan ibadah syariah privat harian.",
    features: [
      "1 Tempat Tidur Pasien Elektrik Otomatis (Full Motorized Bed)",
      "Ruang Tamu Keluarga dengan Smart LED TV 55 Inch",
      "Sofa Bed Eksekutif & Set Meja Makan Pasien",
      "Kulkas 2 Pintu, Microwave, & Dispenser Air Minum",
      "Kamar Mandi Dalam dengan Pemanas Air (Water Heater)",
      "Set Perlengkapan Mandi (Amenities Kit) Premium & Handuk",
      "Akses Wi-Fi High Speed & Nurse Call Button 24 Jam",
      "Menu Makanan Pasien Pilihan & Snack Pendamping Keluarga",
    ],
    amenities: ["AC Dingin", "Smart TV", "Kulkas", "Sofa Bed", "Water Heater", "Free Wi-Fi", "Paket Snack", "Bimbingan Ibadah Privat"],
    highlight: true,
  },
  {
    id: "vip",
    name: "Kamar VIP",
    category: "Perawatan Privat",
    tagline: "Ruangan Privat Nyaman untuk Istirahat Tenang dan Pemulihan Cepat",
    badge: "Kelas Utama",
    capacity: "1 Pasien per Kamar (Kamar Tunggal)",
    image: "/assets/fasilitas/rawat-inap.jpg",
    description: "Kamar perawatan privat 1 tempat tidur yang tenang dan nyaman, memberikan keleluasaan istirahat bagi pasien dan kenyamanan bagi penunggu pasien.",
    features: [
      "1 Tempat Tidur Pasien Elektrik / Crank Otomatis",
      "Sofa / Kursi Penunggu Pasien yang Nyaman",
      "LED TV Kabel & Lemari Es Mini",
      "Kamar Mandi Dalam dengan Pemanas Air (Water Heater)",
      "Lemari Pakaian Pasien & Meja Makan Pasien (Overbed Table)",
      "AC Individual & Sistem Nurse Call Siaga 24 Jam",
      "Perlengkapan Mandi (Amenities Kit) Lengkap",
    ],
    amenities: ["AC", "LED TV", "Kulkas Mini", "Kursi Penunggu", "Water Heater", "Wi-Fi", "Nurse Call 24 Jam"],
    highlight: false,
  },
  {
    id: "kelas-1",
    name: "Kamar Kelas 1",
    category: "Perawatan Semi-Privat",
    tagline: "Kombinasi Kesejukan, Kerapian, dan Kenyamanan Bersama",
    badge: "Favorit Pasien",
    capacity: "2 Pasien per Kamar",
    image: "/assets/fasilitas/rawat-inap.jpg",
    description: "Kamar perawatan berkapasitas 2 tempat tidur yang dilengkapi tirai penyekat privasi rapat, pendingin ruangan sejuk, dan fasilitas penunjang yang tertata rapi.",
    features: [
      "2 Tempat Tidur Pasien dengan Tirai Pembatas Privasi Rapat",
      "Kamar Mandi Dalam Bersih & Higienis",
      "Pendingin Ruangan (AC) & TV Bersama",
      "Nakas Samping Tempat Tidur & Kursi Penunggu Tiap Bed",
      "Tombol Panggil Perawat (Nurse Call) di Setiap Bed",
      "Free Wi-Fi & Pelayanan Asuhan Keperawatan Syariah",
    ],
    amenities: ["AC", "TV Bersama", "Tirai Privasi Rapat", "Kamar Mandi Dalam", "Nakas Pribadi", "Nurse Call"],
    highlight: false,
  },
  {
    id: "kelas-2",
    name: "Kamar Kelas 2",
    category: "Perawatan Standar",
    tagline: "Fasilitas Perawatan yang Nyaman, Bersih, dan Ekonomis",
    badge: "Standar Nyaman",
    capacity: "3–4 Pasien per Kamar",
    image: "/assets/fasilitas/rawat-inap.jpg",
    description: "Pilihan kamar yang lega, bersih, dan sejuk berpendingin udara dengan sekat pembatas antar tempat tidur untuk menjaga kenyamanan dan ketenangan istirahat.",
    features: [
      "3–4 Tempat Tidur Pasien Berstandar Medis",
      "Tirai Penyekat Anti-Bakteri untuk Menjaga Aurat & Privasi",
      "Kamar Mandi Dalam yang Selalu Dibersihkan Rutin",
      "Pendingin Ruangan (AC) & TV Bersama",
      "Kursi Penunggu Pasien & Lemari Nakas di Setiap Bed",
      "Nurse Call System Terhubung ke Nurse Station",
    ],
    amenities: ["AC", "Tirai Anti-Bakteri", "Kamar Mandi Dalam", "Nakas", "Nurse Call", "Wi-Fi"],
    highlight: false,
  },
  {
    id: "kelas-3",
    name: "Kamar Kelas 3 (Standar KRIS)",
    category: "Perawatan Umum & BPJS",
    tagline: "Akses Pelayanan Medis Paripurna yang Ramah & Tanpa Diskriminasi",
    badge: "BPJS & Umum",
    capacity: "4–6 Pasien per Kamar",
    image: "/assets/fasilitas/rawat-inap.jpg",
    description: "Kamar rawat inap yang memenuhi standar Kelas Rawat Inap Standar (KRIS) BPJS Kesehatan dengan sirkulasi udara optimal, kebersihan terjamin, dan pelayanan penuh ketulusan.",
    features: [
      "Tempat Tidur Medis Nyaman dengan Jarak Antar Bed Sesuai Standar KRIS",
      "Tirai Privasi Tebal di Setiap Sisi Bed",
      "Pendingin Ruangan (AC) & Sirkulasi Udara Baik",
      "Kamar Mandi Bersih di Dalam Ruangan",
      "Nakas & Kursi Pendamping Pasien",
      "Pelayanan Medis & Asuhan Keperawatan Setara Tanpa Diskriminasi",
    ],
    amenities: ["AC", "Tirai Standar KRIS", "Kamar Mandi Dalam", "Nakas", "Nurse Call 24 Jam"],
    highlight: false,
  },
  {
    id: "intensive-care",
    name: "Ruang Perawatan Intensif (ICU, NICU, PICU)",
    category: "Perawatan Kritis & Khusus",
    tagline: "Pengawasan Intensif 24 Jam dengan Peralatan Life-Support Tercanggih",
    badge: "Critical Care",
    capacity: "Unit Khusus Pemantauan Intensif",
    image: "/assets/fasilitas/icu.jpg",
    description: "Unit perawatan intensif berstandar tinggi untuk penanganan pasien gawat yang membutuhkan pemantauan fungsi organ vital secara terus-menerus.",
    features: [
      "Ventilator Mekanik & Bedside Multi-Parameter Monitor Digital",
      "Sistem Pemantauan Sentral (Central Monitoring System)",
      "Rasio Perawat dan Pasien yang Sangat Ketat (1:1 / 1:2)",
      "Peralatan Resusitasi Jantung Paru & Defibrilator Siaga",
      "Supervisi Dokter Spesialis Anestesiologi & Konsultan Intensivist",
    ],
    amenities: ["Ventilator", "Multi-Parameter Monitor", "Central Monitor", "Resusitasi Cepat", "Standar Sterilisasi PPI"],
    highlight: false,
  },
];

export const syariahPillarsData: InpatientSyariahPillar[] = [
  {
    title: "Bimbingan Ibadah & Rohani Pasien",
    subtitle: "Dukungan Spiritual untuk Ketenangan Hati",
    description: "Petugas bina rohani Islam membimbing tata cara wudhu/tayamum orang sakit, shalat di tempat tidur, zikir, serta pembacaan doa kesembuhan setiap hari.",
    iconName: "BookOpen",
  },
  {
    title: "Penjagaan Privasi & Aurat Sesuai Syariat",
    subtitle: "Kenyamanan dan Kehormatan Pasien Terjaga",
    description: "Pakaian pasien dirancang syar'i dan tertutup rapi. Tindakan medis dan keperawatan diupayakan sesuai gender (tenaga medis wanita untuk pasien wanita).",
    iconName: "Shield",
  },
  {
    title: "Instalasi Gizi & Makanan Halal Higienis",
    subtitle: "Menu Gizi Seimbang & Tersertifikasi Halal",
    description: "Setiap sajian makanan pasien diolah di dapur gizi tersertifikasi halal dengan pengawasan ahli gizi klinis sesuai kebutuhan diet dan pantangan medis pasien.",
    iconName: "Utensils",
  },
  {
    title: "Pelayanan Medis Humanis Penuh Ketulusan",
    subtitle: "Sentuhan Kasih Sayang & Sikap 5S",
    description: "Dokter, perawat, dan staf melayani dengan budaya Senyum, Salam, Sapa, Sopan, dan Santun, menjadikan proses penyembuhan terasa hangat dan menenteramkan.",
    iconName: "HeartHandshake",
  },
];

export const admissionStepsData: AdmissionStep[] = [
  {
    stepNumber: 1,
    title: "Rujukan Dokter / Indikasi Rawat Inap",
    desc: "Pasien mendapatkan surat pengantar rawat inap (SPRI) dari dokter spesialis di Poliklinik atau dokter IGD 24 Jam setelah evaluasi medis.",
    iconName: "FileText",
  },
  {
    stepNumber: 2,
    title: "Pendaftaran & Verifikasi Penjamin",
    desc: "Keluarga pasien melakukan registrasi di loket Admisi Rawat Inap, memilih kelas kamar, dan memverifikasi jaminan (BPJS Kesehatan, Asuransi Swasta, Korporasi, atau Umum).",
    iconName: "CreditCard",
  },
  {
    stepNumber: 3,
    title: "Penempatan Kamar & Orientasi Pasien",
    desc: "Pasien diantar ke ruang rawat inap oleh perawat, dilakukan timbang terima medis, orientasi fasilitas kamar, dan penjelasan tata tertib syariah.",
    iconName: "Bed",
  },
  {
    stepNumber: 4,
    title: "Pelayanan Medis, Keperawatan & Pemulihan",
    desc: "Mendapatkan visite rutin dokter penanggung jawab pelayanan (DPJP), asuhan keperawatan 24 jam, terapi obat halal, gizi klinis, dan bimbingan rohani hingga sembuh.",
    iconName: "Activity",
  },
];

export const visitingHoursData = {
  title: "Tata Tertib & Waktu Berkunjung (Jam Besuk)",
  description: "Demi menjaga kenyamanan, keamanan, dan proses istirahat optimal pasien, keluarga dan kerabat diharapkan mematuhi ketentuan waktu berkunjung sebagai berikut:",
  sessions: [
    {
      sessionName: "Sesi Siang",
      time: "11.00 – 13.00 WIB",
      note: "Waktu istirahat siang dan makan siang pasien",
    },
    {
      sessionName: "Sesi Sore / Malam",
      time: "17.00 – 19.00 WIB",
      note: "Waktu kunjungan keluarga setelah jam kerja",
    },
  ],
  rules: [
    "Pengunjung dalam kondisi sehat (tidak sedang demam, flu, atau batuk).",
    "Anak di bawah usia 12 tahun tidak disarankan memasuki area perawatan rawat inap demi keselamatan kesehatan anak.",
    "Maksimal 2 orang pengunjung di dalam kamar secara bergantian agar pasien dapat beristirahat dengan tenang.",
    "Wajib menjaga ketenangan, kebersihan, dan mencuci tangan sebelum maupun sesudah menjenguk pasien.",
    "Dilarang merokok dan dilarang membawa barang berharga berlebihan ke dalam area rumah sakit.",
  ],
};
