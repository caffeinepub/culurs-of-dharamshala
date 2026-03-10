import React from "react";

interface Snippet {
  color: string;
  hex: string;
  title: string;
  element: string;
  description: string;
  icon: string;
}

const snippets: Snippet[] = [
  {
    color: "Saffron",
    hex: "#FF9933",
    title: "The Monk's Robe",
    element: "Spirituality",
    description:
      "Saffron — the color of renunciation and sacrifice — drapes the monks of Dharamshala's Tibetan monasteries. It represents the fire of wisdom burning away ignorance, a beacon of spiritual devotion visible across the hillsides.",
    icon: "☸",
  },
  {
    color: "Crimson",
    hex: "#C41E3A",
    title: "Prayer Flags & Temples",
    element: "Spirituality",
    description:
      "Deep crimson adorns Buddhist prayer flags and temple walls throughout McLeod Ganj. Each flag carries mantras that the wind carries to the heavens, blessing all beings in its path.",
    icon: "🏯",
  },
  {
    color: "Himalayan Green",
    hex: "#228B22",
    title: "The Cedar Forests",
    element: "Nature",
    description:
      "The lush Himalayan cedar and deodar forests surrounding Dharamshala paint the hillsides in deep emerald. These ancient trees have sheltered pilgrims and wanderers for centuries.",
    icon: "🌲",
  },
  {
    color: "Festival Pink",
    hex: "#FF69B4",
    title: "Holi & Marigolds",
    element: "Festival",
    description:
      "Vibrant pinks and magentas explode during Holi celebrations, when the streets of Dharamshala transform into a canvas of color. Marigold garlands adorn every doorway during festive seasons.",
    icon: "🪔",
  },
];

export default function CulturalSnippets() {
  return (
    <section className="relative overflow-hidden">
      {/* Prayer flags banner image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src="/assets/generated/prayer-flags-banner.dim_1200x400.png"
          alt="Colorful Tibetan prayer flags against the Himalayan sky"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-dharamshala-deep-night/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <p className="font-display text-xs tracking-[0.3em] uppercase text-dharamshala-saffron mb-2">
              Stories in Color
            </p>
            <h2 className="font-serif-display text-3xl md:text-5xl font-bold text-dharamshala-snow-white">
              Culture & Meaning
            </h2>
          </div>
        </div>
        {/* Prayer flag stripe */}
        <div className="absolute bottom-0 left-0 right-0 h-2 prayer-flag-stripe" />
      </div>

      {/* Snippets grid */}
      <div className="bg-dharamshala-parchment py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center font-sans text-muted-foreground max-w-xl mx-auto mb-12 text-base leading-relaxed">
            In Dharamshala, every color carries centuries of meaning — woven
            into rituals, landscapes, and the daily life of its people.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {snippets.map((snippet) => (
              <article
                key={snippet.title}
                className="flex gap-5 bg-card rounded-2xl p-6 border border-border shadow-xs hover:shadow-card-hover transition-all duration-300 group"
              >
                {/* Color dot + icon */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div
                    className="w-14 h-14 rounded-full shadow-md border-4 border-white group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: snippet.hex }}
                  />
                  <span className="text-2xl">{snippet.icon}</span>
                </div>

                {/* Text */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-sans font-semibold tracking-widest uppercase text-dharamshala-saffron">
                      {snippet.color}
                    </span>
                    <span className="text-muted-foreground/40">·</span>
                    <span className="text-xs font-sans text-muted-foreground">
                      {snippet.element}
                    </span>
                  </div>
                  <h3 className="font-serif-display text-xl font-bold text-foreground mb-2">
                    {snippet.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {snippet.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Decorative divider */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-xs bg-border" />
            <div className="flex gap-2">
              {["#C41E3A", "#1E5FA8", "#FFFFFF", "#228B22", "#FFD700"].map(
                (c) => (
                  <div
                    key={c}
                    className="w-3 h-3 rounded-full border border-border/50"
                    style={{ backgroundColor: c }}
                  />
                ),
              )}
            </div>
            <div className="h-px flex-1 max-w-xs bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
