"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Siren,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Search,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { contacts } from "@/data/contacts";

const categoryTitles: Record<string, string> = {
  "Tentang Kami": "TENTANG KAMI",
  "Layanan": "LAYANAN RUMAH SAKIT",
  "Spesialis Kami": "SPESIALISASI MEDIS",
  "Informasi": "INFORMASI & BERITA",
  "Kesyariahan": "LAYANAN KESYARIAHAN",
};

const whatsappEmergencyUrl = `https://wa.me/628118252322?text=${encodeURIComponent(
  "Halo IGD RS Ridhoka Salma, saya membutuhkan bantuan darurat medis segera."
)}`;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown & drawer on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/cari-dokter?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  // Filter items (skip Janji Temu from menu list since it is rendered as primary action button on right)
  const menuItems = navigationItems.filter(
    (item) => item.label !== "Janji Temu"
  );

  return (
    <header ref={navRef} className="w-full sticky top-0 z-50 bg-white shadow-xs">
      {/* 1. Top Bar */}
      <div className="w-full bg-gradient-to-r from-[#1C5555] to-[#3A9D9A] text-white text-[11px] sm:text-xs">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
          
          {/* Left Contact & Address Info */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap overflow-hidden">
            <div className="flex items-center gap-1.5 opacity-95">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate max-w-[220px] sm:max-w-none">
                Jl. Raya Imam Bonjol No. 7, Cikarang Barat
              </span>
            </div>

            <a
              href={`tel:${contacts.phone.replace(/\s+/g, "")}`}
              className="hidden sm:flex items-center gap-1.5 hover:underline opacity-95"
            >
              <Phone className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{contacts.phone}</span>
            </a>

            <a
              href={`mailto:${contacts.email}`}
              className="hidden md:flex items-center gap-1.5 hover:underline opacity-95"
            >
              <Mail className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{contacts.email}</span>
            </a>
          </div>

          {/* Right Social & 24 Hours Info */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>

            <span className="opacity-40 hidden sm:inline">|</span>

            <div className="hidden sm:flex items-center gap-1.5 opacity-95 font-medium">
              <Clock className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Jam Layanan 24 Jam</span>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="w-full bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-2">
            
            {/* Logo on Left */}
            <Link href="/" className="flex-shrink-0 mr-4 lg:mr-6">
              <div className="relative w-[160px] h-[46px] sm:w-[200px] sm:h-[56px] lg:w-[220px] lg:h-[60px]">
                <Image
                  src="/assets/logo/LOGO RSRS.svg"
                  alt="RS Ridhoka Salma"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Center Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {menuItems.map((item) => {
                const isExactActive = pathname === item.href;
                const isChildActive =
                  item.dropdown &&
                  item.dropdown.some((sub) => pathname === sub.href);
                const isActive = isExactActive || isChildActive;
                const hasDropdown = item.dropdown && item.dropdown.length > 0;
                const isOpen = openDropdown === item.label;

                return (
                  <div key={item.label} className="relative">
                    {hasDropdown ? (
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-all relative ${
                          isActive || isOpen
                            ? "text-[#3A9D9A]"
                            : "text-gray-800 hover:text-[#3A9D9A]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isOpen
                              ? "rotate-180 text-[#3A9D9A]"
                              : "text-gray-500 opacity-80"
                          }`}
                        />
                        {/* Active Underline Indicator */}
                        {isActive && (
                          <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#3A9D9A] rounded-full" />
                        )}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center px-3 py-2 text-sm font-semibold transition-all relative ${
                          isActive
                            ? "text-[#3A9D9A]"
                            : "text-gray-800 hover:text-[#3A9D9A]"
                        }`}
                      >
                        {item.label}
                        {/* Active Underline Indicator */}
                        {isActive && (
                          <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#3A9D9A] rounded-full" />
                        )}
                      </Link>
                    )}

                    {/* Dropdown Popover */}
                    {hasDropdown && isOpen && (
                      <div
                        onMouseLeave={() => setOpenDropdown(null)}
                        className="absolute top-full left-0 mt-2.5 w-64 bg-white rounded-2xl shadow-xl border border-gray-100/90 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                      >
                        {/* Caret Pointer */}
                        <div className="absolute -top-1.5 left-7 w-3.5 h-3.5 bg-white border-t border-l border-gray-100 rotate-45 transform" />

                        {/* Category Title */}
                        <div className="px-3 pt-1.5 pb-2 text-[11px] font-extrabold tracking-wider text-[#3A9D9A] uppercase border-b border-gray-100/80 mb-1.5">
                          {categoryTitles[item.label] || item.label}
                        </div>

                        {/* Submenu Items */}
                        <div className="space-y-1">
                          {item.dropdown!.map((sub) => {
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setOpenDropdown(null)}
                                className={`block px-3.5 py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-150 ${
                                  isSubActive
                                    ? "bg-[#eef7f6] text-[#3A9D9A] font-bold"
                                    : "text-gray-700 hover:bg-[#eef7f6] hover:text-[#3A9D9A] font-medium"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Controls: Search, Emergency, Janji Temu */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Search Toggle Button */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all shadow-2xs ${
                    searchOpen
                      ? "bg-teal-50 border-[#3A9D9A] text-[#3A9D9A]"
                      : "border-gray-200 text-gray-700 hover:border-[#3A9D9A] hover:text-[#3A9D9A]"
                  }`}
                  aria-label="Cari"
                >
                  <Search className="w-4 h-4" />
                </button>

                {/* Floating Search Input Popover */}
                {searchOpen && (
                  <form
                    onSubmit={handleSearchSubmit}
                    className="absolute right-0 top-full mt-3 w-72 sm:w-80 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 z-50 flex items-center gap-2 animate-in fade-in slide-in-from-top-2"
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Cari dokter atau layanan..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 text-xs sm:text-sm px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3A9D9A]/30 focus:border-[#3A9D9A]"
                    />
                    <button
                      type="submit"
                      className="bg-[#3A9D9A] hover:bg-[#2A7B78] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors"
                    >
                      Cari
                    </button>
                  </form>
                )}
              </div>

              {/* Emergency Button - Red Pill */}
              <a
                href={whatsappEmergencyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#d32f2f] hover:bg-[#b71c1c] active:scale-95 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full shadow-xs transition-all whitespace-nowrap"
              >
                <Siren className="w-4 h-4 animate-pulse" />
                <span>Emergency</span>
              </a>

              {/* Janji Temu Button - Teal Pill */}
              <Link
                href="/janji-temu"
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#3A9D9A] hover:bg-[#2A7B78] active:scale-95 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full shadow-xs transition-all whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Janji Temu</span>
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors ml-1"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900" />
                )}
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-100 shadow-xl overflow-y-auto max-h-[85vh] animate-in slide-in-from-top duration-200">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const isExpanded = mobileExpanded === item.label;
              const isActive =
                pathname === item.href ||
                (item.dropdown &&
                  item.dropdown.some((sub) => pathname === sub.href));

              return (
                <div
                  key={item.label}
                  className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50/50"
                >
                  {hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileExpanded(item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-gray-800 hover:bg-teal-50/50 transition-colors text-left"
                      >
                        <span className={isActive ? "text-[#3A9D9A]" : ""}>
                          {item.label}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-[#3A9D9A]" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Accordion Subitems */}
                      {isExpanded && (
                        <div className="bg-white px-3 py-2 space-y-1 border-t border-gray-100">
                          <div className="px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#3A9D9A]">
                            {categoryTitles[item.label] || item.label}
                          </div>
                          {item.dropdown!.map((sub) => {
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors ${
                                  isSubActive
                                    ? "bg-[#eef7f6] text-[#3A9D9A]"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-[#3A9D9A]"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-sm font-bold transition-colors ${
                        isActive
                          ? "bg-teal-50 text-[#3A9D9A]"
                          : "text-gray-800 hover:bg-teal-50/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}

            {/* Mobile Action Buttons */}
            <div className="pt-3 pb-1 space-y-2">
              <Link
                href="/janji-temu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#3A9D9A] hover:bg-[#2A7B78] text-white font-bold text-sm py-3 rounded-xl shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Buat Janji Temu</span>
              </Link>
              <a
                href={whatsappEmergencyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white font-bold text-sm py-3 rounded-xl shadow-xs"
              >
                <Siren className="w-4 h-4" />
                <span>WhatsApp IGD: {contacts.emergency}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


