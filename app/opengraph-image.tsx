import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteConfig.title;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#121212",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, #7de112 0%, transparent 70%)",
            opacity: 0.5,
            display: "flex",
          }}
        />
        <p style={{ fontSize: 30, color: "rgba(255,255,255,0.5)", margin: 0 }}>Hello I&rsquo;m</p>
        <p style={{ fontSize: 96, fontWeight: 700, margin: "8px 0", lineHeight: 1 }}>{siteConfig.name}</p>
        <p style={{ fontSize: 36, margin: 0 }}>
          A Passionate <span style={{ color: "#7de112", fontWeight: 700 }}>Software Engineer</span>
        </p>
      </div>
    ),
    { ...size }
  );
}

export const dynamic = "force-static";
