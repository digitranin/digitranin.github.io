/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        glossy: "0 4px 32px 0 rgba(100,136,255,0.12), 0 1.5px 6px 0 rgba(240,90,175,0.08)"
      },
      colors: {
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843"
        },
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          600: "#2563eb",
          700: "#1d4ed8",
          900: "#1e3a8a"
        }
      }
    }
  },
  plugins: [],
}