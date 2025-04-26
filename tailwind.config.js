/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Use CSS variables for theme-aware colors
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        
        // Your existing color palette
        app: {
          DEFAULT: '#FFFFFF', // light mode background
          dark: '#0F0F0F',    // dark mode background
        },
        white: "#FFFFFF",
        black: "#000000",
        orange: {
          60: "#CE8D63",
          65: "#DC9677",
          70: "#DAAC8D",
          80: "#E0BDB2",
          90: "#F2E1DB",
          95: "#F9F7F6",
          97: "#FAFAF3",
          99: "#FDFDFB",
        },
        dark: {
          6: "#0F0F0F",
          10: "#1A1A1A",
          12: "#191919",
          15: "#292929",
          20: "#333333",
          25: "#404040",
          30: "#4D4D4D",
          35: "#595959",
        },
        gray: {
          40: "#706965",
          50: "#81807E",
          70: "#B3B3B2",
          80: "#CACAC6",
          90: "#E6E6E6",
          95: "#F2F2F2",
          97: "#F7F7F7",
          99: "#FCFCFC",
        },
      },
      fontFamily: {
        // Reference CSS variables from your global.css
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        btn: "9999px",
      },
    },
  },
  plugins: [],
};