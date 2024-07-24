module.exports = {
  preset: 'jest-puppeteer',
  testTimeout: 10000,
  globals: {
    URL: 'http://localhost:3000',
  },
};

