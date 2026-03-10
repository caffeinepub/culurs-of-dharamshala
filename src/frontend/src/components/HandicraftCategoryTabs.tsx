import { cn } from "@/lib/utils";
import React from "react";

const HANDICRAFT_CATEGORIES = [
  "All",
  "Textiles",
  "Pottery",
  "Jewelry",
  "Woodwork",
] as const;
export type HandicraftCategory = (typeof HANDICRAFT_CATEGORIES)[number];

interface HandicraftCategoryTabsProps {
  activeCategory: HandicraftCategory;
  onChange: (category: HandicraftCategory) => void;
}

const categoryIcons: Record<HandicraftCategory, string> = {
  All: "✦",
  Textiles: "🧵",
  Pottery: "🏺",
  Jewelry: "💎",
  Woodwork: "🪵",
};

export default function HandicraftCategoryTabs({
  activeCategory,
  onChange,
}: HandicraftCategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {HANDICRAFT_CATEGORIES.map((cat) => (
        <button
          type="button"
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            "inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-sans font-semibold tracking-wide transition-all duration-200 border",
            activeCategory === cat
              ? "bg-dharamshala-saffron text-dharamshala-snow-white border-dharamshala-saffron shadow-saffron scale-105"
              : "bg-card text-foreground border-border hover:border-dharamshala-saffron hover:text-dharamshala-saffron hover:scale-105",
          )}
        >
          <span className="text-base leading-none">{categoryIcons[cat]}</span>
          <span>{cat}</span>
        </button>
      ))}
    </div>
  );
}
