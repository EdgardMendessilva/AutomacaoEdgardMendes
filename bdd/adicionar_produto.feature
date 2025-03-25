Feature: Adicionar Produto ao Carrinho
  Como um usuário logado
  Eu quero adicionar um produto ao carrinho
  Para que eu possa finalizar minha compra

  Scenario: Adicionar um produto ao carrinho
    Given que estou logado no site
    When eu seleciono o produto "Sauce Labs Backpack"
    And eu clico em "Add to cart"
    Then o ícone do carrinho deve exibir "1" item