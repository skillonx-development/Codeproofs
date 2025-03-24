export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B4D1E",
        secondary: "#ffffff",
        text: "#ffffff",
        accent: "#23DB5D",
        background: "#000000",
        cardBg: "#0D0D0D", // Dark card background
        cardBorder: "#1A1A1A", // Subtle border color
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
      },
      boxShadow: {
        card: "0px 4px 15px rgba(0, 0, 0, 0.3)", // Soft shadow for cards
      },
      borderRadius: {
        card: "12px", // Slightly rounded corners for cards
      },
      spacing: {
        cardPadding: "1.5rem", // Consistent padding for cards
      },
    },
  },
  plugins: [],
};
