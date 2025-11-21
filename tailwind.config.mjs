/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(16px) scale(0.98)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)"
          }
        }
      },
      animation: {
        "gradient-x": "gradient-x 10s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards"
      }
    }
  },
  plugins: []
};

export default config;
