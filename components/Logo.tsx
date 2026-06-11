interface LogoProps {
  className?: string;
  variant?: "full" | "mark";
}

export default function Logo({ className = "", variant = "full" }: LogoProps) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label="AV Cosmetic"
      >
        <path d="M26 2 L50 26 L26 50 L2 26 Z" stroke="currentColor" strokeWidth="0.9" />
        <path d="M26 10 L42 26 L26 42 L10 26 Z" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
        <text
          x="26"
          y="31"
          textAnchor="middle"
          fontSize="19"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontStyle="italic"
          fill="currentColor"
        >
          AV
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 174 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="AV Cosmetic"
    >
      {/* Diamond frame */}
      <path d="M26 2 L50 26 L26 50 L2 26 Z" stroke="currentColor" strokeWidth="0.85" />
      {/* Inner accent diamond */}
      <path d="M26 10 L42 26 L26 42 L10 26 Z" stroke="currentColor" strokeWidth="0.28" opacity="0.28" />
      {/* Tiny pip at each cardinal point */}
      <circle cx="26" cy="2" r="1.1" fill="currentColor" opacity="0.5" />
      <circle cx="50" cy="26" r="1.1" fill="currentColor" opacity="0.5" />
      <circle cx="26" cy="50" r="1.1" fill="currentColor" opacity="0.5" />
      <circle cx="2" cy="26" r="1.1" fill="currentColor" opacity="0.5" />

      {/* AV monogram inside diamond */}
      <text
        x="26"
        y="31.5"
        textAnchor="middle"
        fontSize="20"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontStyle="italic"
        fill="currentColor"
      >
        AV
      </text>

      {/* Vertical separator */}
      <line x1="66" y1="14" x2="66" y2="42" stroke="currentColor" strokeWidth="0.55" opacity="0.2" />

      {/* AV brand name */}
      <text
        x="77"
        y="31"
        fontSize="26"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontStyle="italic"
        fill="currentColor"
      >
        AV
      </text>

      {/* COSMETIC sub-label */}
      <text
        x="78"
        y="46"
        fontSize="7"
        fontFamily="'DM Sans', system-ui, -apple-system, sans-serif"
        letterSpacing="5.5"
        fill="currentColor"
        opacity="0.55"
        fontWeight="500"
      >
        COSMETIC
      </text>
    </svg>
  );
}
