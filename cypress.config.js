const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results', // Onde os JSONs serão salvos
      overwrite: false,
      html: false, // Desative o HTML individual
      json: true,  // Ative o JSON individual
    },
  },
});
