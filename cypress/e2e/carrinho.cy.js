describe('Adicionar Produto ao Carrinho', () => {
    it('Deve adicionar um produto ao carrinho', () => {
      
      cy.visit('https://www.saucedemo.com');
      cy.wait(2000);

      
      cy.get('#user-name').type('standard_user');  
      cy.get('#password').type('secret_sauce');  
      cy.get('#login-button').click();
  
     
      cy.request({
        method: 'POST',
        url: 'https://www.saucedemo.com/api/v1/login',
        body: {
          username: 'standard_user',
          password: 'secret_sauce',
        },
        failOnStatusCode: false, 
      }).then((response) => {
        expect(response.status).to.eq(405);  
      });
  
      const produto1 = 'Sauce Labs Backpack';
  
  
      cy.contains(produto1).click();  
      cy.get('.btn_inventory').click(); 
  
   
      cy.get('.shopping_cart_badge').should('have.text', '1');
    });
});
