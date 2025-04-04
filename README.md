# Processo Seletivo Analista de Automação Sr

[![Cypress Tests](https://github.com/EdgardMendessilva/AutomacaoEdgardMendes/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/EdgardMendessilva/AutomacaoEdgardMendes/actions)

Este projeto contém testes automatizados para a aplicação [SauceDemo](https://www.saucedemo.com).

## 📋 Pré-requisitos
- Node.js 16+
- npm 9+ ou yarn
- Git

## 🛠 Tecnologias e Versões
| Tecnologia       | Versão   |
|------------------|----------|
| Node.js          | 18.16.0  |
| npm              | 9.5.1    |
| Cypress          | 12.17.1  |
| cypress-xpath    | 2.0.1    |
| @cypress/grep    | 3.1.3    |

## 🚀 Instalação
```bash
git clone git@github.com:EdgardMendessilva/AutomacaoEdgardMendes.git
cd AutomacaoEdgardMendes
npm install

⚙️ Configuração

1. Variáveis de Ambiente
Crie um arquivo .env na raiz:
CYPRESS_USER=standard_user
CYPRESS_PASSWORD=secret_sauce

2. GitHub Actions
Configurado automaticamente no arquivo .github/workflows/cypress-tests.yml

▶️ Execução
Comando	Descrição
npx cypress open	Abre o Cypress no modo interativo
npx cypress run	Executa todos os testes em headless
npx cypress run --browser firefox	Executa em navegador específico
npx cypress run --spec "cypress/e2e/checkout.cy.js"	Executa teste específico

📂 Estrutura do Projeto

cypress/
├── e2e/
│   ├── carrinho.cy.js
│   ├── checkout.cy.js
│   └── validacao_campos.cy.js
├── fixtures/
├── support/
│   ├── commands.js
│   └── e2e.js
.github/
└── workflows/
    └── cypress-tests.yml

🔍 Padrões de Teste
Page Objects implícitos em commands.js

Custom commands para reutilização de código

Dados de teste isolados em fixtures

📊 CI/CD
Execução automática em push/pull request

Relatórios disponíveis na aba Actions

Artefatos: screenshots e vídeos salvos após cada execução

✉️ Contato
Edgard Nascimento Mendes da Silva
📞 (11) 95497-2242
📧 edgard.nascimento.mendes.silva@gmail.com
🔗 https://github.com/EdgardMendessilva