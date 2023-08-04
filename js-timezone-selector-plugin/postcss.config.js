const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const prefixWrap = require('postcss-prefixwrap');

module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    ...(process.env.NODE_ENV === 'production' ? [cssnano()] : []),
    prefixWrap('.ntsp'),
  ],
};
