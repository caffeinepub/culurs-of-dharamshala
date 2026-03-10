import { ChevronDown } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/temple-hero.dim_1200x600.jpg"
          alt="Aghanzar Mahadev Temple"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Deep overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              oklch(0.13 0.04 35 / 0.30) 0%,
              oklch(0.13 0.04 35 / 0.58) 40%,
              oklch(0.13 0.04 35 / 0.85) 75%,
              oklch(0.13 0.04 35 / 0.95) 100%
            )`,
          }}
        />
      </div>

      {/* Decorative mandala ring */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            border: "1px solid oklch(0.82 0.14 82)",
            boxShadow:
              "0 0 80px oklch(0.68 0.20 50 / 0.15), inset 0 0 80px oklch(0.68 0.20 50 / 0.05)",
          }}
        />
        <div
          className="absolute w-[450px] h-[450px] rounded-full opacity-15"
          style={{ border: "1px dashed oklch(0.82 0.14 82)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-24 max-w-4xl mx-auto">
        {/* Om symbol - large floating */}
        <div
          className="text-7xl md:text-9xl font-devanagari leading-none mb-6 animate-float"
          style={{
            color: "oklch(0.82 0.14 82)",
            textShadow:
              "0 0 40px oklch(0.68 0.20 50 / 0.8), 0 0 80px oklch(0.68 0.20 50 / 0.4)",
            animationDuration: "5s",
          }}
          aria-hidden="true"
        >
          ॐ
        </div>

        {/* Main Sanskrit heading */}
        <h1
          className="font-devanagari text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          style={{
            color: "oklch(0.97 0.018 75)",
            textShadow: "0 2px 20px oklch(0.13 0.04 35 / 0.5)",
          }}
        >
          ॐ नमः शिवाय
        </h1>

        {/* Trishul decorative divider */}
        <div
          className="flex items-center gap-4 my-4 w-full max-w-sm"
          aria-hidden="true"
        >
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.82 0.14 82 / 0.8))",
            }}
          />
          <span className="text-xl" style={{ color: "oklch(0.82 0.14 82)" }}>
            𑁍
          </span>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.82 0.14 82 / 0.8), transparent)",
            }}
          />
        </div>

        {/* Temple name */}
        <h2
          className="font-display text-xl md:text-3xl lg:text-4xl tracking-wide mb-2"
          style={{ color: "oklch(0.93 0.08 68)" }}
        >
          Aghanzar Mahadev Temple
        </h2>
        <p
          className="font-cormorant text-base md:text-lg italic mb-8"
          style={{ color: "oklch(0.80 0.04 68)" }}
        >
          Dharamshala, Himachal Pradesh
        </p>

        {/* Tagline */}
        <p
          className="font-cormorant text-lg md:text-xl lg:text-2xl italic max-w-xl mb-10"
          style={{ color: "oklch(0.90 0.03 72)" }}
        >
          "Nestled in the sacred foothills of the Dhauladhar Himalayas"
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#darshan"
            className="px-7 py-3 rounded-full font-sans font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.42 0.18 22), oklch(0.68 0.20 50))",
              color: "oklch(0.99 0.006 72)",
              boxShadow: "0 4px 24px oklch(0.68 0.20 50 / 0.4)",
            }}
          >
            View Darshan Timings
          </a>
          <a
            href="#festivals"
            className="px-7 py-3 rounded-full font-sans font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "oklch(0.99 0.006 72 / 0.08)",
              border: "1.5px solid oklch(0.82 0.14 82 / 0.6)",
              color: "oklch(0.90 0.08 68)",
              backdropFilter: "blur(8px)",
            }}
          >
            Upcoming Festivals
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
        style={{ color: "oklch(0.82 0.14 82 / 0.7)" }}
        aria-hidden="true"
      >
        <span className="text-xs font-sans tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
