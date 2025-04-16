/* eslint-disable no-undef */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(90deg, #008A90 0.38%, #00C2CB 99.24%)",
      },
      borderRadius: {
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      container: {
        center: true,
        screens: {
          "2xl": "1520px",
        },
        padding: "15px",
      },
      screens: {
        xs: "375px",
        sm: "480px",
        md: "576px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1200px",
        "3xl": "1460px",
        "4xl": "1650px",
      },
      fontFamily: {
        manrope: ["Manrope", "serif"],
        outfit: ["Outfit", "serif"],
        Marcellus: ["Marcellus", "serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#00C2CB",
        },
        textColor: "#2C2C2C",
        textLight: "#545454",
        borderColor: "#B3BAC5",
        textSecondary: "#1E1E1E",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        getStart_Shadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.12)",
        topArticles_Shadow: "0px 2px 16px 0px rgba(0, 0, 0, 0.08);",
        fromToStart_Shadow:
          " 0px 10px 12px 0px rgba(255, 255, 255, 0.26) inset, 0px 0px 0px 1px #000, 0px 0px 0px 4px rgba(0, 0, 0, 0.04)",
        inputShadow: "0px 0px 6px 0px rgba(13, 0, 85, 0.08)",
        offGrayShadow: "0px 1px 3px 0px rgba(237, 98, 20, 0.10)",
        calenderShadow: " 0px 9px 5.6px 0px rgba(0, 0, 0, 0.05)",
        tabShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
