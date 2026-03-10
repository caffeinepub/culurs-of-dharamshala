import { AlertCircle, CheckCircle2, Loader2, X } from "lucide-react";
import type React from "react";
import { useState } from "react";
// Legacy stub
function useAddHandicraft() {
  return {
    mutate: (_p: unknown, _opts?: unknown) => {},
    mutateAsync: async (_p: unknown) => BigInt(0),
    isPending: false,
    isSuccess: false,
    isError: false,
    error: null as Error | null,
    reset: () => {},
  };
}
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const CATEGORIES = ["Textiles", "Pottery", "Jewelry", "Woodwork"] as const;

const emptyForm = {
  name: "",
  category: "",
  description: "",
  price: "",
  imageUrl: "",
  available: true,
  dimensions: "",
  materials: "",
  origin: "",
  artisanName: "",
  artisanBio: "",
  rateDetails: "",
};

interface AddProductFormProps {
  onClose: () => void;
}

export default function AddProductForm({ onClose }: AddProductFormProps) {
  const [form, setForm] = useState(emptyForm);
  const [successId, setSuccessId] = useState<bigint | null>(null);

  const mutation = useAddHandicraft();

  const handleChange = (
    field: keyof typeof emptyForm,
    value: string | boolean,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.category || !form.description || !form.price)
      return;

    mutation.mutate(
      {
        name: form.name.trim(),
        description: form.description.trim(),
        price: Number.parseFloat(form.price),
        category: form.category,
        imageUrl: form.imageUrl.trim(),
        available: form.available,
        dimensions: form.dimensions.trim(),
        materials: form.materials.trim(),
        origin: form.origin.trim(),
        artisanName: form.artisanName.trim(),
        artisanBio: form.artisanBio.trim(),
        rateDetails: form.rateDetails.trim(),
      },
      {
        onSuccess: (id) => {
          setSuccessId(id);
          setForm(emptyForm);
        },
      },
    );
  };

  const handleAddAnother = () => {
    setSuccessId(null);
    mutation.reset();
  };

  return (
    <div className="bg-card border border-dharamshala-saffron/30 rounded-3xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-dharamshala-saffron/5">
        <div>
          <p className="font-display text-xs tracking-[0.25em] uppercase text-dharamshala-saffron mb-0.5">
            Admin Panel
          </p>
          <h3 className="font-serif-display text-xl font-bold text-foreground">
            Add New Product
          </h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-dharamshala-crimson/10 text-muted-foreground hover:text-dharamshala-crimson transition-colors"
          aria-label="Close form"
        >
          <X size={16} />
        </button>
      </div>

      <div className="p-6 md:p-8">
        {/* Success state */}
        {successId !== null && (
          <div className="mb-6 flex flex-col items-center gap-3 py-8 text-center">
            <CheckCircle2 size={48} className="text-dharamshala-forest-green" />
            <h4 className="font-serif-display text-xl font-bold text-foreground">
              Product Added Successfully!
            </h4>
            <p className="font-sans text-sm text-muted-foreground">
              Product ID{" "}
              <span className="font-semibold text-dharamshala-saffron-dark">
                #{successId.toString()}
              </span>{" "}
              has been added to the marketplace.
            </p>
            <div className="flex gap-3 mt-2">
              <Button
                variant="outline"
                onClick={handleAddAnother}
                className="rounded-full border-dharamshala-saffron/40 text-dharamshala-saffron-dark hover:bg-dharamshala-saffron/10"
              >
                Add Another Product
              </Button>
              <Button
                onClick={onClose}
                className="rounded-full bg-dharamshala-saffron hover:bg-dharamshala-saffron-dark text-dharamshala-snow-white"
              >
                Done
              </Button>
            </div>
          </div>
        )}

        {/* Error state */}
        {mutation.isError && (
          <div className="mb-5 flex items-start gap-3 p-4 rounded-xl bg-dharamshala-crimson/10 border border-dharamshala-crimson/30">
            <AlertCircle
              size={18}
              className="text-dharamshala-crimson flex-shrink-0 mt-0.5"
            />
            <p className="font-sans text-sm text-dharamshala-crimson">
              {mutation.error?.message ||
                "Failed to add product. Please try again."}
            </p>
          </div>
        )}

        {/* Form */}
        {successId === null && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info */}
            <div>
              <h4 className="font-serif-display text-base font-semibold text-dharamshala-saffron-dark mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-dharamshala-saffron/20 flex items-center justify-center text-xs font-bold text-dharamshala-saffron">
                  1
                </span>
                Basic Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="product-name"
                    className="font-sans text-sm font-medium text-foreground"
                  >
                    Product Name{" "}
                    <span className="text-dharamshala-crimson">*</span>
                  </Label>
                  <Input
                    id="product-name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="e.g. Tibetan Woolen Shawl"
                    required
                    className="rounded-xl border-border focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="product-category"
                    className="font-sans text-sm font-medium text-foreground"
                  >
                    Category <span className="text-dharamshala-crimson">*</span>
                  </Label>
                  <Select
                    value={form.category}
                    onValueChange={(val) => handleChange("category", val)}
                    required
                  >
                    <SelectTrigger
                      id="product-category"
                      className="rounded-xl border-border focus:border-dharamshala-saffron"
                    >
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="product-price"
                    className="font-sans text-sm font-medium text-foreground"
                  >
                    Price (₹ INR){" "}
                    <span className="text-dharamshala-crimson">*</span>
                  </Label>
                  <Input
                    id="product-price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.price}
                    onChange={(e) => handleChange("price", e.target.value)}
                    placeholder="e.g. 2500"
                    required
                    className="rounded-xl border-border focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="product-image-url"
                    className="font-sans text-sm font-medium text-foreground"
                  >
                    Image URL
                  </Label>
                  <Input
                    id="product-image-url"
                    type="url"
                    value={form.imageUrl}
                    onChange={(e) => handleChange("imageUrl", e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="rounded-xl border-border focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20"
                  />
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <Label
                    htmlFor="product-description"
                    className="font-sans text-sm font-medium text-foreground"
                  >
                    Description{" "}
                    <span className="text-dharamshala-crimson">*</span>
                  </Label>
                  <Textarea
                    id="product-description"
                    value={form.description}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    placeholder="Describe the product, its craftsmanship, and cultural significance..."
                    rows={3}
                    required
                    className="rounded-xl border-border focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20 resize-none"
                  />
                </div>

                <div className="md:col-span-2 flex items-center gap-3 p-3 rounded-xl bg-muted/40 border border-border">
                  <Switch
                    id="product-available"
                    checked={form.available}
                    onCheckedChange={(val) => handleChange("available", val)}
                  />
                  <Label
                    htmlFor="product-available"
                    className="font-sans text-sm font-medium text-foreground cursor-pointer"
                  >
                    {form.available ? (
                      <span className="text-dharamshala-forest-green">
                        Available — In Stock
                      </span>
                    ) : (
                      <span className="text-dharamshala-mountain-gray">
                        Unavailable — Out of Stock
                      </span>
                    )}
                  </Label>
                </div>
              </div>
            </div>

            {/* Product Specifications */}
            <div>
              <h4 className="font-serif-display text-base font-semibold text-dharamshala-saffron-dark mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-dharamshala-saffron/20 flex items-center justify-center text-xs font-bold text-dharamshala-saffron">
                  2
                </span>
                Product Specifications
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="product-dimensions"
                    className="font-sans text-sm font-medium text-foreground"
                  >
                    Dimensions
                  </Label>
                  <Input
                    id="product-dimensions"
                    value={form.dimensions}
                    onChange={(e) => handleChange("dimensions", e.target.value)}
                    placeholder="e.g. 200cm x 70cm"
                    className="rounded-xl border-border focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="product-materials"
                    className="font-sans text-sm font-medium text-foreground"
                  >
                    Materials
                  </Label>
                  <Input
                    id="product-materials"
                    value={form.materials}
                    onChange={(e) => handleChange("materials", e.target.value)}
                    placeholder="e.g. 100% Himalayan Wool"
                    className="rounded-xl border-border focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20"
                  />
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <Label
                    htmlFor="product-origin"
                    className="font-sans text-sm font-medium text-foreground"
                  >
                    Origin / Place of Craft
                  </Label>
                  <Input
                    id="product-origin"
                    value={form.origin}
                    onChange={(e) => handleChange("origin", e.target.value)}
                    placeholder="e.g. McLeod Ganj, Dharamshala"
                    className="rounded-xl border-border focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20"
                  />
                </div>
              </div>
            </div>

            {/* Artisan Details */}
            <div>
              <h4 className="font-serif-display text-base font-semibold text-dharamshala-saffron-dark mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-dharamshala-saffron/20 flex items-center justify-center text-xs font-bold text-dharamshala-saffron">
                  3
                </span>
                Artisan Details
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="product-artisan-name"
                    className="font-sans text-sm font-medium text-foreground"
                  >
                    Artisan Name
                  </Label>
                  <Input
                    id="product-artisan-name"
                    value={form.artisanName}
                    onChange={(e) =>
                      handleChange("artisanName", e.target.value)
                    }
                    placeholder="e.g. Tenzin Dolkar"
                    className="rounded-xl border-border focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="product-artisan-bio"
                    className="font-sans text-sm font-medium text-foreground"
                  >
                    Artisan Bio
                  </Label>
                  <Textarea
                    id="product-artisan-bio"
                    value={form.artisanBio}
                    onChange={(e) => handleChange("artisanBio", e.target.value)}
                    placeholder="Brief background about the artisan and their craft..."
                    rows={2}
                    className="rounded-xl border-border focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Pricing & Rates */}
            <div>
              <h4 className="font-serif-display text-base font-semibold text-dharamshala-saffron-dark mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-dharamshala-saffron/20 flex items-center justify-center text-xs font-bold text-dharamshala-saffron">
                  4
                </span>
                Pricing & Rates
              </h4>
              <div className="space-y-1.5">
                <Label
                  htmlFor="product-rate-details"
                  className="font-sans text-sm font-medium text-foreground"
                >
                  Rate Details (Wholesale / Retail / Bulk)
                </Label>
                <Textarea
                  id="product-rate-details"
                  value={form.rateDetails}
                  onChange={(e) => handleChange("rateDetails", e.target.value)}
                  placeholder="e.g. Bulk discount: 10% off for orders of 5 or more. Retail price: ₹2500 each. Wholesale available for 20+ units."
                  rows={3}
                  className="rounded-xl border-border focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20 resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <Button
                type="submit"
                disabled={
                  mutation.isPending ||
                  !form.name ||
                  !form.category ||
                  !form.description ||
                  !form.price
                }
                className="w-full rounded-full bg-dharamshala-saffron hover:bg-dharamshala-saffron-dark text-dharamshala-snow-white font-sans font-semibold text-base py-3 h-auto shadow-saffron hover:shadow-lg transition-all duration-200 disabled:opacity-60"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 size={18} className="animate-spin mr-2" />
                    Adding Product…
                  </>
                ) : (
                  "Add Product to Marketplace"
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
