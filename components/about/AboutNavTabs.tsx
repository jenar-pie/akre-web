"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  History,
  Target,
  Users2,
  Award,
  Info,
} from "lucide-react";

export default function AboutNavTabs() {
  const pathname = usePathname();

  const tabs = [
    {
      label: "Sekilas Profil",
      href: "/tentang-kami",
      icon: Info,
    },
    {
      label: "Sejarah",
      href: "/tentang-kami/sejarah",
      icon: History,
    },
    {
      label: "Visi & Misi",
      href: "/tentang-kami/visi-misi",
      icon: Target,
    },
    {
      label: "Struktur Organisasi",
      href: "/tentang-kami/struktur-organisasi",
      icon: Users2,
    },
    {
      label: "Akreditasi & Penghargaan",
      href: "/tentang-kami/akreditasi",
      icon: Award,
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
