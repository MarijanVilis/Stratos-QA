const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pzzruo",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    "defaultCommandTimeout": 5000
  },
});

