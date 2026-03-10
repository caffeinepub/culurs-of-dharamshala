import { Bus, Footprints, MapPin, Plane, Train } from "lucide-react";
import React from "react";

const TRANSPORT = [
  {
    id: "road",
    Icon: Bus,
    mode: "By Road",
    highlight: "8 km from Dharamshala",
    details:
      "Located 8 km from Dharamshala Bus Stand and 15 km from Kangra. Local taxis and state buses are available from Dharamshala Bus Stand.",
    distance: "8 km",
  },
  {
    id: "air",
    Icon: Plane,
    mode: "By Air",
    highlight: "Kangra Airport (Gaggal)",
    details:
      "The nearest airport is Kangra Airport (Gaggal), 18 km from the temple. Taxis are available at the airport for the short drive to Dharamshala.",
    distance: "18 km",
  },
  {
    id: "train",
    Icon: Train,
    mode: "By Train",
    highlight: "Kangra Railway Station",
    details:
      "The nearest railway station is Kangra, 15 km away. Pathankot is the major railhead at 85 km, with good train connectivity from Delhi and major cities.",
    distance: "15 km",
  },
];

export default function HowToReach() {
  return (
    <section
      id="reach"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.97 0.025 70) 0%, oklch(0.99 0.010 72) 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
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
              Pilgrimage Route
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
            How to Reach
          </h2>
          <p
            className="font-cormorant italic text-lg max-w-xl mx-auto"
            style={{ color: "oklch(0.50 0.06 42)" }}
          >
            Begin your sacred journey to Aghanzar Mahadev Temple
          </p>
        </div>

        {/* Transport cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {TRANSPORT.map((t) => {
            const Icon = t.Icon;
            return (
              <div
                key={t.id}
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "oklch(0.99 0.010 72)",
                  border: "1px solid oklch(0.68 0.20 50 / 0.18)",
                  boxShadow: "0 4px 20px oklch(0.13 0.04 35 / 0.06)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.42 0.18 22), oklch(0.68 0.20 50))",
                  }}
                >
                  <Icon size={22} style={{ color: "oklch(0.99 0.006 72)" }} />
                </div>
                <h3
                  className="font-cormorant text-xl font-bold mb-1"
                  style={{ color: "oklch(0.22 0.05 40)" }}
                >
                  {t.mode}
                </h3>
                <p
                  className="text-sm font-sans font-semibold mb-3"
                  style={{ color: "oklch(0.68 0.20 50)" }}
                >
                  {t.highlight}
                </p>
                <p
                  className="text-sm font-sans leading-relaxed mb-4"
                  style={{ color: "oklch(0.42 0.04 45)" }}
                >
                  {t.details}
                </p>
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-bold"
                  style={{
                    background: "oklch(0.68 0.20 50 / 0.10)",
                    color: "oklch(0.52 0.15 46)",
                    border: "1px solid oklch(0.68 0.20 50 / 0.2)",
                  }}
                >
                  <MapPin size={11} />
                  {t.distance} away
                </div>
              </div>
            );
          })}
        </div>

        {/* Trek note */}
        <div
          className="rounded-2xl p-6 flex gap-4 items-start"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.42 0.18 22 / 0.08), oklch(0.68 0.20 50 / 0.08))",
            border: "1px solid oklch(0.68 0.20 50 / 0.25)",
          }}
        >
          <Footprints
            size={22}
            className="flex-shrink-0 mt-0.5"
            style={{ color: "oklch(0.68 0.20 50)" }}
          />
          <div>
            <h4
              className="font-cormorant text-xl font-bold mb-2"
              style={{ color: "oklch(0.22 0.05 40)" }}
            >
              The Sacred Trek
            </h4>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "oklch(0.38 0.04 42)" }}
            >
              The temple is accessible via a scenic{" "}
              <strong style={{ color: "oklch(0.42 0.18 22)" }}>
                2 km trekking trail
              </strong>{" "}
              through lush deodar forests from the nearest motorable road. The
              walk itself is a meditative experience — birdsong, mountain air,
              and the distant sound of bells set the tone for your darshan. The
              trail is well-marked and manageable for most pilgrims.
            </p>
          </div>
        </div>

        {/* Map placeholder */}
        <div
          className="mt-8 rounded-2xl overflow-hidden"
          style={{
            border: "1px solid oklch(0.68 0.20 50 / 0.2)",
            boxShadow: "0 4px 20px oklch(0.13 0.04 35 / 0.08)",
          }}
        >
          <div
            className="h-56 flex flex-col items-center justify-center gap-3"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.93 0.03 65), oklch(0.91 0.04 62))",
            }}
          >
            <MapPin size={32} style={{ color: "oklch(0.68 0.20 50)" }} />
            <div className="text-center">
              <p
                className="font-cormorant text-lg font-semibold mb-1"
                style={{ color: "oklch(0.22 0.05 40)" }}
              >
                Aghanzar Mahadev Temple
              </p>
              <p
                className="font-sans text-sm"
                style={{ color: "oklch(0.50 0.05 45)" }}
              >
                Near Dharamshala, Kangra District, Himachal Pradesh – 176215
              </p>
              <a
                href="https://maps.google.com/?q=Aghanzar+Mahadev+Temple+Dharamshala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full text-xs font-sans font-bold transition-all hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.42 0.18 22), oklch(0.68 0.20 50))",
                  color: "oklch(0.99 0.006 72)",
                }}
              >
                <MapPin size={13} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
