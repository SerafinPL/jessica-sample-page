/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],

  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      firstRow: {
        A1: '#F6F7F8',
        A3: '#C8CCD414',
        A4: '#C8CCD41A',
        A5: '#072635',
        scrollFront: '#E3E4E6',
      },
      secRow: {
        A1: '#FFE6F1',
        A2: '#E0F3FA',
        A3: '#FFE6E9',
        A5: '#F4F0FE',
        A7: '#CBC8D4',
      },
      thrRow: {
        A1: '#7E6CAB',
        A2: '#8C6FE6',
        A3: '#C26EB4',
        A4: '#E66FD2',
        active: '#01F0D0',
        A7: '#D8FCF7',
      },
      lastRow: {
        borderGrey: '#EDEDED',
        A2: '#707070',
      },

      // ...
    }
  },
  plugins: [
    require('preline/plugin'),
  ],
};
