import React from "react";

interface TeaCard {
  icon: string;
  title: string;
  subtitle: string;
  body: string;
  accent: string;
}

const teaCards: TeaCard[] = [
  {
    icon: "📜",
    title: "A Legacy Since 1849",
    subtitle: "History",
    body: "Kangra Valley tea cultivation began in 1849 when the British East India Company established the first experimental tea gardens in the Himalayan foothills. Dr. Jameson, the then Superintendent of the Botanical Gardens, recognized the valley's unique terroir — its altitude, rainfall, and misty climate — as ideal for growing fine tea. By the late 19th century, Kangra had become one of India's most celebrated tea-producing regions, with estates stretching across the slopes below the Dhauladhar range.",
    accent: "#FF9933",
  },
  {
    icon: "🍃",
    title: "Floral, Muscatel & Light",
    subtitle: "Flavors & Varieties",
    body: "Kangra tea is prized for its delicate, floral character — lighter and more nuanced than the bold Assam teas, yet distinctly different from Darjeeling's muscatel. The first flush (March–April) yields a pale golden brew with a fresh, grassy sweetness and hints of wildflower. The second flush (June–July) develops a richer amber cup with subtle muscatel notes and a lingering honey finish. Green and white teas from Kangra are especially sought after for their clean, vegetal brightness.",
    accent: "#228B22",
  },
  {
    icon: "🏔️",
    title: "Woven into Daily Life",
    subtitle: "Cultural Significance",
    body: "In the Dharamshala region, tea is far more than a beverage — it is a ritual of hospitality and connection. Tibetan butter tea (po cha), brewed strong and blended with yak butter and salt, warms the body against mountain cold and is offered to every guest as a gesture of welcome. Local Kangra chai, spiced with cardamom and ginger, fills the air of every market and monastery. The tea gardens themselves are a living part of the landscape, their terraced rows of emerald bushes mirroring the valley's agricultural heritage.",
    accent: "#C41E3A",
  },
];

export default function KangraValleyTea() {
  return (
    <section id="kangra-tea" className="relative overflow-hidden">
      {/* Banner / Hero Image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src="/assets/generated/kangra-tea-garden.dim_1200x600.png"
          alt="Lush green Kangra Valley tea garden with rolling hills and misty Himalayan foothills"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dharamshala-deep-night/30 via-dharamshala-deep-night/40 to-dharamshala-deep-night/70" />
        <div className="absolute inset-0 flex items-end justify-center pb-10 px-4 text-center">
          <div>
            <p className="font-display text-xs tracking-[0.3em] uppercase text-dharamshala-saffron mb-2">
              Himachal Pradesh · Since 1849
            </p>
            <h2 className="font-serif-display text-3xl md:text-5xl font-bold text-dharamshala-snow-white drop-shadow-lg">
              Kangra Valley Tea
            </h2>
            <p className="mt-3 font-sans text-sm md:text-base text-dharamshala-snow-white/80 max-w-xl mx-auto leading-relaxed">
              From the misty foothills of the Dhauladhar range, a cup of
              history, culture, and unmatched flavour.
            </p>
          </div>
        </div>
        {/* Prayer flag stripe */}
        <div className="absolute bottom-0 left-0 right-0 h-2 prayer-flag-stripe" />
      </div>

      {/* Content */}
      <div className="bg-dharamshala-parchment py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Intro quote */}
          <blockquote className="text-center mb-14">
            <p className="font-serif-display text-xl md:text-2xl italic text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              "The finest teas of Kangra carry the mist of the Himalayas in
              every sip — a taste of altitude, silence, and ancient earth."
            </p>
            <footer className="mt-3 font-sans text-xs tracking-widest uppercase text-dharamshala-saffron">
              — Kangra Valley Tea Growers' Association
            </footer>
          </blockquote>

          {/* Three content cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teaCards.map((card) => (
              <article
                key={card.title}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-xs hover:shadow-card-hover transition-all duration-300 group flex flex-col"
              >
                {/* Card accent bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: card.accent }}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + subtitle */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{card.icon}</span>
                    <span className="text-xs font-sans font-semibold tracking-widest uppercase text-dharamshala-saffron">
                      {card.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-display text-xl font-bold text-foreground mb-3 group-hover:text-dharamshala-saffron transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Body */}
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Tea facts strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "1849", label: "Year Cultivation Began" },
              { value: "~2,000m", label: "Altitude of Gardens" },
              { value: "2 Flushes", label: "Annual Harvests" },
              { value: "GI Tagged", label: "Protected Origin" },
            ].map((fact) => (
              <div
                key={fact.label}
                className="bg-card border border-border rounded-xl p-4 text-center shadow-xs"
              >
                <div className="font-serif-display text-2xl font-bold text-dharamshala-saffron mb-1">
                  {fact.value}
                </div>
                <div className="font-sans text-xs text-muted-foreground tracking-wide uppercase">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>

          {/* Decorative divider */}
          <div className="mt-14 flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-xs bg-border" />
            <div className="flex gap-2">
              {["#228B22", "#FF9933", "#FFFFFF", "#C41E3A", "#FFD700"].map(
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
