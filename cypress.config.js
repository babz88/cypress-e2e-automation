const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
     chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io"], // Common cause of Saucedemo hangs
    // ...other settings
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--disable-gpu');
          launchOptions.args.push('--remote-debugging-address=127.0.0.1');
        }
        return launchOptions;
      });
      // Additional logic here
    },
    experimentalMemoryManagement: true, // Optimizes memory clearing
    numTestsKeptInMemory: 0, // Reduces footprint by not storing snapshots
  }
});

