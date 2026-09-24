export interface ArticleItem {
  id: number;
  title: string;
  type: "kesehatan" | "islami";
  category: string;
  date: string;
  author?: string;
  image: string;
  excerpt: string;
  url?: string;
}

export const articlesData: ArticleItem[] = [
  {
    id: 1,
    title: "Selamat Hari Palang Merah Indonesia: Setetes Darah, Sejuta Harapan",
    type: "kesehatan",
    category: "Kemanusiaan & Donor Darah",
    date: "17 September 2026",
    author: "Keluarga Besar RS Ridhoka Salma",
    image: "/assets/artikel/pmi.png",
    excerpt:
      "Setiap tetes darah yang didonorkan adalah harapan bagi mereka yang membutuhkan. Apresiasi bagi seluruh relawan, pendonor, dan insan kemanusiaan.",
    url: "https://www.instagram.com/p/DdWnLXlpQAU/",
  },
  {
    id: 2,
    title: "Pengalaman & Kepuasan Pasien Perawatan Rawat Inap VIP RS Ridhoka Salma",
    type: "kesehatan",
    category: "Layanan & Fasilitas Rawat Inap",
    date: "12 September 2026",
    author: "Tim Pelayanan RS Ridhoka Salma",
    image: "/assets/artikel/vip.png",
    excerpt:
      "Bagi kami, kepuasan pasien bukan sekadar tentang hasil perawatan medis, tetapi tentang rasa aman, nyaman, dan pelayanan personal yang penuh perhatian.",
    url: "https://www.instagram.com/reel/DdM-44Svp5D/",
  },
  {
    id: 3,
    title: "Panduan Siaga Kesehatan: Menghadapi Dampak Abu Vulkanik & Erupsi",
    type: "kesehatan",
    category: "Kesehatan & Mitigasi Bencana",
    date: "7 September 2026",
    author: "Tim PKRS RS Ridhoka Salma",
    image: "/assets/artikel/erupsi.png",
    excerpt:
      "Panduan menjaga kesehatan pernapasan dan keselamatan saat terjadi erupsi: gunakan masker pelindung, batasi aktivitas luar ruangan, dan pantau informasi resmi.",
    url: "https://www.instagram.com/p/Dc_YPf4p5WY/",
  },
  {
    id: 4,
    title: "Manfaat Asam Folat untuk Ibu Hamil & Pembentukan Janin Sehat",
    type: "kesehatan",
    category: "Kebidanan & Kandungan",
    date: "27 Juli 2026",
    author: "dr. Hj. Siti Rahmawati, Sp.OG",
    image: "/assets/artikel/asam-folat.png",
    excerpt:
      "Nutrisi esensial sejak prakonsepsi hingga trimester pertama untuk mendukung perkembangan otak janin dan mengurangi risiko anemia pada ibu hamil.",
    url: "https://www.instagram.com/reel/DbTMeVLS0SI/",
  },
  {
    id: 5,
    title: "Pentingnya Medical Check Up (MCU) Rutin untuk Deteksi Dini Penyakit",
    type: "kesehatan",
    category: "Pemeriksaan Kesehatan / MCU",
    date: "26 Juli 2026",
    author: "Tim MCU RS Ridhoka Salma",
    image: "/assets/artikel/mcu.png",
    excerpt:
      "Mencegah selalu lebih baik daripada mengobati. Lakukan Medical Check Up di RS Ridhoka Salma sebagai investasi terbaik bagi kesehatan jangka panjang.",
    url: "https://www.instagram.com/reel/DbQmjoCpYRq/",
  },
  {
    id: 6,
    title: "Keberkahan Sedekah di Hari Jumat: Membuka Pintu Rezeki & Ketenangan Jiwa",
    type: "islami",
    category: "Kesyariahan & Amalan",
    date: "16 Juli 2026",
    author: "Komite Syariah RS Ridhoka Salma",
    image: "/assets/artikel/sedekah.png",
    excerpt:
      "Jumat berkah bukan hanya menyambut akhir pekan, namun momentum memperbanyak sedekah sebagai ikhtiar melapangkan urusan dan meraih pahala berlipat.",
    url: "https://www.instagram.com/reel/Da3D9BWJtVq/",
  },
  {
    id: 7,
    title: "Moms Club RS Ridhoka Salma: Edukasi Perawatan Stretch Marks & Selulit",
    type: "kesehatan",
    category: "Ibu & Anak",
    date: "16 September 2026",
    author: "Bidan PMO & Tim Moms Club",
    image: "/assets/fasilitas/momsclub.jpg",
    excerpt:
      "Seminar edukasi membedah mitos dan fakta perubahan kulit saat hamil, serta tips merawat kulit agar tetap sehat dan percaya diri sepanjang kehamilan.",
    url: "https://www.instagram.com/reel/DdXU3bByAoB/",
  },
];
