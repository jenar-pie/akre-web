"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <nav className="w-full bg-primary text-white sticky top-0 z-50 shadow-md">
      {/* Desktop Nav */}
      <div className="max-w-[1280px] mx-auto px-3 sm:px-5 lg:px-8">
        <div className="hidden md:flex items-center h-10 text-xs font-medium">
          <ul className="flex items-center justify-between w-full">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const isOpen = activeDropdown === item.label;

              return (
                <li key={item.label} className="relative group">
                  {hasDropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className={`flex items-center gap-0.5 py-2.5 px-2 lg:px-3 rounded transition-colors hover:bg-primary-dark ${
                        isActive ? "bg-primary-dark font-semibold" : ""
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3 h-3 opacity-80 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center py-2.5 px-2 lg:px-3 rounded transition-colors hover:bg-primary-dark ${
                        isActive ? "bg-primary-dark font-semibold" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {hasDropdown && (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className={`absolute top-full left-0 mt-0 w-52 bg-white text-gray-800 rounded-b-lg shadow-lg border border-gray-100 z-50 transition-all duration-150 overflow-hidden ${
                        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                      }`}
                    >
                      {item.dropdown!.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2.5 text-xs hover:bg-primary/10 hover:text-primary transition-colors border-b border-gray-50 last:border-0"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Topbar */}
        <div className="md:hidden flex items-center justify-between h-10">
          <span className="text-sm font-semibold">Menu Navigasi</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded hover:bg-primary-dark transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-dark border-t border-teal-600 overflow-y-auto max-h-[80vh]">
          {navigationItems.map((item) => {
            const hasDropdown = item.dropdown && item.dropdown.length > 0;
            const isExpanded = mobileExpanded === item.label;

            return (
              <div key={item.label} className="border-b border-teal-600/40 last:border-0">
                {hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileExpanded(item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-primary transition-colors text-left"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 opacity-75 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="bg-teal-800/40">
                        {item.dropdown!.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-8 py-2.5 text-xs text-teal-100 hover:text-white hover:bg-primary transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-medium hover:bg-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}
