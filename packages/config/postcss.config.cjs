module.exports = {
  plugins: {
    '@pandacss/dev/postcss': {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
