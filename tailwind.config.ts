import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          500: '#7C3AED',
          600: '#6D28D9',
          700: '#5B21B6',   // main purple (buttons, links, headings accent)
          900: '#2E1065',
        },
        accent: {
          500: '#FB923C',
          600: '#F97316',   // orange CTA ("Get Free Quote", "Get Price Now")
          700: '#EA580C',
        },
        navy: {
          900: '#120C2E',   // footer background
          800: '#1B1440',
        },
        surface: {
          lavender: '#F7F5FF', // soft section backgrounds
          white: '#FFFFFF',
        },
        success: '#22C55E',
        warning: '#FBBF24',   // star ratings
        text: {
          heading: '#181245',
          body: '#5B5675',
          muted: '#8C87A3',
        },
      },
      borderRadius: {
        card: '1rem',      // rounded-2xl cards
        pill: '9999px',
        btn: '0.75rem',
      },
      boxShadow: {
        card: '0 4px 20px rgba(91, 33, 182, 0.06)',
        cardHover: '0 8px 30px rgba(91, 33, 182, 0.12)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%)',
        'gradient-promo': 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #DB2777 100%)',
        'gradient-logo': 'linear-gradient(135deg, #7C3AED 0%, #F97316 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      }
    },
  },
  plugins: [],
};

export default config;
