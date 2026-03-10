import { motion } from "motion/react";

const RAINBOW_COLORS = [
  {
    name: "Red",
    hex: "#E63946",
    emoji: "🔴",
    culturalTitle: "Tibetan Monks & Monasteries",
    description:
      "The crimson robes of Tibetan Buddhist monks fill the streets of McLeod Ganj. Red symbolizes protection and compassion in the monasteries of Dharamshala.",
    bgStyle: {
      background: "linear-gradient(135deg, #E63946 0%, #c1121f 100%)",
    },
    textColor: "#fff",
    accentColor: "rgba(255,255,255,0.25)",
  },
  {
    name: "Orange",
    hex: "#F4A261",
    emoji: "🌅",
    culturalTitle: "Saffron Sunrise over Dhauladhar",
    description:
      "Every morning, the snow-capped Dhauladhar peaks glow a deep saffron orange as the sun rises. This sacred color adorns temple flags and marigold offerings.",
    bgStyle: {
      background: "linear-gradient(135deg, #F4A261 0%, #e76f51 100%)",
    },
    textColor: "#fff",
    accentColor: "rgba(255,255,255,0.25)",
  },
  {
    name: "Yellow",
    hex: "#E9C46A",
    emoji: "🌼",
    culturalTitle: "Marigold Garlands & Temple Gold",
    description:
      "Bright yellow marigolds are strung as garlands at every temple entrance. Gold and yellow represent prosperity and divine blessing in local festivals.",
    bgStyle: {
      background: "linear-gradient(135deg, #E9C46A 0%, #f4b942 100%)",
    },
    textColor: "#2d1a00",
    accentColor: "rgba(45,26,0,0.15)",
  },
  {
    name: "Green",
    hex: "#2A9D8F",
    emoji: "🍃",
    culturalTitle: "Kangra Valley Tea Gardens",
    description:
      "The rolling green tea gardens of Kangra Valley produce one of India's finest teas. The lush Himalayan forests surrounding Dharamshala stay emerald green through the monsoons.",
    bgStyle: {
      background: "linear-gradient(135deg, #2A9D8F 0%, #1a7a6e 100%)",
    },
    textColor: "#fff",
    accentColor: "rgba(255,255,255,0.25)",
  },
  {
    name: "Blue",
    hex: "#457B9D",
    emoji: "🏔️",
    culturalTitle: "Himalayan Sky & Sacred Rivers",
    description:
      "The crystal-clear blue skies above Dharamshala and the rushing blue waters of the Beas and Uhl rivers define the landscape. Blue is the color of serenity in Tibetan thangka art.",
    bgStyle: {
      background: "linear-gradient(135deg, #457B9D 0%, #1d3557 100%)",
    },
    textColor: "#fff",
    accentColor: "rgba(255,255,255,0.25)",
  },
  {
    name: "Indigo",
    hex: "#3D405B",
    emoji: "🧵",
    culturalTitle: "Himachali Handwoven Textiles",
    description:
      "Deep indigo dyes color the traditional handwoven shawls and fabrics of Himachal Pradesh. Artisans in Dharamshala continue this ancient craft tradition.",
    bgStyle: {
      background: "linear-gradient(135deg, #3D405B 0%, #1e1f30 100%)",
    },
    textColor: "#fff",
    accentColor: "rgba(255,255,255,0.2)",
  },
  {
    name: "Violet",
    hex: "#9B5DE5",
    emoji: "💜",
    culturalTitle: "Wildflowers & Himalayan Lavender",
    description:
      "In spring and summer, the hillsides around Dharamshala burst with violet wildflowers and rhododendrons. Purple hues mark the arrival of the Himalayan blooming season.",
    bgStyle: {
      background: "linear-gradient(135deg, #9B5DE5 0%, #6a0dad 100%)",
    },
    textColor: "#fff",
    accentColor: "rgba(255,255,255,0.25)",
  },
];

const RAINBOW_STRIP_COLORS = [
  "#E63946",
  "#F4A261",
  "#E9C46A",
  "#2A9D8F",
  "#457B9D",
  "#3D405B",
  "#9B5DE5",
];

