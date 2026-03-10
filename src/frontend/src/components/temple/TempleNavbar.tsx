import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#darshan", label: "Darshan" },
  { href: "#festivals", label: "Festivals" },
  { href: "#gallery", label: "Gallery" },
  { href: "#puja", label: "Puja" },
  { href: "#reach", label: "How to Reach" },
  { href: "#prayers", label: "Prayers" },
  { href: "#contact", label: "Contact" },
];

export default function TempleNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-temple-night/95 backdrop-blur-md shadow-deep"
          : "bg-gradient-to-b from-temple-night/80 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center gap-2.5 group"
          onClick={() => {
            window.location.hash = "#home";
            setMenuOpen(false);
          }}
        >
          <span
            className="text-2xl font-devanagari leading-none"
            style={{ color: "oklch(0.82 0.14 82)" }}
          >
            ॐ
          </span>
          <div className="flex flex-col leading-none">
            <span
              className="font-display text-xs tracking-widest uppercase"
              style={{ color: "oklch(0.82 0.14 82)" }}
            >
              Aghanzar
            </span>
            <span
              className="font-display text-xs tracking-widest uppercase"
              style={{ color: "oklch(0.96 0.014 72)" }}
            >
              Mahadev Temple
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-200 rounded"
              style={{ color: "oklch(0.85 0.02 72 / 0.8)" }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color =
                  "oklch(0.82 0.14 82)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color =
                  "oklch(0.85 0.02 72 / 0.8)";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Har Har Mahadev tag — desktop only */}
        <div
          className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-devanagari font-bold tracking-wide"
          style={{
            background: "oklch(0.68 0.20 50 / 0.15)",
            border: "1px solid oklch(0.68 0.20 50 / 0.35)",
            color: "oklch(0.82 0.14 82)",
          }}
        >
          हर हर महादेव
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-md"
          style={{ color: "oklch(0.82 0.14 82)" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "oklch(0.16 0.04 38 / 0.98)",
            borderColor: "oklch(0.68 0.20 50 / 0.2)",
          }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2.5 px-3 text-sm font-sans font-semibold tracking-wider uppercase rounded transition-all"
                style={{ color: "oklch(0.85 0.02 72 / 0.85)" }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color =
                    "oklch(0.82 0.14 82)";
                  (e.target as HTMLAnchorElement).style.background =
                    "oklch(0.68 0.20 50 / 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color =
                    "oklch(0.85 0.02 72 / 0.85)";
                  (e.target as HTMLAnchorElement).style.background =
                    "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
