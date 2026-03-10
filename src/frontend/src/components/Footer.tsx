import { Heart } from "lucide-react";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined"
      ? window.location.hostname
      : "culurs-of-dharamshala",
  );

  return (
    <footer className="bg-dharamshala-deep-night text-dharamshala-snow-white/80">
      {/* Prayer flag stripe */}
      <div className="h-2 prayer-flag-stripe" />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          {/* Logo / Title */}
          <div className="font-display text-2xl md:text-3xl font-bold text-dharamshala-saffron tracking-widest mb-2">
            CULURS OF DHARAMSHALA
          </div>
          <div className="text-dharamshala-snow-white/50 text-sm font-sans tracking-widest uppercase mb-6">
            ༄ Celebrating the Vibrant Soul of the Himalayas ༄
          </div>

          {/* Prayer flag color dots */}
          <div className="flex justify-center gap-3 mb-8">
            {[
              { color: "#C41E3A", label: "Red — Fire & Passion" },
              { color: "#1E5FA8", label: "Blue — Sky & Wisdom" },
              { color: "#FFFFFF", label: "White — Purity & Air" },
              { color: "#228B22", label: "Green — Nature & Balance" },
              { color: "#FFD700", label: "Yellow — Earth & Abundance" },
            ].map(({ color, label }) => (
              <div key={color} className="group relative">
                <div
                  className="w-6 h-6 rounded-full border-2 border-white/20 cursor-default"
                  style={{ backgroundColor: color }}
                />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <p className="font-sans text-sm text-dharamshala-snow-white/50 max-w-md mx-auto leading-relaxed mb-8">
            From the saffron robes of Tibetan monks to the emerald cedar
            forests, Dharamshala's colors are a living tapestry of culture,
            spirituality, and nature.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-sans text-dharamshala-snow-white/40">
            <span>© {year} Culurs of Dharamshala. All rights reserved.</span>
            <span className="flex items-center gap-1.5">
              Built with{" "}
              <Heart
                className="w-3.5 h-3.5 fill-dharamshala-saffron text-dharamshala-saffron"
                aria-label="love"
              />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dharamshala-saffron hover:text-dharamshala-saffron-light underline underline-offset-2 transition-colors"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
