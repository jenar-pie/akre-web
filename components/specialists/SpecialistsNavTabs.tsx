"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Layers,
  Baby,
  HeartHandshake,
  Stethoscope,
  Activity,
  Zap,
  UserCheck,
} from "lucide-react";

export default function SpecialistsNavTabs() {
  const pathname = usePathname();

  const tabs = [
    {
      label: "Semua Spesialis",
      href: "/spesialis-kami",
      icon: Layers,
    },
    {
      label: "Anak",
      href: "/spesialis-kami/anak",
      icon: Baby,
    },
    {
      label: "Kebidanan & Kandungan",
      href: "/spesialis-kami/kebidanan",
      icon: HeartHandshake,
    },
    {
      label: "Penyakit Dalam",
      href: "/spesialis-kami/penyakit-dalam",
      icon: Stethoscope,
    },
    {
      label: "Bedah Umum",
      href: "/spesialis-kami/bedah-umum",
      icon: Activity,
    },
    {
      label: "Saraf",
      href: "/spesialis-kami/saraf",
      icon: Zap,
    },
    {
      label: "Cari Dokter",
      href: "/cari-dokter",
      icon: UserCheck,
    },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-10 z-40 shadow-xs">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-2.5 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            const Icon = tab.icon;

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white shadow-xs font-semibold"
                    : "text-gray-600 hover:text-primary hover:bg-primary/10"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-primary"}`} />
                <span>{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
