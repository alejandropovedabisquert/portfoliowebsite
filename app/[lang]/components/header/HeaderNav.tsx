"use client";
import { getDictionary } from "@/getDictionaries";
import LinkCustom from "../common/link/LinkCustom";
import { useState } from "react";
import LocaleSwitcherCustom from "../common/locale-switcher/LocaleSwitcherCustom";

export default function HeaderNav({
  dict,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>["navigation"];
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToElement = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");

    if (!href) return;

    const targetId = href.includes("/#")
      ? href.split("/#")[1]
      : href.substring(1);

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      toggleMenu();
    }
  };

  const toggleMenu = () => {
    const body = document.body;
    if (!isMenuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <button
        onClick={toggleMenu}
        className="md:hidden ml-auto flex flex-col gap-1.5 w-8 h-8 justify-center items-center relative z-50"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span
          className={`w-full h-0.5 bg-primary transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-full h-0.5 bg-primary transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-full h-0.5 bg-primary transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      <ul
        className={`
          flex flex-col gap-6 
          fixed top-0 right-0 w-full border-l-2 border-primary md:border-0 h-screen bg-background p-8 pt-20
          transform transition-transform duration-300 ease-in-out z-40
          md:relative md:flex-row md:w-auto md:h-auto md:p-0 md:pt-0
          md:transform-none md:bg-transparent
          md:flex-wrap md:justify-end md:gap-8
          ${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
        `}
      >
        {dict.map((item, idx) => (
          <li key={idx} className="font-bold text-xl md:text-base main:text-xl">
            <LinkCustom
              label={item.label}
              href={item.href}
              onClick={item.scrollTo ? scrollToElement : undefined}
            />
          </li>
        ))}
        <li>
          <LocaleSwitcherCustom />
        </li>
      </ul>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
