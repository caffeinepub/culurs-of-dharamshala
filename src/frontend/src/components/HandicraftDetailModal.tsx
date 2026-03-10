import {
  CheckCircle,
  Layers,
  Mail,
  MapPin,
  Ruler,
  Tag,
  User,
  X,
  XCircle,
} from "lucide-react";
import type React from "react";
import { useEffect } from "react";
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

const categoryImageMap: Record<string, string> = {
  Textiles: "/assets/generated/handicraft-textile.dim_600x400.png",
  Pottery: "/assets/generated/handicraft-pottery.dim_600x400.png",
  Jewelry: "/assets/generated/handicraft-jewelry.dim_600x400.png",
  Woodwork: "/assets/generated/handicraft-woodwork.dim_600x400.png",
};

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

interface HandicraftDetailModalProps {
  handicraft: Handicraft;
  onClose: () => void;
}

interface SpecRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function SpecRow({ icon, label, value }: SpecRowProps) {
  if (!value || value.trim() === "") return null;
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-dharamshala-saffron flex-shrink-0">
        {icon}
      </span>
      <div>
        <span className="font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-0.5">
          {label}
        </span>
        <span className="font-sans text-sm text-foreground leading-relaxed">
          {value}
        </span>
      </div>
    </div>
  );
}

export default function HandicraftDetailModal({
  handicraft,
  onClose,
}: HandicraftDetailModalProps) {
  const imageUrl = getProductImage(handicraft);
  const badgeClass =
    categoryBadgeColors[handicraft.category] ||
    "bg-dharamshala-saffron/15 text-dharamshala-saffron border-dharamshala-saffron/30";

  const hasSpecifications = !!(
    handicraft.dimensions?.trim() ||
    handicraft.materials?.trim() ||
    handicraft.origin?.trim()
  );
  const hasArtisan = !!(
    handicraft.artisanName?.trim() || handicraft.artisanBio?.trim()
  );
  const hasRates = !!handicraft.rateDetails?.trim();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleInquire = () => {
    const subject = encodeURIComponent(`Inquiry about ${handicraft.name}`);
    const body = encodeURIComponent(
      `Hello,\n\nI am interested in purchasing the following item:\n\nProduct: ${handicraft.name}\nCategory: ${handicraft.category}\nPrice: ₹${handicraft.price.toLocaleString("en-IN")}\n\nPlease let me know about availability and how to proceed.\n\nThank you.`,
    );
    window.location.href = `mailto:info@coloursofdharmashala.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      aria-modal="true"
      aria-label={`Details for ${handicraft.name}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dharamshala-deep-night/80 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        tabIndex={-1}
        role="presentation"
      />

      {/* Modal content */}
      <div className="relative z-10 bg-card rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-dharamshala-deep-night/60 text-dharamshala-snow-white hover:bg-dharamshala-crimson transition-colors backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Product image */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl bg-dharamshala-parchment">
          <img
            src={imageUrl}
            alt={handicraft.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1.5 prayer-flag-stripe opacity-80" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Category badge */}
          <span
            className={`inline-block px-3 py-0.5 rounded-full text-xs font-sans font-semibold border mb-3 ${badgeClass}`}
          >
            {handicraft.category}
          </span>

          {/* Product name */}
          <h2 className="font-serif-display text-2xl md:text-3xl font-bold text-foreground leading-tight mb-3">
            {handicraft.name}
          </h2>

          {/* Price */}
          <div className="flex items-center gap-3 mb-5">
            <span className="font-serif-display text-3xl font-bold text-dharamshala-saffron-dark">
              ₹
              {handicraft.price.toLocaleString("en-IN", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Description */}
          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
            {handicraft.description}
          </p>

          {/* Availability */}
          <div className="flex items-center gap-2 mb-6 p-3 rounded-xl bg-muted/50 border border-border">
            {handicraft.available ? (
              <>
                <CheckCircle
                  size={18}
                  className="text-dharamshala-forest-green flex-shrink-0"
                />
                <span className="font-sans text-sm font-semibold text-dharamshala-forest-green">
                  In Stock
                </span>
                <span className="font-sans text-sm text-muted-foreground">
                  — Ready to ship
                </span>
              </>
            ) : (
              <>
                <XCircle
                  size={18}
                  className="text-dharamshala-mountain-gray flex-shrink-0"
                />
                <span className="font-sans text-sm font-semibold text-dharamshala-mountain-gray">
                  Out of Stock
                </span>
                <span className="font-sans text-sm text-muted-foreground">
                  — Contact us for restock updates
                </span>
              </>
            )}
          </div>

          {/* ── Product Specifications ── */}
          {hasSpecifications && (
            <div className="mb-6">
              <h3 className="font-serif-display text-base font-bold text-dharamshala-saffron-dark mb-3 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-dharamshala-saffron inline-block" />
                Product Specifications
              </h3>
              <div className="bg-muted/30 rounded-2xl border border-border p-4 space-y-3">
                <SpecRow
                  icon={<Ruler size={15} />}
                  label="Dimensions"
                  value={handicraft.dimensions}
                />
                <SpecRow
                  icon={<Layers size={15} />}
                  label="Materials"
                  value={handicraft.materials}
                />
                <SpecRow
                  icon={<MapPin size={15} />}
                  label="Origin"
                  value={handicraft.origin}
                />
              </div>
            </div>
          )}

          {/* ── Artisan ── */}
          {hasArtisan && (
            <div className="mb-6">
              <h3 className="font-serif-display text-base font-bold text-dharamshala-saffron-dark mb-3 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-dharamshala-crimson inline-block" />
                Artisan
              </h3>
              <div className="bg-muted/30 rounded-2xl border border-border p-4 space-y-3">
                {handicraft.artisanName?.trim() && (
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-dharamshala-saffron flex-shrink-0">
                      <User size={15} />
                    </span>
                    <div>
                      <span className="font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-0.5">
                        Artisan
                      </span>
                      <span className="font-serif-display text-sm font-semibold text-foreground">
                        {handicraft.artisanName}
                      </span>
                    </div>
                  </div>
                )}
                {handicraft.artisanBio?.trim() && (
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed pl-6">
                    {handicraft.artisanBio}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* ── Pricing & Rates ── */}
          {hasRates && (
            <div className="mb-6">
              <h3 className="font-serif-display text-base font-bold text-dharamshala-saffron-dark mb-3 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-dharamshala-forest-green inline-block" />
                Pricing & Rates
              </h3>
              <div className="bg-muted/30 rounded-2xl border border-border p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-dharamshala-forest-green flex-shrink-0">
                    <Tag size={15} />
                  </span>
                  <p className="font-sans text-sm text-foreground leading-relaxed whitespace-pre-line">
                    {handicraft.rateDetails}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <button
            type="button"
            onClick={handleInquire}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-sans font-semibold text-base bg-dharamshala-saffron text-dharamshala-snow-white hover:bg-dharamshala-saffron-dark transition-all duration-200 shadow-saffron hover:shadow-lg hover:-translate-y-0.5"
          >
            <Mail size={18} />
            Inquire to Purchase
          </button>

          {/* Disclaimer */}
          <p className="text-center font-sans text-xs text-muted-foreground mt-3">
            Clicking will open your email client with a pre-filled inquiry
            message.
          </p>
        </div>
      </div>
    </div>
  );
}
