/// [Script version: 0.1]
/// [Script created: rbarbosado@minsait.com]
// <reference types="Cypress" />

describe('Oficio 2.0', function () {
  it('verifica o título da aplicação', function () {
    cy.visit('http://10.129.201.70:7030/processum2webOficio/?login=TECNICA#')
    cy.title().should('be.equal', 'Ofício 2.0')
  })

  describe('Acessar a aba de "Partes"', function () {
    it('Acessar a aba de "Partes"', function () {
      cy.get('#trigger').click()
      cy.contains('Módulo').click()
      cy.get('a[href*="#"]').contains('Ofício').click()
      cy.get('input[id="moduloOficioForm:numOficioSaida"]').type('62')
      cy.get('input[id="moduloOficioForm:dataAnoCadastro"]').type('2021')
      cy.get('[id="moduloOficioForm:filtrar"]').click()
      cy.contains('62/2021').click()
      cy.get('[data-index="1"] > a').contains('Partes').click()
    })
  })
})