import React, { useState } from "react";
// Legacy stub
interface ColorEntry {
  id: bigint;
  name: string;
  hexValue: string;
  hex: string;
  category: string;
  description: string;
  significance: string;
}
function useColorsByCategory(_cat: unknown) {
  return { data: [] as ColorEntry[], isLoading: false, isError: false };
}
import { Skeleton } from "@/components/ui/skeleton";
import CategoryFilterTabs, { type Category } from "./CategoryFilterTabs";
import ColorSwatch from "./ColorSwatch";

function SwatchSkeleton() {
  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border">
      <Skeleton className="h-40 w-full rounded-none" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

export default function ColorPaletteGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const {
    data: colors,
    isLoading,
    isError,
  } = useColorsByCategory(activeCategory);

  return (
    <section className="py-20 px-4 bg-dharamshala-warm-cream relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-40 pointer-events-none" />

      {/* Decorative background image */}
      <div className="absolute right-0 top-0 w-72 h-72 opacity-5 pointer-events-none">
        <img
          src="/assets/generated/color-palette-bg.dim_800x800.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-display text-xs tracking-[0.3em] uppercase text-dharamshala-saffron mb-3">
            The Palette
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Colors of the Land
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-dharamshala-saffron/40" />
            <span className="text-dharamshala-saffron text-xl">✦</span>
            <div className="h-px w-16 bg-dharamshala-saffron/40" />
          </div>
          <p className="font-sans text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
            Each hue tells a story — of monks and mountains, festivals and
            forests, temples and the timeless Himalayan sky.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-10">
          <CategoryFilterTabs
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* Color grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: stable skeleton placeholder
              <SwatchSkeleton key={i} />
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-16">
            <p className="text-dharamshala-crimson font-sans text-lg">
              Unable to load colors. Please try again.
            </p>
          </div>
        ) : !colors || colors.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🏔</div>
            <p className="font-serif-display text-xl text-muted-foreground">
              No colors found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {colors.map((entry, i) => (
              <ColorSwatch key={`${entry.name}-${i}`} entry={entry} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
