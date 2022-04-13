/// [Script version: 0.1]
/// [Script created: rbarbosado@minsait.com]
/// <reference types="Cypress" />

describe('Oficio 2.0', function () {
  it('verifica o título da aplicação', function () {
    cy.visit('http://10.129.201.70:7040/processum2webOficio/?login=TECNICA#')
    cy.title().should('be.equal', 'Ofício 2.0')
  })

  describe('Acessar a aba de "Partes"', function () {
    it('Acessar a aba de "Partes"', function () {
      cy.get('#trigger').click()
      cy.contains('Módulo').click()
      cy.get('a[href*="#"]').contains('Ofício').click()
      cy.get('input[id="moduloOficioForm:numOficioSaida"]').type('97')
      cy.get('input[id="moduloOficioForm:dataAnoCadastro"]').type('2021')
      cy.get('[id="moduloOficioForm:filtrar"]').click()
      cy.contains('97/2021').click()
      cy.get('[data-index="1"] > a').contains('Partes').click()
      cy.get('[id="tabView:abaPartesForm:btnAdicionarNovoItemPartes"]').contains('Inserir novo item').click()
      cy.get('.mt-0 > :nth-child(5)').type('07188600805')
      cy.get('[id="tabView:inserirNovoItemDialogForm:tabViewInserirNovoItemAbaPartesDialog:j_idt1596"]').click()
      cy.get('[id="tabView:inserirNovoItemDialogForm:tabViewInserirNovoItemAbaPartesDialog:j_idt1596"]').select("SP")
    })
  })
})