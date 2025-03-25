Feature: Checkout Simples
  Como um usuário logado
  Eu quero finalizar o checkout
  Para que eu possa concluir minha compra

  Scenario: Finalizar o checkout com sucesso
    Given que estou logado no site
    And eu adicionei o produto "Sauce Labs Backpack" ao carrinho
    When eu acesso o carrinho
    And eu inicio o checkout
    And eu preencho os campos obrigatórios com:
      | Nome      | João  |
      | Sobrenome | Silva |
      | CEP       | 12345 |
    And eu clico em "Continue"
    And eu clico em "Finish"
    Then eu vejo a mensagem "Thank you for your order!"