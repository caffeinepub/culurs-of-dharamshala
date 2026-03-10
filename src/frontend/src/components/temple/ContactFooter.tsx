import { Heart, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

export default function ContactFooter() {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 md:py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.97 0.025 70) 0%, oklch(0.99 0.010 72) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="h-px w-12"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.68 0.20 50))",
                }}
              />
              <span
                className="text-xs font-sans font-bold tracking-[0.25em] uppercase"
                style={{ color: "oklch(0.68 0.20 50)" }}
              >
                Get in Touch
              </span>
              <div
                className="h-px w-12"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.68 0.20 50), transparent)",
                }}
              />
            </div>
            <h2
              className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "oklch(0.22 0.05 40)" }}
            >
              Contact Us
            </h2>
            <p
              className="font-cormorant italic text-lg"
              style={{ color: "oklch(0.50 0.06 42)" }}
            >
              We welcome all devotees and pilgrims
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Address */}
            <div
              className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "oklch(0.99 0.010 72)",
                border: "1px solid oklch(0.68 0.20 50 / 0.18)",
                boxShadow: "0 4px 20px oklch(0.13 0.04 35 / 0.06)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.42 0.18 22), oklch(0.68 0.20 50))",
                }}
              >
                <MapPin size={22} style={{ color: "oklch(0.99 0.006 72)" }} />
              </div>
              <h3
                className="font-cormorant text-lg font-bold mb-2"
                style={{ color: "oklch(0.22 0.05 40)" }}
              >
                Address
              </h3>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "oklch(0.42 0.04 45)" }}
              >
                Aghanzar Mahadev Temple
                <br />
                Near Dharamshala
                <br />
                Kangra District
                <br />
                Himachal Pradesh – 176215
              </p>
            </div>

            {/* Phone */}
            <div
              className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "oklch(0.99 0.010 72)",
                border: "1px solid oklch(0.68 0.20 50 / 0.18)",
                boxShadow: "0 4px 20px oklch(0.13 0.04 35 / 0.06)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.42 0.18 22), oklch(0.68 0.20 50))",
                }}
              >
                <Phone size={22} style={{ color: "oklch(0.99 0.006 72)" }} />
              </div>
              <h3
                className="font-cormorant text-lg font-bold mb-2"
                style={{ color: "oklch(0.22 0.05 40)" }}
              >
                Phone
              </h3>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "oklch(0.42 0.04 45)" }}
              >
                Temple Office
                <br />
                +91-1892-XXXXXX
                <br />
                <span
                  className="text-xs italic"
                  style={{ color: "oklch(0.58 0.04 50)" }}
                >
                  (Available 8 AM – 8 PM)
                </span>
              </p>
            </div>

            {/* Email */}
            <div
              className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "oklch(0.99 0.010 72)",
                border: "1px solid oklch(0.68 0.20 50 / 0.18)",
                boxShadow: "0 4px 20px oklch(0.13 0.04 35 / 0.06)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.42 0.18 22), oklch(0.68 0.20 50))",
                }}
              >
                <Mail size={22} style={{ color: "oklch(0.99 0.006 72)" }} />
              </div>
              <h3
                className="font-cormorant text-lg font-bold mb-2"
                style={{ color: "oklch(0.22 0.05 40)" }}
              >
                Email
              </h3>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "oklch(0.42 0.04 45)" }}
              >
                info@aghanzarmahadev.org
                <br />
                <span
                  className="text-xs italic"
                  style={{ color: "oklch(0.58 0.04 50)" }}
                >
                  (For puja bookings & enquiries)
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.22 0.06 38) 0%, oklch(0.14 0.04 35) 100%)",
        }}
      >
        {/* Top accent line */}
        <div
          className="h-1"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.42 0.18 22), oklch(0.68 0.20 50), oklch(0.82 0.14 82), oklch(0.68 0.20 50), oklch(0.42 0.18 22))",
          }}
        />

        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Logo area */}
          <div className="text-center mb-10">
            <div
              className="text-5xl font-devanagari mb-3 animate-float"
              style={{
                color: "oklch(0.82 0.14 82)",
                textShadow: "0 0 30px oklch(0.68 0.20 50 / 0.5)",
                animationDuration: "5s",
              }}
            >
              ॐ
            </div>
            <h3
              className="font-display text-lg tracking-widest uppercase mb-1"
              style={{ color: "oklch(0.93 0.08 68)" }}
            >
              Aghanzar Mahadev Temple
            </h3>
            <p
              className="font-devanagari text-xl"
              style={{ color: "oklch(0.70 0.06 58)" }}
            >
              हर हर महादेव
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {[
              "#about",
              "#darshan",
              "#festivals",
              "#gallery",
              "#puja",
              "#reach",
              "#prayers",
              "#contact",
            ].map((href) => (
              <a
                key={href}
                href={href}
                className="text-xs font-sans font-semibold tracking-widest uppercase transition-colors"
                style={{ color: "oklch(0.60 0.04 55)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color =
                    "oklch(0.82 0.14 82)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color =
                    "oklch(0.60 0.04 55)";
                }}
              >
                {href.replace("#", "")}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-5 mb-8">
            {[
              {
                Icon: SiFacebook,
                label: "Facebook",
                url: "https://facebook.com",
              },
              {
                Icon: SiInstagram,
                label: "Instagram",
                url: "https://instagram.com",
              },
              { Icon: SiYoutube, label: "YouTube", url: "https://youtube.com" },
            ].map(({ Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "oklch(0.68 0.20 50 / 0.12)",
                  border: "1px solid oklch(0.68 0.20 50 / 0.25)",
                  color: "oklch(0.70 0.06 58)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "oklch(0.68 0.20 50 / 0.25)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "oklch(0.82 0.14 82)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "oklch(0.68 0.20 50 / 0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "oklch(0.70 0.06 58)";
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div
            className="h-px mb-6"
            style={{ background: "oklch(0.68 0.20 50 / 0.12)" }}
          />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans">
            <p style={{ color: "oklch(0.50 0.04 50)" }}>
              © 2026 Aghanzar Mahadev Temple. All Rights Reserved.
            </p>
            <p
              className="flex items-center gap-1"
              style={{ color: "oklch(0.50 0.04 50)" }}
            >
              Built with{" "}
              <Heart
                size={12}
                fill="currentColor"
                style={{ color: "oklch(0.68 0.20 50)" }}
                aria-label="love"
              />{" "}
              using{" "}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors"
                style={{ color: "oklch(0.68 0.20 50)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color =
                    "oklch(0.82 0.14 82)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color =
                    "oklch(0.68 0.20 50)";
                }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
