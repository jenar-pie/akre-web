export interface EducationItem {
  year: string;
  degree: string;
}

export interface DPSMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  hospital: string;
  badge: string;
  code: string;
  experience: string;
  focus: string;
  image: string;
  birthInfo: string;
  education: EducationItem[];
  activities: string[];
  quote: string;
}

export const dpsMembersData: DPSMember[] = [
  {
    id: "dps-1",
    slug: "latief-awaludin",
    name: "Dr. Latief Awaludin",
    role: "Dewan Pengawas Syariah",
    hospital: "RS Ridhoka Salma",
    badge: "Dewan Pengawas Syariah",
    code: "Pakar Fiqih Muamalah",
    experience: "S3 Hukum Ekonomi Syariah",
    focus: "Anggota Dewan Syariah Nasional MUI Pusat",
    image: "/assets/profil/latief.png",
    birthInfo: "Tasik, 14 September 1978",
    education: [
      { year: "1998", degree: "Pesantren Persis Pajagalan Bandung" },
      { year: "2002", degree: "S1 UIN Bandung, Syariah" },
      { year: "2005", degree: "S2 UIN Jakarta, Syariah" },
      { year: "2010", degree: "S2 UGM, Ekonomi Islam" },
      { year: "2017", degree: "S3 Hukum Ekonomi Syariah" },
    ],
    activities: [
      "Dosen STAI Bandung",
      "Dosen UIN Bandung Fak. Syariah",
      "DPS (Dewan Pengawas Syariah) BPRS Baiturridha Pusaka",
      "DPS Rumah Sakit Islam Ridhoka Salma Cikarang",
      "Anggota Dewan Syariah Nasional MUI Pusat",
    ],
    quote: "Kesehatan adalah amanah, dan setiap amanah harus dijaga dengan ilmu, keikhlasan, dan nilai-nilai Islam.",
  },
  {
    id: "dps-2",
    slug: "muhammad-yunus",
    name: "Muhammad Yunus, S.H.I, M.E.SY",
    role: "Dewan Pengawas Syariah",
    hospital: "RS Ridhoka Salma",
    badge: "Dewan Pengawas Syariah",
    code: "Dosen Fakultas Syariah UNISBA",
    experience: "S2 Ekonomi Islam UIN Bandung",
    focus: "DPS Rumah Sakit Syariah Ridhoka Salma",
    image: "/assets/profil/yunus.png",
    birthInfo: "Rantauprapat, 13 Nopember 1984",
    education: [
      { year: "1998", degree: "Ma'had at-Thoyyibah Sumut" },
      { year: "2000", degree: "Ma'had Cempaka Warna Tasikmalaya" },
      { year: "2004", degree: "S1 Syari'ah Universitas Islam Bandung" },
      { year: "2011", degree: "S2 Ekonomi Islam Universitas Islam Negeri Bandung" },
    ],
    activities: [
      "Dosen Fakultas Syariah UNISBA",
      "Kepala Bidang Fatwa Kajian Islam Dan Pengelolaan Masjid",
      "Kabag Ruhul Islam dan Pengelolaan Masjid",
      "Dewan Pengawas Syariah di BPRS Baitur Ridha Pusaka",
      "Dewan Pengawas Syariah di Rumah Sakit Syariah Ridhoka Salma",
      "Imam Tetap Masjid Trans Studio Bandung",
      "Pengajar Qur'an TAR-Q",
      "Pengajar Program terjemah al-Qur'an sistem 40 jam di MUI Jabar",
      "Dosen STIKES Bhakti Kencana",
      "Prudential Syariah",
      "K-LINK Internasional",
      "Account officier BPRS Salman ITB",
    ],
    quote: "Pelayanan kesehatan yang berlandaskan syariah mengintegrasikan keahlian medis dengan ketulusan doa dan bimbingan ibadah pasien.",
  },
];
