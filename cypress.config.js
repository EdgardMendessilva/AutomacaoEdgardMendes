const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js", // Define que os arquivos .cy.js serão usados como specs
    supportFile: "cypress/support/e2e.js", // Define o arquivo de suporte
  },
});