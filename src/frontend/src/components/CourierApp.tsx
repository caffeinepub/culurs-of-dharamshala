import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  FileText,
  Globe,
  Home,
  MapPin,
  Package,
  Phone,
  Search,
  Truck,
  User,
  Weight,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import ShippingRates from "./ShippingRates";
// Legacy type stub
interface CourierBooking {
  id: bigint;
  trackingId: string;
  senderName: string;
  senderPhone: string;
  senderAddress: string;
  receiverName: string;
  receiverPhone: string;
  receiverAddress: string;
  shipmentType: string;
  weight: number;
  description: string;
  status: string;
  estimatedDelivery: string;
  createdAt: bigint;
}
function useCreateBooking() {
  return {
    mutateAsync: async (_p: unknown) => BigInt(0),
    isPending: false,
    isSuccess: false,
    isError: false,
    reset: () => {},
  };
}
function useBookingById(_id: bigint | null) {
  return {
    data: null as CourierBooking | null,
    isLoading: false,
    isError: false,
  };
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function getEstimatedDelivery(shipmentType: string): string {
  const today = new Date();
  const days = shipmentType === "International" ? 14 : 5;
  today.setDate(today.getDate() + days);
  return today.toISOString().split("T")[0];
}

function getStatusConfig(status: string) {
  switch (status) {
    case "Pending":
      return {
        color: "bg-yellow-100 text-yellow-800 border-yellow-200",
        icon: Clock,
        label: "Pending",
      };
    case "Picked Up":
      return {
        color: "bg-blue-100 text-blue-800 border-blue-200",
        icon: Package,
        label: "Picked Up",
      };
    case "In Transit":
      return {
        color: "bg-purple-100 text-purple-800 border-purple-200",
        icon: Truck,
        label: "In Transit",
      };
    case "Delivered":
      return {
        color: "bg-green-100 text-green-800 border-green-200",
        icon: CheckCircle,
        label: "Delivered",
      };
    default:
      return {
        color: "bg-gray-100 text-gray-800 border-gray-200",
        icon: AlertCircle,
        label: status,
      };
  }
}

// ─── Booking Form ────────────────────────────────────────────────────────────

interface BookingFormData {
  senderName: string;
  senderPhone: string;
  senderAddress: string;
  receiverName: string;
  receiverPhone: string;
  receiverAddress: string;
  shipmentType: "Domestic" | "International";
  weight: string;
  description: string;
}

const initialFormData: BookingFormData = {
  senderName: "",
  senderPhone: "",
  senderAddress: "",
  receiverName: "",
  receiverPhone: "",
  receiverAddress: "",
  shipmentType: "Domestic",
  weight: "",
  description: "",
};

interface ConfirmationData {
  bookingId: bigint;
  estimatedDelivery: string;
  shipmentType: string;
}

function BookingForm() {
  const [form, setForm] = useState<BookingFormData>(initialFormData);
  const [confirmation, setConfirmation] = useState<ConfirmationData | null>(
    null,
  );
  const createBooking = useCreateBooking();

  const handleChange = (field: keyof BookingFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const estimatedDelivery = getEstimatedDelivery(form.shipmentType);
    try {
      const bookingId = await createBooking.mutateAsync({
        senderName: form.senderName,
        senderPhone: form.senderPhone,
        senderAddress: form.senderAddress,
        receiverName: form.receiverName,
        receiverPhone: form.receiverPhone,
        receiverAddress: form.receiverAddress,
        shipmentType: form.shipmentType,
        weight: Number.parseFloat(form.weight) || 0,
        description: form.description,
        estimatedDelivery,
      });
      setConfirmation({
        bookingId,
        estimatedDelivery,
        shipmentType: form.shipmentType,
      });
      setForm(initialFormData);
    } catch {
      // error handled via mutation state
    }
  };

  if (confirmation) {
    return (
      <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle className="w-9 h-9 text-green-600" />
        </div>
        <h3 className="font-display text-2xl font-bold text-dharamshala-deep-night mb-2">
          Booking Confirmed!
        </h3>
        <p className="font-sans text-dharamshala-earth-brown mb-6 max-w-sm">
          Your shipment has been successfully booked. Keep your booking ID safe
          for tracking.
        </p>
        <div className="bg-dharamshala-parchment border border-dharamshala-saffron/30 rounded-2xl p-6 w-full max-w-sm mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="font-sans text-sm text-dharamshala-earth-brown">
              Booking ID
            </span>
            <span className="font-display text-xl font-bold text-dharamshala-saffron-dark">
              #{confirmation.bookingId.toString()}
            </span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="font-sans text-sm text-dharamshala-earth-brown">
              Shipment Type
            </span>
            <span className="font-sans text-sm font-semibold text-dharamshala-deep-night">
              {confirmation.shipmentType}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-sans text-sm text-dharamshala-earth-brown">
              Est. Delivery
            </span>
            <span className="font-sans text-sm font-semibold text-dharamshala-deep-night">
              {confirmation.estimatedDelivery}
            </span>
          </div>
        </div>
        <Button
          onClick={() => setConfirmation(null)}
          className="bg-dharamshala-saffron hover:bg-dharamshala-saffron-dark text-white font-sans font-semibold rounded-xl px-8"
        >
          Book Another Shipment
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Shipment Type Toggle */}
      <div>
        <Label className="font-sans text-sm font-semibold text-dharamshala-earth-brown uppercase tracking-wider mb-3 block">
          Shipment Type
        </Label>
        <div className="flex rounded-xl overflow-hidden border border-dharamshala-saffron/30 w-fit">
          <button
            type="button"
            onClick={() => handleChange("shipmentType", "Domestic")}
            className={`flex items-center gap-2 px-6 py-2.5 font-sans font-semibold text-sm transition-all ${
              form.shipmentType === "Domestic"
                ? "bg-dharamshala-saffron text-white shadow-saffron"
                : "bg-white text-dharamshala-earth-brown hover:bg-dharamshala-parchment"
            }`}
          >
            <Home className="w-4 h-4" />
            Domestic
          </button>
          <button
            type="button"
            onClick={() => handleChange("shipmentType", "International")}
            className={`flex items-center gap-2 px-6 py-2.5 font-sans font-semibold text-sm transition-all ${
              form.shipmentType === "International"
                ? "bg-dharamshala-saffron text-white shadow-saffron"
                : "bg-white text-dharamshala-earth-brown hover:bg-dharamshala-parchment"
            }`}
          >
            <Globe className="w-4 h-4" />
            International
          </button>
        </div>
      </div>

      {/* Sender & Receiver Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sender Details */}
        <div className="space-y-4">
          <h4 className="font-serif text-base font-bold text-dharamshala-deep-night flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-dharamshala-saffron/20 flex items-center justify-center">
              <User className="w-3.5 h-3.5 text-dharamshala-saffron-dark" />
            </div>
            Sender Details
          </h4>
          <div className="space-y-3">
            <div>
              <Label
                htmlFor="senderName"
                className="font-sans text-xs font-semibold text-dharamshala-earth-brown uppercase tracking-wider"
              >
                Full Name *
              </Label>
              <Input
                id="senderName"
                value={form.senderName}
                onChange={(e) => handleChange("senderName", e.target.value)}
                placeholder="Enter sender's name"
                required
                className="mt-1 font-sans border-dharamshala-mountain-gray/40 focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20"
              />
            </div>
            <div>
              <Label
                htmlFor="senderPhone"
                className="font-sans text-xs font-semibold text-dharamshala-earth-brown uppercase tracking-wider"
              >
                Phone Number *
              </Label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dharamshala-mountain-gray" />
                <Input
                  id="senderPhone"
                  value={form.senderPhone}
                  onChange={(e) => handleChange("senderPhone", e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="pl-9 font-sans border-dharamshala-mountain-gray/40 focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20"
                />
              </div>
            </div>
            <div>
              <Label
                htmlFor="senderAddress"
                className="font-sans text-xs font-semibold text-dharamshala-earth-brown uppercase tracking-wider"
              >
                Address *
              </Label>
              <div className="relative mt-1">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-dharamshala-mountain-gray" />
                <Textarea
                  id="senderAddress"
                  value={form.senderAddress}
                  onChange={(e) =>
                    handleChange("senderAddress", e.target.value)
                  }
                  placeholder="Full pickup address"
                  required
                  rows={3}
                  className="pl-9 font-sans border-dharamshala-mountain-gray/40 focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20 resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Receiver Details */}
        <div className="space-y-4">
          <h4 className="font-serif text-base font-bold text-dharamshala-deep-night flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-dharamshala-crimson/10 flex items-center justify-center">
              <User className="w-3.5 h-3.5 text-dharamshala-crimson" />
            </div>
            Receiver Details
          </h4>
          <div className="space-y-3">
            <div>
              <Label
                htmlFor="receiverName"
                className="font-sans text-xs font-semibold text-dharamshala-earth-brown uppercase tracking-wider"
              >
                Full Name *
              </Label>
              <Input
                id="receiverName"
                value={form.receiverName}
                onChange={(e) => handleChange("receiverName", e.target.value)}
                placeholder="Enter receiver's name"
                required
                className="mt-1 font-sans border-dharamshala-mountain-gray/40 focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20"
              />
            </div>
            <div>
              <Label
                htmlFor="receiverPhone"
                className="font-sans text-xs font-semibold text-dharamshala-earth-brown uppercase tracking-wider"
              >
                Phone Number *
              </Label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dharamshala-mountain-gray" />
                <Input
                  id="receiverPhone"
                  value={form.receiverPhone}
                  onChange={(e) =>
                    handleChange("receiverPhone", e.target.value)
                  }
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="pl-9 font-sans border-dharamshala-mountain-gray/40 focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20"
                />
              </div>
            </div>
            <div>
              <Label
                htmlFor="receiverAddress"
                className="font-sans text-xs font-semibold text-dharamshala-earth-brown uppercase tracking-wider"
              >
                Address *
              </Label>
              <div className="relative mt-1">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-dharamshala-mountain-gray" />
                <Textarea
                  id="receiverAddress"
                  value={form.receiverAddress}
                  onChange={(e) =>
                    handleChange("receiverAddress", e.target.value)
                  }
                  placeholder="Full delivery address"
                  required
                  rows={3}
                  className="pl-9 font-sans border-dharamshala-mountain-gray/40 focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20 resize-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Package Details */}
      <div className="space-y-4">
        <h4 className="font-serif text-base font-bold text-dharamshala-deep-night flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-dharamshala-himalayan-blue/10 flex items-center justify-center">
            <Package className="w-3.5 h-3.5 text-dharamshala-himalayan-blue" />
          </div>
          Package Details
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="weight"
              className="font-sans text-xs font-semibold text-dharamshala-earth-brown uppercase tracking-wider"
            >
              Weight (kg) *
            </Label>
            <div className="relative mt-1">
              <Weight className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dharamshala-mountain-gray" />
              <Input
                id="weight"
                type="number"
                min="0.1"
                step="0.1"
                value={form.weight}
                onChange={(e) => handleChange("weight", e.target.value)}
                placeholder="0.0"
                required
                className="pl-9 font-sans border-dharamshala-mountain-gray/40 focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20"
              />
            </div>
          </div>
          <div>
            <Label
              htmlFor="description"
              className="font-sans text-xs font-semibold text-dharamshala-earth-brown uppercase tracking-wider"
            >
              Item Description *
            </Label>
            <div className="relative mt-1">
              <FileText className="absolute left-3 top-3 w-4 h-4 text-dharamshala-mountain-gray" />
              <Textarea
                id="description"
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Describe the contents of your package"
                required
                rows={3}
                className="pl-9 font-sans border-dharamshala-mountain-gray/40 focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20 resize-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Error */}
      {createBooking.isError && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 font-sans text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          Failed to create booking. Please try again.
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        disabled={createBooking.isPending}
        className="w-full bg-dharamshala-saffron hover:bg-dharamshala-saffron-dark text-white font-sans font-bold text-base py-6 rounded-xl shadow-saffron transition-all hover:shadow-lg disabled:opacity-60"
      >
        {createBooking.isPending ? (
          <span className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              className="animate-spin w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            Processing Booking…
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Book Shipment
            <ArrowRight className="w-5 h-5" />
          </span>
        )}
      </Button>
    </form>
  );
}

// ─── Booking Tracker ─────────────────────────────────────────────────────────

function BookingTracker() {
  const [inputId, setInputId] = useState("");
  const [searchId, setSearchId] = useState<bigint | null>(null);

  const { data: booking, isLoading, isError } = useBookingById(searchId);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = Number.parseInt(inputId.trim(), 10);
    if (!Number.isNaN(parsed) && parsed > 0) {
      setSearchId(BigInt(parsed));
    }
  };

  const statusConfig = booking ? getStatusConfig(booking.status) : null;
  const StatusIcon = statusConfig?.icon;

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dharamshala-mountain-gray" />
          <Input
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            placeholder="Enter your Booking ID (e.g. 1, 2, 3…)"
            className="pl-9 font-sans border-dharamshala-mountain-gray/40 focus:border-dharamshala-saffron focus:ring-dharamshala-saffron/20"
          />
        </div>
        <Button
          type="submit"
          className="bg-dharamshala-saffron hover:bg-dharamshala-saffron-dark text-white font-sans font-semibold rounded-xl px-6"
        >
          Track
        </Button>
      </form>

      {/* Loading */}
      {isLoading && (
        <div className="space-y-3">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      )}

      {/* Error */}
      {isError && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-sans text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          Failed to fetch booking. Please try again.
        </div>
      )}

      {/* Not found */}
      {!isLoading && !isError && searchId !== null && !booking && (
        <div className="flex flex-col items-center py-8 text-center">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
            <Search className="w-6 h-6 text-gray-400" />
          </div>
          <p className="font-sans text-dharamshala-earth-brown font-semibold">
            No booking found
          </p>
          <p className="font-sans text-sm text-dharamshala-mountain-gray mt-1">
            Booking ID #{searchId.toString()} does not exist.
          </p>
        </div>
      )}

      {/* Booking Details */}
      {booking && statusConfig && StatusIcon && (
        <div className="border border-dharamshala-saffron/20 rounded-2xl overflow-hidden">
          {/* Status Header */}
          <div className="bg-dharamshala-parchment px-6 py-4 flex items-center justify-between border-b border-dharamshala-saffron/10">
            <div>
              <p className="font-sans text-xs text-dharamshala-earth-brown uppercase tracking-wider mb-1">
                Booking ID
              </p>
              <p className="font-display text-xl font-bold text-dharamshala-deep-night">
                #{booking.id.toString()}
              </p>
            </div>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-bold border ${statusConfig.color}`}
            >
              <StatusIcon className="w-3.5 h-3.5" />
              {statusConfig.label}
            </span>
          </div>

          {/* Details Grid */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-sans text-xs text-dharamshala-mountain-gray uppercase tracking-wider mb-1">
                Sender
              </p>
              <p className="font-sans text-sm font-semibold text-dharamshala-deep-night">
                {booking.senderName}
              </p>
              <p className="font-sans text-xs text-dharamshala-earth-brown">
                {booking.senderPhone}
              </p>
              <p className="font-sans text-xs text-dharamshala-mountain-gray mt-1">
                {booking.senderAddress}
              </p>
            </div>
            <div>
              <p className="font-sans text-xs text-dharamshala-mountain-gray uppercase tracking-wider mb-1">
                Receiver
              </p>
              <p className="font-sans text-sm font-semibold text-dharamshala-deep-night">
                {booking.receiverName}
              </p>
              <p className="font-sans text-xs text-dharamshala-earth-brown">
                {booking.receiverPhone}
              </p>
              <p className="font-sans text-xs text-dharamshala-mountain-gray mt-1">
                {booking.receiverAddress}
              </p>
            </div>
            <div>
              <p className="font-sans text-xs text-dharamshala-mountain-gray uppercase tracking-wider mb-1">
                Shipment
              </p>
              <p className="font-sans text-sm font-semibold text-dharamshala-deep-night">
                {booking.shipmentType}
              </p>
              <p className="font-sans text-xs text-dharamshala-earth-brown">
                {booking.weight} kg
              </p>
            </div>
            <div>
              <p className="font-sans text-xs text-dharamshala-mountain-gray uppercase tracking-wider mb-1">
                Est. Delivery
              </p>
              <p className="font-sans text-sm font-semibold text-dharamshala-deep-night">
                {booking.estimatedDelivery}
              </p>
            </div>
            {booking.description && (
              <div className="sm:col-span-2">
                <p className="font-sans text-xs text-dharamshala-mountain-gray uppercase tracking-wider mb-1">
                  Description
                </p>
                <p className="font-sans text-sm text-dharamshala-earth-brown">
                  {booking.description}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main CourierApp ──────────────────────────────────────────────────────────

type ActiveTab = "book" | "track";

export default function CourierApp() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("book");

  return (
    <div id="courier" className="bg-dharamshala-warm-cream">
      {/* Hero Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src="/assets/generated/courier-hero-banner.dim_1440x500.png"
          alt="Dharamshala International Courier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dharamshala-deep-night/60 flex flex-col items-center justify-center text-center px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dharamshala-snow-white mb-2 drop-shadow-lg">
            Dharamshala International Courier
          </h2>
          <p className="font-sans text-dharamshala-saffron-light text-sm md:text-base max-w-xl">
            Reliable domestic & international shipping from the heart of the
            Himalayas
          </p>
        </div>
      </div>

      {/* Booking & Tracking Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex gap-1 bg-dharamshala-parchment rounded-2xl p-1 mb-8 border border-dharamshala-saffron/15 w-fit mx-auto">
          <button
            type="button"
            onClick={() => setActiveTab("book")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-sans font-semibold text-sm transition-all ${
              activeTab === "book"
                ? "bg-dharamshala-saffron text-white shadow-saffron"
                : "text-dharamshala-earth-brown hover:text-dharamshala-deep-night"
            }`}
          >
            <Package className="w-4 h-4" />
            Book Shipment
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("track")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-sans font-semibold text-sm transition-all ${
              activeTab === "track"
                ? "bg-dharamshala-saffron text-white shadow-saffron"
                : "text-dharamshala-earth-brown hover:text-dharamshala-deep-night"
            }`}
          >
            <Search className="w-4 h-4" />
            Track Shipment
          </button>
        </div>

        {/* Tab Content */}
        <Card className="border-dharamshala-saffron/15 shadow-card-hover rounded-3xl overflow-hidden">
          <CardHeader className="bg-dharamshala-parchment border-b border-dharamshala-saffron/10 px-8 py-5">
            <CardTitle className="font-serif text-xl font-bold text-dharamshala-deep-night">
              {activeTab === "book"
                ? "New Shipment Booking"
                : "Track Your Shipment"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {activeTab === "book" ? <BookingForm /> : <BookingTracker />}
          </CardContent>
        </Card>
      </div>

      {/* Shipping Rates Section */}
      <ShippingRates />
    </div>
  );
}
