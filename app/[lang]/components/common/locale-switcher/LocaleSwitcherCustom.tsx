"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/i18n-config";
import { useState, useRef, useEffect } from "react";

export default function LocaleSwitcherCustom() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale =
    (pathname?.split("/")[1] as Locale) || i18n.defaultLocale;

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const localeNames: Record<Locale, string> = {
    en: "English",
    es: "Español",
  };

  const localeFlags: Record<Locale, string> = {
    en: "🇬🇧",
    es: "🇪🇸",
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="relative w-fit" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Selector de idioma"
        className="relative flex items-center gap-2 font-bold text-xl md:text-base main:text-xl cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-3 after:bg-accent after:-z-10 hover:after:scale-x-100 after:scale-x-0 after:origin-bottom-left after:transition-transform after:duration-300"
      >
        <span className="text-lg" aria-hidden="true">
          {localeFlags[currentLocale]}
        </span>
        <span>{currentLocale.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <nav
          role="menu"
          aria-label="Opciones de idioma"
          className="absolute left-0 md:left-auto md:right-0 mt-2 w-48 shadow-lg bg-background border-2 border-primary z-50"
        >
          <ul>
            {i18n.locales.map((locale) => {
              const isActive = currentLocale === locale;

              return (
                <li key={locale} role="none">
                  <Link
                    href={redirectedPathname(locale)}
                    role="menuitem"
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      flex items-center gap-3 px-4 py-2 transition-colors font-bold text-lg
                      ${isActive ? "bg-accent" : "text-primary hover:bg-accent"}
                    `}
                  >
                    <span className="text-lg" aria-hidden="true">
                      {localeFlags[locale]}
                    </span>
                    <span>{localeNames[locale]}</span>
                    {isActive && (
                      <svg
                        className="ml-auto w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
