/// [Script version: 0.1]
/// [Script created: rbarbosado@minsait.com]
/// <reference types="Cypress" />

describe('Oficio 2.0', function () {
  it('verifica o título da aplicação', function () {
    cy.visit('http://10.129.201.70:7030/processum2webOficio/?login=TECNICA#')
    cy.title().should('be.equal', 'Ofício 2.0')
  })

  describe('Cadastro de Solicitação - Controle de Senha', function () {
    it('Cadastro de Solicitação - Controle de Senha', function () {
      cy.get('#trigger').click() // Acessar Menu
      cy.get('#formMenu > :nth-child(6) > :nth-child(1) > :nth-child(1)').click() // Acessar opção de cadastro
      cy.get('.mp-level-open > :nth-child(6) > :nth-child(1) > :nth-child(1)').click() // Acessar opção de oficio
      cy.get('a[href*="#"]').contains('Tipo de Solicitação').click()// Acessar tipo de solicitação
      cy.get('#tipoDeSolicitacaoFiltroForm').contains('Novo').click() // Clicar no botão novo
      cy.get('#tipoDeSolicitacaoCadastroForm').contains('Nome').click().type('TESTE AUTOMACAO') // Preencher informações do nome
      cy.get('#tipoDeSolicitacaoCadastroForm').contains('Controle de Senha').click()// Selecionar o checkbox de Controle de Senha
      cy.get('#tipoDeSolicitacaoCadastroForm').contains('Salvar').click() // Clicar no botão salvar
    })
  })
})