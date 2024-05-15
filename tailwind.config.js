/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "primary-color": "var(--primary-color)",
      "clr-scissors-gradient": "var(--clr-scissors-gradient)",
      "clr-paper-gradient": "var(--clr-paper-gradient)",
      "clr-rock-gradient": "var(--clr-rock-gradient)",
      "clr-lizard-gradient": "var(--clr-lizard-gradient)",
      "clr-cyan-gradient": "var(--clr-cyan-gradient)",
      "clr-dark-text": "var(--clr-dark-text)",
      "clr-score-text": "var(--clr-score-text)",
      "clr-header-outline": "var(--clr-header-outline)",
      "clr-radial-gradient-from": "var(--clr-radial-gradient-from)",
      "clr-radial-gradient-to": "var(--clr-radial-gradient-to)",
      'black-rgba': 'rgba(0, 0, 0, 0.5)',

    },
    fontFamily:{
      "Nunito":  "Nunito Sans, sans-serif",

    }
  },
  plugins: [],
}

