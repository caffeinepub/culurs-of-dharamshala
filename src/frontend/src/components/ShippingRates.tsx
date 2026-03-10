import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertCircle,
  Calculator,
  Clock,
  Globe,
  Home,
  Package,
  TrendingUp,
  Truck,
} from "lucide-react";
import React, { useState } from "react";
// Legacy type stub
interface ShippingRate {
  id: bigint;
  name: string;
  shipmentType: string;
  weightMin: number;
  weightMax: number;
  basePrice: number;
  pricePerKg: number;
  baseRate: number;
  perKgRate: number;
  currency: string;
  deliveryDays: string;
  estimatedDays: string;
  description: string;
  weightRangeLabel: string;
  carrier: string;
}
function useShippingRatesByType(_type: "Domestic" | "International") {
  return { data: [] as ShippingRate[], isLoading: false, isError: false };
}

// ─── Rate Card ───────────────────────────────────────────────────────────────

function RateCard({ rate }: { rate: ShippingRate }) {
  return (
    <div className="bg-white border border-dharamshala-saffron/15 rounded-2xl p-5 hover:border-dharamshala-saffron/40 hover:shadow-card-hover transition-all duration-200 group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="inline-block bg-dharamshala-saffron/10 text-dharamshala-saffron-dark font-sans font-bold text-xs px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
            {rate.weightRangeLabel}
          </span>
          <p className="font-sans text-xs text-dharamshala-mountain-gray flex items-center gap-1">
            <Truck className="w-3 h-3" />
            {rate.carrier}
          </p>
        </div>
        <div className="text-right">
          <p className="font-display text-2xl font-bold text-dharamshala-deep-night">
            ₹
            {rate.baseRate.toLocaleString("en-IN", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
          <p className="font-sans text-xs text-dharamshala-earth-brown">
            base rate
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-dharamshala-saffron/10">
        <div className="flex items-center gap-1.5 text-dharamshala-earth-brown">
          <TrendingUp className="w-3.5 h-3.5 text-dharamshala-saffron-dark" />
          <span className="font-sans text-sm">
            +₹
            {rate.perKgRate.toLocaleString("en-IN", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
            /kg
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-dharamshala-earth-brown">
          <Clock className="w-3.5 h-3.5 text-dharamshala-himalayan-blue" />
          <span className="font-sans text-sm">{rate.estimatedDays}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Rate Skeleton ────────────────────────────────────────────────────────────

function RateSkeleton() {
  return (
    <div className="bg-white border border-dharamshala-saffron/10 rounded-2xl p-5 space-y-3">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-3 w-20" />
        </div>
        <div className="space-y-1 text-right">
          <Skeleton className="h-7 w-16 ml-auto" />
          <Skeleton className="h-3 w-12 ml-auto" />
        </div>
      </div>
      <Skeleton className="h-px w-full" />
      <div className="flex justify-between">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  );
}

// ─── Rate Calculator ──────────────────────────────────────────────────────────

interface CalculatorResult {
  rate: ShippingRate;
  estimatedCost: number;
}

function RateCalculator({
  rates,
  shipmentType,
  onTypeChange,
}: {
  rates: ShippingRate[];
  shipmentType: "Domestic" | "International";
  onTypeChange: (type: "Domestic" | "International") => void;
}) {
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [noMatch, setNoMatch] = useState(false);

  const handleCalculate = () => {
    const w = Number.parseFloat(weight);
    if (Number.isNaN(w) || w <= 0) return;

    if (rates.length === 0) {
      setNoMatch(true);
      setResult(null);
      return;
    }

    // Sort by baseRate ascending and pick the appropriate tier
    const sorted = [...rates].sort((a, b) => a.baseRate - b.baseRate);
    // Use the last (most expensive / heaviest) tier as fallback
    const matchedRate = sorted[sorted.length - 1];

    const estimatedCost = matchedRate.baseRate + w * matchedRate.perKgRate;
    setResult({ rate: matchedRate, estimatedCost });
    setNoMatch(false);
  };

  const handleReset = () => {
    setWeight("");
    setResult(null);
    setNoMatch(false);
  };

  return (
    <div className="bg-dharamshala-parchment border border-dharamshala-saffron/20 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-full bg-dharamshala-saffron/15 flex items-center justify-center">
          <Calculator className="w-4 h-4 text-dharamshala-saffron-dark" />
        </div>
        <h4 className="font-serif text-lg font-bold text-dharamshala-deep-night">
          Rate Calculator
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {/* Shipment Type */}
        <div>
          <Label className="font-sans text-xs font-semibold text-dharamshala-earth-brown uppercase tracking-wider mb-2 block">
            Shipment Type
          </Label>
          <div className="flex rounded-xl overflow-hidden border border-dharamshala-saffron/30 w-full">
            <button
              type="button"
              onClick={() => {
                onTypeChange("Domestic");
                handleReset();
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 font-sans font-semibold text-xs transition-all ${
                shipmentType === "Domestic"
                  ? "bg-dharamshala-saffron text-white"
                  : "bg-white text-dharamshala-earth-brown hover:bg-dharamshala-parchment"
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              Domestic
            </button>
            <button
              type="button"
              onClick={() => {
                onTypeChange("International");
                handleReset();
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 font-sans font-semibold text-xs transition-all ${
                shipmentType === "International"
                  ? "bg-dharamshala-saffron text-white"
                  : "bg-white text-dharamshala-earth-brown hover:bg-dharamshala-parchment"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              Intl.
            </button>
          </div>
        </div>

        {/* Weight Input */}
        <div>
          <Label
            htmlFor="calc-weight"
            className="font-sans text-xs font-semibold text-dharamshala-earth-brown uppercase tracking-wider mb-2 block"
          >
            Weight (kg)
          </Label>
          <Input
            id="calc-weight"
            type="number"
            min="0.1"
            step="0.1"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
              setResult(null);
              setNoMatch(false);
            }}
            placeholder="e.g. 2.5"
            className="font-sans border-dharamshala-mountain-gray/40 focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20 bg-white"
          />
        </div>

        {/* Calculate Button */}
        <div className="flex items-end">
          <Button
            type="button"
            onClick={handleCalculate}
            disabled={
              !weight || Number.parseFloat(weight) <= 0 || rates.length === 0
            }
            className="w-full bg-dharamshala-saffron hover:bg-dharamshala-saffron-dark text-white font-sans font-semibold rounded-xl shadow-saffron disabled:opacity-50"
          >
            Calculate
          </Button>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="mt-4 bg-white border border-dharamshala-saffron/30 rounded-xl p-4 animate-fade-up">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-sans text-xs text-dharamshala-earth-brown uppercase tracking-wider mb-0.5">
                Estimated Cost
              </p>
              <p className="font-display text-3xl font-bold text-dharamshala-saffron-dark">
                ₹
                {result.estimatedCost.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="text-right">
              <p className="font-sans text-xs text-dharamshala-mountain-gray mb-0.5">
                Rate Tier
              </p>
              <span className="inline-block bg-dharamshala-saffron/10 text-dharamshala-saffron-dark font-sans font-bold text-xs px-2.5 py-1 rounded-full">
                {result.rate.weightRangeLabel}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-dharamshala-saffron/10">
            <div>
              <p className="font-sans text-xs text-dharamshala-mountain-gray">
                Base Rate
              </p>
              <p className="font-sans text-sm font-semibold text-dharamshala-deep-night">
                ₹{result.rate.baseRate.toLocaleString("en-IN")}
              </p>
            </div>
            <div>
              <p className="font-sans text-xs text-dharamshala-mountain-gray">
                Per kg Rate
              </p>
              <p className="font-sans text-sm font-semibold text-dharamshala-deep-night">
                ₹{result.rate.perKgRate.toLocaleString("en-IN")}
              </p>
            </div>
            <div>
              <p className="font-sans text-xs text-dharamshala-mountain-gray">
                Est. Delivery
              </p>
              <p className="font-sans text-sm font-semibold text-dharamshala-deep-night">
                {result.rate.estimatedDays}
              </p>
            </div>
          </div>
          <p className="font-sans text-xs text-dharamshala-mountain-gray mt-3 italic">
            * Carrier: {result.rate.carrier}. Final cost may vary based on
            actual weight and dimensions.
          </p>
        </div>
      )}

      {noMatch && (
        <div className="mt-4 flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 font-sans text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          No rate tiers available for this shipment type yet.
        </div>
      )}
    </div>
  );
}

// ─── Main Shipping Rates Section ──────────────────────────────────────────────

export default function ShippingRates() {
  const [activeType, setActiveType] = useState<"Domestic" | "International">(
    "Domestic",
  );

  const {
    data: rates = [],
    isLoading,
    isError,
  } = useShippingRatesByType(activeType);

  return (
    <section className="py-16 bg-dharamshala-warm-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px flex-1 max-w-16 bg-dharamshala-saffron/30" />
            <Package className="w-5 h-5 text-dharamshala-saffron-dark" />
            <div className="h-px flex-1 max-w-16 bg-dharamshala-saffron/30" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dharamshala-deep-night mb-3">
            Shipping Rates
          </h2>
          <p className="font-sans text-dharamshala-earth-brown max-w-xl mx-auto">
            Transparent pricing for all your domestic and international
            shipments from Dharamshala.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex rounded-2xl overflow-hidden border border-dharamshala-saffron/30 bg-white shadow-xs">
            <button
              type="button"
              onClick={() => setActiveType("Domestic")}
              className={`flex items-center gap-2 px-8 py-3 font-sans font-semibold text-sm transition-all ${
                activeType === "Domestic"
                  ? "bg-dharamshala-saffron text-white shadow-saffron"
                  : "text-dharamshala-earth-brown hover:bg-dharamshala-parchment"
              }`}
            >
              <Home className="w-4 h-4" />
              Domestic
            </button>
            <button
              type="button"
              onClick={() => setActiveType("International")}
              className={`flex items-center gap-2 px-8 py-3 font-sans font-semibold text-sm transition-all ${
                activeType === "International"
                  ? "bg-dharamshala-saffron text-white shadow-saffron"
                  : "text-dharamshala-earth-brown hover:bg-dharamshala-parchment"
              }`}
            >
              <Globe className="w-4 h-4" />
              International
            </button>
          </div>
        </div>

        {/* Error State */}
        {isError && (
          <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-sans text-sm mb-8 max-w-lg mx-auto">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            Failed to load shipping rates. Please try again later.
          </div>
        )}

        {/* Rate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
          {isLoading ? (
            [0, 1, 2, 3].map((n) => <RateSkeleton key={n} />)
          ) : rates.length === 0 && !isError ? (
            <div className="col-span-full flex flex-col items-center py-12 text-center">
              <div className="w-14 h-14 rounded-full bg-dharamshala-saffron/10 flex items-center justify-center mb-4">
                <Package className="w-7 h-7 text-dharamshala-saffron-dark" />
              </div>
              <p className="font-serif text-lg font-semibold text-dharamshala-deep-night mb-1">
                No {activeType} Rates Available
              </p>
              <p className="font-sans text-sm text-dharamshala-mountain-gray max-w-xs">
                {activeType} shipping rates have not been configured yet. Please
                check back soon or contact us for a custom quote.
              </p>
            </div>
          ) : (
            rates.map((rate) => (
              <RateCard key={rate.id.toString()} rate={rate} />
            ))
          )}
        </div>

        {/* Rate Calculator */}
        <RateCalculator
          rates={rates}
          shipmentType={activeType}
          onTypeChange={setActiveType}
        />

        {/* Disclaimer */}
        <p className="font-sans text-xs text-dharamshala-mountain-gray text-center mt-6">
          All rates are indicative and subject to change. Actual charges may
          vary based on package dimensions, destination, and applicable taxes.
          Contact our office for bulk shipment quotes.
        </p>
      </div>
    </section>
  );
}
