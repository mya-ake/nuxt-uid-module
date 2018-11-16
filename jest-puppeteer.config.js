module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    command: 'yarn start:nuxt',
    port: 3000,
    launchTimeout: 50000,
  },
};
