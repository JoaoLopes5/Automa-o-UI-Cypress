const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/#",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "mochawesome-report",
      overwrite: false,
      reportFilename: "index.html",
      html: true,
      json: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
