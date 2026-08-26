"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { contacts } from "@/data/contacts";
import { socialMediaLinks } from "@/data/socialMedia";
import { footerNavigation } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-5 lg:px-8 py-8 lg:py-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 border-b border-teal-600/50">

          {/* Column 1: Logo + Info */}
          <div className="lg:col-span-4 space-y-3">
            {/* Logo - original colors */}
            <div className="relative w-[200px] sm:w-[220px] h-[64px] sm:h-[70px]">
              <Image
                src="/assets/logo/LOGO RSRS.svg"
                alt="RS Ridhoka Salma"
                fill
                className="object-contain object-left"
              />
            </div>

            {/* Address */}
            <div className="text-xs text-teal-50 space-y-0.5 leading-relaxed">
              <p>Jl. Raya Imam Bonjol No. 7, Telagamurni,</p>
              <p>Kec. Cikarang Barat, Kabupaten Bekasi,</p>
              <p>Jawa Barat 17530</p>
            </div>

            {/* Contacts */}
            <div className="text-xs text-teal-100 space-y-1">
              <p><span className="font-semibold text-white">Telepon :</span> {contacts.phone}</p>
              <p><span className="font-semibold text-white">Emergency :</span> {contacts.emergency}</p>
              <p>
                <span className="font-semibold text-white">WhatsApp :</span>{" "}
                <a href={contacts.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {contacts.whatsappFormatted}
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Email :</span>{" "}
                <a href={`mailto:${contacts.email}`} className="hover:underline">
                  {contacts.email}
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-5 text-xs">

            <div>
              <h3 className="font-bold text-white text-sm mb-2.5 pb-1.5 border-b border-teal-500/40">Tentang Kami</h3>
              <ul className="space-y-1.5 text-teal-100">
                {footerNavigation.tentangKami.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-white hover:underline transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white text-sm mb-2.5 pb-1.5 border-b border-teal-500/40">Layanan</h3>
              <ul className="space-y-1.5 text-teal-100">
                {footerNavigation.layanan.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-white hover:underline transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white text-sm mb-2.5 pb-1.5 border-b border-teal-500/40">Informasi</h3>
              <ul className="space-y-1.5 text-teal-100">
                {footerNavigation.informasi.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-white hover:underline transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white text-sm mb-2.5 pb-1.5 border-b border-teal-500/40">Kesyariahan</h3>
              <ul className="space-y-1.5 text-teal-100">
                {footerNavigation.kesyariahan.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-white hover:underline transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-teal-100">

          {/* Social Media - white icons */}
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-white text-sm">Ikuti Kami</span>
            <div className="flex items-center gap-2">
              {socialMediaLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                  aria-label={social.name}
                  title={social.name}
                >
                  <div className="relative w-4 h-4">
                    <Image
                      src={social.icon}
                      alt={social.name}
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <p>© 2026 RS Ridhoka Salma. All Right Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
