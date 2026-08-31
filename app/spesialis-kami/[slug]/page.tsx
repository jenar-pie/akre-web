import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Baby,
  HeartHandshake,
  Stethoscope,
  Activity,
  Zap,
  HeartPulse,
  Eye,
  Headphones,
  Smile,
  Shield,
  Wind,
  Sparkles,
  ArrowRight,
  UserCheck,
  Calendar,
  Clock,
  CheckCircle2,
  Phone,
  ShieldCheck,
  ChevronLeft,
} from "lucide-react";
import SpecialistsHero from "@/components/specialists/SpecialistsHero";
import SpecialistsNavTabs from "@/components/specialists/SpecialistsNavTabs";
import { specialistsData, Specialist } from "@/data/specialists";
import { contacts } from "@/data/contacts";

const iconMap: Record<string, React.ElementType> = {
  Baby,
  HeartHandshake,
  Stethoscope,
  Activity,
  Zap,
  HeartPulse,
  Eye,
  Headphones,
  Smile,
  Shield,
  Wind,
  Sparkles,
};

export async function generateStaticParams() {
  return specialistsData.map((item) => ({
    slug: item.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const specialist = specialistsData.find((s) => s.slug === params.slug);
  if (!specialist) {
    return {
      title: "Spesialis Tidak Ditemukan - RS Ridhoka Salma",
    };
  }

  return {
    title: `${specialist.title} - RS Ridhoka Salma Cikarang`,
    description: specialist.shortDescription,
  };
}

export default function SpecialistDetailPage({ params }: PageProps) {
  const specialist = specialistsData.find((s) => s.slug === params.slug);

  if (!specialist) {
    notFound();
  }

  const IconComponent = iconMap[specialist.iconName] || Stethoscope;
  const otherSpecialists = specialistsData.filter((s) => s.slug !== specialist.slug).slice(0, 4);

  return (
    <div className="bg-surface-bg min-h-screen">
      {/* Hero Header */}
      <SpecialistsHero
        badge={specialist.badge || "Poliklinik Spesialis"}
        title={specialist.title}
        description={specialist.shortDescription}
        breadcrumbs={[
          { label: "Spesialis Kami", href: "/spesialis-kami" },
          { label: specialist.title },
        ]}
      />

      {/* Navigation Sub-Tabs */}
      <SpecialistsNavTabs />

      {/* Main Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 sm:space-y-12">
        
        {/* Back Link */}
        <div>
          <Link
            href="/spesialis-kami"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Kembali ke Semua Spesialis</span>
          </Link>
        </div>

        {/* Overview & Highlights with Clinic Dummy Image */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Dummy Image & Overview description */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Dummy Image Banner of the Clinic */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
                <Image
                  src={specialist.image}
                  alt={specialist.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-lg bg-white/95 text-primary shadow-xs">
                      {specialist.code}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-black/40 backdrop-blur-xs text-white">
                      {specialist.categoryLabel}
                    </span>
                  </div>
                  {specialist.badge && (
                    <span className="text-xs font-bold px-3 py-1 rounded-lg bg-accent-gold/90 text-white shadow-xs">
                      ★ {specialist.badge}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-xs flex-shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                    Tentang {specialist.title}
                  </h2>
                  <p className="text-xs text-gray-500 font-medium">
                    RS Ridhoka Salma Cikarang Barat
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                {specialist.fullDescription}
              </p>

              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                  Lingkup Layanan & Tindakan Medis
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {specialist.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-gray-800 bg-surface-bg p-2.5 rounded-xl border border-gray-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs text-primary-dark leading-relaxed">
                  Semua prosedur pemeriksaan dan tindakan medis dilakukan dengan mengedepankan etika kedokteran syariah, menjaga privasi dan aurat pasien, serta menggunakan peralatan medis steril berstandar rumah sakit.
                </p>
              </div>
            </div>

            {/* Right: Quick Action Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-primary-dark via-primary to-teal-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg space-y-5 lg:sticky lg:top-28">
              <span className="text-xs uppercase tracking-widest text-teal-200 font-bold">
                Pendaftaran Rawat Jalan
              </span>
              <h3 className="text-xl font-extrabold leading-tight">
                Jadwalkan Konsultasi dengan Dokter Spesialis
              </h3>
              <p className="text-xs text-teal-50/90 leading-relaxed">
                Hindari antrean panjang dengan melakukan registrasi jadwal dokter secara mandiri atau konsultasikan jadwal melalui staf customer service kami.
              </p>

              <div className="space-y-2.5 pt-2">
                <Link
                  href="/janji-temu"
                  className="w-full text-center inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-dark px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Buat Janji Temu Online</span>
                </Link>
                <a
                  href={`https://wa.me/${contacts.whatsappLink.split("/").pop()}?text=${encodeURIComponent(`Halo RS Ridhoka Salma, saya ingin mendaftar ke ${specialist.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors"
                >
                  <span>Chat WhatsApp Pendaftaran</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-4 border-t border-teal-500/30 text-xs text-teal-100 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Layanan IGD & Ambulans Siaga 24 Jam</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" />
                  <span>IGD Emergency: {contacts.emergency}</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Doctor Team Cards with Avatars */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Tim Dokter Spesialis
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Daftar dokter yang berpraktik di {specialist.title} RS Ridhoka Salma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {specialist.doctors.map((doctor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-card hover:shadow-lg transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-teal-400 text-white flex items-center justify-center flex-shrink-0 shadow-xs font-bold text-lg">
                      <UserCheck className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-tight">
                        {doctor.name}
                      </h3>
                      <p className="text-xs font-semibold text-primary mt-0.5">
                        {doctor.title}
                      </p>
                      {doctor.subspecialty && (
                        <p className="text-xs text-gray-500 mt-0.5">
                          {doctor.subspecialty}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 text-xs bg-surface-bg p-3.5 rounded-xl border border-gray-100 mb-4">
                    {doctor.schedule && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="font-medium">{doctor.schedule}</span>
                      </div>
                    )}
                    {doctor.experience && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                        <span>{doctor.experience}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                  <Link
                    href="/janji-temu"
                    className="flex-1 text-center inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-semibold transition-colors shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Pilih Dokter & Janji Temu</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Specialties Quick Nav with Dummy Images */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Layanan Spesialis Lainnya
              </h2>
              <p className="text-xs text-gray-500">
                Jelajahi spesialisasi medis lainnya di RS Ridhoka Salma
              </p>
            </div>
            <Link
              href="/spesialis-kami"
              className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
            >
              <span>Lihat Semua</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherSpecialists.map((other) => {
              const OtherIcon = iconMap[other.iconName] || Stethoscope;
              return (
                <Link
                  key={other.id}
                  href={`/spesialis-kami/${other.slug}`}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md hover:border-primary/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    {/* Dummy image thumbnail */}
                    <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                      <Image
                        src={other.image}
                        alt={other.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                      <div className="absolute top-2.5 right-2.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/95 text-primary shadow-xs">
                          {other.code}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5">
                      <h3 className="font-bold text-gray-900 text-xs sm:text-sm group-hover:text-primary transition-colors line-clamp-1 mb-1">
                        {other.title}
                      </h3>
                      <p className="text-[11px] text-gray-500 line-clamp-2">
                        {other.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div className="px-3.5 pb-3 pt-1 border-t border-gray-50 flex items-center justify-between text-[11px] font-semibold text-primary">
                    <span>Lihat Detail</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
