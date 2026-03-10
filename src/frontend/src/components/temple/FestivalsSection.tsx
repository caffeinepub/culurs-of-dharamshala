import { Calendar, Star } from "lucide-react";
import React from "react";

const FESTIVALS = [
  {
    id: "shivratri",
    name: "Maha Shivratri",
    period: "February / March",
    devanagari: "महाशिवरात्रि",
    highlight: true,
    description:
      "Grand celebration with all-night jagran, abhishek, and special prasad distribution. Thousands of devotees gather from across Himachal Pradesh to seek the blessings of Mahadev on this most sacred night.",
    activities: [
      "All-Night Jagran",
      "Rudrabhishek",
      "Prasad Distribution",
      "Cultural Programs",
    ],
    color: "oklch(0.42 0.18 22)",
    bg: "linear-gradient(135deg, oklch(0.97 0.030 62), oklch(0.95 0.045 58))",
  },
  {
    id: "sawan",
    name: "Sawan Somvar",
    period: "July – August",
    devanagari: "सावन सोमवार",
    highlight: false,
    description:
      "Every Monday during the holy month of Sawan is celebrated with special rituals, Kanwar Yatra, and Rudrabhishek. The temple is adorned with fresh flowers and resounds with devotional chanting.",
    activities: [
      "Kanwar Yatra",
      "Rudrabhishek",
      "Special Prayers",
      "Bel Patra Offering",
    ],
    color: "oklch(0.68 0.20 50)",
    bg: "linear-gradient(135deg, oklch(0.97 0.025 70), oklch(0.95 0.035 66))",
  },
  {
    id: "navratri",
    name: "Navratri",
    period: "October",
    devanagari: "नवरात्रि",
    highlight: false,
    description:
      "Nine nights of devotional celebrations with cultural programs and special prayers. The temple is illuminated with lamps and marigold decorations throughout the nine sacred nights.",
    activities: [
      "Nine Night Prayers",
      "Cultural Programs",
      "Lamp Lighting",
      "Aarti",
    ],
    color: "oklch(0.68 0.20 50)",
    bg: "linear-gradient(135deg, oklch(0.97 0.025 70), oklch(0.95 0.035 66))",
  },
  {
    id: "kartik",
    name: "Kartik Purnima",
    period: "November",
    devanagari: "कार्तिक पूर्णिमा",
    highlight: false,
    description:
      "Sacred bath and deep-daan on the full moon of Kartik month. Devotees float diyas on the nearby stream and seek divine blessings. The full moon night is celebrated with great devotion.",
    activities: [
      "Deep-Daan (Lamp Offerings)",
      "Sacred Bath",
      "Full Moon Prayers",
      "Prasad",
    ],
    color: "oklch(0.68 0.20 50)",
    bg: "linear-gradient(135deg, oklch(0.97 0.025 70), oklch(0.95 0.035 66))",
  },
  {
    id: "jagran",
    name: "Shivratri Jagran",
    period: "All Night (Annual)",
    devanagari: "जागरण",
    highlight: false,
    description:
      'Special all-night vigil with devotional music, bhajans, and prayers. The night resounds with "Har Har Mahadev" as devotees stay awake in worship throughout the sacred night.',
    activities: [
      "Devotional Bhajans",
      "All-Night Vigil",
      "Shiva Chanting",
      "Dawn Aarti",
    ],
    color: "oklch(0.68 0.20 50)",
    bg: "linear-gradient(135deg, oklch(0.97 0.025 70), oklch(0.95 0.035 66))",
  },
];

export default function FestivalsSection() {
  return (
    <section
      id="festivals"
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
              Sacred Calendar
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
            Festivals & Events
          </h2>
          <p
            className="font-cormorant italic text-lg max-w-xl mx-auto"
            style={{ color: "oklch(0.50 0.06 42)" }}
          >
            Celebrate the divine — join thousands of devotees in sacred
            observances
          </p>
        </div>

        {/* Featured festival — large */}
        <div
          className="rounded-3xl p-8 md:p-10 mb-8 relative overflow-hidden transition-shadow duration-300 hover:shadow-lg"
          style={{
            background: FESTIVALS[0].bg,
            border: "2px solid oklch(0.68 0.20 50 / 0.25)",
            boxShadow: "0 8px 40px oklch(0.42 0.18 22 / 0.12)",
          }}
        >
          {/* Star badge */}
          <div
            className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-bold tracking-wide"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.42 0.18 22), oklch(0.68 0.20 50))",
              color: "oklch(0.99 0.006 72)",
            }}
          >
            <Star size={11} fill="currentColor" />
            Grand Festival
          </div>

          <div className="max-w-2xl">
            <p
              className="font-devanagari text-2xl mb-2"
              style={{ color: "oklch(0.68 0.20 50)" }}
            >
              {FESTIVALS[0].devanagari}
            </p>
            <h3
              className="font-cormorant text-3xl md:text-4xl font-bold mb-2"
              style={{ color: "oklch(0.22 0.05 40)" }}
            >
              {FESTIVALS[0].name}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={14} style={{ color: "oklch(0.68 0.20 50)" }} />
              <span
                className="font-sans text-sm font-semibold"
                style={{ color: "oklch(0.68 0.20 50)" }}
              >
                {FESTIVALS[0].period}
              </span>
            </div>
            <p
              className="font-sans text-base leading-relaxed mb-5"
              style={{ color: "oklch(0.38 0.04 42)" }}
            >
              {FESTIVALS[0].description}
            </p>
            <div className="flex flex-wrap gap-2">
              {FESTIVALS[0].activities.map((act) => (
                <span
                  key={act}
                  className="px-3 py-1 rounded-full text-xs font-sans font-semibold"
                  style={{
                    background: "oklch(0.68 0.20 50 / 0.12)",
                    border: "1px solid oklch(0.68 0.20 50 / 0.3)",
                    color: "oklch(0.42 0.18 22)",
                  }}
                >
                  {act}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Other festivals — 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {FESTIVALS.slice(1).map((fest) => (
            <div
              key={fest.id}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: fest.bg,
                border: "1px solid oklch(0.68 0.20 50 / 0.18)",
                boxShadow: "0 4px 20px oklch(0.13 0.04 35 / 0.06)",
              }}
            >
              <p
                className="font-devanagari text-lg mb-1"
                style={{ color: "oklch(0.68 0.20 50)" }}
              >
                {fest.devanagari}
              </p>
              <h3
                className="font-cormorant text-2xl font-bold mb-1"
                style={{ color: "oklch(0.22 0.05 40)" }}
              >
                {fest.name}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <Calendar size={13} style={{ color: "oklch(0.68 0.20 50)" }} />
                <span
                  className="font-sans text-xs font-semibold"
                  style={{ color: "oklch(0.68 0.20 50)" }}
                >
                  {fest.period}
                </span>
              </div>
              <p
                className="font-sans text-sm leading-relaxed mb-4"
                style={{ color: "oklch(0.42 0.04 45)" }}
              >
                {fest.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {fest.activities.map((act) => (
                  <span
                    key={act}
                    className="px-2.5 py-0.5 rounded-full text-xs font-sans font-medium"
                    style={{
                      background: "oklch(0.68 0.20 50 / 0.08)",
                      border: "1px solid oklch(0.68 0.20 50 / 0.2)",
                      color: "oklch(0.52 0.12 44)",
                    }}
                  >
                    {act}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
