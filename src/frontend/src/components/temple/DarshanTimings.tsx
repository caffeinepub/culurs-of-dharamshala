import { AlertCircle, Clock, Moon, Sun } from "lucide-react";
import React from "react";

const TIMINGS = [
  {
    id: "morning-aarti",
    icon: Sun,
    period: "Morning Aarti",
    time: "5:00 AM – 7:00 AM",
    description: "Mangala Aarti with bell, conch, and incense",
    type: "aarti",
  },
  {
    id: "morning-darshan",
    icon: Clock,
    period: "Morning Darshan",
    time: "7:00 AM – 12:00 PM",
    description: "Open for all devotees for darshan and puja",
    type: "darshan",
  },
  {
    id: "afternoon",
    icon: Clock,
    period: "Afternoon Break",
    time: "12:00 PM – 2:00 PM",
    description: "Temple remains closed — prasad preparation",
    type: "closed",
  },
  {
    id: "evening-aarti",
    icon: Moon,
    period: "Evening Aarti",
    time: "6:00 PM – 7:00 PM",
    description: "Sandhya Aarti with dhoop, lamp, and flowers",
    type: "aarti",
  },
  {
    id: "evening-darshan",
    icon: Clock,
    period: "Evening Darshan",
    time: "7:00 PM – 9:00 PM",
    description: "Evening darshan for all devotees",
    type: "darshan",
  },
];

const typeStyles: Record<
  string,
  {
    bg: string;
    border: string;
    iconBg: string;
    iconColor: string;
    badge: string;
  }
> = {
  aarti: {
    bg: "linear-gradient(135deg, oklch(0.97 0.025 68), oklch(0.95 0.04 65))",
    border: "oklch(0.68 0.20 50 / 0.3)",
    iconBg: "linear-gradient(135deg, oklch(0.42 0.18 22), oklch(0.68 0.20 50))",
    iconColor: "oklch(0.99 0.006 72)",
    badge: "Aarti",
  },
  darshan: {
    bg: "linear-gradient(135deg, oklch(0.99 0.010 72), oklch(0.97 0.018 72))",
    border: "oklch(0.82 0.14 82 / 0.25)",
    iconBg:
      "linear-gradient(135deg, oklch(0.68 0.20 50 / 0.15), oklch(0.82 0.14 82 / 0.20))",
    iconColor: "oklch(0.68 0.20 50)",
    badge: "Open",
  },
  closed: {
    bg: "linear-gradient(135deg, oklch(0.93 0.012 72), oklch(0.91 0.012 68))",
    border: "oklch(0.65 0.03 55 / 0.25)",
    iconBg: "oklch(0.85 0.02 55 / 0.4)",
    iconColor: "oklch(0.55 0.04 45)",
    badge: "Closed",
  },
};

export default function DarshanTimings() {
  return (
    <section
      id="darshan"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.22 0.06 38) 0%, oklch(0.16 0.04 35) 60%, oklch(0.20 0.05 40) 100%)",
      }}
    >
      {/* Subtle mandala bg */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, oklch(0.82 0.14 82), transparent 50%), radial-gradient(circle at 20% 80%, oklch(0.68 0.20 50), transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.82 0.14 82 / 0.6))",
              }}
            />
            <span
              className="text-xs font-sans font-bold tracking-[0.25em] uppercase"
              style={{ color: "oklch(0.82 0.14 82)" }}
            >
              Daily Schedule
            </span>
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.82 0.14 82 / 0.6), transparent)",
              }}
            />
          </div>
          <h2
            className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "oklch(0.97 0.018 75)" }}
          >
            Darshan Timings
          </h2>
          <p
            className="font-cormorant italic text-lg"
            style={{ color: "oklch(0.72 0.04 60)" }}
          >
            The temple welcomes all devotees with an open heart
          </p>
        </div>

        {/* Timing cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {TIMINGS.map((item) => {
            const Icon = item.icon;
            const style = typeStyles[item.type];
            return (
              <div
                key={item.id}
                className="rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: style.bg,
                  border: `1px solid ${style.border}`,
                  boxShadow: "0 4px 16px oklch(0.13 0.04 35 / 0.1)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: style.iconBg }}
                  >
                    <Icon size={18} style={{ color: style.iconColor }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-sans font-bold text-sm"
                        style={{ color: "oklch(0.22 0.05 40)" }}
                      >
                        {item.period}
                      </span>
                      {item.type === "aarti" && (
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-sans font-bold tracking-wide"
                          style={{
                            background: "oklch(0.68 0.20 50 / 0.15)",
                            color: "oklch(0.52 0.22 44)",
                          }}
                        >
                          {style.badge}
                        </span>
                      )}
                      {item.type === "closed" && (
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-sans font-bold tracking-wide"
                          style={{
                            background: "oklch(0.55 0.04 45 / 0.1)",
                            color: "oklch(0.52 0.04 45)",
                          }}
                        >
                          {style.badge}
                        </span>
                      )}
                    </div>
                    <div
                      className="font-cormorant text-xl font-semibold mb-1"
                      style={{ color: "oklch(0.42 0.18 22)" }}
                    >
                      {item.time}
                    </div>
                    <p
                      className="text-xs font-sans leading-relaxed"
                      style={{ color: "oklch(0.48 0.04 45)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special note */}
        <div
          className="rounded-2xl p-5 flex gap-4 items-start"
          style={{
            background: "oklch(0.68 0.20 50 / 0.12)",
            border: "1px solid oklch(0.68 0.20 50 / 0.3)",
          }}
        >
          <AlertCircle
            size={20}
            className="flex-shrink-0 mt-0.5"
            style={{ color: "oklch(0.82 0.14 82)" }}
          />
          <div>
            <p
              className="font-sans font-bold text-sm mb-1"
              style={{ color: "oklch(0.90 0.06 68)" }}
            >
              Special Celebrations
            </p>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "oklch(0.75 0.04 60)" }}
            >
              Extended hours during{" "}
              <strong style={{ color: "oklch(0.82 0.14 82)" }}>
                Sawan Somvar
              </strong>{" "}
              (every Monday in July–August) and{" "}
              <strong style={{ color: "oklch(0.82 0.14 82)" }}>
                Maha Shivratri
              </strong>
              . Temple remains open all night during Shivratri Jagran. Devotees
              are encouraged to arrive early during festival seasons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
