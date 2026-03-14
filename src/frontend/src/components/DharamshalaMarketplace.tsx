import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Leaf,
  Minus,
  Mountain,
  Plus,
  Scissors,
  ShoppingCart,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

type Category = "All" | "Handicrafts" | "Kangra Tea" | "Clothing";

interface Product {
  id: number;
  name: string;
  category: "Handicrafts" | "Kangra Tea" | "Clothing";
  price: number;
  description: string;
  dimensions: string;
  materials: string;
  origin: string;
  artisanName: string;
  artisanBio: string;
  rateDetails: string;
  stock: number;
  emoji: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Kangra Miniature Painting",
    category: "Handicrafts",
    price: 2500,
    description: "Traditional Kangra school of painting on handmade paper",
    dimensions: "12x16 inches",
    materials: "Natural pigments, handmade paper",
    origin: "Kangra Valley",
    artisanName: "Ramesh Kumar",
    artisanBio: "5th generation painter trained in traditional Kangra school",
    rateDetails: "Custom sizes available at ₹150/sq inch",
    stock: 8,
    emoji: "🖼️",
  },
  {
    id: 2,
    name: "Chamba Rumal Embroidery",
    category: "Handicrafts",
    price: 3800,
    description: "Exquisite double-sided embroidery on muslin cloth",
    dimensions: "18x18 inches",
    materials: "Untwisted silk thread, muslin cloth",
    origin: "Chamba",
    artisanName: "Sunita Devi",
    artisanBio: "Award-winning artisan with 20 years of Chamba Rumal expertise",
    rateDetails: "Framing available for ₹500 extra",
    stock: 5,
    emoji: "🧵",
  },
  {
    id: 3,
    name: "Himachali Wooden Craft Box",
    category: "Handicrafts",
    price: 1200,
    description: "Hand-carved walnut wood jewelry box with traditional motifs",
    dimensions: "8x5x4 inches",
    materials: "Walnut wood, natural lacquer",
    origin: "Dharamshala",
    artisanName: "Mohan Lal",
    artisanBio: "Master woodcarver specializing in walnut and deodar crafts",
    rateDetails: "Custom engraving ₹200 extra",
    stock: 15,
    emoji: "📦",
  },
  {
    id: 4,
    name: "Tibetan Thangka Painting",
    category: "Handicrafts",
    price: 8500,
    description: "Hand-painted Buddhist Thangka on cotton canvas",
    dimensions: "20x28 inches",
    materials: "Mineral pigments, gold leaf, cotton canvas",
    origin: "McLeod Ganj",
    artisanName: "Tenzin Norbu",
    artisanBio: "Tibetan refugee artisan trained at Norbulingka Institute",
    rateDetails: "Certificate of authenticity included",
    stock: 3,
    emoji: "🙏",
  },
  {
    id: 5,
    name: "Woven Bamboo Basket",
    category: "Handicrafts",
    price: 650,
    description: "Traditional bamboo basket with geometric weave patterns",
    dimensions: "12x8 inches",
    materials: "Local bamboo, natural dyes",
    origin: "Dharamshala hills",
    artisanName: "Kamla Devi",
    artisanBio: "Traditional weaver from the Gaddi community",
    rateDetails: "Sets of 3 available for ₹1700",
    stock: 20,
    emoji: "🧺",
  },
  {
    id: 6,
    name: "Brass Deity Figurine",
    category: "Handicrafts",
    price: 1800,
    description: "Hand-cast brass figurine of Lord Shiva, 6 inches tall",
    dimensions: "6 inches height",
    materials: "Pure brass",
    origin: "Dharamshala",
    artisanName: "Vishnu Sharma",
    artisanBio: "Traditional metal craftsman with 15 years experience",
    rateDetails: "Larger sizes up to 12 inches available",
    stock: 12,
    emoji: "✨",
  },
  {
    id: 7,
    name: "Hand-knotted Woolen Carpet",
    category: "Handicrafts",
    price: 12000,
    description: "Hand-knotted Tibetan-style carpet with floral border",
    dimensions: "4x6 feet",
    materials: "100% Himalayan wool, natural dyes",
    origin: "McLeod Ganj",
    artisanName: "Pema Dolkar",
    artisanBio: "Tibetan carpet weaver, trained in traditional Lhasa patterns",
    rateDetails: "Custom sizes quoted separately",
    stock: 2,
    emoji: "🪄",
  },
  {
    id: 8,
    name: "Ceramic Pottery Set",
    category: "Handicrafts",
    price: 1500,
    description:
      "Hand-thrown terracotta tea set with saffron glaze, 4 cups + teapot",
    dimensions: "Teapot 6 inches, cups 3 inches",
    materials: "Local clay, natural saffron glaze",
    origin: "Dharamshala",
    artisanName: "Geeta Rani",
    artisanBio: "Potter trained in traditional hill pottery techniques",
    rateDetails: "Individual pieces available",
    stock: 7,
    emoji: "🫖",
  },
  {
    id: 9,
    name: "Pahadi Jewelry Set",
    category: "Handicrafts",
    price: 2200,
    description: "Traditional silver-toned Pahadi necklace and earring set",
    dimensions: "Necklace 18 inches",
    materials: "German silver, glass beads, enamel",
    origin: "Kangra Valley",
    artisanName: "Pushpa Kumari",
    artisanBio:
      "Jewelry artisan preserving traditional Himachali ornament styles",
    rateDetails: "Custom pieces on order with 7 day lead time",
    stock: 10,
    emoji: "💎",
  },
  {
    id: 10,
    name: "Tibetan Singing Bowl",
    category: "Handicrafts",
    price: 3200,
    description: "Hand-hammered Tibetan bronze singing bowl with mallet",
    dimensions: "6 inch diameter",
    materials: "7-metal alloy bronze",
    origin: "McLeod Ganj",
    artisanName: "Dorje Wangchuk",
    artisanBio: "Third-generation Tibetan metalsmith",
    rateDetails: "Meditation set (3 bowls) ₹8500",
    stock: 9,
    emoji: "🔔",
  },
  {
    id: 11,
    name: "Kangra First Flush Green Tea",
    category: "Kangra Tea",
    price: 850,
    description: "Premium spring harvest green tea with delicate floral notes",
    dimensions: "100g pack",
    materials: "100% organic Kangra green tea leaves",
    origin: "Palampur tea gardens",
    artisanName: "Kangra Valley Tea Estate",
    artisanBio: "Family-run tea garden since 1852, 5th generation tea growers",
    rateDetails: "Bulk orders (500g+) at 15% discount",
    stock: 50,
    emoji: "🍵",
  },
  {
    id: 12,
    name: "Kangra Second Flush Black Tea",
    category: "Kangra Tea",
    price: 720,
    description: "Rich muscatel black tea from summer flush harvest",
    dimensions: "100g pack",
    materials: "Kangra valley black tea",
    origin: "Palampur",
    artisanName: "Dharamshala Tea Co.",
    artisanBio: "Award-winning tea producer, GI-tagged Kangra tea specialists",
    rateDetails: "Subscription plans available",
    stock: 40,
    emoji: "☕",
  },
  {
    id: 13,
    name: "Himalayan White Tea",
    category: "Kangra Tea",
    price: 1400,
    description: "Rare single-origin white tea, hand-plucked at dawn",
    dimensions: "50g pack",
    materials: "Young tea buds, minimal processing",
    origin: "High altitude Kangra gardens",
    artisanName: "Prem Chand",
    artisanBio: "Organic certified farmer growing rare white tea varieties",
    rateDetails: "Limited seasonal availability",
    stock: 15,
    emoji: "🌸",
  },
  {
    id: 14,
    name: "Kangra Organic Blend",
    category: "Kangra Tea",
    price: 680,
    description: "Certified organic blend of Kangra green and white teas",
    dimensions: "150g pack",
    materials: "Organic certified Kangra tea",
    origin: "Palampur organic estate",
    artisanName: "Green Valley Organics",
    artisanBio: "100% organic certified farm, no pesticides since 2001",
    rateDetails: "Gift sets of 3 varieties ₹1800",
    stock: 35,
    emoji: "🌿",
  },
  {
    id: 15,
    name: "Kangra Masala Chai Blend",
    category: "Kangra Tea",
    price: 550,
    description: "Kangra CTC tea blended with ginger, cardamom, and cloves",
    dimensions: "200g pack",
    materials: "Kangra CTC tea, whole spices",
    origin: "Dharamshala",
    artisanName: "Himachali Spice Blenders",
    artisanBio: "Traditional chai recipe passed down 4 generations",
    rateDetails: "Wholesale pricing for 5kg+ orders",
    stock: 60,
    emoji: "🫚",
  },
  {
    id: 16,
    name: "Saffron Green Tea",
    category: "Kangra Tea",
    price: 1200,
    description: "Premium Kangra green tea infused with Kashmiri saffron",
    dimensions: "75g pack",
    materials: "Kangra green tea, Kashmir saffron",
    origin: "Kangra-Kashmir blend",
    artisanName: "Himalayan Infusions",
    artisanBio: "Specialty tea blenders crafting unique Himalayan infusions",
    rateDetails: "Corporate gift packing available",
    stock: 25,
    emoji: "🌻",
  },
  {
    id: 17,
    name: "Kangra Oolong Tea",
    category: "Kangra Tea",
    price: 950,
    description: "Semi-oxidized oolong with complex fruity and floral notes",
    dimensions: "100g pack",
    materials: "Kangra valley oolong leaves",
    origin: "Palampur high altitude",
    artisanName: "Himalayan Tea Lab",
    artisanBio:
      "Experimental tea producers pioneering oolong cultivation in Kangra",
    rateDetails: "Sampler set (5 varieties) ₹3500",
    stock: 20,
    emoji: "🌺",
  },
  {
    id: 18,
    name: "Medicinal Herb Tea",
    category: "Kangra Tea",
    price: 480,
    description: "Blend of local Himalayan herbs: tulsi, mulethi, ashwagandha",
    dimensions: "100g pack",
    materials: "Wild-harvested Himalayan herbs",
    origin: "Dharamshala forests",
    artisanName: "Vaidya Ram Prakash",
    artisanBio: "Ayurvedic practitioner and herbalist with 30 years experience",
    rateDetails: "Custom wellness blends on consultation",
    stock: 45,
    emoji: "🌱",
  },
  {
    id: 19,
    name: "Kullu Woolen Shawl",
    category: "Clothing",
    price: 2800,
    description: "Handwoven Kullu shawl with traditional geometric patterns",
    dimensions: "40x80 inches",
    materials: "100% Himalayan sheep wool",
    origin: "Kullu Valley",
    artisanName: "Devi Lal Weaves",
    artisanBio: "Traditional Kullu weaver, GI-certified Kullu shawl craftsman",
    rateDetails: "Pashmina blend variants available from ₹5000",
    stock: 18,
    emoji: "🧣",
  },
  {
    id: 20,
    name: "Himachali Topi (Cap)",
    category: "Clothing",
    price: 450,
    description: "Traditional Himachali woolen cap with green piping",
    dimensions: "Standard fit, adjustable",
    materials: "Wool blend, velvet trim",
    origin: "Dharamshala",
    artisanName: "Kuldeep Caps",
    artisanBio: "Specialist in traditional Himachali headwear for 25 years",
    rateDetails: "Customized embroidery ₹150 extra",
    stock: 30,
    emoji: "🧢",
  },
  {
    id: 21,
    name: "Kinnauri Woolen Jacket",
    category: "Clothing",
    price: 4500,
    description:
      "Traditional Kinnauri striped woolen jacket with silver buttons",
    dimensions: "S/M/L/XL available",
    materials: "Kinnaur wool, brass buttons",
    origin: "Kinnaur Valley",
    artisanName: "Shyam Negi Weavers",
    artisanBio: "Kinnauri tribal weaver preserving ancient weaving traditions",
    rateDetails: "Custom tailoring 10-14 day lead time",
    stock: 8,
    emoji: "🧥",
  },
  {
    id: 22,
    name: "Tibetan Chuba Robe",
    category: "Clothing",
    price: 3200,
    description: "Traditional Tibetan chuba robe in maroon and gold brocade",
    dimensions: "One size, adjustable belt",
    materials: "Cotton-silk brocade, Tibetan fabric",
    origin: "McLeod Ganj",
    artisanName: "Tashi Tailors",
    artisanBio: "Tibetan refugee tailor maintaining traditional garment styles",
    rateDetails: "Custom sizing available in 2 weeks",
    stock: 6,
    emoji: "👘",
  },
  {
    id: 23,
    name: "Pahadi Salwar Suit",
    category: "Clothing",
    price: 1800,
    description: "Himachali print salwar suit with traditional border work",
    dimensions: "S/M/L/XL",
    materials: "Cotton fabric, Himachali print",
    origin: "Dharamshala",
    artisanName: "Manju's Boutique",
    artisanBio: "Local designer blending traditional prints with modern cuts",
    rateDetails: "Dupatta and stitching included",
    stock: 20,
    emoji: "👗",
  },
  {
    id: 24,
    name: "Pashmina Stole",
    category: "Clothing",
    price: 6500,
    description: "Pure pashmina stole with intricate sozni embroidery",
    dimensions: "28x80 inches",
    materials: "100% pure pashmina",
    origin: "Kangra (Kashmir pashmina)",
    artisanName: "Kashmir Pashmina House",
    artisanBio: "Authorised dealer of GI-certified pure pashmina products",
    rateDetails: "Authentication certificate provided",
    stock: 10,
    emoji: "✨",
  },
  {
    id: 25,
    name: "Woolen Knee Warmers",
    category: "Clothing",
    price: 380,
    description: "Hand-knitted woolen knee warmers, ideal for mountain treks",
    dimensions: "One size fits most",
    materials: "Local Himalayan wool",
    origin: "Dharamshala women's co-op",
    artisanName: "Himalayan Knitters Co-op",
    artisanBio:
      "Women's self-help group of 40 knitters from Dharamshala villages",
    rateDetails: "Set of 2 pairs ₹700",
    stock: 50,
    emoji: "🧤",
  },
];

