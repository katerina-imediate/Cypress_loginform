const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,

  e2e: {
    setupNodeEvents(on, config) {
     // supportFile: "cypress/support/e2e.ts"
    },
  },
});
