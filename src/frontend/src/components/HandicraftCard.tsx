import React from "react";
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

// Map backend category + id to local generated images
const categoryImageMap: Record<string, string> = {
  Textiles: "/assets/generated/handicraft-textile.dim_600x400.png",
  Pottery: "/assets/generated/handicraft-pottery.dim_600x400.png",
  Jewelry: "/assets/generated/handicraft-jewelry.dim_600x400.png",
  Woodwork: "/assets/generated/handicraft-woodwork.dim_600x400.png",
};

// For specific products that have dedicated images
const productImageMap: Record<number, string> = {
  1: "/assets/generated/handicraft-shawl.dim_600x400.png",
  6: "/assets/generated/handicraft-textile.dim_600x400.png",
};

function getProductImage(handicraft: Handicraft): string {
  const id = Number(handicraft.id);
  if (productImageMap[id]) return productImageMap[id];
  return (
    categoryImageMap[handicraft.category] ||
    "/assets/generated/handicraft-textile.dim_600x400.png"
  );
}

const categoryBadgeColors: Record<string, string> = {
  Textiles:
    "bg-dharamshala-saffron/15 text-dharamshala-saffron-dark border-dharamshala-saffron/30",
  Pottery:
    "bg-dharamshala-earth-brown/15 text-dharamshala-earth-brown border-dharamshala-earth-brown/30",
  Jewelry:
    "bg-dharamshala-crimson/15 text-dharamshala-crimson border-dharamshala-crimson/30",
  Woodwork:
    "bg-dharamshala-forest-green/15 text-dharamshala-forest-green border-dharamshala-forest-green/30",
};

interface HandicraftCardProps {
  handicraft: Handicraft;
  onClick: (handicraft: Handicraft) => void;
}

export default function HandicraftCard({
  handicraft,
  onClick,
}: HandicraftCardProps) {
  const imageUrl = getProductImage(handicraft);
  const badgeClass =
    categoryBadgeColors[handicraft.category] ||
    "bg-dharamshala-saffron/15 text-dharamshala-saffron border-dharamshala-saffron/30";

  return (
    <article
      className="group bg-card rounded-2xl overflow-hidden border border-border shadow-xs hover:shadow-card-hover transition-all duration-300 cursor-pointer hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dharamshala-saffron"
      onClick={() => onClick(handicraft)}
      onKeyDown={(e) => e.key === "Enter" && onClick(handicraft)}
      aria-label={`View details for ${handicraft.name}`}
    >
      {/* Product image */}
      <div className="relative overflow-hidden h-52 bg-dharamshala-parchment swatch-shine">
        <img
          src={imageUrl}
          alt={handicraft.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Availability badge */}
        <div className="absolute top-3 right-3">
          {handicraft.available ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-sans font-semibold bg-dharamshala-forest-green/90 text-dharamshala-snow-white backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-dharamshala-snow-white inline-block" />
              In Stock
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-sans font-semibold bg-dharamshala-mountain-gray/80 text-dharamshala-snow-white backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-dharamshala-snow-white/60 inline-block" />
              Out of Stock
            </span>
          )}
        </div>
      </div>

      {/* Card content */}
      <div className="p-5">
        {/* Category badge */}
        <span
          className={`inline-block px-3 py-0.5 rounded-full text-xs font-sans font-semibold border mb-3 ${badgeClass}`}
        >
          {handicraft.category}
        </span>

        {/* Product name */}
        <h3 className="font-serif-display text-lg font-bold text-foreground leading-snug mb-2 group-hover:text-dharamshala-saffron-dark transition-colors">
          {handicraft.name}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
          {handicraft.description}
        </p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <span className="font-serif-display text-xl font-bold text-dharamshala-saffron-dark">
            ₹
            {handicraft.price.toLocaleString("en-IN", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-sans font-semibold bg-dharamshala-saffron text-dharamshala-snow-white hover:bg-dharamshala-saffron-dark transition-colors shadow-saffron"
            onClick={(e) => {
              e.stopPropagation();
              onClick(handicraft);
            }}
            tabIndex={-1}
          >
            Inquire / Buy
          </button>
        </div>
      </div>
    </article>
  );
}
