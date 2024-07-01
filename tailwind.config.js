/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./**/*.js"],
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
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
