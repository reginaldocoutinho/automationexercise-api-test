# 🚀 Automation Exercise - API Testing with Cypress

Este projeto é uma suíte de testes automatizados focada na camada de API da plataforma [Automation Exercise](https://automationexercise.com). O objetivo é garantir que os endpoints de produtos, marcas e usuários estejam funcionando conforme as regras de negócio.

## 🛠️ Tecnologias e Ferramentas

*   **Framework:** [Cypress](https://www.cypress.io)
*   **Linguagem:** JavaScript (Node.js)
*   **Relatórios:** Interface Nativa do Cypress
*   **Integração:** Validação de Schema JSON e status codes personalizados.

## 📌 Diferenciais deste Projeto

Diferente de APIs REST tradicionais, a API do Automation Exercise muitas vezes retorna o corpo da resposta como uma *string*. Este projeto implementa:
1.  **Parsing Dinâmico:** Conversão de strings para objetos JSON usando `JSON.parse()`.
2.  **Validação Dupla:** Verificação do Status HTTP (ex: 200) e do `responseCode` interno da API.
3.  **Fluxos Condicionais:** Testes que validam tanto o sucesso quanto as mensagens de erro (ex: conta não encontrada).

## 📁 Estrutura de Pastas

```text
├── cypress/
│   ├── e2e/           # Scripts de teste (.cy.js)
│   ├── fixtures/      # Massa de dados (JSON)
│   └── support/       # Comandos customizados e configurações
├── cypress.config.js  # Configurações do Cypress
└── package.json       # Dependências e scripts do projeto
