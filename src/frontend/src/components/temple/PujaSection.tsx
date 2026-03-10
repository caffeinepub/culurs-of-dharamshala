import { Clock, Flower2, IndianRupee } from "lucide-react";
import React from "react";

const PUJAS = [
  {
    id: "rudrabhishek",
    name: "Rudrabhishek Puja",
    devanagari: "रुद्राभिषेक",
    description:
      "Ritual bathing of the Shiva Lingam with milk, honey, curd, ghee, and water. The most revered puja offered to Mahadev, performed with Vedic mantras.",
    timing: "6:00 AM – 11:00 AM",
    donation: "₹501 onwards",
    highlight: true,
  },
  {
    id: "maha-rudrabhishek",
    name: "Maha Rudrabhishek",
    devanagari: "महारुद्राभिषेक",
    description:
      "Grand version of Rudrabhishek with full Vedic chanting by priests. A deeply auspicious ceremony for special occasions and blessings.",
    timing: "By Appointment",
    donation: "₹2100 onwards",
    highlight: false,
  },
  {
    id: "daily-aarti",
    name: "Daily Aarti",
    devanagari: "आरती",
    description:
      "Morning and evening aarti with camphor, incense, and flowers. Open and free for all devotees — the most accessible way to participate in temple worship.",
    timing: "5:00 AM & 6:00 PM",
    donation: "Free for All Devotees",
    highlight: false,
  },
  {
    id: "satyanarayan",
    name: "Satyanarayan Katha",
    devanagari: "सत्यनारायण कथा",
    description:
      "Special prayer ceremony for auspicious occasions such as housewarmings, birthdays, and family blessings. Performed by temple priests.",
    timing: "By Appointment",
    donation: "₹1100 onwards",
    highlight: false,
  },
];

const OFFERINGS = [
  { emoji: "🌿", name: "Bilva Leaves", sub: "Most sacred to Shiva" },
  { emoji: "🌼", name: "Marigold Garlands", sub: "Offered at the lingam" },
  { emoji: "🥛", name: "Milk / Panchamrit", sub: "For abhishek ritual" },
  { emoji: "🪔", name: "Incense Sticks", sub: "Dhoop & agarbatti" },
  { emoji: "🥥", name: "Coconut", sub: "Symbolic offering" },
];

export default function PujaSection() {
  return (
    <section
      id="puja"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.97 0.025 70) 0%, oklch(0.99 0.010 72) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.68 0.20 50))",
              }}
            />
            <span
              className="text-xs font-sans font-bold tracking-[0.25em] uppercase"
              style={{ color: "oklch(0.68 0.20 50)" }}
            >
              Divine Worship
            </span>
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.68 0.20 50), transparent)",
              }}
            />
          </div>
          <h2
            className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "oklch(0.22 0.05 40)" }}
          >
            Puja & Offerings
          </h2>
          <p
            className="font-cormorant italic text-lg max-w-xl mx-auto"
            style={{ color: "oklch(0.50 0.06 42)" }}
          >
            Participate in sacred rituals and offer your devotion to Mahadev
          </p>
        </div>

        {/* Two-column: cards + image */}
        <div className="grid lg:grid-cols-5 gap-10 mb-14">
          {/* Puja cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {PUJAS.map((puja) => (
              <div
                key={puja.id}
                className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 relative"
                style={{
                  background: puja.highlight
                    ? "linear-gradient(135deg, oklch(0.42 0.18 22), oklch(0.62 0.20 46))"
                    : "oklch(0.99 0.010 72)",
                  border: `1px solid ${puja.highlight ? "transparent" : "oklch(0.68 0.20 50 / 0.18)"}`,
                  boxShadow: puja.highlight
                    ? "0 8px 32px oklch(0.42 0.18 22 / 0.30)"
                    : "0 4px 16px oklch(0.13 0.04 35 / 0.06)",
                }}
              >
                {puja.highlight && (
                  <div
                    className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-sans font-bold"
                    style={{
                      background: "oklch(0.82 0.14 82 / 0.25)",
                      color: "oklch(0.92 0.10 72)",
                    }}
                  >
                    Most Sacred
                  </div>
                )}
                <p
                  className="font-devanagari text-base mb-1"
                  style={{
                    color: puja.highlight
                      ? "oklch(0.82 0.14 82 / 0.8)"
                      : "oklch(0.68 0.20 50)",
                  }}
                >
                  {puja.devanagari}
                </p>
                <h3
                  className="font-cormorant text-xl font-bold mb-2"
                  style={{
                    color: puja.highlight
                      ? "oklch(0.97 0.018 75)"
                      : "oklch(0.22 0.05 40)",
                  }}
                >
                  {puja.name}
                </h3>
                <p
                  className="text-sm font-sans leading-relaxed mb-4"
                  style={{
                    color: puja.highlight
                      ? "oklch(0.85 0.04 65)"
                      : "oklch(0.42 0.04 45)",
                  }}
                >
                  {puja.description}
                </p>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <Clock
                      size={13}
                      style={{
                        color: puja.highlight
                          ? "oklch(0.82 0.14 82)"
                          : "oklch(0.68 0.20 50)",
                      }}
                    />
                    <span
                      className="text-xs font-sans font-semibold"
                      style={{
                        color: puja.highlight
                          ? "oklch(0.85 0.08 68)"
                          : "oklch(0.52 0.08 46)",
                      }}
                    >
                      {puja.timing}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IndianRupee
                      size={13}
                      style={{
                        color: puja.highlight
                          ? "oklch(0.82 0.14 82)"
                          : "oklch(0.68 0.20 50)",
                      }}
                    />
                    <span
                      className="text-xs font-sans font-semibold"
                      style={{
                        color: puja.highlight
                          ? "oklch(0.85 0.08 68)"
                          : "oklch(0.52 0.08 46)",
                      }}
                    >
                      {puja.donation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image + offerings */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 12px 40px oklch(0.42 0.18 22 / 0.20)" }}
            >
              <img
                src="/assets/generated/aarti-ceremony.dim_600x400.jpg"
                alt="Aarti ceremony at Aghanzar Mahadev Temple"
                className="w-full h-56 object-cover"
              />
            </div>

            {/* Offerings */}
            <div
              className="rounded-2xl p-5"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.97 0.030 62), oklch(0.95 0.040 65))",
                border: "1px solid oklch(0.68 0.20 50 / 0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Flower2 size={16} style={{ color: "oklch(0.68 0.20 50)" }} />
                <h4
                  className="font-cormorant text-lg font-bold"
                  style={{ color: "oklch(0.22 0.05 40)" }}
                >
                  Sacred Offerings
                </h4>
              </div>
              <div className="space-y-2.5">
                {OFFERINGS.map((off) => (
                  <div key={off.name} className="flex items-center gap-3">
                    <span
                      className="text-xl w-7 text-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      {off.emoji}
                    </span>
                    <div>
                      <span
                        className="text-sm font-sans font-semibold block"
                        style={{ color: "oklch(0.28 0.06 42)" }}
                      >
                        {off.name}
                      </span>
                      <span
                        className="text-xs font-sans"
                        style={{ color: "oklch(0.52 0.04 45)" }}
                      >
                        {off.sub}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
