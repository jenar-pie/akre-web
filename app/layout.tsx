import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RS Ridhoka Salma - Melayani dengan Hati dan Syariah",
  description: "Rumah Sakit Ridhoka Salma Cikarang - Melayani dengan Hati dan Syariah. Layanan kesehatan 24 jam, dokter spesialis, IGD, ICU, NICU, dan fasilitas medis modern di Bekasi.",
  keywords: ["RS Ridhoka Salma", "Rumah Sakit Cikarang", "RS Syariah Bekasi", "IGD 24 Jam Cikarang", "Dokter Spesialis Cikarang"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
