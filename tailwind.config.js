const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        text: "rgb(var(--color-text) / <alpha-value>)",
        theme1: "rgb(var(--color-almond) / <alpha-value>)",
        theme2: "rgb(var(--color-snowbound) / <alpha-value>)",
        theme3: "rgb(var(--color-blazing) / <alpha-value>)",
        theme4: "rgb(var(--color-apricot) / <alpha-value>)",
        theme5: "rgb(var(--color-marsala) / <alpha-value>)",
        theme6: "rgb(var(--color-grey) / <alpha-value>)",
        theme7: "rgb(var(--color-deeper1) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['var(--font-custom)', ...defaultTheme.fontFamily.sans],
        comfortaa: ['ComfortaaLight', 'ComfortaaRegular'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
