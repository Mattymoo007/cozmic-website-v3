module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      titillium: ["Titillium Web", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },

  plugins: [require("@tailwindcss/forms")],
}
