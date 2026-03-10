import React from "react";

export default function HeroBanner() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "520px" }}
    >
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/dharamshala-hero.dim_1440x600.png"
          alt="Dharamshala panoramic view with Himalayan peaks and prayer flags"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Prayer flag stripe at top */}
      <div className="absolute top-0 left-0 right-0 h-2 prayer-flag-stripe opacity-90" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 md:py-32"
        style={{ minHeight: "520px" }}
      >
        {/* Decorative Om/mandala symbol */}
        <div className="mb-4 text-dharamshala-saffron opacity-80 text-4xl font-display tracking-widest">
          ༄
        </div>

        <p className="font-display text-xs md:text-sm tracking-[0.35em] uppercase text-dharamshala-saffron mb-3 opacity-90">
          A Visual Journey Through
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-dharamshala-snow-white leading-none tracking-wide mb-2">
          CULURS
        </h1>
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal text-dharamshala-saffron tracking-[0.2em] uppercase mb-6">
          of Dharamshala
        </h2>

        <div className="w-24 h-px bg-dharamshala-saffron mx-auto mb-6 opacity-70" />

        <p className="font-sans text-base md:text-lg text-dharamshala-snow-white/80 max-w-xl leading-relaxed font-light">
          Discover the vibrant hues woven into the soul of the Himalayan
          foothills — from saffron robes to prayer flags dancing in mountain
          winds.
        </p>

        <div className="mt-10 flex gap-3 justify-center">
          {["#C41E3A", "#1E5FA8", "#FFFFFF", "#228B22", "#FFD700"].map(
            (color, i) => (
              <div
                key={color}
                className="w-5 h-5 rounded-full border-2 border-white/30 shadow-lg animate-float"
                style={{
                  backgroundColor: color,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ),
          )}
        </div>
      </div>

      {/* Prayer flag stripe at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 prayer-flag-stripe opacity-90" />
    </section>
  );
}
