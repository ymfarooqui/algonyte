import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name}: ${siteConfig.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #E0F7FF 0%, #FFFFFF 55%, #FFFFFF 100%)",
          fontFamily: "sans-serif",
          color: "#111827",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#0F4C81",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: 999,
                background: "#38BDF8",
              }}
            />
          </div>
          <div style={{ fontSize: 36, fontWeight: 600, color: "#0F4C81" }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -1,
              maxWidth: 980,
            }}
          >
            <span>Affordable websites built for</span>
            <span style={{ color: "#0F4C81" }}>clear customer journeys.</span>
          </div>
          <div style={{ fontSize: 28, color: "#6B7280", maxWidth: 900 }}>
            Website builds, audits, and ongoing care for small businesses.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#0F4C81",
            fontWeight: 500,
          }}
        >
          <span>{siteConfig.url.replace("https://", "")}</span>
          <span style={{ color: "#6B7280" }}>{siteConfig.tagline}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
