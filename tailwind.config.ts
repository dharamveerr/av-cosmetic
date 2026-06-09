import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bone: "#F5EFE6",
        mist: "#E8DFD3",
        ink: "#1A1410",
        clay: "#B8896E",
        gold: "#A88656",
        moss: "#2F4234",
        ash: "#6B5F54"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        widest2: "0.32em"
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};
export default config;
