export interface SocialMediaItem {
  id: string;
  name: string;
  icon: string;
  url: string;
}

export const socialMediaLinks: SocialMediaItem[] = [
  {
    id: "facebook",
    name: "Facebook",
    icon: "/assets/social-media/facebook.svg",
    url: "https://www.facebook.com/rumahsakitridhokasalma/?locale=id_ID",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "/assets/social-media/instagram.svg",
    url: "https://www.instagram.com/rsridhokasalma",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: "/assets/social-media/youtube.svg",
    url: "https://youtube.com/@rs.ridhokasalma2727?si=7gZ-kNcj9btRWf7i",
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: "/assets/social-media/tiktok.png",
    url: "https://www.tiktok.com/discover/rs-ridhoka-salma-cikarang?is_from_webapp=1&sender_device=pc",
  },
];
