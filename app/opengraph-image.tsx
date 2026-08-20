import { ImageResponse } from "next/og";

export const alt = "NextGen Tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1B2A41",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 104,
            fontWeight: 600,
            color: "#F8FAFC",
            letterSpacing: "-0.02em",
          }}
        >
          <span>NEXT</span>
          <span style={{ margin: "0 24px", fontWeight: 200, color: "#94A3B8" }}>
            |
          </span>
          <span>GEN</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
