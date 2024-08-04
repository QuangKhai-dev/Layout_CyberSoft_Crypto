/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./**/*.js"],
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      // screens: {
      //   sm: { max: "640px" }, // Tối đa 640px
      //   md: { max: "768px" }, // Tối đa 768px
      //   lg: { max: "1024px" }, // Tối đa 1024px
      //   xl: { max: "1280px" }, // Tối đa 1280px
      //   "2xl": { max: "1536px" }, // Tối đa 1536px
      // },
      container: {
        center: true,
      },
      backgroundImage: {
        "pink-gradient":
          "linear-gradient(90deg, #FF9DAB 1.51%, #FF4595 99.06%);",
      },
      flex: {
        2: "2 2 0%",
      },
    },
  },
  plugins: [],
};
