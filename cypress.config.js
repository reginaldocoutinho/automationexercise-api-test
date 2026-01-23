const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,               // Gera gráficos no relatório
    reportPageTitle: 'Relatório de Testes',
    embeddedScreenshots: true,  // Prints ficam dentro do HTML
    inlineAssets: true,         // Gera um único arquivo HTML (sem pastas externas)
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Ativa o plugin de geração de relatórios
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
