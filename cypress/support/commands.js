// cypress/support/commands.js

Cypress.Commands.add('campoUsuario', () => cy.get('#user-name'));
Cypress.Commands.add('campoSenha', () => cy.get('#password'));
Cypress.Commands.add('botaoLogin', () => cy.get('#login-button'));


Cypress.Commands.add('produto', (nomeProduto) => cy.contains(nomeProduto));
Cypress.Commands.add('botaoAdicionarAoCarrinho', () => cy.contains('Add to cart'));


Cypress.Commands.add('iconeCarrinho', () => cy.get('.shopping_cart_badge'));
Cypress.Commands.add('botaoCarrinho', () => cy.get('.shopping_cart_link'));
Cypress.Commands.add('botaoCheckout', () => cy.get('[data-test="checkout"]'));


Cypress.Commands.add('campoNome', () => cy.get('#first-name'));
Cypress.Commands.add('campoSobrenome', () => cy.get('#last-name'));
Cypress.Commands.add('campoCep', () => cy.get('#postal-code'));
Cypress.Commands.add('botaoContinuar', () => cy.get('[data-test="continue"]'));
Cypress.Commands.add('botaoFinalizar', () => cy.get('[data-test="finish"]'));


Cypress.Commands.add('mensagemSucesso', () => cy.contains('Thank you for your order!'));
Cypress.Commands.add('mensagemErro', () => cy.contains('Error: First Name is required'));


Cypress.Commands.add('preencherUsuario', (usuario = 'standard_user') => {
    cy.campoUsuario().type(usuario);
});

Cypress.Commands.add('preencherSenha', (senha = 'secret_sauce') => {
    cy.campoSenha().type(senha);  
  });
  
  Cypress.Commands.add('SelecionarProduto', (produto1 = 'Sauce Labs Backpack') => {
    cy.contains(produto1).click();  
  });


  Cypress.Commands.add('iconeCarrinho', () => {
    return cy.get('.shopping_cart_badge'); 
});


  
Cypress.Commands.add('testeComando', () => {
    console.log("Comando Cypress carregado corretamente!");
});
