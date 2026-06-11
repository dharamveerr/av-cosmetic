import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#1A1410",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Diamond outline via rotated square */}
        <div
          style={{
            position: "absolute",
            width: 18,
            height: 18,
            border: "1px solid rgba(245,239,230,0.85)",
            transform: "rotate(45deg)",
          }}
        />
        {/* AV monogram */}
        <span
          style={{
            color: "#F5EFE6",
            fontSize: 11,
            fontStyle: "italic",
            fontFamily: "Georgia, 'Times New Roman', serif",
            letterSpacing: "-0.03em",
            position: "relative",
            zIndex: 1,
            lineHeight: 1,
          }}
        >
          AV
        </span>
      </div>
    ),
    { ...size }
  );
}
