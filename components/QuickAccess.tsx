"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  ExternalLink,
  Phone,
  Mail,
  Clock,
  Siren,
  MessageCircle,
} from "lucide-react";
import { contacts } from "@/data/contacts";

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.986877717462!2d107.1354817!3d-6.2654518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69853a5c7f8f97%3A0xbd84d142d20adcf3!2sRS%20Ridhoka%20Salma!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

export default function QuickAccess() {
  return (
    <section className="w-full py-8 sm:py-12 bg-surface-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Teal Container */}
        <div className="bg-[#3A9D9A] rounded-3xl sm:rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-lg text-white">
          
          {/* Top Row: Info & Maps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Akses cepat<br />layanan kami
              </h2>
              <p className="text-xs sm:text-sm text-teal-50/90 mt-3 leading-relaxed max-w-md">
                Kami siap melayani Anda dengan cepat kapanpun dan dimanapun Anda berada.
              </p>

              <div>
                <Link
                  href="/janji-temu"
                  className="mt-6 inline-flex items-center gap-2 bg-white hover:bg-teal-50 text-[#3A9D9A] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-sm transition-all duration-200 active:scale-95"
                >
                  <Calendar className="w-4 h-4 text-[#3A9D9A]" />
                  <span>Buat Janji Temu</span>
                </Link>
              </div>
            </div>

            {/* Right Map Card (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[230px] sm:h-[280px] lg:h-[300px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border-4 border-white/20 bg-gray-100">
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
                  <span>Buka di Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#3A9D9A]" />
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
                  <div className="text-xs font-semibold text-gray-500">Emergency</div>
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
                  <div className="text-xs font-semibold text-gray-500">Telepon</div>
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
                  <div className="text-xs font-semibold text-gray-500">WhatsApp</div>
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
                  <div className="text-xs font-semibold text-gray-500">E-mail</div>
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
                  Jam Layanan:
                </span>
                <span className="text-gray-800 font-bold">
                  IGD 24 Jam
                </span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-700">
                  Poliklinik 07.00 - 20.00 WIB
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

