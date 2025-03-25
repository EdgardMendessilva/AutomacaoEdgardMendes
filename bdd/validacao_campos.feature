Feature: Validação de Campos Obrigatórios
  Como um usuário logado
  Eu quero ver mensagens de erro ao deixar campos obrigatórios em branco
  Para que eu possa corrigir meus dados antes de finalizar o checkout

  Scenario: Tentar finalizar o checkout sem preencher campos obrigatórios
    Given que estou logado no site
    And eu adicionei o produto "Sauce Labs Backpack" ao carrinho
    When eu acesso o carrinho
    And eu inicio o checkout
    And eu clico em "Continue" sem preencher os campos
    Then eu vejo a mensagem de erro "Error: First Name is required"