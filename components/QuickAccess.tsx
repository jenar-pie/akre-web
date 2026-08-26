"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { contacts } from "@/data/contacts";

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.986877717462!2d107.1354817!3d-6.2654518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69853a5c7f8f97%3A0xbd84d142d20adcf3!2sRS%20Ridhoka%20Salma!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

export default function QuickAccess() {
  return (
    <section className="w-full py-6 sm:py-8 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-subtle p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">

            {/* Left: Text, Button, Contacts */}
            <div className="flex flex-col gap-3 lg:gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">
                  Akses cepat layanan kami
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-1">
                  Lakukan reservasi rawat jalan melalui:
                </p>
              </div>

              <div className="flex justify-start">
                <Link
                  href="/janji-temu"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base lg:text-lg transition-colors"
                >
                  Buat Janji Temu
                </Link>
              </div>

              <div className="mt-1">
                <p className="text-sm sm:text-base lg:text-lg text-gray-800 mb-2.5">
                  Atau hubungi kami melalui:
                </p>
                <div className="space-y-2.5 lg:space-y-3.5 text-sm sm:text-base lg:text-lg text-gray-800">
                  <div className="flex items-center gap-2.5 lg:gap-3">
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0">
                      <Image src="/assets/icons/ambulan.svg" alt="Emergency" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-red-600">Emergency : {contacts.emergency}</span>
                  </div>
                  <div className="flex items-center gap-2.5 lg:gap-3">
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0">
                      <Image src="/assets/icons/telephone.svg" alt="Telepon" fill className="object-contain" />
                    </div>
                    <span className="font-bold">Telepon : {contacts.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5 lg:gap-3">
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0">
                      <Image src="/assets/icons/WhatsApp.png" alt="WhatsApp" fill className="object-contain" />
                    </div>
                    <span className="font-bold">
                      WhatsApp :{" "}
                      <a href={contacts.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary">
                        {contacts.whatsapp}
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 lg:gap-3">
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0">
                      <Image src="/assets/icons/email.svg" alt="Email" fill className="object-contain" />
                    </div>
                    <span className="font-bold">
                      E-mail :{" "}
                      <a href={`mailto:${contacts.email}`} className="font-bold hover:text-primary">
                        {contacts.email}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Google Maps embed */}
            <div className="w-full h-full flex flex-col">
              <a
                href={contacts.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Buka Lokasi RS Ridhoka Salma di Google Maps"
                className="block relative w-full flex-1 min-h-[300px] sm:min-h-[340px] lg:min-h-[380px] rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <iframe
                  src={MAPS_EMBED_URL}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0, pointerEvents: "none" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi RS Ridhoka Salma"
                />
                {/* clickable overlay */}
                <div className="absolute inset-0 cursor-pointer" />
              </a>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 text-center">
                Klik untuk membuka di Google Maps ↗
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
