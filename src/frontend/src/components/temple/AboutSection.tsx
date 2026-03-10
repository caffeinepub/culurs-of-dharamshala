import { Calendar, Flame, MapPin } from "lucide-react";
import React from "react";

const HIGHLIGHTS = [
  {
    icon: Calendar,
    label: "Year Established",
    value: "~1500 CE",
    sub: "Over 500 years of worship",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dharamshala, H.P.",
    sub: "Kangra District, Himachal Pradesh",
  },
  {
    icon: Flame,
    label: "Presiding Deity",
    value: "Shiva Lingam",
    sub: "Swayambhu — Self Manifested",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.97 0.025 70) 0%, oklch(0.99 0.010 72) 100%)",
      }}
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'url("/assets/generated/om-trishul-transparent.dim_400x400.png")',
          backgroundSize: "300px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right -60px top -60px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div
            className="h-px w-16"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.68 0.20 50))",
            }}
          />
          <span
            className="text-xs font-sans font-bold tracking-[0.25em] uppercase"
            style={{ color: "oklch(0.68 0.20 50)" }}
          >
            Sacred Heritage
          </span>
          <div
            className="h-px w-16"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.68 0.20 50), transparent)",
            }}
          />
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Text */}
          <div className="order-2 md:order-1">
            <h2
              className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "oklch(0.22 0.05 40)" }}
            >
              About the Temple
            </h2>

            <div
              className="space-y-4 font-sans text-base leading-relaxed"
              style={{ color: "oklch(0.38 0.04 42)" }}
            >
              <p>
                Aghanzar Mahadev Temple is an ancient and deeply revered shrine
                dedicated to
                <span
                  className="font-bold"
                  style={{ color: "oklch(0.42 0.18 22)" }}
                >
                  {" "}
                  Lord Shiva (Mahadev)
                </span>
                , located near Dharamshala in the Kangra district of Himachal
                Pradesh, India.
              </p>
              <p>
                Believed to be over 500 years old, the temple is perched amidst
                dense cedar and deodar forests with the majestic{" "}
                <span
                  className="font-semibold"
                  style={{ color: "oklch(0.42 0.18 22)" }}
                >
                  Dhauladhar mountain range
                </span>{" "}
                as its eternal backdrop. The air here carries the fragrance of
                incense and mountain pines.
              </p>
              <p>
                The presiding deity is a natural <em>Shiva Lingam</em> said to
                be
                <span
                  className="font-bold"
                  style={{ color: "oklch(0.42 0.18 22)" }}
                >
                  {" "}
                  Swayambhu
                </span>{" "}
                — self-manifested from the earth itself. This makes the temple
                exceptionally sacred in the Shaiva tradition.
              </p>
              <p>
                The temple holds special significance during{" "}
                <strong>Maha Shivratri</strong> and the holy month of
                <strong> Sawan</strong>, when thousands of devotees make the
                pilgrimage from across Himachal Pradesh and beyond to seek the
                blessings of Mahadev.
              </p>
            </div>

            {/* Sanskrit quote */}
            <div
              className="mt-8 p-4 rounded-xl border-l-4 italic"
              style={{
                background: "oklch(0.68 0.20 50 / 0.06)",
                borderColor: "oklch(0.68 0.20 50)",
              }}
            >
              <p
                className="font-devanagari text-xl text-center mb-1"
                style={{ color: "oklch(0.42 0.18 22)" }}
              >
                ॐ नमः शिवाय
              </p>
              <p
                className="font-cormorant text-sm text-center"
                style={{ color: "oklch(0.52 0.06 42)" }}
              >
                "I bow to Lord Shiva — the auspicious one"
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div
              className="rounded-2xl overflow-hidden shadow-deep"
              style={{
                boxShadow:
                  "0 20px 60px oklch(0.42 0.18 22 / 0.25), 0 8px 24px oklch(0.13 0.04 35 / 0.15)",
              }}
            >
              <img
                src="/assets/generated/shiva-lingam.dim_600x400.jpg"
                alt="Sacred Shiva Lingam at Aghanzar Mahadev Temple"
                className="w-full h-72 md:h-80 object-cover"
              />
            </div>
            {/* Decorative gold frame accent */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl -z-10"
              style={{ border: "2px solid oklch(0.82 0.14 82 / 0.3)" }}
              aria-hidden="true"
            />
            {/* Om overlay badge */}
            <div
              className="absolute -top-4 -left-4 w-14 h-14 rounded-full flex items-center justify-center font-devanagari text-2xl shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.42 0.18 22), oklch(0.68 0.20 50))",
                color: "oklch(0.97 0.018 75)",
                boxShadow: "0 4px 16px oklch(0.68 0.20 50 / 0.4)",
              }}
            >
              ॐ
            </div>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  background: "oklch(0.99 0.010 72)",
                  border: "1px solid oklch(0.68 0.20 50 / 0.2)",
                  boxShadow: "0 4px 24px oklch(0.68 0.20 50 / 0.08)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.68 0.20 50 / 0.1), oklch(0.82 0.14 82 / 0.15))",
                  }}
                >
                  <Icon size={22} style={{ color: "oklch(0.68 0.20 50)" }} />
                </div>
                <div
                  className="text-xs font-sans font-semibold tracking-widest uppercase mb-1"
                  style={{ color: "oklch(0.62 0.06 50)" }}
                >
                  {item.label}
                </div>
                <div
                  className="font-cormorant text-xl font-bold mb-1"
                  style={{ color: "oklch(0.22 0.05 40)" }}
                >
                  {item.value}
                </div>
                <div
                  className="text-xs font-sans"
                  style={{ color: "oklch(0.55 0.04 45)" }}
                >
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
