describe('Validação de Campos Obrigatórios', () => {
    it('Deve exibir mensagens de erro ao deixar campos obrigatórios em branco', () => {
        cy.visit('https://www.saucedemo.com');

        // Faz login
        cy.preencherUsuario(); // Usa o comando personalizado
        cy.preencherSenha();    // Usa o comando personalizado
        cy.botaoLogin().click();

        const produto1 = 'Sauce Labs Backpack';
  
     
        cy.SelecionarProduto(produto1);
        cy.botaoAdicionarAoCarrinho().click();
    

        // Acessa o carrinho e inicia o checkout
        cy.botaoCarrinho().click();
        cy.botaoCheckout().click();

        // Tenta continuar sem preencher os campos obrigatórios
        cy.botaoContinuar().click();

        // Verifica a mensagem de erro
        cy.mensagemErro().should('be.visible');
    });
});