const BOKEH_DOTS = Array.from({ length: 18 }, (_, i) => ({
  id: `bokeh-${i}`,
  width: 18 + (i % 5) * 12,
  left: (i * 19) % 96,
  top: (i * 37) % 88,
  color: RAINBOW_STRIP_COLORS[i % 7],
  duration: 3 + (i % 4),
  delay: i * 0.3,
}));

const TITLE_CHARS = "COLOURS OF DHARAMSHALA".split("").map((ch, i) => ({
  id: `char-${i}`,
  ch,
  color: ch === " " ? "transparent" : RAINBOW_STRIP_COLORS[i % 7],
  shadow: RAINBOW_STRIP_COLORS[i % 7],
}));

const DOT_ITEMS = RAINBOW_STRIP_COLORS.map((color, i) => ({
  id: `dot-${i}`,
  color,
}));

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number],
    },
  },
};

export default function ColoursOfDharamshala() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Figtree', sans-serif", background: "#0a0a0f" }}
    >
      {/* ── HERO */}
      <section
        data-ocid="hero.section"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #E63946 0%, #F4A261 16.6%, #E9C46A 33.3%, #2A9D8F 50%, #457B9D 66.6%, #3D405B 83.3%, #9B5DE5 100%)",
            opacity: 0.9,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.8) 100%)",
          }}
        />

        {/* Bokeh dots — stable decorative array */}
        {BOKEH_DOTS.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full"
            style={{
              width: `${dot.width}px`,
              height: `${dot.width}px`,
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              background: dot.color,
              opacity: 0.15,
              filter: "blur(20px)",
              animation: `float ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
            }}
          />
        ))}

        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className="mb-4 flex justify-center gap-1 flex-wrap">
            {TITLE_CHARS.map((item) => (
              <span
                key={item.id}
                style={{
                  color: item.color,
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: "clamp(2rem, 6vw, 4.5rem)",
                  fontWeight: 900,
                  textShadow: `0 2px 24px ${item.shadow}80`,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  display: "inline-block",
                  width: item.ch === " " ? "0.5em" : "auto",
                }}
              >
                {item.ch === " " ? "\u00A0" : item.ch}
              </span>
            ))}
          </div>

          <motion.p
            className="text-white/90 mt-4 text-lg md:text-2xl font-light tracking-widest uppercase"
            style={{
              letterSpacing: "0.25em",
              textShadow: "0 2px 16px rgba(0,0,0,0.6)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            A Rainbow of Culture, Nature &amp; Tradition
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {DOT_ITEMS.map((item) => (
              <div
                key={item.id}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: item.color,
                  boxShadow: `0 0 12px ${item.color}`,
                }}
              />
            ))}
          </motion.div>

          <motion.p
            className="mt-6 text-white/60 text-sm tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            Dharamshala · Himachal Pradesh · India
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1">
            <div
              className="w-1 h-2 rounded-full bg-white/60"
              style={{ animation: "scrollBounce 1.5s ease-in-out infinite" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── RAINBOW STRIP */}
      <section data-ocid="rainbow.strip" className="relative">
        <div className="flex h-16 md:h-20">
          {RAINBOW_STRIP_COLORS.map((color, i) => (
            <motion.div
              key={RAINBOW_COLORS[i].name}
              className="flex-1 relative group cursor-pointer"
              style={{ background: color }}
              whileHover={{ scaleY: 1.3, zIndex: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "rgba(0,0,0,0.2)" }}
              >
                <span className="text-white font-bold text-xs tracking-widest uppercase">
                  {RAINBOW_COLORS[i].name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── COLOR CARDS */}
      <section className="py-20 px-4 md:px-8" style={{ background: "#0e0e16" }}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              background:
                "linear-gradient(90deg, #E63946, #F4A261, #E9C46A, #2A9D8F, #457B9D, #9B5DE5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
            }}
          >
            Seven Colours, Seven Stories
          </h2>
          <p className="mt-4 text-white/50 text-lg tracking-wide max-w-xl mx-auto">
            Each hue tells the tale of Dharamshala’s living culture,
            breathtaking landscape, and spiritual heritage.
          </p>
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {RAINBOW_COLORS.map((color, i) => (
            <motion.div
              key={color.name}
              data-ocid={`color.card.${i + 1}`}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{ boxShadow: `0 8px 40px ${color.hex}40`, minHeight: 360 }}
            >
              <div
                className="relative flex-1 flex flex-col p-7"
                style={{ ...color.bgStyle, minHeight: 220 }}
              >
                <div
                  className="absolute right-5 top-5 rounded-full"
                  style={{
                    width: 80,
                    height: 80,
                    background: color.accentColor,
                    border: `2px solid ${color.accentColor}`,
                  }}
                />
                <div className="relative z-10">
                  <span style={{ fontSize: "3rem", lineHeight: 1 }}>
                    {color.emoji}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: "2.5rem",
                      fontWeight: 900,
                      color: color.textColor,
                      lineHeight: 1,
                      marginTop: "0.5rem",
                      textShadow: "0 2px 12px rgba(0,0,0,0.3)",
                    }}
                  >
                    {color.name}
                  </h3>
                  <div
                    className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(0,0,0,0.2)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full border border-white/40"
                      style={{ background: color.hex }}
                    />
                    <span
                      style={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.75rem",
                        color: color.textColor,
                        opacity: 0.9,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {color.hex.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="p-6"
                style={{
                  background: "#16161e",
                  borderTop: `3px solid ${color.hex}`,
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: color.hex,
                    marginBottom: "0.6rem",
                    lineHeight: 1.3,
                  }}
                >
                  {color.culturalTitle}
                </h4>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.65,
                  }}
                >
                  {color.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CULTURAL QUOTE */}
      <section
        data-ocid="quote.section"
        className="relative py-28 px-6 overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #E63946 0%, #F4A261 20%, #E9C46A 35%, #2A9D8F 52%, #457B9D 68%, #3D405B 83%, #9B5DE5 100%)",
            opacity: 0.12,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #0e0e16, #0e0e16 20%, transparent 50%, #0e0e16 80%, #0e0e16)",
          }}
        />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex justify-center mb-10">
            <div className="flex h-1 w-64 rounded-full overflow-hidden">
              {RAINBOW_STRIP_COLORS.map((c) => (
                <div key={c} className="flex-1" style={{ background: c }} />
              ))}
            </div>
          </div>

          <p
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(1.5rem, 4vw, 2.8rem)",
              fontWeight: 600,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.95)",
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
              textShadow: "0 4px 32px rgba(0,0,0,0.4)",
            }}
          >
            “जहाँ पर्वत आसमान को छूते हैं, वहाँ हर रंग एक कहानी कहता है।”
          </p>

          <p
            className="mt-4"
            style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.1em",
            }}
          >
            Where the mountains touch the sky, every colour tells a story.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {RAINBOW_COLORS.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: `${c.hex}22`,
                  border: `1px solid ${c.hex}55`,
                }}
              >
                <span style={{ fontSize: "1rem" }}>{c.emoji}</span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: c.hex,
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    fontFamily: "'Figtree', sans-serif",
                  }}
                >
                  {c.name}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <div className="flex h-1 w-64 rounded-full overflow-hidden">
              {[...RAINBOW_STRIP_COLORS].reverse().map((c) => (
                <div key={c} className="flex-1" style={{ background: c }} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER */}
      <footer
        className="text-center py-10 px-4"
        style={{
          background: "#07070c",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex justify-center gap-2 mb-4">
          {DOT_ITEMS.map((item) => (
            <div
              key={item.id}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: item.color,
                boxShadow: `0 0 8px ${item.color}`,
              }}
            />
          ))}
        </div>
        <p
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            background:
              "linear-gradient(90deg, #E63946, #F4A261, #E9C46A, #2A9D8F, #457B9D, #9B5DE5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Dharamshala, Himachal Pradesh, India
        </p>
        <p className="mt-2 text-white/30 text-xs tracking-widest uppercase">
          Where Every Colour Tells a Story
        </p>
        <p className="mt-4 text-white/25 text-xs">
          © {new Date().getFullYear()}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/50 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
