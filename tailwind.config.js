/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: "#FFE45C",
          500: "hsl(46, 100%, 59%)",
        },
        gray: {
          50: "hsl(0, 0%, 96%)",
          100: "rgba(36, 36, 36, 0.35)",
          200: "hsla(0, 0%, 26%, 0.04);",
          300: "hsla(0, 0%, 26%, 0.5);",
          500: "hsla(0, 0%, 14%, 0.6);",
        },
        blue: {
          500: "rgb(0, 109, 143)",
        },
        white: "#FAFAFA",
      },
      screens: {
        md: "959.95px",
        // => @media (min-width: 959.95pxpx) { ... }
        sm: "599.95px",
        // => @media (min-width: 599.95pxpx) { ... }
      },
      boxShadow: {
        "3xl":
          "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
      },
      maxWidth: {
        containerMd: "960px",
        containerLg: "1280px",
      },
      spacing: {
        sm: "1rem",
        lg: "1.5rem",
      },
    },
  },
  plugins: [],
};
