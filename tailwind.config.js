/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/renderer/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef8ff",
          100: "#dcf1ff",
          200: "#dcf1ff",
          300: "#6dcfff",
          400: "#20b7ff",
          500: "#009eff",
          600: "#007ddf",
          700: "#0063b4",
          800: "#005495",
          900: "#00457a",
          950: "#00294d",
        },
        secondary: {
          50: "#fffaeb",
          100: "#fff2c6",
          200: "#ffe288",
          300: "#ffce4a",
          400: "#ffb517",
          500: "#f99507",
          600: "#dd6e02",
          700: "#b74c06",
          800: "#943a0c",
          900: "#7a300d",
          950: "#461702",
        },
      },
      fontFamily: {
        Ubuntu: ["Ubuntu"],
        Poppins: ["Poppins"],
        "Open-Sans": ["Open Sans"],
      },
    },
  },
  plugins: [],
};
