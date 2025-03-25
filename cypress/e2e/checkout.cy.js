describe('Checkout Simples', () => {
    it('Deve finalizar o checkout com sucesso', () => {
        cy.visit('https://www.saucedemo.com');

        
        cy.preencherUsuario(); 
        cy.preencherSenha();  
        cy.botaoLogin().click();

        const produto1 = 'Sauce Labs Backpack';
  
        
        cy.SelecionarProduto(produto1);
        cy.botaoAdicionarAoCarrinho().click();
    

    
        cy.botaoCarrinho().click();
        cy.botaoCheckout().click();

    
        cy.campoNome().type('João');
        cy.campoSobrenome().type('Silva');
        cy.campoCep().type('12345');
        cy.botaoContinuar().click();

        
        cy.botaoFinalizar().click();


        cy.mensagemSucesso().should('be.visible');
    });
});