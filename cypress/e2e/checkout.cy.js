describe('Checkout Simples', () => {
    it('Deve finalizar o checkout com sucesso', () => {
        cy.visit('https://www.saucedemo.com');

        // Faz login
        cy.preencherUsuario(); // Usa o comando personalizado
        cy.preencherSenha();    // Usa o comando personalizado
        cy.botaoLogin().click();

        const produto1 = 'Sauce Labs Backpack';
  
        // Selecione o produto e adicione ao carrinho
        cy.SelecionarProduto(produto1);
        cy.botaoAdicionarAoCarrinho().click();
    

        // Acessa o carrinho e inicia o checkout
        cy.botaoCarrinho().click();
        cy.botaoCheckout().click();

        // Preenche os campos do checkout
        cy.campoNome().type('João');
        cy.campoSobrenome().type('Silva');
        cy.campoCep().type('12345');
        cy.botaoContinuar().click();

        // Finaliza o checkout
        cy.botaoFinalizar().click();

        // Verifica a mensagem de sucesso
        cy.mensagemSucesso().should('be.visible');
    });
});