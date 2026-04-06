import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
     
    
      colors: {
        primary: "#5f5e5e",
        "primary-dim": "#535252",
        "primary-container": "#e5e2e1",
        "primary-fixed": "#e5e2e1",
        "primary-fixed-dim": "#d6d4d3",

        secondary: "#6a5d4d",
        "secondary-dim": "#5d5142",
        "secondary-container": "#f1e0cc",
        "secondary-fixed": "#f1e0cc",
        "secondary-fixed-dim": "#e3d2be",

        tertiary: "#6c5c4d",
        "tertiary-dim": "#5f5142",
        "tertiary-container": "#fde7d3",
        "tertiary-fixed": "#fde7d3",
        "tertiary-fixed-dim": "#eed9c6",

        background: "#fbf9f4",
        surface: "#fbf9f4",
        "surface-dim": "#d9dbcf",
        "surface-bright": "#fbf9f4",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f4ed",
        "surface-container": "#efeee6",
        "surface-container-high": "#e8e9e0",
        "surface-container-highest": "#e2e3d9",

        error: "#9f403d",
        "error-dim": "#4e0309",
        "error-container": "#fe8983",

        outline: "#797c73",
        "outline-variant": "#b1b3a9",

        "inverse-surface": "#0e0e0c",
        "inverse-primary": "#ffffff",
        "inverse-on-surface": "#9e9d99",

        "surface-variant": "#e2e3d9",
        "surface-tint": "#5f5e5e",

        "on-primary": "#faf7f6",
        "on-primary-container": "#525151",
        "on-primary-fixed": "#403f3f",
        "on-primary-fixed-variant": "#5c5b5b",

        "on-secondary": "#fff8f2",
        "on-secondary-container": "#5c5041",
        "on-secondary-fixed": "#483e2f",
        "on-secondary-fixed-variant": "#665a4a",

        "on-tertiary": "#fff7f3",
        "on-tertiary-container": "#635445",
        "on-tertiary-fixed": "#504234",
        "on-tertiary-fixed-variant": "#6d5e4f",

        "on-background": "#31332c",
        "on-surface": "#31332c",
        "on-surface-variant": "#5e6058",

        "on-error": "#fff7f6",
        "on-error-container": "#752121",
      },

      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },

  plugins: [],
};

export default config;