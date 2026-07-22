import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Corpo/UI: grotesca humanista, quente e legível
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Mono: eyebrows, datas, detalhes técnicos
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        // Display editorial com caráter (Fraunces)
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      colors: {
        // Superfície: preto-quente / espresso (não o zinco frio)
        ink: {
          950: "#0c0a08",
          900: "#15110d",
          800: "#1f1913",
          700: "#2c241c",
          600: "#463a2e",
        },
        // Acento de marca: âmbar / ouro-mel (calor, artesania)
        brand: {
          DEFAULT: "#eab963",
          50: "#fdf7ed",
          100: "#faecd0",
          200: "#f2d29a",
          300: "#eab963",
          400: "#e0a03f",
          500: "#c9822a",
          600: "#a3661f",
        },
        // Secundário quente: terracota suave (uso raro, pares análogos)
        warm: {
          400: "#e8896b",
          500: "#d96f4c",
        },
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(to right, rgba(255,248,236,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,248,236,0.035) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(234, 185, 99, 0.16), transparent 70%)",
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(0.9)" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 24px -8px rgba(234, 185, 99, 0.40)",
        "glow-md": "0 0 60px -14px rgba(234, 185, 99, 0.50)",
        card: "0 1px 0 0 rgba(255,248,236,0.05) inset, 0 18px 48px -24px rgba(0,0,0,0.75)",
        lift: "0 28px 64px -28px rgba(0,0,0,0.85), 0 0 0 1px rgba(234,185,99,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
