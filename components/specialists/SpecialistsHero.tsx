"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home, Stethoscope } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SpecialistsHeroProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function SpecialistsHero({
  badge,
  title,
  description,
  breadcrumbs,
}: SpecialistsHeroProps) {
  return (
    <div className="relative w-full bg-gradient-to-r from-primary-dark via-primary to-primary-hover text-white overflow-hidden py-10 sm:py-14 lg:py-16">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white blur-3xl"></div>
        <div className="absolute left-1/3 -bottom-20 w-96 h-96 rounded-full bg-accent-gold blur-3xl"></div>
        <svg
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L100,0 L100,100 Z"
            fill="rgba(255,255,255,0.03)"
          />
        </svg>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-teal-100/90 flex-wrap">
            <li className="flex items-center gap-1">
              <Link
                href="/"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Beranda</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-teal-200/60" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Badge & Title */}
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white backdrop-blur-xs border border-white/20 mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></span>
              <span>{badge}</span>
            </div>
          )}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3 leading-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-teal-50/90 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
