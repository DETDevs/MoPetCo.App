/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.7s ease-in-out forwards",
        "bounce-in": "bounceIn 1s ease-out forwards",
        "puppy-fadeder": "puppyFadeDER 1s ease-out forwards",
        "puppy-fadeizq": "puppyFadeIZQ 1s ease-out forwards",
        'fade-in-Img': 'fadeInImg 1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.6 },
        },
        puppyFadeDER: {
          "0%": { opacity: 0, transform: "scale(0.7) translateX(100px)" },
          "100%": { opacity: 1, transform: "scale(1) translateY(0)" },
        },
        puppyFadeIZQ: {
          "0%": { opacity: 0, transform: "scale(0.7) translateX(-100px)" },
          "100%": { opacity: 1, transform: "scale(1) translateY(0)" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.5)", opacity: 0 },
          "50%": { transform: "scale(1.1)", opacity: 0.8 },
          "100%": { transform: "scale(1)", opacity: 0.6 },
        },
        fadeInImg: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
