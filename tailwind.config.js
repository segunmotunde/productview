/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          darkcyan: "hsl(var(--darkcyan))",
          cream: "hsl(var(--cream))",
        },
        neutral: {
          veryDarkBlue: "hsl(var(--veryDarkBlue))",
          daekGrayishBlue: "hsl(var(--daekGrayishBlue))",
          white: "hsl(var(--white))",
        },
      },
      backgroundImage: {
        large: "url('./assets/images/image-product-desktop.jpg')",
        small: "url('./assets/images/image-product-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
