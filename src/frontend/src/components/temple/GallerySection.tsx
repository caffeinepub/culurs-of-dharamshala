import { X, ZoomIn } from "lucide-react";
import React, { useState } from "react";

const GALLERY_ITEMS = [
  {
    id: "hero",
    src: "/assets/generated/temple-hero.dim_1200x600.jpg",
    caption: "Aghanzar Mahadev Temple — Dhauladhar backdrop",
    tall: false,
  },
  {
    id: "lingam",
    src: "/assets/generated/shiva-lingam.dim_600x400.jpg",
    caption: "The Sacred Swayambhu Shiva Lingam",
    tall: false,
  },
  {
    id: "aarti",
    src: "/assets/generated/aarti-ceremony.dim_600x400.jpg",
    caption: "Evening Aarti Ceremony",
    tall: false,
  },
  {
    id: "placeholder1",
    src: null,
    icon: "🪔",
    caption: "Diya Lighting — Diwali Celebrations",
    tall: false,
  },
  {
    id: "placeholder2",
    src: null,
    icon: "🌸",
    caption: "Temple Courtyard — Marigold Decorations",
    tall: false,
  },
  {
    id: "placeholder3",
    src: null,
    icon: "⛰️",
    caption: "Dhauladhar Peaks from Temple Grounds",
    tall: false,
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.22 0.06 38) 0%, oklch(0.16 0.04 35) 60%, oklch(0.20 0.05 40) 100%)",
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
                  "linear-gradient(90deg, transparent, oklch(0.82 0.14 82 / 0.6))",
              }}
            />
            <span
              className="text-xs font-sans font-bold tracking-[0.25em] uppercase"
              style={{ color: "oklch(0.82 0.14 82)" }}
            >
              Darshan Gallery
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
            Gallery
          </h2>
          <p
            className="font-cormorant italic text-lg"
            style={{ color: "oklch(0.70 0.04 60)" }}
          >
            Visual journey through the sacred grounds of Aghanzar Mahadev
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{
                border: "1px solid oklch(0.82 0.14 82 / 0.15)",
                boxShadow: "0 4px 20px oklch(0.13 0.04 35 / 0.3)",
              }}
            >
              {item.src ? (
                <>
                  <button
                    type="button"
                    className="block w-full cursor-pointer"
                    onClick={() =>
                      setLightbox({
                        src: item.src as string,
                        caption: item.caption,
                      })
                    }
                    aria-label={`View: ${item.caption}`}
                  >
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "oklch(0.13 0.04 35 / 0.5)" }}
                    >
                      <ZoomIn
                        size={28}
                        style={{ color: "oklch(0.82 0.14 82)" }}
                      />
                    </div>
                  </button>
                </>
              ) : (
                <div
                  className="w-full h-52 flex flex-col items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.42 0.18 22 / 0.5), oklch(0.68 0.20 50 / 0.4))",
                  }}
                >
                  <span className="text-5xl mb-3" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span
                    className="text-xs font-sans font-semibold tracking-widest uppercase"
                    style={{ color: "oklch(0.82 0.14 82 / 0.7)" }}
                  >
                    Coming Soon
                  </span>
                </div>
              )}
              {/* Caption bar */}
              <div
                className="px-4 py-3"
                style={{ background: "oklch(0.20 0.05 38)" }}
              >
                <p
                  className="text-sm font-sans text-center truncate"
                  style={{ color: "oklch(0.85 0.04 65)" }}
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "oklch(0.08 0.02 35 / 0.95)" }}
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            className="absolute top-4 right-4 p-2 rounded-full"
            style={{
              background: "oklch(0.68 0.20 50 / 0.2)",
              color: "oklch(0.82 0.14 82)",
            }}
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <div className="max-w-4xl w-full">
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="w-full max-h-[75vh] object-contain rounded-xl"
              style={{ boxShadow: "0 20px 60px oklch(0.13 0.04 35 / 0.8)" }}
            />
            <p
              className="text-center mt-4 font-cormorant italic text-lg"
              style={{ color: "oklch(0.82 0.14 82)" }}
            >
              {lightbox.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
