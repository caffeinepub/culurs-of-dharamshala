import { cn } from "@/lib/utils";
import React from "react";

const CATEGORIES = [
  "All",
  "Nature",
  "Spirituality",
  "Festival",
  "Architecture",
] as const;
export type Category = (typeof CATEGORIES)[number];

interface CategoryFilterTabsProps {
  activeCategory: Category;
  onChange: (category: Category) => void;
}

const categoryIcons: Record<Category, string> = {
  All: "✦",
  Nature: "🌿",
  Spirituality: "☸",
  Festival: "🪔",
  Architecture: "🏛",
};

export default function CategoryFilterTabs({
  activeCategory,
  onChange,
}: CategoryFilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {CATEGORIES.map((cat) => (
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
