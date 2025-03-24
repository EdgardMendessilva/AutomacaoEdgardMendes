// cypress/support/commands.js

// Seletores da página de login
Cypress.Commands.add('campoUsuario', () => cy.get('#user-name'));
Cypress.Commands.add('campoSenha', () => cy.get('#password'));
Cypress.Commands.add('botaoLogin', () => cy.get('#login-button'));

// Seletores da página de produtos
Cypress.Commands.add('produto', (nomeProduto) => cy.contains(nomeProduto));
Cypress.Commands.add('botaoAdicionarAoCarrinho', () => cy.contains('Add to cart'));

// Seletores do carrinho
Cypress.Commands.add('iconeCarrinho', () => cy.get('.shopping_cart_badge'));
Cypress.Commands.add('botaoCarrinho', () => cy.get('.shopping_cart_link'));
Cypress.Commands.add('botaoCheckout', () => cy.get('[data-test="checkout"]'));

// Seletores da página de checkout
Cypress.Commands.add('campoNome', () => cy.get('#first-name'));
Cypress.Commands.add('campoSobrenome', () => cy.get('#last-name'));
Cypress.Commands.add('campoCep', () => cy.get('#postal-code'));
Cypress.Commands.add('botaoContinuar', () => cy.get('[data-test="continue"]'));
Cypress.Commands.add('botaoFinalizar', () => cy.get('[data-test="finish"]'));

// Mensagens de sucesso e erro
Cypress.Commands.add('mensagemSucesso', () => cy.contains('Thank you for your order!'));
Cypress.Commands.add('mensagemErro', () => cy.contains('Error: First Name is required'));

//Usuário e senha
Cypress.Commands.add('preencherUsuario', (usuario = 'standard_user') => {
    cy.campoUsuario().type(usuario);
});

Cypress.Commands.add('preencherSenha', (senha = 'secret_sauce') => {
    cy.campoSenha().type(senha);  
  });
  
  Cypress.Commands.add('SelecionarProduto', (produto1 = 'Sauce Labs Backpack') => {
    cy.contains(produto1).click();  
  });
  
Cypress.Commands.add('testeComando', () => {
    console.log("Comando Cypress carregado corretamente!");
});