const categoryStyles: Record<
  string,
  { badge: string; bg: string; icon: React.ReactNode }
> = {
  Handicrafts: {
    badge: "bg-saffron-400 text-white",
    bg: "from-saffron-50 to-saffron-100",
    icon: <Mountain className="w-8 h-8 text-saffron-500" />,
  },
  "Kangra Tea": {
    badge: "bg-green-700 text-white",
    bg: "from-green-50 to-green-100",
    icon: <Leaf className="w-8 h-8 text-green-700" />,
  },
  Clothing: {
    badge: "bg-maroon-500 text-white",
    bg: "from-maroon-50 to-maroon-100",
    icon: <Scissors className="w-8 h-8 text-maroon-500" />,
  },
};

function MountainHero() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #B8D4F0 0%, #D6EAF8 20%, #F4D5A0 50%, #F4A261 70%, #E8843A 100%)",
        minHeight: "420px",
      }}
    >
      {/* Sky stars / snowflakes */}
      <div className="absolute inset-0 overflow-hidden">
        {(
          [
            11, 48, 85, 22, 59, 96, 33, 70, 7, 44, 81, 18, 55, 92, 29, 66, 3,
            40,
          ] as number[]
        ).map((left, i) => (
          <div
            key={`snow-dot-pos-${left}`}
            className="absolute w-1 h-1 rounded-full bg-white opacity-60"
            style={{
              left: `${left % 100}%`,
              top: `${(i * 23 + 5) % 40}%`,
            }}
          />
        ))}
      </div>

      {/* Mountain silhouette SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <title>Dhauladhar Mountain Silhouette</title>
        {/* Back mountains - dark blue/purple */}
        <path
          d="M0,220 L0,140 L120,60 L200,90 L320,20 L420,70 L540,10 L640,55 L760,0 L860,50 L980,30 L1100,80 L1200,40 L1320,90 L1440,60 L1440,220 Z"
          fill="#4A6FA5"
          opacity="0.7"
        />
        {/* Mid mountains - lighter */}
        <path
          d="M0,220 L0,160 L80,100 L180,130 L280,70 L380,110 L500,50 L600,90 L700,40 L800,80 L920,60 L1040,100 L1160,55 L1280,110 L1380,80 L1440,100 L1440,220 Z"
          fill="#6B9FC9"
          opacity="0.8"
        />
        {/* Snow caps */}
        <path
          d="M500,50 L520,65 L540,50 L560,68 L580,55 L600,90 Z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M700,40 L722,58 L745,42 L760,55 L780,40 L800,80 Z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M280,70 L300,88 L320,72 L340,90 L360,75 L380,110 Z"
          fill="white"
          opacity="0.85"
        />
        {/* Foothills - warm earth */}
        <path
          d="M0,220 L0,180 L160,150 L320,170 L480,145 L640,165 L800,148 L960,168 L1120,152 L1280,172 L1440,158 L1440,220 Z"
          fill="#8B6914"
          opacity="0.5"
        />
        {/* Ground */}
        <path
          d="M0,220 L0,200 L1440,200 L1440,220 Z"
          fill="#6B4226"
          opacity="0.6"
        />
      </svg>

      {/* Hero text */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-16 pb-28 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-body text-earth-800 mb-4">
          <span>🏔️</span>
          <span>Himachal Pradesh, India</span>
        </div>
        <h1
          className="font-display text-4xl md:text-6xl font-bold text-earth-900 leading-tight mb-3"
          style={{ textShadow: "0 2px 8px rgba(255,255,255,0.5)" }}
        >
          Dharamshala
          <br />
          <span className="text-maroon-500">Local Marketplace</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-earth-700 max-w-lg">
          Authentic Himalayan Products — directly from artisans, weavers & tea
          growers
        </p>
      </div>
    </div>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const style = categoryStyles[category];
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold font-body ${style?.badge ?? "bg-gray-200 text-gray-700"}`}
    >
      {category}
    </span>
  );
}

function ProductCard({
  product,
  index,
  onAddToCart,
  onViewDetails,
}: {
  product: Product;
  index: number;
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
}) {
  const style = categoryStyles[product.category];
  return (
    <div
      data-ocid={`product.item.${index}`}
      className="group bg-card rounded-xl border border-border shadow-warm-sm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden"
    >
      {/* Image area */}
      <div
        className={`relative flex items-center justify-center h-40 bg-gradient-to-br ${style?.bg ?? "from-gray-50 to-gray-100"}`}
      >
        <span className="text-6xl select-none">{product.emoji}</span>
        <div className="absolute top-3 right-3">
          <CategoryBadge category={product.category} />
        </div>
        {product.stock <= 3 && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-maroon-500 text-white">
              Only {product.stock} left!
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="font-display font-semibold text-foreground text-base leading-snug group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="font-display text-xl font-bold text-earth-700">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <span className="font-body text-xs text-muted-foreground">
            {product.origin}
          </span>
        </div>
        <div className="flex gap-2 mt-1">
          <Button
            data-ocid="product.primary_button"
            size="sm"
            className="flex-1 bg-saffron-400 hover:bg-saffron-500 text-white font-body text-xs"
            onClick={() => onAddToCart(product)}
          >
            🛒 Add to Cart
          </Button>
          <Button
            data-ocid="product.secondary_button"
            size="sm"
            variant="outline"
            className="flex-1 border-earth-300 text-earth-700 hover:bg-earth-50 font-body text-xs"
            onClick={() => onViewDetails(product)}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}

function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
}: {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
}) {
  if (!product) return null;
  const style = categoryStyles[product.category];

  return (
    <Dialog open={!!product} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        data-ocid="product_detail.dialog"
        className="max-w-lg max-h-[90vh] overflow-y-auto bg-card"
      >
        <DialogHeader>
          <div
            className={`flex items-center justify-center h-28 rounded-lg bg-gradient-to-br ${style?.bg ?? "from-gray-50 to-gray-100"} mb-2`}
          >
            <span className="text-6xl">{product.emoji}</span>
          </div>
          <DialogTitle className="font-display text-xl text-foreground">
            {product.name}
          </DialogTitle>
          <div className="flex items-center gap-2 mt-1">
            <CategoryBadge category={product.category} />
            <span className="font-body text-xs text-muted-foreground">
              by {product.artisanName}
            </span>
          </div>
        </DialogHeader>

        <div className="space-y-4 font-body text-sm">
          <p className="text-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-1">Price</div>
              <div className="font-display font-bold text-earth-700 text-lg">
                ₹{product.price.toLocaleString("en-IN")}
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-1">In Stock</div>
              <div className="font-semibold text-foreground">
                {product.stock} units
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-1">
                Dimensions
              </div>
              <div className="font-medium text-foreground">
                {product.dimensions}
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-1">Origin</div>
              <div className="font-medium text-foreground">
                {product.origin}
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-1">Materials</div>
            <div className="font-medium text-foreground">
              {product.materials}
            </div>
          </div>

          <div className="bg-saffron-50 border border-saffron-200 rounded-lg p-3">
            <div className="text-xs text-saffron-700 font-semibold mb-1">
              💰 Pricing Details
            </div>
            <div className="text-foreground">{product.rateDetails}</div>
          </div>

          <Separator />

          <div>
            <div className="font-semibold text-foreground mb-1">
              About the Artisan
            </div>
            <div className="font-semibold text-saffron-600">
              {product.artisanName}
            </div>
            <div className="text-muted-foreground mt-1 leading-relaxed">
              {product.artisanBio}
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Button
            data-ocid="product_detail.primary_button"
            className="flex-1 bg-saffron-400 hover:bg-saffron-500 text-white font-body"
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
          >
            🛒 Add to Cart — ₹{product.price.toLocaleString("en-IN")}
          </Button>
          <DialogClose asChild>
            <Button
              data-ocid="product_detail.close_button"
              variant="outline"
              className="border-border"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CartDrawer({
  items,
  onClose,
  onUpdateQty,
}: {
  items: CartItem[];
  onClose: () => void;
  onUpdateQty: (id: number, delta: number) => void;
}) {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  function handleCheckout() {
    toast.success(
      "Your order inquiry has been sent! An artisan will contact you shortly.",
    );
    onClose();
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Escape") onClose();
        }}
        role="button"
        tabIndex={-1}
        aria-label="Close cart"
      />
      {/* Drawer */}
      <div
        data-ocid="cart.sheet"
        className="cart-slide-in fixed top-0 right-0 h-full w-full max-w-sm bg-card border-l border-border shadow-warm-xl z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-saffron-500" />
            <span className="font-display font-semibold text-foreground">
              Shopping Cart
            </span>
            <Badge className="bg-saffron-400 text-white text-xs">
              {items.reduce((s, i) => s + i.quantity, 0)}
            </Badge>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Items */}
        <ScrollArea className="flex-1 p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 text-center">
              <span className="text-4xl mb-3">🛒</span>
              <p className="font-body text-muted-foreground">
                Your cart is empty
              </p>
              <p className="font-body text-xs text-muted-foreground mt-1">
                Add some beautiful Himalayan products!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item, idx) => (
                <div
                  key={item.product.id}
                  data-ocid={`cart.item.${idx + 1}`}
                  className="flex items-center gap-3 bg-muted/40 rounded-lg p-3"
                >
                  <span className="text-2xl">{item.product.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-body font-semibold text-sm text-foreground truncate">
                      {item.product.name}
                    </div>
                    <div className="font-body text-xs text-muted-foreground">
                      ₹{item.product.price.toLocaleString("en-IN")} each
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 w-7 p-0"
                      onClick={() => onUpdateQty(item.product.id, -1)}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="font-body text-sm w-6 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 w-7 p-0"
                      onClick={() => onUpdateQty(item.product.id, 1)}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="font-display font-bold text-sm text-earth-700">
                    ₹
                    {(item.product.price * item.quantity).toLocaleString(
                      "en-IN",
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-body font-semibold text-foreground">
                Total
              </span>
              <span className="font-display font-bold text-xl text-earth-700">
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>
            <Button
              data-ocid="cart.submit_button"
              className="w-full bg-maroon-500 hover:bg-maroon-600 text-white font-body"
              onClick={handleCheckout}
            >
              Proceed to Checkout →
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default function DharamshalaMarketplace() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  const categories: Category[] = [
    "All",
    "Handicrafts",
    "Kangra Tea",
    "Clothing",
  ];

  const filteredProducts = useMemo(
    () =>
      activeCategory === "All"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  const cartCount = cartItems.reduce((s, i) => s + i.quantity, 0);

  function addToCart(product: Product) {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    toast.success(`${product.name} added to cart!`);
  }

  function updateQty(id: number, delta: number) {
    setCartItems((prev) => {
      return prev
        .map((i) =>
          i.product.id === id ? { ...i, quantity: i.quantity + delta } : i,
        )
        .filter((i) => i.quantity > 0);
    });
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-30 bg-earth-800 border-b border-earth-700 shadow-warm-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🏔️</span>
            <div>
              <div className="font-display font-bold text-saffron-300 text-base leading-tight">
                Dharamshala Marketplace
              </div>
              <div className="font-body text-xs text-saffron-400/70">
                Authentic Himalayan Products
              </div>
            </div>
          </div>
          <button
            type="button"
            data-ocid="nav.cart_button"
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2 bg-saffron-400 hover:bg-saffron-500 text-white px-3 py-2 rounded-lg font-body text-sm transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-maroon-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero */}
      <MountainHero />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              data-ocid="category.tab"
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-sm px-5 py-2 rounded-full border transition-all duration-150 ${
                activeCategory === cat
                  ? "bg-saffron-400 border-saffron-500 text-white shadow-warm-sm"
                  : "bg-card border-border text-foreground hover:bg-saffron-50 hover:border-saffron-300"
              }`}
            >
              {cat === "All" && "🏪 "}
              {cat === "Handicrafts" && "🖼️ "}
              {cat === "Kangra Tea" && "🍵 "}
              {cat === "Clothing" && "🧣 "}
              {cat}
            </button>
          ))}
        </div>

        {/* Section label */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-2xl font-bold text-foreground">
            {activeCategory === "All" ? "All Products" : activeCategory}
          </h2>
          <span className="font-body text-sm text-muted-foreground">
            {filteredProducts.length} items
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx + 1}
              onAddToCart={addToCart}
              onViewDetails={setDetailProduct}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-earth-800 text-saffron-300/70 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="font-display text-saffron-300 text-lg mb-1">
            Dharamshala Local Marketplace
          </div>
          <p className="font-body text-sm mb-3">
            Supporting local artisans, weavers & tea growers of Himachal Pradesh
          </p>
          <p className="font-body text-xs">
            © {new Date().getFullYear()}.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-saffron-200 transition-colors"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
        onAddToCart={addToCart}
      />

      {/* Cart Drawer */}
      {cartOpen && (
        <CartDrawer
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onUpdateQty={updateQty}
        />
      )}
    </div>
  );
}
