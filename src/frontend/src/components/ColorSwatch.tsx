import React, { useState } from "react";
// Legacy type stub - backend no longer exports ColorEntry
interface ColorEntry {
  id: bigint;
  name: string;
  hexValue: string;
  hex: string;
  category: string;
  description: string;
  significance: string;
}
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ColorSwatchProps {
  entry: ColorEntry;
  index: number;
}

const categoryColors: Record<string, string> = {
  Spirituality:
    "bg-dharamshala-saffron/20 text-dharamshala-saffron-dark border-dharamshala-saffron/30",
  Festival:
    "bg-dharamshala-crimson/15 text-dharamshala-crimson border-dharamshala-crimson/30",
  Nature:
    "bg-dharamshala-forest-green/15 text-dharamshala-forest-green border-dharamshala-forest-green/30",
  Architecture:
    "bg-dharamshala-mountain-gray/20 text-dharamshala-earth-brown border-dharamshala-mountain-gray/30",
};

export default function ColorSwatch({ entry, index }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(entry.hex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  // Determine if text on swatch should be light or dark
  const isLightColor = [
    "#FFFFFF",
    "#BEBEBE",
    "#FFD700",
    "#FF69B4",
    "#FF9933",
  ].some((c) => entry.hex.toUpperCase() === c.toUpperCase());

  return (
    <article
      className="group bg-card rounded-2xl overflow-hidden shadow-xs hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Color swatch area */}
      <button
        type="button"
        className="swatch-shine relative h-40 w-full cursor-pointer flex items-end justify-end p-3"
        style={{ backgroundColor: entry.hex }}
        onClick={handleCopy}
        title="Click to copy hex"
        aria-label={`Copy hex ${entry.hex}`}
      >
        <span
          className={cn(
            "text-xs font-mono font-bold px-2 py-1 rounded-md backdrop-blur-sm transition-all duration-200",
            isLightColor
              ? "bg-black/20 text-black/70"
              : "bg-white/20 text-white/90",
          )}
        >
          {copied ? "✓ Copied!" : entry.hex}
        </span>
      </button>

      {/* Info area */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif-display font-bold text-base text-foreground leading-tight">
            {entry.name}
          </h3>
        </div>
        <span
          className={cn(
            "inline-block text-xs font-sans font-semibold px-2 py-0.5 rounded-full border mb-2",
            categoryColors[entry.category] ||
              "bg-muted text-muted-foreground border-border",
          )}
        >
          {entry.category}
        </span>
        <p className="text-sm text-muted-foreground font-sans leading-relaxed">
          {entry.description}
        </p>
      </div>
    </article>
  );
}
