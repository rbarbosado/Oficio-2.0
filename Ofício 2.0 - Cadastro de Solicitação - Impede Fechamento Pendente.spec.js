/// [Script version: 0.1]
/// [Script created: rbarbosado@minsait.com]
// <reference types="Cypress" />

describe('Oficio 2.0', function () {
  it('verifica o título da aplicação', function () {
    cy.visit('http://10.129.201.70:7030/processum2webOficio/?login=TECNICA#')
    cy.title().should('be.equal', 'Ofício 2.0')
  })

  describe('Cadastro de Solicitação', function () {
    it('Cadastro de Solicitação', function () {
      cy.get('#trigger').click()
      cy.get('#formMenu > :nth-child(6) > :nth-child(1) > :nth-child(1)').click()
      cy.get('.mp-level-open > :nth-child(6) > :nth-child(1) > :nth-child(1)').click()
      cy.get('a[href*="#"]').contains('Tipo de Solicitação').click()
      cy.get('#tipoDeSolicitacaoFiltroForm').contains('Novo').click()
      cy.get('#tipoDeSolicitacaoCadastroForm').contains('Nome').click().type('TESTE AUTOMACAO')
      cy.get('#tipoDeSolicitacaoCadastroForm').contains('Impede Fechamento Pendente').click()
      cy.get('#tipoDeSolicitacaoCadastroForm').contains('Salvar').click()
    })
  })
})