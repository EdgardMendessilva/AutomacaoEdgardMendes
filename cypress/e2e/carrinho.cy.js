describe('Adicionar Produto ao Carrinho', () => {
    it('Deve adicionar um produto ao carrinho', () => {
      
      cy.visit('https://www.saucedemo.com');
      cy.wait(2000);

      // Faz login com o usuário padrão 'standard_user'
      cy.get('#user-name').type('standard_user');  
      cy.get('#password').type('secret_sauce');  
      cy.get('#login-button').click();
  
      // Valida a resposta da API de login, esperando 405 (Method Not Allowed)
      cy.request({
        method: 'POST',
        url: 'https://www.saucedemo.com/api/v1/login',
        body: {
          username: 'standard_user',
          password: 'secret_sauce',
        },
        failOnStatusCode: false,  // Evita que o teste falhe devido ao 405
      }).then((response) => {
        expect(response.status).to.eq(405);  // Verifica se o status da resposta é 405
      });
  
      // Defina o nome do produto
      const produto1 = 'Sauce Labs Backpack';
  
      // Selecione o produto e adicione ao carrinho
      cy.contains(produto1).click();  // Selecione o produto na página de inventário
      cy.get('.btn_inventory').click();  // Adiciona o produto ao carrinho
  
      // Verifica se o produto está no carrinho
      cy.get('.shopping_cart_badge').should('have.text', '1');
    });
});
