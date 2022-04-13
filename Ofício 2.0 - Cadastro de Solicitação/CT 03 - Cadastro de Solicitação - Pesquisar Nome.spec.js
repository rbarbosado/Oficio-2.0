/// [Script version: 0.1]
/// [Script created: rbarbosado@minsait.com]
/// <reference types="Cypress" />

describe('Oficio 2.0', function () {
  it('verifica o título da aplicação', function () {
    cy.visit('http://10.129.201.70:7030/processum2webOficio/?login=TECNICA#')
    cy.title().should('be.equal', 'Ofício 2.0')
  })

  describe('Cadastro de Solicitação - Pesquisar Tipo de Solic. por Nome', function () {
    it('Cadastro de Solicitação - Pesquisar Tipo de Solic. por Nome', function () {
      cy.get('#trigger').click() // Acessar Menu
      cy.get('#formMenu > :nth-child(6) > :nth-child(1) > :nth-child(1)').click()// Acessar opção de cadastro
      cy.get('.mp-level-open > :nth-child(6) > :nth-child(1) > :nth-child(1)').click() // Acessar opção de oficio
      cy.get('a[href*="#"]').contains('Tipo de Solicitação').click() // Acessar tipo de solicitação
      cy.get('#tipoDeSolicitacaoFiltroForm').contains('Nome').click().type('TESTE AUTOMACAO')
      cy.get('#tipoDeSolicitacaoFiltroForm').contains('Pesquisar').click()
    })
  })
})