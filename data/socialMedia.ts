export interface SocialMediaItem {
  id: string;
  name: string;
  icon: string;
  url: string;
  image?: string;
}

export const socialMediaLinks: SocialMediaItem[] = [
  {
    id: "facebook",
    name: "Facebook",
    icon: "/assets/social-media/facebook.svg",
    url: "https://www.facebook.com/rumahsakitridhokasalma/?locale=id_ID",
    image: "/assets/fasilitas/poli-eksekutif4.png",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "/assets/social-media/instagram.svg",
    url: "https://www.instagram.com/rs.ridhokasalma?stkn=aGc1enQzbTFuN284",
    image: "/assets/fasilitas/poli-eksekutif1.png",
  },
  {
    id: "threads",
    name: "Threads",
    icon: "/assets/social-media/threads.svg",
    url: "https://www.threads.com/@rs.ridhokasalma",
    image: "/assets/fasilitas/poli-eksekutif2.png",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: "/assets/social-media/youtube.svg",
    url: "https://youtube.com/@rs.ridhokasalma2727?si=7gZ-kNcj9btRWf7i",
    image: "/assets/fasilitas/mushola.png",
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: "/assets/social-media/tiktok.png",
    url: "https://www.tiktok.com/discover/rs-ridhoka-salma-cikarang?is_from_webapp=1&sender_device=pc",
    image: "/assets/fasilitas/poli-eksekutif3.png",
  },
];
