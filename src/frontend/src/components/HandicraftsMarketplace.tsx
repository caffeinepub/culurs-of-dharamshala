import { Skeleton } from "@/components/ui/skeleton";
import { ChevronUp, Plus } from "lucide-react";
import React, { useState } from "react";
import AddProductForm from "./AddProductForm";
import HandicraftCard from "./HandicraftCard";
import HandicraftCategoryTabs, {
  type HandicraftCategory,
} from "./HandicraftCategoryTabs";
import HandicraftDetailModal from "./HandicraftDetailModal";
// Legacy type stub
interface Handicraft {
  id: bigint;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  available: boolean;
  dimensions: string;
  materials: string;
  origin: string;
  artisanName: string;
  artisanBio: string;
  rateDetails: string;
}
function useHandicraftsByCategory(_category: HandicraftCategory) {
  return { data: [] as Handicraft[], isLoading: false, isError: false };
}
function CardSkeleton() {
  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border">
      <Skeleton className="h-52 w-full rounded-none" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-4 w-20 rounded-full" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex items-center justify-between pt-1">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-8 w-28 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function HandicraftsMarketplace() {
  const [activeCategory, setActiveCategory] =
    useState<HandicraftCategory>("All");
  const [selectedHandicraft, setSelectedHandicraft] =
    useState<Handicraft | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const {
    data: handicrafts,
    isLoading,
    isError,
  } = useHandicraftsByCategory(activeCategory);

  return (
    <section
      id="handicrafts"
      className="py-20 px-4 bg-dharamshala-parchment relative overflow-hidden"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-30 pointer-events-none" />

      {/* Top prayer flag stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 prayer-flag-stripe" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-display text-xs tracking-[0.3em] uppercase text-dharamshala-saffron mb-3">
            Local Artisans
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Handicrafts Marketplace
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-dharamshala-saffron/40" />
            <span className="text-dharamshala-saffron text-xl">🏺</span>
            <div className="h-px w-16 bg-dharamshala-saffron/40" />
          </div>
          <p className="font-sans text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
            Discover authentic handcrafted treasures from the skilled artisans
            of Dharamshala — each piece carrying the soul of the Himalayas.
          </p>

          {/* Add Product button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setShowAddForm((prev) => !prev)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans font-semibold text-sm border-2 border-dharamshala-saffron text-dharamshala-saffron-dark bg-transparent hover:bg-dharamshala-saffron hover:text-dharamshala-snow-white transition-all duration-200 shadow-sm hover:shadow-saffron"
              aria-expanded={showAddForm}
            >
              {showAddForm ? (
                <>
                  <ChevronUp size={16} />
                  Hide Add Product Form
                </>
              ) : (
                <>
                  <Plus size={16} />
                  Add New Product
                </>
              )}
            </button>
          </div>
        </div>

        {/* Add Product Form (collapsible) */}
        {showAddForm && (
          <div className="mb-12">
            <AddProductForm onClose={() => setShowAddForm(false)} />
          </div>
        )}

        {/* Category filter */}
        <div className="mb-10">
          <HandicraftCategoryTabs
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* Product grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <CardSkeleton key={`skeleton-${i}`} />
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-16">
            <p className="text-dharamshala-crimson font-sans text-lg">
              Unable to load handicrafts. Please try again.
            </p>
          </div>
        ) : !handicrafts || handicrafts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🏔</div>
            <p className="font-serif-display text-xl text-muted-foreground">
              No handicrafts found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {handicrafts.map((item) => (
              <HandicraftCard
                key={Number(item.id)}
                handicraft={item}
                onClick={setSelectedHandicraft}
              />
            ))}
          </div>
        )}

        {/* Artisan note */}
        <div className="mt-14 text-center">
          <div className="inline-block border border-dharamshala-saffron/30 rounded-2xl px-8 py-5 bg-card/60 backdrop-blur-sm">
            <p className="font-display text-xs tracking-[0.25em] uppercase text-dharamshala-saffron mb-2">
              Handcrafted with Love
            </p>
            <p className="font-sans text-sm text-muted-foreground max-w-md">
              All products are made by local artisans using traditional
              techniques passed down through generations. Click any product to
              inquire about purchase.
            </p>
          </div>
        </div>
      </div>

      {/* Product detail modal */}
      {selectedHandicraft && (
        <HandicraftDetailModal
          handicraft={selectedHandicraft}
          onClose={() => setSelectedHandicraft(null)}
        />
      )}
    </section>
  );
}
