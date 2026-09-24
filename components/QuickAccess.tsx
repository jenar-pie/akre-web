"use client";

import React from "react";
import {
  ExternalLink,
  Phone,
  Mail,
  Clock,
  Siren,
  MessageCircle,
  MapPin,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { contacts } from "@/data/contacts";

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.986877717462!2d107.1354817!3d-6.2654518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69853a5c7f8f97%3A0xbd84d142d20adcf3!2sRS%20Ridhoka%20Salma!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

export default function QuickAccess() {
  return (
    <section id="quick-access" className="relative w-full py-8 sm:py-12 bg-surface-bg overflow-hidden">
      {/* Ambient Mesh Glow Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-teal-400/10 rounded-full blur-[130px]" />
        <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-sky-300/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Teal Container */}
        <div className="bg-[#3A9D9A] rounded-3xl sm:rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-lg text-white">
          
          {/* Top Row: Info & Maps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs border border-white/20 text-xs font-semibold text-teal-50 mb-3.5 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                <span>Pusat Layanan & Bantuan RS</span>
              </div>

              {/* Enhanced Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.2]">
                Akses Cepat &amp;<br className="hidden sm:inline" /> Informasi Layanan
              </h2>

              {/* Elevated Sub-headline */}
              <p className="text-xs sm:text-sm text-teal-50/95 mt-3 leading-relaxed max-w-lg font-normal">
                Dapatkan kemudahan akses rute lokasi rumah sakit, informasi kontak darurat, serta layanan kesehatan terpadu dan profesional yang selalu siap mendampingi Anda dan keluarga.
              </p>

              {/* Value Highlights */}
              <div className="mt-5 pt-4 border-t border-white/15 grid grid-cols-2 gap-2.5 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-200 flex-shrink-0" />
                  <span className="font-medium">IGD &amp; Ambulans 24 Jam</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-200 flex-shrink-0" />
                  <span className="font-medium">Pelayanan Syariah Ramah</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-200 flex-shrink-0" />
                  <span className="font-medium">Lokasi Strategis Cikarang</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-200 flex-shrink-0" />
                  <span className="font-medium">Respon Tanggap Darurat</span>
                </div>
              </div>
            </div>

            {/* Right Map Card (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[300px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border-4 border-white/20 bg-gray-100">
                <iframe
                  src={MAPS_EMBED_URL}
                  className="w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi RS Ridhoka Salma"
                />
                {/* Floating "Buka di Maps" Badge */}
                <a
                  href={contacts.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white/95 hover:bg-white text-gray-800 hover:text-[#3A9D9A] text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-md border border-gray-100 transition-colors z-10"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#3A9D9A]" />
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-gray-400 ml-0.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Middle Row: Contact Channels Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm mt-6 text-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
              
              {/* Emergency */}
              <a
                href={`https://wa.me/628118252322?text=${encodeURIComponent(
                  "Halo IGD RS Ridhoka Salma, saya membutuhkan bantuan darurat medis segera."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-2xl hover:bg-red-50/50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-full bg-red-50 text-[#d32f2f] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Siren className="w-5 h-5 animate-pulse" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-gray-500">Emergency &amp; IGD 24 Jam</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                    {contacts.emergency}
                  </div>
                </div>
              </a>

              {/* Telepon */}
              <a
                href={`tel:${contacts.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 p-2 rounded-2xl hover:bg-teal-50/50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-full bg-teal-50 text-[#3A9D9A] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-gray-500">Call Center &amp; Info</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                    {contacts.phone}
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={contacts.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-2xl hover:bg-emerald-50/50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-full bg-emerald-50 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-gray-500">WhatsApp Pelayanan</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                    {contacts.whatsapp}
                  </div>
                </div>
              </a>

              {/* E-mail */}
              <a
                href={`mailto:${contacts.email}`}
                className="flex items-center gap-3 p-2 rounded-2xl hover:bg-teal-50/50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-full bg-teal-50 text-[#3A9D9A] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-gray-500">E-mail &amp; Kemitraan</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                    {contacts.email}
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* Bottom Row: Operating Hours Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm mt-3.5 text-gray-800">
            <div className="flex items-center justify-center gap-3 text-center flex-wrap sm:flex-nowrap">
              <div className="w-9 h-9 rounded-full bg-teal-50 text-[#3A9D9A] flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-semibold">
                <span className="font-bold text-[#3A9D9A] mr-2">
                  Jam Operasional:
                </span>
                <span className="text-gray-900 font-bold">
                  IGD &amp; Farmasi 24 Jam Siaga
                </span>
                <span className="mx-2.5 text-gray-300">|</span>
                <span className="text-gray-700">
                  Poliklinik Spesialis: 07.00 - 20.00 WIB
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

