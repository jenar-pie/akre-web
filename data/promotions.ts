export interface PromotionItem {
  id: string;
  title: string;
  image?: string;
  price?: string;
  priceBadge?: string;
  category?: string;
  link?: string;
  badgeBg?: string;
}

export const promotionsData: PromotionItem[] = [
  {
    id: "vaksin-meningitis",
    title: "Paket Vaksin Meningitis & Influenza",
    priceBadge: "Mulai dari Rp 595.000",
    category: "Vaksinasi & Umrah",
    link: "/informasi/promosi/vaksin-meningitis"
  },
  {
    id: "promo-ramadhan-glowing",
    title: "Promo Ramadhan Glowing",
    priceBadge: "Mulai dari Rp 195.000",
    category: "Aesthetic Clinic",
    link: "/informasi/promosi/ramadhan-glowing"
  },
  {
    id: "paket-maternity",
    title: "Paket Maternity",
    priceBadge: "Mulai dari Rp 3.979.000",
    category: "Persalinan",
    link: "/informasi/promosi/paket-maternity"
  }
];
