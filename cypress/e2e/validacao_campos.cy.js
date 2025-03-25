describe('Validação de Campos Obrigatórios', () => {
    it('Deve exibir mensagens de erro ao deixar campos obrigatórios em branco', () => {
        cy.visit('https://www.saucedemo.com');

        
        cy.preencherUsuario(); 
        cy.preencherSenha();   
        cy.botaoLogin().click();

        const produto1 = 'Sauce Labs Backpack';
  
     
        cy.SelecionarProduto(produto1);
        cy.botaoAdicionarAoCarrinho().click();
    

        
        cy.botaoCarrinho().click();
        cy.botaoCheckout().click();

        
        cy.botaoContinuar().click();

        
        cy.mensagemErro().should('be.visible');
    });
});