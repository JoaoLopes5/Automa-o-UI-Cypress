const { defineConfig } = require("cypress");
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  projectId: "jysd74",
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/#',
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
      // implement node event listeners here
    },
  },
});
