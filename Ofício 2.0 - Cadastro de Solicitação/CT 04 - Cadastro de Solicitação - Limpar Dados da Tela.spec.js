/// [Script version: 0.3]
/// [Script created: rbarbosado@minsait.com]
// <reference types="Cypress" />

describe('Oficio 2.0', function () {
  it('verifica o título da aplicação', function () {
    cy.visit('http://10.129.201.70:7030/processum2webOficio/?login=TECNICA#')
    cy.title().should('be.equal', 'Ofício 2.0')
  })

  describe('Cadastro de Solicitação - Limpar Dados da Tela', function () {
    it('Cadastro de Solicitação - Limpar Dados da Tela', function () {
      cy.get('#trigger').click().wait(1500) // Acessar Menu
      cy.get('#formMenu > :nth-child(6) > :nth-child(1) > :nth-child(1)').click().wait(1500) // Acessar opção de cadastro
      cy.get('.mp-level-open > :nth-child(6) > :nth-child(1) > :nth-child(1)').click().wait(1500) // Acessar opção de oficio
      cy.get('a[href*="#"]').contains('Tipo de Solicitação').click().wait(1500) // Acessar tipo de solicitação
      cy.get('#tipoDeSolicitacaoFiltroForm').contains('Nome').click().type('TESTE AUTOMACAO').wait(1500) // Clicar no campo para pesquisa de nome
      cy.get('#tipoDeSolicitacaoFiltroForm').contains('Limpar').click().wait(1500) // Clicar no botão Limpar

    })
  })
})