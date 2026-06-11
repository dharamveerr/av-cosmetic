import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  // Load Fraunces italic from Google Fonts (variable font, italic axis)
  const font = await fetch(
    "https://fonts.gstatic.com/s/fraunces/v24/6NUh8FyLNQOQZAnv9bYEvDiIdE9Ea92uZm8Ez4YsAg.woff2"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "#F5EFE6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#1A1410",
            fontSize: 30,
            fontStyle: "italic",
            fontFamily: "Fraunces",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          AV
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: font,
          style: "italic",
          weight: 400,
        },
      ],
    }
  );
}
