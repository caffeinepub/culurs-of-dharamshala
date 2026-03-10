import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { useAddPrayer, usePrayersByRitualType } from "@/hooks/useQueries";
import { HandHeart, Loader2, Send } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";

function PrayerCard({
  name,
  description,
}: { name: string; description: string }) {
  return (
    <div
      className="rounded-xl p-4 transition-shadow duration-300 hover:shadow-md"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.97 0.025 68), oklch(0.95 0.035 65))",
        border: "1px solid oklch(0.68 0.20 50 / 0.20)",
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-devanagari text-sm font-bold mt-0.5"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.42 0.18 22), oklch(0.68 0.20 50))",
            color: "oklch(0.99 0.006 72)",
          }}
        >
          ॐ
        </div>
        <div className="flex-1 min-w-0">
          <p
            className="font-sans font-bold text-sm mb-1 truncate"
            style={{ color: "oklch(0.28 0.06 40)" }}
          >
            {name}
          </p>
          <p
            className="font-cormorant italic text-base leading-relaxed"
            style={{ color: "oklch(0.40 0.05 42)" }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PrayerBoard() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const { data: prayers = [], isLoading } = usePrayersByRitualType("Prayer");
  const addPrayer = useAddPrayer();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    try {
      await addPrayer.mutateAsync({
        name: name.trim(),
        description: message.trim(),
      });
      toast.success(
        "Your prayer has been offered to Mahadev. Har Har Mahadev! 🙏",
      );
      setName("");
      setMessage("");
    } catch {
      toast.error("Could not submit your prayer. Please try again.");
    }
  }

  return (
    <section
      id="prayers"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.22 0.06 38) 0%, oklch(0.16 0.04 35) 60%, oklch(0.20 0.05 40) 100%)",
      }}
    >
      <Toaster richColors position="top-center" />

      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.82 0.14 82 / 0.6))",
              }}
            />
            <span
              className="text-xs font-sans font-bold tracking-[0.25em] uppercase"
              style={{ color: "oklch(0.82 0.14 82)" }}
            >
              Community Prayers
            </span>
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.82 0.14 82 / 0.6), transparent)",
              }}
            />
          </div>
          <h2
            className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "oklch(0.97 0.018 75)" }}
          >
            <span
              className="font-devanagari mr-3"
              style={{ color: "oklch(0.82 0.14 82)" }}
            >
              ॐ
            </span>
            Share Your Prayers
          </h2>
          <p
            className="font-cormorant italic text-lg"
            style={{ color: "oklch(0.70 0.04 60)" }}
          >
            Offer your heartfelt prayers to Lord Shiva — all prayers are sacred
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Prayer form */}
          <div>
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "oklch(0.20 0.06 38)",
                border: "1px solid oklch(0.68 0.20 50 / 0.2)",
                boxShadow: "0 8px 32px oklch(0.13 0.04 35 / 0.3)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <HandHeart size={22} style={{ color: "oklch(0.82 0.14 82)" }} />
                <h3
                  className="font-cormorant text-xl font-bold"
                  style={{ color: "oklch(0.97 0.018 75)" }}
                >
                  Offer a Prayer
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="devotee-name"
                    className="text-sm font-sans font-semibold"
                    style={{ color: "oklch(0.80 0.04 65)" }}
                  >
                    Your Name
                  </Label>
                  <Input
                    id="devotee-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    maxLength={80}
                    style={{
                      background: "oklch(0.16 0.04 35)",
                      border: "1px solid oklch(0.68 0.20 50 / 0.3)",
                      color: "oklch(0.93 0.014 72)",
                    }}
                    className="placeholder:text-muted-foreground/50 focus-visible:ring-1"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="devotee-prayer"
                    className="text-sm font-sans font-semibold"
                    style={{ color: "oklch(0.80 0.04 65)" }}
                  >
                    Your Prayer / Devotional Message
                  </Label>
                  <Textarea
                    id="devotee-prayer"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your prayer, wishes, or a devotional message to Mahadev..."
                    required
                    maxLength={500}
                    rows={4}
                    style={{
                      background: "oklch(0.16 0.04 35)",
                      border: "1px solid oklch(0.68 0.20 50 / 0.3)",
                      color: "oklch(0.93 0.014 72)",
                      resize: "vertical",
                    }}
                    className="placeholder:text-muted-foreground/50 focus-visible:ring-1"
                  />
                  <p
                    className="text-xs font-sans text-right"
                    style={{ color: "oklch(0.55 0.03 55)" }}
                  >
                    {message.length}/500
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={
                    addPrayer.isPending || !name.trim() || !message.trim()
                  }
                  className="w-full font-sans font-bold tracking-wide transition-all hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.42 0.18 22), oklch(0.68 0.20 50))",
                    color: "oklch(0.99 0.006 72)",
                    boxShadow: "0 4px 16px oklch(0.68 0.20 50 / 0.3)",
                    border: "none",
                  }}
                >
                  {addPrayer.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Offering Prayer...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Offer Prayer — ॐ नमः शिवाय
                    </>
                  )}
                </Button>
              </form>

              <p
                className="mt-4 text-xs font-sans text-center italic"
                style={{ color: "oklch(0.55 0.03 55)" }}
              >
                All prayers are offered to Lord Shiva with the temple's
                blessings
              </p>
            </div>
          </div>

          {/* Recent prayers */}
          <div>
            <h3
              className="font-cormorant text-xl font-bold mb-5"
              style={{ color: "oklch(0.97 0.018 75)" }}
            >
              Recent Prayers
              {prayers.length > 0 && (
                <span
                  className="ml-2 text-sm font-sans font-normal"
                  style={{ color: "oklch(0.65 0.04 55)" }}
                >
                  ({prayers.length} prayers)
                </span>
              )}
            </h3>

            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <div className="text-center">
                  <Loader2
                    className="animate-spin mx-auto mb-3"
                    size={28}
                    style={{ color: "oklch(0.82 0.14 82)" }}
                  />
                  <p
                    className="font-sans text-sm"
                    style={{ color: "oklch(0.65 0.04 55)" }}
                  >
                    Loading prayers...
                  </p>
                </div>
              </div>
            ) : prayers.length === 0 ? (
              <div
                className="rounded-2xl p-8 text-center"
                style={{
                  background: "oklch(0.20 0.05 38)",
                  border: "1px dashed oklch(0.68 0.20 50 / 0.2)",
                }}
              >
                <p
                  className="font-devanagari text-3xl mb-3"
                  style={{ color: "oklch(0.82 0.14 82 / 0.5)" }}
                >
                  ॐ
                </p>
                <p
                  className="font-cormorant italic text-lg"
                  style={{ color: "oklch(0.65 0.04 55)" }}
                >
                  Be the first to offer a prayer to Mahadev
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                {[...prayers].reverse().map((p) => (
                  <PrayerCard
                    key={p.id.toString()}
                    name={p.name}
                    description={p.description}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
